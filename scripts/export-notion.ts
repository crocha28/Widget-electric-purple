import {
  VIDEO_VARIATIONS,
  GLOBAL_TAGS,
  MASTER_PROMPT,
  DREAM_TAGS,
  type DreamId,
  type DreamVideoVariation,
} from "../lib/video-prompts";
import { writeFileSync } from "fs";
import { resolve } from "path";

const DREAMS: { id: DreamId; label: string; emoji: string; tagline: string }[] =
  [
    {
      id: "archipelago",
      label: "Archipelago Sunset Cruise",
      emoji: "🌅",
      tagline:
        "Nature, purple sunset, and iconic worldwide waterways — 25 cinematic variations of a dream boat journey through the world's most beautiful destinations bathed in purple light.",
    },
    {
      id: "amber-festival",
      label: "Amber Festival",
      emoji: "🎸",
      tagline:
        "Music, neon, and electric energy — 25 cinematic variations of a dream concert night at the world's most iconic entertainment venues.",
    },
    {
      id: "floating-sauna",
      label: "Floating Sauna Experience",
      emoji: "🧖",
      tagline:
        "Wellness, steam, and stillness — 25 cinematic variations of a dream wellness ritual at the world's most breathtaking natural and thermal destinations.",
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

const STUDIO_MASTER =
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

function buildStudioPrompt(sceneBlock: string): string {
  const lines = sceneBlock.split("\n");
  const parts: string[] = [];
  let currentSection = "";
  let currentContent = "";

  for (const line of lines) {
    const match = line.match(
      /^(SCENE|CAMERA|FOCUS|KEY ELEMENT|ATMOSPHERE|COLOR EMPHASIS|MOTION):\s*(.*)/
    );
    if (match) {
      if (currentSection && currentContent) parts.push(currentContent.trim());
      currentSection = match[1];
      currentContent = match[2];
    } else if (currentSection) {
      currentContent += " " + line;
    }
  }
  if (currentSection && currentContent) parts.push(currentContent.trim());

  return STUDIO_MASTER + "\n\n" + parts.join(" ");
}

function variationBlock(v: DreamVideoVariation, i: number): string {
  const scene = extractScene(v.prompt);
  const studioPrompt = buildStudioPrompt(scene);

  return `
### ${i}. ${v.name}

| Field | Detail |
| --- | --- |
| **ID** | \`${v.id}\` |
| **Camera** | ${v.camera} |
| **Focus** | ${v.focus} |
| **Key Element** | ${v.keyElement} |
| **Atmosphere** | ${v.atmosphere} |
| **Tags** | ${v.tags.map((t) => `\`${t}\``).join(" ")} |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

\`\`\`
${studioPrompt}
\`\`\`

</details>

---
`;
}

