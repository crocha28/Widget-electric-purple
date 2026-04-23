"use client";

import { Button } from "@/components/ui/button";
import { useHeroAnimation } from "@/lib/gsap-animations";

export default function HeroSection() {
  const containerRef = useHeroAnimation();

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-gradient-to-br from-light-gray via-light-gray to-[#bebebe]"
    >
      {/* Decorative symbol */}
      <div
        data-anim="symbol"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[606px] opacity-0"
      >
        <svg
          viewBox="0 0 640 606"
          fill="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M320 0C497.7 0 640 135.7 640 303C640 470.3 497.7 606 320 606C142.3 606 0 470.3 0 303C0 135.7 142.3 0 320 0Z"
            fill="currentColor"
            className="text-dark/[0.06]"
          />
          <path
            d="M320 80C453.3 80 560 170.3 560 280C560 389.7 453.3 480 320 480C186.7 480 80 389.7 80 280C80 170.3 186.7 80 320 80Z"
            fill="currentColor"
            className="text-dark/[0.04]"
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-10 px-6 py-20 md:py-24 md:h-[700px] lg:py-[76px] lg:px-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center gap-2 text-center text-dark">
          <h1
            data-anim="headline"
            className="text-2xl md:text-[40px] lg:text-[46px] font-bold leading-[1.25] tracking-tight"
          >
            Ready to start dreaming
          </h1>
          <span
            data-anim="display"
            className="text-[120px] md:text-[300px] leading-none md:leading-[200px] mt-[60px] select-none"
            style={{ fontFamily: "'Breathing IQOS', Georgia, serif" }}
          >
            Electric
          </span>
        </div>

        <p
          data-anim="sub"
          className="text-base md:text-xl text-dark text-center max-w-[644px]"
        >
          Pick a dream. Watch it come to life. Then compete to win it for real.
        </p>

        <div data-anim="buttons" className="flex gap-6 flex-wrap justify-center">
          <Button variant="filled" size="lg">
            Start Dreaming
          </Button>
          <Button variant="outlined" size="lg">
            How it works
          </Button>
        </div>
      </div>
    </section>
  );
}
