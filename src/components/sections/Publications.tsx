import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { publications } from "@/data/publications";

export function Publications() {
  return (
    <section
      id="publications"
      aria-label="Publications"
      className="py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div data-reveal>
          <SectionHeading
            title="Publikasi"
            subtitle="Karya tulis, artikel, dan karya ilmiah."
            centered
          />
        </div>

        {publications.length === 0 ? (
          <Card reveal className="mx-auto max-w-3xl text-center">
            <CardContent>
              <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                Coming Soon
              </p>
            </CardContent>
          </Card>
        ) : (
          <ol className="relative mx-auto max-w-3xl space-y-8 border-l border-border pl-8 sm:pl-10">
            {publications.map((publication, index) => (
              <li key={`${publication.title}-${publication.year}`} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-8 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background sm:-left-10"
                />
                <Card reveal={index * 100}>
                  <CardHeader>
                    <CardTitle>{publication.title}</CardTitle>
                    <CardDescription>
                      {publication.venue} · {publication.year}
                    </CardDescription>
                  </CardHeader>
                  {publication.description && (
                    <CardContent>
                      <p className="text-base leading-7 text-muted-foreground">
                        {publication.description}
                      </p>
                    </CardContent>
                  )}
                  {publication.link && (
                    <CardFooter>
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        Lihat publikasi
                      </a>
                    </CardFooter>
                  )}
                </Card>
              </li>
            ))}
          </ol>
        )}
      </Container>
    </section>
  );
}
