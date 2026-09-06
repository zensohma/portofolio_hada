export interface ContactLink {
  label: string;
  href: string;
}

export const contact = {
  heading: "Contact",
  intro:
    "Tertarik untuk berdiskusi, berkolaborasi, atau sekadar menyapa? Jangan ragu untuk menghubungi saya.",
  cta: "Get in Touch",
  email: "masysyuhadawork@gmail.com",
  phone: "628135656845",
  whatsapp: "https://wa.me/628135656845",
  links: [
    {
      label: "GitHub",
      href: "https://github.com/zensohma",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-asy-syuhada-786511244",
    },
  ] satisfies ContactLink[],
} as const;
