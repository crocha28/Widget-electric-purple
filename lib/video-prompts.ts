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
STYLE & COLOR GRADING:
Cinematic, dreamlike 8-second vertical video (9:16, 750p). The entire color \
palette is built around "Electric Purple" — deep purples (#2e008b), electric \
violets (#9b0aa5), soft lavenders (#a082e6), with accent pinks (#eb5adc) and \
electric blues (#3750dc / #7da0eb). Shadows are tinted deep indigo-purple; \
mid-tones sit slightly desaturated; highlights bloom into lavender, pink, or \
electric blue. Every single frame must feel immersed in this palette — even \
golden-hour warmth carries a violet haze underneath.

CINEMATIC LANGUAGE:
Smooth, slow-motion-adjacent camera movements — no jump cuts, no abrupt \
transitions. Shallow depth of field with anamorphic bokeh. Subtle lens flares \
permitted when light sources hit the lens. Dreamlike pacing: every movement \
feels weightless, as if the viewer is drifting through a lucid dream.

LIGHTING:
Golden-hour warmth filtered through a purple atmospheric haze. Strong \
backlight when possible — silhouettes and rim-light are encouraged. Volumetric \
light (god-rays, light shafts through mist or steam) whenever the scene \
supports it. Practicals (candles, string lights, neon, embers) should cast \
warm pools that bleed into the surrounding purple tones.

TEXTURE & FILM STOCK:
Subtle filmic grain (organic, not digital noise). Slightly halated highlights \
reminiscent of Kodak Vision3 500T pushed one stop. Chromatic aberration on \
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
  luminance and composition energy to allow seamless replay.`;

// ---------------------------------------------------------------------------
// TAGGING TAXONOMY
// ---------------------------------------------------------------------------

export const GLOBAL_TAGS = [
  "electric-purple",
  "electric-dreams",
  "iqos",
  "summer-2026",
  "stockholm",
  "8s",
  "vertical",
  "ai-generated",
] as const;

export const DREAM_TAGS: Record<DreamId, readonly string[]> = {
  archipelago: [
    "nature", "sea", "sunset", "cruise", "archipelago", "golden-hour",
    "water", "islands", "boat", "horizon", "reflections", "waves", "calm",
    "serenity", "nordic", "twilight", "silhouette", "deck", "wake", "sky",
    "vaxholm", "sandhamn", "fjaderholmarna", "grinda", "moja",
    "uto", "landsort", "dalaro",
  ],
  "grona-lund": [
    "music", "concert", "festival", "night", "lights", "stage", "crowd",
    "energy", "neon", "bass", "rhythm", "amusement-park", "ferris-wheel",
    "lasers", "confetti", "speakers", "vibration", "electric", "strobe",
    "atmosphere", "djurgarden", "gamla-stan", "strandvagen",
    "sodermalm", "stadshuset", "fotografiska",
  ],
  "floating-sauna": [
    "wellness", "sauna", "steam", "water", "heat", "cold-plunge",
    "stillness", "wood", "floating", "lake", "minimal", "breath", "mist",
    "glow", "ritual", "contrast", "ice", "embers", "zen", "immersion",
    "riddarfjarden", "brunnsviken", "langholmen", "hellasgarden",
    "malaren", "saltsjon",
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
    name: "Golden Wake",
    camera: "Tracking behind boat",
    focus: "Wide",
    keyElement: "Boat wake splitting purple-gold water",
    atmosphere: "Golden hour, clear sky",
    tags: ["sunset", "wake", "golden-hour", "water"],
    prompt: compose(`\
SCENE: A wooden cruise boat glides through the Stockholm archipelago at golden \
hour. The camera follows from behind, centered on the creamy V-shaped wake \
that splits the water into two shimmering curtains — one side catching the \
sinking amber sun, the other side reflecting deep violet sky. Small rocky \
islands dotted with pine trees drift past in the background. The wake's foam \
catches pink and lavender highlights.
CAMERA: Tracking behind the vessel at water level, drifting slowly upward over \
8 seconds to reveal more of the archipelago horizon.
FOCUS: Wide — the boat occupies the lower third, the wake fills the middle, \
and the purple-gold sky dominates the top.
KEY ELEMENT: The V-shaped wake acts as leading lines that pull the eye toward \
the violet horizon.
ATMOSPHERE: Golden hour with clear sky. Warm amber sunlight from the left, \
filtered through a purple atmospheric haze that tints the shadows indigo.
COLOR EMPHASIS: Gold-to-purple gradient on the water surface; deep purple \
(#2e008b) in the shadows of the islands; soft lavender (#a082e6) in the sky \
near the horizon; pink (#eb5adc) catching on the foam crests.
MOTION: The boat moves steadily forward; the wake expands rhythmically; gentle \
ripples propagate outward; distant islands slide past in parallax.`),
  },
  {
    id: "archipelago-02",
    variationNumber: 2,
    dreamId: "archipelago",
    name: "Vaxholm Fortress Pass",
    camera: "Slow lateral dolly",
    focus: "Wide",
    keyElement: "Vaxholm fortress silhouetted against violet sky",
    atmosphere: "Golden hour, haze",
    tags: ["islands", "silhouette", "golden-hour", "vaxholm"],
    prompt: compose(`\
SCENE: The camera moves laterally along the waterline approaching Vaxholm — \
the historic gateway to the Stockholm archipelago. The iconic Vaxholm \
Fortress (Vaxholms kastell) rises on its island in the mid-ground, its \
stone walls and tower silhouetted against a sky of violet, lavender, and \
ember-orange. The water between the fortress island and the surrounding \
granite islets catches fragments of the sky's color — electric violet in the \
troughs, gold on the wave crests. A thin atmospheric haze softens the town \
of Vaxholm on the far shore into purple silhouettes layered in depth. Sailing \
boats are moored near the fortress.
CAMERA: Slow lateral dolly at water level, left to right, revealing the \
fortress and the Vaxholm waterfront in a cinematic parallax.
FOCUS: Wide — foreground water detail yields to the sharp fortress mid-ground \
and a hazy Vaxholm shoreline behind.
KEY ELEMENT: Vaxholm Fortress as the iconic sentinel of the archipelago — its \
distinctive stone profile instantly recognizable against the Electric Purple \
sky.
ATMOSPHERE: Golden hour with low atmospheric haze. The sun is just off-frame \
left, casting long warm sidelight that rakes across the fortress walls.
COLOR EMPHASIS: Deep purple (#2e008b) on the fortress stone shadows; electric \
violet (#9b0aa5) on the mid-ground water; soft lavender (#a082e6) in the \
haze over Vaxholm town; gold and pink (#eb5adc) on the sunlit fortress walls.
MOTION: Gentle lateral drift revealing the fortress from different angles; \
water laps softly against the fortress island rocks; moored sailboats bob \
gently; a distant bird glides across the violet sky.`),
  },
  {
    id: "archipelago-03",
    variationNumber: 3,
    dreamId: "archipelago",
    name: "Deck Reflections",
    camera: "Static low-angle",
    focus: "Detail",
    keyElement: "Polished wood deck reflecting sunset light",
    atmosphere: "Golden hour, calm",
    tags: ["deck", "reflections", "calm", "golden-hour"],
    prompt: compose(`\
SCENE: Low-angle shot from deck level of a polished teak boat deck. The wood \
is wet from sea spray, creating a mirror-like surface that reflects the \
purple-gold sunset sky above. A coiled nautical rope sits in the left third \
of frame. The horizon is visible as a thin line of light in the background, \
out of focus. Warm amber light spills across the deck from the right while \
purple shadows pool between the planks.
CAMERA: Static, positioned just inches above the deck surface, with a very \
slight forward drift over 8 seconds.
FOCUS: Detail — shallow depth of field keeps the nearest planks sharp while \
the rope and horizon melt into creamy bokeh.
KEY ELEMENT: The wet deck surface acting as a mirror for the sky's \
purple-to-gold gradient.
ATMOSPHERE: Golden hour, dead calm. No wind. The reflection on the deck is \
almost perfect — a second sky beneath the viewer's feet.
COLOR EMPHASIS: Warm amber and soft lavender (#a082e6) reflected on the wet \
wood; deep purple (#2e008b) in the plank gaps and shadows; pink (#eb5adc) \
highlights on the rope fibers catching the sun.
MOTION: A single water droplet slides slowly across the polished surface; the \
reflected clouds drift imperceptibly; the boat sways with the gentlest rocking.`),
  },
  {
    id: "archipelago-04",
    variationNumber: 4,
    dreamId: "archipelago",
    name: "Horizon Melt",
    camera: "Slow crane rising",
    focus: "Ultra-wide",
    keyElement: "Horizon line where sea meets purple sky",
    atmosphere: "Blue hour, mist",
    tags: ["horizon", "twilight", "sea", "calm"],
    prompt: compose(`\
SCENE: The camera starts just above the water surface — close enough to see \
individual ripples — then slowly cranes upward to reveal an endless horizon \
where the dark sea merges with a gradient sky that transitions from deep \
indigo at the top through electric violet to a thin band of residual amber at \
the horizon line. A low mist hugs the water surface, diffusing into lavender \
wisps. The sea is nearly still, with long, slow swells.
CAMERA: Slow crane rise — starts at 30cm above water, ends at roughly 3m, \
maintaining the horizon at the center of frame throughout.
FOCUS: Ultra-wide — the horizon line is the subject, stretching edge to edge.
KEY ELEMENT: The precise line where ocean and sky meet, blurred by mist into \
an ambiguous, dreamlike boundary.
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
    name: "Ripple Close-Up",
    camera: "Macro, slight drift",
    focus: "Extreme detail",
    keyElement: "Water surface ripples catching violet light",
    atmosphere: "Golden hour",
    tags: ["water", "reflections", "waves", "golden-hour"],
    prompt: compose(`\
SCENE: Extreme close-up of the ocean surface. Each ripple acts as a tiny \
curved mirror reflecting a different slice of the sunset sky — some crests \
catch gold, others catch electric violet, others catch pink. The water \
between the ripples is dark indigo-purple, creating a mosaic of moving color. \
Occasional micro-bubbles catch the light as tiny pinpoints.
CAMERA: Macro lens hovering just above the water surface with a gentle \
lateral drift, as if floating on the current.
FOCUS: Extreme detail — individual ripple crests are razor-sharp; the troughs \
soften into bokeh.
KEY ELEMENT: The water surface acting as a fragmented, living canvas of the \
Electric Purple palette.
ATMOSPHERE: Golden hour — warm directional light from a low angle creates \
specular highlights on every ripple crest.
COLOR EMPHASIS: Electric violet (#9b0aa5) and gold alternating on ripple \
crests; deep purple (#2e008b) in the troughs; pink (#eb5adc) specular \
highlights; light blue (#7da0eb) reflections from the zenith sky.
MOTION: Ripples propagate diagonally across frame in slow motion; light \
dances across the surface in a hypnotic, rhythmic pattern.`),
  },
  {
    id: "archipelago-06",
    variationNumber: 6,
    dreamId: "archipelago",
    name: "Fjäderholmarna Overhead",
    camera: "Top-down drone",
    focus: "Overhead",
    keyElement: "Boat approaching Fjäderholmarna from the city",
    atmosphere: "Twilight, clear",
    tags: ["archipelago", "boat", "fjaderholmarna", "nature"],
    prompt: compose(`\
SCENE: Bird's-eye view looking straight down at a small white cruise boat \
approaching Fjäderholmarna — the closest archipelago islands to central \
Stockholm, just 25 minutes from the city. The four small islands of \
Fjäderholmarna are visible below: Stora Fjäderholmen with its characteristic \
red wooden buildings and restaurant terraces, the smaller Ängsholmen green \
with gardens. The water is a deep electric violet, catching lavender and pink \
highlights where the twilight sky reflects. The boat's wake draws a perfect \
white line through the purple water, connecting the distant Stockholm skyline \
(faintly visible at the frame edge) to the island cluster.
CAMERA: Top-down drone, slowly rotating clockwise (about 15 degrees over 8 \
seconds) to add a subtle vertiginous drift.
FOCUS: Overhead — the boat is small in frame, emphasizing the island cluster \
and its relationship to the distant city.
KEY ELEMENT: Fjäderholmarna as the first taste of the archipelago — the city \
still visible behind, the wilderness ahead.
ATMOSPHERE: Twilight — the sky provides even, diffused purple light with no \
hard shadows. Clear air, no haze.
COLOR EMPHASIS: Deep purple (#2e008b) water; electric violet (#9b0aa5) in the \
open water reflections; the red wooden buildings on Stora Fjäderholmen are \
warm accents; the boat's white hull is the single bright moving element; \
wake foam tinted lavender (#a082e6).
MOTION: The boat crawls forward leaving its white wake; the drone rotates \
slowly; tiny ripples spread outward from the boat's passage; lights begin \
to glow on the island terraces.`),
  },
  {
    id: "archipelago-07",
    variationNumber: 7,
    dreamId: "archipelago",
    name: "Bow Spray",
    camera: "Low-angle from bow",
    focus: "Medium",
    keyElement: "Spray of water catching purple backlight",
    atmosphere: "Sunset, backlit",
    tags: ["water", "boat", "waves", "sunset"],
    prompt: compose(`\
SCENE: Shot from the bow of the boat, looking forward and slightly down. The \
prow cuts through the water, sending up curtains of fine spray on both sides. \
The spray is backlit by the setting sun, turning each droplet into a tiny \
prism of gold, violet, and pink. Through the spray, the purple horizon and \
distant islands are visible but softened. The polished brass fitting on the \
bow catches a warm purple-gold reflection.
CAMERA: Low-angle, mounted near the waterline on the bow, with a subtle \
forward lean as the boat rises and dips on gentle swells.
FOCUS: Medium — the spray curtain is the sharp subject; the horizon beyond is \
soft and dreamy.
KEY ELEMENT: Backlit spray droplets acting as prisms for the Electric Purple \
palette.
ATMOSPHERE: Sunset with strong backlight. The sun is low and directly ahead, \
creating a corona effect filtered through the spray.
COLOR EMPHASIS: Gold and pink (#eb5adc) in the backlit spray; electric violet \
(#9b0aa5) in the water; deep purple (#2e008b) in the shadowed hull; soft \
lavender (#a082e6) in the sky beyond.
MOTION: Continuous spray arcing upward and falling back; the boat rocks \
gently on swells; droplets hang in slow motion mid-air.`),
  },
  {
    id: "archipelago-08",
    variationNumber: 8,
    dreamId: "archipelago",
    name: "Lantern Glow",
    camera: "Slow orbit",
    focus: "Medium",
    keyElement: "String lights on deck against violet dusk",
    atmosphere: "Blue hour",
    tags: ["twilight", "calm", "reflections", "deck"],
    prompt: compose(`\
SCENE: A string of warm Edison-bulb lanterns stretches across the boat's deck, \
their amber glow creating pools of warm light on the wooden surface. Beyond \
the deck railing, the blue-hour sky is a deep electric violet gradient. The \
lanterns' light reflects on polished brass fittings and glass surfaces on \
deck. A wine glass sits on a small table, catching both the amber lantern \
light and the violet sky.
CAMERA: Slow orbit around the lantern string, moving roughly 30 degrees over \
8 seconds, keeping the lights and sky in constant relationship.
FOCUS: Medium — the nearest lantern bulb is in focus with creamy bokeh on the \
more distant bulbs and the purple sky.
KEY ELEMENT: The warm amber of the lanterns against the cold violet of the \
twilight sky — a temperature contrast that unifies in the Electric Purple \
palette.
ATMOSPHERE: Blue hour — the sky is luminous violet-blue; the deck is lit only \
by the practical lanterns.
COLOR EMPHASIS: Warm amber/gold from lanterns; deep purple (#2e008b) sky; \
electric violet (#9b0aa5) at the horizon; soft lavender (#a082e6) bokeh on \
distant lights; the wine glass catches pink (#eb5adc) reflections.
MOTION: Slow orbital drift; lanterns sway gently with the boat's rocking; the \
wine glass surface trembles with micro-ripples.`),
  },
  {
    id: "archipelago-09",
    variationNumber: 9,
    dreamId: "archipelago",
    name: "Sail Silhouette",
    camera: "Static wide",
    focus: "Wide",
    keyElement: "Sailboat silhouette against bleeding purple sky",
    atmosphere: "Sunset",
    tags: ["silhouette", "sunset", "boat", "sky"],
    prompt: compose(`\
SCENE: A classic wooden sailboat in perfect silhouette against a sky that \
bleeds from deep amber at the horizon through electric violet to deep purple \
overhead. The sails are full but the boat moves slowly — the scene is about \
stillness, not speed. The water below is a dark mirror, reflecting the sky's \
gradient in muted, deeper tones. A few small islands sit on the horizon as \
dark shapes.
CAMERA: Static wide shot. The boat is positioned at the rule-of-thirds \
intersection, left third of frame. No camera movement — the stillness is the \
point.
FOCUS: Wide — everything from the water's edge to the clouds is in focus, \
creating a painterly depth.
KEY ELEMENT: The stark black silhouette of the sailboat's mast, rigging, and \
hull against the intensely colored sky.
ATMOSPHERE: Peak sunset — the sky is at maximum saturation. No clouds, just \
pure gradient.
COLOR EMPHASIS: The sky is the canvas — amber at bottom, electric violet \
(#9b0aa5) in the middle, deep purple (#2e008b) at the top. The water mirrors \
this but two stops darker. The silhouette is pure black (#34303d).
MOTION: Minimal — the boat drifts almost imperceptibly; the water surface \
shimmers with slow, oily undulations; the reflected colors shift subtly.`),
  },
  {
    id: "archipelago-10",
    variationNumber: 10,
    dreamId: "archipelago",
    name: "Northern Shimmer",
    camera: "Slow tilt up",
    focus: "Wide",
    keyElement: "Faint aurora borealis tints above islands",
    atmosphere: "Night, clear",
    tags: ["nordic", "sky", "islands", "nature"],
    prompt: compose(`\
SCENE: Late Nordic summer night — the sky never fully darkens. The camera \
starts on the dark silhouettes of archipelago islands reflected in still \
water, then tilts slowly upward to reveal a sky where the deep purple of \
night is interrupted by faint, shimmering curtains of green-tinted aurora, \
interweaving with the dominant violet and lavender tones. Stars are faintly \
visible. The water below mirrors both the aurora and the purple sky.
CAMERA: Slow tilt up — starts on water reflection, ends on the aurora-tinged \
sky. Steady, meditative pace.
FOCUS: Wide — sharp from the island silhouettes to the stars.
KEY ELEMENT: The rare interplay of faint aurora greens woven into the Electric \
Purple palette — a uniquely Nordic phenomenon.
ATMOSPHERE: Clear Nordic summer night. The air is perfectly still. The \
temperature of the light is cold but alive with subtle color shifts.
COLOR EMPHASIS: Deep purple (#2e008b) as the base sky; electric violet \
(#9b0aa5) and soft lavender (#a082e6) in the aurora curtains (with faint \
green accents); electric blue (#3750dc) in the star reflections on water.
MOTION: The tilt is the primary motion; the aurora shimmers in slow, \
undulating curtains; stars twinkle subtly; water reflects everything in \
gentle distortion.`),
  },
  {
    id: "archipelago-11",
    variationNumber: 11,
    dreamId: "archipelago",
    name: "Wave Texture",
    camera: "Tracking alongside",
    focus: "Detail",
    keyElement: "Close ocean surface with electric violet undertones",
    atmosphere: "Golden hour",
    tags: ["waves", "water", "reflections", "sea"],
    prompt: compose(`\
SCENE: The camera travels alongside the boat at water level, focused on the \
ocean surface texture as it reacts to the hull's passage. The water has a deep \
electric violet base color with golden-hour light painting every wave crest \
in amber. The interaction between the hull's pressure wave and the open sea \
creates complex, mesmerizing patterns — standing waves, interference patterns, \
and tiny vortices.
CAMERA: Tracking alongside the hull at water level, matching the boat's \
speed, focused on the 2-meter zone where hull meets water.
FOCUS: Detail — the nearest wave textures are sharp; background water softens \
into an impressionist blur of violet and gold.
KEY ELEMENT: The complex fluid dynamics of water against hull, painted in \
purple and gold.
ATMOSPHERE: Golden hour — low-angle sunlight rakes across the wave texture, \
exaggerating every crest and trough with dramatic light and shadow.
COLOR EMPHASIS: Electric violet (#9b0aa5) in the wave troughs and shadows; \
gold crests; deep purple (#2e008b) in the deeper water; occasional pink \
(#eb5adc) highlight where spray catches direct sun.
MOTION: Continuous forward tracking; complex fluid motion in the wave \
patterns; occasional spray droplets arcing through frame.`),
  },
  {
    id: "archipelago-12",
    variationNumber: 12,
    dreamId: "archipelago",
    name: "Landsort Lighthouse",
    camera: "Dolly forward",
    focus: "Wide",
    keyElement: "Landsort lighthouse beam sweeping through purple mist",
    atmosphere: "Twilight, foggy",
    tags: ["islands", "landsort", "mist", "nordic"],
    prompt: compose(`\
SCENE: Dusk settling over the southernmost point of the Stockholm archipelago. \
The historic Landsort lighthouse — Sweden's oldest still-operating lighthouse, \
built in 1689 — stands on its rocky island of Öja, its distinctive white tower \
emitting a rotating beam that cuts through a low-hanging violet mist. Each \
sweep of the beam illuminates the mist in a cone of soft lavender light before \
fading. The rugged, windswept rocks of Landsort's southern tip frame the shot \
in the foreground. The open Baltic Sea stretches beyond, its surface glassy \
and reflecting the lighthouse beam as a shimmering purple stripe. The cluster \
of red wooden pilot houses at the base of the lighthouse adds warm accent.
CAMERA: Slow dolly forward across the open water, approaching Landsort island \
over 8 seconds.
FOCUS: Wide — foreground wave crests are soft; the lighthouse tower and its \
beam are the mid-ground subject; the open Baltic horizon is ultra-soft in fog.
KEY ELEMENT: The Landsort lighthouse as the archipelago's outermost sentinel \
— where Sweden meets the open sea, its historic beam sweeping through purple \
twilight.
ATMOSPHERE: Twilight with dense low fog rolling in from the Baltic. Visibility \
is limited, creating a mysterious, edge-of-the-world feeling.
COLOR EMPHASIS: Soft lavender (#a082e6) in the illuminated mist cone; deep \
purple (#2e008b) in the surrounding darkness; electric violet (#9b0aa5) on \
the water reflection of the beam; the white lighthouse tower catches purple \
ambient light; warm red from the pilot houses.
MOTION: Slow forward dolly; the lighthouse beam sweeps once fully across \
frame during the 8 seconds; mist drifts and swirls in the beam's wake; \
Baltic waves roll against the rocky shore.`),
  },
  {
    id: "archipelago-13",
    variationNumber: 13,
    dreamId: "archipelago",
    name: "Sunset Burst",
    camera: "Static",
    focus: "Wide",
    keyElement: "Sun touching horizon, sky exploding in purple/pink",
    atmosphere: "Sunset peak",
    tags: ["sunset", "sky", "horizon", "golden-hour"],
    prompt: compose(`\
SCENE: The exact moment the sun touches the horizon line. The sky detonates \
into bands of color — amber closest to the sun, then hot pink, electric \
violet, soft lavender, and finally deep purple overhead. Thin clouds catch \
these colors and streak them horizontally across the frame. The sea below is \
a dark mirror reflecting the explosion in slightly muted tones. A few island \
silhouettes punctuate the horizon.
CAMERA: Static — locked off on a tripod. The stillness contrasts with the \
sky's intensity. Very subtle exposure shift as the sun moves.
FOCUS: Wide — everything sharp, horizon to zenith.
KEY ELEMENT: The sun itself at the exact moment of horizon contact, with the \
sky as a full-spectrum showcase of the Electric Purple palette.
ATMOSPHERE: Peak sunset — maximum color saturation. Clear sky with scattered \
high cirrus clouds acting as color canvases.
COLOR EMPHASIS: Full palette in natural gradient — amber/gold at the center, \
pink (#eb5adc), electric violet (#9b0aa5), soft lavender (#a082e6), deep \
purple (#2e008b) radiating outward.
MOTION: Near-static — the sun sinks imperceptibly; clouds drift at altitude; \
the sea surface catches and releases colors in slow, breathing undulations.`),
  },
  {
    id: "archipelago-14",
    variationNumber: 14,
    dreamId: "archipelago",
    name: "Rope & Rail",
    camera: "Slow pan",
    focus: "Detail",
    keyElement: "Nautical rope coil on railing, bokeh water behind",
    atmosphere: "Golden hour",
    tags: ["boat", "deck", "calm", "nature"],
    prompt: compose(`\
SCENE: Close-up of a coil of thick nautical rope resting on a brass rail at \
the side of the boat. The rope's hemp fibers catch warm golden-hour light, \
revealing texture and subtle purple shadow between the coils. Behind the \
railing, the archipelago water is a field of purple and gold bokeh circles. \
The brass rail has a warm amber patina with violet reflections from the sky.
CAMERA: Slow pan from the rope coil to the right, gradually shifting focus \
from the rope to the water beyond the railing.
FOCUS: Detail — shallow depth of field. The rope starts sharp, then focus \
racks to the water bokeh, then back.
KEY ELEMENT: The tactile materiality of the rope — hemp, brass, wood — \
juxtaposed with the ethereal purple bokeh of the sea.
ATMOSPHERE: Golden hour, calm. Warm sidelight from the left paints the rope \
in amber while the shadows between coils are deep violet.
COLOR EMPHASIS: Warm amber on rope fibers; deep purple (#2e008b) shadows; \
soft lavender (#a082e6) and pink (#eb5adc) bokeh circles on the water; brass \
rail reflects electric violet (#9b0aa5) from the sky.
MOTION: Slow pan; the rope sways almost imperceptibly with the boat's gentle \
rocking; bokeh circles on the water shift and dance.`),
  },
  {
    id: "archipelago-15",
    variationNumber: 15,
    dreamId: "archipelago",
    name: "Sandhamn Passage",
    camera: "Slow dolly between",
    focus: "Wide",
    keyElement: "Boat entering the narrows at Sandhamn",
    atmosphere: "Golden hour, haze",
    tags: ["archipelago", "sandhamn", "water", "nature"],
    prompt: compose(`\
SCENE: The boat enters the iconic narrow passage approaching Sandhamn — the \
legendary sailing destination in the outer Stockholm archipelago. The camera \
is positioned at the bow, looking forward through the gap between Sandön and \
the neighboring island. The distinctive yellow and red wooden houses of \
Sandhamn village are visible at the far end of the strait, their facades \
catching the golden-hour light. The islands rise on either side with \
weathered granite cliffs and wind-shaped pines silhouetted against the \
purple-gold sky. The water in the strait is calm and deeply colored — almost \
black-purple in the cliff shadows, brightening to violet where the sky light \
reaches it. Classic wooden sailing yachts are moored along the Sandhamn \
waterfront.
CAMERA: Slow dolly forward, as if riding the bow of the boat through the \
narrows into Sandhamn. The village slowly reveals itself as the boat progresses.
FOCUS: Wide — sharp cliff faces on either side framing the village ahead.
KEY ELEMENT: Sandhamn as the archipelago's most celebrated destination — its \
colorful wooden village emerging from between the dark rock walls like a \
hidden jewel.
ATMOSPHERE: Golden hour with atmospheric haze diffusing the light around the \
village. The warm light on the old wooden facades contrasts with the purple \
shadows of the narrows.
COLOR EMPHASIS: Deep purple (#2e008b) and near-black on the cliff faces; \
electric violet (#9b0aa5) on the water surface; warm gold and amber on the \
Sandhamn village facades; soft lavender (#a082e6) haze around the village; \
the classic sailing boats' white hulls catch pink (#eb5adc) light.
MOTION: Forward dolly through the narrows; water ripples reflect off the \
cliff walls; moored boats rock gently; the village grows larger and more \
detailed as the boat approaches.`),
  },
  {
    id: "archipelago-16",
    variationNumber: 16,
    dreamId: "archipelago",
    name: "Glass Surface",
    camera: "Low-angle skim",
    focus: "Detail",
    keyElement: "Glassy still water reflecting purple sky perfectly",
    atmosphere: "Blue hour, dead calm",
    tags: ["reflections", "water", "calm", "serenity"],
    prompt: compose(`\
SCENE: The camera skims just millimeters above a perfectly still water surface \
that mirrors the blue-hour sky so faithfully that it is nearly impossible to \
tell where water ends and sky begins. The reflected sky is a deep gradient \
from electric violet at the horizon to deep purple overhead. A single island \
silhouette appears both above and below the waterline in perfect symmetry. \
The only disruption is one tiny ripple that slowly expands from where a \
raindrop fell.
CAMERA: Low-angle skim — the lens is nearly touching the water surface, \
drifting forward with infinite slowness.
FOCUS: Detail — the single expanding ripple is sharp; the reflected sky and \
island are slightly soft.
KEY ELEMENT: The perfect mirror symmetry between water and sky, disrupted by \
one poetic ripple.
ATMOSPHERE: Blue hour, dead calm. No wind, no waves. The world feels held in \
suspension.
COLOR EMPHASIS: Electric violet (#9b0aa5) at the mirror horizon; deep purple \
(#2e008b) in both the real and reflected sky; soft lavender (#a082e6) in the \
ripple's interference pattern; electric blue (#3750dc) at the zenith and its \
reflection.
MOTION: Near-static — the single ripple expands in concentric rings; the \
camera drifts almost imperceptibly forward; the island reflection shimmers.`),
  },
  {
    id: "archipelago-17",
    variationNumber: 17,
    dreamId: "archipelago",
    name: "Cloud Cathedral",
    camera: "Tilt up from water",
    focus: "Wide",
    keyElement: "Dramatic cloud formations lit purple from below",
    atmosphere: "Sunset, dramatic clouds",
    tags: ["sky", "sunset", "nature", "horizon"],
    prompt: compose(`\
SCENE: Starting on the dark purple water surface, the camera tilts upward to \
reveal a cathedral of cumulonimbus clouds rising into the upper atmosphere. \
The clouds are lit from below by the setting sun — their bases glow amber and \
electric violet, while their towering tops darken to deep indigo-purple. \
Light shafts break through gaps between clouds, striking the water as \
lavender god-rays. A thin strip of orange horizon is visible between the \
water and the cloud base.
CAMERA: Slow tilt up — water to sky, taking the full 8 seconds to reveal \
the clouds' full height.
FOCUS: Wide — deep focus from the water surface through to the cloud tops.
KEY ELEMENT: The monumental scale of the cloud formations lit in the Electric \
Purple palette, creating a natural cathedral.
ATMOSPHERE: Sunset with dramatic cloud cover. Volumetric light beams. The air \
feels heavy with potential.
COLOR EMPHASIS: Deep purple (#2e008b) in the cloud tops and water; electric \
violet (#9b0aa5) on the cloud bases; soft lavender (#a082e6) in the god-rays; \
pink (#eb5adc) on the cloud edges catching direct sunset light.
MOTION: Slow tilt upward; clouds billow and evolve in slow motion; god-rays \
shift and breathe; the water surface catches falling light patches.`),
  },
  {
    id: "archipelago-18",
    variationNumber: 18,
    dreamId: "archipelago",
    name: "Wake Symmetry",
    camera: "Following drone",
    focus: "Overhead",
    keyElement: "Perfect V-shaped wake stretching behind vessel",
    atmosphere: "Golden hour",
    tags: ["wake", "boat", "water", "archipelago"],
    prompt: compose(`\
SCENE: Drone view following directly above and behind a cruise boat. The \
vessel creates a perfect symmetrical V-wake that stretches to the bottom of \
frame and beyond. The wake's white foam lines create a strong geometric \
pattern against the deep violet water. Golden-hour light catches the wake's \
outer edges in amber while the inner water between the V is sheltered and \
darker purple. Tiny islands are scattered across the seascape ahead.
CAMERA: Following drone at about 50m altitude, locked onto the boat, \
maintaining the V-wake centered in frame.
FOCUS: Overhead — the geometric wake pattern is the composition.
KEY ELEMENT: The mathematical perfection of the V-wake as a graphic element \
drawn in white on a purple canvas.
ATMOSPHERE: Golden hour — directional light from the left creates a warm/cool \
split on the wake: left side amber-lit, right side in purple shadow.
COLOR EMPHASIS: Deep purple (#2e008b) water; white wake foam with lavender \
(#a082e6) tint in the shadow side; electric violet (#9b0aa5) in the wider \
water; golden amber on the sun-facing wake edge; islands as dark spots.
MOTION: Steady forward following; the wake continuously unfurls; small boats \
or markers pass below in parallax; water texture ripples.`),
  },
  {
    id: "archipelago-19",
    variationNumber: 19,
    dreamId: "archipelago",
    name: "Möja Midnight Sun",
    camera: "Static wide",
    focus: "Ultra-wide",
    keyElement: "Midnight sun over the outer archipelago at Möja",
    atmosphere: "Nordic summer midnight",
    tags: ["nordic", "twilight", "moja", "serenity"],
    prompt: compose(`\
SCENE: The Nordic midnight sun hangs just above the horizon, refusing to set, \
viewed from the eastern shore of Möja — one of the largest and most beloved \
islands in the outer Stockholm archipelago. The distinctive Möja landscape is \
visible: the rocky eastern shoreline with its smooth, glacier-polished granite \
slabs, a few weathered red fishing huts (sjöbodar) along the shore, and the \
sparse pine forest silhouetted behind them. The sky is a perpetual twilight \
gradient — amber at the horizon, cycling through electric violet to deep \
purple overhead. The entire 360-degree sky glows. The open Baltic water \
beyond Möja reflects this wrap-around light, creating an otherworldly scene \
where everything is suffused in purple-gold. Fishing nets and lobster pots \
on the shore add texture.
CAMERA: Static ultra-wide. The horizon bisects the frame perfectly. No \
movement — the scene's strangeness speaks for itself.
FOCUS: Ultra-wide — the entire panoramic scene from Möja's shore to the \
distant horizon is in focus.
KEY ELEMENT: The midnight sun viewed from Möja's raw outer-archipelago \
landscape — where the comfort of the village meets the wildness of the \
open Baltic.
ATMOSPHERE: Nordic midnight sun — a quality of light that exists nowhere else. \
Neither day nor night. Temperature neutral, tending purple.
COLOR EMPHASIS: Equal balance of amber and purple — electric violet (#9b0aa5) \
in the mid-sky, deep purple (#2e008b) at zenith, soft lavender (#a082e6) in \
the water reflections, gold at both horizons; warm red on the fishing huts.
MOTION: Extremely minimal — the sun barely moves along the horizon; water \
shimmers against the smooth granite; a flag on a fishing hut barely stirs.`),
  },
  {
    id: "archipelago-20",
    variationNumber: 20,
    dreamId: "archipelago",
    name: "Anchor Drop",
    camera: "Slow downward tilt",
    focus: "Medium",
    keyElement: "Chain dropping into deep purple water, bubbles rising",
    atmosphere: "Dusk",
    tags: ["water", "boat", "sea", "calm"],
    prompt: compose(`\
SCENE: The anchor chain runs taut from the boat's bow downward into deep \
purple water. The camera follows it, tilting slowly downward. Where the chain \
enters the water, a column of silver-white bubbles rises, backlit by the \
last purple-amber light from the sky. The chain disappears into the depths, \
which darken from electric violet to pure indigo-black. The underwater \
portion shows the chain slightly refracted and wavering.
CAMERA: Slow downward tilt following the chain from deck level into the water. \
The transition from above-water to below-water happens at roughly the 4-second \
mark.
FOCUS: Medium — the chain is the sharp subject; the water surface and the \
depths beyond are soft.
KEY ELEMENT: The chain as a connector between the world above (amber-lit) and \
the world below (deep purple) — a vertical journey through the palette.
ATMOSPHERE: Dusk — the last light catches the chain and bubbles while the \
water below is already immersed in deep purple darkness.
COLOR EMPHASIS: Amber on the dry chain above water; deep purple (#2e008b) in \
the depths; electric violet (#9b0aa5) at the waterline; soft lavender \
(#a082e6) in the bubbles; light blue (#7da0eb) refracted through the water \
surface.
MOTION: The chain runs slowly downward; bubbles rise and wobble; the water \
surface undulates from above, then closes over the camera's perspective.`),
  },
  {
    id: "archipelago-21",
    variationNumber: 21,
    dreamId: "archipelago",
    name: "Grinda Birch Shore",
    camera: "Dolly past foreground",
    focus: "Layered",
    keyElement: "Grinda island birch trees framing the cruise boat",
    atmosphere: "Golden hour",
    tags: ["islands", "grinda", "nordic", "boat"],
    prompt: compose(`\
SCENE: The camera moves past a cluster of white birch trees on Grinda island \
— one of the most popular nature islands in the inner archipelago, known for \
its lush deciduous forests. The pale birch trunks and trembling green-gold \
leaves act as natural frames for the scene beyond: a purple sea stretching \
toward the distant silhouettes of Viggsö and Svartsö islands, with a cruise \
boat passing in the mid-ground. Grinda's iconic meadow landscape is hinted \
at through the trees — wild flowers at the base of the birches. The birch \
bark catches warm golden light while the spaces between the trunks reveal \
the deep violet water. Lichen-covered granite rocks typical of Grinda's \
shoreline anchor the foreground.
CAMERA: Slow dolly laterally, passing behind and between birch trunks in a \
smooth parallax. The boat appears and disappears between the trunks.
FOCUS: Layered — foreground birch trunks are sharp, mid-ground water is in \
focus, distant island silhouettes are slightly soft.
KEY ELEMENT: Grinda's lush birch forest as a natural cinema screen — the \
white trunks framing slices of the purple seascape in a composition unique \
to this island's character.
ATMOSPHERE: Golden hour — warm sidelight on the birch bark, purple shadow \
between the trees. The combination is iconic Swedish summer.
COLOR EMPHASIS: White-silver birch bark catching gold and pink (#eb5adc) \
light; deep purple (#2e008b) sea visible between trunks; soft lavender \
(#a082e6) sky; electric violet (#9b0aa5) in the tree shadows; meadow \
wildflowers adding tiny purple and yellow accents at the base.
MOTION: Lateral dolly creating parallax between tree layers; birch leaves \
tremble in a light breeze; the distant boat glides smoothly; a butterfly \
crosses the foreground meadow flowers.`),
  },
  {
    id: "archipelago-22",
    variationNumber: 22,
    dreamId: "archipelago",
    name: "Foam Trail",
    camera: "Tracking close",
    focus: "Detail",
    keyElement: "Churning white foam contrasting deep violet water",
    atmosphere: "Sunset, backlit",
    tags: ["waves", "water", "boat", "wake"],
    prompt: compose(`\
SCENE: Extreme close tracking shot of the boat's wake foam. The churning \
white-lavender foam contrasts sharply with the deep violet water surrounding \
it. Sunset backlight penetrates the thinner foam sections, turning them \
translucent pink and gold. Air bubbles trapped in the foam catch individual \
specular highlights. As the foam dissipates at the edges, it transitions \
from white to lavender to deep purple water in a beautiful gradient.
CAMERA: Tracking close alongside the wake, matching the boat's speed, \
focused on the foam texture roughly 1 meter from the hull.
FOCUS: Detail — the foam texture is razor-sharp; the water beyond falls to \
soft purple bokeh.
KEY ELEMENT: The ephemeral beauty of sea foam — its white chaos against the \
controlled deep purple of the water.
ATMOSPHERE: Sunset backlight — every bubble and foam strand is edge-lit in \
gold and violet.
COLOR EMPHASIS: White foam with lavender (#a082e6) tint in shadows; deep \
purple (#2e008b) water; pink (#eb5adc) and gold in backlit translucent foam; \
electric violet (#9b0aa5) where foam dissolves into water.
MOTION: Continuous tracking; the foam churns and evolves organically; bubbles \
pop and reform; the edge between foam and water is constantly negotiated.`),
  },
  {
    id: "archipelago-23",
    variationNumber: 23,
    dreamId: "archipelago",
    name: "Dalarö Panorama",
    camera: "Slow 180-degree pan",
    focus: "Ultra-wide",
    keyElement: "Panoramic view from Dalarö across the southern archipelago",
    atmosphere: "Blue hour",
    tags: ["archipelago", "dalaro", "twilight", "nature"],
    prompt: compose(`\
SCENE: A sweeping 180-degree panoramic view from the historic harbor of \
Dalarö — the southern gateway to the Stockholm archipelago since the 17th \
century. The camera slowly pans from west (where the last amber glow clings \
to the horizon above the Dalarö skans fortress ruins) through south (the \
open water toward Ornö and Utö, pure electric violet sky) to east (where the \
sky deepens to indigo above the small islands of the Dalarö archipelago). \
The distinctive Dalarö waterfront is visible in the pan — traditional red \
and yellow wooden houses along the harbor, historic steamboat pier, and \
classic archipelago boats moored in a row. Dozens of islands are scattered \
across the southern view at varying distances, each a different shade of \
purple silhouette.
CAMERA: Slow 180-degree pan, smooth and steady, completing the sweep in 8 \
seconds. Eye-level from the Dalarö harbor pier.
FOCUS: Ultra-wide — maximizing the panoramic depth from the harbor foreground \
to the distant island layers.
KEY ELEMENT: Dalarö as the meeting point between historic maritime culture \
and wild archipelago nature — its charming harbor opening onto the vast \
purple seascape.
ATMOSPHERE: Blue hour — the light is even, cool, and deeply violet. No hard \
shadows. The air is crystalline.
COLOR EMPHASIS: Full purple gradient — from residual amber/gold in the west, \
through electric violet (#9b0aa5), to deep purple (#2e008b) in the east. \
Warm red and yellow Dalarö facades add color contrast; islands layer in \
progressively lighter purple — dark indigo nearest, soft lavender (#a082e6) \
farthest.
MOTION: Continuous smooth pan; harbor boat lights blink; water shimmers \
differently at each compass point; the Swedish flag on the steamboat pier \
sways gently.`),
  },
  {
    id: "archipelago-24",
    variationNumber: 24,
    dreamId: "archipelago",
    name: "Mast & Stars",
    camera: "Tilt from deck to sky",
    focus: "Vertical",
    keyElement: "Mast of boat leading eye to first stars in purple sky",
    atmosphere: "Night onset",
    tags: ["boat", "sky", "nordic", "serenity"],
    prompt: compose(`\
SCENE: Starting on the warm-lit wooden deck, the camera tilts slowly upward \
along the boat's mast. The mast is a dark vertical line that bisects the \
frame, its rigging lines radiating outward like a spider's web. As the \
camera rises, it passes through the deck-light zone (warm amber) into the \
middle zone (electric violet sky) and finally into the upper sky (deep purple \
with the first visible stars). The mast's peak has a small amber navigation \
light that acts as a warm counterpoint to the cold stars.
CAMERA: Slow tilt upward, following the mast from deck to sky tip over 8 \
seconds. The mast stays centered throughout.
FOCUS: Vertical composition — the bottom is detail (deck texture), the middle \
is medium (rigging), the top is wide (open sky with stars).
KEY ELEMENT: The mast as a vertical axis connecting earth (deck) to cosmos \
(stars), transitioning through the full Electric Purple palette.
ATMOSPHERE: Night onset — the deck retains warm practical light while the sky \
has fully shifted to purple. Stars are just appearing.
COLOR EMPHASIS: Warm amber at the deck base; electric violet (#9b0aa5) in the \
mid-sky; deep purple (#2e008b) at the zenith; soft lavender (#a082e6) in the \
star glow; the navigation light is a warm amber jewel.
MOTION: Slow upward tilt; the rigging lines sway gently; stars flicker; the \
navigation light glows steadily; the mast itself sways with the boat's rock.`),
  },
  {
    id: "archipelago-25",
    variationNumber: 25,
    dreamId: "archipelago",
    name: "Last Light over Utö",
    camera: "Slow zoom out",
    focus: "Wide",
    keyElement: "Sun setting behind Utö island's distinctive silhouette",
    atmosphere: "Sunset end",
    tags: ["sunset", "uto", "silhouette", "golden-hour"],
    prompt: compose(`\
SCENE: The very last sliver of the sun disappears behind the silhouette of \
Utö — the southernmost inhabited island in the Stockholm archipelago, \
recognizable by the profile of its historic windmill and the old mining \
village skyline. For a brief moment, the windmill and the island's ridge \
are rimmed in blinding gold — a thin line of fire separating the dark \
landmass from the purple sky. The sky above Utö glows in a diminishing \
aureole of amber that fades rapidly through pink into electric violet and \
finally deep purple. The water catches the last reflection — a single golden \
path that narrows and darkens as the sun vanishes. The small harbor lights \
of Gruvbryggan (Utö's main pier) twinkle at the base of the silhouette.
CAMERA: Slow zoom out — starting tight on the sun-rimmed windmill silhouette, \
widening to reveal Utö's full profile against the purple sky.
FOCUS: Wide — the rim-light edge is sharp; the expanding view stays in focus \
to communicate the vastness of the moment.
KEY ELEMENT: Utö's iconic windmill silhouette as the last point where sunlight \
touches the archipelago — a recognizable landmark marking the end of the day \
and the southernmost reach of the island chain.
ATMOSPHERE: Sunset end — the transition point between golden hour and blue \
hour. The light is fading rapidly and the purple is winning.
COLOR EMPHASIS: Intense gold/amber rim on the windmill and island edge; pink \
(#eb5adc) aureole closest to the sun; electric violet (#9b0aa5) expanding \
outward; deep purple (#2e008b) overtaking the sky; soft lavender (#a082e6) \
in the fading water reflection; warm harbor lights as tiny amber points.
MOTION: Slow zoom out; the golden rim thins and extinguishes; the purple \
expands to fill the frame; the water reflection narrows to a point; harbor \
lights grow more visible as the natural light fades.`),
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
    name: "Stage Pulse",
    camera: "Slow dolly forward",
    focus: "Wide",
    keyElement: "Stage lit in deep purple/violet with haze",
    atmosphere: "Night, haze",
    tags: ["stage", "lights", "concert", "energy"],
    prompt: compose(`\
SCENE: A massive outdoor concert stage at Gröna Lund, seen from the back of \
the crowd. The stage is a wall of deep purple and electric violet light, \
pulsing rhythmically with a bass-heavy beat. Theatrical haze fills the air, \
catching the light beams and turning them into solid cones of violet. The \
stage's LED screens display abstract purple wave patterns. Silhouettes of the \
crowd's raised hands fill the lower third of frame.
CAMERA: Slow dolly forward through the crowd — as if pushing toward the stage. \
The stage grows larger and more intense over 8 seconds.
FOCUS: Wide — the stage is the subject, the crowd silhouettes frame it.
KEY ELEMENT: The stage as a monolithic source of purple light, radiating \
energy outward through the haze.
ATMOSPHERE: Night with heavy theatrical haze. The air is thick with light \
beams made visible by the fog. Every breath catches violet.
COLOR EMPHASIS: Electric violet (#9b0aa5) as the dominant stage wash; deep \
purple (#2e008b) in the sky and shadows; pink (#eb5adc) accent lights; soft \
lavender (#a082e6) in the haze; the crowd is near-black silhouette.
MOTION: Forward dolly; haze drifts and swirls; light beams pulse with the \
rhythm; crowd hands sway; stage LEDs animate.`),
  },
  {
    id: "grona-lund-02",
    variationNumber: 2,
    dreamId: "grona-lund",
    name: "Neon Ferris & Gamla Stan",
    camera: "Orbit around",
    focus: "Wide",
    keyElement: "Ferris wheel with Gamla Stan skyline visible behind",
    atmosphere: "Night, clear",
    tags: ["ferris-wheel", "neon", "djurgarden", "gamla-stan"],
    prompt: compose(`\
SCENE: The iconic Gröna Lund ferris wheel dominates the frame, its structure \
outlined in LED lights cycling through the Electric Purple palette — from \
deep purple at the base through electric violet on the spokes to soft \
lavender at the top. Each gondola has a pink accent light. As the camera \
orbits, the Stockholm skyline reveals itself behind the wheel — the \
unmistakable silhouette of Gamla Stan (the Old Town) with its church spires \
and the Royal Palace is visible across the dark harbor water, bathed in \
warm amber light that contrasts with the purple night sky. The Djurgården \
waterfront below glitters with the park's reflected neon.
CAMERA: Slow orbit — the camera circles the ferris wheel about 30 degrees \
over 8 seconds, shifting the Gamla Stan skyline from hidden to revealed \
behind the wheel.
FOCUS: Wide — the full ferris wheel in frame with Gamla Stan's silhouette \
and harbor reflections.
KEY ELEMENT: The ferris wheel as a giant purple mandala with Stockholm's \
most historic quarter visible through its spokes — modern spectacle framing \
centuries of history.
ATMOSPHERE: Night, clear sky. The ferris wheel is the brightest object in \
frame, with Gamla Stan's warm glow as the atmospheric backdrop.
COLOR EMPHASIS: Electric violet (#9b0aa5) on the wheel structure; deep purple \
(#2e008b) sky; pink (#eb5adc) gondola accents; warm amber on Gamla Stan's \
facades; soft lavender (#a082e6) light spill; electric blue (#3750dc) harbor \
water reflections bridging Djurgården to the Old Town.
MOTION: The ferris wheel rotates slowly; gondolas sway; the orbit reveals \
Gamla Stan progressively; LED lights animate in sequence; harbor reflections \
of both park and Old Town shimmer.`),
  },
  {
    id: "grona-lund-03",
    variationNumber: 3,
    dreamId: "grona-lund",
    name: "Bass Drop",
    camera: "Static with subtle shake",
    focus: "Medium",
    keyElement: "Speaker stack vibrating, air distortion visible",
    atmosphere: "Night, intense",
    tags: ["bass", "speakers", "vibration", "energy"],
    prompt: compose(`\
SCENE: A massive wall of black speaker stacks at the side of the stage. The \
camera faces them straight-on, close enough to feel the vibration. The \
speaker cones pulse visibly with each bass hit. The air in front of the \
speakers distorts like heat haze — visible compression waves. Purple and \
violet stage light bathes the speaker cabinets from behind, creating a \
dramatic rim-light on their edges. A thin layer of mist at the base catches \
the light.
CAMERA: Static with subtle physical shake synchronized to the bass hits — the \
camera itself vibrates with the sound pressure.
FOCUS: Medium — the speaker wall fills the frame; individual cone movements \
are visible.
KEY ELEMENT: The raw physical power of sound made visible — vibrating cones, \
air distortion, camera shake.
ATMOSPHERE: Night, intense. The bass is felt more than heard. The air itself \
seems to pulse purple.
COLOR EMPHASIS: Deep purple (#2e008b) on the speaker cabinets; electric violet \
(#9b0aa5) rim-light from behind; soft lavender (#a082e6) in the mist at the \
base; occasional pink (#eb5adc) flash from stage effects.
MOTION: Speaker cones pulse rhythmically; visible air compression waves; \
camera micro-shakes on each bass hit; mist at the base ripples with the \
pressure waves.`),
  },
  {
    id: "grona-lund-04",
    variationNumber: 4,
    dreamId: "grona-lund",
    name: "Laser Cathedral",
    camera: "Tilt up",
    focus: "Wide",
    keyElement: "Grid of purple/pink lasers cutting through fog",
    atmosphere: "Night, heavy fog",
    tags: ["lasers", "lights", "concert", "atmosphere"],
    prompt: compose(`\
SCENE: Looking upward from the crowd level as dozens of laser beams cut \
through dense fog above the stage. The lasers create a geometric grid — \
parallel lines, fans, and cones — in electric violet, pink, and soft \
lavender. Where the beams intersect, they create brighter nodes of light. \
The fog is thick enough to make each beam a solid line of light. Through the \
laser grid, the dark purple night sky is faintly visible.
CAMERA: Tilt up — starting from the crowd's raised hands, ascending through \
the laser grid to the open sky over 8 seconds.
FOCUS: Wide — the entire laser architecture is in view, creating a cathedral \
of light.
KEY ELEMENT: The geometric precision of laser beams contrasting with the \
organic movement of fog — order and chaos in purple light.
ATMOSPHERE: Night with very heavy theatrical fog. The lasers need the fog to \
exist visibly — they are painting on a canvas of mist.
COLOR EMPHASIS: Electric violet (#9b0aa5) primary lasers; pink (#eb5adc) \
accent lasers; soft lavender (#a082e6) where beams scatter in the fog; deep \
purple (#2e008b) in the negative space between beams.
MOTION: Lasers sweep slowly in synchronized patterns; fog drifts and curls \
around the beams; beam intersections pulse; the tilt reveals new layers of \
the laser architecture.`),
  },
  {
    id: "grona-lund-05",
    variationNumber: 5,
    dreamId: "grona-lund",
    name: "Confetti Rain",
    camera: "Slow-motion fall",
    focus: "Detail",
    keyElement: "Purple and violet confetti pieces falling through spotlights",
    atmosphere: "Night, celebratory",
    tags: ["confetti", "lights", "festival", "energy"],
    prompt: compose(`\
SCENE: Thousands of pieces of confetti in shades of purple, violet, lavender, \
and pink fall through the air in extreme slow motion. Each piece tumbles and \
rotates, catching spotlight beams from different angles — sometimes opaque \
and dark, sometimes translucent and glowing. The confetti is in sharp focus \
in the mid-ground while the background stage lights are soft purple bokeh \
circles. Occasional gold confetti pieces provide warm accent.
CAMERA: Slow-motion capture of the confetti fall, with a very slight \
downward drift matching the confetti's trajectory.
FOCUS: Detail — individual confetti pieces are readable; some are so close \
they're large abstract shapes passing through the foreground bokeh.
KEY ELEMENT: The confetti as individual carriers of the Electric Purple \
palette — each piece a tiny canvas.
ATMOSPHERE: Night, celebratory peak moment. The confetti cannon has just \
fired. The air is full of color.
COLOR EMPHASIS: Every piece is a different shade — deep purple (#2e008b), \
electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), with \
gold accents. The background bokeh is electric violet.
MOTION: Ultra-slow-motion tumble of confetti; each piece rotates and catches \
light at different angles; some pieces collide and redirect; spotlight beams \
illuminate different zones.`),
  },
  {
    id: "grona-lund-06",
    variationNumber: 6,
    dreamId: "grona-lund",
    name: "Crowd Silhouettes",
    camera: "Static wide, backlit",
    focus: "Wide",
    keyElement: "Anonymous crowd silhouettes against purple stage wash",
    atmosphere: "Night",
    tags: ["crowd", "silhouette", "concert", "atmosphere"],
    prompt: compose(`\
SCENE: A wide shot of the concert crowd in complete silhouette. The stage \
behind them is a solid wall of purple-violet light with horizontal bands of \
intensity — brightest at center, darkening to the edges. The crowd forms a \
jagged horizon line of dark shapes — raised hands, phones, shoulders, heads \
— all anonymous and unidentifiable. Occasional wisps of haze drift between \
the camera and the crowd, catching purple light.
CAMERA: Static wide — locked off. The power of the image comes from the \
graphic simplicity of black silhouettes against purple.
FOCUS: Wide — the silhouette edge is crisp where dark meets light.
KEY ELEMENT: The crowd as a collective abstract shape — a mountain range of \
human energy, defined only by its outline against the purple light.
ATMOSPHERE: Night — the only light source is the stage. The relationship \
between the dark crowd mass and the purple light is the entire image.
COLOR EMPHASIS: The stage wash blends electric violet (#9b0aa5) at center \
with deep purple (#2e008b) at edges; the crowd is pure dark (#34303d) \
silhouette; stray haze catches soft lavender (#a082e6); phone screens are \
tiny dots of light blue (#7da0eb).
MOTION: Minimal — hands sway slowly; occasional phone screens light up and \
dim; haze drifts languidly across the frame; the stage light breathes \
slightly with the music.`),
  },
  {
    id: "grona-lund-07",
    variationNumber: 7,
    dreamId: "grona-lund",
    name: "Guitar Strings",
    camera: "Macro drift",
    focus: "Extreme detail",
    keyElement: "Guitar strings vibrating with purple lens flare",
    atmosphere: "Night, intimate",
    tags: ["music", "vibration", "concert", "rhythm"],
    prompt: compose(`\
SCENE: Extreme macro of an electric guitar's strings, seen from the side. The \
strings vibrate with visible standing-wave patterns — each string a blur of \
harmonic motion. Purple and violet stage light catches on the chrome frets \
and wound string surfaces. A lens flare from a distant spotlight bleeds \
across the frame in soft lavender and pink. The guitar body beyond the \
strings is dark wood catching purple rim light.
CAMERA: Macro drift — slowly panning from the low strings to the high \
strings over 8 seconds, maintaining extreme close focus.
FOCUS: Extreme detail — the strings' vibration blur is the subject; the \
guitar body beyond is soft bokeh.
KEY ELEMENT: Sound made visible — the strings' vibration patterns are a \
physical manifestation of music.
ATMOSPHERE: Night, intimate — this is a private view of the instrument. The \
macro perspective makes the guitar a landscape.
COLOR EMPHASIS: Chrome and silver strings catching electric violet (#9b0aa5) \
light; deep purple (#2e008b) in the shadows between strings; soft lavender \
(#a082e6) and pink (#eb5adc) in the lens flare; warm amber on the wood body.
MOTION: The strings vibrate at different frequencies — visible standing waves; \
the camera drifts slowly across them; lens flare shifts with the camera \
position; light reflections dance on the chrome frets.`),
  },
  {
    id: "grona-lund-08",
    variationNumber: 8,
    dreamId: "grona-lund",
    name: "Spotlight Sweep",
    camera: "Tracking the beam",
    focus: "Wide",
    keyElement: "Single spotlight beam sweeping through purple haze",
    atmosphere: "Night, haze",
    tags: ["lights", "stage", "atmosphere", "concert"],
    prompt: compose(`\
SCENE: A single powerful spotlight beam sweeps slowly across the venue, \
cutting a solid cone of lavender-white light through the purple haze. \
Everything the beam touches is momentarily illuminated — truss structures, \
rigging cables, the upper reaches of the crowd — before falling back into \
purple darkness. The beam's edges are soft and feathered by the haze. Where \
it hits the haze densely, it blooms into a soft, volumetric lavender cloud.
CAMERA: Tracking the beam — the camera follows the spotlight's sweep, keeping \
the brightest point centered in frame as it moves across the venue.
FOCUS: Wide — the beam and its interaction with the architecture and haze.
KEY ELEMENT: The spotlight beam as a physical object — a solid bar of light \
that reveals and conceals as it sweeps.
ATMOSPHERE: Night with medium haze. The beam is only visible because of the \
particulates in the air. The surrounding darkness is deep purple.
COLOR EMPHASIS: White-lavender (#a082e6) in the beam core; electric violet \
(#9b0aa5) at the beam edges where it diffuses; deep purple (#2e008b) in the \
negative space; momentary pink (#eb5adc) where the beam hits colored surfaces.
MOTION: The beam sweeps in a smooth arc; haze swirls in its wake; the camera \
tracks with the beam; particles in the air sparkle as they pass through the \
beam.`),
  },
  {
    id: "grona-lund-09",
    variationNumber: 9,
    dreamId: "grona-lund",
    name: "Drum Hit",
    camera: "Slow-motion",
    focus: "Detail",
    keyElement: "Drumstick impact, cymbal shimmer in purple light",
    atmosphere: "Night, dynamic",
    tags: ["rhythm", "music", "vibration", "energy"],
    prompt: compose(`\
SCENE: Ultra-slow-motion capture of a drumstick striking a cymbal. The impact \
sends a visible shockwave across the cymbal's surface — concentric ripples \
propagating outward from the strike point. Tiny droplets of condensation \
fly off the cymbal in a crown pattern. Purple and violet stage light reflects \
off the cymbal's bronze surface in shifting, liquid patterns. The stick \
rebounds in a graceful arc, trailing a slight motion blur.
CAMERA: Slow-motion, positioned at cymbal level, capturing the impact from a \
45-degree angle.
FOCUS: Detail — the strike point is razor-sharp; the cymbal edges blur with \
motion; the background is pure purple bokeh.
KEY ELEMENT: The violence and beauty of percussion — a single strike as a \
universe of physics and light.
ATMOSPHERE: Night, dynamic. Stage lighting from above and behind catches the \
cymbal as a reflective surface for the purple palette.
COLOR EMPHASIS: Bronze cymbal reflecting electric violet (#9b0aa5) and amber; \
deep purple (#2e008b) background; soft lavender (#a082e6) in the flying \
droplets; pink (#eb5adc) reflected in the concentric waves.
MOTION: Ultra-slow-motion: the stick's impact, the wave propagation, the \
droplet crown, the rebound arc — all happening in dreamy time.`),
  },
  {
    id: "grona-lund-10",
    variationNumber: 10,
    dreamId: "grona-lund",
    name: "Djurgården Skyline",
    camera: "Crane rising",
    focus: "Ultra-wide",
    keyElement: "Gröna Lund with Djurgården, Stadshuset, and Strandvägen visible",
    atmosphere: "Night, clear",
    tags: ["amusement-park", "djurgarden", "stadshuset", "strandvagen"],
    prompt: compose(`\
SCENE: The camera rises on a crane above Gröna Lund on Djurgården island, \
revealing the full park skyline and the sweeping Stockholm panorama beyond. \
Roller coaster tracks, the ferris wheel, swing rides, and tower rides are \
all outlined in colored lights. As the crane ascends, Stockholm's most iconic \
landmarks reveal themselves: to the left, the grand boulevard of Strandvägen \
with its Art Nouveau facades and moored vintage boats; across the water, the \
distinctive silhouette of Stockholm City Hall (Stadshuset) with its three \
golden crowns tower; further left, the spires of Gamla Stan; and the Nordiska \
Museet's Renaissance castle silhouette right next to the park. The harbor \
water reflects the entire spectacle in shimmering purple.
CAMERA: Crane rising — starting at crowd level, ascending to reveal the full \
Djurgården-to-city panorama over 8 seconds. Slow, majestic ascent.
FOCUS: Ultra-wide — the entire park, harbor, and Stockholm skyline in one \
frame.
KEY ELEMENT: Gröna Lund's position on Djurgården revealed as central to \
Stockholm's most beautiful waterfront — the park as the electric heart of \
the city's cultural island.
ATMOSPHERE: Night, clear. The sky has that deep electric purple that clean \
Nordic air produces after dark, with Stockholm's light pollution creating \
a lavender dome over the city.
COLOR EMPHASIS: Electric violet (#9b0aa5) LED lights on rides; deep purple \
(#2e008b) night sky; pink (#eb5adc) neon accents; Strandvägen and Stadshuset \
in warm amber; soft lavender (#a082e6) light pollution dome; electric blue \
(#3750dc) harbor reflections connecting park to city.
MOTION: The crane rises steadily; ride lights animate; the ferris wheel \
rotates; the expanding view reveals more of Stockholm's waterfront; harbor \
reflections dance.`),
  },
  {
    id: "grona-lund-11",
    variationNumber: 11,
    dreamId: "grona-lund",
    name: "Strobe Freeze",
    camera: "Strobe-cut style",
    focus: "Medium",
    keyElement: "Frozen moments between strobe flashes, purple dominant",
    atmosphere: "Night, strobe",
    tags: ["strobe", "lights", "energy", "electric"],
    prompt: compose(`\
SCENE: The stage strobes fire in rapid succession, and the camera captures \
the moments between flashes — frozen tableaux of the scene lit only by the \
persistent purple wash. Each strobe flash reveals a slightly different \
composition: haze has moved, light beams have shifted, confetti has fallen \
further. Between flashes, the scene is a deep purple low-light painting \
where only the brightest elements (LED panels, reflective surfaces) are \
visible.
CAMERA: Strobe-cut style — simulating the visual effect of being in a strobe \
environment. Not actual jump cuts, but rhythmic brightness variations over \
the continuous shot.
FOCUS: Medium — the stage area is framed with some crowd foreground.
KEY ELEMENT: The strobe's ability to freeze time — each flash a purple-lit \
still life before time resumes in darkness.
ATMOSPHERE: Night, intense strobe. The visual rhythm alternates between \
bright purple reveals and deep purple near-darkness.
COLOR EMPHASIS: Electric violet (#9b0aa5) in the strobe flashes; deep purple \
(#2e008b) in the between-moments; soft lavender (#a082e6) persistent glow; \
white strobe flashes tinted purple.
MOTION: Rhythmic — the scene appears to stutter between frozen moments; haze \
moves in jerky reveals; the effect is hypnotic and dream-like, fitting the \
"Electric Dreams" concept.`),
  },
  {
    id: "grona-lund-12",
    variationNumber: 12,
    dreamId: "grona-lund",
    name: "Mic Stand",
    camera: "Slow orbit",
    focus: "Detail",
    keyElement: "Chrome mic stand reflecting colorful stage lights",
    atmosphere: "Night",
    tags: ["stage", "concert", "music", "lights"],
    prompt: compose(`\
SCENE: A chrome microphone on a stand, center stage, in the brief moment \
between acts or during an instrumental break. The mic and stand are surrounded \
by empty stage space, but the chrome surface acts as a 360-degree mirror — \
reflecting the colored lights, the crowd, the sky, all warped into abstract \
purple and violet streaks. Stage lights overhead create a pool of lavender \
light around the base. A thin cable snakes away into the darkness.
CAMERA: Slow orbit around the mic stand, keeping it centered. The reflections \
on the chrome surface shift continuously with the orbit.
FOCUS: Detail — the mic and the top 30cm of the stand are sharp; the stage \
floor and background are soft.
KEY ELEMENT: The mic stand as a reflective sculpture — a mirror that \
concentrates and distorts the entire concert environment into abstract purple \
streaks.
ATMOSPHERE: Night — the stage is lit from above and from the sides. The mic \
stand is the lone sentinel in a pool of light.
COLOR EMPHASIS: Chrome reflects every color but predominantly electric violet \
(#9b0aa5) and soft lavender (#a082e6); deep purple (#2e008b) stage floor; \
pink (#eb5adc) reflected from side lights; the mic grille is dark with subtle \
metallic purple highlights.
MOTION: Slow orbit creating shifting reflections; the mic cable sways slightly \
from a breeze; light reflections on the chrome surface are liquid and ever-changing.`),
  },
  {
    id: "grona-lund-13",
    variationNumber: 13,
    dreamId: "grona-lund",
    name: "Wristband Glow",
    camera: "Close tracking",
    focus: "Detail",
    keyElement: "Glowing LED wristbands pulsing purple in unison",
    atmosphere: "Night",
    tags: ["crowd", "electric", "neon", "rhythm"],
    prompt: compose(`\
SCENE: Hundreds of LED wristbands on raised wrists pulse in perfect unison — \
all electric violet, then all soft lavender, then all pink, creating waves \
of color that roll across the crowd. The camera tracks close above the sea \
of wrists, seeing each wristband as a glowing node in a larger connected \
network. Occasional glowing phone screens punctuate the wristband field. The \
wrists and arms are anonymous silhouettes connecting dark body mass to \
glowing band.
CAMERA: Close tracking above the crowd, skimming over the sea of raised \
wristbands, moving from back of crowd toward the stage.
FOCUS: Detail — nearest wristbands are sharp, showing their texture and \
glow; distant ones become a field of bokeh light points.
KEY ELEMENT: The wristbands as collective pixels — individual nodes forming a \
unified, synchronized display of Electric Purple.
ATMOSPHERE: Night — the wristbands and stage provide the only illumination. \
The crowd is a dark mass animated by hundreds of purple light points.
COLOR EMPHASIS: Electric violet (#9b0aa5) primary wristband color; pink \
(#eb5adc) and soft lavender (#a082e6) in the color transitions; deep purple \
(#2e008b) in the spaces between lights; light blue (#7da0eb) from phone \
screens.
MOTION: Wristbands pulse in waves; the camera tracks forward; arms sway; the \
synchronized color changes ripple through the crowd like a digital aurora.`),
  },
  {
    id: "grona-lund-14",
    variationNumber: 14,
    dreamId: "grona-lund",
    name: "Roller Coaster Lights",
    camera: "Tracking alongside",
    focus: "Wide",
    keyElement: "Coaster track outlined in violet LED, rushing past",
    atmosphere: "Night, motion",
    tags: ["amusement-park", "lights", "energy", "electric"],
    prompt: compose(`\
SCENE: A roller coaster track outlined in LED strip lights — electric violet \
on the rails, pink on the support structure. The camera tracks alongside at \
rail level as a coaster train rushes past, its own lights a streak of lavender. \
The track twists and curves ahead, its illuminated path drawing glowing purple \
lines against the night sky. Below, the park's lights are a distant carpet \
of warm color.
CAMERA: Tracking alongside the coaster track at rail level, matching the \
train's speed for a beat, then letting it pull ahead.
FOCUS: Wide — the track structure and its LED outlines fill the frame with \
geometric purple light paths.
KEY ELEMENT: The roller coaster track as a drawn line of light — architecture \
becoming pure energy and movement.
ATMOSPHERE: Night, motion. The speed of the coaster creates motion blur on \
the surroundings while the track LEDs stay sharp.
COLOR EMPHASIS: Electric violet (#9b0aa5) LED rails; pink (#eb5adc) support \
structure LEDs; soft lavender (#a082e6) coaster lights; deep purple (#2e008b) \
night sky; electric blue (#3750dc) motion-blur of distant lights.
MOTION: The coaster train rushes through frame; the tracking creates a dynamic \
perspective; the LED lights streak at the edges; the track curves reveal new \
angles of light.`),
  },
  {
    id: "grona-lund-15",
    variationNumber: 15,
    dreamId: "grona-lund",
    name: "Sound Wave",
    camera: "Abstract visualization",
    focus: "Abstract",
    keyElement: "Visible sound waves rippling through purple air",
    atmosphere: "Night, ethereal",
    tags: ["bass", "vibration", "atmosphere", "music"],
    prompt: compose(`\
SCENE: An abstract, semi-real visualization of sound waves propagating through \
the concert atmosphere. Concentric rings of energy expand outward from the \
stage in the Electric Purple palette — each ring a different shade. The waves \
interact with the haze, creating visible interference patterns. Where the \
waves pass through the crowd, wristbands pulse. Where they hit surfaces, \
they create ripple reflections. The scene sits between photorealism and \
artistic interpretation.
CAMERA: Abstract visualization — the camera is static, but the scene itself \
is a dynamic wave animation overlaid on the real concert environment.
FOCUS: Abstract — the sound waves are sharp geometric elements; the real \
environment beneath is slightly soft and dreamlike.
KEY ELEMENT: Sound made visible — the invisible energy of music rendered as \
expanding purple light waves.
ATMOSPHERE: Night, ethereal. This is a heightened, almost hallucinatory \
version of the concert — the way music feels, not just how it looks.
COLOR EMPHASIS: Each concentric ring a different shade — deep purple (#2e008b) \
innermost, electric violet (#9b0aa5) mid-range, soft lavender (#a082e6) \
outer, pink (#eb5adc) furthest; electric blue (#3750dc) interference nodes.
MOTION: Concentric waves expanding rhythmically from the stage; interference \
patterns forming and dissolving; wristbands activating as waves pass; the \
entire scene pulses with visible sonic energy.`),
  },
  {
    id: "grona-lund-16",
    variationNumber: 16,
    dreamId: "grona-lund",
    name: "Stage Fog",
    camera: "Low-angle",
    focus: "Medium",
    keyElement: "Dense purple fog rolling across stage floor",
    atmosphere: "Night, fog",
    tags: ["stage", "atmosphere", "lights", "concert"],
    prompt: compose(`\
SCENE: Low-angle shot from the stage floor level, looking across the stage \
surface. Dense, heavy fog — cooled to stay low — rolls across the stage like \
a slow-motion purple tide. Stage lights from above pierce the fog in \
vertical shafts of violet and lavender. The fog's surface is not flat but \
turbulent, with curls and eddies catching different colored lights. In the \
background, the silhouette of a microphone stand rises above the fog layer \
like a reed above a lake.
CAMERA: Low-angle — the lens is at fog-surface level, looking across the \
rolling mist. Slow forward push.
FOCUS: Medium — the fog surface texture in the foreground is sharp; the \
background elements rise out of it in soft focus.
KEY ELEMENT: The fog as a living entity — a purple sea rolling across the \
stage, transforming a flat surface into a landscape.
ATMOSPHERE: Night, heavy low fog. The fog creates its own microclimate on \
stage — the world above the fog and below it are completely different.
COLOR EMPHASIS: Soft lavender (#a082e6) and electric violet (#9b0aa5) in the \
fog's lit surfaces; deep purple (#2e008b) in the fog's shadows and \
underside; pink (#eb5adc) light shafts from above; dark silhouettes emerging \
from the mist.
MOTION: Fog rolls forward in slow, heavy waves; light shafts cut through and \
create shifting patterns; eddies form and dissolve; the fog reacts to unseen \
air currents.`),
  },
  {
    id: "grona-lund-17",
    variationNumber: 17,
    dreamId: "grona-lund",
    name: "Ticket Stub",
    camera: "Macro static",
    focus: "Extreme detail",
    keyElement: "Concert ticket with purple typography, bokeh lights behind",
    atmosphere: "Night",
    tags: ["festival", "concert", "atmosphere", "neon"],
    prompt: compose(`\
SCENE: Extreme close-up of a concert ticket held between fingers (anonymous, \
no identifiable features). The ticket features typographic details in purple \
and violet ink. The camera focuses on the paper texture — visible fibers \
catching the light — while the concert venue behind the ticket is a gorgeous \
field of purple bokeh circles of varying sizes. The ticket's edge is \
slightly torn where it was separated from the stub. A faint holographic \
security strip catches violet light.
CAMERA: Macro static — the ticket is pinned in space; the bokeh background \
shifts subtly as the hand holding it sways slightly.
FOCUS: Extreme detail — paper fibers and ink edges are sharp; the background \
is pure creamy bokeh.
KEY ELEMENT: The ticket as artifact — a physical token of the experience, \
rendered with the intimacy of macro photography.
ATMOSPHERE: Night — the ticket is lit by ambient stage light spillage; the \
background is the out-of-focus concert in full purple intensity.
COLOR EMPHASIS: Purple and violet ink on white paper; deep purple (#2e008b) \
bokeh background; electric violet (#9b0aa5) and pink (#eb5adc) bokeh circles; \
soft lavender (#a082e6) holographic strip reflections.
MOTION: Very subtle — the hand holding the ticket sways marginally; the bokeh \
circles drift and shift; the holographic strip flashes as the angle changes.`),
  },
  {
    id: "grona-lund-18",
    variationNumber: 18,
    dreamId: "grona-lund",
    name: "Balloons over Strandvägen",
    camera: "Slow tilt up",
    focus: "Wide",
    keyElement: "Purple balloons rising with Strandvägen boulevard visible",
    atmosphere: "Night, whimsical",
    tags: ["festival", "strandvagen", "djurgarden", "atmosphere"],
    prompt: compose(`\
SCENE: A cluster of purple, violet, and lavender balloons ascends into the \
night sky above Gröna Lund. The camera tilts up to follow their flight. The \
balloons are backlit by the park's lights below, giving their undersides a \
warm glow while their tops are silhouetted against the deep purple sky. As \
they rise above the park's treeline, the grand Strandvägen boulevard comes \
into view across the harbor — its row of Art Nouveau and Jugendstil apartment \
buildings lit in warm amber, the historic wooden boats (Strandvägen's \
skärgårdsbåtar) moored along the quay, and the avenue's double row of linden \
trees. The balloons float between the worlds of Djurgården's park magic and \
Strandvägen's urban elegance.
CAMERA: Slow tilt up — following the balloons' ascent, revealing the \
Strandvägen skyline as the angle widens.
FOCUS: Wide — balloons are sharp against the sky; Strandvägen's lit facades \
and the park below soften into a warm light carpet.
KEY ELEMENT: The balloons as vehicles of escape drifting from Djurgården's \
playground energy toward Strandvägen's sophisticated glow — two iconic \
Stockholm faces united in the purple night.
ATMOSPHERE: Night, whimsical. A moment of childlike wonder with Stockholm's \
most elegant boulevard as backdrop.
COLOR EMPHASIS: Balloons in deep purple (#2e008b), electric violet (#9b0aa5), \
soft lavender (#a082e6), and pink (#eb5adc); Strandvägen facades in warm \
amber; the sky is deep indigo; electric blue (#3750dc) harbor water between \
Djurgården and the boulevard.
MOTION: Balloons rise and slowly separate; they rotate and catch light \
differently; the tilt reveals Strandvägen progressively; harbor reflections \
connect the two shores.`),
  },
  {
    id: "grona-lund-19",
    variationNumber: 19,
    dreamId: "grona-lund",
    name: "Mixing Desk",
    camera: "Slow pan across",
    focus: "Detail",
    keyElement: "Mixing console faders and VU meters bathed in violet",
    atmosphere: "Night, intimate",
    tags: ["music", "concert", "lights", "rhythm"],
    prompt: compose(`\
SCENE: A professional audio mixing console in the sound booth, its surface \
alive with color. Rows of faders, knobs, and illuminated VU meters create a \
landscape of precision and light. The faders are lit from below by built-in \
LEDs; the VU meters glow amber and green; the entire console is bathed in \
ambient purple light from the stage. The fader positions reflect the current \
mix — different heights forming a visual rhythm. Out-of-focus stage is visible \
in the far background through the booth opening.
CAMERA: Slow pan across the console surface, right to left, at a low angle \
that emphasizes the fader heights.
FOCUS: Detail — the nearest faders and meters are sharp; the console \
stretches into soft-focus distance.
KEY ELEMENT: The mixing desk as the unseen conductor of the concert \
experience — every sound heard by the crowd shaped by these controls.
ATMOSPHERE: Night, intimate. This is the backstage brain of the show, lit by \
its own functional lights and the ambient purple spill.
COLOR EMPHASIS: Amber and green VU meters against electric violet (#9b0aa5) \
ambient light; deep purple (#2e008b) shadows between channels; soft lavender \
(#a082e6) light from the console's own illumination; fader caps catching \
pink (#eb5adc) stage reflections.
MOTION: Slow pan; faders occasionally move (ghost-operated by unseen hands); \
VU meters bounce with the music; LED indicators blink; the stage in the \
background pulses with distant purple light.`),
  },
  {
    id: "grona-lund-20",
    variationNumber: 20,
    dreamId: "grona-lund",
    name: "Södermalm Waterfront View",
    camera: "Wide establishing",
    focus: "Ultra-wide",
    keyElement: "Stage reflected in harbor with Södermalm and Fotografiska behind",
    atmosphere: "Night, reflections",
    tags: ["stage", "sodermalm", "fotografiska", "atmosphere"],
    prompt: compose(`\
SCENE: Ultra-wide shot from across the harbor water on the Södermalm side, \
framing Gröna Lund's main stage as a purple beacon on the Djurgården \
waterfront. The camera position near Fotografiska (Stockholm's renowned \
photography museum) places its distinctive red-brick industrial building \
at the left frame edge. The stage lights are reflected in the harbor water \
in long, shimmering purple and violet streaks that stretch toward the camera. \
The Södermalm cliff face (Stigberget) rises to the right of frame, its \
rooftop bars and apartments glowing warm against the purple night. Between \
Södermalm and Djurgården, the dark harbor water becomes a canvas of reflected \
purple light. Stockholm's cityscape bridges the two shores.
CAMERA: Wide establishing — static or with an almost imperceptible slow \
zoom-in over 8 seconds.
FOCUS: Ultra-wide — everything from Fotografiska's brick facade through the \
harbor reflections to the distant Gröna Lund stage is in focus.
KEY ELEMENT: The concert as seen from Stockholm's cultural south bank — the \
stage's purple energy radiating across the water to Södermalm's creative \
waterfront, with Fotografiska as the cultural anchor.
ATMOSPHERE: Night with reflections. The harbor connects Djurgården's concert \
energy to Södermalm's urban culture, the water multiplying the purple light.
COLOR EMPHASIS: Electric violet (#9b0aa5) stage and its water reflection; \
deep purple (#2e008b) sky and dark water; warm red-brick of Fotografiska; \
soft lavender (#a082e6) in the harbor reflections; Södermalm's cliff-top \
lights in warm amber; pink (#eb5adc) accent lights reflected.
MOTION: Water choppy with shifting reflections; distant stage lights pulse; \
a Djurgården ferry crosses the harbor; Södermalm's cliff-top restaurants \
glow steadily.`),
  },
  {
    id: "grona-lund-21",
    variationNumber: 21,
    dreamId: "grona-lund",
    name: "Encore Flash",
    camera: "Fast zoom out",
    focus: "Wide",
    keyElement: "Sudden burst of violet pyrotechnics from stage",
    atmosphere: "Night, explosive",
    tags: ["energy", "lights", "stage", "electric"],
    prompt: compose(`\
SCENE: The encore moment — the stage erupts with a massive burst of violet \
and pink pyrotechnics. Geysers of purple sparks shoot upward from the stage \
edges. The camera rapidly zooms out to capture the full scale of the \
pyrotechnic display against the night sky. The sparks arc and fall in \
glowing parabolas, trailing lavender smoke. The crowd erupts into a sea of \
raised hands and phone lights. The ferris wheel in the background is dwarfed \
by the stage's firework display.
CAMERA: Fast zoom out — starting close on the first spark eruption, pulling \
back rapidly to reveal the full spectacular display.
FOCUS: Wide — the pyrotechnics fill the frame at multiple depths.
KEY ELEMENT: The explosive power of the finale — contained violence of \
pyrotechnics rendered in the Electric Purple palette.
ATMOSPHERE: Night, explosive. The air fills with smoke, sparks, and purple \
light. Maximum sensory overload.
COLOR EMPHASIS: Electric violet (#9b0aa5) and pink (#eb5adc) pyrotechnic \
sparks; deep purple (#2e008b) smoke trails; soft lavender (#a082e6) in the \
illuminated smoke clouds; white-hot centers of each spark.
MOTION: Explosive — sparks arc upward and fall; smoke billows; the zoom-out \
creates a widening perspective; crowd surges; the entire scene is kinetic \
and alive.`),
  },
  {
    id: "grona-lund-22",
    variationNumber: 22,
    dreamId: "grona-lund",
    name: "Rain on Lights",
    camera: "Static with rain",
    focus: "Detail",
    keyElement: "Raindrops catching colored spotlights, purple dominant",
    atmosphere: "Night, light rain",
    tags: ["lights", "atmosphere", "festival", "concert"],
    prompt: compose(`\
SCENE: A light summer rain falls through the concert's spotlight beams. Each \
raindrop becomes a momentary streak of colored light — purple, violet, pink \
— as it passes through different beams. The camera captures the rain as \
thousands of tiny light trails against the dark sky. Below, the wet surfaces \
of the stage equipment and crowd barriers reflect the purple lights in \
smeared, impressionist pools. A spotlight beam becomes a visible cone of \
falling illuminated rain.
CAMERA: Static, looking upward at about 45 degrees into the rain and \
spotlights. The rain falls toward and past the camera.
FOCUS: Detail — some raindrops are frozen sharp; others are long streaks \
depending on their distance from the lens.
KEY ELEMENT: Rain as a natural light-catching medium — each drop a brief \
carrier of the Electric Purple palette.
ATMOSPHERE: Night, light summer rain. The rain adds a layer of magic to the \
concert, not dampening the energy but enhancing the light effects.
COLOR EMPHASIS: Electric violet (#9b0aa5) raindrop streaks through the main \
beams; deep purple (#2e008b) sky; pink (#eb5adc) drops through accent lights; \
soft lavender (#a082e6) in the wet-surface reflections below.
MOTION: Rain falls continuously in streaks of light; puddle reflections \
shimmer; spotlight beams become rain-shower curtains; occasional larger drops \
splash on surfaces.`),
  },
  {
    id: "grona-lund-23",
    variationNumber: 23,
    dreamId: "grona-lund",
    name: "Crowd Hands",
    camera: "Slow tracking over",
    focus: "Medium",
    keyElement: "Sea of raised hands lit from below in purple/pink",
    atmosphere: "Night",
    tags: ["crowd", "energy", "concert", "atmosphere"],
    prompt: compose(`\
SCENE: A sea of raised hands seen from a slightly elevated angle, stretching \
from the foreground to the distant stage. The hands are lit from below by \
the stage wash, creating a field of purple-pink-lit fingers against the dark \
sky. Wristbands add points of glowing violet. The hands move in slow, \
synchronized waves — following the music's rhythm. Phone screens held aloft \
add bright rectangular accents. The overall effect is organic, like a field \
of luminous sea anemones swaying in a current.
CAMERA: Slow tracking over the crowd — moving from above the crowd toward the \
stage, skimming at about 3 meters above hand height.
FOCUS: Medium — the nearest hands are individual and detailed; further away \
they merge into an abstract purple-lit mass.
KEY ELEMENT: The crowd's hands as a unified, living, luminous organism — \
individual gesture dissolved into collective rhythm.
ATMOSPHERE: Night — the stage light from ahead paints the underside of every \
raised hand in purple and pink.
COLOR EMPHASIS: Electric violet (#9b0aa5) and pink (#eb5adc) underlit skin; \
deep purple (#2e008b) dark sky above; soft lavender (#a082e6) wristband glow; \
light blue (#7da0eb) phone screens.
MOTION: Hands sway in slow waves; phone screens appear and disappear; \
wristbands pulse; the tracking creates a flowing perspective over the living \
sea of hands.`),
  },
  {
    id: "grona-lund-24",
    variationNumber: 24,
    dreamId: "grona-lund",
    name: "Vinyl Spin",
    camera: "Macro orbit",
    focus: "Detail",
    keyElement: "Vinyl record spinning, grooves catching violet reflections",
    atmosphere: "Night, retro",
    tags: ["music", "rhythm", "neon", "electric"],
    prompt: compose(`\
SCENE: A vinyl record spins on a turntable at the DJ booth side-stage. The \
camera captures the record at macro level — the grooves are visible as \
concentric lines that catch the ambient purple stage light in shifting \
patterns. The record label at the center is a design in Electric Purple \
tones. The tonearm sits in the groove, its cartridge reflecting a tiny \
version of the stage lights. Warm amber light from the DJ booth's equipment \
contrasts with the purple ambient.
CAMERA: Macro orbit — slowly circling the spinning record, keeping the \
groove detail in focus as the reflections shift.
FOCUS: Detail — the grooves and their light reflections are the subject; \
the DJ booth and stage beyond are soft purple bokeh.
KEY ELEMENT: The vinyl record as both musical medium and optical surface — \
its grooves a physical encoding of sound that also reflects the visual \
spectacle.
ATMOSPHERE: Night, with a retro warmth. The turntable setup evokes analog \
craft in a digital world.
COLOR EMPHASIS: Black vinyl catching electric violet (#9b0aa5) and soft \
lavender (#a082e6) reflections in the grooves; deep purple (#2e008b) in the \
record's shadowed areas; pink (#eb5adc) label; warm amber from the booth \
lights.
MOTION: The record spins at 33rpm — the grooves create concentric moving \
reflections; the orbit adds a second layer of shifting perspective; the \
tonearm vibrates microscopically; light patterns on the vinyl surface are \
hypnotic.`),
  },
  {
    id: "grona-lund-25",
    variationNumber: 25,
    dreamId: "grona-lund",
    name: "Final Beam over Djurgården",
    camera: "Slow fade/dolly back",
    focus: "Wide",
    keyElement: "Single purple beam rising above Djurgården into the Stockholm sky",
    atmosphere: "Night, closing",
    tags: ["stage", "djurgarden", "stadshuset", "atmosphere"],
    prompt: compose(`\
SCENE: The concert's final moment. All stage lights — which have been a \
complex symphony of colors — slowly converge into a single, vertical beam \
of pure electric violet rising from Gröna Lund's stage into the Stockholm \
sky. The haze catches this beam beautifully, making it a solid column of \
purple light visible across the city. As the camera slowly dollies back \
across the harbor, the beam becomes a landmark visible in context with \
Stockholm's skyline — Stadshuset's tower to the left, Gamla Stan's spires \
to the right, and the purple beam from Djurgården standing between them \
as a temporary fourth spire of Stockholm. The crowd watches in silence. \
Then, gently, the beam fades to black, and only the permanent city lights \
remain.
CAMERA: Slow dolly back across the harbor — pulling away from Djurgården, \
contextualizing the beam within Stockholm's wider skyline.
FOCUS: Wide — the beam is a singular vertical element among Stockholm's \
silhouetted landmarks.
KEY ELEMENT: The purple beam as a temporary addition to Stockholm's skyline \
— standing alongside Stadshuset and Gamla Stan's spires, then vanishing, \
leaving only the memory of Electric Purple.
ATMOSPHERE: Night, closing. The energy shifts from chaos to order to silence. \
The beam connects Djurgården to the sky for one final moment.
COLOR EMPHASIS: Pure electric violet (#9b0aa5) in the beam; deep purple \
(#2e008b) sky; warm amber on Stadshuset and Gamla Stan; soft lavender \
(#a082e6) scattered by the haze; as the beam fades, the city's warm tones \
gradually dominate and the purple drains to dark (#34303d).
MOTION: Slow dolly back; the beam stands still among Stockholm's landmarks; \
haze drifts through it; the beam slowly dims; the city lights persist as the \
purple fades.`),
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
    name: "Steam Rise",
    camera: "Slow tilt up",
    focus: "Medium",
    keyElement: "Dense steam rising from hot stones, lit purple from above",
    atmosphere: "Warm interior, dim",
    tags: ["steam", "sauna", "heat", "glow"],
    prompt: compose(`\
SCENE: Inside a dimly lit sauna. Dense white-gray steam rises from a pile of \
dark hot stones, billowing upward in slow, organic plumes. A light source \
above — unseen, but casting deep purple and violet — illuminates the steam \
from behind, turning each plume into a column of glowing lavender and violet. \
The dark wooden walls of the sauna absorb most light, creating a cave-like \
intimacy. The stones at the base glow a deep amber-red between their gaps.
CAMERA: Slow tilt up — starting on the glowing stones, rising through the \
steam plumes toward the purple light source above over 8 seconds.
FOCUS: Medium — the steam is the mid-ground subject; the stones below are \
warm and slightly soft; the ceiling above is lost in purple-lit mist.
KEY ELEMENT: Steam as the medium for light — transforming invisible water \
vapor into a visible, purple-lit sculpture.
ATMOSPHERE: Warm interior, dim. The heat is palpable. The air is thick with \
moisture. The only lights are the stone glow and the purple ambient above.
COLOR EMPHASIS: Deep amber-red on the stones; electric violet (#9b0aa5) and \
soft lavender (#a082e6) in the backlit steam; deep purple (#2e008b) in the \
wooden walls and shadows; pink (#eb5adc) where the hot and cool light mix \
in the steam.
MOTION: Steam rises in slow, billowing plumes that curl and fold; the tilt \
follows the steam's upward journey; the stone glow pulses very gently with \
residual heat.`),
  },
  {
    id: "floating-sauna-02",
    variationNumber: 2,
    dreamId: "floating-sauna",
    name: "Cold Plunge Entry",
    camera: "Slow-motion downward",
    focus: "Detail",
    keyElement: "Water surface breaking as something enters cold plunge",
    atmosphere: "Dawn, cold blue",
    tags: ["cold-plunge", "water", "contrast", "immersion"],
    prompt: compose(`\
SCENE: The surface of a cold plunge pool — dark, still, purple-tinted water \
— is broken by an entry. In ultra slow motion, the water surface depresses, \
then erupts into a crown of droplets. Each droplet catches the dawn light in \
purple, lavender, and cold blue. Beneath the surface, a cloud of silver \
bubbles expands. The water's surface tension creates a temporary membrane \
before yielding. The surrounding wooden pool edge frames the shot.
CAMERA: Slow-motion downward — capturing the entry and splash from a \
45-degree angle above.
FOCUS: Detail — the splash crown is sharp; individual droplets are frozen; \
the water's depth is soft purple.
KEY ELEMENT: The moment of immersion — the shock of cold water captured as a \
beautiful, violent event in purple light.
ATMOSPHERE: Dawn, cold blue. The early morning light is cold and purple, with \
no warmth yet. The water temperature is near-freezing — the visual language \
should feel cold.
COLOR EMPHASIS: Deep purple (#2e008b) in the undisturbed water; electric blue \
(#3750dc) and light blue (#7da0eb) in the cold splash highlights; soft \
lavender (#a082e6) in the frozen droplets; silver-white in the bubbles; \
warm wood tones at the frame edges.
MOTION: Ultra-slow-motion splash: water depression, crown formation, droplet \
separation, bubble cloud expansion. The violence of the entry rendered as \
slow, beautiful physics.`),
  },
  {
    id: "floating-sauna-03",
    variationNumber: 3,
    dreamId: "floating-sauna",
    name: "Wooden Grain",
    camera: "Macro drift",
    focus: "Extreme detail",
    keyElement: "Cedar wood grain texture with warm amber-purple light",
    atmosphere: "Warm, intimate",
    tags: ["wood", "sauna", "minimal", "zen"],
    prompt: compose(`\
SCENE: Extreme macro of cedar wood — the sauna's bench surface. The wood \
grain is a landscape of ridges and valleys, its growth rings telling decades \
of story. Warm amber light from one direction catches the grain ridges while \
purple-tinted shadow fills the valleys. The wood has the slight sheen of heat \
and moisture. Tiny droplets of condensation sit in the grain channels like \
rivers on a topographic map. A single knot in the wood is a dark eye in the \
amber field.
CAMERA: Macro drift — slowly panning across the wood surface, as if exploring \
a terrain from above.
FOCUS: Extreme detail — individual wood fibers and condensation droplets are \
visible. The drift takes the focus through different depth planes.
KEY ELEMENT: The cedar wood as a micro-landscape — nature's pattern language \
rendered visible by the interplay of warm and purple light.
ATMOSPHERE: Warm, intimate. The macro perspective transforms the familiar \
sauna bench into an alien, beautiful terrain.
COLOR EMPHASIS: Warm amber and honey on the grain ridges; deep purple \
(#2e008b) in the grain valleys; electric violet (#9b0aa5) in the deeper \
shadows; soft lavender (#a082e6) on the condensation droplets catching \
reflected sky through a window.
MOTION: Slow lateral drift across the wood surface; condensation droplets \
merge and slide imperceptibly; a rising heat distortion softens the far edge \
of the macro view.`),
  },
  {
    id: "floating-sauna-04",
    variationNumber: 4,
    dreamId: "floating-sauna",
    name: "Riddarfjärden Float",
    camera: "Slow orbit",
    focus: "Wide",
    keyElement: "Sauna floating on Riddarfjärden with Stadshuset visible",
    atmosphere: "Blue hour, mist",
    tags: ["floating", "riddarfjarden", "stadshuset", "stillness"],
    prompt: compose(`\
SCENE: A wooden sauna structure — a minimalist Nordic box with warm light \
spilling from its windows — floats on the waters of Riddarfjärden, the \
iconic body of water at the heart of Stockholm. The distinctive silhouette \
of Stadshuset (Stockholm City Hall) with its tower and three golden crowns \
is visible on the northern shore, its red-brick facade catching the last \
ambient light. To the east, the profile of Gamla Stan's rooftops and church \
spires rises against the purple sky. The Riddarfjärden surface is a flawless \
mirror of the blue-hour sky, making the sauna appear to hover between the \
reflected city and the real one. A thin layer of mist floats just above the \
water, catching the sauna's window glow in soft amber wisps.
CAMERA: Slow orbit — the camera circles the floating sauna roughly 20 degrees \
over 8 seconds, shifting the backdrop from Stadshuset to Gamla Stan.
FOCUS: Wide — the sauna, its reflection, the mist layer, and Stockholm's \
landmark silhouettes are all in focus.
KEY ELEMENT: The floating sauna centered in Riddarfjärden — the ultimate \
Stockholm wellness fantasy, bathing with the city's most iconic landmarks \
as your backdrop.
ATMOSPHERE: Blue hour with low mist on Riddarfjärden. The scene is hushed \
and meditative despite the urban setting. The city feels distant, dream-like.
COLOR EMPHASIS: Warm amber from the sauna windows; deep purple (#2e008b) sky \
and its water mirror; Stadshuset's red brick in muted warm tones; electric \
violet (#9b0aa5) at the horizon; soft lavender (#a082e6) mist catching the \
window glow; Gamla Stan as a warm amber cluster.
MOTION: Slow orbit; the reflected city shifts with the camera; mist drifts \
lazily; window glow flickers (fire inside); the sauna bobs imperceptibly; \
Stadshuset's tower light glows steadily.`),
  },
  {
    id: "floating-sauna-05",
    variationNumber: 5,
    dreamId: "floating-sauna",
    name: "Hot Stones",
    camera: "Static with steam",
    focus: "Detail",
    keyElement: "Water hitting hot stones, explosion of steam",
    atmosphere: "Warm interior",
    tags: ["heat", "steam", "ritual", "sauna"],
    prompt: compose(`\
SCENE: The löyly ritual — water is poured from a wooden ladle onto searing \
hot sauna stones. The moment of contact produces an explosive release of \
steam — a violent, beautiful eruption that fills the frame. The stones \
themselves glow deep amber-red in their crevices. The steam shoots upward \
and outward, instantly catching purple light from above. Water droplets that \
don't immediately evaporate dance and skitter across the stone surface like \
tiny mercury balls.
CAMERA: Static, positioned at stone level, facing the pour point directly. \
The steam eruption fills the frame.
FOCUS: Detail — the stone surfaces and the point of water contact are sharp; \
the steam explosion above is volumetric and slightly soft.
KEY ELEMENT: The moment of transformation — liquid water becoming steam on \
contact, a phase change rendered as visual spectacle.
ATMOSPHERE: Warm interior — the heat is at its peak during the löyly. The \
air is already saturated with moisture; this pour pushes it further.
COLOR EMPHASIS: Deep amber-red on the hot stones; white-to-lavender (#a082e6) \
steam; deep purple (#2e008b) in the dark sauna interior beyond; electric \
violet (#9b0aa5) in the backlit upper steam; dancing water droplets catch \
pink (#eb5adc) light.
MOTION: Water stream contacts stones; explosive steam eruption; skittering \
water droplets; the steam plume rises and expands; the ladle tilts (seen \
at frame edge) controlling the pour.`),
  },
  {
    id: "floating-sauna-06",
    variationNumber: 6,
    dreamId: "floating-sauna",
    name: "Breath Cloud",
    camera: "Slow-motion",
    focus: "Detail",
    keyElement: "Visible breath cloud in cold air, purple backlight",
    atmosphere: "Cold exterior, dawn",
    tags: ["breath", "cold-plunge", "contrast", "mist"],
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
    name: "Brunnsviken Mirror",
    camera: "Low-angle wide",
    focus: "Ultra-wide",
    keyElement: "Perfect reflection on Brunnsviken with Haga Park beyond",
    atmosphere: "Blue hour, dead calm",
    tags: ["lake", "brunnsviken", "reflections", "stillness"],
    prompt: compose(`\
SCENE: A perfectly symmetrical composition on the waters of Brunnsviken — \
the serene lake north of Stockholm's center, bordered by the royal Haga Park. \
The frame is divided exactly at the waterline. Above: the floating sauna with \
its warm-lit windows, the dark silhouette of Haga Park's ancient oaks and the \
distinctive copper roof of the Haga Palace pavilion visible on the far shore, \
and the deep purple-violet blue-hour sky. Below: a flawless mirror reflection \
of everything above, slightly darker and more purple. The famous Haga Park \
lawns slope gently to the waterline behind the sauna. Brunnsviken's sheltered \
waters are perfectly still.
CAMERA: Low-angle wide — the lens is at exact waterline level, creating the \
symmetrical split. Static or with an imperceptible forward float.
FOCUS: Ultra-wide — sharp from the nearest water surface to Haga Park's \
tree line. The symmetry demands total clarity.
KEY ELEMENT: Brunnsviken as Stockholm's most tranquil body of water — the \
sauna floating in the royal park's mirror lake, suspended between two \
reflected purple worlds.
ATMOSPHERE: Blue hour, dead calm. Not a breath of wind on Brunnsviken's \
sheltered surface. The royal park creates a buffer of silence from the city.
COLOR EMPHASIS: Deep purple (#2e008b) sky and its deeper reflection; electric \
violet (#9b0aa5) at both horizons; soft lavender (#a082e6) in the lighter \
sky; warm amber from the sauna windows doubled by the reflection; Haga \
Park's dark greens reading as deep purple in the evening light.
MOTION: Near-static — the only movement is a very slight bob of the sauna \
and an occasional micro-ripple from a diving bird that momentarily distorts \
the perfect Haga Park reflection.`),
  },
  {
    id: "floating-sauna-08",
    variationNumber: 8,
    dreamId: "floating-sauna",
    name: "Ice Crystals",
    camera: "Macro",
    focus: "Extreme detail",
    keyElement: "Ice formations on window/surface catching violet light",
    atmosphere: "Cold, crystalline",
    tags: ["ice", "contrast", "minimal", "cold-plunge"],
    prompt: compose(`\
SCENE: Extreme macro of ice crystals formed on the sauna's exterior window. \
The crystals are intricate fractal patterns — fern-like dendrites and \
hexagonal plates — each catching the ambient purple light at different angles. \
Through the ice, the warm amber interior of the sauna is visible but \
distorted into abstract blobs of warm color. The ice itself is a spectrum of \
clear, white, and pale blue, with the purple light turning it into a natural \
stained-glass window.
CAMERA: Macro — static or with an impossibly slow drift across the ice \
surface, revealing new crystal formations.
FOCUS: Extreme detail — individual ice crystal branches are sharp; the warm \
interior beyond is bokeh.
KEY ELEMENT: Ice crystals as nature's fractal art — the cold's beautiful \
answer to the heat within. The contrast between frozen surface and warm \
interior is the sauna's essence.
ATMOSPHERE: Cold, crystalline. The ice exists because the interior is warm \
and the exterior is freezing — each crystal is evidence of the temperature \
gradient.
COLOR EMPHASIS: Clear and pale blue ice; electric violet (#9b0aa5) and soft \
lavender (#a082e6) light caught in crystal facets; deep purple (#2e008b) in \
the shadows between crystals; warm amber bokeh from the interior beyond; \
occasional pink (#eb5adc) refraction through the crystal prisms.
MOTION: Extremely slow drift across the crystal landscape; occasional crystal \
glint as the angle shifts; the warm interior beyond the ice shimmers softly; \
a very slow melt — a tiny water bead forming and beginning to run.`),
  },
  {
    id: "floating-sauna-09",
    variationNumber: 9,
    dreamId: "floating-sauna",
    name: "Ember Glow",
    camera: "Static",
    focus: "Detail",
    keyElement: "Glowing embers in sauna stove, deep purple-red tones",
    atmosphere: "Warm interior, dim",
    tags: ["embers", "heat", "glow", "sauna"],
    prompt: compose(`\
SCENE: Close-up of the sauna stove's ember bed. Charcoal and wood pieces glow \
in deep amber, orange, and red — a miniature volcanic landscape. The embers \
pulse with residual heat, brightening and dimming in slow breathing cycles. \
Above the ember bed, heat distortion warps the view of the dark sauna \
interior. The stones above the embers are dark but their undersides catch a \
deep purple-red glow. Tiny sparks occasionally float upward from the ember \
surface.
CAMERA: Static — locked on the ember bed. The stillness allows the viewer to \
become mesmerized by the slow pulsing of the embers.
FOCUS: Detail — the ember surfaces are sharp, showing cracked charcoal \
texture and glowing fissures; the area above shimmers with heat distortion.
KEY ELEMENT: The ember bed as the heart of the sauna — its steady glow is \
the source of all warmth, all steam, all ritual.
ATMOSPHERE: Warm interior, dim. The ember glow is the primary light source \
in this shot, casting everything in its amber-red-purple spectrum.
COLOR EMPHASIS: Deep amber and red in the ember cores; the outer charcoal \
surfaces shift to deep purple (#2e008b) and electric violet (#9b0aa5); the \
stones above catch soft lavender (#a082e6) from the mixed ember-and-ambient \
light; the heat distortion above carries pink (#eb5adc) shifts.
MOTION: Embers pulse slowly (brightening over 2 seconds, dimming over 3); \
occasional tiny sparks drift upward; heat distortion shimmers above the bed; \
a piece of charcoal shifts and settles, releasing a brief burst of new glow.`),
  },
  {
    id: "floating-sauna-10",
    variationNumber: 10,
    dreamId: "floating-sauna",
    name: "Långholmen Mist",
    camera: "Slow dolly forward",
    focus: "Wide",
    keyElement: "Mist hovering over water near Långholmen island at dawn",
    atmosphere: "Dawn, misty",
    tags: ["mist", "langholmen", "water", "stillness"],
    prompt: compose(`\
SCENE: A thin layer of mist — only about half a meter thick — hovers over \
the water surface near Långholmen island at dawn. This is one of Stockholm's \
most beloved urban nature spots — the former prison island turned into a \
green oasis in the city's heart. The camera glides through the mist layer at \
water level, pushing through it like moving through a violet cloud. Through \
breaks in the mist, the Långholmen shoreline is visible — its distinctive \
yellow cliffside former prison buildings, now a hotel and hostel, rising \
above the trees. The Västerbron bridge arches across the sky in the \
background, its span catching the first purple-gold light. Above the mist, \
Långholmen's dense deciduous canopy is a dark mass against the purple sky.
CAMERA: Slow dolly forward through the mist layer at water level, approaching \
Långholmen from the Riddarfjärden side.
FOCUS: Wide — the mist has depth; Långholmen's shore reveals itself through \
the mist; Västerbron frames the background.
KEY ELEMENT: The mist as a veil between the urban waterway and the hidden \
natural paradise of Långholmen — the city's most surprising green island \
emerging from a purple cloud.
ATMOSPHERE: Dawn, misty. Stockholm is still asleep. The mist transforms a \
familiar urban waterway into a dreamscape where Långholmen feels like a \
hidden island in a fairy tale.
COLOR EMPHASIS: Soft lavender (#a082e6) and white in the illuminated mist; \
deep purple (#2e008b) water below and sky above; electric violet (#9b0aa5) \
where the mist is backlit by the brightening horizon behind Västerbron; \
the yellow Långholmen buildings add warm amber accents.
MOTION: Forward glide through the mist toward Långholmen; mist parts and \
closes; Västerbron's silhouette grows clearer; occasional clear patches \
reveal the dark water below; birdsong is implied by a heron silhouette \
taking flight from the shore.`),
  },
  {
    id: "floating-sauna-11",
    variationNumber: 11,
    dreamId: "floating-sauna",
    name: "Water Droplets",
    camera: "Macro slow-motion",
    focus: "Extreme detail",
    keyElement: "Droplets running down wood surface in warm light",
    atmosphere: "Warm interior",
    tags: ["water", "wood", "sauna", "minimal"],
    prompt: compose(`\
SCENE: Extreme macro of water droplets condensing and running down the warm \
wooden interior wall of the sauna. Each droplet is a perfect lens, refracting \
and inverting the warm amber interior light. The droplets merge, grow heavy, \
and begin to slide, leaving wet trails on the wood. The wood grain is visible \
through and around the droplets. A faint purple ambient light from the window \
mixes with the warm interior, creating a dual-tone illumination.
CAMERA: Macro slow-motion — fixed on a section of wall, capturing the slow \
life cycle of condensation droplets.
FOCUS: Extreme detail — individual droplets are large enough to see refracted \
images within them. The wood grain texture is fully resolved.
KEY ELEMENT: Condensation as evidence of heat — the warm, moist air of the \
sauna manifested as jewel-like droplets on wood.
ATMOSPHERE: Warm interior — the high humidity is visible in the condensation. \
The air itself feels thick and warm.
COLOR EMPHASIS: Warm amber refracted through the droplets; the wet wood is \
darker, revealing deep purple (#2e008b) in its grain; soft lavender (#a082e6) \
from the window light catching individual droplets; the dry wood is warm \
honey-tone.
MOTION: Droplets form, grow, merge, and begin to slide in ultra-slow-motion; \
each sliding droplet leaves a wet trail that darkens the wood; new droplets \
form in the trail; the process is meditative and endless.`),
  },
  {
    id: "floating-sauna-12",
    variationNumber: 12,
    dreamId: "floating-sauna",
    name: "Plunge Bubbles",
    camera: "Underwater",
    focus: "Detail",
    keyElement: "Air bubbles rising through cold purple-tinted water",
    atmosphere: "Cold, underwater",
    tags: ["cold-plunge", "water", "immersion", "contrast"],
    prompt: compose(`\
SCENE: Underwater perspective looking upward in the cold plunge pool. A cloud \
of silver-white air bubbles rises toward the surface, each bubble a tiny \
spherical mirror reflecting the purple world above. The water is tinted deep \
purple-blue by the sky light filtering through the surface. The surface \
itself is a shimmering, distorted window — the purple sky and sauna structure \
visible but wavering above. Sunbeams (or pre-dawn light beams) penetrate the \
water in shafts of electric violet.
CAMERA: Underwater, looking up at about 30 degrees. Static, allowing the \
bubbles to rise through and past the frame.
FOCUS: Detail — the nearest bubbles are sharp enough to see reflections in \
them; distant bubbles and the surface are soft and dreamy.
KEY ELEMENT: The bubbles as ascending spheres of captured breath — each one \
a tiny reflection of the world above, rising from the cold depths.
ATMOSPHERE: Cold, underwater. The world below the surface is silent, slow, \
and deeply purple. A meditative counterpoint to the violent splash of entry.
COLOR EMPHASIS: Deep purple (#2e008b) and electric blue (#3750dc) in the \
water body; soft lavender (#a082e6) and electric violet (#9b0aa5) in the \
light shafts; silver-white bubbles with purple reflections; the surface \
above is a luminous purple-gold window.
MOTION: Bubbles rise in slow, wobbly ascent; they merge when they touch, \
forming larger bubbles that accelerate; light beams shift as the surface \
undulates; the overall feeling is peaceful and ascending.`),
  },
  {
    id: "floating-sauna-13",
    variationNumber: 13,
    dreamId: "floating-sauna",
    name: "Smoke Curl",
    camera: "Static",
    focus: "Detail",
    keyElement: "Single curl of smoke/steam against purple-lit darkness",
    atmosphere: "Dim, atmospheric",
    tags: ["steam", "zen", "minimal", "stillness"],
    prompt: compose(`\
SCENE: A single, elegant curl of steam or smoke rises from the sauna's stone \
pile, illuminated by a narrow beam of purple light against a completely dark \
background. The curl follows a complex, organic spiral — twisting, folding \
back on itself, branching — creating a temporary natural sculpture. The beam \
catches the smoke/steam at different densities — thick sections glow brightly, \
thin sections are translucent ghosts. The dark background is not true black \
but deep indigo-purple.
CAMERA: Static — the smoke curl is the performance; the camera is the \
audience. Centered composition.
FOCUS: Detail — the smoke edges are sharp where dense, dissolving to nothing \
where thin. The background is a uniform deep purple.
KEY ELEMENT: The smoke curl as calligraphy — a natural brushstroke of steam \
writing in purple light against darkness. Wabi-sabi in motion.
ATMOSPHERE: Dim, atmospheric. This is a meditative moment — a single element \
in near-darkness. The sauna stripped to its essence.
COLOR EMPHASIS: White-to-lavender (#a082e6) in the dense smoke; electric \
violet (#9b0aa5) at the beam edges; deep purple (#2e008b) background; \
occasional pink (#eb5adc) where the thinnest wisps catch the light at oblique \
angles.
MOTION: The smoke curl rises and evolves continuously — no two frames are \
alike. It twists, folds, blooms, and dissipates in a perpetual, unrepeatable \
dance.`),
  },
  {
    id: "floating-sauna-14",
    variationNumber: 14,
    dreamId: "floating-sauna",
    name: "Birch Whisk",
    camera: "Slow-motion swing",
    focus: "Detail",
    keyElement: "Traditional birch whisk in motion, leaves and steam",
    atmosphere: "Warm interior",
    tags: ["ritual", "sauna", "heat", "steam"],
    prompt: compose(`\
SCENE: A traditional Finnish birch whisk (vihta) swings through the steamy \
sauna air in slow motion. The bundle of birch branches with their small green \
leaves cuts through the steam, creating swirling vortices in its wake. Water \
droplets fly off the leaves in a spray pattern. The leaves are backlit by the \
purple-amber sauna light, making them glow translucent green with purple \
edges. Steam parts and reforms around the whisk's path.
CAMERA: Slow-motion swing — the camera tracks the whisk through its arc, \
positioned to catch the backlit leaf spray and steam vortices.
FOCUS: Detail — the whisk bundle and its immediate spray zone are sharp; the \
steam-filled background is soft purple.
KEY ELEMENT: The vihta as a traditional tool of ritual — birch leaves and \
steam and heat combined in an ancient Nordic practice.
ATMOSPHERE: Warm interior — the sauna is at full heat. Steam is dense. The \
whisk ritual is the peak of the sauna experience.
COLOR EMPHASIS: Translucent green leaves backlit with amber and electric \
violet (#9b0aa5); water droplets catching purple and pink (#eb5adc) light; \
deep purple (#2e008b) in the background steam; soft lavender (#a082e6) in \
the nearest steam wisps.
MOTION: The whisk swings in a slow arc; leaves flutter; water droplets spray \
in a fan pattern; steam vortices spiral in the whisk's wake; everything is \
slow-motion ballet.`),
  },
  {
    id: "floating-sauna-15",
    variationNumber: 15,
    dreamId: "floating-sauna",
    name: "Hellasgården Frozen Pier",
    camera: "Slow dolly",
    focus: "Wide",
    keyElement: "Frost-covered pier at Hellasgården leading to sauna",
    atmosphere: "Winter dawn",
    tags: ["ice", "hellasgarden", "lake", "nordic"],
    prompt: compose(`\
SCENE: A frost-covered wooden pier extends from the shore of Hellasgården — \
Stockholm's beloved outdoor recreation area on the shores of Lake Källtorp \
in the Nacka nature reserve. This is where Stockholmers have practiced \
traditional Nordic wellness for generations — sauna, ice swimming, forest \
bathing. Every surface of the pier is coated in white frost crystals that \
catch the pre-dawn purple light. The familiar Hellasgården sauna buildings \
with their characteristic red wooden walls are visible on shore. At the \
pier's end, a floating sauna structure glows amber from within. The frozen \
lake surface stretches toward forested hills — Nacka's nature reserve is a \
wall of dark purple-green. The dawn sky is a deep gradient from indigo to \
electric violet.
CAMERA: Slow dolly forward along the Hellasgården pier, creating a sense of \
approach toward the warm sauna — the iconic walk every winter bather knows.
FOCUS: Wide — the frosted pier details in the foreground; the familiar red \
Hellasgården buildings on shore; the sauna and dawn sky ahead.
KEY ELEMENT: The Hellasgården pier as a pilgrimage path — every Stockholmer \
recognizes this walk from shore to sauna as the ritual beginning of the \
Nordic bathing experience.
ATMOSPHERE: Winter dawn at Hellasgården — bitterly cold. The frost is thick. \
The Nacka forest stands as a dark guardian around the frozen lake.
COLOR EMPHASIS: White frost with lavender (#a082e6) and electric violet \
(#9b0aa5) tints; deep purple (#2e008b) sky and frozen lake; Hellasgården's \
red buildings as warm contrast; warm amber from the sauna windows ahead; \
the Nacka forest is deep purple-green.
MOTION: Slow forward dolly; frost crystals catch and release light; the \
sauna's warm glow grows; the familiar red buildings pass at the frame edge; \
breath-like mist drifts at the pier surface.`),
  },
  {
    id: "floating-sauna-16",
    variationNumber: 16,
    dreamId: "floating-sauna",
    name: "Thermometer Rise",
    camera: "Macro time-lapse",
    focus: "Detail",
    keyElement: "Mercury/dial climbing, warm amber-violet lighting",
    atmosphere: "Warm, building",
    tags: ["heat", "sauna", "ritual", "glow"],
    prompt: compose(`\
SCENE: A traditional wooden sauna thermometer/hygrometer mounted on the wall. \
The camera captures the temperature dial at macro level as the reading climbs \
— the needle sweeping from the comfortable zone into the high-heat zone. The \
dial face is marked in vintage typography. The wooden housing catches warm \
amber light from the sauna's stove while purple light from outside the window \
creates a cool accent on the glass surface. Condensation beads form on the \
glass face.
CAMERA: Macro time-lapse feel — the needle's movement is the drama, \
everything else is near-static.
FOCUS: Detail — the needle and dial markings are crisp; the wooden housing \
frame softens at the edges.
KEY ELEMENT: The thermometer as the objective witness to the sauna's rising \
heat — a scientific instrument in a sensorial environment.
ATMOSPHERE: Warm, building. The temperature is climbing. The sauna is being \
prepared — the ritual has not yet begun but the conditions are being set.
COLOR EMPHASIS: Warm amber on the wooden housing; the dial face reflects both \
amber (stove) and electric violet (#9b0aa5) (window); the needle is dark \
against deep purple (#2e008b) dial markings; soft lavender (#a082e6) \
condensation droplets on the glass.
MOTION: The needle sweeps slowly upward; condensation droplets form and grow \
on the glass; the warm-cool light balance shifts as the stove builds heat; \
a subtle vibration from the heating wood structure.`),
  },
  {
    id: "floating-sauna-17",
    variationNumber: 17,
    dreamId: "floating-sauna",
    name: "Ripple Ring",
    camera: "Overhead",
    focus: "Detail",
    keyElement: "Single concentric ripple expanding on purple water",
    atmosphere: "Still, meditative",
    tags: ["water", "stillness", "zen", "minimal"],
    prompt: compose(`\
SCENE: Looking straight down at a perfectly still lake surface. A single \
water drop falls and strikes the surface, creating a set of concentric \
ripple rings that expand outward in a perfect circle. The water reflects the \
purple sky, so each ripple ring is a moving circle of light and dark purple. \
The ripples interact with the reflected image of the floating sauna, \
momentarily distorting its warm window glow into shimmering fragments. As \
the ripples reach the frame edge, the water returns to stillness.
CAMERA: Overhead — looking straight down at the water surface. Static. The \
geometry of the expanding circles is the entire composition.
FOCUS: Detail — the ripple edges are sharp; the reflected scene in the water \
is visible but secondary to the wave pattern.
KEY ELEMENT: The single ripple as a metaphor for the sauna experience — one \
action (a drop, a breath, a choice) creating expanding circles of effect.
ATMOSPHERE: Still, meditative. The world is so quiet that a single drop \
creates a visible event. Ultimate Nordic calm.
COLOR EMPHASIS: Deep purple (#2e008b) in the still water; the ripple crests \
catch soft lavender (#a082e6) and electric violet (#9b0aa5) sky reflections; \
warm amber fragments where the sauna reflection is distorted; the drop \
impact creates a momentary white flash.
MOTION: The drop impact; concentric ripples expanding at decreasing speed; \
the reflected sauna image fragmenting and reassembling; the slow return to \
perfect stillness.`),
  },
  {
    id: "floating-sauna-18",
    variationNumber: 18,
    dreamId: "floating-sauna",
    name: "Towel Fold",
    camera: "Slow-motion drape",
    focus: "Detail",
    keyElement: "White linen falling/draping in warm purple-amber light",
    atmosphere: "Warm, soft",
    tags: ["minimal", "zen", "ritual", "sauna"],
    prompt: compose(`\
SCENE: A white linen towel falls through the air in extreme slow motion, \
caught in a cross-light of warm amber from one side and electric violet from \
the other. The fabric billows, folds, and ripples as air catches it — each \
fold creating complex shadows in purple while the surfaces facing the warm \
light glow amber-white. The towel slowly settles onto a wooden bench, its \
folds recording the motion of its fall. The linen's weave texture is visible \
at the macro level.
CAMERA: Slow-motion drape — tracking the towel's descent from a 45-degree \
angle, close enough to see the fabric texture.
FOCUS: Detail — the nearest fabric folds are razor-sharp; the falling \
motion creates soft areas where the fabric is in between positions.
KEY ELEMENT: The white linen as a surface for the dual light — warm and \
purple — and as a symbol of the sauna's simplicity and purity.
ATMOSPHERE: Warm, soft. The moment after the sauna session — clean, calm, \
cared-for.
COLOR EMPHASIS: White linen with warm amber highlights and electric violet \
(#9b0aa5) shadows in the folds; the wooden bench below is deep amber with \
purple (#2e008b) in its grain; soft lavender (#a082e6) where the two light \
sources mix on the fabric; the falling motion blur has a pink (#eb5adc) \
tint.
MOTION: Ultra-slow-motion drape — the towel descends, billows, catches air, \
folds, and settles. Each fold is a unique event. The fabric's weight and \
texture dictate its behavior.`),
  },
  {
    id: "floating-sauna-19",
    variationNumber: 19,
    dreamId: "floating-sauna",
    name: "Window Condensation",
    camera: "Static with slow clear",
    focus: "Detail",
    keyElement: "Condensation on glass, purple lake visible beyond",
    atmosphere: "Warm interior, contrast",
    tags: ["steam", "contrast", "sauna", "water"],
    prompt: compose(`\
SCENE: The sauna's window is completely fogged with condensation. Through the \
misted glass, the purple lake and sky beyond are visible as soft, \
impressionist blurs of color — deep purple water, violet sky, a hint of \
distant island. A single streak appears as condensation begins to run, \
creating a clear channel through the fog. Through this channel, the outside \
world snaps into sharp, vivid purple clarity — a window within a window. More \
streaks follow, creating abstract vertical clear paths through the fog.
CAMERA: Static — close on the window surface. The clearing condensation is \
the action.
FOCUS: Detail — the condensation droplets on the glass are in focus; the \
world beyond shifts between soft (through fog) and sharp (through clear \
streaks).
KEY ELEMENT: The condensation as a veil between the warm interior world and \
the cold purple exterior — and the act of clearing it as a slow reveal.
ATMOSPHERE: Warm interior contrasting with cold exterior. The condensation is \
the visible boundary between two temperature zones.
COLOR EMPHASIS: The fogged glass is a neutral gray-lavender; the clear \
streaks reveal deep purple (#2e008b) water and electric violet (#9b0aa5) sky; \
soft lavender (#a082e6) in the diffused fog sections; the condensation \
droplets themselves catch warm amber from the interior.
MOTION: Condensation streaks slowly growing as gravity pulls water down; new \
clear channels appearing; the view through them sharpening; the purple \
outside world being gradually revealed in vertical stripes.`),
  },
  {
    id: "floating-sauna-20",
    variationNumber: 20,
    dreamId: "floating-sauna",
    name: "Candle Row",
    camera: "Slow dolly along",
    focus: "Detail",
    keyElement: "Row of candles flickering in wooden sauna interior",
    atmosphere: "Warm, intimate",
    tags: ["glow", "ritual", "wood", "zen"],
    prompt: compose(`\
SCENE: A row of small votive candles sits on the sauna's lower bench, their \
flames flickering in unison with the gentle air currents. The camera moves \
slowly along the row, passing each candle. Each flame is a warm amber core \
surrounded by a soft purple halo (from the ambient light mixing with the \
flame's warm tone). The candles cast dancing shadows on the wooden wall \
behind them — each shadow a moving silhouette that amplifies the flame's \
motion. The wood between the candles catches warm-cool light in alternating \
pools.
CAMERA: Slow dolly along the candle row at flame height, each candle passing \
through focus in sequence.
FOCUS: Detail — each candle flame is momentarily razor-sharp as the dolly \
passes, with the others falling to soft bokeh in both directions.
KEY ELEMENT: The candle flames as living light sources — each one unique, all \
responding to the same invisible air currents, creating a rhythm of light \
and shadow.
ATMOSPHERE: Warm, intimate. The candles are the only light source. The sauna \
is at rest — the heat session is complete, and this is the contemplative \
afterglow.
COLOR EMPHASIS: Warm amber flame cores; soft lavender (#a082e6) halos around \
each flame where warm and ambient light mix; deep purple (#2e008b) in the \
wall shadows; the wood between candles alternates between amber highlight \
and electric violet (#9b0aa5) shadow.
MOTION: Slow dolly; each flame flickers independently but in sympathetic \
rhythm; shadows dance on the wall; the focus shift from candle to candle \
creates a breathing, rack-focus effect.`),
  },
  {
    id: "floating-sauna-21",
    variationNumber: 21,
    dreamId: "floating-sauna",
    name: "Brunnsviken Ice Hole",
    camera: "Overhead drone",
    focus: "Wide",
    keyElement: "Ice hole on frozen Brunnsviken with Haga Park shoreline",
    atmosphere: "Winter, stark",
    tags: ["ice", "cold-plunge", "brunnsviken", "lake"],
    prompt: compose(`\
SCENE: Bird's-eye view of frozen Brunnsviken — the beautiful lake bordered by \
Haga Park and the university campus. The ice is white-gray with purple shadows \
and frost patterns. A dark circular hole has been cut in the ice near the Haga \
Park shore — a perfect black circle of open water that reads as a portal to \
another world. Next to the hole, a floating sauna sits in its own clear-water \
dock. Steam rises from the sauna's chimney — a white plume against the purple \
environment. Footprints in the frost lead from the sauna to the ice hole. \
The Haga Park royal lawns and ancient oaks are visible along the eastern \
shore; the university buildings are a geometric pattern on the western bank. \
The frozen lake is framed by Stockholm's distinctive mix of nature and \
architecture.
CAMERA: Overhead drone — high enough to see the sauna, ice hole, and the \
surrounding Brunnsviken context. Slow descent over 8 seconds.
FOCUS: Wide — the graphic elements (dark circle, white ice, sauna rectangle, \
Haga Park shoreline) are all sharp in a minimalist composition.
KEY ELEMENT: The ice hole as a dark portal in Brunnsviken's frozen surface — \
framed by Haga Park's royal nature, this is Stockholm's most refined \
setting for the primal act of ice bathing.
ATMOSPHERE: Winter, stark. The composition is almost abstract from above — \
but the recognizable Haga Park context anchors it in Stockholm.
COLOR EMPHASIS: White-gray ice with purple (#2e008b) shadows; the ice hole \
is near-black with electric violet (#9b0aa5) water reflections; soft lavender \
(#a082e6) in the frost patterns; warm amber from the sauna's windows; Haga \
Park's trees as dark purple-green; white steam against deep purple sky.
MOTION: Slow drone descent; the steam plume drifts; the black water in the \
ice hole shimmers; the descending perspective reveals Haga Park's landscape \
and the Brunnsviken shoreline in increasing detail.`),
  },
  {
    id: "floating-sauna-22",
    variationNumber: 22,
    dreamId: "floating-sauna",
    name: "Heat Waves",
    camera: "Static with distortion",
    focus: "Medium",
    keyElement: "Visible heat distortion rising from sauna roof",
    atmosphere: "Warm exterior",
    tags: ["heat", "sauna", "floating", "mist"],
    prompt: compose(`\
SCENE: The sauna's roof ventilates heat — visible as a shimmering column of \
heat distortion rising from the chimney and roof surface. The camera looks \
through this distortion at the purple sky and distant landscape beyond, which \
warp and ripple like a mirage. The heat distortion acts as a living lens, \
bending the straight horizon line into waves. The wooden roof surface below \
the distortion radiates warmth — its surface slightly steaming. A bird flying \
in the background passes through the distortion zone and momentarily warps.
CAMERA: Static — positioned to capture the heat distortion between the \
camera and the purple sky. The distortion itself is the subject.
FOCUS: Medium — the roof edge is sharp; the heat distortion zone is the \
visually active area; the sky beyond is rendered surreal by the bending.
KEY ELEMENT: Heat made visible — the sauna's invisible energy output \
rendered as a visual effect that transforms the purple landscape into a \
living painting.
ATMOSPHERE: Warm exterior — the sauna is radiating its heat into the cold \
purple air. The temperature difference creates a visible optical phenomenon.
COLOR EMPHASIS: The sky's electric violet (#9b0aa5) and deep purple (#2e008b) \
are distorted into wavy versions of themselves; soft lavender (#a082e6) in \
the lighter distortion zones; warm amber on the wooden roof surface; the \
distortion adds a pink (#eb5adc) chromatic shift at the wave edges.
MOTION: The heat distortion shimmers and ripples continuously; the sky and \
horizon warp in slow waves; steam wisps mix with the heat column; the distant \
bird warps as it passes through the distortion zone.`),
  },
  {
    id: "floating-sauna-23",
    variationNumber: 23,
    dreamId: "floating-sauna",
    name: "Södermalm Snow Scene",
    camera: "Slow wide",
    focus: "Wide",
    keyElement: "Snowfall over Riddarfjärden with Södermalm cliff visible",
    atmosphere: "Winter dusk, snow",
    tags: ["riddarfjarden", "sodermalm", "stillness", "contrast"],
    prompt: compose(`\
SCENE: Gentle snowfall over Riddarfjärden where the floating sauna sits, with \
the dramatic cliff face of Södermalm — Stockholm's creative south island — \
rising as a dark wall behind it. The iconic Södermalm skyline is visible \
along the cliff top: Monteliusvägen's viewing terraces, the distinctive \
rooftops of Mariaberget, and the church spire of Maria Magdalena kyrka, all \
softened by the falling snow. Large, slow snowflakes descend through the \
frame, each one catching the purple dusk light. The floating sauna is \
centered in the composition between the vast cliff and the open water, its \
warm-lit windows creating amber rectangles against the purple-gray \
environment. The Riddarfjärden surface is dark and still.
CAMERA: Slow wide — static or with an almost imperceptible drift. The \
snowfall is the motion; Södermalm's cliff is the backdrop.
FOCUS: Wide — the sauna is sharp at center; Södermalm's cliff face and \
rooftops provide dramatic scale; snowflakes vary from large and soft to \
tiny distant points.
KEY ELEMENT: The floating sauna dwarfed by Södermalm's cliff — a small, \
warm human refuge at the base of the city's most dramatic natural feature, \
veiled in falling snow.
ATMOSPHERE: Winter dusk with snowfall over Riddarfjärden. Stockholm's south \
cliff looms protectively. The snow muffles the city.
COLOR EMPHASIS: White snowflakes with lavender (#a082e6) tint; deep purple \
(#2e008b) sky and Södermalm cliff shadow; electric violet (#9b0aa5) at the \
horizon; warm amber from the sauna windows; Södermalm's rooftop lights as \
tiny warm points along the cliff top.
MOTION: Snowflakes descend in slow, irregular paths; the sauna's chimney \
steam mixes with the snow; warm window glow flickers; the Södermalm cliff \
face catches and releases snow in patterns.`),
  },
  {
    id: "floating-sauna-24",
    variationNumber: 24,
    dreamId: "floating-sauna",
    name: "Ladle Pour",
    camera: "Slow-motion",
    focus: "Detail",
    keyElement: "Water being poured from wooden ladle onto stones",
    atmosphere: "Warm interior",
    tags: ["ritual", "steam", "heat", "sauna"],
    prompt: compose(`\
SCENE: A wooden ladle tips and water pours in a single, elegant stream onto \
the sauna stones below. In slow motion, the water stream catches the light \
— it is a glass-like cylinder that refracts the warm amber stone-glow and \
the purple ambient light simultaneously. Where the stream hits the first \
stone, it shatters into droplets and steam. The stream itself has a hypnotic \
quality — its surface ripples and twists as gravity pulls it downward. The \
ladle's wooden bowl is visible at the top of frame, its grain and patina \
telling years of use.
CAMERA: Slow-motion, positioned to capture the full arc of the pour — from \
ladle tip to stone impact — in a vertical composition.
FOCUS: Detail — the water stream is the sharp subject at the center; the \
ladle above and the stones below are slightly soft.
KEY ELEMENT: The water stream as a liquid bridge between the wooden ladle \
(human intent) and the hot stones (natural element) — the ritual's central \
gesture.
ATMOSPHERE: Warm interior at peak temperature. The pour is the ceremonial \
act that transforms heat into steam, stone into experience.
COLOR EMPHASIS: The water stream refracts both amber (from stones) and \
electric violet (#9b0aa5) (from ambient) as internal caustics; the stone \
surfaces are deep amber with purple (#2e008b) shadows; the steam explosion \
at impact is white blooming to lavender (#a082e6); the ladle's wood is warm \
honey with purple grain shadows.
MOTION: The water stream descends in slow motion, its surface alive with \
tension and internal light; the impact point erupts in steam and spray; \
the ladle tilts imperceptibly, controlling the flow; steam rises from below.`),
  },
  {
    id: "floating-sauna-25",
    variationNumber: 25,
    dreamId: "floating-sauna",
    name: "Saltsjön Dawn",
    camera: "Slow dolly back",
    focus: "Wide",
    keyElement: "Sauna silhouette on Saltsjön with Djurgården visible at dawn",
    atmosphere: "Dawn, clear",
    tags: ["floating", "saltsjon", "djurgarden", "zen"],
    prompt: compose(`\
SCENE: The floating sauna in silhouette against a breaking dawn sky over \
Saltsjön — the salt-water inlet that connects Stockholm to the Baltic Sea. \
The sky transitions from deep purple at the top through electric violet to \
a band of hot pink at the horizon where the sun is about to appear. The \
sauna is a dark geometric shape — a rectangle with its chimney — centered \
in the frame. Behind it, the familiar green silhouette of Djurgården island \
is visible — its oak canopy and the profile of Nordiska Museet recognizable \
even in silhouette. To the right, the entrance to Stockholm's inner harbor \
and the distant Gröna Lund ferris wheel structure are faintly visible. A \
faint glow of dying fire light escapes from the sauna's window — a warm \
amber slit in the dark form. Saltsjön's surface mirrors everything. A \
single bird flies from Djurgården across the purple sky.
CAMERA: Slow dolly back — starting relatively close to the sauna, pulling \
away over 8 seconds to reveal the Saltsjön panorama and Stockholm's \
waterfront landmarks.
FOCUS: Wide — the sauna silhouette is a graphic element; the dawn sky, \
Djurgården's silhouette, and Saltsjön's reflections fill the composition.
KEY ELEMENT: The sauna on Saltsjön at dawn — where Stockholm's salt water \
meets the Baltic, with the city's cultural island as backdrop. The session \
ends as the city awakens.
ATMOSPHERE: Dawn, clear over Saltsjön. The first light arrives from the \
Baltic. The sauna session is ending. A new Stockholm day begins in the \
Electric Purple palette.
COLOR EMPHASIS: Deep purple (#2e008b) sky at top; electric violet (#9b0aa5) \
mid-sky; pink (#eb5adc) at the horizon; soft lavender (#a082e6) in the mist \
over Saltsjön; warm amber window slit; Djurgården silhouette in near-black \
(#34303d); the lake mirrors all colors one shade darker.
MOTION: Slow dolly back; the sauna shrinks; Djurgården and the harbor \
entrance reveal themselves; the dawn sky brightens; the bird crosses; mist \
wisps drift off Saltsjön; the fire glow flickers its last.`),
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
