# Electric Dreams — AI Video Production Guide

> **IQOS Electric Purple** · Summer 2026 Campaign · VML for PMI

---

## Project Overview

| | |
| --- | --- |
| **Client** | PMI / IQOS |
| **Agency** | VML |
| **Campaign** | Electric Purple — Electric Dreams |
| **Market** | Global (Worldwide Destinations) |
| **Deliverable** | 75 AI-generated videos (25 per dream) |
| **Duration** | 8 seconds each |
| **Aspect Ratio** | 9:16 (vertical / mobile-first) |
| **Resolution** | 720p |
| **Generation Tool** | WPP Open Creative Studio |

The landing page features a widget where users choose from 3 "Electric Dreams." Upon selection, a random video from a pool of 25 is played. All 75 videos are pre-generated with AI before launch.

---

## The 3 Dreams

| # | Dream | Theme | Videos |
| --- | --- | --- | --- |
| 1 | **Archipelago Sunset Cruise** | Nature / Sea / Purple Sunset / Worldwide | 25 |
| 2 | **Gröna Lund Live Concert** | Music / Neon / Night Energy | 25 |
| 3 | **Floating Sauna Experience** | Wellness / Steam / Stillness | 25 |

---

## Brand Color Palette

Every frame must feel immersed in the Electric Purple palette. These are the exact hex values for color grading:

| Color | Hex | Role |
| --- | --- | --- |
| 🟣 Deep Purple | `#2E008B` | Primary shadow tone, dominant in dark areas |
| 🟣 Electric Violet | `#9B0AA5` | Mid-tone highlights, water reflections |
| 🟣 Soft Lavender | `#A082E6` | Sky gradients, mist, soft highlights |
| 🩷 Pink | `#EB5ADC` | Accent on foam, sparkles, warm highlights |
| 🔵 Electric Blue | `#3750DC` | Cool accents, water depth, night sky |
| 🔵 Light Blue | `#7DA0EB` | Zenith sky reflections, cold water |

---

## WPP Creative Studio — Interface Settings

Configure these settings once before generating. They stay the same for all 75 videos.

| Setting | Value |
| --- | --- |
| **Aspect Ratio** | Portrait (9:16) |
| **Resolution** | 720p |
| **Duration** | 8 seconds (slider to max) |
| **Person Generation** | Don't Allow / Restrict |
| **Generate Audio** | OFF |

---

## Negative Prompt (same for all 75 videos)

Paste this into the **Negative Prompt** field. Use the same text for every video.

```
Close-up faces, identifiable people, recognizable facial features, product placement, brand logos, text overlays, UI elements, watermarks, visible AI generation artifacts, glitches, morphing, flickering, digital noise, oversharpening, jump cuts, abrupt transitions, modern UI graphics, phone screens, social media interfaces, low quality, blurry, pixelated, overexposed, underexposed, yellow light, yellow sun, yellow sky, orange light, orange sun, orange sky, amber light, amber tones, golden tones, golden light, golden sun, warm yellow, green trees, green leaves, green grass, green vegetation, green forests, green islands, teal water, cyan water, turquoise water, aqua, red tones, brown tones, beige, tan, earth tones, warm brown, realistic natural colors, natural daylight colors, natural green foliage, any color outside the purple-violet-lavender-pink-blue palette
```

---

## Master Visual Style

This visual language is embedded in every prompt. It ensures consistency across all 75 videos.

### Color Grading

Every frame uses the Electric Purple palette. Shadows lean into deep indigo-purple (`#2E008B`). Mid-tones are slightly desaturated. Highlights bloom into lavender (`#A082E6`), pink (`#EB5ADC`), or electric blue (`#7DA0EB`). Purple-sunset warmth carries a violet haze underneath.

### Cinematic Language

Smooth, slow-motion-adjacent camera movements. No jump cuts or abrupt transitions. Shallow depth of field with anamorphic bokeh. Subtle lens flares when light hits the lens. Every movement feels weightless — like drifting through a lucid dream.

### Lighting

Pink-lavender warmth filtered through purple atmospheric haze. Strong backlight — silhouettes and rim-light encouraged. Volumetric light (god-rays, light shafts through mist/steam) when the scene supports it. Practicals (candles, string lights, neon, embers) cast warm pools that bleed into surrounding purple tones.

### Texture

Subtle filmic grain (organic, not digital noise). Slightly halated highlights reminiscent of Kodak Vision3 500T pushed one stop. Chromatic aberration on extreme edges only. The image should feel tactile and analog.

### Constraints

- **No close-up faces** or identifiable people (GDPR). Distant silhouettes or anonymous body parts (hands, shoulders from behind) are acceptable.
- **No product placement**, brand logos, or text overlays.
- **No UI elements**, watermarks, or visible AI artifacts.
- **Loop-friendly motion**: first and last frames should have similar luminance and composition energy for seamless replay.
- **Mood**: Aspirational, sensorial, immersive — "dreaming with your eyes open."

---

## Tag Taxonomy

Tags are used for internal organization during review/approval and potential future widget filtering.

**Global tags** (all videos): `electric-purple`, `electric-dreams`, `iqos`, `summer-2026`, `worldwide`, `8s`, `vertical`, `ai-generated`

**Archipelago Sunset Cruise**: `nature`, `sea`, `sunset`, `cruise`, `archipelago`, `pink-violeten-hour`, `water`, `islands`, `boat`, `horizon`, `reflections`, `waves`, `calm`, `serenity`, `nordic`, `twilight`, `silhouette`, `deck`, `wake`, `sky`, `paris`, `rome`, `santorini`, `maldives`, `venice`, `dubai`, `sydney`, `bangkok`, `lisbon`, `iceland`, `whitsundays`, `amalfi`, `norway`, `new-york`, `istanbul`, `ha-long-bay`, `new-zealand`, `australia`, `lofoten`, `mexico`, `como`, `ireland`, `dubrovnik`, `egypt`, `nile`

**Gröna Lund Live Concert**: `music`, `concert`, `festival`, `night`, `lights`, `stage`, `crowd`, `energy`, `neon`, `bass`, `rhythm`, `amusement-park`, `ferris-wheel`, `lasers`, `confetti`, `speakers`, `vibration`, `electric`, `strobe`, `atmosphere`, `new-york`, `london`, `tokyo`, `berlin`, `rio`, `coachella`, `nashville`, `paris`, `havana`, `las-vegas`, `ibiza`, `tomorrowland`, `santa-monica`, `amsterdam`, `hollywood`, `cappadocia`, `detroit`, `sydney`, `dubai`, `hong-kong`, `glastonbury`, `marrakech`

**Floating Sauna Experience**: `wellness`, `sauna`, `steam`, `water`, `heat`, `cold-plunge`, `stillness`, `wood`, `floating`, `lake`, `minimal`, `breath`, `mist`, `glow`, `ritual`, `contrast`, `ice`, `embers`, `zen`, `immersion`, `iceland`, `norway`, `kyoto`, `istanbul`, `marrakech`, `swiss-alps`, `lake-bled`, `lapland`, `azores`, `bali`, `cenote`, `finland`, `tromso`, `budapest`, `dead-sea`, `santorini`, `capri`, `abisko`, `sahara`, `hallstatt`, `bangkok`, `taj-mahal`

---

## Production Workflow

1. Open WPP Creative Studio
2. Set interface settings: **Portrait 9:16**, **720p**, **8s**, **Person Generation: Restrict**, **Audio: OFF**
3. Paste the **Negative Prompt** (once — it stays for the session)
4. Start with Dream 1 below — copy the prompt from each variation
5. Paste into the **Prompt** field and generate
6. Review the output. If it doesn't match, regenerate (the tool is non-deterministic)
7. Save with the naming convention: `[dream-id]-[number].mp4` (e.g. `archipelago-01.mp4`)
8. Repeat for all 25 variations, then move to the next dream

**Estimated time**: ~2-4 min per video (generation + review) = ~3-5 hours for all 75

---

---

# 🌅 Dream: Archipelago Sunset Cruise

> Nature, purple sunset, and iconic worldwide waterways — 25 cinematic variations of a dream boat journey through the world's most beautiful destinations bathed in purple light.

| # | Variation | Camera | Focus | Key Element | Atmosphere |
| --- | --- | --- | --- | --- | --- |
| 1 | **Paris Seine Wake** | Tracking behind boat | Wide | Boat wake splitting purple-pink Seine River, Eiffel Tower silhouette | Purple sunset, clear sky |
| 2 | **Rome Tiber Pass** | Slow lateral dolly | Wide | Castel Sant'Angelo silhouetted against violet sky from the Tiber | Purple sunset, haze |
| 3 | **Santorini Deck Reflections** | Static low-angle | Detail | Polished deck reflecting caldera sunset, white buildings visible | Purple sunset, calm |
| 4 | **Maldives Horizon Melt** | Slow crane rising | Ultra-wide | Infinite Indian Ocean horizon with overwater bungalow silhouettes | Blue hour, mist |
| 5 | **Venice Canal Ripples** | Macro, slight drift | Extreme detail | Grand Canal water ripples catching violet light from palazzo facades | Purple sunset |
| 6 | **Dubai Creek Overhead** | Top-down drone | Overhead | Boat approaching Dubai Creek with Burj Khalifa and skyline visible | Twilight, clear |
| 7 | **Sydney Harbour Spray** | Low-angle from bow | Medium | Spray of water with Opera House visible through purple backlight | Sunset, backlit |
| 8 | **Bangkok River Glow** | Slow orbit | Medium | River lanterns and lights with Wat Arun temple silhouette | Blue hour |
| 9 | **Lisbon Sail Silhouette** | Static wide | Wide | Sailboat silhouette with Torre de Belém and Tagus River | Sunset |
| 10 | **Iceland Aurora Shimmer** | Slow tilt up | Wide | Aurora borealis above Jökulsárlón glacier lagoon with icebergs | Night, clear |
| 11 | **Whitsundays Wave Texture** | Tracking alongside | Detail | Ocean surface near Whitehaven Beach with electric violet undertones | Purple sunset |
| 12 | **Amalfi Harbour Light** | Dolly forward | Wide | Positano village clinging to cliffside, harbour lights glowing | Twilight, foggy |
| 13 | **Fjord Sunset Burst** | Static | Wide | Sun touching horizon between Geirangerfjord mountain walls | Sunset peak |
| 14 | **Brooklyn Bridge Rope & Rail** | Slow pan | Detail | Nautical rope on railing, Brooklyn Bridge bokeh behind | Purple sunset |
| 15 | **Bosphorus Passage** | Slow dolly between | Wide | Boat entering the Bosphorus strait with mosque silhouettes | Purple sunset, haze |
| 16 | **Ha Long Bay Glass** | Low-angle skim | Detail | Glassy water reflecting karst limestone pillars in purple light | Blue hour, dead calm |
| 17 | **Milford Sound Cathedral** | Tilt up from water | Wide | Dramatic clouds lit purple between Milford Sound mountain walls | Sunset, dramatic clouds |
| 18 | **Reef Wake Symmetry** | Following drone | Overhead | V-shaped wake stretching over deep purple Great Barrier Reef waters | Purple sunset |
| 19 | **Lofoten Midnight Sun** | Static wide | Ultra-wide | Midnight sun over iconic Reine fishing village in the Lofoten Islands | Nordic summer midnight |
| 20 | **Cenote Anchor Drop** | Slow downward tilt | Medium | Chain dropping into deep crystal-purple cenote water in Mexico | Dusk |
| 21 | **Lake Como Villa Shore** | Dolly past foreground | Layered | Villa-lined shores with cypress trees framing a boat on Lake Como | Purple sunset |
| 22 | **Cliffs of Moher Foam** | Tracking close | Detail | Churning foam against the dramatic Cliffs of Moher | Sunset, backlit |
| 23 | **Dubrovnik Panorama** | Slow 180-degree pan | Ultra-wide | Panoramic view of Dubrovnik old town walls from the sea | Blue hour |
| 24 | **Nile Mast & Stars** | Tilt from deck to sky | Vertical | Felucca mast leading eye to stars above ancient Nile temples | Night onset |
| 25 | **Giza Pyramid Sunset** | Slow zoom out | Wide | Sun setting behind the Pyramids of Giza from the Nile | Sunset end |

---


### 1. Paris Seine Wake

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-01` |
| **Camera** | Tracking behind boat |
| **Focus** | Wide |
| **Key Element** | Boat wake splitting purple-pink Seine River, Eiffel Tower silhouette |
| **Atmosphere** | Purple sunset, clear sky |
| **Tags** | `sunset` `wake` `pink-violeten-hour` `water` `paris` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A sleek river cruise boat glides along the Seine River in Paris at pink-violeten hour. The camera follows from behind, centered on the soft lavender V-shaped wake that splits the water into two shimmering curtains — one side catching the sinking pink-lavender sun, the other side reflecting deep violet sky. The iconic Eiffel Tower silhouette rises in the background against the purple sky, while stone bridges arch over the Seine ahead. The wake's foam catches pink and lavender highlights. Tracking behind the vessel at water level, drifting slowly upward over 8 seconds to reveal more of the Parisian skyline and the Eiffel Tower. Wide — the boat occupies the lower third, the wake fills the middle, and the purple-pink sky with the Eiffel Tower dominates the top. The V-shaped wake acts as leading lines that pull the eye toward the violet horizon and the Eiffel Tower silhouette. Purple sunset with clear sky. Warm pink-lavender sunlight from the left, filtered through a purple atmospheric haze that tints the shadows indigo. Pink-to-purple gradient on the water surface; deep purple (#2e008b) in the shadows of the bridges and tower; soft lavender (#a082e6) in the sky near the horizon; pink (#eb5adc) catching on the foam crests. The boat moves steadily forward; the wake expands rhythmically; gentle ripples propagate outward; Parisian landmarks slide past in parallax.
```

</details>

---


### 2. Rome Tiber Pass

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-02` |
| **Camera** | Slow lateral dolly |
| **Focus** | Wide |
| **Key Element** | Castel Sant'Angelo silhouetted against violet sky from the Tiber |
| **Atmosphere** | Purple sunset, haze |
| **Tags** | `silhouette` `pink-violeten-hour` `rome` `tiber` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

The camera moves laterally along the waterline of the Tiber River in Rome at dusk. The iconic Castel Sant'Angelo rises on the right bank in the mid-ground, its cylindrical fortress and angel statue silhouetted against a sky of violet, lavender, and deep violet-pink. The water of the Tiber catches fragments of the sky's color — electric violet in the troughs, pink-violet on the wave crests. The Ponte Sant'Angelo bridge with its baroque angel statues stretches across the river in the foreground, its stone arches reflected in the purple water. A thin atmospheric haze softens the dome of St. Peter's Basilica on the far horizon into purple silhouettes layered in depth. Slow lateral dolly at water level, left to right, revealing the Castel and the bridge in a cinematic parallax. Wide — foreground water detail yields to the sharp Castel mid-ground and a hazy Vatican skyline behind. Castel Sant'Angelo as an iconic Roman sentinel — its distinctive cylindrical profile and angel statue instantly recognizable against the violet-purple sky. Purple sunset with low atmospheric haze. The sun is just off-frame left, casting long warm sidelight that rakes across the Castel walls. Deep purple (#2e008b) on the fortress stone shadows; electric violet (#9b0aa5) on the mid-ground water; soft lavender (#a082e6) in the haze over St. Peter's dome; pink-violet and pink (#eb5adc) on the sunlit Castel walls. Gentle lateral drift revealing the Castel from different angles; water laps softly against the ancient stone embankment; the angel statues on the bridge stand sentinel; a distant bird glides across the violet sky.
```

</details>

---


### 3. Santorini Deck Reflections

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-03` |
| **Camera** | Static low-angle |
| **Focus** | Detail |
| **Key Element** | Polished deck reflecting caldera sunset, white buildings visible |
| **Atmosphere** | Purple sunset, calm |
| **Tags** | `deck` `reflections` `calm` `pink-violeten-hour` `santorini` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Low-angle shot from deck level of a polished teak boat deck anchored in the Santorini caldera. The wood is wet from sea spray, creating a mirror-like surface that reflects the purple-pink sunset sky above. A coiled nautical rope sits in the left third of frame. In the background, the iconic white-washed buildings of Oia cling to the caldera cliff edge, their domes and walls rendered as soft lavender silhouettes against the violet sky. Warm pink-lavender light spills across the deck from the right while purple shadows pool between the planks. Static, positioned just inches above the deck surface, with a very slight forward drift over 8 seconds. Detail — shallow depth of field keeps the nearest planks sharp while the white buildings of Santorini and the horizon melt into soft lavender bokeh. The wet deck surface acting as a mirror for the sky's purple-to-pink-violet gradient, with Santorini's caldera silhouette beyond. Purple sunset, dead calm. No wind. The reflection on the deck is almost perfect — a second sky beneath the viewer's feet. Warm pink-lavender and soft lavender (#a082e6) reflected on the wet wood; deep purple (#2e008b) in the plank gaps and shadows; pink (#eb5adc) highlights on the rope fibers catching the sun; white buildings tinted lavender. A single water droplet slides slowly across the polished surface; the reflected clouds drift imperceptibly; the boat sways with the gentlest rocking.
```

</details>

---


### 4. Maldives Horizon Melt

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-04` |
| **Camera** | Slow crane rising |
| **Focus** | Ultra-wide |
| **Key Element** | Infinite Indian Ocean horizon with overwater bungalow silhouettes |
| **Atmosphere** | Blue hour, mist |
| **Tags** | `horizon` `twilight` `sea` `calm` `maldives` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

The camera starts just above the Indian Ocean surface in the Maldives — close enough to see individual ripples — then slowly cranes upward to reveal an endless horizon where the dark sea merges with a gradient sky that transitions from deep indigo at the top through electric violet to a thin band of residual pink-lavender at the horizon line. Silhouettes of overwater bungalows stretch along a sandbar to the right, their thatched roofs and stilts creating a distinctive Maldivian profile. A low mist hugs the water surface, diffusing into lavender wisps. The sea is nearly still, with long, slow swells. Slow crane rise — starts at 30cm above water, ends at roughly 3m, maintaining the horizon at the center of frame throughout. Ultra-wide — the horizon line is the subject, stretching edge to edge, with overwater bungalows punctuating the silhouette. The precise line where ocean and sky meet, blurred by mist into an ambiguous, dreamlike boundary, with the Maldivian bungalows as anchors. Blue hour, 20 minutes after sunset. The light is cold and ethereal, filtered through a thin mist layer that glows faintly violet. Deep purple (#2e008b) dominating the water and upper sky; electric violet (#9b0aa5) at the horizon glow; soft lavender (#a082e6) in the mist; a whisper of electric blue (#3750dc) in the water highlights. The crane rise is the primary motion; the mist drifts slowly right to left; long ocean swells undulate in slow motion.
```

</details>

---


### 5. Venice Canal Ripples

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-05` |
| **Camera** | Macro, slight drift |
| **Focus** | Extreme detail |
| **Key Element** | Grand Canal water ripples catching violet light from palazzo facades |
| **Atmosphere** | Purple sunset |
| **Tags** | `water` `reflections` `waves` `pink-violeten-hour` `venice` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Extreme close-up of the Grand Canal surface in Venice. Each ripple acts as a tiny curved mirror reflecting a different slice of the sunset sky and the ornate palazzo facades lining the canal — some crests catch pink-violet, others catch electric violet, others catch pink. The water between the ripples is dark indigo-purple, creating a mosaic of moving color. Occasional micro-bubbles catch the light as tiny pinpoints. The distorted reflections of Gothic arched windows and balconies from the palazzos shimmer in the water. Macro lens hovering just above the canal surface with a gentle lateral drift, as if floating on the current of a passing gondola. Extreme detail — individual ripple crests are razor-sharp; the troughs soften into bokeh. The Grand Canal water surface acting as a fragmented, living canvas of the purple-violet palette, with palazzo reflections adding depth. Purple sunset — warm directional light from a low angle creates specular highlights on every ripple crest. Electric violet (#9b0aa5) and pink-violet alternating on ripple crests; deep purple (#2e008b) in the troughs; pink (#eb5adc) specular highlights; light blue (#7da0eb) reflections from the zenith sky. Ripples propagate diagonally across frame in slow motion; light dances across the surface in a hypnotic, rhythmic pattern.
```

