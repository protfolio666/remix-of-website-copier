type MarqueeItem = { name: string; logo: string };

export function Marquee({ items }: { items: MarqueeItem[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-background py-8">
      <div className="marquee flex w-max items-center gap-16 whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-16">
            <div className="flex items-center gap-5">
              <img
                src={item.logo}
                alt={`${item.name} logo`}
                className="h-12 w-auto object-contain opacity-80 md:h-16"
                loading="lazy"
              />
              <span className="font-display text-2xl uppercase tracking-wide md:text-4xl">
                {item.name}
              </span>
            </div>
            <span className="text-accent text-3xl md:text-5xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
