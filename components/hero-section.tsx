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
          viewBox="0 0 640 606.049"
          fill="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M307.218 0.419516C377.262 -4.10445 441.112 28.1165 476.051 89.5289C488.692 111.746 502.014 133.631 514.627 155.929L567.131 248.138C586.558 282.386 609.92 317.281 625.4 353.27C672.672 463.117 599.901 588.981 482.667 604.527C463.969 607.007 440.541 605.667 421.369 605.675L333.569 605.754L220.173 605.737C198.287 605.74 167.137 607.368 146.379 603.164C68.0708 587.306 6.07626 518.254 0.43561 437.7C-1.43017 410.159 2.71264 382.54 12.5743 356.781C19.0821 339.775 29.3316 322.82 38.4776 307.01L73.0528 247.247L138.908 131.708C151.586 109.834 170.279 75.1065 186.926 56.8814C217.101 23.8477 263.076 3.01941 307.218 0.419516ZM555.428 322.14C543.957 190.847 428.638 93.9327 298.21 105.985C168.499 117.97 72.8379 233.241 84.2423 363.813C95.6467 494.384 209.823 591.097 339.622 580.131C470.139 569.104 566.899 453.435 555.428 322.14Z"
            fill="#A0A0A0"
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
