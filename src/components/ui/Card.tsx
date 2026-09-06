import type { CSSProperties, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: boolean;
  reveal?: boolean | number;
}

export function Card({
  children,
  className = "",
  padding = true,
  reveal = false,
}: CardProps) {
  const revealStyle =
    typeof reveal === "number"
      ? ({ "--reveal-delay": `${reveal}ms` } as CSSProperties)
      : undefined;

  return (
    <div
      className={`rounded-xl border border-border bg-card text-card-foreground shadow-[var(--shadow-card)] transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)] ${padding ? "p-6" : ""} ${className}`}
      {...(reveal ? { "data-reveal": "", style: revealStyle } : {})}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
  as?: "h3" | "h4" | "h5" | "h6";
}

export function CardTitle({
  children,
  className = "",
  as: Tag = "h3",
}: CardTitleProps) {
  return (
    <Tag
      className={`text-lg font-semibold leading-tight text-card-foreground ${className}`}
    >
      {children}
    </Tag>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({
  children,
  className = "",
}: CardDescriptionProps) {
  return (
    <p className={`mt-1 text-sm text-muted-foreground ${className}`}>
      {children}
    </p>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={className}>{children}</div>;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return (
    <div className={`mt-4 flex items-center gap-2 ${className}`}>
      {children}
    </div>
  );
}
