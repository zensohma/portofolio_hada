import { expect, test, type Page } from "@playwright/test";

async function collectHyperlinks(page: Page) {
  return page
    .locator("a[href]")
    .evaluateAll((anchors) =>
      Array.from(
        new Set(
          anchors
            .map((a) => a.getAttribute("href"))
            .filter((href): href is string => Boolean(href))
        )
      )
    );
}

test("page loads with no critical console or page errors", async ({ page }) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
  await expect(page.locator("h1")).toBeVisible();

  expect(consoleErrors, `console errors: ${consoleErrors.join(" | ")}`).toEqual(
    []
  );
  expect(pageErrors, `page errors: ${pageErrors.join(" | ")}`).toEqual([]);
});

test("all internal anchor links resolve to existing elements", async ({
  page,
}) => {
  await page.goto("/");
  const hrefs = await collectHyperlinks(page);

  const anchors = hrefs.filter(
    (href) => href.startsWith("#") && href.length > 1
  );
  expect(anchors.length).toBeGreaterThan(0);

  for (const href of anchors) {
    const target = href.slice(1);
    const present = await page.locator(`[id="${target}"]`).count();
    expect(present, `anchor "#${target}" should resolve to an element`).toBe(1);
  }
});

test("all external links respond successfully", async ({ page }) => {
  await page.goto("/");
  const hrefs = await collectHyperlinks(page);

  const externals = hrefs.filter(
    (href) => href.startsWith("http://") || href.startsWith("https://")
  );
  expect(externals.length).toBeGreaterThan(0);
  expect(
    hrefs.filter((href) => href.startsWith("mailto:")).length
  ).toBeGreaterThan(0);

  for (const url of externals) {
    const response = await page.request.get(url, { timeout: 30000 });
    expect(
      response.status(),
      `external link ${url} should respond < 400`
    ).toBeLessThan(400);
  }
});
