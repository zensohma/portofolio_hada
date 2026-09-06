import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="home" aria-label="Home">
      <Container>
        <div className="flex flex-col items-center py-24 text-center sm:py-32 lg:py-40">
          <Badge variant="accent">{profile.availability}</Badge>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 text-lg font-semibold text-primary sm:text-xl">
            {profile.role}
          </p>

          <div
            aria-hidden="true"
            className="mt-4 h-1 w-12 rounded-full bg-primary"
          />

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <Button href={profile.primaryCta.href} size="lg">
              {profile.primaryCta.label}
            </Button>
            <Button
              href={profile.secondaryCta.href}
              size="lg"
              variant="outline"
            >
              {profile.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
