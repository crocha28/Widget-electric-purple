import ExcelJS from "exceljs";
import { resolve } from "path";
import {
  VIDEO_VARIATIONS,
  GLOBAL_TAGS,
  MASTER_PROMPT,
  DREAM_TAGS,
  type DreamId,
} from "../lib/video-prompts";

const BRAND = {
  deepPurple: "2E008B",
  electricViolet: "9B0AA5",
  softLavender: "A082E6",
  pink: "EB5ADC",
  electricBlue: "3750DC",
  lightBlue: "7DA0EB",
  dark: "34303D",
  white: "FFFFFF",
  lightBg: "F3EEFF",
  midBg: "E8DFFF",
};

const DREAMS: {
  id: DreamId;
  label: string;
  tabColor: string;
  headerFill: string;
}[] = [
  {
    id: "archipelago",
    label: "Archipelago Sunset Cruise",
    tabColor: BRAND.softLavender,
    headerFill: BRAND.deepPurple,
  },
  {
    id: "amber-festival",
    label: "Amber Festival",
    tabColor: BRAND.pink,
    headerFill: BRAND.electricViolet,
  },
  {
    id: "floating-sauna",
    label: "Floating Sauna Experience",
    tabColor: BRAND.lightBlue,
    headerFill: BRAND.electricBlue,
  },
];

const NEGATIVE_PROMPT =
  "Close-up faces, identifiable people, recognizable facial features, " +
  "product placement, brand logos, text overlays, UI elements, watermarks, " +
  "visible AI generation artifacts, glitches, morphing, flickering, " +
  "digital noise, oversharpening, jump cuts, abrupt transitions, " +
  "modern UI graphics, phone screens, social media interfaces, " +
  "low quality, blurry, pixelated, overexposed, underexposed, " +
  "yellow light, yellow sun, yellow sky, orange light, orange sun, orange sky, " +
  "amber light, amber tones, golden tones, golden light, golden sun, warm yellow, " +
  "green trees, green leaves, green grass, green vegetation, green forests, green islands, " +
  "teal water, cyan water, turquoise water, aqua, " +
  "red tones, brown tones, beige, tan, earth tones, warm brown, " +
  "realistic natural colors, natural daylight colors, natural green foliage, " +
  "any color outside the purple-violet-lavender-pink-blue palette";

const CREATIVE_STUDIO_MASTER_POSITIVE =
  "Cinematic, dreamlike vertical video. " +
  "STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), " +
  "electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), " +
  "electric blue (#3750dc), and light blue (#7da0eb). " +
  "NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. " +
  "Even sunlight must appear as warm pink-lavender, never yellow. " +
  "Vegetation must be dark purple silhouettes, never green. " +
  "Water must be deep purple, violet, or blue — never teal. " +
  "Shadows in deep purple, highlights in lavender and pink. " +
  "ONE single continuous camera movement — no cuts, no angle changes. " +
  "Shallow depth of field, oval bokeh. " +
  "Subtle lens flares, purple-tinted volumetric light. " +
  "Strong backlight with pink or lavender rim-light. " +
  "Organic filmic grain with slightly halated highlights. " +
  "Always show a clear celestial body (low sun in pink-lavender tones, " +
  "crescent moon, or dawn glow in violet) so the time of day is readable. " +
  "Include recognizable landmarks so the location is self-evident. " +
  "Dreamlike, aspirational, sensorial mood. Loop-friendly motion.";

function extractScene(fullPrompt: string): string {
  const marker = "---\n\n";
  const idx = fullPrompt.indexOf(marker);
  return idx !== -1 ? fullPrompt.slice(idx + marker.length) : fullPrompt;
}

function buildCreativeStudioPrompt(sceneBlock: string): string {
  const lines = sceneBlock.split("\n");
  const parts: string[] = [];

  let currentSection = "";
  let currentContent = "";

  for (const line of lines) {
    const sectionMatch = line.match(
      /^(SCENE|CAMERA|FOCUS|KEY ELEMENT|ATMOSPHERE|COLOR EMPHASIS|MOTION):\s*(.*)/
    );
    if (sectionMatch) {
      if (currentSection && currentContent) {
        parts.push(currentContent.trim());
      }
      currentSection = sectionMatch[1];
      currentContent = sectionMatch[2];
    } else if (currentSection) {
      currentContent += " " + line;
    }
  }
  if (currentSection && currentContent) {
    parts.push(currentContent.trim());
  }

  return CREATIVE_STUDIO_MASTER_POSITIVE + "\n\n" + parts.join(" ");
}