</details>

---


### 6. Dubai Creek Overhead

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-06` |
| **Camera** | Top-down drone |
| **Focus** | Overhead |
| **Key Element** | Boat approaching Dubai Creek with Burj Khalifa and skyline visible |
| **Atmosphere** | Twilight, clear |
| **Tags** | `boat` `dubai` `skyline` `aerial` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Bird's-eye view looking straight down at a traditional wooden dhow cruising along Dubai Creek — the historic waterway that splits the city into Deira and Bur Dubai. The towering Burj Khalifa pierces the skyline in the distance, its spire catching the last violet light. The modern Dubai skyline clusters along the far shore with its distinctive skyscrapers rendered as purple silhouettes. The water of the Creek is a deep electric violet, catching lavender and pink highlights where the twilight sky reflects. The dhow's wake draws a perfect white line through the purple water. Traditional souks and waterfront buildings line the near shore. Top-down drone, slowly rotating clockwise (about 15 degrees over 8 seconds) to add a subtle vertiginous drift. Overhead — the dhow is small in frame, emphasizing the Creek's serpentine path and the dramatic skyline beyond. Dubai Creek as the historic heart of the city — the old souks visible below, the futuristic skyline with Burj Khalifa piercing the purple sky. Twilight — the sky provides even, diffused purple light with no hard shadows. Clear air, no haze. Deep purple (#2e008b) water; electric violet (#9b0aa5) in the open water reflections; the Burj Khalifa catches soft lavender (#a082e6) light; the dhow's white hull is the single bright moving element; wake foam tinted lavender (#a082e6). The dhow crawls forward leaving its white wake; the drone rotates slowly; tiny ripples spread outward from the boat's passage; lights begin to glow across the Dubai skyline.
```

</details>

---


### 7. Sydney Harbour Spray

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-07` |
| **Camera** | Low-angle from bow |
| **Focus** | Medium |
| **Key Element** | Spray of water with Opera House visible through purple backlight |
| **Atmosphere** | Sunset, backlit |
| **Tags** | `water` `boat` `waves` `sunset` `sydney` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Shot from the bow of a harbour ferry, looking forward and slightly down. The prow cuts through Sydney Harbour water, sending up curtains of fine spray on both sides. The spray is backlit by the setting sun, turning each droplet into a tiny prism of pink-violet, violet, and pink. Through the spray, the iconic Sydney Opera House sail-shell roofline is visible but softened, its white shells catching purple and lavender light. The Harbour Bridge arches across the background. The polished brass fitting on the bow catches a warm purple-pink reflection. Low-angle, mounted near the waterline on the bow, with a subtle forward lean as the boat rises and dips on gentle harbour swells. Medium — the spray curtain is the sharp subject; the Opera House beyond is soft and dreamy. Backlit spray droplets acting as prisms for the purple-violet palette, with the Opera House silhouette emerging through the mist. Sunset with strong backlight. The sun is low and directly ahead, creating a corona effect filtered through the spray. Pink (#eb5adc) and lavender in the backlit spray; electric violet (#9b0aa5) in the water; deep purple (#2e008b) in the shadowed hull; soft lavender (#a082e6) in the sky and on the Opera House shells. Continuous spray arcing upward and falling back; the boat rocks gently on swells; droplets hang in slow motion mid-air.
```

</details>

---


### 8. Bangkok River Glow

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-08` |
| **Camera** | Slow orbit |
| **Focus** | Medium |
| **Key Element** | River lanterns and lights with Wat Arun temple silhouette |
| **Atmosphere** | Blue hour |
| **Tags** | `twilight` `calm` `reflections` `bangkok` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A string of traditional Thai lanterns and Edison-bulb lights stretches across a river boat's deck on the Chao Phraya River in Bangkok. Their pink-lavender glow creates pools of warm light on the wooden surface. Beyond the deck railing, the magnificent silhouette of Wat Arun — the Temple of Dawn — rises against the blue-hour sky in deep electric violet gradient. The temple's iconic prang (tower) and its ornate spire are unmistakable. The lanterns' light reflects on polished brass fittings and glass surfaces on deck. A wine glass sits on a small table, catching both the pink-lavender lantern light and the violet sky. Slow orbit around the lantern string, moving roughly 30 degrees over 8 seconds, keeping the lights and Wat Arun in constant relationship. Medium — the nearest lantern bulb is in focus with soft lavender bokeh on the more distant bulbs and the purple temple silhouette. The warm pink-lavender of the lanterns against the cold violet of the twilight sky and Wat Arun's silhouette — a temperature contrast that unifies in the purple-violet palette. Blue hour — the sky is luminous violet-blue; the deck is lit only by the practical lanterns; Wat Arun glows with subtle purple uplighting. Warm pink-lavender/pink-violet from lanterns; deep purple (#2e008b) sky; electric violet (#9b0aa5) at the horizon and temple silhouette; soft lavender (#a082e6) bokeh on distant lights; the wine glass catches pink (#eb5adc) reflections. Slow orbital drift; lanterns sway gently with the boat's rocking; the wine glass surface trembles with micro-ripples; distant long-tail boats glide past on the Chao Phraya.
```

</details>

---


### 9. Lisbon Sail Silhouette

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-09` |
| **Camera** | Static wide |
| **Focus** | Wide |
| **Key Element** | Sailboat silhouette with Torre de Belém and Tagus River |
| **Atmosphere** | Sunset |
| **Tags** | `silhouette` `sunset` `boat` `sky` `lisbon` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A classic Portuguese sailboat in perfect silhouette against a sky that bleeds from deep pink-lavender at the horizon through electric violet to deep purple overhead. The sails are full but the boat moves slowly — the scene is about stillness, not speed. To the right, the Torre de Belém stands as a recognizable landmark on the Tagus River shore, its Manueline tower rendered as a dark profile against the violet sky. The water of the Tagus below is a dark mirror, reflecting the sky's gradient in muted, deeper tones. The 25 de Abril Bridge spans the distant background as a dark line. Static wide shot. The boat is positioned at the rule-of-thirds intersection, left third of frame. No camera movement — the stillness is the point. Wide — everything from the water's edge to the clouds is in focus, creating a painterly depth with Torre de Belém as a geographic anchor. The stark black silhouette of the sailboat's mast, rigging, and hull against the intensely colored sky, with Torre de Belém identifying Lisbon. Peak sunset — the sky is at maximum saturation. No clouds, just pure gradient over the Tagus. The sky is the canvas — pink-lavender at bottom, electric violet (#9b0aa5) in the middle, deep purple (#2e008b) at the top. The water mirrors this but two stops darker. The silhouette is pure black (#34303d). Minimal — the boat drifts almost imperceptibly; the water surface shimmers with slow, oily undulations; the reflected colors shift subtly.
```

</details>

---


### 10. Iceland Aurora Shimmer

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-10` |
| **Camera** | Slow tilt up |
| **Focus** | Wide |
| **Key Element** | Aurora borealis above Jökulsárlón glacier lagoon with icebergs |
| **Atmosphere** | Night, clear |
| **Tags** | `sky` `aurora` `iceland` `serenity` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

The camera starts on dark silhouettes of icebergs floating in Jökulsárlón glacier lagoon in Iceland, reflected in still water, then tilts slowly upward to reveal a sky where the deep purple of night is alive with shimmering curtains of violet-tinted aurora borealis, interweaving with the dominant violet and lavender tones. The distinctive diamond-shaped icebergs of Jökulsárlón catch purple and lavender reflections on their surfaces. Stars are faintly visible. The water below mirrors both the aurora and the purple sky, with icebergs creating dark geometric shapes in the reflection. Slow tilt up — starts on water reflection and icebergs, ends on the aurora-tinged sky. Steady, meditative pace. Wide — sharp from the iceberg silhouettes to the stars. The aurora borealis draped across the sky above Iceland's most iconic glacier lagoon — violet and lavender curtains dancing over the icebergs. Clear Icelandic night. The air is perfectly still. The temperature of the light is cold but alive with subtle color shifts from the aurora. Deep purple (#2e008b) as the base sky; electric violet (#9b0aa5) and soft lavender (#a082e6) in the aurora curtains (with faint lavender accents); electric blue (#3750dc) in the star reflections on water and iceberg surfaces. The tilt is the primary motion; the aurora shimmers in slow, undulating curtains; stars twinkle subtly; water reflects everything in gentle distortion; icebergs drift almost imperceptibly.
```

</details>

---


### 11. Whitsundays Wave Texture

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-11` |
| **Camera** | Tracking alongside |
| **Focus** | Detail |
| **Key Element** | Ocean surface near Whitehaven Beach with electric violet undertones |
| **Atmosphere** | Purple sunset |
| **Tags** | `waves` `water` `reflections` `whitsundays` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

The camera travels alongside a boat at water level in the Whitsunday Islands, focused on the Coral Sea surface texture near Whitehaven Beach. The water has a deep electric violet base color with pink-violeten-hour light painting every wave crest in pink-lavender. The interaction between the hull's pressure wave and the pristine waters creates complex, mesmerizing patterns — standing waves, interference patterns, and tiny vortices. The pure silica sand of Whitehaven Beach is faintly visible beneath the shallow water at the edge of frame, tinted lavender. Tracking alongside the hull at water level, matching the boat's speed, focused on the 2-meter zone where hull meets water. Detail — the nearest wave textures are sharp; background water softens into an impressionist blur of violet and pink-violet with Whitsunday islands distant. The complex fluid dynamics of water against hull, painted in purple and pink-violet, above the world-famous Whitehaven sand. Purple sunset — low-angle sunlight rakes across the wave texture, exaggerating every crest and trough with dramatic light and shadow. Electric violet (#9b0aa5) in the wave troughs and shadows; pink-violet crests; deep purple (#2e008b) in the deeper water; occasional pink (#eb5adc) highlight where spray catches direct sun. Continuous forward tracking; complex fluid motion in the wave patterns; occasional spray droplets arcing through frame.
```

</details>

---


### 12. Amalfi Harbour Light

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-12` |
| **Camera** | Dolly forward |
| **Focus** | Wide |
| **Key Element** | Positano village clinging to cliffside, harbour lights glowing |
| **Atmosphere** | Twilight, foggy |
| **Tags** | `amalfi` `positano` `mist` `cliffside` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Dusk settling over the Amalfi Coast — the camera approaches Positano from the sea, one of the most photographed villages in the world. The iconic cascade of pastel buildings clings to the near-vertical cliffside, their facades now rendered in pink-lavender and violet tones under the purple twilight. A harbour navigation light emits a steady glow that cuts through a low-hanging violet mist rolling in from the Tyrrhenian Sea. The Church of Santa Maria Assunta with its distinctive majolica dome is visible mid-cliff. Small fishing boats bob gently in the harbour below, their colored hulls catching purple ambient light. Terrace lights begin to twinkle across the vertical village. Slow dolly forward across the harbour water, approaching Positano's dramatic cliffside waterfront over 8 seconds. Wide — foreground wave crests are soft; the village waterfront climbing the cliff is the mid-ground subject; the mountain ridge behind is ultra-soft in fog. Positano's iconic vertical village as the Amalfi Coast's most famous destination — buildings cascading down the cliff face like a purple waterfall, harbour lights glowing through twilight. Twilight with dense low fog rolling in from the Tyrrhenian Sea. Visibility is limited, creating a mysterious, edge-of-the-world feeling. Soft lavender (#a082e6) in the illuminated mist; deep purple (#2e008b) in the surrounding cliff shadows; electric violet (#9b0aa5) on the harbour water reflections; the village buildings catch purple ambient light; pink-violet from the harbour lights and terrace lamps. Slow forward dolly; the harbour light glows steadily; mist drifts and swirls around the cliff face; fishing boat masts sway gently; Tyrrhenian waves lap against the harbour walls.
```

</details>

---


### 13. Fjord Sunset Burst

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-13` |
| **Camera** | Static |
| **Focus** | Wide |
| **Key Element** | Sun touching horizon between Geirangerfjord mountain walls |
| **Atmosphere** | Sunset peak |
| **Tags** | `sunset` `sky` `horizon` `pink-violeten-hour` `norway` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

The exact moment the sun touches the horizon line, framed between the towering walls of Geirangerfjord in Norway. The fjord's steep mountain walls rise on either side, channeling the sky into a dramatic natural corridor. The sky detonates into bands of color — pink-lavender closest to the sun, then hot pink, electric violet, soft lavender, and finally deep purple overhead. The mountains' silhouettes are dark violet, with the famous Seven Sisters waterfall cascading as a thin lavender ribbon on the left cliff face. Thin clouds catch these colors and streak them horizontally across the narrow sky. The fjord water below is a dark mirror reflecting the explosion in slightly muted tones. Static — locked off on a tripod. The stillness contrasts with the sky's intensity. Very subtle exposure shift as the sun moves. Wide — everything sharp, fjord walls to zenith. The sun itself at the exact moment of horizon contact, framed by Geirangerfjord's walls as a full-spectrum showcase of the purple-violet palette. Peak sunset — maximum color saturation. Clear sky with scattered high cirrus clouds acting as color canvases between the fjord walls. Full palette in natural gradient — pink-lavender/pink-violet at the center, pink (#eb5adc), electric violet (#9b0aa5), soft lavender (#a082e6), deep purple (#2e008b) radiating outward; mountain walls in deep purple silhouette. Near-static — the sun sinks imperceptibly; clouds drift at altitude; the fjord surface catches and releases colors in slow, breathing undulations; the waterfall shimmers.
```

</details>

---


### 14. Brooklyn Bridge Rope & Rail

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-14` |
| **Camera** | Slow pan |
| **Focus** | Detail |
| **Key Element** | Nautical rope on railing, Brooklyn Bridge bokeh behind |
| **Atmosphere** | Purple sunset |
| **Tags** | `boat` `calm` `new-york` `brooklyn-bridge` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Close-up of a coil of thick nautical rope resting on a brass rail at the side of a boat on New York's East River. The rope's hemp fibers catch warm pink-violeten-hour light, revealing texture and subtle purple shadow between the coils. Behind the railing, the Brooklyn Bridge's Gothic arches and suspension cables create a stunning field of purple and pink-violet bokeh circles. The Manhattan skyline rises in the far background as a violet silhouette. The brass rail has a warm pink-lavender patina with violet reflections from the sky. Slow pan from the rope coil to the right, gradually shifting focus from the rope to the Brooklyn Bridge bokeh beyond the railing. Detail — shallow depth of field. The rope starts sharp, then focus racks to the bridge bokeh, then back. The tactile materiality of the rope — hemp, brass, wood — juxtaposed with the ethereal purple bokeh of the Brooklyn Bridge and East River. Purple sunset, calm. Warm sidelight from the left paints the rope in pink-lavender while the shadows between coils are deep violet. Warm pink-lavender on rope fibers; deep purple (#2e008b) shadows; soft lavender (#a082e6) and pink (#eb5adc) bokeh circles on the bridge cables; brass rail reflects electric violet (#9b0aa5) from the sky. Slow pan; the rope sways almost imperceptibly with the boat's gentle rocking; bokeh circles from the bridge lights shift and dance.
```

</details>

---


### 15. Bosphorus Passage

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-15` |
| **Camera** | Slow dolly between |
| **Focus** | Wide |
| **Key Element** | Boat entering the Bosphorus strait with mosque silhouettes |
| **Atmosphere** | Purple sunset, haze |
| **Tags** | `water` `istanbul` `bosphorus` `cruise` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

The boat enters the legendary Bosphorus strait — the narrow waterway connecting Europe and Asia through the heart of Istanbul. The camera is positioned at the bow, looking forward through the strait. The iconic silhouettes of the Blue Mosque and Hagia Sophia rise on the left (European side), their domes and minarets catching pink-lavender sunset light against the violet sky. On the right, the Asian shore is a series of deep purple hillside silhouettes dotted with soft lavender lights. The water in the strait is deeply colored — black-purple in the shadow of the city, brightening to electric violet where the sky light reflects. Ottoman-era waterfront mansions (yalıs) line both shores, their facades bathed in pink. Slow dolly forward, as if riding the bow of the boat through the Bosphorus. The mosque skyline slowly reveals itself as the boat progresses. Wide — sharp mosque silhouettes on the left framing the strait ahead. The Bosphorus as the world's most famous strait passage — Istanbul's iconic mosque skyline emerging through purple twilight haze, where two continents meet. Purple sunset with atmospheric haze diffusing the light around the mosque domes. The warm pink light on the historic facades contrasts with the purple shadows of the strait. Deep purple (#2e008b) and near-black on the shadowed shores; electric violet (#9b0aa5) on the water surface; warm pink-violet and pink-lavender on the mosque domes and minarets; soft lavender (#a082e6) haze around the skyline; ferry boats' white hulls catch pink (#eb5adc) light. Forward dolly through the strait; water ripples reflect off the shore walls; ferries cross in the distance; the mosque skyline grows larger and more detailed as the boat approaches.
```

</details>

---


### 16. Ha Long Bay Glass

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-16` |
| **Camera** | Low-angle skim |
| **Focus** | Detail |
| **Key Element** | Glassy water reflecting karst limestone pillars in purple light |
| **Atmosphere** | Blue hour, dead calm |
| **Tags** | `reflections` `water` `calm` `ha-long-bay` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

The camera skims just millimeters above a perfectly still water surface in Ha Long Bay, Vietnam, that mirrors the blue-hour sky so faithfully that it is nearly impossible to tell where water ends and sky begins. Towering karst limestone pillars rise from the water on both sides, their ancient weathered surfaces catching deep purple and violet light. The reflected sky is a deep gradient from electric violet at the horizon to deep purple overhead. The limestone pillars appear both above and below the waterline in perfect symmetry. The only disruption is one tiny ripple that slowly expands from where a raindrop fell. Low-angle skim — the lens is nearly touching the water surface, drifting forward with infinite slowness between two limestone pillars. Detail — the single expanding ripple is sharp; the reflected sky and karst pillars are slightly soft. The perfect mirror symmetry between water and sky, disrupted by one poetic ripple, framed by Ha Long Bay's iconic limestone formations. Blue hour, dead calm. No wind, no waves. The world feels held in suspension between the ancient stone pillars. Electric violet (#9b0aa5) at the mirror horizon; deep purple (#2e008b) in both the real and reflected sky and on the limestone surfaces; soft lavender (#a082e6) in the ripple's interference pattern; electric blue (#3750dc) at the zenith and its reflection. Near-static — the single ripple expands in concentric rings; the camera drifts almost imperceptibly forward; the limestone pillar reflections shimmer.
```

</details>

---


