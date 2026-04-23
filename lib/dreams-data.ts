export interface Dream {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  description: string;
  prize: string;
}

export const dreams: Dream[] = [
  {
    id: "archipelago",
    title: "Archipelago Sunset Cruise",
    subtitle: "Nature · Stockholm",
    category: "Nature",
    location: "Stockholm",
    description:
      "Sail into the golden hour. Open water, island silence, and a sky that bleeds Electric Purple.",
    prize:
      "Archipelago Dinner Cruise at Sunset for 2 + IQOS ILUMA i Prime Electric Purple",
  },
  {
    id: "grona-lund",
    title: "Gröna Lund Live Concert",
    subtitle: "Music · Stockholm",
    category: "Music",
    location: "Stockholm",
    description:
      "Front row. Full volume. A night where the bass hits as hard as the view.",
    prize:
      "Festival accommodation for 2 + IQOS ILUMA i Prime Electric Purple",
  },
  {
    id: "floating-sauna",
    title: "Floating Sauna Experience",
    subtitle: "Wellness · Stockholm",
    category: "Wellness",
    location: "Stockholm",
    description:
      "Heat, cold water, and nothing else. Stillness so deep it feels Electric.",
    prize:
      "Exclusive sauna experience for 2 + IQOS ILUMA i Prime Electric Purple",
  },
];

export const VIDEO_DURATION = 8;
export const VIDEOS_PER_DREAM = 25;
