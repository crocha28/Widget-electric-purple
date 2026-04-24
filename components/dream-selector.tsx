"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import gsap from "gsap";
import { Leaf, Music, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { dreams, type Dream } from "@/lib/dreams-data";
import { useFadeUp, useStaggerChildren } from "@/lib/gsap-animations";

type Phase = "select" | "loading" | "video";

const CATEGORY_ICON: Record<string, React.ReactNode> = {
  Nature: <Leaf className="w-5 h-5 text-[#9e9e9e]" />,
  Music: <Music className="w-5 h-5 text-[#9e9e9e]" />,
  Wellness: <Waves className="w-5 h-5 text-[#9e9e9e]" />,
};

export default function DreamSelector() {
  const [phase, setPhase] = useState<Phase>("select");
  const [selectedDream, setSelectedDream] = useState<Dream | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const headerRef = useFadeUp();
  const cardsContainerRef = useStaggerChildren(0.2);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reverseTlRef = useRef<gsap.core.Timeline | null>(null);
  const cancelledRef = useRef(false);

  const handleSelectDream = useCallback((dream: Dream) => {
    setSelectedDream(dream);
    setHoveredId(null);
    setPhase("loading");
  }, []);

  const handleCancel = useCallback(() => {
    cancelledRef.current = true;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    const tl = tlRef.current;
    if (tl) tl.kill();
    tlRef.current = null;

    const cards = cardRefs.current.filter(Boolean) as HTMLButtonElement[];
    const images = imageRefs.current.filter(Boolean) as HTMLDivElement[];
    const container = cards[0]?.parentElement;

    const reverseTl = gsap.timeline({
      onComplete: () => {
        reverseTlRef.current = null;
        if (container) container.classList.remove("animating");
        cards.forEach((c, i) => {
          gsap.set(c, {
            height: 430,
            flexGrow: 424,
            justifyContent: "space-between",
            gap: 0,
            pointerEvents: "auto",
            cursor: "pointer",
          });
          gsap.set(images[i], {
            left: 23,
            top: 91,
            width: 376,
            height: 260,
            borderRadius: 8,
            opacity: 1,
          });
        });
        if (placeholderRef.current) {
          gsap.set(placeholderRef.current, { height: 0, opacity: 0, y: 0 });
        }
        if (cancelRef.current) {
          gsap.set(cancelRef.current, { opacity: 0, y: 0 });
        }
        setPhase("select");
        setSelectedDream(null);
      },
    });
    reverseTlRef.current = reverseTl;

    reverseTl.to([cancelRef.current, placeholderRef.current], {
      opacity: 0,
      y: 12,
      duration: 0.35,
      ease: "power2.in",
    });

    cards.forEach((card, i) => {
      reverseTl.to(
        card,
        {
          height: 430,
          flexGrow: 424,
          justifyContent: "space-between",
          gap: 0,
          duration: 0.75,
          ease: "power3.inOut",
        },
        0.1
      );

      reverseTl.to(
        images[i],
        {
          left: 23,
          top: 91,
          width: 376,
          height: 260,
          borderRadius: 8,
          opacity: 1,
          duration: 0.75,
          ease: "power3.inOut",
        },
        0.1
      );
    });

    reverseTl.set(cards, { pointerEvents: "auto", cursor: "pointer" });
  }, []);

  const handleReset = useCallback(() => {
    setPhase("select");
    setSelectedDream(null);
  }, []);

  useEffect(() => {
    if (phase !== "loading") return;

    const cards = cardRefs.current.filter(Boolean) as HTMLButtonElement[];
    const images = imageRefs.current.filter(Boolean) as HTMLDivElement[];
    const container = cards[0]?.parentElement;
    const selectedIndex = dreams.findIndex((d) => d.id === selectedDream?.id);

    const tl = gsap.timeline();
    tlRef.current = tl;

    if (container) container.classList.add("animating");

    const imgPos = images.map((img) => ({
      left: img.offsetLeft,
      top: img.offsetTop,
      width: img.offsetWidth,
      height: img.offsetHeight,
    }));
    const cardFG = cards.map(
      (c) => parseFloat(getComputedStyle(c).flexGrow) || 424
    );

    images.forEach((img, i) =>
      gsap.set(img, {
        left: imgPos[i].left,
        top: imgPos[i].top,
        width: imgPos[i].width,
        height: imgPos[i].height,
        opacity: 1,
      })
    );
    cards.forEach((c, i) =>
      gsap.set(c, {
        pointerEvents: "none",
        cursor: "default",
        height: 430,
        flexGrow: cardFG[i],
      })
    );

    cards.forEach((c, i) =>
      gsap.set(c, {
        height: "auto",
        flexGrow: i === selectedIndex ? 524 : 370,
        justifyContent: "flex-start",
        gap: 16,
      })
    );
    const uniH = Math.max(...cards.map((c) => c.offsetHeight));

    cards.forEach((c, i) =>
      gsap.set(c, {
        height: 430,
        flexGrow: cardFG[i],
        justifyContent: "space-between",
        gap: 0,
      })
    );

    gsap.set(placeholderRef.current, { height: 0, opacity: 0 });
    gsap.set(cancelRef.current, { opacity: 0, y: 0 });

    cards.forEach((c, i) => {
      const isSelected = i === selectedIndex;

      tl.to(
        c,
        {
          height: uniH,
          flexGrow: isSelected ? 524 : 370,
          justifyContent: "flex-start",
          gap: 16,
          duration: 0.85,
          ease: "power3.inOut",
        },
        0
      );

      if (isSelected) {
        tl.to(
          images[i],
          {
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            borderRadius: 8,
            duration: 0.85,
            ease: "power3.inOut",
          },
          0
        );
      } else {
        tl.to(
          images[i],
          {
            width: 160,
            height: 110,
            left: 16,
            top: 50,
            duration: 0.85,
            ease: "power3.inOut",
          },
          0
        );
        tl.to(
          images[i],
          {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          0.15
        );
      }
    });

    tl.fromTo(
      placeholderRef.current,
      { height: 0, opacity: 0 },
      { height: 516, opacity: 1, duration: 0.7, ease: "power3.out" },
      0.25
    );

    tl.fromTo(
      cancelRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      0.6
    );

    const timer = setTimeout(() => {
      if (timerRef.current === timer) setPhase("video");
    }, 4000);
    timerRef.current = timer;

    return () => {
      tl.kill();
      clearTimeout(timer);
      timerRef.current = null;
      if (reverseTlRef.current) {
        reverseTlRef.current.kill();
        reverseTlRef.current = null;
      }
      if (container) container.classList.remove("animating");
      if (!cancelledRef.current) {
        cards.forEach((card) => {
          gsap.set(card, {
            clearProps: "height,flexGrow,justifyContent,gap,pointerEvents,cursor",
          });
        });
        images.forEach((img) => {
          gsap.set(img, {
            clearProps: "left,top,width,height,borderRadius,opacity",
          });
        });
      }
      cancelledRef.current = false;
    };
  }, [phase, selectedDream]);

  useEffect(() => {
    if (phase !== "video" || !videoRef.current) return;

    gsap.fromTo(
      videoRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );
  }, [phase]);

  const isInteractive = phase === "select";

  return (
    <section className="bg-white w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-10 px-6 lg:px-16 py-16 overflow-hidden">
        {/* Header */}
        <div ref={headerRef} className="w-full">
          <h2 className="text-3xl md:text-[40px] font-bold leading-[1.35] text-dark">
            {phase === "select"
              ? "Choose the dream that calls to you."
              : "Your Electric Dream awaits."}
          </h2>
        </div>

        {/* Cards — always in DOM, animated between states */}
        {phase !== "video" && (
          <>
            <div
              ref={cardsContainerRef}
              className="dream-cards flex flex-col md:flex-row gap-6 w-full"
              onMouseLeave={() => isInteractive && setHoveredId(null)}
            >
              {dreams.map((dream, i) => {
                const hoverState =
                  hoveredId === null
                    ? "default"
                    : hoveredId === dream.id
                      ? "hovered"
                      : "sibling";

                const flexGrow =
                  isInteractive
                    ? hoverState === "hovered"
                      ? 524
                      : hoverState === "sibling"
                        ? 370
                        : 424
                    : undefined;

                const imageStyle: React.CSSProperties =
                  isInteractive
                    ? hoverState === "hovered"
                      ? { left: 0, top: 0, width: "100%", height: "100%" }
                      : hoverState === "sibling"
                        ? { left: 23, top: 91, width: 322, height: 242 }
                        : { left: 23, top: 91, width: 376, height: 260 }
                    : {};

                return (
                  <button
                    key={dream.id}
                    ref={(el) => { cardRefs.current[i] = el; }}
                    onClick={() => isInteractive && handleSelectDream(dream)}
                    onMouseEnter={() => isInteractive && setHoveredId(dream.id)}
                    onMouseLeave={() => isInteractive && setHoveredId(null)}
                    style={{
                      flexGrow: flexGrow ?? undefined,
                    }}
                    className="dream-card relative bg-white border border-[rgba(199,199,199,0.6)] rounded-[8px] overflow-hidden flex flex-col h-[430px] justify-between p-[24px] text-left cursor-pointer md:shrink-0 md:basis-0 md:min-w-0"
                  >
                    <div
                      ref={(el) => { imageRefs.current[i] = el; }}
                      className="dream-image absolute z-0 bg-[#dbdbdb] rounded-[8px]"
                      style={isInteractive ? imageStyle : undefined}
                    />

                    <div className="relative z-10 flex flex-col gap-3">
                      {CATEGORY_ICON[dream.category]}
                      <h3 className="text-[21px] font-bold text-dark tracking-[0.105px] leading-none">
                        {dream.title}
                      </h3>
                    </div>

                    <p className="relative z-10 text-[12px] text-[#666] leading-[1.5] tracking-[0.24px]">
                      {dream.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Video placeholder + Cancel — hidden initially, revealed by GSAP */}
            <div
              ref={placeholderRef}
              className="w-full rounded-[16px] overflow-hidden relative"
              style={{ height: 0, opacity: 0 }}
            >
              {phase === "loading" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-10">
                  <div className="dream-loader">
                    <div className="dream-loader-ring" />
                    <div className="dream-loader-ring dream-loader-ring--delay" />
                  </div>
                  <p className="text-sm tracking-[0.5px] text-[#666] animate-pulse">
                    Crafting your Electric Dream…
                  </p>
                </div>
              )}
            </div>

            <button
              ref={cancelRef}
              onClick={handleCancel}
              className="border border-[rgba(199,199,199,0.6)] rounded-full px-6 py-2 text-base text-dark bg-white hover:bg-dark/5 transition-colors cursor-pointer"
              style={{ opacity: 0 }}
            >
              Cancel
            </button>
          </>
        )}

        {/* Phase: Video Player */}
        {phase === "video" && selectedDream && (
          <div
            ref={videoRef}
            className="flex flex-col lg:flex-row gap-6 w-full opacity-0"
          >
            <div className="flex-1 min-h-0">
              <div className="w-full aspect-video bg-[#d9d9d9] rounded-card-lg flex items-center justify-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="opacity-40"
                >
                  <path
                    d="M6.5 4.8v14.4L19 12 6.5 4.8z"
                    stroke="#1A1A1A"
                    strokeWidth={1.2}
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="w-full lg:w-[370px] shrink-0">
              <div className="bg-[#fafafa] border border-border rounded-card-lg p-6 lg:p-10 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl lg:text-[30px] font-bold text-dark leading-[1.4]">
                    {selectedDream.title}
                  </h3>
                  <p className="text-xs text-gray/60 tracking-wide">
                    Duration: 8s &middot; Format: 9:16 &middot; Quality: 750p
                  </p>
                </div>

                <div className="h-px bg-border" />

                <div className="flex flex-col gap-6">
                  <Button variant="outlined" className="w-full justify-center">
                    Download my video
                  </Button>
                  <Button variant="filled" className="w-full justify-center">
                    Join the competition
                  </Button>
                </div>

                <div className="h-px bg-border" />

                <button
                  onClick={handleReset}
                  className="text-sm text-gray hover:text-dark transition-colors text-left cursor-pointer"
                >
                  Try another dream
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
