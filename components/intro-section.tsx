"use client";

import { dreams } from "@/lib/dreams-data";
import { useFadeUp, useStaggerChildren } from "@/lib/gsap-animations";

export default function IntroSection() {
  const textRef = useFadeUp();
  const cardsRef = useStaggerChildren(0.15);

  return (
    <section className="bg-white w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-16 py-10 lg:py-10 overflow-hidden">
        {/* Text block */}
        <div ref={textRef} className="flex flex-col gap-5 lg:max-w-[567px]">
          <h2 className="text-3xl md:text-[40px] font-bold leading-[1.35] text-dark">
            An Electric Dream built around a world you choose.
          </h2>
          <p className="text-base text-gray max-w-[540px]">
            Choose from three worlds. A personalised video is crafted around your
            choices — then enter the competition to win the real experience.
          </p>
        </div>

        {/* Floating dream cards */}
        <div ref={cardsRef} className="relative w-full lg:w-[584px] h-[300px] lg:h-[347px]">
          {dreams.map((dream, i) => {
            const positions = [
              "left-0 lg:left-[32px] top-36 lg:top-[144px]",
              "left-24 lg:left-[192px] top-4 lg:top-[31px]",
              "left-48 lg:left-[352px] top-20 lg:top-[101px]",
            ];
            return (
              <div
                key={dream.id}
                className={`absolute bg-white border border-[#e1e1e1] rounded-[8px] p-[16px] w-[180px] lg:w-[200px] h-[172px] flex flex-col gap-[16px] items-start overflow-hidden ${positions[i]}`}
              >
                <div className="w-[60px] h-[60px] rounded-[6px] bg-dark/[0.06] shrink-0" />
                <div className="flex flex-col gap-[4px] items-start overflow-hidden">
                  <p className="font-bold text-[14px] text-dark leading-normal w-[120px]">
                    {dream.title}
                  </p>
                  <p className="text-[12px] text-[#808080] leading-normal">
                    {dream.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
