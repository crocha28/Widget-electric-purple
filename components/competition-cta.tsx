"use client";

import { Button } from "@/components/ui/button";
import { useFadeUp } from "@/lib/gsap-animations";

export default function CompetitionCta() {
  const ref = useFadeUp();

  return (
    <section className="bg-light-gray w-full">
      <div
        ref={ref}
        className="max-w-[1440px] mx-auto flex flex-row items-center justify-center gap-10 px-6 lg:px-16 py-16 lg:py-20"
      >
        {/* Copy */}
        <div className="flex flex-col gap-6 flex-1">
          <h2 className="text-3xl md:text-[46px] font-bold leading-[1.25] tracking-normal text-dark">
            Win one of 5 Electric
            <br />
            Dream experiences.
          </h2>
          <p className="text-sm text-dark/70 max-w-[531px] leading-relaxed">
            From an Archipelago Sunset Cruise to a Gröna Lund Live Concert or a
            Floating Sauna — five winners will live their Electric Dream for
            real.
          </p>
          <div>
            <Button variant="filled" size="md">
              Join the competition
            </Button>
          </div>
        </div>

        {/* Image placeholder */}
        <div className="flex-1 w-full lg:max-w-[640px]">
          <div className="w-full h-[240px] lg:h-[280px] rounded-card-lg bg-[#e0e0e0]" />
        </div>
      </div>
    </section>
  );
}