### 17. Milford Sound Cathedral

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-17` |
| **Camera** | Tilt up from water |
| **Focus** | Wide |
| **Key Element** | Dramatic clouds lit purple between Milford Sound mountain walls |
| **Atmosphere** | Sunset, dramatic clouds |
| **Tags** | `sky` `sunset` `new-zealand` `mountains` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Starting on the dark purple water surface of Milford Sound in New Zealand, the camera tilts upward to reveal a cathedral of cumulonimbus clouds rising between the towering mountain walls of the fjord. Mitre Peak — Milford Sound's iconic pyramid-shaped mountain — rises dramatically on the left. The clouds are lit from below by the setting sun — their bases glow pink-lavender and electric violet, while their towering tops darken to deep indigo-purple. Light shafts break through gaps between clouds, striking the fjord water as lavender god-rays. Stirling Falls cascades down the right cliff face as a thin violet ribbon. A thin strip of pink-violet horizon is visible between the water and the cloud base. Slow tilt up — water to sky, taking the full 8 seconds to reveal the clouds' full height framed between the mountain walls. Wide — deep focus from the water surface through Mitre Peak to the cloud tops. The monumental scale of the cloud formations lit in the Electric Purple palette, framed between Milford Sound's mountain walls — a natural cathedral of stone, water, and sky. Sunset with dramatic cloud cover. Volumetric light beams. The air feels heavy with potential between the fjord walls. Deep purple (#2e008b) in the cloud tops, mountain walls, and water; electric violet (#9b0aa5) on the cloud bases; soft lavender (#a082e6) in the god-rays; pink (#eb5adc) on the cloud edges catching direct sunset light. Slow tilt upward; clouds billow and evolve in slow motion; god-rays shift and breathe; the water surface catches falling light patches; the waterfall shimmers.
```

</details>

---


### 18. Reef Wake Symmetry

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-18` |
| **Camera** | Following drone |
| **Focus** | Overhead |
| **Key Element** | V-shaped wake stretching over deep purple Great Barrier Reef waters |
| **Atmosphere** | Purple sunset |
| **Tags** | `wake` `boat` `water` `australia` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Drone view following directly above and behind a cruise boat over the Great Barrier Reef in Australia. The vessel creates a perfect symmetrical V-wake that stretches to the bottom of frame and beyond. The wake's white foam lines create a strong geometric pattern against the deep violet reef waters. Below the surface, the dark shapes of coral formations are faintly visible as deeper purple patches beneath the electric violet water. Purple-sunset light catches the wake's outer edges in pink-lavender while the inner water between the V is sheltered and darker purple. Scattered reef islands appear as dark shapes ahead. Following drone at about 50m altitude, locked onto the boat, maintaining the V-wake centered in frame. Overhead — the geometric wake pattern is the composition, with the reef structures visible beneath. The mathematical perfection of the V-wake as a graphic element drawn in white on a purple canvas, with the Great Barrier Reef's coral shadows adding depth beneath. Purple sunset — directional light from the left creates a warm/cool split on the wake: left side pink-lavender-lit, right side in purple shadow. Deep purple (#2e008b) water and reef shadows; white wake foam with lavender (#a082e6) tint in the shadow side; electric violet (#9b0aa5) in the wider water; pink-violeten pink-lavender on the sun-facing wake edge; reef islands as dark spots. Steady forward following; the wake continuously unfurls; coral shadows pass below in parallax; water texture ripples over the reef.
```

</details>

---


### 19. Lofoten Midnight Sun

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-19` |
| **Camera** | Static wide |
| **Focus** | Ultra-wide |
| **Key Element** | Midnight sun over iconic Reine fishing village in the Lofoten Islands |
| **Atmosphere** | Nordic summer midnight |
| **Tags** | `lofoten` `twilight` `norway` `serenity` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

The Nordic midnight sun hangs just above the horizon, refusing to set, viewed from the water approaching Reine — the iconic fishing village in Norway's Lofoten Islands. The distinctive Reine landscape is visible: the dramatic granite mountain peaks of Reinebringen and Olstinden rising like jagged purple teeth behind the village, the red fishermen's cabins (rorbuer) lining the harbor on stilts over the water, and the narrow bridge connecting the village to the outer islands. The sky is a perpetual twilight gradient — pink-lavender at the horizon, cycling through electric violet to deep purple overhead. The entire 360-degree sky glows. The Norwegian Sea water reflects this wrap-around light, creating an otherworldly scene where everything is suffused in purple-pink. Drying racks for fish (hjell) and moored fishing boats add texture to the harbor. Static ultra-wide. The horizon bisects the frame perfectly. No movement — the scene's strangeness speaks for itself. Ultra-wide — the entire panoramic scene from the harbor to the distant mountain horizon is in focus. The midnight sun viewed from Reine's iconic harbor — where the dramatic Lofoten peaks meet the traditional fishing village and the wild Norwegian Sea. Nordic midnight sun — a quality of light that exists nowhere else. Neither day nor night. Temperature neutral, tending purple. Equal balance of pink-lavender and purple — electric violet (#9b0aa5) in the mid-sky, deep purple (#2e008b) at zenith, soft lavender (#a082e6) in the water reflections, pink-violet at both horizons; pink-violet on the rorbuer cabins. Extremely minimal — the sun barely moves along the horizon; water shimmers against the harbor stilts; a Norwegian flag on a rorbuer barely stirs.
```

</details>

---


### 20. Cenote Anchor Drop

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-20` |
| **Camera** | Slow downward tilt |
| **Focus** | Medium |
| **Key Element** | Chain dropping into deep crystal-purple cenote water in Mexico |
| **Atmosphere** | Dusk |
| **Tags** | `water` `mexico` `cenote` `calm` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A chain runs taut from an anchor point downward into the deep crystal-purple water of a Mexican cenote — a natural limestone sinkhole. The camera follows the chain, tilting slowly downward. The cenote's circular limestone walls rise around the frame, their edges draped with hanging roots and vines rendered as dark purple silhouettes. Where the chain enters the water, a column of silver-white bubbles rises, backlit by the last purple-pink-lavender light from the sky opening above. The chain disappears into the depths, which darken from electric violet to pure indigo-black. The underwater portion shows the chain slightly refracted and wavering, with the cenote's astonishing depth visible below. Slow downward tilt following the chain from the edge into the water. The transition from above-water to below-water happens at roughly the 4-second mark. Medium — the chain is the sharp subject; the water surface and the cenote depths beyond are soft. The chain as a connector between the world above (pink-lavender-lit limestone) and the world below (deep purple cenote) — a vertical journey through the palette. Dusk — the last light catches the chain and bubbles through the cenote's opening while the water below is already immersed in deep purple darkness. Pink-lavender on the dry chain above water; deep purple (#2e008b) in the cenote depths; electric violet (#9b0aa5) at the waterline; soft lavender (#a082e6) in the bubbles; light blue (#7da0eb) refracted through the water surface; limestone walls in purple shadow. The chain runs slowly downward; bubbles rise and wobble; the water surface undulates from above, then closes over the camera's perspective; roots sway gently.
```

</details>

---


### 21. Lake Como Villa Shore

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-21` |
| **Camera** | Dolly past foreground |
| **Focus** | Layered |
| **Key Element** | Villa-lined shores with cypress trees framing a boat on Lake Como |
| **Atmosphere** | Purple sunset |
| **Tags** | `como` `villa` `italy` `boat` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

The camera moves past a row of elegant Italian cypress trees on the shore of Lake Como — one of Italy's most celebrated lakes, lined with grand villas and gardens. The tall, dark cypress silhouettes and their deep-violet foliage act as natural frames for the scene beyond: the purple lake water stretching toward the distant villas of Bellagio on the promontory, with a sleek wooden boat passing in the mid-ground. The ornate balustrades and terraces of Villa del Balbianello are hinted at through the trees. The cypress bark catches warm pink-violeten light while the spaces between the trunks reveal the deep violet water. Stone steps descending to the lake and terracotta urns anchor the foreground. Slow dolly laterally, passing behind and between cypress trunks in a smooth parallax. The boat appears and disappears between the trees. Layered — foreground cypress trunks are sharp, mid-ground water is in focus, distant villa silhouettes on the far shore are slightly soft. Lake Como's elegant cypress-framed shoreline as a natural cinema screen — the dark vertical trunks framing slices of the purple lakescape in a composition unique to this Italian landscape. Purple sunset — warm sidelight on the cypress trunks and villa facades, purple shadow between the trees. The combination is iconic Italian elegance. Dark purple-violet cypress silhouettes catching pink-violet and pink (#eb5adc) light; deep purple (#2e008b) lake visible between trunks; soft lavender (#a082e6) sky; electric violet (#9b0aa5) in the tree shadows; villa facades catching warm pink-lavender light. Lateral dolly creating parallax between tree layers; cypress branches sway gently in a light breeze; the distant boat glides smoothly; a dragonfly crosses the foreground.
```

</details>

---


### 22. Cliffs of Moher Foam

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-22` |
| **Camera** | Tracking close |
| **Focus** | Detail |
| **Key Element** | Churning foam against the dramatic Cliffs of Moher |
| **Atmosphere** | Sunset, backlit |
| **Tags** | `waves` `water` `ireland` `cliffs` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Extreme close tracking shot of churning sea foam at the base of the Cliffs of Moher in Ireland. The towering cliff face — over 200 meters of sheer dark rock — rises in the background as a massive deep purple wall. The churning white-lavender foam contrasts sharply with the deep violet Atlantic water surrounding it. Sunset backlight penetrates the thinner foam sections, turning them translucent pink and pink-violet. Air bubbles trapped in the foam catch individual specular highlights. As the foam dissipates at the edges, it transitions from white to lavender to deep purple water in a beautiful gradient. O'Brien's Tower is faintly visible atop the cliff silhouette. Tracking close along the cliff base, matching the wave surge, focused on the foam texture roughly 1 meter from the rock face. Detail — the foam texture is razor-sharp; the cliff face beyond falls to soft purple bokeh. The ephemeral beauty of Atlantic foam — its white chaos against the controlled deep purple of the water and the monumental Cliffs of Moher. Sunset backlight — every bubble and foam strand is edge-lit in pink-violet and violet; the cliff face looms as a dramatic purple wall. White foam with lavender (#a082e6) tint in shadows; deep purple (#2e008b) water and cliff face; pink (#eb5adc) and pink-violet in backlit translucent foam; electric violet (#9b0aa5) where foam dissolves into water. Continuous tracking; the foam churns and evolves organically; bubbles pop and reform; Atlantic waves surge rhythmically against the cliff base.
```

</details>

---


### 23. Dubrovnik Panorama

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-23` |
| **Camera** | Slow 180-degree pan |
| **Focus** | Ultra-wide |
| **Key Element** | Panoramic view of Dubrovnik old town walls from the sea |
| **Atmosphere** | Blue hour |
| **Tags** | `dubrovnik` `panorama` `twilight` `croatia` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A sweeping 180-degree panoramic view from the sea approaching Dubrovnik — the Pearl of the Adriatic, a UNESCO World Heritage site. The camera slowly pans from west (where the last pink-lavender glow clings to the horizon above Fort Lovrijenac perched on its rocky outcrop) through south (the magnificent city walls running along the coastline, pure electric violet sky) to east (where the sky deepens to indigo above the Old Port and Lokrum Island). The distinctive Dubrovnik old town is visible in the pan — the terracotta rooftops now rendered in warm purple tones, the Stradun main street lit with tiny lavender lights, the bell tower of the Franciscan monastery, and the iconic city walls rising directly from the Adriatic cliffs. The massive fortified walls catch the last purple light on their limestone faces. Slow 180-degree pan, smooth and steady, completing the sweep in 8 seconds. Eye-level from the sea, approaching the old town. Ultra-wide — maximizing the panoramic depth from the sea foreground to the distant mountain backdrop behind the city. Dubrovnik's magnificent medieval city walls rising from the sea — where ancient maritime culture meets Adriatic beauty, the old town's silhouette instantly recognizable. Blue hour — the light is even, cool, and deeply violet. No hard shadows. The air is crystalline over the Adriatic. Full purple gradient — from residual pink-lavender/pink-violet in the west, through electric violet (#9b0aa5), to deep purple (#2e008b) in the east. Warm purple Dubrovnik rooftops add color contrast; the city walls catch soft lavender (#a082e6) light; Fort Lovrijenac as a dark purple silhouette; pink (#eb5adc) on the illuminated wall sections. Continuous smooth pan; old town lights begin to twinkle; Adriatic water shimmers; the Croatian flag on a tower sways gently.
```

</details>

---


### 24. Nile Mast & Stars

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-24` |
| **Camera** | Tilt from deck to sky |
| **Focus** | Vertical |
| **Key Element** | Felucca mast leading eye to stars above ancient Nile temples |
| **Atmosphere** | Night onset |
| **Tags** | `boat` `sky` `egypt` `nile` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Starting on the warm-lit wooden deck of a traditional Nile felucca, the camera tilts slowly upward along the boat's tall lateen-sail mast. The mast is a dark vertical line that bisects the frame, its single triangular sail furled and rigging lines radiating outward. On the riverbank, the silhouettes of ancient Egyptian temple columns (Luxor Temple) are faintly visible, their massive pillars lit in soft lavender. As the camera rises, it passes through the deck-light zone (warm pink-lavender from lanterns) into the middle zone (electric violet sky above the desert) and finally into the upper sky (deep purple with brilliant desert stars — the Milky Way faintly visible). The mast's peak has a small pink-lavender navigation light. Slow tilt upward, following the mast from deck to sky tip over 8 seconds. The mast stays centered throughout. Vertical composition — the bottom is detail (deck texture, temple silhouettes on shore), the middle is medium (rigging, sail), the top is wide (open desert sky with stars). The felucca mast as a vertical axis connecting the ancient Nile (deck, temples) to the cosmos (desert stars), transitioning through the full purple-violet palette above Egypt's timeless river. Night onset — the deck retains warm practical light while the desert sky has fully shifted to purple. Stars appear brilliantly over the Nile. Warm pink-lavender at the deck base; soft lavender (#a082e6) on temple silhouettes; electric violet (#9b0aa5) in the mid-sky; deep purple (#2e008b) at the zenith; the navigation light is a warm pink-lavender jewel. Slow upward tilt; the rigging lines sway gently; stars flicker; the Nile water reflects purple sky below; the felucca rocks with the river current.
```

</details>

---


### 25. Giza Pyramid Sunset

| Field | Detail |
| --- | --- |
| **ID** | `archipelago-25` |
| **Camera** | Slow zoom out |
| **Focus** | Wide |
| **Key Element** | Sun setting behind the Pyramids of Giza from the Nile |
| **Atmosphere** | Sunset end |
| **Tags** | `sunset` `egypt` `pyramids` `giza` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

