import { Badge } from "@/components/ui/Badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { CertificateFrame } from "@/components/ui/CertificateFrame";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <section
      id="achievements"
      aria-label="Achievements"
      className="py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div data-reveal>
          <SectionHeading
            title="Achievements"
            subtitle="Kompetisi, sertifikasi, dan penghargaan."
            centered
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <Card
              key={`${achievement.title}-${achievement.date}`}
              reveal={index * 75}
            >
              <CertificateFrame image={achievement.image} title={achievement.title} />
              <CardHeader>
                <Badge variant="primary">{achievement.date}</Badge>
                <CardTitle className="mt-3">{achievement.title}</CardTitle>
                <CardDescription>{achievement.organization}</CardDescription>
              </CardHeader>
              {achievement.description && (
                <CardContent>
                  <p className="text-base leading-7 text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
