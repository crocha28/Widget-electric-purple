// ---------------------------------------------------------------------------
// Electric Dreams — AI Video Generation Prompt System
// 75 pre-generated video prompts (25 per dream) for the IQOS Electric Purple
// summer 2026 campaign. Each prompt is composed of a MASTER_PROMPT prefix
// (visual consistency) + a variation-specific scene block.
// ---------------------------------------------------------------------------

export type DreamId = "archipelago" | "grona-lund" | "floating-sauna";

export interface DreamVideoVariation {
  id: string;
  variationNumber: number;
  dreamId: DreamId;
  name: string;
  camera: string;
  focus: string;
  keyElement: string;
  atmosphere: string;
  tags: string[];
  prompt: string;
}

// ---------------------------------------------------------------------------
// MASTER PROMPT — prepended to every individual variation prompt
// ---------------------------------------------------------------------------

export const MASTER_PROMPT = `\
STRICT COLOR PALETTE — MANDATORY:
The ONLY colors allowed in the entire video are these six brand colors and \
their gradients between each other:
  1. Deep Purple #2e008b (shadows, dark areas, deep water, night sky)
  2. Electric Violet #9b0aa5 (mid-tones, reflections, ambient light)
  3. Soft Lavender #a082e6 (sky, mist, soft highlights, haze)
  4. Pink #eb5adc (accent highlights, sparkles, foam, rim light)
  5. Electric Blue #3750dc (cool accents, deep water, night sky edges)
  6. Light Blue #7da0eb (zenith sky, cold water reflections)
NO OTHER COLORS ARE PERMITTED. No yellow, no orange, no amber, no gold, no \
green, no red, no brown, no teal, no cyan. Even sunlight must appear as warm \
pink-lavender, not yellow or orange. Vegetation must read as dark purple or \
deep violet silhouettes, never green. Wood must appear as warm purple-brown \
tinted with violet. Water must be deep purple, electric violet, or blue — \
never teal or cyan. The sky must always be within the purple-blue-lavender \
spectrum. White is only acceptable in foam, mist, or highlights and must \
carry a lavender or pink tint.

CINEMATIC LANGUAGE:
The entire 8 seconds must feel like ONE single continuous shot — no cuts, no \
abrupt angle changes, no sudden shifts in perspective. The camera glides in a \
single fluid direction (e.g. slow dolly forward, gentle crane rise, steady \
orbit). If the camera moves, it commits to that trajectory for the full \
duration. Shallow depth of field with oval bokeh. Subtle lens flares \
permitted when light sources hit the lens. Dreamlike pacing: every movement \
feels weightless, as if the viewer is drifting through a lucid dream.

LIGHTING:
All light sources must appear within the brand palette. Sunset/pink-violeten-hour \
light must read as warm pink (#eb5adc) and soft lavender (#a082e6), NOT as \
yellow or amber. Backlight is encouraged — rim-light in pink or lavender. \
Volumetric light (god-rays, light shafts through mist or steam) must be \
tinted purple or lavender, never white or yellow. Practicals (candles, string \
lights, neon, embers) must cast pools of pink, violet, or lavender light.

TIME-OF-DAY MARKERS:
Every scene must include a clear, visible celestial reference — a large low \
sun on the horizon for pink-violet hour, a crescent moon or full moon for night \
scenes, a glowing dawn band for early morning, or a deep blue-to-violet \
gradient at zenith for blue hour. The viewer must instantly understand what \
time of day it is just by looking at the sky.

GEOGRAPHIC CONTEXT:
Every scene must feel grounded in a specific, recognizable place. Include \
environmental anchors that orient the viewer: distinctive architecture, \
named landmarks, characteristic vegetation (Nordic pine, birch), waterway \
shape, or skyline silhouettes. The viewer should never wonder "where is \
this?" — the location must be self-evident within the first 2 seconds.

TEXTURE & FILM STOCK:
Subtle filmic grain (organic, not digital noise). Slightly halated highlights \
reminiscent of classic 500T cinema film stock pushed one stop. Chromatic aberration on \
extreme edges only. No oversharpening — the image should feel tactile and \
analog even though it is AI-generated.

CONSTRAINTS:
- No close-up faces or identifiable people. Distant silhouettes or anonymous \
  body parts (hands, shoulders from behind) are acceptable.
- No product placement, brand logos, or text overlays — the product lives on \
  the landing page, not in the dream video.
- No UI elements, watermarks, or visible generation artifacts.
- The mood must be aspirational, sensorial, and immersive — "dreaming with \
  your eyes open."
- All motion must loop-friendly: the first and last frames should have similar \
  luminance and composition energy to allow seamless replay.
- CRITICAL: The camera must maintain ONE single continuous motion throughout \
  the entire 8 seconds. No mid-shot direction changes, no perspective shifts, \
  no cutting between angles. One fluid, committed movement from start to end.`;

// ---------------------------------------------------------------------------
// TAGGING TAXONOMY
// ---------------------------------------------------------------------------

export const GLOBAL_TAGS = [
  "electric-purple",
  "electric-dreams",
  "iqos",
  "summer-2026",
  "worldwide",
  "8s",
  "vertical",
  "ai-generated",
] as const;

export const DREAM_TAGS: Record<DreamId, readonly string[]> = {
  archipelago: [
    "nature", "sea", "sunset", "cruise", "archipelago", "pink-violeten-hour",
    "water", "islands", "boat", "horizon", "reflections", "waves", "calm",
    "serenity", "nordic", "twilight", "silhouette", "deck", "wake", "sky",
    "paris", "rome", "santorini", "maldives", "venice",
    "dubai", "sydney", "bangkok", "lisbon", "iceland",
    "whitsundays", "amalfi", "norway", "new-york", "istanbul",
    "ha-long-bay", "new-zealand", "australia", "lofoten", "mexico",
    "como", "ireland", "dubrovnik", "egypt", "nile",
  ],
  "grona-lund": [
    "music", "concert", "festival", "night", "lights", "stage", "crowd",
    "energy", "neon", "bass", "rhythm", "amusement-park", "ferris-wheel",
    "lasers", "confetti", "speakers", "vibration", "electric", "strobe",
    "atmosphere", "new-york", "london", "tokyo", "berlin", "rio",
    "coachella", "nashville", "paris", "havana", "las-vegas",
    "ibiza", "tomorrowland", "santa-monica", "amsterdam",
    "hollywood", "cappadocia", "detroit", "sydney", "dubai",
    "hong-kong", "glastonbury", "marrakech",
  ],
  "floating-sauna": [
    "wellness", "sauna", "steam", "water", "heat", "cold-plunge",
    "stillness", "wood", "floating", "lake", "minimal", "breath", "mist",
    "glow", "ritual", "contrast", "ice", "embers", "zen", "immersion",
    "iceland", "norway", "kyoto", "istanbul", "marrakech",
    "swiss-alps", "lake-bled", "lapland", "azores", "bali",
    "cenote", "finland", "tromso", "budapest", "dead-sea",
    "santorini", "capri", "abisko", "sahara", "hallstatt",
    "bangkok", "taj-mahal",
  ],
};

// ---------------------------------------------------------------------------
// Helper — compose a full prompt from master + scene block
// ---------------------------------------------------------------------------

function compose(scene: string): string {
  return `${MASTER_PROMPT}\n\n---\n\n${scene}`;
}

// ---------------------------------------------------------------------------
// DREAM 1 — Archipelago Sunset Cruise (25 variations)
// ---------------------------------------------------------------------------

