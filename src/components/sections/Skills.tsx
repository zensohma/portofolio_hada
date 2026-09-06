import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardTitle } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div data-reveal>
          <SectionHeading
            title="Skills"
            subtitle="Teknologi dan keahlian yang saya kuasai."
            centered
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card key={category.title} reveal={index * 75}>
              <CardContent className="flex flex-col gap-5">
                <CardTitle>{category.title}</CardTitle>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="accent">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
