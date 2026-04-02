import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import EggOptionCard from "./components/EggOptionCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grainy-overlay fixed inset-0 z-[100]"></div>
      <Header />
      <main className="flex-grow pt-28 pb-32 px-6 max-w-5xl mx-auto w-full flex flex-col min-h-screen">
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-xl">
              <span className="text-primary-container font-headline font-black text-xs tracking-[0.3em] uppercase block mb-2">
                Operation: Shell Break
              </span>
              <h2 className="text-on-surface font-headline font-black text-5xl md:text-7xl leading-none tracking-tighter uppercase italic">
                CHOOSE YOUR <br /> <span className="text-primary-container">INTENSITY</span>
              </h2>
            </div>
            <div className="bg-surface-container-high p-4 border-l-4 border-primary-container">
              <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1">Status</p>
              <p className="text-on-surface font-headline font-black text-xl italic tracking-tighter uppercase">
                Pot Temp: 212°F
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <EggOptionCard
            title="LIGHTWEIGHT"
            subtitle="Target: Soft Center"
            description="The runny yolk essential. Rapid infusion of nutrients with a delicate texture. Precision timing required for optimal flow."
            timeDisplay="06:00"
            eggCount={1}
            featured={true}
            type="lightweight"
            durationSeconds={360}
          />

          <div className="md:col-span-4 bg-surface-container-highest rounded-lg overflow-hidden relative group">
            {/* Keeping image usage minimal, using div background or standard img */}
            <img
              alt="Boiling egg"
              className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBVh0A6j2Cd2STAUtYevYERk1dFMV2NUVWj-wKMxANd3c1iiL__Q2JdMul-EsViYS0ZdzH6hYsBeayz-4hmW-a48TjrQALNv3FvQIIjGtz0EAfZVfHSX3XjwXc7DJbLGI48gyQuBy3396Z67IwQNLvFZekYO1nkWKiCzyamCiZJHD7zODwunXK2KOymiWmSNM4kr37d0ICdFh6CVAOgWhvXv2po-8jxPH_yTRkFUBW-znyPmfF2wb6YbB5dm7RQu-9RAFKJfpbB7k"
            />
            <div className="relative p-6 h-full min-h-[200px] flex flex-col justify-end bg-gradient-to-t from-surface via-transparent">
              <p className="text-primary-container font-headline font-black text-2xl tracking-tighter uppercase italic">
                Hydration Lock
              </p>
              <p className="text-on-surface text-xs font-bold uppercase tracking-wider opacity-60">
                Maintain structural integrity during extreme thermal exposure.
              </p>
            </div>
          </div>

          <EggOptionCard
            title="MIDWEIGHT"
            description="The performance standard. Jammy consistency. Solid white with a rich, semi-liquid core."
            timeDisplay="08:00"
            eggCount={1}
            type="midweight"
            durationSeconds={480}
          />

          <EggOptionCard
            title="HEAVYWEIGHT"
            description="Maximum stability. Fully set profile. Engineered for grab-and-go fuel on high-volume training days."
            timeDisplay="11:00"
            eggCount={2}
            type="heavyweight"
            durationSeconds={660}
          />
        </div>

        <div className="mt-8 bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-primary-container">tune</span>
            </div>
            <div>
              <h4 className="text-on-surface font-headline font-black uppercase text-lg tracking-tighter italic">
                Manual Override
              </h4>
              <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">
                Custom calibration for specific elevations
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <input className="accent-primary-container w-full md:w-48 bg-surface-container-high rounded-lg appearance-none h-2" type="range" />
            <span className="text-on-surface font-headline font-black text-xl italic tracking-tighter">00:00</span>
          </div>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