const archipelagoVariations: DreamVideoVariation[] = [
  {
    id: "archipelago-01",
    variationNumber: 1,
    dreamId: "archipelago",
    name: "Paris Seine Wake",
    camera: "Tracking behind boat",
    focus: "Wide",
    keyElement: "Boat wake splitting purple-pink Seine River, Eiffel Tower silhouette",
    atmosphere: "Purple sunset, clear sky",
    tags: ["sunset", "wake", "pink-violeten-hour", "water", "paris"],
    prompt: compose(`\
SCENE: A sleek river cruise boat glides along the Seine River in Paris at pink-violeten \
hour. The camera follows from behind, centered on the soft lavender V-shaped wake \
that splits the water into two shimmering curtains — one side catching the \
sinking pink-lavender sun, the other side reflecting deep violet sky. The iconic \
Eiffel Tower silhouette rises in the background against the purple sky, while \
stone bridges arch over the Seine ahead. The wake's foam catches pink and \
lavender highlights.
CAMERA: Tracking behind the vessel at water level, drifting slowly upward over \
8 seconds to reveal more of the Parisian skyline and the Eiffel Tower.
FOCUS: Wide — the boat occupies the lower third, the wake fills the middle, \
and the purple-pink sky with the Eiffel Tower dominates the top.
KEY ELEMENT: The V-shaped wake acts as leading lines that pull the eye toward \
the violet horizon and the Eiffel Tower silhouette.
ATMOSPHERE: Purple sunset with clear sky. Warm pink-lavender sunlight from the left, \
filtered through a purple atmospheric haze that tints the shadows indigo.
COLOR EMPHASIS: Pink-to-purple gradient on the water surface; deep purple \
(#2e008b) in the shadows of the bridges and tower; soft lavender (#a082e6) in the sky \
near the horizon; pink (#eb5adc) catching on the foam crests.
MOTION: The boat moves steadily forward; the wake expands rhythmically; gentle \
ripples propagate outward; Parisian landmarks slide past in parallax.`),
  },
  {
    id: "archipelago-02",
    variationNumber: 2,
    dreamId: "archipelago",
    name: "Rome Tiber Pass",
    camera: "Slow lateral dolly",
    focus: "Wide",
    keyElement: "Castel Sant'Angelo silhouetted against violet sky from the Tiber",
    atmosphere: "Purple sunset, haze",
    tags: ["silhouette", "pink-violeten-hour", "rome", "tiber"],
    prompt: compose(`\
SCENE: The camera moves laterally along the waterline of the Tiber River in \
Rome at dusk. The iconic Castel Sant'Angelo rises on the right bank in the \
mid-ground, its cylindrical fortress and angel statue silhouetted against a \
sky of violet, lavender, and deep violet-pink. The water of the Tiber catches \
fragments of the sky's color — electric violet in the troughs, pink-violet on \
the wave crests. The Ponte Sant'Angelo bridge with its baroque angel statues \
stretches across the river in the foreground, its stone arches reflected in \
the purple water. A thin atmospheric haze softens the dome of St. Peter's \
Basilica on the far horizon into purple silhouettes layered in depth.
CAMERA: Slow lateral dolly at water level, left to right, revealing the \
Castel and the bridge in a cinematic parallax.
FOCUS: Wide — foreground water detail yields to the sharp Castel mid-ground \
and a hazy Vatican skyline behind.
KEY ELEMENT: Castel Sant'Angelo as an iconic Roman sentinel — its distinctive \
cylindrical profile and angel statue instantly recognizable against the \
violet-purple sky.
ATMOSPHERE: Purple sunset with low atmospheric haze. The sun is just off-frame \
left, casting long warm sidelight that rakes across the Castel walls.
COLOR EMPHASIS: Deep purple (#2e008b) on the fortress stone shadows; electric \
violet (#9b0aa5) on the mid-ground water; soft lavender (#a082e6) in the \
haze over St. Peter's dome; pink-violet and pink (#eb5adc) on the sunlit Castel walls.
MOTION: Gentle lateral drift revealing the Castel from different angles; \
water laps softly against the ancient stone embankment; the angel statues on \
the bridge stand sentinel; a distant bird glides across the violet sky.`),
  },
  {
    id: "archipelago-03",
    variationNumber: 3,
    dreamId: "archipelago",
    name: "Santorini Deck Reflections",
    camera: "Static low-angle",
    focus: "Detail",
    keyElement: "Polished deck reflecting caldera sunset, white buildings visible",
    atmosphere: "Purple sunset, calm",
    tags: ["deck", "reflections", "calm", "pink-violeten-hour", "santorini"],
    prompt: compose(`\
SCENE: Low-angle shot from deck level of a polished teak boat deck anchored in \
the Santorini caldera. The wood is wet from sea spray, creating a mirror-like \
surface that reflects the purple-pink sunset sky above. A coiled nautical rope \
sits in the left third of frame. In the background, the iconic white-washed \
buildings of Oia cling to the caldera cliff edge, their domes and walls \
rendered as soft lavender silhouettes against the violet sky. Warm pink-lavender \
light spills across the deck from the right while purple shadows pool between \
the planks.
CAMERA: Static, positioned just inches above the deck surface, with a very \
slight forward drift over 8 seconds.
FOCUS: Detail — shallow depth of field keeps the nearest planks sharp while \
the white buildings of Santorini and the horizon melt into soft lavender bokeh.
KEY ELEMENT: The wet deck surface acting as a mirror for the sky's \
purple-to-pink-violet gradient, with Santorini's caldera silhouette beyond.
ATMOSPHERE: Purple sunset, dead calm. No wind. The reflection on the deck is \
almost perfect — a second sky beneath the viewer's feet.
COLOR EMPHASIS: Warm pink-lavender and soft lavender (#a082e6) reflected on the wet \
wood; deep purple (#2e008b) in the plank gaps and shadows; pink (#eb5adc) \
highlights on the rope fibers catching the sun; white buildings tinted lavender.
MOTION: A single water droplet slides slowly across the polished surface; the \
reflected clouds drift imperceptibly; the boat sways with the gentlest rocking.`),
  },
  {
    id: "archipelago-04",
    variationNumber: 4,
    dreamId: "archipelago",
    name: "Maldives Horizon Melt",
    camera: "Slow crane rising",
    focus: "Ultra-wide",
    keyElement: "Infinite Indian Ocean horizon with overwater bungalow silhouettes",
    atmosphere: "Blue hour, mist",
    tags: ["horizon", "twilight", "sea", "calm", "maldives"],
    prompt: compose(`\
SCENE: The camera starts just above the Indian Ocean surface in the Maldives — \
close enough to see individual ripples — then slowly cranes upward to reveal an \
endless horizon where the dark sea merges with a gradient sky that transitions \
from deep indigo at the top through electric violet to a thin band of residual \
pink-lavender at the horizon line. Silhouettes of overwater bungalows stretch \
along a sandbar to the right, their thatched roofs and stilts creating a \
distinctive Maldivian profile. A low mist hugs the water surface, diffusing \
into lavender wisps. The sea is nearly still, with long, slow swells.
CAMERA: Slow crane rise — starts at 30cm above water, ends at roughly 3m, \
maintaining the horizon at the center of frame throughout.
FOCUS: Ultra-wide — the horizon line is the subject, stretching edge to edge, \
with overwater bungalows punctuating the silhouette.
KEY ELEMENT: The precise line where ocean and sky meet, blurred by mist into \
an ambiguous, dreamlike boundary, with the Maldivian bungalows as anchors.
ATMOSPHERE: Blue hour, 20 minutes after sunset. The light is cold and \
ethereal, filtered through a thin mist layer that glows faintly violet.
COLOR EMPHASIS: Deep purple (#2e008b) dominating the water and upper sky; \
electric violet (#9b0aa5) at the horizon glow; soft lavender (#a082e6) in the \
mist; a whisper of electric blue (#3750dc) in the water highlights.
MOTION: The crane rise is the primary motion; the mist drifts slowly right to \
left; long ocean swells undulate in slow motion.`),
  },
  {
    id: "archipelago-05",
    variationNumber: 5,
    dreamId: "archipelago",
    name: "Venice Canal Ripples",
    camera: "Macro, slight drift",
    focus: "Extreme detail",
    keyElement: "Grand Canal water ripples catching violet light from palazzo facades",
    atmosphere: "Purple sunset",
    tags: ["water", "reflections", "waves", "pink-violeten-hour", "venice"],
    prompt: compose(`\
SCENE: Extreme close-up of the Grand Canal surface in Venice. Each ripple acts \
as a tiny curved mirror reflecting a different slice of the sunset sky and the \
ornate palazzo facades lining the canal — some crests catch pink-violet, others \
catch electric violet, others catch pink. The water between the ripples is dark \
indigo-purple, creating a mosaic of moving color. Occasional micro-bubbles \
catch the light as tiny pinpoints. The distorted reflections of Gothic arched \
windows and balconies from the palazzos shimmer in the water.
CAMERA: Macro lens hovering just above the canal surface with a gentle \
lateral drift, as if floating on the current of a passing gondola.
FOCUS: Extreme detail — individual ripple crests are razor-sharp; the troughs \
soften into bokeh.
KEY ELEMENT: The Grand Canal water surface acting as a fragmented, living \
canvas of the purple-violet palette, with palazzo reflections adding depth.
ATMOSPHERE: Purple sunset — warm directional light from a low angle creates \
specular highlights on every ripple crest.
COLOR EMPHASIS: Electric violet (#9b0aa5) and pink-violet alternating on ripple \
crests; deep purple (#2e008b) in the troughs; pink (#eb5adc) specular \
highlights; light blue (#7da0eb) reflections from the zenith sky.
MOTION: Ripples propagate diagonally across frame in slow motion; light \
dances across the surface in a hypnotic, rhythmic pattern.`),
  },
  {
    id: "archipelago-06",
    variationNumber: 6,
    dreamId: "archipelago",
    name: "Dubai Creek Overhead",
    camera: "Top-down drone",
    focus: "Overhead",
    keyElement: "Boat approaching Dubai Creek with Burj Khalifa and skyline visible",
    atmosphere: "Twilight, clear",
    tags: ["boat", "dubai", "skyline", "aerial"],
    prompt: compose(`\
SCENE: Bird's-eye view looking straight down at a traditional wooden dhow \
cruising along Dubai Creek — the historic waterway that splits the city into \
Deira and Bur Dubai. The towering Burj Khalifa pierces the skyline in the \
distance, its spire catching the last violet light. The modern Dubai skyline \
clusters along the far shore with its distinctive skyscrapers rendered as \
purple silhouettes. The water of the Creek is a deep electric violet, catching \
lavender and pink highlights where the twilight sky reflects. The dhow's wake \
draws a perfect white line through the purple water. Traditional souks and \
waterfront buildings line the near shore.
CAMERA: Top-down drone, slowly rotating clockwise (about 15 degrees over 8 \
seconds) to add a subtle vertiginous drift.
FOCUS: Overhead — the dhow is small in frame, emphasizing the Creek's \
serpentine path and the dramatic skyline beyond.
KEY ELEMENT: Dubai Creek as the historic heart of the city — the old souks \
visible below, the futuristic skyline with Burj Khalifa piercing the purple sky.
ATMOSPHERE: Twilight — the sky provides even, diffused purple light with no \
hard shadows. Clear air, no haze.
COLOR EMPHASIS: Deep purple (#2e008b) water; electric violet (#9b0aa5) in the \
open water reflections; the Burj Khalifa catches soft lavender (#a082e6) light; \
the dhow's white hull is the single bright moving element; wake foam tinted \
lavender (#a082e6).
MOTION: The dhow crawls forward leaving its white wake; the drone rotates \
slowly; tiny ripples spread outward from the boat's passage; lights begin \
to glow across the Dubai skyline.`),
  },
  {
    id: "archipelago-07",
    variationNumber: 7,
    dreamId: "archipelago",
    name: "Sydney Harbour Spray",
    camera: "Low-angle from bow",
    focus: "Medium",
    keyElement: "Spray of water with Opera House visible through purple backlight",
    atmosphere: "Sunset, backlit",
    tags: ["water", "boat", "waves", "sunset", "sydney"],
    prompt: compose(`\
SCENE: Shot from the bow of a harbour ferry, looking forward and slightly down. \
The prow cuts through Sydney Harbour water, sending up curtains of fine spray \
on both sides. The spray is backlit by the setting sun, turning each droplet \
into a tiny prism of pink-violet, violet, and pink. Through the spray, the \
iconic Sydney Opera House sail-shell roofline is visible but softened, its \
white shells catching purple and lavender light. The Harbour Bridge arches \
across the background. The polished brass fitting on the bow catches a warm \
purple-pink reflection.
CAMERA: Low-angle, mounted near the waterline on the bow, with a subtle \
forward lean as the boat rises and dips on gentle harbour swells.
FOCUS: Medium — the spray curtain is the sharp subject; the Opera House beyond \
is soft and dreamy.
KEY ELEMENT: Backlit spray droplets acting as prisms for the purple-violet \
palette, with the Opera House silhouette emerging through the mist.
ATMOSPHERE: Sunset with strong backlight. The sun is low and directly ahead, \
creating a corona effect filtered through the spray.
COLOR EMPHASIS: Pink (#eb5adc) and lavender in the backlit spray; electric violet \
(#9b0aa5) in the water; deep purple (#2e008b) in the shadowed hull; soft \
lavender (#a082e6) in the sky and on the Opera House shells.
MOTION: Continuous spray arcing upward and falling back; the boat rocks \
gently on swells; droplets hang in slow motion mid-air.`),
  },
  {
    id: "archipelago-08",
    variationNumber: 8,
    dreamId: "archipelago",
    name: "Bangkok River Glow",
    camera: "Slow orbit",
    focus: "Medium",
    keyElement: "River lanterns and lights with Wat Arun temple silhouette",
    atmosphere: "Blue hour",
    tags: ["twilight", "calm", "reflections", "bangkok"],
    prompt: compose(`\
SCENE: A string of traditional Thai lanterns and Edison-bulb lights stretches \
across a river boat's deck on the Chao Phraya River in Bangkok. Their \
pink-lavender glow creates pools of warm light on the wooden surface. Beyond \
the deck railing, the magnificent silhouette of Wat Arun — the Temple of Dawn — \
rises against the blue-hour sky in deep electric violet gradient. The temple's \
iconic prang (tower) and its ornate spire are unmistakable. The lanterns' light \
reflects on polished brass fittings and glass surfaces on deck. A wine glass \
sits on a small table, catching both the pink-lavender lantern light and the \
violet sky.
CAMERA: Slow orbit around the lantern string, moving roughly 30 degrees over \
8 seconds, keeping the lights and Wat Arun in constant relationship.
FOCUS: Medium — the nearest lantern bulb is in focus with soft lavender bokeh on the \
more distant bulbs and the purple temple silhouette.
KEY ELEMENT: The warm pink-lavender of the lanterns against the cold violet of the \
twilight sky and Wat Arun's silhouette — a temperature contrast that unifies \
in the purple-violet palette.
ATMOSPHERE: Blue hour — the sky is luminous violet-blue; the deck is lit only \
by the practical lanterns; Wat Arun glows with subtle purple uplighting.
COLOR EMPHASIS: Warm pink-lavender/pink-violet from lanterns; deep purple (#2e008b) sky; \
electric violet (#9b0aa5) at the horizon and temple silhouette; soft lavender \
(#a082e6) bokeh on distant lights; the wine glass catches pink (#eb5adc) reflections.
MOTION: Slow orbital drift; lanterns sway gently with the boat's rocking; the \
wine glass surface trembles with micro-ripples; distant long-tail boats glide \
past on the Chao Phraya.`),
  },
  {
    id: "archipelago-09",
    variationNumber: 9,
    dreamId: "archipelago",
    name: "Lisbon Sail Silhouette",
    camera: "Static wide",
    focus: "Wide",
    keyElement: "Sailboat silhouette with Torre de Belém and Tagus River",
    atmosphere: "Sunset",
    tags: ["silhouette", "sunset", "boat", "sky", "lisbon"],
    prompt: compose(`\
SCENE: A classic Portuguese sailboat in perfect silhouette against a sky that \
bleeds from deep pink-lavender at the horizon through electric violet to deep purple \
overhead. The sails are full but the boat moves slowly — the scene is about \
stillness, not speed. To the right, the Torre de Belém stands as a \
recognizable landmark on the Tagus River shore, its Manueline tower rendered \
as a dark profile against the violet sky. The water of the Tagus below is a \
dark mirror, reflecting the sky's gradient in muted, deeper tones. The 25 de \
Abril Bridge spans the distant background as a dark line.
CAMERA: Static wide shot. The boat is positioned at the rule-of-thirds \
intersection, left third of frame. No camera movement — the stillness is the \
point.
FOCUS: Wide — everything from the water's edge to the clouds is in focus, \
creating a painterly depth with Torre de Belém as a geographic anchor.
KEY ELEMENT: The stark black silhouette of the sailboat's mast, rigging, and \
hull against the intensely colored sky, with Torre de Belém identifying Lisbon.
ATMOSPHERE: Peak sunset — the sky is at maximum saturation. No clouds, just \
pure gradient over the Tagus.
COLOR EMPHASIS: The sky is the canvas — pink-lavender at bottom, electric violet \
(#9b0aa5) in the middle, deep purple (#2e008b) at the top. The water mirrors \
this but two stops darker. The silhouette is pure black (#34303d).
MOTION: Minimal — the boat drifts almost imperceptibly; the water surface \
shimmers with slow, oily undulations; the reflected colors shift subtly.`),
  },
  {
    id: "archipelago-10",
    variationNumber: 10,
    dreamId: "archipelago",
    name: "Iceland Aurora Shimmer",
    camera: "Slow tilt up",
    focus: "Wide",
    keyElement: "Aurora borealis above Jökulsárlón glacier lagoon with icebergs",
    atmosphere: "Night, clear",
    tags: ["sky", "aurora", "iceland", "serenity"],
    prompt: compose(`\
SCENE: The camera starts on dark silhouettes of icebergs floating in \
Jökulsárlón glacier lagoon in Iceland, reflected in still water, then tilts \
slowly upward to reveal a sky where the deep purple of night is alive with \
shimmering curtains of violet-tinted aurora borealis, interweaving with the \
dominant violet and lavender tones. The distinctive diamond-shaped icebergs \
of Jökulsárlón catch purple and lavender reflections on their surfaces. Stars \
are faintly visible. The water below mirrors both the aurora and the purple sky, \
with icebergs creating dark geometric shapes in the reflection.
CAMERA: Slow tilt up — starts on water reflection and icebergs, ends on the \
aurora-tinged sky. Steady, meditative pace.
FOCUS: Wide — sharp from the iceberg silhouettes to the stars.
KEY ELEMENT: The aurora borealis draped across the sky above Iceland's most \
iconic glacier lagoon — violet and lavender curtains dancing over the icebergs.
ATMOSPHERE: Clear Icelandic night. The air is perfectly still. The \
temperature of the light is cold but alive with subtle color shifts from the \
aurora.
COLOR EMPHASIS: Deep purple (#2e008b) as the base sky; electric violet \
(#9b0aa5) and soft lavender (#a082e6) in the aurora curtains (with faint \
lavender accents); electric blue (#3750dc) in the star reflections on water \
and iceberg surfaces.
MOTION: The tilt is the primary motion; the aurora shimmers in slow, \
undulating curtains; stars twinkle subtly; water reflects everything in \
gentle distortion; icebergs drift almost imperceptibly.`),
  },
  {
    id: "archipelago-11",
    variationNumber: 11,
    dreamId: "archipelago",
    name: "Whitsundays Wave Texture",
    camera: "Tracking alongside",
    focus: "Detail",
    keyElement: "Ocean surface near Whitehaven Beach with electric violet undertones",
    atmosphere: "Purple sunset",
    tags: ["waves", "water", "reflections", "whitsundays"],
    prompt: compose(`\
SCENE: The camera travels alongside a boat at water level in the Whitsunday \
Islands, focused on the Coral Sea surface texture near Whitehaven Beach. The \
water has a deep electric violet base color with pink-violeten-hour light painting \
every wave crest in pink-lavender. The interaction between the hull's pressure wave \
and the pristine waters creates complex, mesmerizing patterns — standing waves, \
interference patterns, and tiny vortices. The pure silica sand of Whitehaven \
Beach is faintly visible beneath the shallow water at the edge of frame, \
tinted lavender.
CAMERA: Tracking alongside the hull at water level, matching the boat's \
speed, focused on the 2-meter zone where hull meets water.
FOCUS: Detail — the nearest wave textures are sharp; background water softens \
into an impressionist blur of violet and pink-violet with Whitsunday islands distant.
KEY ELEMENT: The complex fluid dynamics of water against hull, painted in \
purple and pink-violet, above the world-famous Whitehaven sand.
ATMOSPHERE: Purple sunset — low-angle sunlight rakes across the wave texture, \
exaggerating every crest and trough with dramatic light and shadow.
COLOR EMPHASIS: Electric violet (#9b0aa5) in the wave troughs and shadows; \
pink-violet crests; deep purple (#2e008b) in the deeper water; occasional pink \
(#eb5adc) highlight where spray catches direct sun.
MOTION: Continuous forward tracking; complex fluid motion in the wave \
patterns; occasional spray droplets arcing through frame.`),
  },
  {
    id: "archipelago-12",
    variationNumber: 12,
    dreamId: "archipelago",
    name: "Amalfi Harbour Light",
    camera: "Dolly forward",
    focus: "Wide",
    keyElement: "Positano village clinging to cliffside, harbour lights glowing",
    atmosphere: "Twilight, foggy",
    tags: ["amalfi", "positano", "mist", "cliffside"],
    prompt: compose(`\
SCENE: Dusk settling over the Amalfi Coast — the camera approaches Positano \
from the sea, one of the most photographed villages in the world. The iconic \
cascade of pastel buildings clings to the near-vertical cliffside, their \
facades now rendered in pink-lavender and violet tones under the purple \
twilight. A harbour navigation light emits a steady glow that cuts through \
a low-hanging violet mist rolling in from the Tyrrhenian Sea. The Church of \
Santa Maria Assunta with its distinctive majolica dome is visible mid-cliff. \
Small fishing boats bob gently in the harbour below, their colored hulls \
catching purple ambient light. Terrace lights begin to twinkle across the \
vertical village.
CAMERA: Slow dolly forward across the harbour water, approaching Positano's \
dramatic cliffside waterfront over 8 seconds.
FOCUS: Wide — foreground wave crests are soft; the village waterfront climbing \
the cliff is the mid-ground subject; the mountain ridge behind is ultra-soft \
in fog.
KEY ELEMENT: Positano's iconic vertical village as the Amalfi Coast's most \
famous destination — buildings cascading down the cliff face like a purple \
waterfall, harbour lights glowing through twilight.
ATMOSPHERE: Twilight with dense low fog rolling in from the Tyrrhenian Sea. \
Visibility is limited, creating a mysterious, edge-of-the-world feeling.
COLOR EMPHASIS: Soft lavender (#a082e6) in the illuminated mist; deep \
purple (#2e008b) in the surrounding cliff shadows; electric violet (#9b0aa5) on \
the harbour water reflections; the village buildings catch purple \
ambient light; pink-violet from the harbour lights and terrace lamps.
MOTION: Slow forward dolly; the harbour light glows steadily; mist drifts \
and swirls around the cliff face; fishing boat masts sway gently; Tyrrhenian \
waves lap against the harbour walls.`),
  },
  {
    id: "archipelago-13",
    variationNumber: 13,
    dreamId: "archipelago",
    name: "Fjord Sunset Burst",
    camera: "Static",
    focus: "Wide",
    keyElement: "Sun touching horizon between Geirangerfjord mountain walls",
    atmosphere: "Sunset peak",
    tags: ["sunset", "sky", "horizon", "pink-violeten-hour", "norway"],
    prompt: compose(`\
SCENE: The exact moment the sun touches the horizon line, framed between the \
towering walls of Geirangerfjord in Norway. The fjord's steep mountain walls \
rise on either side, channeling the sky into a dramatic natural corridor. The \
sky detonates into bands of color — pink-lavender closest to the sun, then hot \
pink, electric violet, soft lavender, and finally deep purple overhead. The \
mountains' silhouettes are dark violet, with the famous Seven Sisters \
waterfall cascading as a thin lavender ribbon on the left cliff face. Thin \
clouds catch these colors and streak them horizontally across the narrow sky. \
The fjord water below is a dark mirror reflecting the explosion in slightly \
muted tones.
CAMERA: Static — locked off on a tripod. The stillness contrasts with the \
sky's intensity. Very subtle exposure shift as the sun moves.
FOCUS: Wide — everything sharp, fjord walls to zenith.
KEY ELEMENT: The sun itself at the exact moment of horizon contact, framed \
by Geirangerfjord's walls as a full-spectrum showcase of the purple-violet palette.
ATMOSPHERE: Peak sunset — maximum color saturation. Clear sky with scattered \
high cirrus clouds acting as color canvases between the fjord walls.
COLOR EMPHASIS: Full palette in natural gradient — pink-lavender/pink-violet at the center, \
pink (#eb5adc), electric violet (#9b0aa5), soft lavender (#a082e6), deep \
purple (#2e008b) radiating outward; mountain walls in deep purple silhouette.
MOTION: Near-static — the sun sinks imperceptibly; clouds drift at altitude; \
the fjord surface catches and releases colors in slow, breathing undulations; \
the waterfall shimmers.`),
  },
  {
    id: "archipelago-14",
    variationNumber: 14,
    dreamId: "archipelago",
    name: "Brooklyn Bridge Rope & Rail",
    camera: "Slow pan",
    focus: "Detail",
    keyElement: "Nautical rope on railing, Brooklyn Bridge bokeh behind",
    atmosphere: "Purple sunset",
    tags: ["boat", "calm", "new-york", "brooklyn-bridge"],
    prompt: compose(`\
SCENE: Close-up of a coil of thick nautical rope resting on a brass rail at \
the side of a boat on New York's East River. The rope's hemp fibers catch warm \
pink-violeten-hour light, revealing texture and subtle purple shadow between the \
coils. Behind the railing, the Brooklyn Bridge's Gothic arches and suspension \
cables create a stunning field of purple and pink-violet bokeh circles. The \
Manhattan skyline rises in the far background as a violet silhouette. The brass \
rail has a warm pink-lavender patina with violet reflections from the sky.
CAMERA: Slow pan from the rope coil to the right, gradually shifting focus \
from the rope to the Brooklyn Bridge bokeh beyond the railing.
FOCUS: Detail — shallow depth of field. The rope starts sharp, then focus \
racks to the bridge bokeh, then back.
KEY ELEMENT: The tactile materiality of the rope — hemp, brass, wood — \
juxtaposed with the ethereal purple bokeh of the Brooklyn Bridge and East River.
ATMOSPHERE: Purple sunset, calm. Warm sidelight from the left paints the rope \
in pink-lavender while the shadows between coils are deep violet.
COLOR EMPHASIS: Warm pink-lavender on rope fibers; deep purple (#2e008b) shadows; \
soft lavender (#a082e6) and pink (#eb5adc) bokeh circles on the bridge cables; \
brass rail reflects electric violet (#9b0aa5) from the sky.
MOTION: Slow pan; the rope sways almost imperceptibly with the boat's gentle \
rocking; bokeh circles from the bridge lights shift and dance.`),
  },
  {
    id: "archipelago-15",
    variationNumber: 15,
    dreamId: "archipelago",
    name: "Bosphorus Passage",
    camera: "Slow dolly between",
    focus: "Wide",
    keyElement: "Boat entering the Bosphorus strait with mosque silhouettes",
    atmosphere: "Purple sunset, haze",
    tags: ["water", "istanbul", "bosphorus", "cruise"],
    prompt: compose(`\
SCENE: The boat enters the legendary Bosphorus strait — the narrow waterway \
connecting Europe and Asia through the heart of Istanbul. The camera is \
positioned at the bow, looking forward through the strait. The iconic \
silhouettes of the Blue Mosque and Hagia Sophia rise on the left (European \
side), their domes and minarets catching pink-lavender sunset light against \
the violet sky. On the right, the Asian shore is a series of deep purple \
hillside silhouettes dotted with soft lavender lights. The water in the \
strait is deeply colored — black-purple in the shadow of the city, \
brightening to electric violet where the sky light reflects. Ottoman-era \
waterfront mansions (yalıs) line both shores, their facades bathed in pink.
CAMERA: Slow dolly forward, as if riding the bow of the boat through the \
Bosphorus. The mosque skyline slowly reveals itself as the boat progresses.
FOCUS: Wide — sharp mosque silhouettes on the left framing the strait ahead.
KEY ELEMENT: The Bosphorus as the world's most famous strait passage — \
Istanbul's iconic mosque skyline emerging through purple twilight haze, \
where two continents meet.
ATMOSPHERE: Purple sunset with atmospheric haze diffusing the light around \
the mosque domes. The warm pink light on the historic facades contrasts with \
the purple shadows of the strait.
COLOR EMPHASIS: Deep purple (#2e008b) and near-black on the shadowed shores; \
electric violet (#9b0aa5) on the water surface; warm pink-violet and pink-lavender on the \
mosque domes and minarets; soft lavender (#a082e6) haze around the skyline; \
ferry boats' white hulls catch pink (#eb5adc) light.
MOTION: Forward dolly through the strait; water ripples reflect off the \
shore walls; ferries cross in the distance; the mosque skyline grows larger \
and more detailed as the boat approaches.`),
  },
  {
    id: "archipelago-16",
    variationNumber: 16,
    dreamId: "archipelago",
    name: "Ha Long Bay Glass",
    camera: "Low-angle skim",
    focus: "Detail",
    keyElement: "Glassy water reflecting karst limestone pillars in purple light",
    atmosphere: "Blue hour, dead calm",
    tags: ["reflections", "water", "calm", "ha-long-bay"],
    prompt: compose(`\
SCENE: The camera skims just millimeters above a perfectly still water surface \
in Ha Long Bay, Vietnam, that mirrors the blue-hour sky so faithfully that it \
is nearly impossible to tell where water ends and sky begins. Towering karst \
limestone pillars rise from the water on both sides, their ancient weathered \
surfaces catching deep purple and violet light. The reflected sky is a deep \
gradient from electric violet at the horizon to deep purple overhead. The \
limestone pillars appear both above and below the waterline in perfect \
symmetry. The only disruption is one tiny ripple that slowly expands from \
where a raindrop fell.
CAMERA: Low-angle skim — the lens is nearly touching the water surface, \
drifting forward with infinite slowness between two limestone pillars.
FOCUS: Detail — the single expanding ripple is sharp; the reflected sky and \
karst pillars are slightly soft.
KEY ELEMENT: The perfect mirror symmetry between water and sky, disrupted by \
one poetic ripple, framed by Ha Long Bay's iconic limestone formations.
ATMOSPHERE: Blue hour, dead calm. No wind, no waves. The world feels held in \
suspension between the ancient stone pillars.
COLOR EMPHASIS: Electric violet (#9b0aa5) at the mirror horizon; deep purple \
(#2e008b) in both the real and reflected sky and on the limestone surfaces; \
soft lavender (#a082e6) in the ripple's interference pattern; electric blue \
(#3750dc) at the zenith and its reflection.
MOTION: Near-static — the single ripple expands in concentric rings; the \
camera drifts almost imperceptibly forward; the limestone pillar reflections \
shimmer.`),
  },
  {
    id: "archipelago-17",
    variationNumber: 17,
    dreamId: "archipelago",
    name: "Milford Sound Cathedral",
    camera: "Tilt up from water",
    focus: "Wide",
    keyElement: "Dramatic clouds lit purple between Milford Sound mountain walls",
    atmosphere: "Sunset, dramatic clouds",
    tags: ["sky", "sunset", "new-zealand", "mountains"],
    prompt: compose(`\
SCENE: Starting on the dark purple water surface of Milford Sound in New \
Zealand, the camera tilts upward to reveal a cathedral of cumulonimbus clouds \
rising between the towering mountain walls of the fjord. Mitre Peak — \
Milford Sound's iconic pyramid-shaped mountain — rises dramatically on the \
left. The clouds are lit from below by the setting sun — their bases glow \
pink-lavender and electric violet, while their towering tops darken to deep \
indigo-purple. Light shafts break through gaps between clouds, striking the \
fjord water as lavender god-rays. Stirling Falls cascades down the right \
cliff face as a thin violet ribbon. A thin strip of pink-violet horizon is \
visible between the water and the cloud base.
CAMERA: Slow tilt up — water to sky, taking the full 8 seconds to reveal \
the clouds' full height framed between the mountain walls.
FOCUS: Wide — deep focus from the water surface through Mitre Peak to the \
cloud tops.
KEY ELEMENT: The monumental scale of the cloud formations lit in the Electric \
Purple palette, framed between Milford Sound's mountain walls — a natural \
cathedral of stone, water, and sky.
ATMOSPHERE: Sunset with dramatic cloud cover. Volumetric light beams. The air \
feels heavy with potential between the fjord walls.
COLOR EMPHASIS: Deep purple (#2e008b) in the cloud tops, mountain walls, and \
water; electric violet (#9b0aa5) on the cloud bases; soft lavender (#a082e6) \
in the god-rays; pink (#eb5adc) on the cloud edges catching direct sunset light.
MOTION: Slow tilt upward; clouds billow and evolve in slow motion; god-rays \
shift and breathe; the water surface catches falling light patches; the \
waterfall shimmers.`),
  },
  {
    id: "archipelago-18",
    variationNumber: 18,
    dreamId: "archipelago",
    name: "Reef Wake Symmetry",
    camera: "Following drone",
    focus: "Overhead",
    keyElement: "V-shaped wake stretching over deep purple Great Barrier Reef waters",
    atmosphere: "Purple sunset",
    tags: ["wake", "boat", "water", "australia"],
    prompt: compose(`\
SCENE: Drone view following directly above and behind a cruise boat over the \
Great Barrier Reef in Australia. The vessel creates a perfect symmetrical \
V-wake that stretches to the bottom of frame and beyond. The wake's white foam \
lines create a strong geometric pattern against the deep violet reef waters. \
Below the surface, the dark shapes of coral formations are faintly visible as \
deeper purple patches beneath the electric violet water. Purple-sunset light \
catches the wake's outer edges in pink-lavender while the inner water between the \
V is sheltered and darker purple. Scattered reef islands appear as dark shapes \
ahead.
CAMERA: Following drone at about 50m altitude, locked onto the boat, \
maintaining the V-wake centered in frame.
FOCUS: Overhead — the geometric wake pattern is the composition, with the \
reef structures visible beneath.
KEY ELEMENT: The mathematical perfection of the V-wake as a graphic element \
drawn in white on a purple canvas, with the Great Barrier Reef's coral \
shadows adding depth beneath.
ATMOSPHERE: Purple sunset — directional light from the left creates a warm/cool \
split on the wake: left side pink-lavender-lit, right side in purple shadow.
COLOR EMPHASIS: Deep purple (#2e008b) water and reef shadows; white wake foam \
with lavender (#a082e6) tint in the shadow side; electric violet (#9b0aa5) in \
the wider water; pink-violeten pink-lavender on the sun-facing wake edge; reef \
islands as dark spots.
MOTION: Steady forward following; the wake continuously unfurls; coral shadows \
pass below in parallax; water texture ripples over the reef.`),
  },
  {
    id: "archipelago-19",
    variationNumber: 19,
    dreamId: "archipelago",
    name: "Lofoten Midnight Sun",
    camera: "Static wide",
    focus: "Ultra-wide",
    keyElement: "Midnight sun over iconic Reine fishing village in the Lofoten Islands",
    atmosphere: "Nordic summer midnight",
    tags: ["lofoten", "twilight", "norway", "serenity"],
    prompt: compose(`\
SCENE: The Nordic midnight sun hangs just above the horizon, refusing to set, \
viewed from the water approaching Reine — the iconic fishing village in \
Norway's Lofoten Islands. The distinctive Reine landscape is visible: the \
dramatic granite mountain peaks of Reinebringen and Olstinden rising like \
jagged purple teeth behind the village, the red fishermen's cabins (rorbuer) \
lining the harbor on stilts over the water, and the narrow bridge connecting \
the village to the outer islands. The sky is a perpetual twilight gradient — \
pink-lavender at the horizon, cycling through electric violet to deep purple \
overhead. The entire 360-degree sky glows. The Norwegian Sea water reflects \
this wrap-around light, creating an otherworldly scene where everything is \
suffused in purple-pink. Drying racks for fish (hjell) and moored fishing \
boats add texture to the harbor.
CAMERA: Static ultra-wide. The horizon bisects the frame perfectly. No \
movement — the scene's strangeness speaks for itself.
FOCUS: Ultra-wide — the entire panoramic scene from the harbor to the \
distant mountain horizon is in focus.
KEY ELEMENT: The midnight sun viewed from Reine's iconic harbor — where the \
dramatic Lofoten peaks meet the traditional fishing village and the wild \
Norwegian Sea.
ATMOSPHERE: Nordic midnight sun — a quality of light that exists nowhere else. \
Neither day nor night. Temperature neutral, tending purple.
COLOR EMPHASIS: Equal balance of pink-lavender and purple — electric violet (#9b0aa5) \
in the mid-sky, deep purple (#2e008b) at zenith, soft lavender (#a082e6) in \
the water reflections, pink-violet at both horizons; pink-violet on the rorbuer cabins.
MOTION: Extremely minimal — the sun barely moves along the horizon; water \
shimmers against the harbor stilts; a Norwegian flag on a rorbuer barely stirs.`),
  },
  {
    id: "archipelago-20",
    variationNumber: 20,
    dreamId: "archipelago",
    name: "Cenote Anchor Drop",
    camera: "Slow downward tilt",
    focus: "Medium",
    keyElement: "Chain dropping into deep crystal-purple cenote water in Mexico",
    atmosphere: "Dusk",
    tags: ["water", "mexico", "cenote", "calm"],
    prompt: compose(`\
SCENE: A chain runs taut from an anchor point downward into the deep \
crystal-purple water of a Mexican cenote — a natural limestone sinkhole. The \
camera follows the chain, tilting slowly downward. The cenote's circular \
limestone walls rise around the frame, their edges draped with hanging \
roots and vines rendered as dark purple silhouettes. Where the chain enters \
the water, a column of silver-white bubbles rises, backlit by the last \
purple-pink-lavender light from the sky opening above. The chain disappears \
into the depths, which darken from electric violet to pure indigo-black. The \
underwater portion shows the chain slightly refracted and wavering, with the \
cenote's astonishing depth visible below.
CAMERA: Slow downward tilt following the chain from the edge into the water. \
The transition from above-water to below-water happens at roughly the 4-second \
mark.
FOCUS: Medium — the chain is the sharp subject; the water surface and the \
cenote depths beyond are soft.
KEY ELEMENT: The chain as a connector between the world above (pink-lavender-lit \
limestone) and the world below (deep purple cenote) — a vertical journey \
through the palette.
ATMOSPHERE: Dusk — the last light catches the chain and bubbles through the \
cenote's opening while the water below is already immersed in deep purple \
darkness.
COLOR EMPHASIS: Pink-lavender on the dry chain above water; deep purple (#2e008b) in \
the cenote depths; electric violet (#9b0aa5) at the waterline; soft lavender \
(#a082e6) in the bubbles; light blue (#7da0eb) refracted through the water \
surface; limestone walls in purple shadow.
MOTION: The chain runs slowly downward; bubbles rise and wobble; the water \
surface undulates from above, then closes over the camera's perspective; roots \
sway gently.`),
  },
  {
    id: "archipelago-21",
    variationNumber: 21,
    dreamId: "archipelago",
    name: "Lake Como Villa Shore",
    camera: "Dolly past foreground",
    focus: "Layered",
    keyElement: "Villa-lined shores with cypress trees framing a boat on Lake Como",
    atmosphere: "Purple sunset",
    tags: ["como", "villa", "italy", "boat"],
    prompt: compose(`\
SCENE: The camera moves past a row of elegant Italian cypress trees on the \
shore of Lake Como — one of Italy's most celebrated lakes, lined with grand \
villas and gardens. The tall, dark cypress silhouettes and their deep-violet \
foliage act as natural frames for the scene beyond: the purple lake water \
stretching toward the distant villas of Bellagio on the promontory, with a \
sleek wooden boat passing in the mid-ground. The ornate balustrades and \
terraces of Villa del Balbianello are hinted at through the trees. The \
cypress bark catches warm pink-violeten light while the spaces between the \
trunks reveal the deep violet water. Stone steps descending to the lake and \
terracotta urns anchor the foreground.
CAMERA: Slow dolly laterally, passing behind and between cypress trunks in a \
smooth parallax. The boat appears and disappears between the trees.
FOCUS: Layered — foreground cypress trunks are sharp, mid-ground water is in \
focus, distant villa silhouettes on the far shore are slightly soft.
KEY ELEMENT: Lake Como's elegant cypress-framed shoreline as a natural cinema \
screen — the dark vertical trunks framing slices of the purple lakescape in \
a composition unique to this Italian landscape.
ATMOSPHERE: Purple sunset — warm sidelight on the cypress trunks and villa \
facades, purple shadow between the trees. The combination is iconic Italian \
elegance.
COLOR EMPHASIS: Dark purple-violet cypress silhouettes catching pink-violet and \
pink (#eb5adc) light; deep purple (#2e008b) lake visible between trunks; \
soft lavender (#a082e6) sky; electric violet (#9b0aa5) in the tree shadows; \
villa facades catching warm pink-lavender light.
MOTION: Lateral dolly creating parallax between tree layers; cypress branches \
sway gently in a light breeze; the distant boat glides smoothly; a dragonfly \
crosses the foreground.`),
  },
  {
    id: "archipelago-22",
    variationNumber: 22,
    dreamId: "archipelago",
    name: "Cliffs of Moher Foam",
    camera: "Tracking close",
    focus: "Detail",
    keyElement: "Churning foam against the dramatic Cliffs of Moher",
    atmosphere: "Sunset, backlit",
    tags: ["waves", "water", "ireland", "cliffs"],
    prompt: compose(`\
SCENE: Extreme close tracking shot of churning sea foam at the base of the \
Cliffs of Moher in Ireland. The towering cliff face — over 200 meters of \
sheer dark rock — rises in the background as a massive deep purple wall. The \
churning white-lavender foam contrasts sharply with the deep violet Atlantic \
water surrounding it. Sunset backlight penetrates the thinner foam sections, \
turning them translucent pink and pink-violet. Air bubbles trapped in the foam \
catch individual specular highlights. As the foam dissipates at the edges, it \
transitions from white to lavender to deep purple water in a beautiful \
gradient. O'Brien's Tower is faintly visible atop the cliff silhouette.
CAMERA: Tracking close along the cliff base, matching the wave surge, \
focused on the foam texture roughly 1 meter from the rock face.
FOCUS: Detail — the foam texture is razor-sharp; the cliff face beyond falls \
to soft purple bokeh.
KEY ELEMENT: The ephemeral beauty of Atlantic foam — its white chaos against \
the controlled deep purple of the water and the monumental Cliffs of Moher.
ATMOSPHERE: Sunset backlight — every bubble and foam strand is edge-lit in \
pink-violet and violet; the cliff face looms as a dramatic purple wall.
COLOR EMPHASIS: White foam with lavender (#a082e6) tint in shadows; deep \
purple (#2e008b) water and cliff face; pink (#eb5adc) and pink-violet in backlit \
translucent foam; electric violet (#9b0aa5) where foam dissolves into water.
MOTION: Continuous tracking; the foam churns and evolves organically; bubbles \
pop and reform; Atlantic waves surge rhythmically against the cliff base.`),
  },
  {
    id: "archipelago-23",
    variationNumber: 23,
    dreamId: "archipelago",
    name: "Dubrovnik Panorama",
    camera: "Slow 180-degree pan",
    focus: "Ultra-wide",
    keyElement: "Panoramic view of Dubrovnik old town walls from the sea",
    atmosphere: "Blue hour",
    tags: ["dubrovnik", "panorama", "twilight", "croatia"],
    prompt: compose(`\
SCENE: A sweeping 180-degree panoramic view from the sea approaching \
Dubrovnik — the Pearl of the Adriatic, a UNESCO World Heritage site. The \
camera slowly pans from west (where the last pink-lavender glow clings to the \
horizon above Fort Lovrijenac perched on its rocky outcrop) through south \
(the magnificent city walls running along the coastline, pure electric violet \
sky) to east (where the sky deepens to indigo above the Old Port and Lokrum \
Island). The distinctive Dubrovnik old town is visible in the pan — the \
terracotta rooftops now rendered in warm purple tones, the Stradun main \
street lit with tiny lavender lights, the bell tower of the Franciscan \
monastery, and the iconic city walls rising directly from the Adriatic \
cliffs. The massive fortified walls catch the last purple light on their \
limestone faces.
CAMERA: Slow 180-degree pan, smooth and steady, completing the sweep in 8 \
seconds. Eye-level from the sea, approaching the old town.
FOCUS: Ultra-wide — maximizing the panoramic depth from the sea foreground \
to the distant mountain backdrop behind the city.
KEY ELEMENT: Dubrovnik's magnificent medieval city walls rising from the sea — \
where ancient maritime culture meets Adriatic beauty, the old town's \
silhouette instantly recognizable.
ATMOSPHERE: Blue hour — the light is even, cool, and deeply violet. No hard \
shadows. The air is crystalline over the Adriatic.
COLOR EMPHASIS: Full purple gradient — from residual pink-lavender/pink-violet in the west, \
through electric violet (#9b0aa5), to deep purple (#2e008b) in the east. \
Warm purple Dubrovnik rooftops add color contrast; the city walls catch \
soft lavender (#a082e6) light; Fort Lovrijenac as a dark purple silhouette; \
pink (#eb5adc) on the illuminated wall sections.
MOTION: Continuous smooth pan; old town lights begin to twinkle; Adriatic \
water shimmers; the Croatian flag on a tower sways gently.`),
  },
  {
    id: "archipelago-24",
    variationNumber: 24,
    dreamId: "archipelago",
    name: "Nile Mast & Stars",
    camera: "Tilt from deck to sky",
    focus: "Vertical",
    keyElement: "Felucca mast leading eye to stars above ancient Nile temples",
    atmosphere: "Night onset",
    tags: ["boat", "sky", "egypt", "nile"],
    prompt: compose(`\
SCENE: Starting on the warm-lit wooden deck of a traditional Nile felucca, \
the camera tilts slowly upward along the boat's tall lateen-sail mast. The \
mast is a dark vertical line that bisects the frame, its single triangular \
sail furled and rigging lines radiating outward. On the riverbank, the \
silhouettes of ancient Egyptian temple columns (Luxor Temple) are faintly \
visible, their massive pillars lit in soft lavender. As the camera rises, \
it passes through the deck-light zone (warm pink-lavender from lanterns) into \
the middle zone (electric violet sky above the desert) and finally into the \
upper sky (deep purple with brilliant desert stars — the Milky Way faintly \
visible). The mast's peak has a small pink-lavender navigation light.
CAMERA: Slow tilt upward, following the mast from deck to sky tip over 8 \
seconds. The mast stays centered throughout.
FOCUS: Vertical composition — the bottom is detail (deck texture, temple \
silhouettes on shore), the middle is medium (rigging, sail), the top is \
wide (open desert sky with stars).
KEY ELEMENT: The felucca mast as a vertical axis connecting the ancient Nile \
(deck, temples) to the cosmos (desert stars), transitioning through the full \
purple-violet palette above Egypt's timeless river.
ATMOSPHERE: Night onset — the deck retains warm practical light while the \
desert sky has fully shifted to purple. Stars appear brilliantly over the Nile.
COLOR EMPHASIS: Warm pink-lavender at the deck base; soft lavender (#a082e6) on \
temple silhouettes; electric violet (#9b0aa5) in the mid-sky; deep purple \
(#2e008b) at the zenith; the navigation light is a warm pink-lavender jewel.
MOTION: Slow upward tilt; the rigging lines sway gently; stars flicker; the \
Nile water reflects purple sky below; the felucca rocks with the river current.`),
  },
  {
    id: "archipelago-25",
    variationNumber: 25,
    dreamId: "archipelago",
    name: "Giza Pyramid Sunset",
    camera: "Slow zoom out",
    focus: "Wide",
    keyElement: "Sun setting behind the Pyramids of Giza from the Nile",
    atmosphere: "Sunset end",
    tags: ["sunset", "egypt", "pyramids", "giza"],
    prompt: compose(`\
SCENE: The very last sliver of the sun disappears behind the unmistakable \
triangular silhouette of the Great Pyramid of Giza — one of the Seven Wonders \
of the Ancient World. Viewed from a boat on the Nile, the three pyramids \
(Khufu, Khafre, Menkaure) form a descending staircase against the purple sky. \
For a brief moment, the apex of the Great Pyramid is rimmed in blinding \
pink-violet — a thin line of fire separating the dark monument from the sky. \
The sky above the pyramids glows in a diminishing aureole of pink-lavender \
that fades rapidly through pink into electric violet and finally deep purple. \
The Nile catches the last reflection — a single violet path that narrows and \
darkens as the sun vanishes. The Sphinx is faintly visible as a dark shape \
at the base of the pyramid complex.
CAMERA: Slow zoom out — starting tight on the sun-rimmed pyramid apex, \
widening to reveal all three pyramids against the purple sky.
FOCUS: Wide — the rim-light edge is sharp; the expanding view stays in focus \
to communicate the timeless grandeur of the scene.
KEY ELEMENT: The Pyramids of Giza as the ultimate sunset landmark — their \
iconic triangular silhouettes marking where ancient history meets the violet sky, \
viewed from the legendary Nile River.
ATMOSPHERE: Sunset end — the transition point between pink-violet hour and blue \
hour. The light is fading rapidly and the purple is winning.
COLOR EMPHASIS: Intense pink-violet/pink-lavender rim on the pyramid edges; pink \
(#eb5adc) aureole closest to the sun; electric violet (#9b0aa5) expanding \
outward; deep purple (#2e008b) overtaking the sky; soft lavender (#a082e6) \
in the fading Nile reflection; the desert sand reads as warm purple-lavender.
MOTION: Slow zoom out; the pink-violet rim thins and extinguishes; the purple \
expands to fill the frame; the Nile reflection narrows to a point; the \
pyramids grow more monumental as more of the scene is revealed.`),
  },
];

