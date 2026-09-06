import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/education";

export function Education() {
  return (
    <section
      id="education"
      aria-label="Education"
      className="py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div data-reveal>
          <SectionHeading title="Education" centered />
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
          {education.map((item, index) => (
            <Card
              key={`${item.institution}-${item.program}`}
              reveal={index * 100}
            >
              <CardHeader>
                <CardTitle>{item.program}</CardTitle>
                <CardDescription>
                  {item.institution} · {item.duration}
                </CardDescription>
              </CardHeader>
              {item.details && (
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-base leading-7 text-muted-foreground">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
