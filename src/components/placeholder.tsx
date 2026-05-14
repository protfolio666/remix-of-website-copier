interface PlaceholderProps {
  label: string;
  aspect?: string;
  className?: string;
}

export function Placeholder({ label, aspect = "16/9", className = "" }: PlaceholderProps) {
  return (
    <div
      className={`placeholder-box relative flex items-center justify-center overflow-hidden rounded-sm border border-border ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-surface/40 via-transparent to-accent/10" />
      <div className="relative z-10 px-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Replace</p>
        <p className="mt-2 font-display text-2xl">{label}</p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{aspect}</p>
      </div>
    </div>
  );
}
