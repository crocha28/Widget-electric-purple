import { VIDEO_VARIATIONS, GLOBAL_TAGS, MASTER_PROMPT } from "../lib/video-prompts";
import { writeFileSync } from "fs";
import { resolve } from "path";

const DREAM_LABELS: Record<string, string> = {
  archipelago: "Archipelago Sunset Cruise",
  "grona-lund": "Gröna Lund Live Concert",
  "floating-sauna": "Floating Sauna Experience",
};

function escapeCSV(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

const SEPARATOR = ",";

const headers = [
  "ID",
  "Dream",
  "Dream ID",
  "#",
  "Variation Name",
  "Camera",
  "Focus",
  "Key Element",
  "Atmosphere",
  "Tags (variation)",
  "Global Tags",
  "Full Prompt",
];

const rows = VIDEO_VARIATIONS.map((v) => [
  v.id,
  DREAM_LABELS[v.dreamId] ?? v.dreamId,
  v.dreamId,
  String(v.variationNumber),
  v.name,
  v.camera,
  v.focus,
  v.keyElement,
  v.atmosphere,
  v.tags.join("; "),
  GLOBAL_TAGS.join("; "),
  v.prompt,
]);

const BOM = "\uFEFF";
const csv =
  BOM +
  [headers, ...rows].map((row) => row.map(escapeCSV).join(SEPARATOR)).join("\n");

const outPath = resolve(__dirname, "..", "electric-dreams-prompts.csv");
writeFileSync(outPath, csv, "utf-8");

console.log(`CSV exported → ${outPath}`);
console.log(`Total variations: ${VIDEO_VARIATIONS.length}`);
console.log(
  `  Archipelago: ${VIDEO_VARIATIONS.filter((v) => v.dreamId === "archipelago").length}`
);
console.log(
  `  Gröna Lund: ${VIDEO_VARIATIONS.filter((v) => v.dreamId === "grona-lund").length}`
);
console.log(
  `  Floating Sauna: ${VIDEO_VARIATIONS.filter((v) => v.dreamId === "floating-sauna").length}`
);
