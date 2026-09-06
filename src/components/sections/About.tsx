import { Badge } from "@/components/ui/Badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/data/about";

export function About() {
  return (
    <section id="about" aria-label="About" className="py-20 sm:py-24 lg:py-28">
      <Container>
        <div data-reveal>
          <SectionHeading title={about.heading} centered />
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div
            data-reveal
            className="space-y-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
          >
            {about.biography.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <Card reveal>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base font-medium text-card-foreground">
                  {about.education.degree}
                </p>
                <CardDescription>
                  {about.education.institution} · {about.education.status}
                </CardDescription>
              </CardContent>
            </Card>

            <Card reveal={100}>
              <CardHeader>
                <CardTitle>Professional Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {about.professionalInterests.map((interest) => (
                    <Badge key={interest} variant="primary">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