// ---------------------------------------------------------------------------
// DREAM 2 — Gröna Lund Live Concert (25 variations)
// ---------------------------------------------------------------------------

const gronaLundVariations: DreamVideoVariation[] = [
  {
    id: "grona-lund-01",
    variationNumber: 1,
    dreamId: "grona-lund",
    name: "Times Square Pulse",
    camera: "Slow dolly forward",
    focus: "Wide",
    keyElement: "Stage lit in deep purple/violet with Times Square billboards visible",
    atmosphere: "Night, haze",
    tags: ["stage", "lights", "concert", "new-york"],
    prompt: compose(`\
SCENE: A massive concert stage erected in the heart of Times Square, New York, \
seen from the back of the crowd. The stage is a wall of deep purple and \
electric violet light, pulsing rhythmically with a bass-heavy beat. Behind \
and above, the iconic Times Square billboards and LED facades have been \
overtaken by purple-violet wave patterns, turning the entire canyon of \
buildings into a synchronized light show. Theatrical haze fills the air, \
catching the light beams and turning them into solid cones of violet. \
Silhouettes of the crowd's raised hands fill the lower third of frame.
CAMERA: Slow dolly forward through the crowd — as if pushing toward the stage. \
The stage and Times Square's towering neon grow larger and more intense over \
8 seconds.
FOCUS: Wide — the stage is the subject, the crowd silhouettes and Times Square \
billboards frame it.
KEY ELEMENT: The stage as a monolithic source of purple light, with Times \
Square's famous neon billboards amplifying the violet energy into every corner \
of the urban canyon.
ATMOSPHERE: Night with heavy theatrical haze. The air is thick with light \
beams made visible by the fog. Every breath catches violet.
COLOR EMPHASIS: Electric violet (#9b0aa5) as the dominant stage wash; deep \
purple (#2e008b) in the sky and shadows; pink (#eb5adc) accent lights on the \
billboards; soft lavender (#a082e6) in the haze; the crowd is near-black \
silhouette.
MOTION: Forward dolly; haze drifts and swirls; light beams pulse with the \
rhythm; Times Square billboards animate in sync; crowd hands sway.`),
  },
  {
    id: "grona-lund-02",
    variationNumber: 2,
    dreamId: "grona-lund",
    name: "London Eye & Big Ben",
    camera: "Orbit around",
    focus: "Wide",
    keyElement: "London Eye ferris wheel with Big Ben and Parliament silhouette behind",
    atmosphere: "Night, clear",
    tags: ["ferris-wheel", "neon", "london", "big-ben"],
    prompt: compose(`\
SCENE: The London Eye dominates the frame, its massive structure outlined in \
LED lights cycling through the purple-violet palette — from deep purple at \
the base through electric violet on the spokes to soft lavender at the top. \
Each capsule has a pink accent light. As the camera orbits, the Westminster \
skyline reveals itself behind the wheel — the unmistakable silhouette of Big \
Ben's clock tower and the Houses of Parliament stretching along the Thames, \
bathed in pink-lavender light that contrasts with the purple night sky. The \
Thames below glitters with the wheel's reflected neon and the purple glow \
of the South Bank.
CAMERA: Slow orbit — the camera circles the London Eye about 30 degrees \
over 8 seconds, shifting Big Ben and Parliament from hidden to revealed \
behind the wheel.
FOCUS: Wide — the full London Eye in frame with Big Ben's silhouette \
and Thames reflections.
KEY ELEMENT: The London Eye as a giant purple mandala with Westminster's \
most iconic landmarks visible through its spokes — modern spectacle framing \
centuries of history.
ATMOSPHERE: Night, clear sky. The London Eye is the brightest object in \
frame, with Westminster's warm glow as the atmospheric backdrop.
COLOR EMPHASIS: Electric violet (#9b0aa5) on the wheel structure; deep purple \
(#2e008b) sky; pink (#eb5adc) capsule accents; warm pink-lavender on Parliament's \
facades; soft lavender (#a082e6) light spill; electric blue (#3750dc) Thames \
water reflections bridging South Bank to Westminster.
MOTION: The London Eye rotates slowly; capsules sway; the orbit reveals \
Big Ben progressively; LED lights animate in sequence; Thames reflections \
of both wheel and Parliament shimmer.`),
  },
  {
    id: "grona-lund-03",
    variationNumber: 3,
    dreamId: "grona-lund",
    name: "Shibuya Bass Drop",
    camera: "Static with subtle shake",
    focus: "Medium",
    keyElement: "Speaker stack vibrating with Shibuya Crossing neon signs visible",
    atmosphere: "Night, intense",
    tags: ["bass", "speakers", "vibration", "tokyo"],
    prompt: compose(`\
SCENE: A massive wall of black speaker stacks at the side of an outdoor \
stage set up near Shibuya Crossing, Tokyo. The camera faces them straight-on, \
close enough to feel the vibration. The speaker cones pulse visibly with each \
bass hit. The air in front of the speakers distorts like heat haze — visible \
compression waves. Through the gap beside the speaker wall, Shibuya's iconic \
neon signs and LED screens are visible, their normally multicolored glow \
overridden by purple-violet hues. Purple and violet stage light bathes the \
speaker cabinets from behind, creating a dramatic rim-light on their edges. \
A thin layer of mist at the base catches the light.
CAMERA: Static with subtle physical shake synchronized to the bass hits — the \
camera itself vibrates with the sound pressure.
FOCUS: Medium — the speaker wall fills the frame; individual cone movements \
are visible; Shibuya's neon bleeds into the edges.
KEY ELEMENT: The raw physical power of sound made visible — vibrating cones, \
air distortion, camera shake — framed by Tokyo's electric cityscape.
ATMOSPHERE: Night, intense. The bass is felt more than heard. The air itself \
seems to pulse purple against Shibuya's neon canyon.
COLOR EMPHASIS: Deep purple (#2e008b) on the speaker cabinets; electric violet \
(#9b0aa5) rim-light from behind; soft lavender (#a082e6) in the mist at the \
base; pink (#eb5adc) Shibuya neon reflections; electric blue (#3750dc) in \
the distant crossing signals.
MOTION: Speaker cones pulse rhythmically; visible air compression waves; \
camera micro-shakes on each bass hit; mist at the base ripples with the \
pressure waves; Shibuya screens flicker in the background.`),
  },
  {
    id: "grona-lund-04",
    variationNumber: 4,
    dreamId: "grona-lund",
    name: "Berlin Laser Cathedral",
    camera: "Tilt up",
    focus: "Wide",
    keyElement: "Grid of purple/pink lasers in a Berlin warehouse club",
    atmosphere: "Night, heavy fog",
    tags: ["lasers", "lights", "concert", "berlin"],
    prompt: compose(`\
SCENE: Looking upward from the crowd level inside a cavernous Berlin \
warehouse club as dozens of laser beams cut through dense fog above the \
stage. The raw industrial concrete ceiling and exposed steel trusses of the \
venue frame the laser grid — parallel lines, fans, and cones — in electric \
violet, pink, and soft lavender. Where the beams intersect, they create \
brighter nodes of light. The fog is thick enough to make each beam a solid \
line of light. Through the laser grid, the warehouse's massive skylights \
reveal a faint deep purple Berlin night sky.
CAMERA: Tilt up — starting from the crowd's raised hands, ascending through \
the laser grid to the warehouse ceiling and skylights over 8 seconds.
FOCUS: Wide — the entire laser architecture is in view, creating a cathedral \
of light within Berlin's industrial bones.
KEY ELEMENT: The geometric precision of laser beams contrasting with the \
organic movement of fog — order and chaos in purple light, amplified by \
Berlin's raw warehouse architecture.
ATMOSPHERE: Night with very heavy theatrical fog inside the club. The lasers \
need the fog to exist visibly — they are painting on a canvas of mist within \
Berlin's legendary underground scene.
COLOR EMPHASIS: Electric violet (#9b0aa5) primary lasers; pink (#eb5adc) \
accent lasers; soft lavender (#a082e6) where beams scatter in the fog; deep \
purple (#2e008b) in the negative space between beams and concrete walls.
MOTION: Lasers sweep slowly in synchronized patterns; fog drifts and curls \
around the beams; beam intersections pulse; the tilt reveals new layers of \
the laser architecture against the industrial ceiling.`),
  },
  {
    id: "grona-lund-05",
    variationNumber: 5,
    dreamId: "grona-lund",
    name: "Rio Confetti Rain",
    camera: "Slow-motion fall",
    focus: "Detail",
    keyElement: "Purple confetti falling with Christ the Redeemer silhouette in distance",
    atmosphere: "Night, celebratory",
    tags: ["confetti", "lights", "festival", "rio"],
    prompt: compose(`\
SCENE: Thousands of pieces of confetti in shades of purple, violet, lavender, \
and pink fall through the air in extreme slow motion above an outdoor concert \
stage in Rio de Janeiro. Each piece tumbles and rotates, catching spotlight \
beams from different angles — sometimes opaque and dark, sometimes translucent \
and glowing. The confetti is in sharp focus in the mid-ground while the \
background reveals the distant silhouette of Christ the Redeemer atop \
Corcovado, illuminated in electric violet against the deep purple sky. Stage \
lights below are soft purple bokeh circles. The energy of Carnival pulses \
through the scene.
CAMERA: Slow-motion capture of the confetti fall, with a very slight \
downward drift matching the confetti's trajectory.
FOCUS: Detail — individual confetti pieces are readable; Christ the Redeemer \
is a soft violet silhouette in the distance; some confetti is so close it \
becomes large abstract shapes in foreground bokeh.
KEY ELEMENT: The confetti as individual carriers of the purple-violet \
palette — each piece a tiny canvas — with Rio's iconic statue watching over \
the celebration.
ATMOSPHERE: Night, celebratory peak moment with Carnival energy. The confetti \
cannon has just fired. The air is full of color above Rio.
COLOR EMPHASIS: Every piece is a different shade — deep purple (#2e008b), \
electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc). Christ \
the Redeemer glows in electric violet. The background bokeh is electric violet.
MOTION: Ultra-slow-motion tumble of confetti; each piece rotates and catches \
light at different angles; some pieces collide and redirect; spotlight beams \
illuminate different zones; the statue stands sentinel in the distance.`),
  },
  {
    id: "grona-lund-06",
    variationNumber: 6,
    dreamId: "grona-lund",
    name: "Coachella Silhouettes",
    camera: "Static wide, backlit",
    focus: "Wide",
    keyElement: "Desert concert silhouettes with palm trees and Ferris wheel",
    atmosphere: "Night",
    tags: ["crowd", "silhouette", "concert", "coachella"],
    prompt: compose(`\
SCENE: A wide shot of a desert concert crowd at Coachella in complete \
silhouette. The stage behind them is a solid wall of purple-violet light \
with horizontal bands of intensity — brightest at center, darkening to the \
edges. Iconic Coachella palm trees frame the left and right edges, their \
fronds dark against the violet sky. The distant Ferris wheel glows in \
electric violet to the right. The crowd forms a jagged horizon line of dark \
shapes — raised hands, phones, shoulders, heads — all anonymous and \
unidentifiable. Occasional wisps of desert dust drift between the camera and \
the crowd, catching purple light.
CAMERA: Static wide — locked off. The power of the image comes from the \
graphic simplicity of black silhouettes, palm trees, and Ferris wheel \
against purple.
FOCUS: Wide — the silhouette edge is crisp where dark meets light.
KEY ELEMENT: The crowd as a collective abstract shape — a desert mountain \
range of human energy, defined only by its outline against the purple light, \
with Coachella's iconic palms and wheel as sentinels.
ATMOSPHERE: Night — the only light source is the stage. The relationship \
between the dark crowd mass, the palm tree silhouettes, and the purple light \
is the entire image.
COLOR EMPHASIS: The stage wash blends electric violet (#9b0aa5) at center \
with deep purple (#2e008b) at edges; the crowd and palms are pure dark \
(#34303d) silhouette; dust catches soft lavender (#a082e6); phone screens \
are tiny dots of light blue (#7da0eb); the distant Ferris wheel glows pink \
(#eb5adc).
MOTION: Minimal — hands sway slowly; occasional phone screens light up and \
dim; desert dust drifts languidly across the frame; the stage light breathes \
slightly with the music; the Ferris wheel rotates in the distance.`),
  },
  {
    id: "grona-lund-07",
    variationNumber: 7,
    dreamId: "grona-lund",
    name: "Nashville Guitar Strings",
    camera: "Macro drift",
    focus: "Extreme detail",
    keyElement: "Guitar strings vibrating with Broadway honky-tonk neon reflected in chrome",
    atmosphere: "Night, intimate",
    tags: ["music", "vibration", "concert", "nashville"],
    prompt: compose(`\
SCENE: Extreme macro of an electric guitar's strings, seen from the side, \
on a stage along Nashville's Broadway. The strings vibrate with visible \
standing-wave patterns — each string a blur of harmonic motion. Purple and \
violet stage light catches on the chrome frets and wound string surfaces. A \
lens flare from a distant spotlight bleeds across the frame in soft lavender \
and pink. Through the bokeh beyond the guitar, the glow of Nashville's \
honky-tonk neon signs on Broadway is visible — their purple-violet reflections \
caught in the chrome hardware. The guitar body beyond the strings is dark \
wood catching purple rim light.
CAMERA: Macro drift — slowly panning from the low strings to the high \
strings over 8 seconds, maintaining extreme close focus.
FOCUS: Extreme detail — the strings' vibration blur is the subject; the \
guitar body and Nashville's Broadway neon beyond are soft bokeh.
KEY ELEMENT: Sound made visible — the strings' vibration patterns are a \
physical manifestation of music, framed by Nashville's legendary music \
district reflected in the chrome.
ATMOSPHERE: Night, intimate — this is a private view of the instrument in \
Music City. The macro perspective makes the guitar a landscape with \
Nashville's neon as its sky.
COLOR EMPHASIS: Chrome and silver strings catching electric violet (#9b0aa5) \
light; deep purple (#2e008b) in the shadows between strings; soft lavender \
(#a082e6) and pink (#eb5adc) in the lens flare and Nashville neon bokeh; \
warm pink-lavender on the wood body.
MOTION: The strings vibrate at different frequencies — visible standing waves; \
the camera drifts slowly across them; lens flare shifts with the camera \
position; Broadway neon reflections dance on the chrome frets.`),
  },
  {
    id: "grona-lund-08",
    variationNumber: 8,
    dreamId: "grona-lund",
    name: "Moulin Rouge Spotlight",
    camera: "Tracking the beam",
    focus: "Wide",
    keyElement: "Spotlight sweeping with Moulin Rouge windmill silhouette",
    atmosphere: "Night, haze",
    tags: ["lights", "stage", "paris", "concert"],
    prompt: compose(`\
SCENE: A single powerful spotlight beam sweeps slowly across an outdoor \
concert venue in Montmartre, Paris, cutting a solid cone of lavender-white \
light through the purple haze. Behind the stage, the iconic Moulin Rouge \
windmill silhouette rises against the deep purple sky, its sails catching \
stray violet light. Everything the beam touches is momentarily illuminated — \
truss structures, Parisian rooftops, the upper reaches of the crowd — before \
falling back into purple darkness. The beam's edges are soft and feathered \
by the haze. Where it hits the haze densely, it blooms into a soft, \
volumetric lavender cloud near the windmill.
CAMERA: Tracking the beam — the camera follows the spotlight's sweep, keeping \
the brightest point centered in frame as it moves across the venue, with the \
Moulin Rouge windmill as a constant backdrop.
FOCUS: Wide — the beam and its interaction with the Parisian architecture, \
the windmill, and the haze.
KEY ELEMENT: The spotlight beam as a physical object — a solid bar of light \
that reveals and conceals as it sweeps past the Moulin Rouge's legendary \
silhouette.
ATMOSPHERE: Night with medium haze. The beam is only visible because of the \
particulates in the air. The surrounding darkness is deep purple with \
Montmartre's rooftops as shadow shapes.
COLOR EMPHASIS: White-lavender (#a082e6) in the beam core; electric violet \
(#9b0aa5) at the beam edges where it diffuses; deep purple (#2e008b) in the \
negative space; pink (#eb5adc) where the beam hits the Moulin Rouge facade \
and windmill sails.
MOTION: The beam sweeps in a smooth arc past the windmill; haze swirls in \
its wake; the camera tracks with the beam; the windmill sails slowly rotate \
catching purple light.`),
  },
  {
    id: "grona-lund-09",
    variationNumber: 9,
    dreamId: "grona-lund",
    name: "Havana Drum Hit",
    camera: "Slow-motion",
    focus: "Detail",
    keyElement: "Drumstick impact on Cuban conga in purple-lit Havana street",
    atmosphere: "Night, dynamic",
    tags: ["rhythm", "music", "havana", "energy"],
    prompt: compose(`\
SCENE: Ultra-slow-motion capture of a drumstick striking a conga drum on a \
Havana street corner. Through an archway behind the performer, the iconic \
pastel facades of Old Havana (Habana Vieja) are visible — their colonial \
balconies and columns bathed in purple-violet light. The impact sends a \
visible shockwave across the drum skin — concentric ripples propagating \
outward from the strike point. Purple and violet stage light reflects off \
the polished drum surface. The stick rebounds in a graceful arc, trailing a \
slight motion blur. A vintage Cuban street lamp casts pink-lavender pools \
of light on the cobblestones.
CAMERA: Slow-motion, positioned at drum level, capturing the impact from a \
45-degree angle with Havana architecture visible through the background.
FOCUS: Detail — the strike point is razor-sharp; the drum edges blur with \
motion; Old Havana's facades are soft purple bokeh behind.
KEY ELEMENT: The violence and beauty of Cuban percussion — a single strike \
on a Havana street as a universe of rhythm, history, and purple light.
ATMOSPHERE: Night, dynamic. Street lighting and stage lighting from above \
catches the drum as a reflective surface for the purple palette, with \
Havana's legendary musical energy filling the air.
COLOR EMPHASIS: Drum skin reflecting electric violet (#9b0aa5) and pink-lavender; \
deep purple (#2e008b) background; soft lavender (#a082e6) on Havana facades; \
pink (#eb5adc) reflected in the concentric waves; the colonial architecture \
catches warm pink-violet from street lamps.
MOTION: Ultra-slow-motion: the stick's impact, the wave propagation across \
the drum skin, the rebound arc — all happening in dreamy time against \
Havana's timeless backdrop.`),
  },
  {
    id: "grona-lund-10",
    variationNumber: 10,
    dreamId: "grona-lund",
    name: "Las Vegas Strip Skyline",
    camera: "Crane rising",
    focus: "Ultra-wide",
    keyElement: "Concert venue with Las Vegas Strip neon skyline visible behind",
    atmosphere: "Night, clear",
    tags: ["amusement-park", "las-vegas", "neon", "lights"],
    prompt: compose(`\
SCENE: The camera rises on a crane above a massive outdoor concert venue on \
the Las Vegas Strip, revealing the full stage setup and the sweeping Strip \
panorama beyond. The stage's lighting rig, LED walls, and speaker arrays are \
all outlined in colored lights. As the crane ascends, the Las Vegas Strip's \
most iconic landmarks reveal themselves: towering casino facades, the replica \
Eiffel Tower in electric violet, the Bellagio fountains catching purple light, \
the sleek glass towers of CityCenter reflecting the spectacle, and the \
distant Luxor sky beam — all recolored in the purple-violet palette. The \
Strip's normally garish neon has been unified into a river of purple light \
stretching to the horizon. The desert air is crystal clear, making every \
distant light pin-sharp.
CAMERA: Crane rising — starting at crowd level, ascending to reveal the full \
venue-to-Strip panorama over 8 seconds. Slow, majestic ascent.
FOCUS: Ultra-wide — the entire stage, the Strip's neon skyline, and the \
desert horizon in one frame.
KEY ELEMENT: The concert venue revealed as the epicenter of the Las Vegas \
Strip's electric energy — the stage as the brightest node in a city built \
on spectacle.
ATMOSPHERE: Night, clear. The desert sky is deep purple with zero clouds, \
and the Strip's collective neon creates a lavender dome of light pollution.
COLOR EMPHASIS: Electric violet (#9b0aa5) LED lights on the stage; deep \
purple (#2e008b) night sky; pink (#eb5adc) neon accents on casino facades; \
soft lavender (#a082e6) light pollution dome; electric blue (#3750dc) \
in the Bellagio fountain sprays and glass tower reflections.
MOTION: The crane rises steadily; stage lights animate; the expanding view \
reveals more of the Strip's neon canyon; casino signs pulse; distant \
fountains dance.`),
  },
  {
    id: "grona-lund-11",
    variationNumber: 11,
    dreamId: "grona-lund",
    name: "Ibiza Strobe Freeze",
    camera: "Strobe-cut style",
    focus: "Medium",
    keyElement: "Frozen strobe moments in Ibiza superclub with Mediterranean visible",
    atmosphere: "Night, strobe",
    tags: ["strobe", "lights", "energy", "ibiza"],
    prompt: compose(`\
SCENE: Inside a legendary Ibiza superclub, the stage strobes fire in rapid \
succession, and the camera captures the moments between flashes — frozen \
tableaux of the scene lit only by the persistent purple wash. Through the \
club's massive floor-to-ceiling windows, the dark Mediterranean Sea is \
visible, its surface catching stray violet light. Each strobe flash reveals \
a slightly different composition: haze has moved, light beams have shifted, \
and the sea outside shimmers differently. Between flashes, the scene is a \
deep purple low-light painting where only the brightest elements (LED panels, \
reflective surfaces, the moonlit sea) are visible.
CAMERA: Strobe-cut style — simulating the visual effect of being in a strobe \
environment. Not actual jump cuts, but rhythmic brightness variations over \
the continuous shot.
FOCUS: Medium — the stage area is framed with the Mediterranean visible \
through the windows and some crowd foreground.
KEY ELEMENT: The strobe's ability to freeze time — each flash a purple-lit \
still life with Ibiza's legendary nightlife energy and the Mediterranean as \
a serene counterpoint.
ATMOSPHERE: Night, intense strobe. The visual rhythm alternates between \
bright purple reveals and deep purple near-darkness, with the sea a constant \
calm presence through the windows.
COLOR EMPHASIS: Electric violet (#9b0aa5) in the strobe flashes; deep purple \
(#2e008b) in the between-moments and the sea; soft lavender (#a082e6) \
persistent glow on the water; white strobe flashes tinted purple.
MOTION: Rhythmic — the scene appears to stutter between frozen moments; haze \
moves in jerky reveals; the Mediterranean shimmers steadily through the \
windows; the effect is hypnotic and dream-like.`),
  },
  {
    id: "grona-lund-12",
    variationNumber: 12,
    dreamId: "grona-lund",
    name: "Abbey Road Mic Stand",
    camera: "Slow orbit",
    focus: "Detail",
    keyElement: "Chrome mic stand in a legendary Abbey Road recording studio setting",
    atmosphere: "Night",
    tags: ["stage", "concert", "music", "london"],
    prompt: compose(`\
SCENE: A chrome microphone on a stand, center stage in a legendary recording \
studio inspired by Abbey Road Studios, London. The mic and stand are \
surrounded by the studio's hallowed space — acoustic panels, vintage \
equipment racks, and the famous parquet floor. The chrome surface acts as a \
360-degree mirror — reflecting the colored lights, the studio's heritage, \
all warped into abstract purple and violet streaks. Stage lights overhead \
create a pool of lavender light around the base. Through the studio's \
control room window, racks of vintage gear glow in soft violet. A thin \
cable snakes away into the darkness.
CAMERA: Slow orbit around the mic stand, keeping it centered. The reflections \
on the chrome surface shift continuously with the orbit, revealing the \
studio's legendary architecture.
FOCUS: Detail — the mic and the top 30cm of the stand are sharp; the studio \
walls and equipment beyond are soft bokeh.
KEY ELEMENT: The mic stand as a reflective sculpture in a sacred musical \
space — a mirror that concentrates and distorts Abbey Road's storied \
environment into abstract purple streaks.
ATMOSPHERE: Night — the studio is lit from above and from the sides with \
purple wash. The mic stand is the lone sentinel in a pool of light within \
music's most legendary room.
COLOR EMPHASIS: Chrome reflects every color but predominantly electric violet \
(#9b0aa5) and soft lavender (#a082e6); deep purple (#2e008b) studio floor; \
pink (#eb5adc) reflected from vintage gear LEDs; the mic grille is dark with \
subtle metallic purple highlights.
MOTION: Slow orbit creating shifting reflections; the mic cable sways slightly \
from a breeze; light reflections on the chrome surface are liquid and \
ever-changing; vintage VU meters pulse faintly in the background.`),
  },
  {
    id: "grona-lund-13",
    variationNumber: 13,
    dreamId: "grona-lund",
    name: "Tomorrowland Wristband Glow",
    camera: "Close tracking",
    focus: "Detail",
    keyElement: "LED wristbands pulsing with Tomorrowland's iconic mainstage visible",
    atmosphere: "Night",
    tags: ["crowd", "electric", "neon", "tomorrowland"],
    prompt: compose(`\
SCENE: Hundreds of LED wristbands on raised wrists pulse in perfect unison — \
all electric violet, then all soft lavender, then all pink, creating waves \
of color that roll across the massive crowd at Tomorrowland, Belgium. The \
camera tracks close above the sea of wrists, seeing each wristband as a \
glowing node in a larger connected network. Behind the crowd, Tomorrowland's \
iconic mainstage — an enormous fantasy cathedral of LED screens, pyrotechnics, \
and theatrical set design — towers in the distance, pulsing in the \
purple-violet palette. Occasional glowing phone screens punctuate the \
wristband field. The wrists and arms are anonymous silhouettes connecting \
dark body mass to glowing band.
CAMERA: Close tracking above the crowd, skimming over the sea of raised \
wristbands, moving from back of crowd toward the legendary mainstage.
FOCUS: Detail — nearest wristbands are sharp, showing their texture and \
glow; Tomorrowland's mainstage is a massive purple beacon in soft focus \
behind.
KEY ELEMENT: The wristbands as collective pixels — individual nodes forming a \
unified, synchronized display, with Tomorrowland's cathedral-like mainstage \
as the purple heart of the spectacle.
ATMOSPHERE: Night — the wristbands, mainstage, and stage provide the only \
illumination. The crowd is a dark mass animated by hundreds of purple light \
points beneath the festival's legendary production.
COLOR EMPHASIS: Electric violet (#9b0aa5) primary wristband color; pink \
(#eb5adc) and soft lavender (#a082e6) in the color transitions; deep purple \
(#2e008b) in the spaces between lights; light blue (#7da0eb) from phone \
screens; the mainstage radiates all five palette colors.
MOTION: Wristbands pulse in waves; the camera tracks forward toward the \
mainstage; arms sway; the synchronized color changes ripple through the \
crowd like a digital aurora; pyrotechnics flash from the distant stage.`),
  },
  {
    id: "grona-lund-14",
    variationNumber: 14,
    dreamId: "grona-lund",
    name: "Santa Monica Pier Lights",
    camera: "Tracking alongside",
    focus: "Wide",
    keyElement: "Coaster track with Pacific Ocean and Santa Monica Pier visible",
    atmosphere: "Night, motion",
    tags: ["amusement-park", "lights", "energy", "santa-monica"],
    prompt: compose(`\
SCENE: A roller coaster track on Santa Monica Pier outlined in LED strip \
lights — electric violet on the rails, pink on the support structure. The \
camera tracks alongside at rail level as a coaster train rushes past, its \
own lights a streak of lavender. The track twists and curves ahead, its \
illuminated path drawing glowing purple lines against the deep purple sky \
over the Pacific Ocean. The vast dark ocean stretches to the horizon beyond \
the pier, its waves catching distant violet light. Below, the pier's \
carnival rides and arcade lights are a distant carpet of purple-pink light, \
with the Santa Monica coastline curving away.
CAMERA: Tracking alongside the coaster track at rail level, matching the \
train's speed for a beat, then letting it pull ahead toward the ocean.
FOCUS: Wide — the track structure and its LED outlines fill the frame with \
geometric purple light paths against the Pacific backdrop.
KEY ELEMENT: The roller coaster track as a drawn line of light reaching out \
over the Pacific — architecture becoming pure energy and movement at the \
edge of the continent.
ATMOSPHERE: Night, motion. The speed of the coaster creates motion blur on \
the ocean and pier while the track LEDs stay sharp. Salt air catches the \
purple light.
COLOR EMPHASIS: Electric violet (#9b0aa5) LED rails; pink (#eb5adc) support \
structure LEDs; soft lavender (#a082e6) coaster lights; deep purple (#2e008b) \
ocean and night sky; electric blue (#3750dc) motion-blur of distant pier \
lights and moonlit wave crests.
MOTION: The coaster train rushes through frame over the ocean; the tracking \
creates a dynamic perspective; the LED lights streak at the edges; waves \
crash below the pier in purple-lit foam.`),
  },
  {
    id: "grona-lund-15",
    variationNumber: 15,
    dreamId: "grona-lund",
    name: "Reykjavik Sound Wave",
    camera: "Abstract visualization",
    focus: "Abstract",
    keyElement: "Sound waves rippling with Harpa Concert Hall's crystalline facade visible",
    atmosphere: "Night, ethereal",
    tags: ["bass", "vibration", "atmosphere", "reykjavik"],
    prompt: compose(`\
SCENE: An abstract, semi-real visualization of sound waves propagating through \
the concert atmosphere outside Reykjavik's Harpa Concert Hall. Concentric \
rings of energy expand outward from the stage in the purple-violet palette — \
each ring a different shade. The waves interact with the haze and the cold \
Icelandic air, creating visible interference patterns. Where the waves pass \
through the crowd, wristbands pulse. Where they hit surfaces — including \
Harpa's iconic crystalline glass facade — they create geometric ripple \
reflections that multiply through the honeycomb-pattern windows. The scene \
sits between photorealism and artistic interpretation, with Harpa's angular \
architecture amplifying the wave geometry.
CAMERA: Abstract visualization — the camera is static, but the scene itself \
is a dynamic wave animation overlaid on the real concert environment with \
Harpa's glittering facade.
FOCUS: Abstract — the sound waves are sharp geometric elements; Harpa's \
crystalline facade and the real environment beneath are slightly soft and \
dreamlike.
KEY ELEMENT: Sound made visible — the invisible energy of music rendered as \
expanding purple light waves, amplified by Harpa Concert Hall's own geometric \
architecture.
ATMOSPHERE: Night, ethereal. This is a heightened, almost hallucinatory \
version of the concert — the way music feels against Reykjavik's otherworldly \
landscape.
COLOR EMPHASIS: Each concentric ring a different shade — deep purple (#2e008b) \
innermost, electric violet (#9b0aa5) mid-range, soft lavender (#a082e6) \
outer, pink (#eb5adc) furthest; electric blue (#3750dc) interference nodes \
and Harpa's glass reflections.
MOTION: Concentric waves expanding rhythmically from the stage; interference \
patterns forming and dissolving against Harpa's facade; wristbands activating \
as waves pass; the crystalline windows refract the waves into geometric \
patterns.`),
  },
  {
    id: "grona-lund-16",
    variationNumber: 16,
    dreamId: "grona-lund",
    name: "Amsterdam Stage Fog",
    camera: "Low-angle",
    focus: "Medium",
    keyElement: "Dense purple fog in a canal-side Amsterdam venue",
    atmosphere: "Night, fog",
    tags: ["stage", "atmosphere", "lights", "amsterdam"],
    prompt: compose(`\
SCENE: Low-angle shot from the stage floor level inside a canal-side concert \
venue in Amsterdam, looking across the stage surface. Dense, heavy fog — \
cooled to stay low — rolls across the stage like a slow-motion purple tide. \
Stage lights from above pierce the fog in vertical shafts of violet and \
lavender. The fog's surface is not flat but turbulent, with curls and eddies \
catching different colored lights. Through the venue's tall arched windows, \
the distinctive silhouettes of Amsterdam's canal houses and their stepped \
gable rooftops are visible against the purple night, their windows reflecting \
soft violet light. In the background, the silhouette of a microphone stand \
rises above the fog layer like a reed above a lake.
CAMERA: Low-angle — the lens is at fog-surface level, looking across the \
rolling mist with Amsterdam's canal architecture framed through the windows. \
Slow forward push.
FOCUS: Medium — the fog surface texture in the foreground is sharp; Amsterdam's \
canal houses and background elements rise out of it in soft focus.
KEY ELEMENT: The fog as a living entity — a purple sea rolling across the \
stage, with Amsterdam's iconic gabled architecture watching through the \
windows like a painted backdrop.
ATMOSPHERE: Night, heavy low fog in a canal-side venue. The fog creates its \
own microclimate on stage — the world above the fog and below it are \
completely different, with Amsterdam's waterways amplifying the misty ambiance.
COLOR EMPHASIS: Soft lavender (#a082e6) and electric violet (#9b0aa5) in the \
fog's lit surfaces; deep purple (#2e008b) in the fog's shadows and \
Amsterdam's silhouettes; pink (#eb5adc) light shafts from above; electric \
blue (#3750dc) canal reflections visible through the windows.
MOTION: Fog rolls forward in slow, heavy waves; light shafts cut through and \
create shifting patterns; eddies form and dissolve; canal reflections shimmer \
through the venue windows.`),
  },
  {
    id: "grona-lund-17",
    variationNumber: 17,
    dreamId: "grona-lund",
    name: "Hollywood Ticket Stub",
    camera: "Macro static",
    focus: "Extreme detail",
    keyElement: "Concert ticket with Hollywood sign bokeh and Walk of Fame stars",
    atmosphere: "Night",
    tags: ["festival", "concert", "hollywood", "neon"],
    prompt: compose(`\
SCENE: Extreme close-up of a concert ticket held between fingers (anonymous, \
no identifiable features). The ticket features typographic details in purple \
and violet ink. The camera focuses on the paper texture — visible fibers \
catching the light — while behind the ticket, the Hollywood sign on the \
hillside glows in soft violet bokeh, and the Walk of Fame's terrazzo stars \
catch purple spotlight reflections below. The concert venue behind the ticket \
is a gorgeous field of purple bokeh circles of varying sizes mixed with the \
soft shapes of Hollywood Boulevard's neon marquees. The ticket's edge is \
slightly torn where it was separated from the stub. A faint holographic \
security strip catches violet light.
CAMERA: Macro static — the ticket is pinned in space; the Hollywood bokeh \
background shifts subtly as the hand holding it sways slightly.
FOCUS: Extreme detail — paper fibers and ink edges are sharp; the Hollywood \
sign, Walk of Fame stars, and background are pure soft lavender bokeh.
KEY ELEMENT: The ticket as artifact — a physical token of the experience in \
the entertainment capital of the world, rendered with the intimacy of macro \
photography against Hollywood's legendary landmarks.
ATMOSPHERE: Night — the ticket is lit by ambient stage light spillage; the \
background is the out-of-focus Hollywood Boulevard in full purple intensity.
COLOR EMPHASIS: Purple and violet ink on white paper; deep purple (#2e008b) \
bokeh background; electric violet (#9b0aa5) and pink (#eb5adc) bokeh circles \
from neon marquees; soft lavender (#a082e6) holographic strip reflections and \
Hollywood sign glow.
MOTION: Very subtle — the hand holding the ticket sways marginally; the \
Hollywood bokeh circles drift and shift; the holographic strip flashes as \
the angle changes; Walk of Fame stars twinkle below.`),
  },
  {
    id: "grona-lund-18",
    variationNumber: 18,
    dreamId: "grona-lund",
    name: "Cappadocia Balloons",
    camera: "Slow tilt up",
    focus: "Wide",
    keyElement: "Hot air balloons rising over fairy chimneys at dawn, purple-lit",
    atmosphere: "Dawn, whimsical",
    tags: ["festival", "cappadocia", "balloons", "atmosphere"],
    prompt: compose(`\
SCENE: A cluster of hot air balloons in shades of purple, violet, and \
lavender ascends into the pre-dawn sky above Cappadocia, Turkey. The camera \
tilts up to follow their flight. The balloons are lit from within by their \
burners, casting a warm pink-violet glow that illuminates the balloon fabric \
from inside. Below, Cappadocia's extraordinary fairy chimney rock formations \
rise like ancient sentinels — their pale stone surfaces bathed in purple and \
violet light from ground-mounted uplights. The distinctive mushroom-shaped \
hoodoos and cave dwellings carved into the volcanic tuff create an \
otherworldly landscape. As the balloons rise above the fairy chimneys, the \
vast Cappadocian valley opens up — a surreal purple-lit terrain of eroded \
pillars and honeycombed cliffs stretching to the horizon.
CAMERA: Slow tilt up — following the balloons' ascent over the fairy \
chimneys, revealing the vast Cappadocian landscape as the angle widens.
FOCUS: Wide — balloons are sharp against the dawn sky; the fairy chimneys \
below soften into a purple-lit ancient landscape.
KEY ELEMENT: The balloons as vehicles of escape drifting above Cappadocia's \
surreal geology — the contrast between the soft floating forms and the \
ancient eroded stone creates a dreamlike scene.
ATMOSPHERE: Dawn, whimsical. A moment of wonder as balloons rise over one of \
Earth's most otherworldly landscapes, all unified in the purple palette.
COLOR EMPHASIS: Balloons in deep purple (#2e008b), electric violet (#9b0aa5), \
soft lavender (#a082e6), and pink (#eb5adc); fairy chimneys lit in warm \
pink-lavender from below; the sky transitions from deep purple to soft \
lavender at the horizon; electric blue (#3750dc) in the dawn sky's edge.
MOTION: Balloons rise and slowly separate; they rotate and catch light \
differently; the tilt reveals the fairy chimney landscape progressively; \
burner flames pulse inside the balloon envelopes.`),
  },
  {
    id: "grona-lund-19",
    variationNumber: 19,
    dreamId: "grona-lund",
    name: "Detroit Mixing Desk",
    camera: "Slow pan across",
    focus: "Detail",
    keyElement: "Mixing console in legendary Detroit Motown-style studio",
    atmosphere: "Night, intimate",
    tags: ["music", "detroit", "lights", "rhythm"],
    prompt: compose(`\
SCENE: A professional audio mixing console inside a legendary Detroit \
recording studio — the birthplace of Motown and electronic music. The \
console surface is alive with color. Rows of faders, knobs, and illuminated \
VU meters create a landscape of precision and light. Through the studio \
window, the Detroit skyline is faintly visible — the Renaissance Center \
towers and the Ambassador Bridge lit in purple. The faders are lit from \
below by built-in LEDs; the VU meters glow pink-lavender and violet; the \
entire console is bathed in ambient purple light. Vintage vinyl records \
and platinum plaques adorn the studio walls, catching violet reflections.
CAMERA: Slow pan across the console surface, right to left, at a low angle \
that emphasizes the fader heights with Detroit skyline through the window.
FOCUS: Detail — the nearest faders and meters are sharp; the console \
stretches into soft-focus distance; Detroit skyline is dreamy bokeh.
KEY ELEMENT: The Detroit mixing desk as the nerve center of American music \
history — where Motown, techno, and electronic music were born, shaped by \
these same types of controls.
ATMOSPHERE: Night, intimate. A legendary Detroit studio lit by its own \
functional lights and the ambient purple glow of the city beyond.
COLOR EMPHASIS: Pink-lavender and violet VU meters against electric violet (#9b0aa5) \
ambient light; deep purple (#2e008b) shadows between channels; soft lavender \
(#a082e6) light from the console's own illumination; fader caps catching \
pink (#eb5adc) reflections; Detroit skyline in deep purple silhouette.
MOTION: Slow pan; faders occasionally move (ghost-operated by unseen hands); \
VU meters bounce with the music; LED indicators blink; the Detroit skyline \
glows steadily through the studio window.`),
  },
  {
    id: "grona-lund-20",
    variationNumber: 20,
    dreamId: "grona-lund",
    name: "Sydney Harbour View",
    camera: "Wide establishing",
    focus: "Ultra-wide",
    keyElement: "Stage reflected in harbour with Sydney Opera House shell roof visible",
    atmosphere: "Night, reflections",
    tags: ["stage", "sydney", "opera-house", "atmosphere"],
    prompt: compose(`\
SCENE: Ultra-wide shot from across Sydney Harbour, framing a concert stage \
on the foreshore as a purple beacon on the waterfront. The camera position \
places the Sydney Opera House's distinctive shell-roof silhouette to the \
right of frame, its white sails catching violet and lavender light from the \
concert. The stage lights are reflected in the harbour water in long, \
shimmering purple and violet streaks that stretch toward the camera. The \
Harbour Bridge arcs across the upper frame, its steel lattice outlined in \
soft lavender light. Between the Opera House and the concert stage, the dark \
harbour water becomes a canvas of reflected purple light. Sydney's CBD \
skyline glows in the distance with purple-tinted tower lights.
CAMERA: Wide establishing — static or with an almost imperceptible slow \
zoom-in over 8 seconds.
FOCUS: Ultra-wide — everything from the Opera House's shell roof through the \
harbour reflections to the concert stage is in focus.
KEY ELEMENT: The concert as seen across one of the world's great harbours — \
the stage's purple energy radiating across the water to the Opera House, \
creating a dialogue between contemporary music and architectural icon.
ATMOSPHERE: Night with reflections. The harbour connects the concert's energy \
to Sydney's cultural landmarks, the water multiplying the purple light.
COLOR EMPHASIS: Electric violet (#9b0aa5) stage and its water reflection; \
deep purple (#2e008b) sky and dark water; soft lavender (#a082e6) on the \
Opera House sails and in harbour reflections; pink (#eb5adc) accent lights \
reflected; electric blue (#3750dc) on the Harbour Bridge lattice and CBD \
tower lights.
MOTION: Water choppy with shifting reflections; distant stage lights pulse; \
a harbour ferry crosses leaving a wake through the purple reflections; the \
Opera House sails glow steadily in violet.`),
  },
  {
    id: "grona-lund-21",
    variationNumber: 21,
    dreamId: "grona-lund",
    name: "Burj Khalifa Encore",
    camera: "Fast zoom out",
    focus: "Wide",
    keyElement: "Violet pyrotechnics with Burj Khalifa illuminated in background",
    atmosphere: "Night, explosive",
    tags: ["energy", "lights", "dubai", "electric"],
    prompt: compose(`\
SCENE: The encore moment at an outdoor concert in Dubai — the stage erupts \
with a massive burst of violet and pink pyrotechnics. Geysers of purple \
sparks shoot upward from the stage edges. Behind the spectacle, the Burj \
Khalifa towers into the night sky, its LED facade illuminated entirely in \
the purple-violet palette — a 828-meter vertical canvas of electric violet \
and deep purple patterns that synchronize with the pyrotechnics below. The \
camera rapidly zooms out to capture the full scale of the display — the \
concert's fireworks in the foreground and the world's tallest building as a \
purple beacon behind. The sparks arc and fall in glowing parabolas, trailing \
lavender smoke. The crowd erupts into a sea of raised hands and phone lights.
CAMERA: Fast zoom out — starting close on the first spark eruption, pulling \
back rapidly to reveal the Burj Khalifa's full purple-lit height behind the \
spectacular display.
FOCUS: Wide — the pyrotechnics and the Burj Khalifa fill the frame at \
multiple depths.
KEY ELEMENT: The explosive power of the finale amplified by the world's \
tallest building as a purple-lit backdrop — contained violence of \
pyrotechnics dwarfed by architectural ambition.
ATMOSPHERE: Night, explosive. The air fills with smoke, sparks, and purple \
light. The Burj Khalifa transforms the spectacle into something monumental.
COLOR EMPHASIS: Electric violet (#9b0aa5) and pink (#eb5adc) pyrotechnic \
sparks; deep purple (#2e008b) smoke trails and Burj Khalifa patterns; soft \
lavender (#a082e6) in the illuminated smoke clouds; electric blue (#3750dc) \
on the Burj Khalifa's LED transitions; white-hot centers of each spark.
MOTION: Explosive — sparks arc upward and fall; smoke billows; the zoom-out \
reveals the Burj Khalifa's full height; the tower's LED patterns animate; \
crowd surges; the entire scene is kinetic and monumental.`),
  },
  {
    id: "grona-lund-22",
    variationNumber: 22,
    dreamId: "grona-lund",
    name: "Hong Kong Rain on Lights",
    camera: "Static with rain",
    focus: "Detail",
    keyElement: "Raindrops catching neon purple lights with Hong Kong skyline visible",
    atmosphere: "Night, light rain",
    tags: ["lights", "atmosphere", "hong-kong", "concert"],
    prompt: compose(`\
SCENE: A light rain falls through concert spotlight beams at an outdoor venue \
on Hong Kong's waterfront. Each raindrop becomes a momentary streak of \
colored light — purple, violet, pink — as it passes through different beams. \
The camera captures the rain as thousands of tiny light trails against the \
dark sky. Behind the stage, Hong Kong's legendary skyline rises across \
Victoria Harbour — the towers of Central and Wan Chai lit in their nightly \
light show, but tonight all in the purple-violet palette. The wet surfaces \
of the stage equipment and crowd barriers reflect both the concert's purple \
lights and Hong Kong's skyscraper neon in smeared, impressionist pools. A \
spotlight beam becomes a visible cone of falling illuminated rain with the \
harbour and skyline beyond.
CAMERA: Static, looking upward at about 45 degrees into the rain, spotlights, \
and Hong Kong's skyline. The rain falls toward and past the camera.
FOCUS: Detail — some raindrops are frozen sharp; others are long streaks; \
Hong Kong's skyline is a glittering purple backdrop in soft focus.
KEY ELEMENT: Rain as a natural light-catching medium — each drop a brief \
carrier of the purple-violet palette — with Hong Kong's electric skyline \
amplifying the neon atmosphere.
ATMOSPHERE: Night, light rain over Hong Kong harbour. The rain adds a layer \
of magic to the concert, with the city's famous skyline as a massive \
purple-lit backdrop.
COLOR EMPHASIS: Electric violet (#9b0aa5) raindrop streaks through the main \
beams; deep purple (#2e008b) sky; pink (#eb5adc) drops through accent lights; \
soft lavender (#a082e6) in the wet-surface reflections; electric blue \
(#3750dc) in the harbour and distant skyscraper lights.
MOTION: Rain falls continuously in streaks of light; puddle reflections \
shimmer with Hong Kong's skyline; spotlight beams become rain-shower curtains; \
the harbour glistens beyond.`),
  },
  {
    id: "grona-lund-23",
    variationNumber: 23,
    dreamId: "grona-lund",
    name: "Glastonbury Crowd Hands",
    camera: "Slow tracking over",
    focus: "Medium",
    keyElement: "Raised hands with Glastonbury Tor and Pyramid Stage visible",
    atmosphere: "Night",
    tags: ["crowd", "energy", "concert", "glastonbury"],
    prompt: compose(`\
SCENE: A sea of raised hands at the Glastonbury Festival seen from a slightly \
elevated angle, stretching from the foreground to the distant Pyramid Stage. \
The iconic triangular Pyramid Stage structure glows in electric violet, its \
geometric frame a beacon of purple light. Beyond the stage, the distant \
silhouette of Glastonbury Tor with its ruined tower sits on the hilltop \
horizon, backlit by a deep purple sky. The hands are lit from below by the \
stage wash, creating a field of purple-pink-lit fingers against the dark sky. \
Wristbands add points of glowing violet. The hands move in slow, synchronized \
waves — following the music's rhythm. Phone screens held aloft add bright \
rectangular accents. The overall effect is organic, like a field of luminous \
sea anemones swaying in a current beneath the Tor.
CAMERA: Slow tracking over the crowd — moving from above the crowd toward the \
Pyramid Stage, skimming at about 3 meters above hand height.
FOCUS: Medium — the nearest hands are individual and detailed; further away \
they merge into an abstract purple-lit mass; the Pyramid Stage is crisp; \
Glastonbury Tor is a soft silhouette.
KEY ELEMENT: The crowd's hands as a unified, living organism stretching \
toward the legendary Pyramid Stage — individual gesture dissolved into \
collective rhythm beneath the ancient Tor.
ATMOSPHERE: Night — the Pyramid Stage light from ahead paints the underside \
of every raised hand in purple and pink, with Glastonbury Tor watching over \
the festival like a guardian.
COLOR EMPHASIS: Electric violet (#9b0aa5) and pink (#eb5adc) underlit skin; \
deep purple (#2e008b) dark sky and Tor silhouette; soft lavender (#a082e6) \
wristband glow and Pyramid Stage frame; light blue (#7da0eb) phone screens.
MOTION: Hands sway in slow waves; phone screens appear and disappear; \
wristbands pulse; the tracking creates a flowing perspective over the living \
sea of hands toward the glowing Pyramid Stage.`),
  },
  {
    id: "grona-lund-24",
    variationNumber: 24,
    dreamId: "grona-lund",
    name: "Marrakech Vinyl Spin",
    camera: "Macro orbit",
    focus: "Detail",
    keyElement: "Vinyl spinning on riad rooftop with Koutoubia minaret visible",
    atmosphere: "Night, retro",
    tags: ["music", "rhythm", "marrakech", "electric"],
    prompt: compose(`\
SCENE: A vinyl record spins on a turntable at a rooftop DJ set on a \
traditional Marrakech riad. The camera captures the record at macro level — \
the grooves are visible as concentric lines that catch the ambient purple \
light in shifting patterns. The record label at the center is a design in \
purple-violet tones. The tonearm sits in the groove, its cartridge reflecting \
a tiny version of the purple lights. Beyond the turntable, the riad's \
ornate zellige tilework and carved plaster arches frame the view. In the \
distance, the Koutoubia Mosque's famous minaret rises against the deep \
purple Moroccan night sky, its stone surfaces catching soft violet light. \
Warm pink-lavender light from the DJ booth equipment contrasts with the \
purple ambient.
CAMERA: Macro orbit — slowly circling the spinning record, keeping the \
groove detail in focus as the reflections shift and the Koutoubia minaret \
drifts through the background.
FOCUS: Detail — the grooves and their light reflections are the subject; \
the riad architecture and Koutoubia minaret beyond are soft purple bokeh.
KEY ELEMENT: The vinyl record as both musical medium and optical surface — \
its grooves a physical encoding of sound — set against the ancient craft of \
Marrakech's architecture and the Koutoubia's timeless silhouette.
ATMOSPHERE: Night, with a retro warmth on the riad rooftop. The turntable \
setup evokes analog craft in a city of artisanal tradition.
COLOR EMPHASIS: Black vinyl catching electric violet (#9b0aa5) and soft \
lavender (#a082e6) reflections in the grooves; deep purple (#2e008b) in the \
record's shadowed areas and Moroccan night sky; pink (#eb5adc) label and \
zellige tile accents; warm pink-lavender from the booth lights; electric \
blue (#3750dc) on the Koutoubia's illuminated stone.
MOTION: The record spins at 33rpm — the grooves create concentric moving \
reflections; the orbit adds a second layer of shifting perspective revealing \
the Koutoubia; the tonearm vibrates microscopically; light patterns on the \
vinyl surface are hypnotic.`),
  },
  {
    id: "grona-lund-25",
    variationNumber: 25,
    dreamId: "grona-lund",
    name: "Final Beam over Paris",
    camera: "Slow fade/dolly back",
    focus: "Wide",
    keyElement: "Single purple beam rising alongside the illuminated Eiffel Tower",
    atmosphere: "Night, closing",
    tags: ["stage", "paris", "eiffel-tower", "atmosphere"],
    prompt: compose(`\
SCENE: The concert's final moment at a venue near the Champ de Mars, Paris. \
All stage lights — which have been a complex symphony of colors — slowly \
converge into a single, vertical beam of pure electric violet rising from \
the stage into the Parisian sky. Beside it, the Eiffel Tower stands \
illuminated entirely in the purple-violet palette — its iron lattice \
outlined in electric violet, its beacon replaced by a soft lavender pulse. \
The haze catches the concert beam beautifully, making it a solid column of \
purple light that mirrors the Tower's vertical thrust. As the camera slowly \
dollies back along the Seine, the beam and the Eiffel Tower become twin \
purple verticals — one ancient iron, one pure light — rising together into \
the Paris night. The crowd watches in silence. Then, gently, the beam fades \
to black, and only the Tower's purple glow and the city's permanent lights \
remain.
CAMERA: Slow dolly back along the Seine — pulling away from the stage, \
contextualizing the beam alongside the Eiffel Tower within Paris's wider \
skyline.
FOCUS: Wide — the beam and the Eiffel Tower are parallel vertical elements \
against the Paris rooftops.
KEY ELEMENT: The purple beam as a twin to the Eiffel Tower — standing \
alongside Paris's most iconic structure, then vanishing, leaving only the \
Tower's purple silhouette and the memory of light.
ATMOSPHERE: Night, closing. The energy shifts from chaos to order to silence. \
The beam connects the stage to the sky alongside the Tower for one final \
moment.
COLOR EMPHASIS: Pure electric violet (#9b0aa5) in the beam; deep purple \
(#2e008b) sky; the Eiffel Tower in electric violet and soft lavender \
(#a082e6); pink (#eb5adc) on the Parisian rooftops; as the beam fades, the \
Tower's purple glow gradually dominates and the beam drains to dark (#34303d).
MOTION: Slow dolly back; the beam stands alongside the Eiffel Tower; haze \
drifts through the beam; the beam slowly dims; the Tower persists in purple \
as the concert light fades.`),
  },
];

