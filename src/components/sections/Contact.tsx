import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact } from "@/data/contact";

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div data-reveal>
          <SectionHeading title={contact.heading} centered />
        </div>

        <Card reveal className="mx-auto max-w-2xl">
          <CardContent className="flex flex-col items-center gap-6 text-center">
            <p className="text-base leading-7 text-muted-foreground sm:text-lg">
              {contact.intro}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <Button href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                {contact.cta}
              </Button>
              {contact.links.map((link) => (
                <Button
                  key={link.label}
                  href={link.href}
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </Button>
              ))}
            </div>

            <a
              href={`tel:${contact.phone}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {contact.phone}
            </a>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