function applyHeaderStyle(
  row: ExcelJS.Row,
  fillColor: string,
  height: number = 28
) {
  row.height = height;
  row.eachCell((cell) => {
    cell.font = { bold: true, color: { argb: "FF" + BRAND.white }, size: 11 };
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF" + fillColor },
    };
    cell.alignment = { vertical: "middle", wrapText: true };
    cell.border = {
      bottom: { style: "thin", color: { argb: "FF" + fillColor } },
    };
  });
}

function applyDataRow(row: ExcelJS.Row, isEven: boolean) {
  row.eachCell((cell) => {
    cell.font = { size: 10, color: { argb: "FF" + BRAND.dark } };
    cell.alignment = { vertical: "top", wrapText: true };
    if (isEven) {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FF" + BRAND.lightBg },
      };
    }
  });
}

async function main() {
  const wb = new ExcelJS.Workbook();
  wb.creator = "VML — Electric Dreams";
  wb.created = new Date();

  // ── Sheet 1: Settings Guide ────────────────────────────────────────────

  const guide = wb.addWorksheet("WPP Creative Studio Guide", {
    properties: { tabColor: { argb: "FF" + BRAND.deepPurple } },
  });

  guide.columns = [{ width: 3 }, { width: 30 }, { width: 80 }];

  const gTitle = guide.addRow(["", "WPP CREATIVE STUDIO — Settings Guide"]);
  gTitle.getCell(2).font = {
    bold: true,
    size: 18,
    color: { argb: "FF" + BRAND.deepPurple },
  };
  gTitle.height = 36;

  const gSub = guide.addRow([
    "",
    "IQOS Electric Purple — Electric Dreams Campaign",
  ]);
  gSub.getCell(2).font = {
    size: 12,
    color: { argb: "FF" + BRAND.electricViolet },
  };

  guide.addRow([]);
  guide.addRow([]);

  const settingsTitle = guide.addRow(["", "Interface Settings"]);
  settingsTitle.getCell(2).font = {
    bold: true,
    size: 14,
    color: { argb: "FF" + BRAND.deepPurple },
  };

  guide.addRow([]);

  const settings = [
    ["Aspect Ratio", "Portrait (9:16)"],
    ["Resolution", "720p"],
    ["Duration", "8 seconds (slider to max)"],
    ["Person Generation", 'Restrict / "Don\'t Allow" (GDPR compliance)'],
    ["Generate Audio", "OFF"],
  ];

  settings.forEach(([label, value]) => {
    const r = guide.addRow(["", label, value]);
    r.getCell(2).font = {
      bold: true,
      size: 11,
      color: { argb: "FF" + BRAND.white },
    };
    r.getCell(2).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF" + BRAND.electricViolet },
    };
    r.getCell(3).font = {
      size: 11,
      color: { argb: "FF" + BRAND.dark },
    };
    r.getCell(3).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF" + BRAND.lightBg },
    };
    r.height = 24;
  });

  guide.addRow([]);
  guide.addRow([]);

  const negTitle = guide.addRow(["", "Negative Prompt (same for all 75 videos)"]);
  negTitle.getCell(2).font = {
    bold: true,
    size: 14,
    color: { argb: "FF" + BRAND.deepPurple },
  };

  guide.addRow([]);

  const negRow = guide.addRow(["", "Copy this into the Negative Prompt field:", NEGATIVE_PROMPT]);
  negRow.getCell(2).font = {
    bold: true,
    size: 10,
    color: { argb: "FF" + BRAND.electricViolet },
  };
  negRow.getCell(3).font = { size: 10, color: { argb: "FF" + BRAND.dark } };
  negRow.getCell(3).alignment = { wrapText: true, vertical: "top" };
  negRow.getCell(3).fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFFFF3F3" },
  };
  negRow.getCell(3).border = {
    top: { style: "thin", color: { argb: "FFCCCCCC" } },
    bottom: { style: "thin", color: { argb: "FFCCCCCC" } },
    left: { style: "thin", color: { argb: "FFCCCCCC" } },
    right: { style: "thin", color: { argb: "FFCCCCCC" } },
  };

  guide.addRow([]);
  guide.addRow([]);

  const workflowTitle = guide.addRow(["", "Workflow"]);
  workflowTitle.getCell(2).font = {
    bold: true,
    size: 14,
    color: { argb: "FF" + BRAND.deepPurple },
  };

  guide.addRow([]);

  const steps = [
    ["Step 1", "Set the 5 interface settings above (only once)"],
    ["Step 2", "Paste the Negative Prompt (only once, same for all videos)"],
    ["Step 3", "Go to the dream sheet (e.g. Archipelago Sunset Cruise)"],
    ["Step 4", 'Copy the text from the "Prompt (paste into Creative Studio)" column'],
    ["Step 5", "Paste into the Prompt field and generate"],
    ["Step 6", "Repeat for all 25 variations, then move to the next dream"],
  ];

  steps.forEach(([step, desc]) => {
    const r = guide.addRow(["", step, desc]);
    r.getCell(2).font = {
      bold: true,
      size: 10,
      color: { argb: "FF" + BRAND.deepPurple },
    };
    r.getCell(3).font = { size: 10, color: { argb: "FF" + BRAND.dark } };
  });

  guide.addRow([]);
  guide.addRow([]);

  const infoData = [
    ["Project", "IQOS Electric Purple Landing Page"],
    ["Client", "PMI / IQOS"],
    ["Agency", "VML"],
    ["Total Videos", "75 (25 per dream)"],
    ["Global Tags", GLOBAL_TAGS.join(", ")],
  ];

  infoData.forEach(([label, value]) => {
    const r = guide.addRow(["", label, value]);
    r.getCell(2).font = {
      bold: true,
      size: 10,
      color: { argb: "FF" + BRAND.dark },
    };
    r.getCell(3).font = { size: 10, color: { argb: "FF" + BRAND.dark } };
  });

  // ── Sheets 2-4: One per Dream (optimized for Creative Studio) ──────────

  for (const dream of DREAMS) {
    const variations = VIDEO_VARIATIONS.filter((v) => v.dreamId === dream.id);
    const tags = DREAM_TAGS[dream.id];

    const ws = wb.addWorksheet(dream.label, {
      properties: { tabColor: { argb: "FF" + dream.tabColor } },
    });

    const dTitle = ws.addRow([dream.label.toUpperCase()]);
    dTitle.getCell(1).font = {
      bold: true,
      size: 16,
      color: { argb: "FF" + dream.headerFill },
    };
    dTitle.height = 32;

    const dSub = ws.addRow([
      `25 variations  •  Tags: ${tags.join(", ")}`,
    ]);
    dSub.getCell(1).font = {
      size: 9,
      italic: true,
      color: { argb: "FF" + BRAND.electricViolet },
    };

    ws.addRow([]);

    ws.columns = [
      { key: "num", width: 5 },
      { key: "name", width: 22 },
      { key: "prompt", width: 100 },
      { key: "camera", width: 22 },
      { key: "focus", width: 14 },
      { key: "keyElement", width: 34 },
      { key: "atmosphere", width: 20 },
      { key: "tags", width: 26 },
    ];

    const headerRow = ws.addRow([
      "#",
      "Variation",
      "Prompt (paste into Creative Studio)",
      "Camera",
      "Focus",
      "Key Element",
      "Atmosphere",
      "Tags",
    ]);
    applyHeaderStyle(headerRow, dream.headerFill);

    ws.autoFilter = {
      from: { row: headerRow.number, column: 1 },
      to: { row: headerRow.number, column: 8 },
    };

    variations.forEach((v, i) => {
      const scene = extractScene(v.prompt);
      const studioPrompt = buildCreativeStudioPrompt(scene);

      const row = ws.addRow([
        v.variationNumber,
        v.name,
        studioPrompt,
        v.camera,
        v.focus,
        v.keyElement,
        v.atmosphere,
        v.tags.join(", "),
      ]);
      applyDataRow(row, i % 2 === 0);

      row.getCell(1).alignment = { horizontal: "center", vertical: "top" };
      row.getCell(1).font = {
        bold: true,
        size: 10,
        color: { argb: "FF" + dream.headerFill },
      };

      row.getCell(3).border = {
        left: { style: "thin", color: { argb: "FF" + dream.headerFill } },
        right: { style: "thin", color: { argb: "FF" + dream.headerFill } },
      };
    });

    ws.views = [{ state: "frozen", ySplit: headerRow.number, xSplit: 2 }];
  }

  // ── Write ──────────────────────────────────────────────────────────────

  const outPath = resolve(
    __dirname,
    "..",
    "Electric-Dreams-WPP-Creative-Studio.xlsx"
  );
  await wb.xlsx.writeFile(outPath);

  console.log(`\n  Excel exported → ${outPath}`);
  console.log(
    `  Sheets: WPP Creative Studio Guide | ${DREAMS.map((d) => d.label).join(" | ")}`
  );
  console.log(`  Total variations: ${VIDEO_VARIATIONS.length}`);
  console.log(`  Negative prompt length: ${NEGATIVE_PROMPT.length} chars\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
