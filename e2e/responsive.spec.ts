import { expect, test, type Page } from "@playwright/test";

const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "publications",
  "achievements",
  "contact",
];

async function expectNoHorizontalOverflow(page: Page) {
  const report = await page.evaluate(() => {
    const doc = document.documentElement;
    const offenders = Array.from(document.querySelectorAll<HTMLElement>("body *"))
      .filter(
        (el) =>
          getComputedStyle(el).display !== "none" &&
          el.getBoundingClientRect().width > 0 &&
          el.getBoundingClientRect().right > window.innerWidth + 1
      )
      .slice(0, 8)
      .map((el) => {
        const rect = el.getBoundingClientRect();
        return `${el.tagName.toLowerCase()}.${String(el.className)} right=${Math.round(
          rect.right
        )}`;
      });
    return { scrollWidth: doc.scrollWidth, clientWidth: doc.clientWidth, offenders };
  });

  expect(
    report.scrollWidth,
    `scrollWidth (${report.scrollWidth}) should not exceed clientWidth (${report.clientWidth})`
  ).toBeLessThanOrEqual(report.clientWidth + 1);
  expect(report.offenders, `horizontal overflow offenders: ${report.offenders.join(" | ")}`).toEqual(
    []
  );
}

test("renders all main sections with a single h1 and semantic headings", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("h1")).toContainText("Muhammad Asy Syuhada");

  for (const id of SECTION_IDS) {
    await expect(page.locator(`#${id}`), `section #${id}`).toBeVisible();
  }

  await expect(page.locator("h2")).toHaveCount(SECTION_IDS.length - 1);
  await expect(page.locator("h3").first()).toBeVisible();
});

test("no horizontal overflow at this viewport", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(page.locator("h1")).toBeVisible();
  await expectNoHorizontalOverflow(page);
});

test("navigation links scroll to their sections", async ({ page }) => {
  await page.goto("/");

  const isNarrow = (await page.viewportSize()?.width ?? 0) < 1024;
  const menuButton = page.getByRole("button", { name: /menu/i });

  if (isNarrow) {
    await expect(menuButton).toBeVisible();
    await expect(page.locator("nav[aria-label='Primary']")).toBeHidden();
  } else {
    await expect(menuButton).toBeHidden();
    await expect(page.locator("nav[aria-label='Primary']")).toBeVisible();
  }

  for (const id of SECTION_IDS) {
    if (isNarrow) {
      await menuButton.click();
    }
    const nav = isNarrow
      ? page.locator("#mobile-menu")
      : page.locator("nav[aria-label='Primary']");
    const link = nav.locator(`a[href="#${id}"]`);
    await expect(link).toBeVisible();
    await link.click();
    await expect(page.locator(`#${id}`)).toBeInViewport();
  }
});

test("mobile menu opens and closes on navigation", async ({ page }) => {
  await page.goto("/");

  if ((await page.viewportSize()?.width ?? 0) >= 1024) {
    await expect(page.locator("#mobile-menu")).toBeHidden();
    return;
  }

  const menuButton = page.getByRole("button", { name: /open menu/i });
  await expect(menuButton).toBeVisible();
  await menuButton.click();
  await expect(page.locator("#mobile-menu")).toBeVisible();
  await expect(page.locator("#mobile-menu a")).toHaveCount(9);

  await page.locator("#mobile-menu a[href='#about']").click();
  await expect(page.locator("#mobile-menu")).toBeHidden();
  await expect(page).toHaveURL(/#about$/);
});