function generateDocument(): string {
  const lines: string[] = [];

  // ── Header ─────────────────────────────────────────────────────────────

  lines.push(`# Electric Dreams — AI Video Production Guide`);
  lines.push(``);
  lines.push(`> **IQOS Electric Purple** · Summer 2026 Campaign · VML for PMI`);
  lines.push(``);
  lines.push(`---`);
  lines.push(``);

  // ── Overview ───────────────────────────────────────────────────────────

  lines.push(`## Project Overview`);
  lines.push(``);
  lines.push(`| | |`);
  lines.push(`| --- | --- |`);
  lines.push(`| **Client** | PMI / IQOS |`);
  lines.push(`| **Agency** | VML |`);
  lines.push(`| **Campaign** | Electric Purple — Electric Dreams |`);
  lines.push(`| **Market** | Global (Worldwide Destinations) |`);
  lines.push(`| **Deliverable** | 75 AI-generated videos (25 per dream) |`);
  lines.push(`| **Duration** | 8 seconds each |`);
  lines.push(`| **Aspect Ratio** | 9:16 (vertical / mobile-first) |`);
  lines.push(`| **Resolution** | 720p |`);
  lines.push(`| **Generation Tool** | WPP Open Creative Studio |`);
  lines.push(``);
  lines.push(
    `The landing page features a widget where users choose from 3 "Electric Dreams." Upon selection, a random video from a pool of 25 is played. All 75 videos are pre-generated with AI before launch.`
  );
  lines.push(``);
  lines.push(`---`);
  lines.push(``);

  // ── The 3 Dreams ───────────────────────────────────────────────────────

  lines.push(`## The 3 Dreams`);
  lines.push(``);
  lines.push(
    `| # | Dream | Theme | Videos |`
  );
  lines.push(`| --- | --- | --- | --- |`);
  lines.push(
    `| 1 | **Archipelago Sunset Cruise** | Nature / Sea / Purple Sunset / Worldwide | 25 |`
  );
  lines.push(
    `| 2 | **Amber Festival** | Music / Neon / Night Energy | 25 |`
  );
  lines.push(
    `| 3 | **Floating Sauna Experience** | Wellness / Steam / Stillness | 25 |`
  );
  lines.push(``);
  lines.push(`---`);
  lines.push(``);

  // ── Brand Color Palette ────────────────────────────────────────────────

  lines.push(`## Brand Color Palette`);
  lines.push(``);
  lines.push(
    `Every frame must feel immersed in the Electric Purple palette. These are the exact hex values for color grading:`
  );
  lines.push(``);
  lines.push(`| Color | Hex | Role |`);
  lines.push(`| --- | --- | --- |`);
  lines.push(
    `| 🟣 Deep Purple | \`#2E008B\` | Primary shadow tone, dominant in dark areas |`
  );
  lines.push(
    `| 🟣 Electric Violet | \`#9B0AA5\` | Mid-tone highlights, water reflections |`
  );
  lines.push(
    `| 🟣 Soft Lavender | \`#A082E6\` | Sky gradients, mist, soft highlights |`
  );
  lines.push(
    `| 🩷 Pink | \`#EB5ADC\` | Accent on foam, sparkles, warm highlights |`
  );
  lines.push(
    `| 🔵 Electric Blue | \`#3750DC\` | Cool accents, water depth, night sky |`
  );
  lines.push(
    `| 🔵 Light Blue | \`#7DA0EB\` | Zenith sky reflections, cold water |`
  );
  lines.push(``);
  lines.push(`---`);
  lines.push(``);

  // ── WPP Creative Studio Settings ───────────────────────────────────────

  lines.push(`## WPP Creative Studio — Interface Settings`);
  lines.push(``);
  lines.push(
    `Configure these settings once before generating. They stay the same for all 75 videos.`
  );
  lines.push(``);
  lines.push(`| Setting | Value |`);
  lines.push(`| --- | --- |`);
  lines.push(`| **Aspect Ratio** | Portrait (9:16) |`);
  lines.push(`| **Resolution** | 720p |`);
  lines.push(`| **Duration** | 8 seconds (slider to max) |`);
  lines.push(`| **Person Generation** | Don't Allow / Restrict |`);
  lines.push(`| **Generate Audio** | OFF |`);
  lines.push(``);
  lines.push(`---`);
  lines.push(``);

  // ── Negative Prompt ────────────────────────────────────────────────────

  lines.push(`## Negative Prompt (same for all 75 videos)`);
  lines.push(``);
  lines.push(
    `Paste this into the **Negative Prompt** field. Use the same text for every video.`
  );
  lines.push(``);
  lines.push("```");
  lines.push(NEGATIVE_PROMPT);
  lines.push("```");
  lines.push(``);
  lines.push(`---`);
  lines.push(``);

  // ── Master Visual Style ────────────────────────────────────────────────

  lines.push(`## Master Visual Style`);
  lines.push(``);
  lines.push(
    `This visual language is embedded in every prompt. It ensures consistency across all 75 videos.`
  );
  lines.push(``);
  lines.push(`### Color Grading`);
  lines.push(``);
  lines.push(
    `Every frame uses the Electric Purple palette. Shadows lean into deep indigo-purple (\`#2E008B\`). Mid-tones are slightly desaturated. Highlights bloom into lavender (\`#A082E6\`), pink (\`#EB5ADC\`), or electric blue (\`#7DA0EB\`). Purple-sunset warmth carries a violet haze underneath.`
  );
  lines.push(``);
  lines.push(`### Cinematic Language`);
  lines.push(``);
  lines.push(
    `Smooth, slow-motion-adjacent camera movements. No jump cuts or abrupt transitions. Shallow depth of field with anamorphic bokeh. Subtle lens flares when light hits the lens. Every movement feels weightless — like drifting through a lucid dream.`
  );
  lines.push(``);
  lines.push(`### Lighting`);
  lines.push(``);
  lines.push(
    `Pink-lavender warmth filtered through purple atmospheric haze. Strong backlight — silhouettes and rim-light encouraged. Volumetric light (god-rays, light shafts through mist/steam) when the scene supports it. Practicals (candles, string lights, neon, embers) cast warm pools that bleed into surrounding purple tones.`
  );
  lines.push(``);
  lines.push(`### Texture`);
  lines.push(``);
  lines.push(
    `Subtle filmic grain (organic, not digital noise). Slightly halated highlights reminiscent of Kodak Vision3 500T pushed one stop. Chromatic aberration on extreme edges only. The image should feel tactile and analog.`
  );
  lines.push(``);
  lines.push(`### Constraints`);
  lines.push(``);
  lines.push(
    `- **No close-up faces** or identifiable people (GDPR). Distant silhouettes or anonymous body parts (hands, shoulders from behind) are acceptable.`
  );
  lines.push(
    `- **No product placement**, brand logos, or text overlays.`
  );
  lines.push(`- **No UI elements**, watermarks, or visible AI artifacts.`);
  lines.push(
    `- **Loop-friendly motion**: first and last frames should have similar luminance and composition energy for seamless replay.`
  );
  lines.push(
    `- **Mood**: Aspirational, sensorial, immersive — "dreaming with your eyes open."`
  );
  lines.push(``);
  lines.push(`---`);
  lines.push(``);

  // ── Tag Taxonomy ───────────────────────────────────────────────────────

  lines.push(`## Tag Taxonomy`);
  lines.push(``);
  lines.push(
    `Tags are used for internal organization during review/approval and potential future widget filtering.`
  );
  lines.push(``);
  lines.push(
    `**Global tags** (all videos): ${GLOBAL_TAGS.map((t) => `\`${t}\``).join(", ")}`
  );
  lines.push(``);

  for (const dream of DREAMS) {
    const tags = DREAM_TAGS[dream.id];
    lines.push(`**${dream.label}**: ${tags.map((t) => `\`${t}\``).join(", ")}`);
    lines.push(``);
  }

  lines.push(`---`);
  lines.push(``);

  // ── Workflow ────────────────────────────────────────────────────────────

  lines.push(`## Production Workflow`);
  lines.push(``);
  lines.push(`1. Open WPP Creative Studio`);
  lines.push(
    `2. Set interface settings: **Portrait 9:16**, **720p**, **8s**, **Person Generation: Restrict**, **Audio: OFF**`
  );
  lines.push(`3. Paste the **Negative Prompt** (once — it stays for the session)`);
  lines.push(
    `4. Start with Dream 1 below — copy the prompt from each variation`
  );
  lines.push(
    `5. Paste into the **Prompt** field and generate`
  );
  lines.push(
    `6. Review the output. If it doesn't match, regenerate (the tool is non-deterministic)`
  );
  lines.push(
    `7. Save with the naming convention: \`[dream-id]-[number].mp4\` (e.g. \`archipelago-01.mp4\`)`
  );
  lines.push(`8. Repeat for all 25 variations, then move to the next dream`);
  lines.push(``);
  lines.push(`**Estimated time**: ~2-4 min per video (generation + review) = ~3-5 hours for all 75`);
  lines.push(``);
  lines.push(`---`);
  lines.push(``);
  lines.push(`---`);
  lines.push(``);

  // ── Dream Sections ─────────────────────────────────────────────────────

  for (const dream of DREAMS) {
    const variations = VIDEO_VARIATIONS.filter((v) => v.dreamId === dream.id);

    lines.push(`# ${dream.emoji} Dream: ${dream.label}`);
    lines.push(``);
    lines.push(`> ${dream.tagline}`);
    lines.push(``);

    // Summary table
    lines.push(
      `| # | Variation | Camera | Focus | Key Element | Atmosphere |`
    );
    lines.push(`| --- | --- | --- | --- | --- | --- |`);
    for (const v of variations) {
      lines.push(
        `| ${v.variationNumber} | **${v.name}** | ${v.camera} | ${v.focus} | ${v.keyElement} | ${v.atmosphere} |`
      );
    }
    lines.push(``);
    lines.push(`---`);
    lines.push(``);

    // Individual variations
    for (const v of variations) {
      lines.push(variationBlock(v, v.variationNumber));
    }

    lines.push(``);
  }

  // ── Footer ─────────────────────────────────────────────────────────────

  lines.push(`---`);
  lines.push(``);
  lines.push(`## File Naming Convention`);
  lines.push(``);
  lines.push(`| Dream | Pattern | Example |`);
  lines.push(`| --- | --- | --- |`);
  lines.push(
    `| Archipelago Sunset Cruise | \`archipelago-XX.mp4\` | \`archipelago-01.mp4\` |`
  );
  lines.push(
    `| Amber Festival | \`amber-festival-XX.mp4\` | \`amber-festival-01.mp4\` |`
  );
  lines.push(
    `| Floating Sauna Experience | \`floating-sauna-XX.mp4\` | \`floating-sauna-01.mp4\` |`
  );
  lines.push(``);
  lines.push(`---`);
  lines.push(``);
  lines.push(
    `*Document generated on ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} — VML for PMI/IQOS Electric Purple campaign.*`
  );

  return lines.join("\n");
}

const doc = generateDocument();
const outPath = resolve(
  __dirname,
  "..",
  "Electric-Dreams-Video-Production-Guide.md"
);
writeFileSync(outPath, doc, "utf-8");

console.log(`\nDocument exported → ${outPath}`);
console.log(`Total lines: ${doc.split("\n").length}`);
console.log(`Total variations documented: ${VIDEO_VARIATIONS.length}\n`);
