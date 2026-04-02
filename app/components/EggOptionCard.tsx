import Link from "next/link";

interface EggOptionCardProps {
  title: string;
  subtitle?: string;
  description: string;
  timeDisplay: string;
  eggCount: number;
  featured?: boolean;
  type: string;
  durationSeconds: number;
}

export default function EggOptionCard({
  title,
  subtitle,
  description,
  timeDisplay,
  eggCount,
  featured,
  type,
  durationSeconds,
}: EggOptionCardProps) {
  const targetUrl = `/timer?type=${type}&duration=${durationSeconds}&title=${title}`;

  if (featured) {
    return (
      <Link
        href={targetUrl}
        className="md:col-span-8 group cursor-pointer active:scale-95 transition-all duration-200 block"
      >
        <div className="relative overflow-hidden h-full bg-surface-container-low rounded-lg p-8 flex flex-col justify-between">
          <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
            <span className="material-symbols-outlined text-9xl text-on-surface">egg_alt</span>
          </div>
          <div>
            {subtitle && (
              <div className="flex items-center gap-2 mb-4">
                <span className="w-12 h-[2px] bg-primary-container"></span>
                <span className="text-on-surface-variant font-headline font-black tracking-widest uppercase text-sm">
                  {subtitle}
                </span>
              </div>
            )}
            <h3 className="text-on-surface font-headline font-black text-5xl italic tracking-tighter uppercase mb-2 group-hover:text-primary-container transition-colors">
              {title}
            </h3>
            <p className="text-on-surface-variant font-body max-w-md">{description}</p>
          </div>
          <div className="mt-12 flex items-end justify-between">
            <div className="flex flex-col">
              <span className="text-primary-container font-headline font-black text-6xl tracking-tighter">
                {timeDisplay}
              </span>
              <span className="text-on-surface-variant font-label font-bold text-[10px] uppercase tracking-widest">
                Minutes : Seconds
              </span>
            </div>
            <div className="kinetic-gradient p-4 rounded-md shadow-lg shadow-primary-container/20 group-hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined text-on-primary font-black"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                play_arrow
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={targetUrl}
      className="md:col-span-6 group cursor-pointer active:scale-95 transition-all duration-200 block"
    >
      <div className="h-full bg-surface-container-high rounded-lg p-8 flex flex-col justify-between border-b-4 border-transparent hover:border-primary-container transition-all">
        <div>
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-on-surface font-headline font-black text-4xl italic tracking-tighter uppercase group-hover:text-primary-container">
              {title}
            </h3>
            <div className="flex gap-1">
              {Array.from({ length: eggCount }).map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-primary-container text-3xl md:text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  egg
                </span>
              ))}
            </div>
          </div>
          <p className="text-on-surface-variant font-body mb-8">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-on-surface font-headline font-black text-5xl tracking-tighter">
              {timeDisplay}
            </span>
          </div>
          <button className="bg-surface-container-highest text-primary font-headline font-black px-6 py-2 rounded-sm text-sm tracking-widest hover:bg-primary hover:text-on-primary transition-colors">
            SELECT
          </button>
        </div>
      </div>
    </Link>
  );
}
