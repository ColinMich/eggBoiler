"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

function TimerContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const title = searchParams.get("title") || "MIDWEIGHT";
  const durationStr = searchParams.get("duration") || "480";
  const initialDuration = parseInt(durationStr, 10);

  const [timeLeft, setTimeLeft] = useState(initialDuration);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(initialDuration);
  };

  const goBack = () => {
    router.push("/");
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeDisplay = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  const progress = ((initialDuration - timeLeft) / initialDuration) * 100;
  const strokeDashoffset = 289 - (289 * progress) / 100;

  let temp = "98.5";
  let consistency = "SOLID";
  if (title === "LIGHTWEIGHT") {
    temp = "70.0";
    consistency = "RUNNY";
  } else if (title === "HEAVYWEIGHT") {
    temp = "100.0";
    consistency = "FIRM";
  }

  return (
    <>
      <div className="fixed inset-0 grit-overlay pointer-events-none z-0"></div>
      <div className="absolute top-32 left-10 opacity-10 select-none z-0">
        <span className="font-headline font-black text-9xl tracking-tighter leading-none italic">KINETIC</span>
      </div>
      <div className="absolute bottom-40 right-10 opacity-10 select-none text-right z-0">
        <span className="font-headline font-black text-9xl tracking-tighter leading-none italic">BRUTAL</span>
      </div>

      <main className="relative z-10 w-full flex flex-col items-center justify-center flex-grow px-6 overflow-hidden min-h-screen pb-32 pt-20">
        <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
            <circle
              className="text-surface-container-highest"
              cx="50"
              cy="50"
              fill="transparent"
              r="46"
              stroke="currentColor"
              strokeWidth="1.5"
            ></circle>
            <circle
              className="text-primary-container drop-shadow-[0_0_8px_rgba(255,87,34,0.6)] transition-all duration-1000 ease-linear"
              cx="50"
              cy="50"
              fill="transparent"
              r="46"
              stroke="currentColor"
              strokeDasharray="289"
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="square"
              strokeWidth="3"
            ></circle>
          </svg>
          <div className="text-center z-10 relative">
            <div className="flex items-baseline justify-center gap-1">
              <span
                className={`font-headline font-black text-[120px] md:text-[140px] leading-none tracking-tighter transition-colors ${
                  isActive ? "text-primary-container hiit-glow" : "text-primary-fixed-dim"
                }`}
              >
                {timeDisplay}
              </span>
            </div>
            {isActive && (
              <div className="mt-4 inline-flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-sm">
                <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                <span className="font-headline font-bold text-xs tracking-[0.2em] text-on-surface uppercase">
                  SESSION ACTIVE
                </span>
              </div>
            )}
            {!isActive && timeLeft !== initialDuration && timeLeft > 0 && (
              <div className="mt-4 inline-flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-sm">
                <span className="w-2 h-2 rounded-full bg-outline"></span>
                <span className="font-headline font-bold text-xs tracking-[0.2em] text-on-surface uppercase pr-2">
                  PAUSED
                </span>
                <button
                  onClick={resetTimer}
                  className="ml-2 font-headline font-bold text-[10px] text-primary underline"
                >
                  RESET
                </button>
              </div>
            )}
            {!isActive && timeLeft === initialDuration && (
              <div className="mt-4 inline-flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-sm">
                <span className="font-headline font-bold text-xs tracking-[0.2em] text-on-surface uppercase">
                  READY
                </span>
              </div>
            )}
            {timeLeft === 0 && (
              <div className="mt-4 inline-flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-sm">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                <span className="font-headline font-bold text-xs tracking-[0.2em] text-primary uppercase pr-2">
                  COMPLETE
                </span>
                <button
                  onClick={resetTimer}
                  className="ml-2 font-headline font-bold text-[10px] text-primary underline"
                >
                  RESET
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 text-center w-full max-w-sm">
          <div className="flex flex-col items-center mb-10">
            <span className="font-headline font-black text-4xl tracking-tighter text-on-surface uppercase">
              {title}
            </span>
            <span className="font-label font-bold text-[10px] tracking-[0.3em] text-outline mt-1 uppercase">
              {Math.ceil(initialDuration / 60)}-MINUTE INTENSITY
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10 text-left">
            <div className="bg-surface-container-low p-4 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary-container"></div>
              <span className="block font-label text-[10px] text-outline uppercase tracking-widest mb-1">
                Target Temp
              </span>
              <span className="font-headline font-black text-2xl text-on-background">
                {temp}<span className="text-sm">°C</span>
              </span>
            </div>
            <div className="bg-surface-container-low p-4 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-outline opacity-30 group-hover:bg-primary-container transition-colors"></div>
              <span className="block font-label text-[10px] text-outline uppercase tracking-widest mb-1">
                Consistency
              </span>
              <span className="font-headline font-black text-2xl text-on-background uppercase">
                {consistency}
              </span>
            </div>
          </div>

          <button
            onClick={timeLeft > 0 ? toggleTimer : goBack}
            className="group w-full py-6 bg-surface-container-highest hover:bg-primary-container transition-all duration-300 relative flex items-center justify-center overflow-hidden active:scale-95 border-none cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-primary to-primary-container transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}></div>
            <span className={`relative z-10 font-headline font-black text-lg tracking-widest uppercase transition-colors ${isActive ? "text-on-primary" : "text-primary group-hover:text-on-primary"}`}>
              {timeLeft === 0 ? "RETURN TO FORGE" : isActive ? "PAUSE SESSION" : "START SESSION"}
            </span>
          </button>
        </div>
      </main>
    </>
  );
}

export default function TimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-x-hidden">
      <Header />
      <Suspense fallback={<div className="flex-grow flex items-center justify-center">Loading...</div>}>
        <TimerContent />
      </Suspense>
      <BottomNav />
    </div>
  );
}
