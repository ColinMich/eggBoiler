import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#131313] backdrop-blur-xl bg-opacity-80 flex justify-between items-center px-6 h-20">
      <Link href="/" className="flex items-center gap-2 md:gap-3">
        <span className="material-symbols-outlined text-[#FF5722] text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
          fitness_center
        </span>
        <h1 className="font-headline font-black tracking-tighter uppercase text-xl md:text-3xl text-[#FF5722]">
          FORGE KINETIC
        </h1>
      </Link>
      <div className="hidden md:flex gap-8 items-center">
        <Link
          className="text-[#FF5722] font-headline font-bold text-sm tracking-widest uppercase transition-colors hover:text-[#FFB5A0]"
          href="/"
        >
          FORGE
        </Link>
        <Link
          className="text-[#E5E2E1] font-headline font-bold text-sm tracking-widest uppercase transition-colors hover:text-[#FFB5A0] opacity-60 hover:opacity-100"
          href="#"
        >
          STATS
        </Link>
        <Link
          className="text-[#E5E2E1] font-headline font-bold text-sm tracking-widest uppercase transition-colors hover:text-[#FFB5A0] opacity-60 hover:opacity-100"
          href="#"
        >
          GEAR
        </Link>
      </div>
      <div className="flex items-center md:hidden">
         {/* Top-right icon if needed on mobile, keeping empty or stats block */}
      </div>
      <div className="hidden md:flex items-center">
        <span className="material-symbols-outlined text-[#E5E2E1] transition-colors hover:text-[#FFB5A0] cursor-pointer">
          account_circle
        </span>
      </div>
    </header>
  );
}
