interface CertificateFrameProps {
  image?: string;
  title: string;
}

export function CertificateFrame({ image, title }: CertificateFrameProps) {
  return (
    <div className="relative mb-4 overflow-hidden rounded-lg border border-border bg-muted">
      <div
        aria-hidden="true"
        className="absolute inset-2 rounded border-2 border-dashed border-primary/40"
      />
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={title}
          className="relative m-2 aspect-[4/3] w-[calc(100%-1rem)] object-contain p-1"
        />
      ) : (
        <div className="relative m-2 flex aspect-[4/3] w-[calc(100%-1rem)] flex-col items-center justify-center gap-2 text-center">
          <svg
            className="h-10 w-10 text-primary/50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span className="text-xs font-medium text-muted-foreground">
            Certificate Preview
          </span>
        </div>
      )}
    </div>
  );
}