// ---------------------------------------------------------------------------
// DREAM 3 — Floating Sauna Experience (25 variations)
// ---------------------------------------------------------------------------

const floatingSaunaVariations: DreamVideoVariation[] = [
  {
    id: "floating-sauna-01",
    variationNumber: 1,
    dreamId: "floating-sauna",
    name: "Blue Lagoon Steam",
    camera: "Slow tilt up",
    focus: "Medium",
    keyElement: "Dense steam rising from geothermal water at Blue Lagoon, Iceland",
    atmosphere: "Misty geothermal, volcanic",
    tags: ["steam", "iceland", "heat", "glow"],
    prompt: compose(`\
SCENE: The Blue Lagoon, Iceland — dense white-gray steam rises from the \
milky geothermal water, billowing upward in slow, organic plumes against a \
stark volcanic landscape. Rough black lava rock formations frame the lagoon. \
A light source above — unseen, but casting deep purple and violet — \
illuminates the steam from behind, turning each plume into a column of \
glowing lavender and violet. The dark volcanic terrain absorbs most light, \
creating a primordial intimacy. The geothermal water glows a deep \
pink-lavender between the lava rock edges.
CAMERA: Slow tilt up — starting on the glowing geothermal surface, rising \
through the steam plumes toward the purple Icelandic sky over 8 seconds.
FOCUS: Medium — the steam is the mid-ground subject; the volcanic rock below \
is dark and slightly soft; the sky above is lost in purple-lit mist.
KEY ELEMENT: Geothermal steam as the medium for light — Iceland's volcanic \
energy transforming water vapor into a visible, purple-lit sculpture.
ATMOSPHERE: Misty geothermal, volcanic. The heat rises from deep within the \
earth. The air is thick with mineral-rich moisture. The only lights are the \
lagoon's glow and the purple ambient above.
COLOR EMPHASIS: Deep pink-lavender (#eb5adc) on the geothermal surface; \
electric violet (#9b0aa5) and soft lavender (#a082e6) in the backlit steam; \
deep purple (#2e008b) in the lava rock and shadows; pink (#eb5adc) where \
the hot and cool light mix in the steam.
MOTION: Steam rises in slow, billowing plumes that curl and fold; the tilt \
follows the steam's upward journey; the geothermal glow pulses very gently \
with volcanic heat.`),
  },
  {
    id: "floating-sauna-02",
    variationNumber: 2,
    dreamId: "floating-sauna",
    name: "Fjord Plunge",
    camera: "Slow-motion downward",
    focus: "Detail",
    keyElement: "Water surface breaking as body enters Norwegian fjord waters",
    atmosphere: "Dawn, cold blue",
    tags: ["cold-plunge", "norway", "contrast", "immersion"],
    prompt: compose(`\
SCENE: The surface of a Norwegian fjord — dark, still, purple-tinted water \
flanked by towering cliff walls — is broken by an entry. In ultra slow \
motion, the water surface depresses, then erupts into a crown of droplets. \
Each droplet catches the dawn light in purple, lavender, and cold blue. \
Beneath the surface, a cloud of silver bubbles expands. The dramatic cliff \
walls of the fjord rise vertically on both sides, their ancient rock faces \
casting deep purple shadows. The water's surface tension creates a temporary \
membrane before yielding.
CAMERA: Slow-motion downward — capturing the entry and splash from a \
45-degree angle above, fjord walls framing the shot.
FOCUS: Detail — the splash crown is sharp; individual droplets are frozen; \
the fjord's depth is soft purple.
KEY ELEMENT: The moment of immersion — the shock of glacial fjord water \
captured as a beautiful, violent event between Norway's dramatic cliff walls.
ATMOSPHERE: Dawn, cold blue. The early morning light filters down between the \
fjord walls, cold and purple, with no warmth yet. The water temperature is \
near-freezing — the visual language should feel cold.
COLOR EMPHASIS: Deep purple (#2e008b) in the undisturbed fjord water; \
electric blue (#3750dc) and light blue (#7da0eb) in the cold splash \
highlights; soft lavender (#a082e6) in the frozen droplets; silver-white in \
the bubbles; deep purple (#2e008b) on the cliff walls.
MOTION: Ultra-slow-motion splash: water depression, crown formation, droplet \
separation, bubble cloud expansion. The violence of the entry rendered as \
slow, beautiful physics against the ancient fjord.`),
  },
  {
    id: "floating-sauna-03",
    variationNumber: 3,
    dreamId: "floating-sauna",
    name: "Kyoto Onsen Grain",
    camera: "Macro drift",
    focus: "Extreme detail",
    keyElement: "Hinoki cypress wood grain in traditional Kyoto onsen bath",
    atmosphere: "Warm, intimate",
    tags: ["wood", "kyoto", "minimal", "zen"],
    prompt: compose(`\
SCENE: Extreme macro of hinoki cypress wood — the edge of a traditional \
Japanese onsen bath in Kyoto. The wood grain is a landscape of ridges and \
valleys, its growth rings telling centuries of story. Warm pink-lavender \
light from one direction catches the grain ridges while purple-tinted shadow \
fills the valleys. The wood has the slight sheen of mineral-rich hot spring \
water. Tiny droplets of onsen water sit in the grain channels like rivers on \
a topographic map. A single knot in the hinoki is a dark eye in the \
pink-lavender field.
CAMERA: Macro drift — slowly panning across the hinoki surface, as if \
exploring a terrain from above.
FOCUS: Extreme detail — individual wood fibers and mineral water droplets are \
visible. The drift takes the focus through different depth planes.
KEY ELEMENT: The hinoki cypress as a micro-landscape — the prized Japanese \
wood's pattern language rendered visible by the interplay of warm and \
purple light in a Kyoto onsen.
ATMOSPHERE: Warm, intimate. The macro perspective transforms the traditional \
onsen bath edge into an alien, beautiful terrain.
COLOR EMPHASIS: Warm pink-lavender (#eb5adc) on the grain ridges; deep purple \
(#2e008b) in the grain valleys; electric violet (#9b0aa5) in the deeper \
shadows; soft lavender (#a082e6) on the mineral water droplets catching \
reflected light through a shoji screen.
MOTION: Slow lateral drift across the hinoki surface; mineral water droplets \
merge and slide imperceptibly; a rising steam distortion softens the far edge \
of the macro view.`),
  },
  {
    id: "floating-sauna-04",
    variationNumber: 4,
    dreamId: "floating-sauna",
    name: "Bosphorus Float",
    camera: "Slow orbit",
    focus: "Wide",
    keyElement: "Floating hammam spa on the Bosphorus with mosque silhouettes",
    atmosphere: "Blue hour, mist",
    tags: ["floating", "istanbul", "wellness", "stillness"],
    prompt: compose(`\
SCENE: A floating hammam spa structure — an ornate dome with warm light \
spilling from its arched windows — floats on the waters of the Bosphorus, \
the legendary strait dividing Europe and Asia in Istanbul. The distinctive \
silhouettes of the Sultan Ahmed Mosque and Hagia Sophia with their minarets \
and domes are visible on the western shore, their profiles catching the last \
ambient light in deep purple. To the east, the Asian shore's hillside \
rises against the violet sky. The Bosphorus surface is a flawless mirror of \
the blue-hour sky, making the hammam appear to hover between the reflected \
city and the real one. A thin layer of mist floats just above the water, \
catching the hammam's window glow in soft pink-lavender wisps.
CAMERA: Slow orbit — the camera circles the floating hammam roughly 20 \
degrees over 8 seconds, shifting the backdrop from the mosque silhouettes to \
the Asian shore.
FOCUS: Wide — the hammam, its reflection, the mist layer, and Istanbul's \
landmark silhouettes are all in focus.
KEY ELEMENT: The floating hammam centered in the Bosphorus — the ultimate \
Istanbul wellness fantasy, bathing with the city's most iconic skyline as \
your backdrop.
ATMOSPHERE: Blue hour with low mist on the Bosphorus. The scene is hushed \
and meditative despite the monumental setting. The city feels distant, \
dream-like.
COLOR EMPHASIS: Warm pink-lavender from the hammam windows; deep purple \
(#2e008b) sky and its water mirror; the mosque silhouettes in muted deep \
purple; electric violet (#9b0aa5) at the horizon; soft lavender (#a082e6) \
mist catching the window glow; the Asian shore as a dark purple mass.
MOTION: Slow orbit; the reflected city shifts with the camera; mist drifts \
lazily; window glow flickers (fire inside); the hammam bobs imperceptibly; \
a minaret light glows steadily.`),
  },
  {
    id: "floating-sauna-05",
    variationNumber: 5,
    dreamId: "floating-sauna",
    name: "Marrakech Hot Stones",
    camera: "Static with steam",
    focus: "Detail",
    keyElement: "Water hitting hot stones in a traditional Moroccan hammam",
    atmosphere: "Warm interior",
    tags: ["heat", "marrakech", "ritual", "steam"],
    prompt: compose(`\
SCENE: Inside a traditional Moroccan hammam in Marrakech — water is poured \
from an ornate brass bucket onto searing hot stones set into the tiled floor. \
The moment of contact produces an explosive release of steam — a violent, \
beautiful eruption that fills the frame. The stones themselves glow deep \
pink-lavender in their crevices. The steam shoots upward and outward through \
the hammam's star-shaped ventilation openings, catching purple light from \
above. The intricate zellige tilework on the walls shimmers with moisture, \
its geometric patterns rendered in deep purple and violet tones. Water \
droplets that don't immediately evaporate dance and skitter across the hot \
stone surface.
CAMERA: Static, positioned at stone level, facing the pour point directly. \
The steam eruption fills the frame within the hammam architecture.
FOCUS: Detail — the stone surfaces and the point of water contact are sharp; \
the steam explosion above is volumetric and slightly soft; the zellige tiles \
shimmer at the edges.
KEY ELEMENT: The moment of transformation in the Marrakech hammam — liquid \
water becoming steam on contact, a phase change rendered as visual spectacle \
within centuries-old architecture.
ATMOSPHERE: Warm interior — the heat is at its peak in the hammam's hottest \
room. The air is already saturated with moisture; this pour pushes it further.
COLOR EMPHASIS: Deep pink-lavender on the hot stones; white-to-lavender \
(#a082e6) steam; deep purple (#2e008b) in the dark hammam interior and \
zellige patterns; electric violet (#9b0aa5) in the backlit upper steam; \
dancing water droplets catch pink (#eb5adc) light.
MOTION: Water stream contacts stones; explosive steam eruption; skittering \
water droplets; the steam plume rises through star-shaped openings; the \
brass bucket tilts (seen at frame edge) controlling the pour.`),
  },
  {
    id: "floating-sauna-06",
    variationNumber: 6,
    dreamId: "floating-sauna",
    name: "Swiss Alps Breath Cloud",
    camera: "Slow-motion",
    focus: "Detail",
    keyElement: "Visible breath cloud in cold Swiss Alpine air with Matterhorn behind",
    atmosphere: "Cold exterior, dawn",
    tags: ["breath", "swiss-alps", "contrast", "mist"],
    prompt: compose(`\
SCENE: Close-up of a visible breath cloud — a warm exhalation in freezing air. \
The breath is backlit by the purple dawn light, turning it into a slow-motion \
sculpture of swirling vapor. Each exhale creates a new shape: first a compact \
jet, then it blooms and unfolds, curling at the edges before dissipating into \
the purple air. The anonymous subject is barely visible — just the silhouette \
of a chin and lips at the very bottom of frame. The background is a purple \
gradient dawn sky.
CAMERA: Slow-motion, fixed on the breath zone. Multiple exhales are captured \
in the 8 seconds, each creating and destroying a new vapor sculpture.
FOCUS: Detail — the breath vapor is sharp in the center of its cloud; the \
edges dissolve into the purple air.
KEY ELEMENT: Breath as visible proof of the body's heat meeting the cold \
outside — the primal contrast of the sauna experience.
ATMOSPHERE: Cold exterior, dawn. The temperature contrast between the warm \
body (just out of the sauna) and the freezing morning air is extreme.
COLOR EMPHASIS: White and soft lavender (#a082e6) in the breath vapor; \
electric violet (#9b0aa5) backlight glow through the vapor; deep purple \
(#2e008b) background sky; pink (#eb5adc) at the edges where vapor meets \
purple light.
MOTION: Slow-motion breath clouds: ejection, bloom, curl, dissipation. Each \
breath is unique. The vapor interacts with any ambient air movement, creating \
unpredictable, beautiful shapes.`),
  },
  {
    id: "floating-sauna-07",
    variationNumber: 7,
    dreamId: "floating-sauna",
    name: "Lake Bled Mirror",
    camera: "Low-angle wide",
    focus: "Ultra-wide",
    keyElement: "Perfect reflection on Lake Bled with church island and castle",
    atmosphere: "Blue hour, dead calm",
    tags: ["lake-bled", "lake", "reflections", "stillness"],
    prompt: compose(`\
SCENE: A perfectly symmetrical composition on the waters of Lake Bled — \
Slovenia's iconic glacial lake surrounded by the Julian Alps. The frame is \
divided exactly at the waterline. Above: a wellness pavilion with warm-lit \
windows, the famous Bled Island with its Pilgrimage Church of the \
Assumption rising from the lake's center, and the medieval Bled Castle \
perched high on its cliff above the far shore, all beneath the deep \
purple-violet blue-hour sky. Below: a flawless mirror reflection of \
everything above, slightly darker and more purple. The Alpine meadows slope \
gently to the waterline. Lake Bled's sheltered glacial waters are \
perfectly still.
CAMERA: Low-angle wide — the lens is at exact waterline level, creating the \
symmetrical split. Static or with an imperceptible forward float.
FOCUS: Ultra-wide — sharp from the nearest water surface to the church \
island and castle cliff. The symmetry demands total clarity.
KEY ELEMENT: Lake Bled as one of the world's most serene bodies of water — \
the wellness pavilion floating between the reflected church island and the \
castle, suspended between two purple worlds.
ATMOSPHERE: Blue hour, dead calm. Not a breath of wind on Bled's sheltered \
glacial surface. The Julian Alps create a natural amphitheatre of silence.
COLOR EMPHASIS: Deep purple (#2e008b) sky and its deeper reflection; electric \
violet (#9b0aa5) at both horizons; soft lavender (#a082e6) in the lighter \
sky; warm pink-lavender from the pavilion windows doubled by the reflection; \
the castle and church silhouettes reading as deep purple in the evening light.
MOTION: Near-static — the only movement is a very slight bob of the pavilion \
and an occasional micro-ripple that momentarily distorts the perfect church \
island reflection.`),
  },
  {
    id: "floating-sauna-08",
    variationNumber: 8,
    dreamId: "floating-sauna",
    name: "Lapland Ice Crystals",
    camera: "Macro",
    focus: "Extreme detail",
    keyElement: "Ice formations catching violet light in Finnish Lapland",
    atmosphere: "Cold, crystalline",
    tags: ["ice", "lapland", "minimal", "contrast"],
    prompt: compose(`\
SCENE: Extreme macro of ice crystals formed on a sauna window in Finnish \
Lapland. The crystals are intricate fractal patterns — fern-like dendrites \
and hexagonal plates — each catching the ambient purple light at different \
angles. Through the ice, the snow-covered boreal forest of Lapland is \
visible but distorted into abstract blobs of purple-blue light. The ice \
itself is a spectrum of clear, white, and pale blue, with the purple \
Northern light turning it into a natural stained-glass window. Beyond, the \
dark shapes of snow-laden spruce trees are visible.
CAMERA: Macro — static or with an impossibly slow drift across the ice \
surface, revealing new crystal formations.
FOCUS: Extreme detail — individual ice crystal branches are sharp; the \
snow-covered Lapland forest beyond is bokeh.
KEY ELEMENT: Ice crystals as nature's fractal art in Finnish Lapland — the \
Arctic cold's beautiful answer to the sauna heat within. The contrast \
between frozen surface and warm interior is the essence of Nordic wellness.
ATMOSPHERE: Cold, crystalline. The ice exists because the interior is warm \
and the Lapland exterior is deeply sub-zero — each crystal is evidence of \
the extreme temperature gradient.
COLOR EMPHASIS: Clear and pale blue ice; electric violet (#9b0aa5) and soft \
lavender (#a082e6) light caught in crystal facets; deep purple (#2e008b) in \
the shadows between crystals; warm pink-lavender bokeh from the interior; \
occasional pink (#eb5adc) refraction through the crystal prisms.
MOTION: Extremely slow drift across the crystal landscape; occasional crystal \
glint as the angle shifts; the Lapland forest beyond the ice shimmers softly; \
a very slow melt — a tiny water bead forming and beginning to run.`),
  },
  {
    id: "floating-sauna-09",
    variationNumber: 9,
    dreamId: "floating-sauna",
    name: "Turkish Bath Glow",
    camera: "Static",
    focus: "Detail",
    keyElement: "Glowing embers/heat source in ornate domed hammam in Istanbul",
    atmosphere: "Warm interior, dim",
    tags: ["istanbul", "heat", "glow", "wellness"],
    prompt: compose(`\
SCENE: Close-up of the heat source in a grand Istanbul hammam — beneath the \
ornate marble göbek taşı (heated stone platform). Glowing embers pulse in \
deep pink-lavender, violet, and pink through the iron grate — a miniature \
volcanic landscape beneath centuries-old Ottoman architecture. The embers \
pulse with residual heat, brightening and dimming in slow breathing cycles. \
Above, heat distortion warps the view of the soaring domed ceiling with its \
star-shaped light openings. Shafts of purple light stream down through the \
perforated dome, crossing the rising heat. Tiny sparks occasionally float \
upward from the ember surface into the dome's vast space.
CAMERA: Static — locked on the ember bed beneath the marble platform. The \
stillness allows the viewer to become mesmerized by the slow pulsing.
FOCUS: Detail — the ember surfaces are sharp, showing cracked charcoal \
texture and glowing fissures; the domed ceiling above shimmers with heat \
distortion and purple light shafts.
KEY ELEMENT: The ember bed as the heart of the Istanbul hammam — its steady \
glow is the source of all warmth beneath the magnificent Ottoman dome.
ATMOSPHERE: Warm interior, dim. The ember glow is the primary light source, \
casting the marble and tilework in its pink-lavender-purple spectrum.
COLOR EMPHASIS: Deep pink-lavender (#eb5adc) in the ember cores; the marble \
surfaces shift to deep purple (#2e008b) and electric violet (#9b0aa5); the \
dome's light shafts carry soft lavender (#a082e6); the heat distortion above \
carries pink (#eb5adc) shifts through the perforated stars.
MOTION: Embers pulse slowly (brightening over 2 seconds, dimming over 3); \
occasional tiny sparks drift upward into the dome; heat distortion shimmers; \
purple light shafts waver as steam crosses them; the dome's star openings \
create slowly rotating light patterns.`),
  },
  {
    id: "floating-sauna-10",
    variationNumber: 10,
    dreamId: "floating-sauna",
    name: "Azores Mist",
    camera: "Slow dolly forward",
    focus: "Wide",
    keyElement: "Mist over volcanic hot springs on São Miguel island, Azores",
    atmosphere: "Dawn, misty",
    tags: ["mist", "azores", "water", "stillness"],
    prompt: compose(`\
SCENE: A thin layer of mist — only about half a meter thick — hovers over \
the surface of a volcanic hot spring on São Miguel island in the Azores. \
This is one of Earth's most otherworldly wellness destinations — geothermal \
pools set within lush volcanic calderas in the mid-Atlantic. The camera \
glides through the mist layer at water level, pushing through it like moving \
through a violet cloud. Through breaks in the mist, the dramatic caldera \
walls are visible — steep volcanic cliffs covered in deep purple-tinted \
hydrangea and dense subtropical vegetation. Steam rises from multiple \
geothermal vents scattered across the terrain. Above the mist, the volcanic \
ridgeline is a dark mass against the purple Atlantic dawn sky.
CAMERA: Slow dolly forward through the mist layer at water level, \
approaching the caldera wall from the hot spring center.
FOCUS: Wide — the mist has depth; the volcanic caldera walls reveal \
themselves through the mist; the ridgeline frames the background.
KEY ELEMENT: The mist as a veil between the geothermal waters and the \
volcanic landscape of the Azores — an Atlantic island paradise emerging from \
a purple cloud of volcanic steam.
ATMOSPHERE: Dawn, misty. The island is still asleep. The mist transforms the \
volcanic hot spring into a dreamscape where São Miguel feels like an \
undiscovered world.
COLOR EMPHASIS: Soft lavender (#a082e6) and white in the illuminated mist; \
deep purple (#2e008b) water below and sky above; electric violet (#9b0aa5) \
where the mist is backlit by the brightening Atlantic horizon; the volcanic \
rock adds deep purple-violet accents.
MOTION: Forward glide through the mist toward the caldera; mist parts and \
closes; the volcanic ridgeline grows clearer; occasional clear patches \
reveal the dark geothermal water below; a heron silhouette takes flight from \
the caldera shore.`),
  },
  {
    id: "floating-sauna-11",
    variationNumber: 11,
    dreamId: "floating-sauna",
    name: "Bali Droplets",
    camera: "Macro slow-motion",
    focus: "Extreme detail",
    keyElement: "Droplets on bamboo and stone in Balinese spa with rice terraces",
    atmosphere: "Warm, tropical",
    tags: ["water", "bali", "wellness", "minimal"],
    prompt: compose(`\
SCENE: Extreme macro of water droplets condensing and running down the smooth \
stone and bamboo surface of an open-air Balinese spa. Each droplet is a \
perfect lens, refracting and inverting the warm pink-lavender light from \
hanging lanterns. The droplets merge, grow heavy, and begin to slide, leaving \
wet trails on the carved stone. The bamboo grain is visible through and \
around the droplets. In the background, terraced rice paddies cascade down \
the hillside — their flooded surfaces catching purple twilight. A faint \
purple ambient light from the tropical sky mixes with the warm interior, \
creating a dual-tone illumination. Frangipani petals rest near the droplets.
CAMERA: Macro slow-motion — fixed on a section of the stone-and-bamboo \
surface, capturing the slow life cycle of tropical condensation droplets.
FOCUS: Extreme detail — individual droplets are large enough to see refracted \
images of the rice terraces within them. The stone and bamboo texture is \
fully resolved.
KEY ELEMENT: Condensation as evidence of Bali's humid warmth — the tropical \
air manifested as jewel-like droplets on natural surfaces, with the iconic \
rice terraces visible as refracted purple miniatures.
ATMOSPHERE: Warm, tropical. The high humidity of Bali's highland spa region \
is visible in the condensation. The air itself feels thick and alive.
COLOR EMPHASIS: Warm pink-lavender (#eb5adc) refracted through the droplets; \
the wet stone is darker, revealing deep purple (#2e008b) in its grain; soft \
lavender (#a082e6) from the twilight sky catching individual droplets; the \
rice terrace reflections are electric violet (#9b0aa5).
MOTION: Droplets form, grow, merge, and begin to slide in ultra-slow-motion; \
each sliding droplet leaves a wet trail that darkens the stone; new droplets \
form in the trail; a frangipani petal catches a falling droplet.`),
  },
  {
    id: "floating-sauna-12",
    variationNumber: 12,
    dreamId: "floating-sauna",
    name: "Cenote Bubbles",
    camera: "Underwater",
    focus: "Detail",
    keyElement: "Bubbles rising in crystal-clear cenote waters, Yucatan",
    atmosphere: "Cold, underwater",
    tags: ["cenote", "water", "immersion", "contrast"],
    prompt: compose(`\
SCENE: Underwater perspective looking upward inside a Yucatan cenote — \
Mexico's legendary natural sinkholes filled with crystal-clear water. A \
cloud of silver-white air bubbles rises toward the surface, each bubble a \
tiny spherical mirror reflecting the purple world above. The cenote water is \
tinted deep purple-blue by shafts of light penetrating through the circular \
opening above. The limestone walls of the cenote surround the frame — \
ancient stalactites and mineral formations creating a cathedral-like \
underwater space. The surface above is a shimmering, distorted window — the \
jungle canopy and purple sky visible but wavering. Light beams penetrate \
the cenote in dramatic shafts of electric violet.
CAMERA: Underwater, looking up at about 30 degrees within the cenote. \
Static, allowing the bubbles to rise through and past the frame.
FOCUS: Detail — the nearest bubbles are sharp enough to see reflections of \
the cenote opening in them; distant bubbles and the surface are soft and \
dreamy; the limestone walls provide textural depth.
KEY ELEMENT: The bubbles as ascending spheres of captured breath — each one \
a tiny reflection of the cenote's circular sky window, rising from the \
ancient depths.
ATMOSPHERE: Cold, underwater in a sacred cenote. The world below the surface \
is silent, slow, and deeply purple. A meditative counterpoint to the jungle \
heat above.
COLOR EMPHASIS: Deep purple (#2e008b) and electric blue (#3750dc) in the \
cenote water body; soft lavender (#a082e6) and electric violet (#9b0aa5) in \
the dramatic light shafts; silver-white bubbles with purple reflections; \
the limestone walls are light blue (#7da0eb) where lit.
MOTION: Bubbles rise in slow, wobbly ascent; they merge when they touch, \
forming larger bubbles that accelerate; light shafts shift as the surface \
undulates; the overall feeling is peaceful and ascending through ancient \
geological time.`),
  },
  {
    id: "floating-sauna-13",
    variationNumber: 13,
    dreamId: "floating-sauna",
    name: "Kyoto Incense Curl",
    camera: "Static",
    focus: "Detail",
    keyElement: "Incense smoke curl in a Zen temple garden, Kyoto",
    atmosphere: "Dim, atmospheric",
    tags: ["kyoto", "zen", "minimal", "stillness"],
    prompt: compose(`\
SCENE: A single, elegant curl of incense smoke rises from a bronze kōro \
(incense burner) in a Kyoto Zen temple garden, illuminated by a narrow beam \
of purple light filtering through bamboo blinds against a dark tatami \
interior. The curl follows a complex, organic spiral — twisting, folding \
back on itself, branching — creating a temporary natural sculpture. The beam \
catches the incense smoke at different densities — thick sections glow \
brightly, thin sections are translucent ghosts. Beyond, a raked karesansui \
(rock garden) is barely visible in deep indigo-purple. The scent of sandalwood \
is implied by the richness of the smoke.
CAMERA: Static — the incense curl is the performance; the camera is the \
audience. Centered composition with the temple garden as subtle backdrop.
FOCUS: Detail — the smoke edges are sharp where dense, dissolving to nothing \
where thin. The temple garden background is a uniform deep purple.
KEY ELEMENT: The incense curl as calligraphy — a natural brushstroke of \
smoke writing in purple light against the darkness of a Kyoto temple. \
Wabi-sabi in motion.
ATMOSPHERE: Dim, atmospheric. This is a meditative moment in an ancient Zen \
temple — a single element in near-darkness. Wellness stripped to its essence.
COLOR EMPHASIS: White-to-lavender (#a082e6) in the dense smoke; electric \
violet (#9b0aa5) at the beam edges; deep purple (#2e008b) background and \
temple interior; occasional pink (#eb5adc) where the thinnest wisps catch \
the light at oblique angles.
MOTION: The incense curl rises and evolves continuously — no two frames are \
alike. It twists, folds, blooms, and dissipates in a perpetual, unrepeatable \
dance above the bronze burner.`),
  },
  {
    id: "floating-sauna-14",
    variationNumber: 14,
    dreamId: "floating-sauna",
    name: "Finnish Lakeside Whisk",
    camera: "Slow-motion swing",
    focus: "Detail",
    keyElement: "Birch whisk in Finnish lakeside sauna, lake visible through window",
    atmosphere: "Warm interior",
    tags: ["finland", "ritual", "heat", "steam"],
    prompt: compose(`\
SCENE: A traditional Finnish birch whisk (vihta) swings through the steamy \
sauna air in slow motion inside a lakeside sauna in Finland's lake district. \
The bundle of birch branches with their small dark leaves cuts through the \
steam, creating swirling vortices in its wake. Water droplets fly off the \
leaves in a spray pattern. The leaves are backlit by the purple-pink-lavender \
sauna light, making them glow translucent violet with purple edges. Through \
the sauna window, a pristine Finnish lake is visible — its surface a perfect \
mirror of the purple sky, ringed by birch forest. Steam parts and reforms \
around the whisk's path.
CAMERA: Slow-motion swing — the camera tracks the whisk through its arc, \
positioned to catch the backlit leaf spray, steam vortices, and the lake \
glimpsed through the window.
FOCUS: Detail — the whisk bundle and its immediate spray zone are sharp; the \
lake beyond the window is soft purple bokeh; the steam-filled background is \
soft purple.
KEY ELEMENT: The vihta as the authentic tool of Finnish wellness ritual — \
birch leaves and steam and heat combined in the land where sauna was born, \
with the quintessential Finnish lake visible outside.
ATMOSPHERE: Warm interior — the lakeside sauna is at full heat. Steam is \
dense. The whisk ritual is the peak of the Finnish sauna experience.
COLOR EMPHASIS: Translucent violet leaves backlit with pink-lavender and \
electric violet (#9b0aa5); water droplets catching purple and pink (#eb5adc) \
light; deep purple (#2e008b) in the background steam and lake beyond; soft \
lavender (#a082e6) in the nearest steam wisps and lake reflection.
MOTION: The whisk swings in a slow arc; leaves flutter; water droplets spray \
in a fan pattern; steam vortices spiral in the whisk's wake; through the \
window, the lake surface ripples gently.`),
  },
  {
    id: "floating-sauna-15",
    variationNumber: 15,
    dreamId: "floating-sauna",
    name: "Tromsø Arctic Pier",
    camera: "Slow dolly",
    focus: "Wide",
    keyElement: "Frost-covered pier in Tromsø leading to Arctic sauna under Northern Lights",
    atmosphere: "Winter dawn",
    tags: ["ice", "tromso", "arctic", "nordic"],
    prompt: compose(`\
SCENE: A frost-covered pier extends from the shore of Tromsø — the \
"Gateway to the Arctic" in northern Norway, one of the world's most famous \
destinations for Northern Lights and Arctic wellness. Every surface of the \
pier is coated in white frost crystals that catch the pre-dawn purple light. \
The iconic Arctic Cathedral (Ishavskatedralen) with its dramatic triangular \
silhouette is visible across the Tromsøysundet strait, bathed in soft \
lavender light. At the pier's end, a floating Arctic sauna structure glows \
pink-lavender from within. Above, the aurora borealis shimmers in curtains \
of electric violet and soft lavender across the deep purple sky — Tromsø's \
legendary Northern Lights display.
CAMERA: Slow dolly forward along the Tromsø pier, creating a sense of \
approach toward the warm Arctic sauna — the iconic walk every polar bather knows.
FOCUS: Wide — the frosted pier details in the foreground; the Arctic \
Cathedral silhouette across the water; the sauna, aurora, and dawn sky ahead.
KEY ELEMENT: The Tromsø pier as a pilgrimage path to Arctic wellness — \
beneath the Northern Lights, where Norway's legendary cold meets the warmth \
of the sauna tradition.
ATMOSPHERE: Winter dawn in Tromsø — Arctic cold. The frost is thick. The \
Norwegian mountains stand as dark purple guardians around the fjord.
COLOR EMPHASIS: White frost with lavender (#a082e6) and electric violet \
(#9b0aa5) tints; deep purple (#2e008b) sky and fjord water; the Arctic \
Cathedral as a soft lavender silhouette; warm pink-lavender from the sauna \
windows; aurora curtains in electric violet and soft lavender above.
MOTION: Slow forward dolly; frost crystals catch and release light; the \
sauna's warm glow grows; the aurora shimmers overhead; breath-like mist \
drifts at the pier surface.`),
  },
  {
    id: "floating-sauna-16",
    variationNumber: 16,
    dreamId: "floating-sauna",
    name: "Budapest Thermal Rise",
    camera: "Macro time-lapse",
    focus: "Detail",
    keyElement: "Warmth rising in ornate Art Nouveau Széchenyi thermal bath",
    atmosphere: "Warm, building",
    tags: ["budapest", "heat", "ritual", "glow"],
    prompt: compose(`\
SCENE: Inside the Széchenyi Thermal Baths in Budapest — one of the world's \
grandest thermal bath complexes. The camera captures an ornate Art Nouveau \
temperature gauge mounted on a marble column as the thermal water's warmth \
builds. The gauge's brass housing catches warm pink-lavender light from the \
thermal pool's underwater illumination while purple light from the vaulted \
ceiling creates a cool accent on its glass surface. The surrounding \
architecture is magnificent — ornate columns, mosaic tilework, and the \
grand Neo-Baroque dome overhead, all rendered in deep purple and electric \
violet tones. Condensation beads form on the gauge's glass face. Steam \
curls rise from the thermal water surface nearby.
CAMERA: Macro time-lapse feel — the temperature building is the drama, \
framed by the grand Széchenyi architecture.
FOCUS: Detail — the gauge and its ornate brass housing are crisp; the \
magnificent bath architecture softens at the edges but remains recognizable.
KEY ELEMENT: The thermal gauge as the objective witness to Budapest's \
legendary geothermal warmth — a scientific instrument surrounded by the \
world's most opulent bathing architecture.
ATMOSPHERE: Warm, building. The thermal water temperature is rising. The \
Széchenyi Baths' grandeur amplifies the ritual of warming.
COLOR EMPHASIS: Warm pink-lavender (#eb5adc) on the brass housing; the gauge \
face reflects both pink-lavender (thermal water) and electric violet \
(#9b0aa5) (from the dome); deep purple (#2e008b) in the architectural \
shadows and marble; soft lavender (#a082e6) condensation droplets on glass.
MOTION: Steam curls rise from the thermal water surface; condensation \
droplets form and grow on the glass; the warm-cool light balance shifts; \
the ornate architecture catches flickering underwater light reflections.`),
  },
  {
    id: "floating-sauna-17",
    variationNumber: 17,
    dreamId: "floating-sauna",
    name: "Dead Sea Ripple",
    camera: "Overhead",
    focus: "Detail",
    keyElement: "Concentric ripple on mineral-rich Dead Sea water, desert hills",
    atmosphere: "Still, meditative",
    tags: ["dead-sea", "water", "zen", "minimal"],
    prompt: compose(`\
SCENE: Looking straight down at the perfectly still surface of the Dead Sea \
— Jordan. A single mineral-rich water drop falls and strikes the surface, \
creating a set of concentric ripple rings that expand outward in a perfect \
circle. The hyper-saline water reflects the purple twilight sky, so each \
ripple ring is a moving circle of light and dark purple. The water has an \
oily, mineral sheen — thicker than ordinary water — giving the ripples a \
unique, almost viscous quality. Salt crystal formations are visible at the \
frame edges where the shore begins. The ripples interact with the reflected \
image of desert hills beyond, momentarily distorting their deep purple \
silhouette. As the ripples reach the frame edge, the Dead Sea returns to \
its legendary stillness.
CAMERA: Overhead — looking straight down at the Dead Sea surface. Static. The \
geometry of the expanding circles on the mineral water is the entire \
composition.
FOCUS: Detail — the ripple edges are sharp; the reflected desert hills and \
sky in the water are visible but secondary to the wave pattern; salt \
crystals at edges provide texture.
KEY ELEMENT: The single ripple on the world's saltiest body of water — one \
action creating expanding circles on a surface so mineral-rich it behaves \
unlike any other water on Earth.
ATMOSPHERE: Still, meditative. The Dead Sea is so quiet that a single drop \
creates a visible event. Ultimate ancient calm at the lowest point on Earth.
COLOR EMPHASIS: Deep purple (#2e008b) in the still mineral water; the ripple \
crests catch soft lavender (#a082e6) and electric violet (#9b0aa5) sky \
reflections; light blue (#7da0eb) in the salt crystal formations; the drop \
impact creates a momentary white flash against the purple surface.
MOTION: The drop impact; concentric ripples expanding at decreasing speed \
through the thick mineral water; the reflected desert hills fragmenting and \
reassembling; the slow return to perfect stillness.`),
  },
  {
    id: "floating-sauna-18",
    variationNumber: 18,
    dreamId: "floating-sauna",
    name: "Santorini Linen",
    camera: "Slow-motion drape",
    focus: "Detail",
    keyElement: "White linen draped with Santorini blue domes and caldera behind",
    atmosphere: "Warm, Mediterranean",
    tags: ["santorini", "zen", "ritual", "wellness"],
    prompt: compose(`\
SCENE: A white linen towel falls through the air in extreme slow motion on \
a Santorini spa terrace, caught in a cross-light of warm pink-lavender from \
one side and electric violet from the other. Behind, the iconic Santorini \
caldera view stretches — whitewashed buildings with blue-purple tinted domes \
cascading down the cliff face, the volcanic caldera's deep purple waters far \
below. The fabric billows, folds, and ripples as the Aegean breeze catches \
it — each fold creating complex shadows in purple while the surfaces facing \
the warm light glow pink-lavender-white. The towel slowly settles onto a \
smooth stone terrace ledge, its folds recording the motion of its fall. The \
linen's weave texture is visible at the macro level.
CAMERA: Slow-motion drape — tracking the towel's descent from a 45-degree \
angle, close enough to see the fabric texture with the caldera behind.
FOCUS: Detail — the nearest fabric folds are razor-sharp; the Santorini \
caldera and domes behind are soft purple bokeh; the falling motion creates \
soft areas where the fabric is in between positions.
KEY ELEMENT: The white linen as a surface for dual light — warm and purple — \
framed against the world's most iconic caldera view, symbolizing \
Mediterranean wellness purity.
ATMOSPHERE: Warm, Mediterranean. The golden hour on Santorini — Aegean \
breeze, volcanic beauty, and the simplicity of white linen.
COLOR EMPHASIS: White linen with warm pink-lavender (#eb5adc) highlights and \
electric violet (#9b0aa5) shadows in the folds; the caldera water is deep \
purple (#2e008b); the domes catch soft lavender (#a082e6); the falling \
motion blur has a pink (#eb5adc) tint against the volcanic sky.
MOTION: Ultra-slow-motion drape — the towel descends, billows in the Aegean \
breeze, catches air, folds, and settles. Each fold is a unique event against \
the Santorini backdrop.`),
  },
  {
    id: "floating-sauna-19",
    variationNumber: 19,
    dreamId: "floating-sauna",
    name: "Alpine Chalet Condensation",
    camera: "Static with slow clear",
    focus: "Detail",
    keyElement: "Condensation on chalet window, Matterhorn visible beyond",
    atmosphere: "Warm interior, contrast",
    tags: ["swiss-alps", "contrast", "steam", "water"],
    prompt: compose(`\
SCENE: A Swiss Alpine chalet spa window is completely fogged with \
condensation. Through the misted glass, the majestic Matterhorn and \
surrounding Alpine peaks beyond are visible as soft, impressionist blurs of \
color — deep purple mountain silhouettes, violet sky, snow-covered ridges. \
A single streak appears as condensation begins to run, creating a clear \
channel through the fog. Through this channel, the Matterhorn snaps into \
sharp, vivid purple clarity — a window within a window revealing one of \
Earth's most iconic peaks. More streaks follow, creating abstract vertical \
clear paths through the fog, each revealing a different slice of the Alpine \
panorama.
CAMERA: Static — close on the chalet window surface. The clearing \
condensation revealing the Matterhorn is the action.
FOCUS: Detail — the condensation droplets on the glass are in focus; the \
Alpine world beyond shifts between soft (through fog) and sharp (through \
clear streaks).
KEY ELEMENT: The condensation as a veil between the warm chalet interior and \
the freezing Swiss Alps exterior — and the act of clearing it as a slow \
reveal of the Matterhorn.
ATMOSPHERE: Warm interior contrasting with the frozen Alpine exterior. The \
condensation is the visible boundary between cozy warmth and mountain cold.
COLOR EMPHASIS: The fogged glass is a neutral gray-lavender; the clear \
streaks reveal deep purple (#2e008b) mountains and electric violet (#9b0aa5) \
sky; soft lavender (#a082e6) in the diffused fog sections; the condensation \
droplets themselves catch warm pink-lavender from the chalet interior; light \
blue (#7da0eb) in the snow-covered peaks.
MOTION: Condensation streaks slowly growing as gravity pulls water down; new \
clear channels appearing; the Matterhorn view through them sharpening; the \
Alpine world being gradually revealed in vertical stripes.`),
  },
  {
    id: "floating-sauna-20",
    variationNumber: 20,
    dreamId: "floating-sauna",
    name: "Blue Grotto Candles",
    camera: "Slow dolly along",
    focus: "Detail",
    keyElement: "Candles flickering in sea cave with ethereal blue-purple light",
    atmosphere: "Ethereal, cave",
    tags: ["capri", "glow", "ritual", "zen"],
    prompt: compose(`\
SCENE: Inside the Blue Grotto of Capri — a legendary sea cave where light \
enters through an underwater opening, filling the space with an ethereal \
luminescence. A row of small votive candles sits on a natural rock ledge \
inside the grotto, their flames flickering in unison with the gentle cave \
air currents. The camera moves slowly along the row, passing each candle. \
Each flame is a warm pink-lavender core surrounded by a soft purple halo \
(from the grotto's natural blue-purple light mixing with the flame's warm \
tone). The candles cast dancing shadows on the cave walls — ancient limestone \
surfaces that shimmer with the reflected light from the water below. The \
grotto water itself glows an otherworldly electric blue-purple, illuminated \
from beneath by the underwater light entrance. Stalactites hang above, \
catching candlelight in lavender points.
CAMERA: Slow dolly along the candle row at flame height, each candle passing \
through focus in sequence within the Blue Grotto.
FOCUS: Detail — each candle flame is momentarily razor-sharp as the dolly \
passes, with the others falling to soft bokeh; the grotto walls and \
luminous water provide atmospheric depth.
KEY ELEMENT: The candle flames as living light within the Blue Grotto — each \
one a warm human presence in one of nature's most magical light chambers.
ATMOSPHERE: Ethereal, cave. The Blue Grotto's supernatural luminescence \
envelops everything. The candles add warmth to the cave's cool light.
COLOR EMPHASIS: Warm pink-lavender flame cores; soft lavender (#a082e6) halos \
around each flame; electric blue (#3750dc) and deep purple (#2e008b) in the \
grotto water and cave shadows; electric violet (#9b0aa5) on the wet cave \
walls; light blue (#7da0eb) in the water's luminescence.
MOTION: Slow dolly; each flame flickers independently but in sympathetic \
rhythm; shadows dance on the cave walls; the grotto water shimmers and \
pulses with light from below; the focus shift from candle to candle creates \
a breathing, rack-focus effect.`),
  },
  {
    id: "floating-sauna-21",
    variationNumber: 21,
    dreamId: "floating-sauna",
    name: "Abisko Ice Hole",
    camera: "Overhead drone",
    focus: "Wide",
    keyElement: "Ice hole under Northern Lights in Arctic Sweden, Abisko",
    atmosphere: "Arctic night, aurora",
    tags: ["ice", "abisko", "cold-plunge", "wellness"],
    prompt: compose(`\
SCENE: Bird's-eye view of frozen Lake Torneträsk near Abisko — Sweden's \
premier Northern Lights viewing location in Arctic Lapland. The ice is \
white-gray with purple shadows and frost patterns. A dark circular hole has \
been cut in the ice — a perfect black circle of open water that reads as a \
portal to another world. Next to the hole, a sauna sits in its own cleared \
area on the ice. Steam rises from the sauna's chimney — a white plume \
against the purple aurora-lit sky. The Northern Lights blaze overhead in \
curtains of electric violet and soft lavender. Footprints in the frost lead \
from the sauna to the ice hole. The Scandinavian Mountains (Scandes) rise \
along the Norwegian border to the west; Abisko's dark boreal forest lines \
the shore. The frozen lake stretches vast and wild beneath the aurora.
CAMERA: Overhead drone — high enough to see the sauna, ice hole, and the \
surrounding Abisko wilderness. Slow descent over 8 seconds.
FOCUS: Wide — the graphic elements (dark circle, white ice, sauna rectangle, \
aurora sky) are all sharp in a minimalist composition.
KEY ELEMENT: The ice hole as a dark portal in Lake Torneträsk's frozen \
surface — framed by Abisko's pristine Arctic wilderness and the Northern \
Lights, this is one of the world's most dramatic settings for ice bathing.
ATMOSPHERE: Arctic night in Abisko — the composition is almost abstract from \
above, with the aurora providing a celestial purple light show.
COLOR EMPHASIS: White-gray ice with purple (#2e008b) shadows; the ice hole \
is near-black with electric violet (#9b0aa5) aurora reflections; soft \
lavender (#a082e6) in the frost patterns and aurora curtains; warm \
pink-lavender from the sauna windows; electric blue (#3750dc) in the aurora \
highlights; white steam against deep purple sky.
MOTION: Slow drone descent; the steam plume drifts; the black water in the \
ice hole shimmers with aurora reflections; the descending perspective reveals \
Abisko's mountain landscape and the aurora's dance in increasing detail.`),
  },
  {
    id: "floating-sauna-22",
    variationNumber: 22,
    dreamId: "floating-sauna",
    name: "Sahara Heat Waves",
    camera: "Static with distortion",
    focus: "Medium",
    keyElement: "Heat distortion over Sahara Desert dunes at twilight",
    atmosphere: "Hot exterior, twilight",
    tags: ["sahara", "heat", "floating", "mist"],
    prompt: compose(`\
SCENE: The Sahara Desert at twilight in Morocco — visible heat distortion \
rises from the sun-baked sand dunes, creating a shimmering column of warped \
air. The camera looks through this distortion at the purple twilight sky and \
the sculpted dune ridges beyond, which warp and ripple like a mirage. The \
heat distortion acts as a living lens, bending the straight dune crests into \
waves. The sand surface radiates stored warmth — its surface shimmering with \
residual heat. In the mid-ground, a traditional Moroccan wellness tent with \
its pointed canopy is barely visible through the distortion, its purple-lit \
interior casting a faint glow. The vast dune field stretches to the horizon \
in sweeping curves.
CAMERA: Static — positioned to capture the heat distortion between the \
camera and the purple twilight sky over the Sahara. The distortion itself is \
the subject.
FOCUS: Medium — the nearest dune ridge is sharp; the heat distortion zone is \
the visually active area; the distant dunes and sky are rendered surreal by \
the bending.
KEY ELEMENT: Desert heat made visible — the Sahara's immense thermal energy \
rendered as a visual effect that transforms the dune landscape into a living, \
breathing purple painting.
ATMOSPHERE: Hot exterior at twilight — the Sahara radiates its stored heat \
into the cooling purple air. The temperature difference creates a visible \
optical phenomenon unique to desert environments.
COLOR EMPHASIS: The sky's electric violet (#9b0aa5) and deep purple (#2e008b) \
are distorted into wavy versions of themselves; soft lavender (#a082e6) in \
the lighter distortion zones; pink (#eb5adc) on the sand dune ridges; the \
distortion adds a pink (#eb5adc) chromatic shift at the wave edges.
MOTION: The heat distortion shimmers and ripples continuously; the sky and \
dune horizon warp in slow waves; a wisp of sand blows off a dune crest, \
distorting as it passes through the heat column.`),
  },
  {
    id: "floating-sauna-23",
    variationNumber: 23,
    dreamId: "floating-sauna",
    name: "Hallstatt Snow Scene",
    camera: "Slow wide",
    focus: "Wide",
    keyElement: "Snowfall over alpine lakeside village of Hallstatt, Austria",
    atmosphere: "Winter dusk, snow",
    tags: ["hallstatt", "stillness", "contrast", "wellness"],
    prompt: compose(`\
SCENE: Gentle snowfall over Hallstatt, Austria — the fairy-tale Alpine \
lakeside village where pastel houses cascade down the mountainside to the \
mirror-like Hallstätter See. A wellness pavilion floats at the water's edge, \
with the dramatic Dachstein massif rising as a dark wall behind. The iconic \
Hallstatt skyline is visible along the waterfront: the distinctive pointed \
spire of the Evangelical church, the pastel-colored lakefront houses with \
their wooden balconies, and the ancient salt mine buildings above, all \
softened by the falling snow. Large, slow snowflakes descend through the \
frame, each one catching the purple dusk light. The pavilion is centered in \
the composition between the vast mountain and the still lake, its warm-lit \
windows creating pink-lavender rectangles against the purple-gray environment. \
The Hallstätter See surface is dark and still.
CAMERA: Slow wide — static or with an almost imperceptible drift. The \
snowfall is the motion; the Dachstein massif and Hallstatt village are the \
backdrop.
FOCUS: Wide — the pavilion is sharp at center; the village houses and church \
spire provide storybook scale; snowflakes vary from large and soft to tiny \
distant points.
KEY ELEMENT: The wellness pavilion dwarfed by the Dachstein massif — a \
small, warm human refuge at the base of the Alpine wall in one of the \
world's most picturesque villages, veiled in falling snow.
ATMOSPHERE: Winter dusk with snowfall over Hallstatt. The ancient mountains \
loom protectively over the village. The snow muffles all sound.
COLOR EMPHASIS: White snowflakes with lavender (#a082e6) tint; deep purple \
(#2e008b) sky and mountain shadow; electric violet (#9b0aa5) at the horizon; \
warm pink-lavender from the pavilion windows; Hallstatt's house lights as \
tiny warm pink (#eb5adc) points along the waterfront.
MOTION: Snowflakes descend in slow, irregular paths; the pavilion's chimney \
steam mixes with the snow; warm window glow flickers; the Dachstein massif \
catches and releases snow in patterns.`),
  },
  {
    id: "floating-sauna-24",
    variationNumber: 24,
    dreamId: "floating-sauna",
    name: "Thai Ritual Pour",
    camera: "Slow-motion",
    focus: "Detail",
    keyElement: "Water ritual in ornate Thai wellness temple, Bangkok",
    atmosphere: "Warm interior",
    tags: ["bangkok", "ritual", "steam", "heat"],
    prompt: compose(`\
SCENE: Inside an ornate traditional Thai wellness temple in Bangkok — a \
gilded ceremonial bowl tips and water pours in a single, elegant stream onto \
smooth river stones arranged in a ritual formation below. In slow motion, \
the water stream catches the light — it is a glass-like cylinder that \
refracts the warm pink-lavender glow from surrounding candles and the purple \
ambient light from silk-draped windows simultaneously. Where the stream hits \
the first stone, it shatters into droplets and mist. The stream itself has a \
hypnotic quality — its surface ripples and twists as gravity pulls it \
downward. The gilded bowl's ornate surface is visible at the top of frame — \
lotus motifs and Khmer-influenced patterns tell centuries of Thai wellness \
tradition. Behind, glimpses of the temple's spired roof and intricate \
gold-and-purple murals are visible.
CAMERA: Slow-motion, positioned to capture the full arc of the pour — from \
gilded bowl to stone impact — in a vertical composition.
FOCUS: Detail — the water stream is the sharp subject at the center; the \
gilded bowl above and the stones below are slightly soft; the temple murals \
are atmospheric bokeh.
KEY ELEMENT: The water stream as a liquid bridge between the ceremonial \
vessel (Thai spiritual intent) and the smooth stones (natural element) — \
the central gesture of a Bangkok wellness ritual.
ATMOSPHERE: Warm interior in a Bangkok temple. The pour is the ceremonial \
act that transforms intention into experience through water.
COLOR EMPHASIS: The water stream refracts both pink-lavender (#eb5adc) (from \
candles) and electric violet (#9b0aa5) (from silk-filtered light) as \
internal caustics; the stone surfaces are deep purple (#2e008b) with soft \
lavender (#a082e6) highlights; the mist at impact blooms white to lavender; \
the gilded bowl catches pink (#eb5adc) and electric violet reflections.
MOTION: The water stream descends in slow motion, its surface alive with \
tension and internal light; the impact point erupts in mist and spray; the \
gilded bowl tilts imperceptibly, controlling the flow; steam and mist rise \
from below through candlelight.`),
  },
  {
    id: "floating-sauna-25",
    variationNumber: 25,
    dreamId: "floating-sauna",
    name: "Taj Mahal Dawn",
    camera: "Slow dolly back",
    focus: "Wide",
    keyElement: "Spa silhouette on Yamuna River with Taj Mahal visible at dawn",
    atmosphere: "Dawn, clear",
    tags: ["floating", "taj-mahal", "india", "zen"],
    prompt: compose(`\
SCENE: A floating wellness pavilion in silhouette against a breaking dawn \
sky over the Yamuna River in Agra, India. The sky transitions from deep \
purple at the top through electric violet to a band of hot pink at the \
horizon where the sun is about to appear. The spa is a dark geometric \
shape centered in the frame. Behind it, the unmistakable silhouette of the \
Taj Mahal rises — its perfect dome, four minarets, and symmetrical gardens \
are instantly recognizable even in silhouette, bathed in soft lavender \
pre-dawn light. The white marble of the Taj catches the first pink-violet \
hues, glowing like a jewel against the purple sky. A faint glow of warm \
light escapes from the spa's window — a warm pink-lavender slit in the dark \
form. The Yamuna's surface mirrors everything — a perfect reflection of \
the Taj Mahal in electric violet and deep purple. A single bird flies \
from the Taj's gardens across the purple sky.
CAMERA: Slow dolly back — starting relatively close to the spa pavilion, \
pulling away over 8 seconds to reveal the Yamuna River panorama and the \
full majesty of the Taj Mahal behind.
FOCUS: Wide — the spa silhouette is a graphic element; the dawn sky, \
Taj Mahal's silhouette, and the Yamuna's reflections fill the composition.
KEY ELEMENT: The spa on the Yamuna at dawn — where India's most iconic \
monument meets the river, with the Taj Mahal as the ultimate backdrop. \
The wellness session ends as the ancient city awakens.
ATMOSPHERE: Dawn, clear over the Yamuna River. The first light arrives \
from the east. The spa session is ending. A new day begins in the \
purple-violet palette before the world's most beautiful building.
COLOR EMPHASIS: Deep purple (#2e008b) sky at top; electric violet (#9b0aa5) \
mid-sky; pink (#eb5adc) at the horizon; soft lavender (#a082e6) on the \
Taj Mahal's marble and in the river mist; warm pink-lavender window slit; \
the Yamuna mirrors all colors one shade darker.
MOTION: Slow dolly back; the spa shrinks; the Taj Mahal reveals itself in \
full glory; the dawn sky brightens; the bird crosses; mist wisps drift off \
the Yamuna; the warm glow flickers its last.`),
  },
];

// ---------------------------------------------------------------------------
// COMBINED EXPORT — all 75 variations
// ---------------------------------------------------------------------------

export const VIDEO_VARIATIONS: DreamVideoVariation[] = [
  ...archipelagoVariations,
  ...gronaLundVariations,
  ...floatingSaunaVariations,
];

export function getVariationsForDream(dreamId: DreamId): DreamVideoVariation[] {
  return VIDEO_VARIATIONS.filter((v) => v.dreamId === dreamId);
}

export function getRandomVariation(dreamId: DreamId): DreamVideoVariation {
  const pool = getVariationsForDream(dreamId);
  return pool[Math.floor(Math.random() * pool.length)];
}
