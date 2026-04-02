import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-4 bg-[#131313] backdrop-blur-xl bg-opacity-90 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] z-50 pb-safe md:hidden">
      <Link
        href="/"
        className="flex flex-col items-center justify-center bg-[#FF5722] text-[#5F1500] rounded-sm px-6 py-1 active:scale-90 transition-transform"
      >
        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
          timer
        </span>
        <span className="font-headline font-bold text-[10px] uppercase tracking-widest">
          FORGE
        </span>
      </Link>
      <Link
        className="flex flex-col items-center justify-center text-[#AB8980] opacity-60 hover:opacity-100 transition-opacity active:scale-90"
        href="#"
      >
        <span className="material-symbols-outlined text-2xl">bar_chart</span>
        <span className="font-headline font-bold text-[10px] uppercase tracking-widest">
          STATS
        </span>
      </Link>
      <Link
        className="flex flex-col items-center justify-center text-[#AB8980] opacity-60 hover:opacity-100 transition-opacity active:scale-90"
        href="#"
      >
        <span className="material-symbols-outlined text-2xl">settings</span>
        <span className="font-headline font-bold text-[10px] uppercase tracking-widest">
          GEAR
        </span>
      </Link>
    </nav>
  );
}
