"use client";

import { useStaggerChildren } from "@/lib/gsap-animations";

const steps = [
  {
    number: "01",
    title: "Choose your dream",
    description:
      "Three Electric Dream experiences await. Choose the one that calls to you.",
  },
  {
    number: "02",
    title: "Watch it come to life",
    description:
      "An 8-second personalised video brings your Electric Dream to life, charged with Electric Purple visuals.",
  },
  {
    number: "03",
    title: "Win the real experience",
    description:
      "Enter the competition, and you could win the real Electric Dream experience.",
  },
];

export default function HowItWorks() {
  const staggerRef = useStaggerChildren(0.15);

  return (
    <section className="bg-light-gray w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12 px-6 lg:px-16 py-16 lg:py-20 overflow-hidden">
        <h2 className="text-3xl md:text-[40px] font-bold leading-[1.35] text-dark">
          Three steps to the dream.
        </h2>

        <div ref={staggerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-card p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              <span className="text-[11px] font-bold text-[#9e9e9e] tracking-[0.44px]">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-dark tracking-tight leading-none">
                {step.title}
              </h3>
              <p className="text-xs text-gray leading-relaxed tracking-wide">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
