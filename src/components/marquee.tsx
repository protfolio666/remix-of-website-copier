export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-background py-6">
      <div className="marquee flex w-max gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display text-3xl uppercase md:text-5xl">{item}</span>
            <span className="text-accent text-3xl md:text-5xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