The very last sliver of the sun disappears behind the unmistakable triangular silhouette of the Great Pyramid of Giza — one of the Seven Wonders of the Ancient World. Viewed from a boat on the Nile, the three pyramids (Khufu, Khafre, Menkaure) form a descending staircase against the purple sky. For a brief moment, the apex of the Great Pyramid is rimmed in blinding pink-violet — a thin line of fire separating the dark monument from the sky. The sky above the pyramids glows in a diminishing aureole of pink-lavender that fades rapidly through pink into electric violet and finally deep purple. The Nile catches the last reflection — a single violet path that narrows and darkens as the sun vanishes. The Sphinx is faintly visible as a dark shape at the base of the pyramid complex. Slow zoom out — starting tight on the sun-rimmed pyramid apex, widening to reveal all three pyramids against the purple sky. Wide — the rim-light edge is sharp; the expanding view stays in focus to communicate the timeless grandeur of the scene. The Pyramids of Giza as the ultimate sunset landmark — their iconic triangular silhouettes marking where ancient history meets the violet sky, viewed from the legendary Nile River. Sunset end — the transition point between pink-violet hour and blue hour. The light is fading rapidly and the purple is winning. Intense pink-violet/pink-lavender rim on the pyramid edges; pink (#eb5adc) aureole closest to the sun; electric violet (#9b0aa5) expanding outward; deep purple (#2e008b) overtaking the sky; soft lavender (#a082e6) in the fading Nile reflection; the desert sand reads as warm purple-lavender. Slow zoom out; the pink-violet rim thins and extinguishes; the purple expands to fill the frame; the Nile reflection narrows to a point; the pyramids grow more monumental as more of the scene is revealed.
```

</details>

---


# 🎸 Dream: Gröna Lund Live Concert

> Music, neon, and electric energy — 25 cinematic variations of a dream concert night at the world's most iconic entertainment venues.

| # | Variation | Camera | Focus | Key Element | Atmosphere |
| --- | --- | --- | --- | --- | --- |
| 1 | **Times Square Pulse** | Slow dolly forward | Wide | Stage lit in deep purple/violet with Times Square billboards visible | Night, haze |
| 2 | **London Eye & Big Ben** | Orbit around | Wide | London Eye ferris wheel with Big Ben and Parliament silhouette behind | Night, clear |
| 3 | **Shibuya Bass Drop** | Static with subtle shake | Medium | Speaker stack vibrating with Shibuya Crossing neon signs visible | Night, intense |
| 4 | **Berlin Laser Cathedral** | Tilt up | Wide | Grid of purple/pink lasers in a Berlin warehouse club | Night, heavy fog |
| 5 | **Rio Confetti Rain** | Slow-motion fall | Detail | Purple confetti falling with Christ the Redeemer silhouette in distance | Night, celebratory |
| 6 | **Coachella Silhouettes** | Static wide, backlit | Wide | Desert concert silhouettes with palm trees and Ferris wheel | Night |
| 7 | **Nashville Guitar Strings** | Macro drift | Extreme detail | Guitar strings vibrating with Broadway honky-tonk neon reflected in chrome | Night, intimate |
| 8 | **Moulin Rouge Spotlight** | Tracking the beam | Wide | Spotlight sweeping with Moulin Rouge windmill silhouette | Night, haze |
| 9 | **Havana Drum Hit** | Slow-motion | Detail | Drumstick impact on Cuban conga in purple-lit Havana street | Night, dynamic |
| 10 | **Las Vegas Strip Skyline** | Crane rising | Ultra-wide | Concert venue with Las Vegas Strip neon skyline visible behind | Night, clear |
| 11 | **Ibiza Strobe Freeze** | Strobe-cut style | Medium | Frozen strobe moments in Ibiza superclub with Mediterranean visible | Night, strobe |
| 12 | **Abbey Road Mic Stand** | Slow orbit | Detail | Chrome mic stand in a legendary Abbey Road recording studio setting | Night |
| 13 | **Tomorrowland Wristband Glow** | Close tracking | Detail | LED wristbands pulsing with Tomorrowland's iconic mainstage visible | Night |
| 14 | **Santa Monica Pier Lights** | Tracking alongside | Wide | Coaster track with Pacific Ocean and Santa Monica Pier visible | Night, motion |
| 15 | **Reykjavik Sound Wave** | Abstract visualization | Abstract | Sound waves rippling with Harpa Concert Hall's crystalline facade visible | Night, ethereal |
| 16 | **Amsterdam Stage Fog** | Low-angle | Medium | Dense purple fog in a canal-side Amsterdam venue | Night, fog |
| 17 | **Hollywood Ticket Stub** | Macro static | Extreme detail | Concert ticket with Hollywood sign bokeh and Walk of Fame stars | Night |
| 18 | **Cappadocia Balloons** | Slow tilt up | Wide | Hot air balloons rising over fairy chimneys at dawn, purple-lit | Dawn, whimsical |
| 19 | **Detroit Mixing Desk** | Slow pan across | Detail | Mixing console in legendary Detroit Motown-style studio | Night, intimate |
| 20 | **Sydney Harbour View** | Wide establishing | Ultra-wide | Stage reflected in harbour with Sydney Opera House shell roof visible | Night, reflections |
| 21 | **Burj Khalifa Encore** | Fast zoom out | Wide | Violet pyrotechnics with Burj Khalifa illuminated in background | Night, explosive |
| 22 | **Hong Kong Rain on Lights** | Static with rain | Detail | Raindrops catching neon purple lights with Hong Kong skyline visible | Night, light rain |
| 23 | **Glastonbury Crowd Hands** | Slow tracking over | Medium | Raised hands with Glastonbury Tor and Pyramid Stage visible | Night |
| 24 | **Marrakech Vinyl Spin** | Macro orbit | Detail | Vinyl spinning on riad rooftop with Koutoubia minaret visible | Night, retro |
| 25 | **Final Beam over Paris** | Slow fade/dolly back | Wide | Single purple beam rising alongside the illuminated Eiffel Tower | Night, closing |

---


### 1. Times Square Pulse

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-01` |
| **Camera** | Slow dolly forward |
| **Focus** | Wide |
| **Key Element** | Stage lit in deep purple/violet with Times Square billboards visible |
| **Atmosphere** | Night, haze |
| **Tags** | `stage` `lights` `concert` `new-york` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A massive concert stage erected in the heart of Times Square, New York, seen from the back of the crowd. The stage is a wall of deep purple and electric violet light, pulsing rhythmically with a bass-heavy beat. Behind and above, the iconic Times Square billboards and LED facades have been overtaken by purple-violet wave patterns, turning the entire canyon of buildings into a synchronized light show. Theatrical haze fills the air, catching the light beams and turning them into solid cones of violet. Silhouettes of the crowd's raised hands fill the lower third of frame. Slow dolly forward through the crowd — as if pushing toward the stage. The stage and Times Square's towering neon grow larger and more intense over 8 seconds. Wide — the stage is the subject, the crowd silhouettes and Times Square billboards frame it. The stage as a monolithic source of purple light, with Times Square's famous neon billboards amplifying the violet energy into every corner of the urban canyon. Night with heavy theatrical haze. The air is thick with light beams made visible by the fog. Every breath catches violet. Electric violet (#9b0aa5) as the dominant stage wash; deep purple (#2e008b) in the sky and shadows; pink (#eb5adc) accent lights on the billboards; soft lavender (#a082e6) in the haze; the crowd is near-black silhouette. Forward dolly; haze drifts and swirls; light beams pulse with the rhythm; Times Square billboards animate in sync; crowd hands sway.
```

</details>

---


### 2. London Eye & Big Ben

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-02` |
| **Camera** | Orbit around |
| **Focus** | Wide |
| **Key Element** | London Eye ferris wheel with Big Ben and Parliament silhouette behind |
| **Atmosphere** | Night, clear |
| **Tags** | `ferris-wheel` `neon` `london` `big-ben` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

The London Eye dominates the frame, its massive structure outlined in LED lights cycling through the purple-violet palette — from deep purple at the base through electric violet on the spokes to soft lavender at the top. Each capsule has a pink accent light. As the camera orbits, the Westminster skyline reveals itself behind the wheel — the unmistakable silhouette of Big Ben's clock tower and the Houses of Parliament stretching along the Thames, bathed in pink-lavender light that contrasts with the purple night sky. The Thames below glitters with the wheel's reflected neon and the purple glow of the South Bank. Slow orbit — the camera circles the London Eye about 30 degrees over 8 seconds, shifting Big Ben and Parliament from hidden to revealed behind the wheel. Wide — the full London Eye in frame with Big Ben's silhouette and Thames reflections. The London Eye as a giant purple mandala with Westminster's most iconic landmarks visible through its spokes — modern spectacle framing centuries of history. Night, clear sky. The London Eye is the brightest object in frame, with Westminster's warm glow as the atmospheric backdrop. Electric violet (#9b0aa5) on the wheel structure; deep purple (#2e008b) sky; pink (#eb5adc) capsule accents; warm pink-lavender on Parliament's facades; soft lavender (#a082e6) light spill; electric blue (#3750dc) Thames water reflections bridging South Bank to Westminster. The London Eye rotates slowly; capsules sway; the orbit reveals Big Ben progressively; LED lights animate in sequence; Thames reflections of both wheel and Parliament shimmer.
```

</details>

---


### 3. Shibuya Bass Drop

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-03` |
| **Camera** | Static with subtle shake |
| **Focus** | Medium |
| **Key Element** | Speaker stack vibrating with Shibuya Crossing neon signs visible |
| **Atmosphere** | Night, intense |
| **Tags** | `bass` `speakers` `vibration` `tokyo` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A massive wall of black speaker stacks at the side of an outdoor stage set up near Shibuya Crossing, Tokyo. The camera faces them straight-on, close enough to feel the vibration. The speaker cones pulse visibly with each bass hit. The air in front of the speakers distorts like heat haze — visible compression waves. Through the gap beside the speaker wall, Shibuya's iconic neon signs and LED screens are visible, their normally multicolored glow overridden by purple-violet hues. Purple and violet stage light bathes the speaker cabinets from behind, creating a dramatic rim-light on their edges. A thin layer of mist at the base catches the light. Static with subtle physical shake synchronized to the bass hits — the camera itself vibrates with the sound pressure. Medium — the speaker wall fills the frame; individual cone movements are visible; Shibuya's neon bleeds into the edges. The raw physical power of sound made visible — vibrating cones, air distortion, camera shake — framed by Tokyo's electric cityscape. Night, intense. The bass is felt more than heard. The air itself seems to pulse purple against Shibuya's neon canyon. Deep purple (#2e008b) on the speaker cabinets; electric violet (#9b0aa5) rim-light from behind; soft lavender (#a082e6) in the mist at the base; pink (#eb5adc) Shibuya neon reflections; electric blue (#3750dc) in the distant crossing signals. Speaker cones pulse rhythmically; visible air compression waves; camera micro-shakes on each bass hit; mist at the base ripples with the pressure waves; Shibuya screens flicker in the background.
```

</details>

---


### 4. Berlin Laser Cathedral

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-04` |
| **Camera** | Tilt up |
| **Focus** | Wide |
| **Key Element** | Grid of purple/pink lasers in a Berlin warehouse club |
| **Atmosphere** | Night, heavy fog |
| **Tags** | `lasers` `lights` `concert` `berlin` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Looking upward from the crowd level inside a cavernous Berlin warehouse club as dozens of laser beams cut through dense fog above the stage. The raw industrial concrete ceiling and exposed steel trusses of the venue frame the laser grid — parallel lines, fans, and cones — in electric violet, pink, and soft lavender. Where the beams intersect, they create brighter nodes of light. The fog is thick enough to make each beam a solid line of light. Through the laser grid, the warehouse's massive skylights reveal a faint deep purple Berlin night sky. Tilt up — starting from the crowd's raised hands, ascending through the laser grid to the warehouse ceiling and skylights over 8 seconds. Wide — the entire laser architecture is in view, creating a cathedral of light within Berlin's industrial bones. The geometric precision of laser beams contrasting with the organic movement of fog — order and chaos in purple light, amplified by Berlin's raw warehouse architecture. Night with very heavy theatrical fog inside the club. The lasers need the fog to exist visibly — they are painting on a canvas of mist within Berlin's legendary underground scene. Electric violet (#9b0aa5) primary lasers; pink (#eb5adc) accent lasers; soft lavender (#a082e6) where beams scatter in the fog; deep purple (#2e008b) in the negative space between beams and concrete walls. Lasers sweep slowly in synchronized patterns; fog drifts and curls around the beams; beam intersections pulse; the tilt reveals new layers of the laser architecture against the industrial ceiling.
```

</details>

---


### 5. Rio Confetti Rain

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-05` |
| **Camera** | Slow-motion fall |
| **Focus** | Detail |
| **Key Element** | Purple confetti falling with Christ the Redeemer silhouette in distance |
| **Atmosphere** | Night, celebratory |
| **Tags** | `confetti` `lights` `festival` `rio` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Thousands of pieces of confetti in shades of purple, violet, lavender, and pink fall through the air in extreme slow motion above an outdoor concert stage in Rio de Janeiro. Each piece tumbles and rotates, catching spotlight beams from different angles — sometimes opaque and dark, sometimes translucent and glowing. The confetti is in sharp focus in the mid-ground while the background reveals the distant silhouette of Christ the Redeemer atop Corcovado, illuminated in electric violet against the deep purple sky. Stage lights below are soft purple bokeh circles. The energy of Carnival pulses through the scene. Slow-motion capture of the confetti fall, with a very slight downward drift matching the confetti's trajectory. Detail — individual confetti pieces are readable; Christ the Redeemer is a soft violet silhouette in the distance; some confetti is so close it becomes large abstract shapes in foreground bokeh. The confetti as individual carriers of the purple-violet palette — each piece a tiny canvas — with Rio's iconic statue watching over the celebration. Night, celebratory peak moment with Carnival energy. The confetti cannon has just fired. The air is full of color above Rio. Every piece is a different shade — deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc). Christ the Redeemer glows in electric violet. The background bokeh is electric violet. Ultra-slow-motion tumble of confetti; each piece rotates and catches light at different angles; some pieces collide and redirect; spotlight beams illuminate different zones; the statue stands sentinel in the distance.
```

</details>

---


### 6. Coachella Silhouettes

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-06` |
| **Camera** | Static wide, backlit |
| **Focus** | Wide |
| **Key Element** | Desert concert silhouettes with palm trees and Ferris wheel |
| **Atmosphere** | Night |
| **Tags** | `crowd` `silhouette` `concert` `coachella` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A wide shot of a desert concert crowd at Coachella in complete silhouette. The stage behind them is a solid wall of purple-violet light with horizontal bands of intensity — brightest at center, darkening to the edges. Iconic Coachella palm trees frame the left and right edges, their fronds dark against the violet sky. The distant Ferris wheel glows in electric violet to the right. The crowd forms a jagged horizon line of dark shapes — raised hands, phones, shoulders, heads — all anonymous and unidentifiable. Occasional wisps of desert dust drift between the camera and the crowd, catching purple light. Static wide — locked off. The power of the image comes from the graphic simplicity of black silhouettes, palm trees, and Ferris wheel against purple. Wide — the silhouette edge is crisp where dark meets light. The crowd as a collective abstract shape — a desert mountain range of human energy, defined only by its outline against the purple light, with Coachella's iconic palms and wheel as sentinels. Night — the only light source is the stage. The relationship between the dark crowd mass, the palm tree silhouettes, and the purple light is the entire image. The stage wash blends electric violet (#9b0aa5) at center with deep purple (#2e008b) at edges; the crowd and palms are pure dark (#34303d) silhouette; dust catches soft lavender (#a082e6); phone screens are tiny dots of light blue (#7da0eb); the distant Ferris wheel glows pink (#eb5adc). Minimal — hands sway slowly; occasional phone screens light up and dim; desert dust drifts languidly across the frame; the stage light breathes slightly with the music; the Ferris wheel rotates in the distance.
```

</details>

---


### 7. Nashville Guitar Strings

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-07` |
| **Camera** | Macro drift |
| **Focus** | Extreme detail |
| **Key Element** | Guitar strings vibrating with Broadway honky-tonk neon reflected in chrome |
| **Atmosphere** | Night, intimate |
| **Tags** | `music` `vibration` `concert` `nashville` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Extreme macro of an electric guitar's strings, seen from the side, on a stage along Nashville's Broadway. The strings vibrate with visible standing-wave patterns — each string a blur of harmonic motion. Purple and violet stage light catches on the chrome frets and wound string surfaces. A lens flare from a distant spotlight bleeds across the frame in soft lavender and pink. Through the bokeh beyond the guitar, the glow of Nashville's honky-tonk neon signs on Broadway is visible — their purple-violet reflections caught in the chrome hardware. The guitar body beyond the strings is dark wood catching purple rim light. Macro drift — slowly panning from the low strings to the high strings over 8 seconds, maintaining extreme close focus. Extreme detail — the strings' vibration blur is the subject; the guitar body and Nashville's Broadway neon beyond are soft bokeh. Sound made visible — the strings' vibration patterns are a physical manifestation of music, framed by Nashville's legendary music district reflected in the chrome. Night, intimate — this is a private view of the instrument in Music City. The macro perspective makes the guitar a landscape with Nashville's neon as its sky. Chrome and silver strings catching electric violet (#9b0aa5) light; deep purple (#2e008b) in the shadows between strings; soft lavender (#a082e6) and pink (#eb5adc) in the lens flare and Nashville neon bokeh; warm pink-lavender on the wood body. The strings vibrate at different frequencies — visible standing waves; the camera drifts slowly across them; lens flare shifts with the camera position; Broadway neon reflections dance on the chrome frets.
```

</details>

---


### 8. Moulin Rouge Spotlight

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-08` |
| **Camera** | Tracking the beam |
| **Focus** | Wide |
| **Key Element** | Spotlight sweeping with Moulin Rouge windmill silhouette |
| **Atmosphere** | Night, haze |
| **Tags** | `lights` `stage` `paris` `concert` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A single powerful spotlight beam sweeps slowly across an outdoor concert venue in Montmartre, Paris, cutting a solid cone of lavender-white light through the purple haze. Behind the stage, the iconic Moulin Rouge windmill silhouette rises against the deep purple sky, its sails catching stray violet light. Everything the beam touches is momentarily illuminated — truss structures, Parisian rooftops, the upper reaches of the crowd — before falling back into purple darkness. The beam's edges are soft and feathered by the haze. Where it hits the haze densely, it blooms into a soft, volumetric lavender cloud near the windmill. Tracking the beam — the camera follows the spotlight's sweep, keeping the brightest point centered in frame as it moves across the venue, with the Moulin Rouge windmill as a constant backdrop. Wide — the beam and its interaction with the Parisian architecture, the windmill, and the haze. The spotlight beam as a physical object — a solid bar of light that reveals and conceals as it sweeps past the Moulin Rouge's legendary silhouette. Night with medium haze. The beam is only visible because of the particulates in the air. The surrounding darkness is deep purple with Montmartre's rooftops as shadow shapes. White-lavender (#a082e6) in the beam core; electric violet (#9b0aa5) at the beam edges where it diffuses; deep purple (#2e008b) in the negative space; pink (#eb5adc) where the beam hits the Moulin Rouge facade and windmill sails. The beam sweeps in a smooth arc past the windmill; haze swirls in its wake; the camera tracks with the beam; the windmill sails slowly rotate catching purple light.
```

</details>

---


### 9. Havana Drum Hit

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-09` |
| **Camera** | Slow-motion |
| **Focus** | Detail |
| **Key Element** | Drumstick impact on Cuban conga in purple-lit Havana street |
| **Atmosphere** | Night, dynamic |
| **Tags** | `rhythm` `music` `havana` `energy` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Ultra-slow-motion capture of a drumstick striking a conga drum on a Havana street corner. Through an archway behind the performer, the iconic pastel facades of Old Havana (Habana Vieja) are visible — their colonial balconies and columns bathed in purple-violet light. The impact sends a visible shockwave across the drum skin — concentric ripples propagating outward from the strike point. Purple and violet stage light reflects off the polished drum surface. The stick rebounds in a graceful arc, trailing a slight motion blur. A vintage Cuban street lamp casts pink-lavender pools of light on the cobblestones. Slow-motion, positioned at drum level, capturing the impact from a 45-degree angle with Havana architecture visible through the background. Detail — the strike point is razor-sharp; the drum edges blur with motion; Old Havana's facades are soft purple bokeh behind. The violence and beauty of Cuban percussion — a single strike on a Havana street as a universe of rhythm, history, and purple light. Night, dynamic. Street lighting and stage lighting from above catches the drum as a reflective surface for the purple palette, with Havana's legendary musical energy filling the air. Drum skin reflecting electric violet (#9b0aa5) and pink-lavender; deep purple (#2e008b) background; soft lavender (#a082e6) on Havana facades; pink (#eb5adc) reflected in the concentric waves; the colonial architecture catches warm pink-violet from street lamps. Ultra-slow-motion: the stick's impact, the wave propagation across the drum skin, the rebound arc — all happening in dreamy time against Havana's timeless backdrop.
```

</details>

---


### 10. Las Vegas Strip Skyline

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-10` |
| **Camera** | Crane rising |
| **Focus** | Ultra-wide |
| **Key Element** | Concert venue with Las Vegas Strip neon skyline visible behind |
| **Atmosphere** | Night, clear |
| **Tags** | `amusement-park` `las-vegas` `neon` `lights` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

The camera rises on a crane above a massive outdoor concert venue on the Las Vegas Strip, revealing the full stage setup and the sweeping Strip panorama beyond. The stage's lighting rig, LED walls, and speaker arrays are all outlined in colored lights. As the crane ascends, the Las Vegas Strip's most iconic landmarks reveal themselves: towering casino facades, the replica Eiffel Tower in electric violet, the Bellagio fountains catching purple light, the sleek glass towers of CityCenter reflecting the spectacle, and the distant Luxor sky beam — all recolored in the purple-violet palette. The Strip's normally garish neon has been unified into a river of purple light stretching to the horizon. The desert air is crystal clear, making every distant light pin-sharp. Crane rising — starting at crowd level, ascending to reveal the full venue-to-Strip panorama over 8 seconds. Slow, majestic ascent. Ultra-wide — the entire stage, the Strip's neon skyline, and the desert horizon in one frame. The concert venue revealed as the epicenter of the Las Vegas Strip's electric energy — the stage as the brightest node in a city built on spectacle. Night, clear. The desert sky is deep purple with zero clouds, and the Strip's collective neon creates a lavender dome of light pollution. Electric violet (#9b0aa5) LED lights on the stage; deep purple (#2e008b) night sky; pink (#eb5adc) neon accents on casino facades; soft lavender (#a082e6) light pollution dome; electric blue (#3750dc) in the Bellagio fountain sprays and glass tower reflections. The crane rises steadily; stage lights animate; the expanding view reveals more of the Strip's neon canyon; casino signs pulse; distant fountains dance.
```

</details>

---


### 11. Ibiza Strobe Freeze

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-11` |
| **Camera** | Strobe-cut style |
| **Focus** | Medium |
| **Key Element** | Frozen strobe moments in Ibiza superclub with Mediterranean visible |
| **Atmosphere** | Night, strobe |
| **Tags** | `strobe` `lights` `energy` `ibiza` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Inside a legendary Ibiza superclub, the stage strobes fire in rapid succession, and the camera captures the moments between flashes — frozen tableaux of the scene lit only by the persistent purple wash. Through the club's massive floor-to-ceiling windows, the dark Mediterranean Sea is visible, its surface catching stray violet light. Each strobe flash reveals a slightly different composition: haze has moved, light beams have shifted, and the sea outside shimmers differently. Between flashes, the scene is a deep purple low-light painting where only the brightest elements (LED panels, reflective surfaces, the moonlit sea) are visible. Strobe-cut style — simulating the visual effect of being in a strobe environment. Not actual jump cuts, but rhythmic brightness variations over the continuous shot. Medium — the stage area is framed with the Mediterranean visible through the windows and some crowd foreground. The strobe's ability to freeze time — each flash a purple-lit still life with Ibiza's legendary nightlife energy and the Mediterranean as a serene counterpoint. Night, intense strobe. The visual rhythm alternates between bright purple reveals and deep purple near-darkness, with the sea a constant calm presence through the windows. Electric violet (#9b0aa5) in the strobe flashes; deep purple (#2e008b) in the between-moments and the sea; soft lavender (#a082e6) persistent glow on the water; white strobe flashes tinted purple. Rhythmic — the scene appears to stutter between frozen moments; haze moves in jerky reveals; the Mediterranean shimmers steadily through the windows; the effect is hypnotic and dream-like.
```

</details>

---


### 12. Abbey Road Mic Stand

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-12` |
| **Camera** | Slow orbit |
| **Focus** | Detail |
| **Key Element** | Chrome mic stand in a legendary Abbey Road recording studio setting |
| **Atmosphere** | Night |
| **Tags** | `stage` `concert` `music` `london` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A chrome microphone on a stand, center stage in a legendary recording studio inspired by Abbey Road Studios, London. The mic and stand are surrounded by the studio's hallowed space — acoustic panels, vintage equipment racks, and the famous parquet floor. The chrome surface acts as a 360-degree mirror — reflecting the colored lights, the studio's heritage, all warped into abstract purple and violet streaks. Stage lights overhead create a pool of lavender light around the base. Through the studio's control room window, racks of vintage gear glow in soft violet. A thin cable snakes away into the darkness. Slow orbit around the mic stand, keeping it centered. The reflections on the chrome surface shift continuously with the orbit, revealing the studio's legendary architecture. Detail — the mic and the top 30cm of the stand are sharp; the studio walls and equipment beyond are soft bokeh. The mic stand as a reflective sculpture in a sacred musical space — a mirror that concentrates and distorts Abbey Road's storied environment into abstract purple streaks. Night — the studio is lit from above and from the sides with purple wash. The mic stand is the lone sentinel in a pool of light within music's most legendary room. Chrome reflects every color but predominantly electric violet (#9b0aa5) and soft lavender (#a082e6); deep purple (#2e008b) studio floor; pink (#eb5adc) reflected from vintage gear LEDs; the mic grille is dark with subtle metallic purple highlights. Slow orbit creating shifting reflections; the mic cable sways slightly from a breeze; light reflections on the chrome surface are liquid and ever-changing; vintage VU meters pulse faintly in the background.
```

</details>

---


### 13. Tomorrowland Wristband Glow

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-13` |
| **Camera** | Close tracking |
| **Focus** | Detail |
| **Key Element** | LED wristbands pulsing with Tomorrowland's iconic mainstage visible |
| **Atmosphere** | Night |
| **Tags** | `crowd` `electric` `neon` `tomorrowland` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Hundreds of LED wristbands on raised wrists pulse in perfect unison — all electric violet, then all soft lavender, then all pink, creating waves of color that roll across the massive crowd at Tomorrowland, Belgium. The camera tracks close above the sea of wrists, seeing each wristband as a glowing node in a larger connected network. Behind the crowd, Tomorrowland's iconic mainstage — an enormous fantasy cathedral of LED screens, pyrotechnics, and theatrical set design — towers in the distance, pulsing in the purple-violet palette. Occasional glowing phone screens punctuate the wristband field. The wrists and arms are anonymous silhouettes connecting dark body mass to glowing band. Close tracking above the crowd, skimming over the sea of raised wristbands, moving from back of crowd toward the legendary mainstage. Detail — nearest wristbands are sharp, showing their texture and glow; Tomorrowland's mainstage is a massive purple beacon in soft focus behind. The wristbands as collective pixels — individual nodes forming a unified, synchronized display, with Tomorrowland's cathedral-like mainstage as the purple heart of the spectacle. Night — the wristbands, mainstage, and stage provide the only illumination. The crowd is a dark mass animated by hundreds of purple light points beneath the festival's legendary production. Electric violet (#9b0aa5) primary wristband color; pink (#eb5adc) and soft lavender (#a082e6) in the color transitions; deep purple (#2e008b) in the spaces between lights; light blue (#7da0eb) from phone screens; the mainstage radiates all five palette colors. Wristbands pulse in waves; the camera tracks forward toward the mainstage; arms sway; the synchronized color changes ripple through the crowd like a digital aurora; pyrotechnics flash from the distant stage.
```

</details>

---


### 14. Santa Monica Pier Lights

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-14` |
| **Camera** | Tracking alongside |
| **Focus** | Wide |
| **Key Element** | Coaster track with Pacific Ocean and Santa Monica Pier visible |
| **Atmosphere** | Night, motion |
| **Tags** | `amusement-park` `lights` `energy` `santa-monica` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A roller coaster track on Santa Monica Pier outlined in LED strip lights — electric violet on the rails, pink on the support structure. The camera tracks alongside at rail level as a coaster train rushes past, its own lights a streak of lavender. The track twists and curves ahead, its illuminated path drawing glowing purple lines against the deep purple sky over the Pacific Ocean. The vast dark ocean stretches to the horizon beyond the pier, its waves catching distant violet light. Below, the pier's carnival rides and arcade lights are a distant carpet of purple-pink light, with the Santa Monica coastline curving away. Tracking alongside the coaster track at rail level, matching the train's speed for a beat, then letting it pull ahead toward the ocean. Wide — the track structure and its LED outlines fill the frame with geometric purple light paths against the Pacific backdrop. The roller coaster track as a drawn line of light reaching out over the Pacific — architecture becoming pure energy and movement at the edge of the continent. Night, motion. The speed of the coaster creates motion blur on the ocean and pier while the track LEDs stay sharp. Salt air catches the purple light. Electric violet (#9b0aa5) LED rails; pink (#eb5adc) support structure LEDs; soft lavender (#a082e6) coaster lights; deep purple (#2e008b) ocean and night sky; electric blue (#3750dc) motion-blur of distant pier lights and moonlit wave crests. The coaster train rushes through frame over the ocean; the tracking creates a dynamic perspective; the LED lights streak at the edges; waves crash below the pier in purple-lit foam.
```

</details>

---


### 15. Reykjavik Sound Wave

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-15` |
| **Camera** | Abstract visualization |
| **Focus** | Abstract |
| **Key Element** | Sound waves rippling with Harpa Concert Hall's crystalline facade visible |
| **Atmosphere** | Night, ethereal |
| **Tags** | `bass` `vibration` `atmosphere` `reykjavik` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

An abstract, semi-real visualization of sound waves propagating through the concert atmosphere outside Reykjavik's Harpa Concert Hall. Concentric rings of energy expand outward from the stage in the purple-violet palette — each ring a different shade. The waves interact with the haze and the cold Icelandic air, creating visible interference patterns. Where the waves pass through the crowd, wristbands pulse. Where they hit surfaces — including Harpa's iconic crystalline glass facade — they create geometric ripple reflections that multiply through the honeycomb-pattern windows. The scene sits between photorealism and artistic interpretation, with Harpa's angular architecture amplifying the wave geometry. Abstract visualization — the camera is static, but the scene itself is a dynamic wave animation overlaid on the real concert environment with Harpa's glittering facade. Abstract — the sound waves are sharp geometric elements; Harpa's crystalline facade and the real environment beneath are slightly soft and dreamlike. Sound made visible — the invisible energy of music rendered as expanding purple light waves, amplified by Harpa Concert Hall's own geometric architecture. Night, ethereal. This is a heightened, almost hallucinatory version of the concert — the way music feels against Reykjavik's otherworldly landscape. Each concentric ring a different shade — deep purple (#2e008b) innermost, electric violet (#9b0aa5) mid-range, soft lavender (#a082e6) outer, pink (#eb5adc) furthest; electric blue (#3750dc) interference nodes and Harpa's glass reflections. Concentric waves expanding rhythmically from the stage; interference patterns forming and dissolving against Harpa's facade; wristbands activating as waves pass; the crystalline windows refract the waves into geometric patterns.
```

</details>

---


### 16. Amsterdam Stage Fog

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-16` |
| **Camera** | Low-angle |
| **Focus** | Medium |
| **Key Element** | Dense purple fog in a canal-side Amsterdam venue |
| **Atmosphere** | Night, fog |
| **Tags** | `stage` `atmosphere` `lights` `amsterdam` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Low-angle shot from the stage floor level inside a canal-side concert venue in Amsterdam, looking across the stage surface. Dense, heavy fog — cooled to stay low — rolls across the stage like a slow-motion purple tide. Stage lights from above pierce the fog in vertical shafts of violet and lavender. The fog's surface is not flat but turbulent, with curls and eddies catching different colored lights. Through the venue's tall arched windows, the distinctive silhouettes of Amsterdam's canal houses and their stepped gable rooftops are visible against the purple night, their windows reflecting soft violet light. In the background, the silhouette of a microphone stand rises above the fog layer like a reed above a lake. Low-angle — the lens is at fog-surface level, looking across the rolling mist with Amsterdam's canal architecture framed through the windows. Slow forward push. Medium — the fog surface texture in the foreground is sharp; Amsterdam's canal houses and background elements rise out of it in soft focus. The fog as a living entity — a purple sea rolling across the stage, with Amsterdam's iconic gabled architecture watching through the windows like a painted backdrop. Night, heavy low fog in a canal-side venue. The fog creates its own microclimate on stage — the world above the fog and below it are completely different, with Amsterdam's waterways amplifying the misty ambiance. Soft lavender (#a082e6) and electric violet (#9b0aa5) in the fog's lit surfaces; deep purple (#2e008b) in the fog's shadows and Amsterdam's silhouettes; pink (#eb5adc) light shafts from above; electric blue (#3750dc) canal reflections visible through the windows. Fog rolls forward in slow, heavy waves; light shafts cut through and create shifting patterns; eddies form and dissolve; canal reflections shimmer through the venue windows.
```

</details>

---


### 17. Hollywood Ticket Stub

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-17` |
| **Camera** | Macro static |
| **Focus** | Extreme detail |
| **Key Element** | Concert ticket with Hollywood sign bokeh and Walk of Fame stars |
| **Atmosphere** | Night |
| **Tags** | `festival` `concert` `hollywood` `neon` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Extreme close-up of a concert ticket held between fingers (anonymous, no identifiable features). The ticket features typographic details in purple and violet ink. The camera focuses on the paper texture — visible fibers catching the light — while behind the ticket, the Hollywood sign on the hillside glows in soft violet bokeh, and the Walk of Fame's terrazzo stars catch purple spotlight reflections below. The concert venue behind the ticket is a gorgeous field of purple bokeh circles of varying sizes mixed with the soft shapes of Hollywood Boulevard's neon marquees. The ticket's edge is slightly torn where it was separated from the stub. A faint holographic security strip catches violet light. Macro static — the ticket is pinned in space; the Hollywood bokeh background shifts subtly as the hand holding it sways slightly. Extreme detail — paper fibers and ink edges are sharp; the Hollywood sign, Walk of Fame stars, and background are pure soft lavender bokeh. The ticket as artifact — a physical token of the experience in the entertainment capital of the world, rendered with the intimacy of macro photography against Hollywood's legendary landmarks. Night — the ticket is lit by ambient stage light spillage; the background is the out-of-focus Hollywood Boulevard in full purple intensity. Purple and violet ink on white paper; deep purple (#2e008b) bokeh background; electric violet (#9b0aa5) and pink (#eb5adc) bokeh circles from neon marquees; soft lavender (#a082e6) holographic strip reflections and Hollywood sign glow. Very subtle — the hand holding the ticket sways marginally; the Hollywood bokeh circles drift and shift; the holographic strip flashes as the angle changes; Walk of Fame stars twinkle below.
```

</details>

---


### 18. Cappadocia Balloons

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-18` |
| **Camera** | Slow tilt up |
| **Focus** | Wide |
| **Key Element** | Hot air balloons rising over fairy chimneys at dawn, purple-lit |
| **Atmosphere** | Dawn, whimsical |
| **Tags** | `festival` `cappadocia` `balloons` `atmosphere` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A cluster of hot air balloons in shades of purple, violet, and lavender ascends into the pre-dawn sky above Cappadocia, Turkey. The camera tilts up to follow their flight. The balloons are lit from within by their burners, casting a warm pink-violet glow that illuminates the balloon fabric from inside. Below, Cappadocia's extraordinary fairy chimney rock formations rise like ancient sentinels — their pale stone surfaces bathed in purple and violet light from ground-mounted uplights. The distinctive mushroom-shaped hoodoos and cave dwellings carved into the volcanic tuff create an otherworldly landscape. As the balloons rise above the fairy chimneys, the vast Cappadocian valley opens up — a surreal purple-lit terrain of eroded pillars and honeycombed cliffs stretching to the horizon. Slow tilt up — following the balloons' ascent over the fairy chimneys, revealing the vast Cappadocian landscape as the angle widens. Wide — balloons are sharp against the dawn sky; the fairy chimneys below soften into a purple-lit ancient landscape. The balloons as vehicles of escape drifting above Cappadocia's surreal geology — the contrast between the soft floating forms and the ancient eroded stone creates a dreamlike scene. Dawn, whimsical. A moment of wonder as balloons rise over one of Earth's most otherworldly landscapes, all unified in the purple palette. Balloons in deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), and pink (#eb5adc); fairy chimneys lit in warm pink-lavender from below; the sky transitions from deep purple to soft lavender at the horizon; electric blue (#3750dc) in the dawn sky's edge. Balloons rise and slowly separate; they rotate and catch light differently; the tilt reveals the fairy chimney landscape progressively; burner flames pulse inside the balloon envelopes.
```

</details>

---


### 19. Detroit Mixing Desk

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-19` |
| **Camera** | Slow pan across |
| **Focus** | Detail |
| **Key Element** | Mixing console in legendary Detroit Motown-style studio |
| **Atmosphere** | Night, intimate |
| **Tags** | `music` `detroit` `lights` `rhythm` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A professional audio mixing console inside a legendary Detroit recording studio — the birthplace of Motown and electronic music. The console surface is alive with color. Rows of faders, knobs, and illuminated VU meters create a landscape of precision and light. Through the studio window, the Detroit skyline is faintly visible — the Renaissance Center towers and the Ambassador Bridge lit in purple. The faders are lit from below by built-in LEDs; the VU meters glow pink-lavender and violet; the entire console is bathed in ambient purple light. Vintage vinyl records and platinum plaques adorn the studio walls, catching violet reflections. Slow pan across the console surface, right to left, at a low angle that emphasizes the fader heights with Detroit skyline through the window. Detail — the nearest faders and meters are sharp; the console stretches into soft-focus distance; Detroit skyline is dreamy bokeh. The Detroit mixing desk as the nerve center of American music history — where Motown, techno, and electronic music were born, shaped by these same types of controls. Night, intimate. A legendary Detroit studio lit by its own functional lights and the ambient purple glow of the city beyond. Pink-lavender and violet VU meters against electric violet (#9b0aa5) ambient light; deep purple (#2e008b) shadows between channels; soft lavender (#a082e6) light from the console's own illumination; fader caps catching pink (#eb5adc) reflections; Detroit skyline in deep purple silhouette. Slow pan; faders occasionally move (ghost-operated by unseen hands); VU meters bounce with the music; LED indicators blink; the Detroit skyline glows steadily through the studio window.
```

</details>

---


### 20. Sydney Harbour View

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-20` |
| **Camera** | Wide establishing |
| **Focus** | Ultra-wide |
| **Key Element** | Stage reflected in harbour with Sydney Opera House shell roof visible |
| **Atmosphere** | Night, reflections |
| **Tags** | `stage` `sydney` `opera-house` `atmosphere` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Ultra-wide shot from across Sydney Harbour, framing a concert stage on the foreshore as a purple beacon on the waterfront. The camera position places the Sydney Opera House's distinctive shell-roof silhouette to the right of frame, its white sails catching violet and lavender light from the concert. The stage lights are reflected in the harbour water in long, shimmering purple and violet streaks that stretch toward the camera. The Harbour Bridge arcs across the upper frame, its steel lattice outlined in soft lavender light. Between the Opera House and the concert stage, the dark harbour water becomes a canvas of reflected purple light. Sydney's CBD skyline glows in the distance with purple-tinted tower lights. Wide establishing — static or with an almost imperceptible slow zoom-in over 8 seconds. Ultra-wide — everything from the Opera House's shell roof through the harbour reflections to the concert stage is in focus. The concert as seen across one of the world's great harbours — the stage's purple energy radiating across the water to the Opera House, creating a dialogue between contemporary music and architectural icon. Night with reflections. The harbour connects the concert's energy to Sydney's cultural landmarks, the water multiplying the purple light. Electric violet (#9b0aa5) stage and its water reflection; deep purple (#2e008b) sky and dark water; soft lavender (#a082e6) on the Opera House sails and in harbour reflections; pink (#eb5adc) accent lights reflected; electric blue (#3750dc) on the Harbour Bridge lattice and CBD tower lights. Water choppy with shifting reflections; distant stage lights pulse; a harbour ferry crosses leaving a wake through the purple reflections; the Opera House sails glow steadily in violet.
```

</details>

---


### 21. Burj Khalifa Encore

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-21` |
| **Camera** | Fast zoom out |
| **Focus** | Wide |
| **Key Element** | Violet pyrotechnics with Burj Khalifa illuminated in background |
| **Atmosphere** | Night, explosive |
| **Tags** | `energy` `lights` `dubai` `electric` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

The encore moment at an outdoor concert in Dubai — the stage erupts with a massive burst of violet and pink pyrotechnics. Geysers of purple sparks shoot upward from the stage edges. Behind the spectacle, the Burj Khalifa towers into the night sky, its LED facade illuminated entirely in the purple-violet palette — a 828-meter vertical canvas of electric violet and deep purple patterns that synchronize with the pyrotechnics below. The camera rapidly zooms out to capture the full scale of the display — the concert's fireworks in the foreground and the world's tallest building as a purple beacon behind. The sparks arc and fall in glowing parabolas, trailing lavender smoke. The crowd erupts into a sea of raised hands and phone lights. Fast zoom out — starting close on the first spark eruption, pulling back rapidly to reveal the Burj Khalifa's full purple-lit height behind the spectacular display. Wide — the pyrotechnics and the Burj Khalifa fill the frame at multiple depths. The explosive power of the finale amplified by the world's tallest building as a purple-lit backdrop — contained violence of pyrotechnics dwarfed by architectural ambition. Night, explosive. The air fills with smoke, sparks, and purple light. The Burj Khalifa transforms the spectacle into something monumental. Electric violet (#9b0aa5) and pink (#eb5adc) pyrotechnic sparks; deep purple (#2e008b) smoke trails and Burj Khalifa patterns; soft lavender (#a082e6) in the illuminated smoke clouds; electric blue (#3750dc) on the Burj Khalifa's LED transitions; white-hot centers of each spark. Explosive — sparks arc upward and fall; smoke billows; the zoom-out reveals the Burj Khalifa's full height; the tower's LED patterns animate; crowd surges; the entire scene is kinetic and monumental.
```

</details>

---


### 22. Hong Kong Rain on Lights

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-22` |
| **Camera** | Static with rain |
| **Focus** | Detail |
| **Key Element** | Raindrops catching neon purple lights with Hong Kong skyline visible |
| **Atmosphere** | Night, light rain |
| **Tags** | `lights` `atmosphere` `hong-kong` `concert` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A light rain falls through concert spotlight beams at an outdoor venue on Hong Kong's waterfront. Each raindrop becomes a momentary streak of colored light — purple, violet, pink — as it passes through different beams. The camera captures the rain as thousands of tiny light trails against the dark sky. Behind the stage, Hong Kong's legendary skyline rises across Victoria Harbour — the towers of Central and Wan Chai lit in their nightly light show, but tonight all in the purple-violet palette. The wet surfaces of the stage equipment and crowd barriers reflect both the concert's purple lights and Hong Kong's skyscraper neon in smeared, impressionist pools. A spotlight beam becomes a visible cone of falling illuminated rain with the harbour and skyline beyond. Static, looking upward at about 45 degrees into the rain, spotlights, and Hong Kong's skyline. The rain falls toward and past the camera. Detail — some raindrops are frozen sharp; others are long streaks; Hong Kong's skyline is a glittering purple backdrop in soft focus. Rain as a natural light-catching medium — each drop a brief carrier of the purple-violet palette — with Hong Kong's electric skyline amplifying the neon atmosphere. Night, light rain over Hong Kong harbour. The rain adds a layer of magic to the concert, with the city's famous skyline as a massive purple-lit backdrop. Electric violet (#9b0aa5) raindrop streaks through the main beams; deep purple (#2e008b) sky; pink (#eb5adc) drops through accent lights; soft lavender (#a082e6) in the wet-surface reflections; electric blue (#3750dc) in the harbour and distant skyscraper lights. Rain falls continuously in streaks of light; puddle reflections shimmer with Hong Kong's skyline; spotlight beams become rain-shower curtains; the harbour glistens beyond.
```

</details>

---


### 23. Glastonbury Crowd Hands

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-23` |
| **Camera** | Slow tracking over |
| **Focus** | Medium |
| **Key Element** | Raised hands with Glastonbury Tor and Pyramid Stage visible |
| **Atmosphere** | Night |
| **Tags** | `crowd` `energy` `concert` `glastonbury` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A sea of raised hands at the Glastonbury Festival seen from a slightly elevated angle, stretching from the foreground to the distant Pyramid Stage. The iconic triangular Pyramid Stage structure glows in electric violet, its geometric frame a beacon of purple light. Beyond the stage, the distant silhouette of Glastonbury Tor with its ruined tower sits on the hilltop horizon, backlit by a deep purple sky. The hands are lit from below by the stage wash, creating a field of purple-pink-lit fingers against the dark sky. Wristbands add points of glowing violet. The hands move in slow, synchronized waves — following the music's rhythm. Phone screens held aloft add bright rectangular accents. The overall effect is organic, like a field of luminous sea anemones swaying in a current beneath the Tor. Slow tracking over the crowd — moving from above the crowd toward the Pyramid Stage, skimming at about 3 meters above hand height. Medium — the nearest hands are individual and detailed; further away they merge into an abstract purple-lit mass; the Pyramid Stage is crisp; Glastonbury Tor is a soft silhouette. The crowd's hands as a unified, living organism stretching toward the legendary Pyramid Stage — individual gesture dissolved into collective rhythm beneath the ancient Tor. Night — the Pyramid Stage light from ahead paints the underside of every raised hand in purple and pink, with Glastonbury Tor watching over the festival like a guardian. Electric violet (#9b0aa5) and pink (#eb5adc) underlit skin; deep purple (#2e008b) dark sky and Tor silhouette; soft lavender (#a082e6) wristband glow and Pyramid Stage frame; light blue (#7da0eb) phone screens. Hands sway in slow waves; phone screens appear and disappear; wristbands pulse; the tracking creates a flowing perspective over the living sea of hands toward the glowing Pyramid Stage.
```

</details>

---


### 24. Marrakech Vinyl Spin

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-24` |
| **Camera** | Macro orbit |
| **Focus** | Detail |
| **Key Element** | Vinyl spinning on riad rooftop with Koutoubia minaret visible |
| **Atmosphere** | Night, retro |
| **Tags** | `music` `rhythm` `marrakech` `electric` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A vinyl record spins on a turntable at a rooftop DJ set on a traditional Marrakech riad. The camera captures the record at macro level — the grooves are visible as concentric lines that catch the ambient purple light in shifting patterns. The record label at the center is a design in purple-violet tones. The tonearm sits in the groove, its cartridge reflecting a tiny version of the purple lights. Beyond the turntable, the riad's ornate zellige tilework and carved plaster arches frame the view. In the distance, the Koutoubia Mosque's famous minaret rises against the deep purple Moroccan night sky, its stone surfaces catching soft violet light. Warm pink-lavender light from the DJ booth equipment contrasts with the purple ambient. Macro orbit — slowly circling the spinning record, keeping the groove detail in focus as the reflections shift and the Koutoubia minaret drifts through the background. Detail — the grooves and their light reflections are the subject; the riad architecture and Koutoubia minaret beyond are soft purple bokeh. The vinyl record as both musical medium and optical surface — its grooves a physical encoding of sound — set against the ancient craft of Marrakech's architecture and the Koutoubia's timeless silhouette. Night, with a retro warmth on the riad rooftop. The turntable setup evokes analog craft in a city of artisanal tradition. Black vinyl catching electric violet (#9b0aa5) and soft lavender (#a082e6) reflections in the grooves; deep purple (#2e008b) in the record's shadowed areas and Moroccan night sky; pink (#eb5adc) label and zellige tile accents; warm pink-lavender from the booth lights; electric blue (#3750dc) on the Koutoubia's illuminated stone. The record spins at 33rpm — the grooves create concentric moving reflections; the orbit adds a second layer of shifting perspective revealing the Koutoubia; the tonearm vibrates microscopically; light patterns on the vinyl surface are hypnotic.
```

</details>

---


### 25. Final Beam over Paris

| Field | Detail |
| --- | --- |
| **ID** | `grona-lund-25` |
| **Camera** | Slow fade/dolly back |
| **Focus** | Wide |
| **Key Element** | Single purple beam rising alongside the illuminated Eiffel Tower |
| **Atmosphere** | Night, closing |
| **Tags** | `stage` `paris` `eiffel-tower` `atmosphere` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

The concert's final moment at a venue near the Champ de Mars, Paris. All stage lights — which have been a complex symphony of colors — slowly converge into a single, vertical beam of pure electric violet rising from the stage into the Parisian sky. Beside it, the Eiffel Tower stands illuminated entirely in the purple-violet palette — its iron lattice outlined in electric violet, its beacon replaced by a soft lavender pulse. The haze catches the concert beam beautifully, making it a solid column of purple light that mirrors the Tower's vertical thrust. As the camera slowly dollies back along the Seine, the beam and the Eiffel Tower become twin purple verticals — one ancient iron, one pure light — rising together into the Paris night. The crowd watches in silence. Then, gently, the beam fades to black, and only the Tower's purple glow and the city's permanent lights remain. Slow dolly back along the Seine — pulling away from the stage, contextualizing the beam alongside the Eiffel Tower within Paris's wider skyline. Wide — the beam and the Eiffel Tower are parallel vertical elements against the Paris rooftops. The purple beam as a twin to the Eiffel Tower — standing alongside Paris's most iconic structure, then vanishing, leaving only the Tower's purple silhouette and the memory of light. Night, closing. The energy shifts from chaos to order to silence. The beam connects the stage to the sky alongside the Tower for one final moment. Pure electric violet (#9b0aa5) in the beam; deep purple (#2e008b) sky; the Eiffel Tower in electric violet and soft lavender (#a082e6); pink (#eb5adc) on the Parisian rooftops; as the beam fades, the Tower's purple glow gradually dominates and the beam drains to dark (#34303d). Slow dolly back; the beam stands alongside the Eiffel Tower; haze drifts through the beam; the beam slowly dims; the Tower persists in purple as the concert light fades.
```

</details>

---


# 🧖 Dream: Floating Sauna Experience

> Wellness, steam, and stillness — 25 cinematic variations of a dream wellness ritual at the world's most breathtaking natural and thermal destinations.

| # | Variation | Camera | Focus | Key Element | Atmosphere |
| --- | --- | --- | --- | --- | --- |
| 1 | **Blue Lagoon Steam** | Slow tilt up | Medium | Dense steam rising from geothermal water at Blue Lagoon, Iceland | Misty geothermal, volcanic |
| 2 | **Fjord Plunge** | Slow-motion downward | Detail | Water surface breaking as body enters Norwegian fjord waters | Dawn, cold blue |
| 3 | **Kyoto Onsen Grain** | Macro drift | Extreme detail | Hinoki cypress wood grain in traditional Kyoto onsen bath | Warm, intimate |
| 4 | **Bosphorus Float** | Slow orbit | Wide | Floating hammam spa on the Bosphorus with mosque silhouettes | Blue hour, mist |
| 5 | **Marrakech Hot Stones** | Static with steam | Detail | Water hitting hot stones in a traditional Moroccan hammam | Warm interior |
| 6 | **Swiss Alps Breath Cloud** | Slow-motion | Detail | Visible breath cloud in cold Swiss Alpine air with Matterhorn behind | Cold exterior, dawn |
| 7 | **Lake Bled Mirror** | Low-angle wide | Ultra-wide | Perfect reflection on Lake Bled with church island and castle | Blue hour, dead calm |
| 8 | **Lapland Ice Crystals** | Macro | Extreme detail | Ice formations catching violet light in Finnish Lapland | Cold, crystalline |
| 9 | **Turkish Bath Glow** | Static | Detail | Glowing embers/heat source in ornate domed hammam in Istanbul | Warm interior, dim |
| 10 | **Azores Mist** | Slow dolly forward | Wide | Mist over volcanic hot springs on São Miguel island, Azores | Dawn, misty |
| 11 | **Bali Droplets** | Macro slow-motion | Extreme detail | Droplets on bamboo and stone in Balinese spa with rice terraces | Warm, tropical |
| 12 | **Cenote Bubbles** | Underwater | Detail | Bubbles rising in crystal-clear cenote waters, Yucatan | Cold, underwater |
| 13 | **Kyoto Incense Curl** | Static | Detail | Incense smoke curl in a Zen temple garden, Kyoto | Dim, atmospheric |
| 14 | **Finnish Lakeside Whisk** | Slow-motion swing | Detail | Birch whisk in Finnish lakeside sauna, lake visible through window | Warm interior |
| 15 | **Tromsø Arctic Pier** | Slow dolly | Wide | Frost-covered pier in Tromsø leading to Arctic sauna under Northern Lights | Winter dawn |
| 16 | **Budapest Thermal Rise** | Macro time-lapse | Detail | Warmth rising in ornate Art Nouveau Széchenyi thermal bath | Warm, building |
| 17 | **Dead Sea Ripple** | Overhead | Detail | Concentric ripple on mineral-rich Dead Sea water, desert hills | Still, meditative |
| 18 | **Santorini Linen** | Slow-motion drape | Detail | White linen draped with Santorini blue domes and caldera behind | Warm, Mediterranean |
| 19 | **Alpine Chalet Condensation** | Static with slow clear | Detail | Condensation on chalet window, Matterhorn visible beyond | Warm interior, contrast |
| 20 | **Blue Grotto Candles** | Slow dolly along | Detail | Candles flickering in sea cave with ethereal blue-purple light | Ethereal, cave |
| 21 | **Abisko Ice Hole** | Overhead drone | Wide | Ice hole under Northern Lights in Arctic Sweden, Abisko | Arctic night, aurora |
| 22 | **Sahara Heat Waves** | Static with distortion | Medium | Heat distortion over Sahara Desert dunes at twilight | Hot exterior, twilight |
| 23 | **Hallstatt Snow Scene** | Slow wide | Wide | Snowfall over alpine lakeside village of Hallstatt, Austria | Winter dusk, snow |
| 24 | **Thai Ritual Pour** | Slow-motion | Detail | Water ritual in ornate Thai wellness temple, Bangkok | Warm interior |
| 25 | **Taj Mahal Dawn** | Slow dolly back | Wide | Spa silhouette on Yamuna River with Taj Mahal visible at dawn | Dawn, clear |

---


### 1. Blue Lagoon Steam

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-01` |
| **Camera** | Slow tilt up |
| **Focus** | Medium |
| **Key Element** | Dense steam rising from geothermal water at Blue Lagoon, Iceland |
| **Atmosphere** | Misty geothermal, volcanic |
| **Tags** | `steam` `iceland` `heat` `glow` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

The Blue Lagoon, Iceland — dense white-gray steam rises from the milky geothermal water, billowing upward in slow, organic plumes against a stark volcanic landscape. Rough black lava rock formations frame the lagoon. A light source above — unseen, but casting deep purple and violet — illuminates the steam from behind, turning each plume into a column of glowing lavender and violet. The dark volcanic terrain absorbs most light, creating a primordial intimacy. The geothermal water glows a deep pink-lavender between the lava rock edges. Slow tilt up — starting on the glowing geothermal surface, rising through the steam plumes toward the purple Icelandic sky over 8 seconds. Medium — the steam is the mid-ground subject; the volcanic rock below is dark and slightly soft; the sky above is lost in purple-lit mist. Geothermal steam as the medium for light — Iceland's volcanic energy transforming water vapor into a visible, purple-lit sculpture. Misty geothermal, volcanic. The heat rises from deep within the earth. The air is thick with mineral-rich moisture. The only lights are the lagoon's glow and the purple ambient above. Deep pink-lavender (#eb5adc) on the geothermal surface; electric violet (#9b0aa5) and soft lavender (#a082e6) in the backlit steam; deep purple (#2e008b) in the lava rock and shadows; pink (#eb5adc) where the hot and cool light mix in the steam. Steam rises in slow, billowing plumes that curl and fold; the tilt follows the steam's upward journey; the geothermal glow pulses very gently with volcanic heat.
```

</details>

---


### 2. Fjord Plunge

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-02` |
| **Camera** | Slow-motion downward |
| **Focus** | Detail |
| **Key Element** | Water surface breaking as body enters Norwegian fjord waters |
| **Atmosphere** | Dawn, cold blue |
| **Tags** | `cold-plunge` `norway` `contrast` `immersion` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

The surface of a Norwegian fjord — dark, still, purple-tinted water flanked by towering cliff walls — is broken by an entry. In ultra slow motion, the water surface depresses, then erupts into a crown of droplets. Each droplet catches the dawn light in purple, lavender, and cold blue. Beneath the surface, a cloud of silver bubbles expands. The dramatic cliff walls of the fjord rise vertically on both sides, their ancient rock faces casting deep purple shadows. The water's surface tension creates a temporary membrane before yielding. Slow-motion downward — capturing the entry and splash from a 45-degree angle above, fjord walls framing the shot. Detail — the splash crown is sharp; individual droplets are frozen; the fjord's depth is soft purple. The moment of immersion — the shock of glacial fjord water captured as a beautiful, violent event between Norway's dramatic cliff walls. Dawn, cold blue. The early morning light filters down between the fjord walls, cold and purple, with no warmth yet. The water temperature is near-freezing — the visual language should feel cold. Deep purple (#2e008b) in the undisturbed fjord water; electric blue (#3750dc) and light blue (#7da0eb) in the cold splash highlights; soft lavender (#a082e6) in the frozen droplets; silver-white in the bubbles; deep purple (#2e008b) on the cliff walls. Ultra-slow-motion splash: water depression, crown formation, droplet separation, bubble cloud expansion. The violence of the entry rendered as slow, beautiful physics against the ancient fjord.
```

</details>

---


### 3. Kyoto Onsen Grain

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-03` |
| **Camera** | Macro drift |
| **Focus** | Extreme detail |
| **Key Element** | Hinoki cypress wood grain in traditional Kyoto onsen bath |
| **Atmosphere** | Warm, intimate |
| **Tags** | `wood` `kyoto` `minimal` `zen` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Extreme macro of hinoki cypress wood — the edge of a traditional Japanese onsen bath in Kyoto. The wood grain is a landscape of ridges and valleys, its growth rings telling centuries of story. Warm pink-lavender light from one direction catches the grain ridges while purple-tinted shadow fills the valleys. The wood has the slight sheen of mineral-rich hot spring water. Tiny droplets of onsen water sit in the grain channels like rivers on a topographic map. A single knot in the hinoki is a dark eye in the pink-lavender field. Macro drift — slowly panning across the hinoki surface, as if exploring a terrain from above. Extreme detail — individual wood fibers and mineral water droplets are visible. The drift takes the focus through different depth planes. The hinoki cypress as a micro-landscape — the prized Japanese wood's pattern language rendered visible by the interplay of warm and purple light in a Kyoto onsen. Warm, intimate. The macro perspective transforms the traditional onsen bath edge into an alien, beautiful terrain. Warm pink-lavender (#eb5adc) on the grain ridges; deep purple (#2e008b) in the grain valleys; electric violet (#9b0aa5) in the deeper shadows; soft lavender (#a082e6) on the mineral water droplets catching reflected light through a shoji screen. Slow lateral drift across the hinoki surface; mineral water droplets merge and slide imperceptibly; a rising steam distortion softens the far edge of the macro view.
```

</details>

---


### 4. Bosphorus Float

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-04` |
| **Camera** | Slow orbit |
| **Focus** | Wide |
| **Key Element** | Floating hammam spa on the Bosphorus with mosque silhouettes |
| **Atmosphere** | Blue hour, mist |
| **Tags** | `floating` `istanbul` `wellness` `stillness` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A floating hammam spa structure — an ornate dome with warm light spilling from its arched windows — floats on the waters of the Bosphorus, the legendary strait dividing Europe and Asia in Istanbul. The distinctive silhouettes of the Sultan Ahmed Mosque and Hagia Sophia with their minarets and domes are visible on the western shore, their profiles catching the last ambient light in deep purple. To the east, the Asian shore's hillside rises against the violet sky. The Bosphorus surface is a flawless mirror of the blue-hour sky, making the hammam appear to hover between the reflected city and the real one. A thin layer of mist floats just above the water, catching the hammam's window glow in soft pink-lavender wisps. Slow orbit — the camera circles the floating hammam roughly 20 degrees over 8 seconds, shifting the backdrop from the mosque silhouettes to the Asian shore. Wide — the hammam, its reflection, the mist layer, and Istanbul's landmark silhouettes are all in focus. The floating hammam centered in the Bosphorus — the ultimate Istanbul wellness fantasy, bathing with the city's most iconic skyline as your backdrop. Blue hour with low mist on the Bosphorus. The scene is hushed and meditative despite the monumental setting. The city feels distant, dream-like. Warm pink-lavender from the hammam windows; deep purple (#2e008b) sky and its water mirror; the mosque silhouettes in muted deep purple; electric violet (#9b0aa5) at the horizon; soft lavender (#a082e6) mist catching the window glow; the Asian shore as a dark purple mass. Slow orbit; the reflected city shifts with the camera; mist drifts lazily; window glow flickers (fire inside); the hammam bobs imperceptibly; a minaret light glows steadily.
```

</details>

---


### 5. Marrakech Hot Stones

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-05` |
| **Camera** | Static with steam |
| **Focus** | Detail |
| **Key Element** | Water hitting hot stones in a traditional Moroccan hammam |
| **Atmosphere** | Warm interior |
| **Tags** | `heat` `marrakech` `ritual` `steam` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Inside a traditional Moroccan hammam in Marrakech — water is poured from an ornate brass bucket onto searing hot stones set into the tiled floor. The moment of contact produces an explosive release of steam — a violent, beautiful eruption that fills the frame. The stones themselves glow deep pink-lavender in their crevices. The steam shoots upward and outward through the hammam's star-shaped ventilation openings, catching purple light from above. The intricate zellige tilework on the walls shimmers with moisture, its geometric patterns rendered in deep purple and violet tones. Water droplets that don't immediately evaporate dance and skitter across the hot stone surface. Static, positioned at stone level, facing the pour point directly. The steam eruption fills the frame within the hammam architecture. Detail — the stone surfaces and the point of water contact are sharp; the steam explosion above is volumetric and slightly soft; the zellige tiles shimmer at the edges. The moment of transformation in the Marrakech hammam — liquid water becoming steam on contact, a phase change rendered as visual spectacle within centuries-old architecture. Warm interior — the heat is at its peak in the hammam's hottest room. The air is already saturated with moisture; this pour pushes it further. Deep pink-lavender on the hot stones; white-to-lavender (#a082e6) steam; deep purple (#2e008b) in the dark hammam interior and zellige patterns; electric violet (#9b0aa5) in the backlit upper steam; dancing water droplets catch pink (#eb5adc) light. Water stream contacts stones; explosive steam eruption; skittering water droplets; the steam plume rises through star-shaped openings; the brass bucket tilts (seen at frame edge) controlling the pour.
```

</details>

---


### 6. Swiss Alps Breath Cloud

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-06` |
| **Camera** | Slow-motion |
| **Focus** | Detail |
| **Key Element** | Visible breath cloud in cold Swiss Alpine air with Matterhorn behind |
| **Atmosphere** | Cold exterior, dawn |
| **Tags** | `breath` `swiss-alps` `contrast` `mist` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Close-up of a visible breath cloud — a warm exhalation in freezing air. The breath is backlit by the purple dawn light, turning it into a slow-motion sculpture of swirling vapor. Each exhale creates a new shape: first a compact jet, then it blooms and unfolds, curling at the edges before dissipating into the purple air. The anonymous subject is barely visible — just the silhouette of a chin and lips at the very bottom of frame. The background is a purple gradient dawn sky. Slow-motion, fixed on the breath zone. Multiple exhales are captured in the 8 seconds, each creating and destroying a new vapor sculpture. Detail — the breath vapor is sharp in the center of its cloud; the edges dissolve into the purple air. Breath as visible proof of the body's heat meeting the cold outside — the primal contrast of the sauna experience. Cold exterior, dawn. The temperature contrast between the warm body (just out of the sauna) and the freezing morning air is extreme. White and soft lavender (#a082e6) in the breath vapor; electric violet (#9b0aa5) backlight glow through the vapor; deep purple (#2e008b) background sky; pink (#eb5adc) at the edges where vapor meets purple light. Slow-motion breath clouds: ejection, bloom, curl, dissipation. Each breath is unique. The vapor interacts with any ambient air movement, creating unpredictable, beautiful shapes.
```

</details>

---


### 7. Lake Bled Mirror

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-07` |
| **Camera** | Low-angle wide |
| **Focus** | Ultra-wide |
| **Key Element** | Perfect reflection on Lake Bled with church island and castle |
| **Atmosphere** | Blue hour, dead calm |
| **Tags** | `lake-bled` `lake` `reflections` `stillness` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A perfectly symmetrical composition on the waters of Lake Bled — Slovenia's iconic glacial lake surrounded by the Julian Alps. The frame is divided exactly at the waterline. Above: a wellness pavilion with warm-lit windows, the famous Bled Island with its Pilgrimage Church of the Assumption rising from the lake's center, and the medieval Bled Castle perched high on its cliff above the far shore, all beneath the deep purple-violet blue-hour sky. Below: a flawless mirror reflection of everything above, slightly darker and more purple. The Alpine meadows slope gently to the waterline. Lake Bled's sheltered glacial waters are perfectly still. Low-angle wide — the lens is at exact waterline level, creating the symmetrical split. Static or with an imperceptible forward float. Ultra-wide — sharp from the nearest water surface to the church island and castle cliff. The symmetry demands total clarity. Lake Bled as one of the world's most serene bodies of water — the wellness pavilion floating between the reflected church island and the castle, suspended between two purple worlds. Blue hour, dead calm. Not a breath of wind on Bled's sheltered glacial surface. The Julian Alps create a natural amphitheatre of silence. Deep purple (#2e008b) sky and its deeper reflection; electric violet (#9b0aa5) at both horizons; soft lavender (#a082e6) in the lighter sky; warm pink-lavender from the pavilion windows doubled by the reflection; the castle and church silhouettes reading as deep purple in the evening light. Near-static — the only movement is a very slight bob of the pavilion and an occasional micro-ripple that momentarily distorts the perfect church island reflection.
```

</details>

---


### 8. Lapland Ice Crystals

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-08` |
| **Camera** | Macro |
| **Focus** | Extreme detail |
| **Key Element** | Ice formations catching violet light in Finnish Lapland |
| **Atmosphere** | Cold, crystalline |
| **Tags** | `ice` `lapland` `minimal` `contrast` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Extreme macro of ice crystals formed on a sauna window in Finnish Lapland. The crystals are intricate fractal patterns — fern-like dendrites and hexagonal plates — each catching the ambient purple light at different angles. Through the ice, the snow-covered boreal forest of Lapland is visible but distorted into abstract blobs of purple-blue light. The ice itself is a spectrum of clear, white, and pale blue, with the purple Northern light turning it into a natural stained-glass window. Beyond, the dark shapes of snow-laden spruce trees are visible. Macro — static or with an impossibly slow drift across the ice surface, revealing new crystal formations. Extreme detail — individual ice crystal branches are sharp; the snow-covered Lapland forest beyond is bokeh. Ice crystals as nature's fractal art in Finnish Lapland — the Arctic cold's beautiful answer to the sauna heat within. The contrast between frozen surface and warm interior is the essence of Nordic wellness. Cold, crystalline. The ice exists because the interior is warm and the Lapland exterior is deeply sub-zero — each crystal is evidence of the extreme temperature gradient. Clear and pale blue ice; electric violet (#9b0aa5) and soft lavender (#a082e6) light caught in crystal facets; deep purple (#2e008b) in the shadows between crystals; warm pink-lavender bokeh from the interior; occasional pink (#eb5adc) refraction through the crystal prisms. Extremely slow drift across the crystal landscape; occasional crystal glint as the angle shifts; the Lapland forest beyond the ice shimmers softly; a very slow melt — a tiny water bead forming and beginning to run.
```

</details>

---


### 9. Turkish Bath Glow

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-09` |
| **Camera** | Static |
| **Focus** | Detail |
| **Key Element** | Glowing embers/heat source in ornate domed hammam in Istanbul |
| **Atmosphere** | Warm interior, dim |
| **Tags** | `istanbul` `heat` `glow` `wellness` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Close-up of the heat source in a grand Istanbul hammam — beneath the ornate marble göbek taşı (heated stone platform). Glowing embers pulse in deep pink-lavender, violet, and pink through the iron grate — a miniature volcanic landscape beneath centuries-old Ottoman architecture. The embers pulse with residual heat, brightening and dimming in slow breathing cycles. Above, heat distortion warps the view of the soaring domed ceiling with its star-shaped light openings. Shafts of purple light stream down through the perforated dome, crossing the rising heat. Tiny sparks occasionally float upward from the ember surface into the dome's vast space. Static — locked on the ember bed beneath the marble platform. The stillness allows the viewer to become mesmerized by the slow pulsing. Detail — the ember surfaces are sharp, showing cracked charcoal texture and glowing fissures; the domed ceiling above shimmers with heat distortion and purple light shafts. The ember bed as the heart of the Istanbul hammam — its steady glow is the source of all warmth beneath the magnificent Ottoman dome. Warm interior, dim. The ember glow is the primary light source, casting the marble and tilework in its pink-lavender-purple spectrum. Deep pink-lavender (#eb5adc) in the ember cores; the marble surfaces shift to deep purple (#2e008b) and electric violet (#9b0aa5); the dome's light shafts carry soft lavender (#a082e6); the heat distortion above carries pink (#eb5adc) shifts through the perforated stars. Embers pulse slowly (brightening over 2 seconds, dimming over 3); occasional tiny sparks drift upward into the dome; heat distortion shimmers; purple light shafts waver as steam crosses them; the dome's star openings create slowly rotating light patterns.
```

</details>

---


### 10. Azores Mist

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-10` |
| **Camera** | Slow dolly forward |
| **Focus** | Wide |
| **Key Element** | Mist over volcanic hot springs on São Miguel island, Azores |
| **Atmosphere** | Dawn, misty |
| **Tags** | `mist` `azores` `water` `stillness` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A thin layer of mist — only about half a meter thick — hovers over the surface of a volcanic hot spring on São Miguel island in the Azores. This is one of Earth's most otherworldly wellness destinations — geothermal pools set within lush volcanic calderas in the mid-Atlantic. The camera glides through the mist layer at water level, pushing through it like moving through a violet cloud. Through breaks in the mist, the dramatic caldera walls are visible — steep volcanic cliffs covered in deep purple-tinted hydrangea and dense subtropical vegetation. Steam rises from multiple geothermal vents scattered across the terrain. Above the mist, the volcanic ridgeline is a dark mass against the purple Atlantic dawn sky. Slow dolly forward through the mist layer at water level, approaching the caldera wall from the hot spring center. Wide — the mist has depth; the volcanic caldera walls reveal themselves through the mist; the ridgeline frames the background. The mist as a veil between the geothermal waters and the volcanic landscape of the Azores — an Atlantic island paradise emerging from a purple cloud of volcanic steam. Dawn, misty. The island is still asleep. The mist transforms the volcanic hot spring into a dreamscape where São Miguel feels like an undiscovered world. Soft lavender (#a082e6) and white in the illuminated mist; deep purple (#2e008b) water below and sky above; electric violet (#9b0aa5) where the mist is backlit by the brightening Atlantic horizon; the volcanic rock adds deep purple-violet accents. Forward glide through the mist toward the caldera; mist parts and closes; the volcanic ridgeline grows clearer; occasional clear patches reveal the dark geothermal water below; a heron silhouette takes flight from the caldera shore.
```

</details>

---


### 11. Bali Droplets

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-11` |
| **Camera** | Macro slow-motion |
| **Focus** | Extreme detail |
| **Key Element** | Droplets on bamboo and stone in Balinese spa with rice terraces |
| **Atmosphere** | Warm, tropical |
| **Tags** | `water` `bali` `wellness` `minimal` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Extreme macro of water droplets condensing and running down the smooth stone and bamboo surface of an open-air Balinese spa. Each droplet is a perfect lens, refracting and inverting the warm pink-lavender light from hanging lanterns. The droplets merge, grow heavy, and begin to slide, leaving wet trails on the carved stone. The bamboo grain is visible through and around the droplets. In the background, terraced rice paddies cascade down the hillside — their flooded surfaces catching purple twilight. A faint purple ambient light from the tropical sky mixes with the warm interior, creating a dual-tone illumination. Frangipani petals rest near the droplets. Macro slow-motion — fixed on a section of the stone-and-bamboo surface, capturing the slow life cycle of tropical condensation droplets. Extreme detail — individual droplets are large enough to see refracted images of the rice terraces within them. The stone and bamboo texture is fully resolved. Condensation as evidence of Bali's humid warmth — the tropical air manifested as jewel-like droplets on natural surfaces, with the iconic rice terraces visible as refracted purple miniatures. Warm, tropical. The high humidity of Bali's highland spa region is visible in the condensation. The air itself feels thick and alive. Warm pink-lavender (#eb5adc) refracted through the droplets; the wet stone is darker, revealing deep purple (#2e008b) in its grain; soft lavender (#a082e6) from the twilight sky catching individual droplets; the rice terrace reflections are electric violet (#9b0aa5). Droplets form, grow, merge, and begin to slide in ultra-slow-motion; each sliding droplet leaves a wet trail that darkens the stone; new droplets form in the trail; a frangipani petal catches a falling droplet.
```

</details>

---


### 12. Cenote Bubbles

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-12` |
| **Camera** | Underwater |
| **Focus** | Detail |
| **Key Element** | Bubbles rising in crystal-clear cenote waters, Yucatan |
| **Atmosphere** | Cold, underwater |
| **Tags** | `cenote` `water` `immersion` `contrast` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Underwater perspective looking upward inside a Yucatan cenote — Mexico's legendary natural sinkholes filled with crystal-clear water. A cloud of silver-white air bubbles rises toward the surface, each bubble a tiny spherical mirror reflecting the purple world above. The cenote water is tinted deep purple-blue by shafts of light penetrating through the circular opening above. The limestone walls of the cenote surround the frame — ancient stalactites and mineral formations creating a cathedral-like underwater space. The surface above is a shimmering, distorted window — the jungle canopy and purple sky visible but wavering. Light beams penetrate the cenote in dramatic shafts of electric violet. Underwater, looking up at about 30 degrees within the cenote. Static, allowing the bubbles to rise through and past the frame. Detail — the nearest bubbles are sharp enough to see reflections of the cenote opening in them; distant bubbles and the surface are soft and dreamy; the limestone walls provide textural depth. The bubbles as ascending spheres of captured breath — each one a tiny reflection of the cenote's circular sky window, rising from the ancient depths. Cold, underwater in a sacred cenote. The world below the surface is silent, slow, and deeply purple. A meditative counterpoint to the jungle heat above. Deep purple (#2e008b) and electric blue (#3750dc) in the cenote water body; soft lavender (#a082e6) and electric violet (#9b0aa5) in the dramatic light shafts; silver-white bubbles with purple reflections; the limestone walls are light blue (#7da0eb) where lit. Bubbles rise in slow, wobbly ascent; they merge when they touch, forming larger bubbles that accelerate; light shafts shift as the surface undulates; the overall feeling is peaceful and ascending through ancient geological time.
```

</details>

---


### 13. Kyoto Incense Curl

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-13` |
| **Camera** | Static |
| **Focus** | Detail |
| **Key Element** | Incense smoke curl in a Zen temple garden, Kyoto |
| **Atmosphere** | Dim, atmospheric |
| **Tags** | `kyoto` `zen` `minimal` `stillness` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A single, elegant curl of incense smoke rises from a bronze kōro (incense burner) in a Kyoto Zen temple garden, illuminated by a narrow beam of purple light filtering through bamboo blinds against a dark tatami interior. The curl follows a complex, organic spiral — twisting, folding back on itself, branching — creating a temporary natural sculpture. The beam catches the incense smoke at different densities — thick sections glow brightly, thin sections are translucent ghosts. Beyond, a raked karesansui (rock garden) is barely visible in deep indigo-purple. The scent of sandalwood is implied by the richness of the smoke. Static — the incense curl is the performance; the camera is the audience. Centered composition with the temple garden as subtle backdrop. Detail — the smoke edges are sharp where dense, dissolving to nothing where thin. The temple garden background is a uniform deep purple. The incense curl as calligraphy — a natural brushstroke of smoke writing in purple light against the darkness of a Kyoto temple. Wabi-sabi in motion. Dim, atmospheric. This is a meditative moment in an ancient Zen temple — a single element in near-darkness. Wellness stripped to its essence. White-to-lavender (#a082e6) in the dense smoke; electric violet (#9b0aa5) at the beam edges; deep purple (#2e008b) background and temple interior; occasional pink (#eb5adc) where the thinnest wisps catch the light at oblique angles. The incense curl rises and evolves continuously — no two frames are alike. It twists, folds, blooms, and dissipates in a perpetual, unrepeatable dance above the bronze burner.
```

</details>

---


### 14. Finnish Lakeside Whisk

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-14` |
| **Camera** | Slow-motion swing |
| **Focus** | Detail |
| **Key Element** | Birch whisk in Finnish lakeside sauna, lake visible through window |
| **Atmosphere** | Warm interior |
| **Tags** | `finland` `ritual` `heat` `steam` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A traditional Finnish birch whisk (vihta) swings through the steamy sauna air in slow motion inside a lakeside sauna in Finland's lake district. The bundle of birch branches with their small dark leaves cuts through the steam, creating swirling vortices in its wake. Water droplets fly off the leaves in a spray pattern. The leaves are backlit by the purple-pink-lavender sauna light, making them glow translucent violet with purple edges. Through the sauna window, a pristine Finnish lake is visible — its surface a perfect mirror of the purple sky, ringed by birch forest. Steam parts and reforms around the whisk's path. Slow-motion swing — the camera tracks the whisk through its arc, positioned to catch the backlit leaf spray, steam vortices, and the lake glimpsed through the window. Detail — the whisk bundle and its immediate spray zone are sharp; the lake beyond the window is soft purple bokeh; the steam-filled background is soft purple. The vihta as the authentic tool of Finnish wellness ritual — birch leaves and steam and heat combined in the land where sauna was born, with the quintessential Finnish lake visible outside. Warm interior — the lakeside sauna is at full heat. Steam is dense. The whisk ritual is the peak of the Finnish sauna experience. Translucent violet leaves backlit with pink-lavender and electric violet (#9b0aa5); water droplets catching purple and pink (#eb5adc) light; deep purple (#2e008b) in the background steam and lake beyond; soft lavender (#a082e6) in the nearest steam wisps and lake reflection. The whisk swings in a slow arc; leaves flutter; water droplets spray in a fan pattern; steam vortices spiral in the whisk's wake; through the window, the lake surface ripples gently.
```

</details>

---


### 15. Tromsø Arctic Pier

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-15` |
| **Camera** | Slow dolly |
| **Focus** | Wide |
| **Key Element** | Frost-covered pier in Tromsø leading to Arctic sauna under Northern Lights |
| **Atmosphere** | Winter dawn |
| **Tags** | `ice` `tromso` `arctic` `nordic` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A frost-covered pier extends from the shore of Tromsø — the "Gateway to the Arctic" in northern Norway, one of the world's most famous destinations for Northern Lights and Arctic wellness. Every surface of the pier is coated in white frost crystals that catch the pre-dawn purple light. The iconic Arctic Cathedral (Ishavskatedralen) with its dramatic triangular silhouette is visible across the Tromsøysundet strait, bathed in soft lavender light. At the pier's end, a floating Arctic sauna structure glows pink-lavender from within. Above, the aurora borealis shimmers in curtains of electric violet and soft lavender across the deep purple sky — Tromsø's legendary Northern Lights display. Slow dolly forward along the Tromsø pier, creating a sense of approach toward the warm Arctic sauna — the iconic walk every polar bather knows. Wide — the frosted pier details in the foreground; the Arctic Cathedral silhouette across the water; the sauna, aurora, and dawn sky ahead. The Tromsø pier as a pilgrimage path to Arctic wellness — beneath the Northern Lights, where Norway's legendary cold meets the warmth of the sauna tradition. Winter dawn in Tromsø — Arctic cold. The frost is thick. The Norwegian mountains stand as dark purple guardians around the fjord. White frost with lavender (#a082e6) and electric violet (#9b0aa5) tints; deep purple (#2e008b) sky and fjord water; the Arctic Cathedral as a soft lavender silhouette; warm pink-lavender from the sauna windows; aurora curtains in electric violet and soft lavender above. Slow forward dolly; frost crystals catch and release light; the sauna's warm glow grows; the aurora shimmers overhead; breath-like mist drifts at the pier surface.
```

</details>

---


### 16. Budapest Thermal Rise

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-16` |
| **Camera** | Macro time-lapse |
| **Focus** | Detail |
| **Key Element** | Warmth rising in ornate Art Nouveau Széchenyi thermal bath |
| **Atmosphere** | Warm, building |
| **Tags** | `budapest` `heat` `ritual` `glow` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Inside the Széchenyi Thermal Baths in Budapest — one of the world's grandest thermal bath complexes. The camera captures an ornate Art Nouveau temperature gauge mounted on a marble column as the thermal water's warmth builds. The gauge's brass housing catches warm pink-lavender light from the thermal pool's underwater illumination while purple light from the vaulted ceiling creates a cool accent on its glass surface. The surrounding architecture is magnificent — ornate columns, mosaic tilework, and the grand Neo-Baroque dome overhead, all rendered in deep purple and electric violet tones. Condensation beads form on the gauge's glass face. Steam curls rise from the thermal water surface nearby. Macro time-lapse feel — the temperature building is the drama, framed by the grand Széchenyi architecture. Detail — the gauge and its ornate brass housing are crisp; the magnificent bath architecture softens at the edges but remains recognizable. The thermal gauge as the objective witness to Budapest's legendary geothermal warmth — a scientific instrument surrounded by the world's most opulent bathing architecture. Warm, building. The thermal water temperature is rising. The Széchenyi Baths' grandeur amplifies the ritual of warming. Warm pink-lavender (#eb5adc) on the brass housing; the gauge face reflects both pink-lavender (thermal water) and electric violet (#9b0aa5) (from the dome); deep purple (#2e008b) in the architectural shadows and marble; soft lavender (#a082e6) condensation droplets on glass. Steam curls rise from the thermal water surface; condensation droplets form and grow on the glass; the warm-cool light balance shifts; the ornate architecture catches flickering underwater light reflections.
```

</details>

---


### 17. Dead Sea Ripple

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-17` |
| **Camera** | Overhead |
| **Focus** | Detail |
| **Key Element** | Concentric ripple on mineral-rich Dead Sea water, desert hills |
| **Atmosphere** | Still, meditative |
| **Tags** | `dead-sea` `water` `zen` `minimal` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Looking straight down at the perfectly still surface of the Dead Sea — Jordan. A single mineral-rich water drop falls and strikes the surface, creating a set of concentric ripple rings that expand outward in a perfect circle. The hyper-saline water reflects the purple twilight sky, so each ripple ring is a moving circle of light and dark purple. The water has an oily, mineral sheen — thicker than ordinary water — giving the ripples a unique, almost viscous quality. Salt crystal formations are visible at the frame edges where the shore begins. The ripples interact with the reflected image of desert hills beyond, momentarily distorting their deep purple silhouette. As the ripples reach the frame edge, the Dead Sea returns to its legendary stillness. Overhead — looking straight down at the Dead Sea surface. Static. The geometry of the expanding circles on the mineral water is the entire composition. Detail — the ripple edges are sharp; the reflected desert hills and sky in the water are visible but secondary to the wave pattern; salt crystals at edges provide texture. The single ripple on the world's saltiest body of water — one action creating expanding circles on a surface so mineral-rich it behaves unlike any other water on Earth. Still, meditative. The Dead Sea is so quiet that a single drop creates a visible event. Ultimate ancient calm at the lowest point on Earth. Deep purple (#2e008b) in the still mineral water; the ripple crests catch soft lavender (#a082e6) and electric violet (#9b0aa5) sky reflections; light blue (#7da0eb) in the salt crystal formations; the drop impact creates a momentary white flash against the purple surface. The drop impact; concentric ripples expanding at decreasing speed through the thick mineral water; the reflected desert hills fragmenting and reassembling; the slow return to perfect stillness.
```

</details>

---


### 18. Santorini Linen

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-18` |
| **Camera** | Slow-motion drape |
| **Focus** | Detail |
| **Key Element** | White linen draped with Santorini blue domes and caldera behind |
| **Atmosphere** | Warm, Mediterranean |
| **Tags** | `santorini` `zen` `ritual` `wellness` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A white linen towel falls through the air in extreme slow motion on a Santorini spa terrace, caught in a cross-light of warm pink-lavender from one side and electric violet from the other. Behind, the iconic Santorini caldera view stretches — whitewashed buildings with blue-purple tinted domes cascading down the cliff face, the volcanic caldera's deep purple waters far below. The fabric billows, folds, and ripples as the Aegean breeze catches it — each fold creating complex shadows in purple while the surfaces facing the warm light glow pink-lavender-white. The towel slowly settles onto a smooth stone terrace ledge, its folds recording the motion of its fall. The linen's weave texture is visible at the macro level. Slow-motion drape — tracking the towel's descent from a 45-degree angle, close enough to see the fabric texture with the caldera behind. Detail — the nearest fabric folds are razor-sharp; the Santorini caldera and domes behind are soft purple bokeh; the falling motion creates soft areas where the fabric is in between positions. The white linen as a surface for dual light — warm and purple — framed against the world's most iconic caldera view, symbolizing Mediterranean wellness purity. Warm, Mediterranean. The golden hour on Santorini — Aegean breeze, volcanic beauty, and the simplicity of white linen. White linen with warm pink-lavender (#eb5adc) highlights and electric violet (#9b0aa5) shadows in the folds; the caldera water is deep purple (#2e008b); the domes catch soft lavender (#a082e6); the falling motion blur has a pink (#eb5adc) tint against the volcanic sky. Ultra-slow-motion drape — the towel descends, billows in the Aegean breeze, catches air, folds, and settles. Each fold is a unique event against the Santorini backdrop.
```

</details>

---


### 19. Alpine Chalet Condensation

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-19` |
| **Camera** | Static with slow clear |
| **Focus** | Detail |
| **Key Element** | Condensation on chalet window, Matterhorn visible beyond |
| **Atmosphere** | Warm interior, contrast |
| **Tags** | `swiss-alps` `contrast` `steam` `water` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A Swiss Alpine chalet spa window is completely fogged with condensation. Through the misted glass, the majestic Matterhorn and surrounding Alpine peaks beyond are visible as soft, impressionist blurs of color — deep purple mountain silhouettes, violet sky, snow-covered ridges. A single streak appears as condensation begins to run, creating a clear channel through the fog. Through this channel, the Matterhorn snaps into sharp, vivid purple clarity — a window within a window revealing one of Earth's most iconic peaks. More streaks follow, creating abstract vertical clear paths through the fog, each revealing a different slice of the Alpine panorama. Static — close on the chalet window surface. The clearing condensation revealing the Matterhorn is the action. Detail — the condensation droplets on the glass are in focus; the Alpine world beyond shifts between soft (through fog) and sharp (through clear streaks). The condensation as a veil between the warm chalet interior and the freezing Swiss Alps exterior — and the act of clearing it as a slow reveal of the Matterhorn. Warm interior contrasting with the frozen Alpine exterior. The condensation is the visible boundary between cozy warmth and mountain cold. The fogged glass is a neutral gray-lavender; the clear streaks reveal deep purple (#2e008b) mountains and electric violet (#9b0aa5) sky; soft lavender (#a082e6) in the diffused fog sections; the condensation droplets themselves catch warm pink-lavender from the chalet interior; light blue (#7da0eb) in the snow-covered peaks. Condensation streaks slowly growing as gravity pulls water down; new clear channels appearing; the Matterhorn view through them sharpening; the Alpine world being gradually revealed in vertical stripes.
```

</details>

---


### 20. Blue Grotto Candles

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-20` |
| **Camera** | Slow dolly along |
| **Focus** | Detail |
| **Key Element** | Candles flickering in sea cave with ethereal blue-purple light |
| **Atmosphere** | Ethereal, cave |
| **Tags** | `capri` `glow` `ritual` `zen` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Inside the Blue Grotto of Capri — a legendary sea cave where light enters through an underwater opening, filling the space with an ethereal luminescence. A row of small votive candles sits on a natural rock ledge inside the grotto, their flames flickering in unison with the gentle cave air currents. The camera moves slowly along the row, passing each candle. Each flame is a warm pink-lavender core surrounded by a soft purple halo (from the grotto's natural blue-purple light mixing with the flame's warm tone). The candles cast dancing shadows on the cave walls — ancient limestone surfaces that shimmer with the reflected light from the water below. The grotto water itself glows an otherworldly electric blue-purple, illuminated from beneath by the underwater light entrance. Stalactites hang above, catching candlelight in lavender points. Slow dolly along the candle row at flame height, each candle passing through focus in sequence within the Blue Grotto. Detail — each candle flame is momentarily razor-sharp as the dolly passes, with the others falling to soft bokeh; the grotto walls and luminous water provide atmospheric depth. The candle flames as living light within the Blue Grotto — each one a warm human presence in one of nature's most magical light chambers. Ethereal, cave. The Blue Grotto's supernatural luminescence envelops everything. The candles add warmth to the cave's cool light. Warm pink-lavender flame cores; soft lavender (#a082e6) halos around each flame; electric blue (#3750dc) and deep purple (#2e008b) in the grotto water and cave shadows; electric violet (#9b0aa5) on the wet cave walls; light blue (#7da0eb) in the water's luminescence. Slow dolly; each flame flickers independently but in sympathetic rhythm; shadows dance on the cave walls; the grotto water shimmers and pulses with light from below; the focus shift from candle to candle creates a breathing, rack-focus effect.
```

</details>

---


### 21. Abisko Ice Hole

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-21` |
| **Camera** | Overhead drone |
| **Focus** | Wide |
| **Key Element** | Ice hole under Northern Lights in Arctic Sweden, Abisko |
| **Atmosphere** | Arctic night, aurora |
| **Tags** | `ice` `abisko` `cold-plunge` `wellness` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Bird's-eye view of frozen Lake Torneträsk near Abisko — Sweden's premier Northern Lights viewing location in Arctic Lapland. The ice is white-gray with purple shadows and frost patterns. A dark circular hole has been cut in the ice — a perfect black circle of open water that reads as a portal to another world. Next to the hole, a sauna sits in its own cleared area on the ice. Steam rises from the sauna's chimney — a white plume against the purple aurora-lit sky. The Northern Lights blaze overhead in curtains of electric violet and soft lavender. Footprints in the frost lead from the sauna to the ice hole. The Scandinavian Mountains (Scandes) rise along the Norwegian border to the west; Abisko's dark boreal forest lines the shore. The frozen lake stretches vast and wild beneath the aurora. Overhead drone — high enough to see the sauna, ice hole, and the surrounding Abisko wilderness. Slow descent over 8 seconds. Wide — the graphic elements (dark circle, white ice, sauna rectangle, aurora sky) are all sharp in a minimalist composition. The ice hole as a dark portal in Lake Torneträsk's frozen surface — framed by Abisko's pristine Arctic wilderness and the Northern Lights, this is one of the world's most dramatic settings for ice bathing. Arctic night in Abisko — the composition is almost abstract from above, with the aurora providing a celestial purple light show. White-gray ice with purple (#2e008b) shadows; the ice hole is near-black with electric violet (#9b0aa5) aurora reflections; soft lavender (#a082e6) in the frost patterns and aurora curtains; warm pink-lavender from the sauna windows; electric blue (#3750dc) in the aurora highlights; white steam against deep purple sky. Slow drone descent; the steam plume drifts; the black water in the ice hole shimmers with aurora reflections; the descending perspective reveals Abisko's mountain landscape and the aurora's dance in increasing detail.
```

</details>

---


### 22. Sahara Heat Waves

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-22` |
| **Camera** | Static with distortion |
| **Focus** | Medium |
| **Key Element** | Heat distortion over Sahara Desert dunes at twilight |
| **Atmosphere** | Hot exterior, twilight |
| **Tags** | `sahara` `heat` `floating` `mist` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

The Sahara Desert at twilight in Morocco — visible heat distortion rises from the sun-baked sand dunes, creating a shimmering column of warped air. The camera looks through this distortion at the purple twilight sky and the sculpted dune ridges beyond, which warp and ripple like a mirage. The heat distortion acts as a living lens, bending the straight dune crests into waves. The sand surface radiates stored warmth — its surface shimmering with residual heat. In the mid-ground, a traditional Moroccan wellness tent with its pointed canopy is barely visible through the distortion, its purple-lit interior casting a faint glow. The vast dune field stretches to the horizon in sweeping curves. Static — positioned to capture the heat distortion between the camera and the purple twilight sky over the Sahara. The distortion itself is the subject. Medium — the nearest dune ridge is sharp; the heat distortion zone is the visually active area; the distant dunes and sky are rendered surreal by the bending. Desert heat made visible — the Sahara's immense thermal energy rendered as a visual effect that transforms the dune landscape into a living, breathing purple painting. Hot exterior at twilight — the Sahara radiates its stored heat into the cooling purple air. The temperature difference creates a visible optical phenomenon unique to desert environments. The sky's electric violet (#9b0aa5) and deep purple (#2e008b) are distorted into wavy versions of themselves; soft lavender (#a082e6) in the lighter distortion zones; pink (#eb5adc) on the sand dune ridges; the distortion adds a pink (#eb5adc) chromatic shift at the wave edges. The heat distortion shimmers and ripples continuously; the sky and dune horizon warp in slow waves; a wisp of sand blows off a dune crest, distorting as it passes through the heat column.
```

</details>

---


### 23. Hallstatt Snow Scene

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-23` |
| **Camera** | Slow wide |
| **Focus** | Wide |
| **Key Element** | Snowfall over alpine lakeside village of Hallstatt, Austria |
| **Atmosphere** | Winter dusk, snow |
| **Tags** | `hallstatt` `stillness` `contrast` `wellness` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Gentle snowfall over Hallstatt, Austria — the fairy-tale Alpine lakeside village where pastel houses cascade down the mountainside to the mirror-like Hallstätter See. A wellness pavilion floats at the water's edge, with the dramatic Dachstein massif rising as a dark wall behind. The iconic Hallstatt skyline is visible along the waterfront: the distinctive pointed spire of the Evangelical church, the pastel-colored lakefront houses with their wooden balconies, and the ancient salt mine buildings above, all softened by the falling snow. Large, slow snowflakes descend through the frame, each one catching the purple dusk light. The pavilion is centered in the composition between the vast mountain and the still lake, its warm-lit windows creating pink-lavender rectangles against the purple-gray environment. The Hallstätter See surface is dark and still. Slow wide — static or with an almost imperceptible drift. The snowfall is the motion; the Dachstein massif and Hallstatt village are the backdrop. Wide — the pavilion is sharp at center; the village houses and church spire provide storybook scale; snowflakes vary from large and soft to tiny distant points. The wellness pavilion dwarfed by the Dachstein massif — a small, warm human refuge at the base of the Alpine wall in one of the world's most picturesque villages, veiled in falling snow. Winter dusk with snowfall over Hallstatt. The ancient mountains loom protectively over the village. The snow muffles all sound. White snowflakes with lavender (#a082e6) tint; deep purple (#2e008b) sky and mountain shadow; electric violet (#9b0aa5) at the horizon; warm pink-lavender from the pavilion windows; Hallstatt's house lights as tiny warm pink (#eb5adc) points along the waterfront. Snowflakes descend in slow, irregular paths; the pavilion's chimney steam mixes with the snow; warm window glow flickers; the Dachstein massif catches and releases snow in patterns.
```

</details>

---


### 24. Thai Ritual Pour

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-24` |
| **Camera** | Slow-motion |
| **Focus** | Detail |
| **Key Element** | Water ritual in ornate Thai wellness temple, Bangkok |
| **Atmosphere** | Warm interior |
| **Tags** | `bangkok` `ritual` `steam` `heat` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

Inside an ornate traditional Thai wellness temple in Bangkok — a gilded ceremonial bowl tips and water pours in a single, elegant stream onto smooth river stones arranged in a ritual formation below. In slow motion, the water stream catches the light — it is a glass-like cylinder that refracts the warm pink-lavender glow from surrounding candles and the purple ambient light from silk-draped windows simultaneously. Where the stream hits the first stone, it shatters into droplets and mist. The stream itself has a hypnotic quality — its surface ripples and twists as gravity pulls it downward. The gilded bowl's ornate surface is visible at the top of frame — lotus motifs and Khmer-influenced patterns tell centuries of Thai wellness tradition. Behind, glimpses of the temple's spired roof and intricate gold-and-purple murals are visible. Slow-motion, positioned to capture the full arc of the pour — from gilded bowl to stone impact — in a vertical composition. Detail — the water stream is the sharp subject at the center; the gilded bowl above and the stones below are slightly soft; the temple murals are atmospheric bokeh. The water stream as a liquid bridge between the ceremonial vessel (Thai spiritual intent) and the smooth stones (natural element) — the central gesture of a Bangkok wellness ritual. Warm interior in a Bangkok temple. The pour is the ceremonial act that transforms intention into experience through water. The water stream refracts both pink-lavender (#eb5adc) (from candles) and electric violet (#9b0aa5) (from silk-filtered light) as internal caustics; the stone surfaces are deep purple (#2e008b) with soft lavender (#a082e6) highlights; the mist at impact blooms white to lavender; the gilded bowl catches pink (#eb5adc) and electric violet reflections. The water stream descends in slow motion, its surface alive with tension and internal light; the impact point erupts in mist and spray; the gilded bowl tilts imperceptibly, controlling the flow; steam and mist rise from below through candlelight.
```

</details>

---


### 25. Taj Mahal Dawn

| Field | Detail |
| --- | --- |
| **ID** | `floating-sauna-25` |
| **Camera** | Slow dolly back |
| **Focus** | Wide |
| **Key Element** | Spa silhouette on Yamuna River with Taj Mahal visible at dawn |
| **Atmosphere** | Dawn, clear |
| **Tags** | `floating` `taj-mahal` `india` `zen` |

<details>
<summary><strong>Prompt (copy to Creative Studio)</strong></summary>

```
Cinematic, dreamlike vertical video. STRICT COLOR RULE: The ONLY colors allowed are deep purple (#2e008b), electric violet (#9b0aa5), soft lavender (#a082e6), pink (#eb5adc), electric blue (#3750dc), and light blue (#7da0eb). NO yellow, NO orange, NO amber, NO gold, NO green, NO red, NO brown, NO teal. Even sunlight must appear as warm pink-lavender, never yellow. Vegetation must be dark purple silhouettes, never green. Water must be deep purple, violet, or blue — never teal. Shadows in deep purple, highlights in lavender and pink. ONE single continuous camera movement — no cuts, no angle changes. Shallow depth of field, oval bokeh. Subtle lens flares, purple-tinted volumetric light. Strong backlight with pink or lavender rim-light. Organic filmic grain with slightly halated highlights. Always show a clear celestial body (low sun in pink-lavender tones, crescent moon, or dawn glow in violet) so the time of day is readable. Include recognizable landmarks so the location is self-evident. Dreamlike, aspirational, sensorial mood. Loop-friendly motion.

A floating wellness pavilion in silhouette against a breaking dawn sky over the Yamuna River in Agra, India. The sky transitions from deep purple at the top through electric violet to a band of hot pink at the horizon where the sun is about to appear. The spa is a dark geometric shape centered in the frame. Behind it, the unmistakable silhouette of the Taj Mahal rises — its perfect dome, four minarets, and symmetrical gardens are instantly recognizable even in silhouette, bathed in soft lavender pre-dawn light. The white marble of the Taj catches the first pink-violet hues, glowing like a jewel against the purple sky. A faint glow of warm light escapes from the spa's window — a warm pink-lavender slit in the dark form. The Yamuna's surface mirrors everything — a perfect reflection of the Taj Mahal in electric violet and deep purple. A single bird flies from the Taj's gardens across the purple sky. Slow dolly back — starting relatively close to the spa pavilion, pulling away over 8 seconds to reveal the Yamuna River panorama and the full majesty of the Taj Mahal behind. Wide — the spa silhouette is a graphic element; the dawn sky, Taj Mahal's silhouette, and the Yamuna's reflections fill the composition. The spa on the Yamuna at dawn — where India's most iconic monument meets the river, with the Taj Mahal as the ultimate backdrop. The wellness session ends as the ancient city awakens. Dawn, clear over the Yamuna River. The first light arrives from the east. The spa session is ending. A new day begins in the purple-violet palette before the world's most beautiful building. Deep purple (#2e008b) sky at top; electric violet (#9b0aa5) mid-sky; pink (#eb5adc) at the horizon; soft lavender (#a082e6) on the Taj Mahal's marble and in the river mist; warm pink-lavender window slit; the Yamuna mirrors all colors one shade darker. Slow dolly back; the spa shrinks; the Taj Mahal reveals itself in full glory; the dawn sky brightens; the bird crosses; mist wisps drift off the Yamuna; the warm glow flickers its last.
```

</details>

---


---

## File Naming Convention

| Dream | Pattern | Example |
| --- | --- | --- |
| Archipelago Sunset Cruise | `archipelago-XX.mp4` | `archipelago-01.mp4` |
| Gröna Lund Live Concert | `grona-lund-XX.mp4` | `grona-lund-01.mp4` |
| Floating Sauna Experience | `floating-sauna-XX.mp4` | `floating-sauna-01.mp4` |

---

*Document generated on 24 April 2026 — VML for PMI/IQOS Electric Purple campaign.*