import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div data-reveal>
          <SectionHeading
            title="Experience"
            subtitle="Riwayat organisasi dan pengalaman."
            centered
          />
        </div>

        <ol className="relative mx-auto max-w-3xl space-y-8 border-l border-border pl-8 sm:pl-10">
          {experience.map((item, index) => (
            <li
              key={`${item.organization}-${item.position}`}
              className="relative"
            >
              <span
                aria-hidden="true"
                className="absolute -left-8 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background sm:-left-10"
              />
              <Card reveal={index * 100}>
                <CardHeader>
                  <CardTitle>{item.position}</CardTitle>
                  <CardDescription>
                    {item.organization} · {item.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-base leading-7 text-muted-foreground">
                    {item.description.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
