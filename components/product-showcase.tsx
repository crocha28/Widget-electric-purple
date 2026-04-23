"use client";

import { Button } from "@/components/ui/button";
import { useFadeUp, useParallax } from "@/lib/gsap-animations";

export default function ProductShowcase() {
  const textRef = useFadeUp(0.2);
  const imageRef = useParallax(0.15);

  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto flex flex-row items-center justify-center gap-10 lg:gap-20 px-6 lg:px-16 py-16 lg:py-20 overflow-hidden">
        {/* Product image */}
        <div ref={imageRef} className="flex-1 w-full">
          <div className="w-full h-[280px] lg:h-[380px] rounded-card-lg bg-[#ededed]" />
        </div>

        {/* Copy */}
        <div ref={textRef} className="flex flex-col gap-6 flex-1">
          <h2 className="text-3xl md:text-[46px] font-bold leading-[1.05] text-dark">
            IQOS Electric Purple
          </h2>
          <p className="text-sm text-dark leading-[1.55] max-w-[600px]">
            Designed for those who live intensely. Every detail of the Electric
            Purple colour was crafted to evoke the dreams that inspired it. The
            same ones you just experienced.
          </p>
          <div>
            <Button variant="filled" size="md">
              Discover IQOS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
