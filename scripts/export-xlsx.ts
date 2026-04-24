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
    id: "grona-lund",
    label: "Gröna Lund Live Concert",
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

function extractScene(fullPrompt: string): string {
  const marker = "---\n\n";
  const idx = fullPrompt.indexOf(marker);
  return idx !== -1 ? fullPrompt.slice(idx + marker.length) : fullPrompt;
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

  // ── Sheet 1: Overview ──────────────────────────────────────────────────

  const overview = wb.addWorksheet("Overview", {
    properties: { tabColor: { argb: "FF" + BRAND.deepPurple } },
  });

  overview.columns = [
    { width: 3 },
    { width: 45 },
    { width: 80 },
  ];

  const titleRow = overview.addRow(["", "ELECTRIC DREAMS — AI Video Prompts"]);
  titleRow.getCell(2).font = {
    bold: true,
    size: 18,
    color: { argb: "FF" + BRAND.deepPurple },
  };
  titleRow.height = 36;

  const subtitleRow = overview.addRow([
    "",
    "IQOS Electric Purple — Summer 2026 Campaign",
  ]);
  subtitleRow.getCell(2).font = {
    size: 12,
    color: { argb: "FF" + BRAND.electricViolet },
  };

  overview.addRow([]);

  const infoData = [
    ["Project", "IQOS Electric Purple Landing Page"],
    ["Client", "PMI / IQOS"],
    ["Agency", "VML"],
    ["Total Videos", "75 (25 per dream)"],
    ["Video Duration", "8 seconds"],
    ["Resolution", "750p vertical (9:16)"],
    ["Generation", "AI-generated"],
    ["", ""],
    ["Dream 1", "Archipelago Sunset Cruise (25 videos)"],
    ["Dream 2", "Gröna Lund Live Concert (25 videos)"],
    ["Dream 3", "Floating Sauna Experience (25 videos)"],
    ["", ""],
    ["Global Tags", GLOBAL_TAGS.join(", ")],
  ];

  infoData.forEach(([label, value]) => {
    const r = overview.addRow(["", label, value]);
    r.getCell(2).font = {
      bold: true,
      size: 10,
      color: { argb: "FF" + BRAND.dark },
    };
    r.getCell(3).font = { size: 10, color: { argb: "FF" + BRAND.dark } };
  });

  overview.addRow([]);
  overview.addRow([]);

  const colorsTitle = overview.addRow(["", "Brand Color Palette"]);
  colorsTitle.getCell(2).font = {
    bold: true,
    size: 13,
    color: { argb: "FF" + BRAND.deepPurple },
  };

  overview.addRow([]);

  const palette = [
    ["Deep Purple", "#2E008B", BRAND.deepPurple],
    ["Electric Violet", "#9B0AA5", BRAND.electricViolet],
    ["Soft Lavender", "#A082E6", BRAND.softLavender],
    ["Pink", "#EB5ADC", BRAND.pink],
    ["Electric Blue", "#3750DC", BRAND.electricBlue],
    ["Light Blue", "#7DA0EB", BRAND.lightBlue],
  ] as const;

  palette.forEach(([name, hex, argb]) => {
    const r = overview.addRow(["", name, hex]);
    r.getCell(2).font = { bold: true, size: 10, color: { argb: "FF" + BRAND.white } };
    r.getCell(2).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF" + argb },
    };
    r.getCell(3).font = { size: 10, color: { argb: "FF" + BRAND.dark } };
  });

  // ── Sheet 2: Master Prompt ─────────────────────────────────────────────

  const masterSheet = wb.addWorksheet("Master Prompt", {
    properties: { tabColor: { argb: "FF" + BRAND.electricViolet } },
  });

  masterSheet.columns = [{ width: 3 }, { width: 110 }];

  const mpTitle = masterSheet.addRow(["", "MASTER PROMPT"]);
  mpTitle.getCell(2).font = {
    bold: true,
    size: 16,
    color: { argb: "FF" + BRAND.deepPurple },
  };
  mpTitle.height = 30;

  const mpSub = masterSheet.addRow([
    "",
    "This prompt is prepended to every individual variation. Do NOT paste it manually — it is already included in each scene prompt on the dream sheets.",
  ]);
  mpSub.getCell(2).font = {
    italic: true,
    size: 10,
    color: { argb: "FF" + BRAND.electricViolet },
  };

  masterSheet.addRow([]);

  const promptParagraphs = MASTER_PROMPT.split("\n\n");
  promptParagraphs.forEach((para) => {
    const r = masterSheet.addRow(["", para]);
    r.getCell(2).font = { size: 10, color: { argb: "FF" + BRAND.dark } };
    r.getCell(2).alignment = { wrapText: true, vertical: "top" };
    masterSheet.addRow([]);
  });

  // ── Sheets 3-5: One per Dream ──────────────────────────────────────────

  for (const dream of DREAMS) {
    const variations = VIDEO_VARIATIONS.filter((v) => v.dreamId === dream.id);
    const tags = DREAM_TAGS[dream.id];

    const ws = wb.addWorksheet(dream.label, {
      properties: { tabColor: { argb: "FF" + dream.tabColor } },
    });

    // Dream title
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

    // Column config
    ws.columns = [
      { header: "#", key: "num", width: 5 },
      { header: "Variation Name", key: "name", width: 24 },
      { header: "Camera", key: "camera", width: 24 },
      { header: "Focus", key: "focus", width: 14 },
      { header: "Key Element", key: "keyElement", width: 38 },
      { header: "Atmosphere", key: "atmosphere", width: 22 },
      { header: "Tags", key: "tags", width: 28 },
      { header: "Scene Prompt", key: "scene", width: 90 },
    ];

    // Header row (row 4)
    const headerRow = ws.addRow([
      "#",
      "Variation Name",
      "Camera",
      "Focus",
      "Key Element",
      "Atmosphere",
      "Tags",
      "Scene Prompt",
    ]);
    applyHeaderStyle(headerRow, dream.headerFill);

    ws.autoFilter = {
      from: { row: headerRow.number, column: 1 },
      to: { row: headerRow.number, column: 8 },
    };

    // Data rows
    variations.forEach((v, i) => {
      const row = ws.addRow([
        v.variationNumber,
        v.name,
        v.camera,
        v.focus,
        v.keyElement,
        v.atmosphere,
        v.tags.join(", "),
        extractScene(v.prompt),
      ]);
      applyDataRow(row, i % 2 === 0);
      row.getCell(1).alignment = { horizontal: "center", vertical: "top" };
      row.getCell(1).font = {
        bold: true,
        size: 10,
        color: { argb: "FF" + dream.headerFill },
      };
    });

    // Freeze header
    ws.views = [{ state: "frozen", ySplit: headerRow.number, xSplit: 2 }];
  }

  // ── Sheet 6: All Prompts (flat, for copy-paste) ────────────────────────

  const allSheet = wb.addWorksheet("All Prompts (flat)", {
    properties: { tabColor: { argb: "FF" + BRAND.dark } },
  });

  allSheet.columns = [
    { width: 5 },
    { width: 20 },
    { width: 28 },
    { width: 110 },
  ];

  const allTitle = allSheet.addRow([
    "",
    "",
    "",
    "COMPLETE PROMPTS — Ready to paste into AI video tool",
  ]);
  allTitle.getCell(4).font = {
    bold: true,
    size: 13,
    color: { argb: "FF" + BRAND.deepPurple },
  };

  allSheet.addRow([]);

  const allHeader = allSheet.addRow(["#", "Dream", "Variation", "Full Prompt (Master + Scene)"]);
  applyHeaderStyle(allHeader, BRAND.dark);

  let counter = 0;
  for (const dream of DREAMS) {
    const variations = VIDEO_VARIATIONS.filter((v) => v.dreamId === dream.id);
    variations.forEach((v) => {
      counter++;
      const row = allSheet.addRow([
        counter,
        dream.label,
        v.name,
        v.prompt,
      ]);
      applyDataRow(row, counter % 2 === 0);
      row.getCell(1).alignment = { horizontal: "center", vertical: "top" };
    });
  }

  allSheet.views = [{ state: "frozen", ySplit: 3, xSplit: 3 }];

  // ── Write ──────────────────────────────────────────────────────────────

  const outPath = resolve(
    __dirname,
    "..",
    "Electric-Dreams-Video-Prompts.xlsx"
  );
  await wb.xlsx.writeFile(outPath);

  console.log(`\n  ✔ Excel exported → ${outPath}`);
  console.log(`    Sheets: Overview | Master Prompt | ${DREAMS.map((d) => d.label).join(" | ")} | All Prompts (flat)`);
  console.log(`    Total variations: ${counter}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
