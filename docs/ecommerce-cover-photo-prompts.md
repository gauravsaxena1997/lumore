# Lumore - E-commerce Product Cover Photo Prompts

**Status:** ⏸️ **DEFERRED** - Using alternative approach for demo
**Created:** January 20, 2026
**Last Updated:** January 20, 2026 (Deferred Status)

---

## ⏸️ **DEFERRED NOTICE**

**Priority Shift:** These cover photos are **NOT NEEDED** for the demo website.

### **Alternative Approach:**
Instead of generating 7 e-commerce cover photos, we're using:
- ✅ **Transparent product images** (already in codebase)
- ✅ **CSS gradient backgrounds** matching each product's color theme
- ✅ **Result:** Premium e-commerce cards without generating new images

### **Implementation:**
```tsx
// Example: Solar Veil product card
<div className="bg-gradient-to-br from-orange-200 to-orange-50">
  <Image src="/assets/products/01-solar-veil-transparent.webp" />
</div>
```

### **Why Deferred:**
1. Transparent products + CSS gradients look premium
2. Faster to implement (no asset generation needed)
3. Easier to customize (change gradients with CSS)
4. Can A/B test later if cover photos would perform better

### **If Needed Later:**
All prompts below are ready to use if we decide to generate these images post-launch. For now, focusing on building the demo website ASAP.

---

## 📋 **Original Purpose**

**Purpose:** Hero product photography for homepage "Top Shelf Picks" carousel
**Total Images:** 7 (one per product)
**Format:** 1:1 Square (1200x1200px)
**Style:** Modern creative e-commerce photography (varied approaches per product)
**Platform:** Google Gemini / Imagen 3

---

## 🎨 **DESIGN PHILOSOPHY - 2026 RESEARCH INSIGHTS**

Based on extensive research of 2026 skincare photography trends:

### **Key Trends:**
1. ✅ **Authenticity over perfection** - Realistic, skin-first approach
2. ✅ **High resolution with restraint** - Detail without over-enhancement
3. ✅ **Mobile-first composition** - Simple, clear, impactful
4. ✅ **Dynamic effects** - Water splashes, mist, natural elements
5. ✅ **Natural props** - Ingredients, botanicals, organic elements
6. ✅ **Texture & depth** - Marble, stone, reflections, mirrors
7. ✅ **Minimalist sophistication** - Clean with creative flair

### **What Makes a Great Product Cover Photo:**
- **Emotional impact** - Sparks desire, intrigue, allure
- **Category clarity** - Instantly communicates product type
- **Quality cues** - Premium, trustworthy, effective
- **Visual storytelling** - Background echoes product promise
- **Creative differentiation** - Each product has unique visual identity

---

## 📐 **TECHNICAL SPECIFICATIONS**

| Spec | Value | Notes |
|------|-------|-------|
| **Format** | 1:1 Square | E-commerce standard |
| **Dimensions** | 1200 x 1200px | High quality for zoom |
| **Quality** | 90 (WebP) | Optimized file size |
| **Composition** | Multiple units of same product | Visual abundance |
| **Background** | Varied per product | Creative, thematic |
| **Lighting** | Soft studio | Professional quality |

---

## 🌞 **1. SOLAR VEIL SUNSCREEN - "Sun Protection Hero"**

**Theme:** Golden sunshine protection with natural vitamin C vibes
**Approach:** Warm citrus aesthetic with sun-kissed glow
**Background:** Vibrant orange gradient with fresh orange slices

---

### Image Generation Prompt (Gemini/Imagen 3)

```
Premium sunscreen product photography for e-commerce hero image, sun protection aesthetic, creative citrus styling.

CONCEPT:
Hero product card for Solar Veil Sunscreen featuring multiple bottles arranged with fresh orange slices and warm golden sunlight aesthetic. Emphasizes UV protection, vitamin C brightness, and sunny outdoor confidence.

PRODUCT - SOLAR VEIL SUNSCREEN:
**Multiple units (3-5 bottles)** of Lumore Solar Veil Sunscreen:
- Light peach/orange pump bottle (#FFE5CC)
- 50ml airless pump format
- Arranged in dynamic composition
- Some bottles upright, some tilted at angles
- Varied depths creating visual interest
- Product labels clearly visible

PRODUCT REFERENCE - CRITICAL:
Use Solar Veil product reference image - strictly follow exact appearance.
IMPORTANT: Peach/orange bottle color (#FFE5CC), pump mechanism, bottle shape, and "Lumore" + "solar veil" label text must be 100% accurate - NO gibberish text.

CREATIVE STYLING - CITRUS SUN PROTECTION:
Fresh creative elements emphasizing sun protection and vitamin C:
- Fresh orange slices scattered around products (2-4 slices)
- Whole oranges in background (1-2 oranges, slightly out of focus)
- Warm golden sunlight rays or glow effect
- Droplets of water on oranges showing freshness
- Organic natural arrangement
- Products as hero with oranges as supporting cast

BACKGROUND:
- Vibrant warm gradient (golden orange to peachy cream)
- OR solid warm orange tone with soft vignette
- Sunny, bright, energizing aesthetic
- Gradient flows diagonally creating warmth
- Premium e-commerce quality
- Not flat - has depth and dimension

LIGHTING:
- Bright warm studio lighting (golden hour quality)
- Strong directional light creating defined shadows
- Highlights on product bottles showing premium finish
- Oranges catching light beautifully
- Warm, sun-kissed glow overall
- Professional product photography quality

COMPOSITION:
- Square 1:1 format (1200x1200px)
- Products occupy center 60% of frame
- Oranges frame products naturally
- Dynamic diagonal arrangement
- Visual flow from top-left to bottom-right
- Abundant, fresh, premium aesthetic

COLOR PALETTE:
- Warm oranges (vibrant, fresh)
- Golden yellows (sunshine)
- Peachy creams (product bottles)
- Bright whites (highlights)
- Sun protection color story

MOOD & STORY:
- "Your daily sunshine defense"
- Fresh, vibrant, outdoor confidence
- Vitamin C brightening association
- Natural protection aesthetic
- Premium SPF 50 quality

STYLE:
- Photorealistic premium e-commerce photography
- Creative modern aesthetic
- Natural ingredient storytelling
- Editorial product quality
- 2026 skincare photography trends

TECHNICAL:
- Square 1:1 ratio (1200x1200px)
- High resolution (4K)
- E-commerce product card format
- Mobile-optimized composition

Photorealistic premium sunscreen e-commerce photography, citrus sun protection aesthetic.

[Reference Image: Solar Veil Sunscreen]
```

---

## 💧 **2. DEW DROPS SERUM - "Hydration Immersion"**

**Theme:** Deep hydration with water splash dynamics
**Approach:** Fresh water droplets and ocean blue aesthetics
**Background:** Cool blue gradient with water splash effect

---

### Image Generation Prompt (Gemini/Imagen 3)

```
Premium hydrating serum product photography for e-commerce hero image, water splash aesthetic, fresh moisture focus.

CONCEPT:
Hero product card for Dew Drops Serum featuring multiple bottles with dynamic water splash effects and droplets. Emphasizes deep hydration, moisture infusion, and fresh dewy skin.

PRODUCT - DEW DROPS SERUM:
**Multiple units (3-5 bottles)** of Lumore Dew Drops Serum:
- Ocean blue frosted dropper bottle (#B8D4E8)
- 30ml slender bottle with dropper cap
- Arranged in dynamic composition
- Some bottles surrounded by water splash
- Droplets suspended mid-air around products
- Product labels clearly visible

PRODUCT REFERENCE - CRITICAL:
Use Dew Drops Serum product reference image - strictly follow exact appearance.
IMPORTANT: Ocean blue frosted bottle color (#B8D4E8), dropper cap, slender 30ml shape, and "Lumore" + "dew drops" label text must be 100% accurate - NO gibberish text.

CREATIVE STYLING - WATER SPLASH DYNAMICS:
Dynamic water elements emphasizing hydration:
- Water splash frozen mid-motion around products
- Scattered water droplets on surface and in air
- Larger water droplets rolling on bottles
- Fresh, clean water aesthetic
- Sense of motion and freshness
- Products as hero emerging from water

BACKGROUND:
- Cool blue gradient (ocean blue to soft aqua to cream)
- OR soft blue with water texture overlay
- Fresh, hydrating, ocean-inspired aesthetic
- Gradient flows creating depth
- Premium e-commerce quality
- Clean water purity feel

LIGHTING:
- Bright soft studio lighting
- Highlights on water droplets creating sparkle
- Reflections on wet surface below products
- Blue bottles catching light beautifully
- Clean, fresh, hydrating quality
- Professional product photography

COMPOSITION:
- Square 1:1 format (1200x1200px)
- Products occupy center 60% of frame
- Water splash radiating from center
- Dynamic energy and movement
- Visual flow from center outward
- Fresh, abundant, premium aesthetic

COLOR PALETTE:
- Ocean blues (vibrant, fresh)
- Aqua tones (water clarity)
- Soft creams (highlights)
- White water splashes
- Hydration color story

MOOD & STORY:
- "Moisture immersion for dewy skin"
- Fresh, clean, deeply hydrating
- Ocean-fresh hydration
- Dynamic energy and freshness
- Premium hyaluronic acid serum

STYLE:
- Photorealistic premium e-commerce photography
- Creative water splash technique
- High-speed photography aesthetic
- Editorial product quality
- 2026 skincare photography trends

TECHNICAL:
- Square 1:1 ratio (1200x1200px)
- High resolution (4K)
- E-commerce product card format
- Dynamic motion captured

Photorealistic premium serum e-commerce photography, water splash hydration aesthetic.

[Reference Image: Dew Drops Serum]
```

---

## 🌿 **3. LUMISKIN MOISTURIZER - "Botanical Glow"**

**Theme:** Natural botanical brightening with soft florals
**Approach:** Delicate flowers and soft green garden aesthetic
**Background:** Soft sage green with fresh white flowers

---

### Image Generation Prompt (Gemini/Imagen 3)

```
Premium brightening moisturizer product photography for e-commerce hero image, botanical aesthetic, soft floral styling.

CONCEPT:
Hero product card for Lumiskin Moisturizer featuring multiple bottles with delicate white flowers and soft botanical elements. Emphasizes natural brightening, gentle care, and botanical luxury.

PRODUCT - LUMISKIN MOISTURIZER:
**Multiple units (3-5 bottles)** of Lumore Lumiskin Moisturizer:
- Soft sage green pump bottle (#C5D8BE)
- 50ml airless pump format
- Arranged in elegant composition
- Some bottles upright, some angled
- Nestled among flowers naturally
- Product labels clearly visible

PRODUCT REFERENCE - CRITICAL:
Use Lumiskin Moisturizer product reference image - strictly follow exact appearance.
IMPORTANT: Sage green bottle color (#C5D8BE), pump mechanism, 50ml bottle shape, and "Lumore" + "lumiskin" label text must be 100% accurate - NO gibberish text.

CREATIVE STYLING - BOTANICAL FLORALS:
Delicate natural elements emphasizing botanical care:
- Fresh white flowers (chamomile, daisy, or similar small delicate blooms)
- Scattered flower petals around products (3-5 petals)
- Fresh green leaves in background (soft focus)
- Organic garden aesthetic
- Gentle, calming, natural arrangement
- Products as hero with botanicals supporting

BACKGROUND:
- Soft sage green gradient (warm sage to cream)
- OR muted green with subtle texture (linen or organic paper)
- Calming, natural, botanical aesthetic
- Gradient flows gently creating serenity
- Premium e-commerce quality
- Garden fresh feel

LIGHTING:
- Soft diffused natural lighting (morning garden quality)
- Gentle highlights on products and flowers
- Subtle shadows creating organic depth
- Flowers illuminated delicately
- Calm, serene, natural quality
- Professional botanical photography

COMPOSITION:
- Square 1:1 format (1200x1200px)
- Products occupy center 55-65% of frame
- Flowers frame products organically
- Asymmetric natural arrangement
- Visual flow creating harmony
- Elegant, botanical, premium aesthetic

COLOR PALETTE:
- Soft sage greens (calming, natural)
- Pure whites (flowers, petals)
- Cream neutrals (background)
- Gentle pastels
- Botanical skincare color story

MOOD & STORY:
- "Botanical brightening from nature"
- Gentle, calming, nurturing care
- Natural beauty and radiance
- Garden-fresh luxury
- Premium barrier repair moisturizer

STYLE:
- Photorealistic premium e-commerce photography
- Natural botanical aesthetic
- Organic ingredient storytelling
- Editorial product quality
- 2026 skincare photography trends

TECHNICAL:
- Square 1:1 ratio (1200x1200px)
- High resolution (4K)
- E-commerce product card format
- Soft natural composition

Photorealistic premium moisturizer e-commerce photography, botanical floral aesthetic.

[Reference Image: Lumiskin Moisturizer]
```

---

## 🌸 **4. RESET MIST TONER - "Spa Serenity"**

**Theme:** Refreshing mist with lavender spa aesthetic
**Approach:** Mist spray effect with fresh lavender sprigs
**Background:** Soft lavender gradient with spa calm vibes

---

### Image Generation Prompt (Gemini/Imagen 3)

```
Premium toner mist product photography for e-commerce hero image, spa aesthetic, lavender calm styling.

CONCEPT:
Hero product card for Reset Mist Toner featuring multiple bottles with visible mist spray and fresh lavender sprigs. Emphasizes refreshing reset, calming aromatics, and spa-quality skincare.

PRODUCT - RESET MIST TONER:
**Multiple units (3-4 bottles)** of Lumore Reset Mist Toner:
- Soft lavender spray bottle (#D8CEE8)
- 100ml tall slender spray bottle
- Arranged in dynamic composition
- One bottle actively spraying fine mist
- Mist cloud visible in air
- Product labels clearly visible

PRODUCT REFERENCE - CRITICAL:
Use Reset Mist Toner product reference image - strictly follow exact appearance.
IMPORTANT: Soft lavender bottle color (#D8CEE8), spray nozzle mechanism, 100ml tall bottle shape, and "Lumore" + "reset mist" label text must be 100% accurate - NO gibberish text.

CREATIVE STYLING - LAVENDER SPA MIST:
Calming spa elements emphasizing refresh and reset:
- Fresh lavender sprigs (2-3 stems with purple flowers)
- Fine mist spray captured mid-air
- Mist droplets suspended around bottles
- Spa stones or smooth pebbles (1-2, optional)
- Calming, serene, spa aesthetic
- Products as hero with lavender supporting

BACKGROUND:
- Soft lavender gradient (pale purple to cream)
- OR soft lavender with subtle texture (organic linen)
- Calming, spa-like, restorative aesthetic
- Gradient flows creating tranquility
- Premium e-commerce quality
- Spa serenity feel

LIGHTING:
- Soft diffused studio lighting (spa ambiance quality)
- Gentle highlights on mist particles creating glow
- Subtle backlight showing mist transparency
- Lavender sprigs softly illuminated
- Calm, soothing, spa quality
- Professional spa photography

COMPOSITION:
- Square 1:1 format (1200x1200px)
- Products occupy center 60% of frame
- Mist spray radiating from center bottle
- Lavender framing organically
- Visual flow creating calm
- Serene, spa, premium aesthetic

COLOR PALETTE:
- Soft lavenders (calming, aromatic)
- Purple lavender flowers (natural)
- Cream neutrals (spa tones)
- White mist (fresh, clean)
- Spa refresh color story

MOOD & STORY:
- "Reset your skin, refresh your spirit"
- Calming, spa-quality aromatics
- Instant refresh and reset
- Lavender calm benefits
- Premium toner mist quality

STYLE:
- Photorealistic premium e-commerce photography
- Spa aesthetic and mood
- Natural aromatic storytelling
- Editorial product quality
- 2026 skincare photography trends

TECHNICAL:
- Square 1:1 ratio (1200x1200px)
- High resolution (4K)
- E-commerce product card format
- Mist effect captured beautifully

Photorealistic premium toner e-commerce photography, lavender spa mist aesthetic.

[Reference Image: Reset Mist Toner]
```

---

## 🪨 **5. MELT AWAY BALM - "Marble Luxe"**

**Theme:** Luxurious evening cleanse with marble elegance
**Approach:** Premium marble surface with warm coral tones
**Background:** Warm marble texture with peachy coral accents

---

### Image Generation Prompt (Gemini/Imagen 3)

```
Premium cleansing balm product photography for e-commerce hero image, marble luxury aesthetic, warm evening styling.

CONCEPT:
Hero product card for Melt Away Balm featuring multiple jars on premium marble surface with warm peachy coral tones. Emphasizes luxurious cleansing, evening ritual, and premium spa quality.

PRODUCT - MELT AWAY BALM:
**Multiple units (3-4 jars)** of Lumore Melt Away Balm:
- Warm peachy coral octagonal jar (#F5D4C8)
- 100ml wide octagonal jar format
- Arranged in elegant composition
- Some jars with lids on, one jar open showing balm texture
- Geometric octagonal shape prominent
- Product labels clearly visible

PRODUCT REFERENCE - CRITICAL:
Use Melt Away Balm product reference image - strictly follow exact appearance.
IMPORTANT: Peachy coral jar color (#F5D4C8), octagonal jar shape, 100ml wide format, lid details, and "Lumore" + "melt away" label text must be 100% accurate - NO gibberish text.

CREATIVE STYLING - MARBLE LUXURY:
Premium marble elements emphasizing luxury evening ritual:
- White marble surface with natural veining
- Warm coral/peach marble tones OR warm lighting on white marble
- One jar lid placed artfully beside jar
- Soft texture of balm visible in open jar
- Premium, luxurious, evening aesthetic
- Products as hero on marble stage

BACKGROUND:
- Warm marble texture (white marble with peach/coral lighting)
- OR peachy gradient with marble surface in foreground
- Luxurious, premium, evening ritual aesthetic
- Marble veining adds sophistication
- Premium e-commerce quality
- Spa luxury feel

LIGHTING:
- Warm soft studio lighting (evening glow quality)
- Highlights on marble surface creating elegance
- Gentle reflections on jar surfaces
- Warm peachy glow overall
- Luxurious, premium quality
- Professional luxury product photography

COMPOSITION:
- Square 1:1 format (1200x1200px)
- Products occupy center 55-65% of frame
- Marble surface provides foundation
- Balanced arrangement showing geometric jar shapes
- Visual flow creating luxury
- Elegant, premium aesthetic

COLOR PALETTE:
- Warm peachy corals (luxurious, inviting)
- White marble (premium, clean)
- Gold/cream veining (sophisticated)
- Warm neutrals
- Evening luxury color story

MOOD & STORY:
- "Luxurious evening cleansing ritual"
- Premium spa-quality balm
- Melts away the day effortlessly
- Marble elegance and quality
- Premium cleansing balm luxury

STYLE:
- Photorealistic premium e-commerce photography
- Marble luxury aesthetic
- Premium spa quality
- Editorial product photography
- 2026 skincare photography trends

TECHNICAL:
- Square 1:1 ratio (1200x1200px)
- High resolution (4K)
- E-commerce product card format
- Luxury texture emphasis

Photorealistic premium cleansing balm e-commerce photography, marble luxury aesthetic.

[Reference Image: Melt Away Balm]
```

---

## 🍯 **6. KISS PROOF LIP NECTAR - "Honey Glow"**

**Theme:** Natural honey luxury with golden organic vibes
**Approach:** Honey drizzle and honeycomb elements
**Background:** Warm honey gradient with organic honeycomb

---

### Image Generation Prompt (Gemini/Imagen 3)

```
Premium lip treatment product photography for e-commerce hero image, honey luxury aesthetic, golden organic styling.

CONCEPT:
Hero product card for Kiss Proof Lip Nectar featuring multiple tubes with natural honey drizzle and honeycomb elements. Emphasizes nourishing lip care, natural honey benefits, and golden glow.

PRODUCT - KISS PROOF LIP NECTAR:
**Multiple units (4-6 tubes)** of Lumore Kiss Proof Lip Nectar:
- Warm honey nude tube (#F0DCC8)
- 15ml thin squeezable tube format
- Arranged in dynamic composition
- Tubes at various angles showing slender format
- Small, elegant, lip care product
- Product labels clearly visible

PRODUCT REFERENCE - CRITICAL:
Use Kiss Proof Lip Nectar product reference image - strictly follow exact appearance.
IMPORTANT: Honey nude tube color (#F0DCC8), squeezable tube format, small 15ml size, and "Lumore" + "kiss proof" label text must be 100% accurate - NO gibberish text.

CREATIVE STYLING - HONEY LUXURY:
Natural honey elements emphasizing nourishment:
- Honey drizzle on surface around products (elegant pour)
- Small piece of honeycomb (1-2 pieces showing hexagonal structure)
- Honey pooling naturally creating golden aesthetic
- Warm, organic, natural luxury
- Golden glow and nourishment story
- Products as hero with honey supporting

BACKGROUND:
- Warm honey gradient (golden amber to cream)
- OR solid warm nude tone with honey texture
- Golden, nourishing, organic aesthetic
- Gradient flows warmly creating richness
- Premium e-commerce quality
- Natural honey glow feel

LIGHTING:
- Warm golden studio lighting (honey glow quality)
- Highlights on honey creating transparency and shine
- Reflections showing honey viscosity
- Warm golden glow overall
- Rich, nourishing quality
- Professional product photography

COMPOSITION:
- Square 1:1 format (1200x1200px)
- Products occupy center 55-65% of frame
- Honey elements frame products naturally
- Dynamic arrangement showing tube format
- Visual flow creating warmth
- Luxurious, organic, premium aesthetic

COLOR PALETTE:
- Golden honey amber (warm, rich)
- Warm nude tones (product tubes)
- Cream neutrals (highlights)
- Golden yellows
- Nourishing honey color story

MOOD & STORY:
- "Golden honey nourishment for lips"
- Natural, organic luxury
- Kiss-proof moisture and glow
- Honey benefits and richness
- Premium lip care treatment

STYLE:
- Photorealistic premium e-commerce photography
- Natural honey aesthetic
- Organic ingredient storytelling
- Editorial product quality
- 2026 skincare photography trends

TECHNICAL:
- Square 1:1 ratio (1200x1200px)
- High resolution (4K)
- E-commerce product card format
- Natural honey texture emphasis

Photorealistic premium lip care e-commerce photography, honey luxury aesthetic.

[Reference Image: Kiss Proof Lip Nectar]
```

---

## 🧊 **7. UNDER COVER EYE TREATMENT - "Ice Fresh"**

**Theme:** Cooling eye care with fresh mint ice aesthetic
**Approach:** Ice cubes and cooling elements with mint
**Background:** Cool mint gradient with ice texture

---

### Image Generation Prompt (Gemini/Imagen 3)

```
Premium eye treatment product photography for e-commerce hero image, cooling ice aesthetic, fresh mint styling.

CONCEPT:
Hero product card for Under Cover Eye Treatment featuring multiple jars with ice cubes and fresh mint leaves. Emphasizes cooling eye care, de-puffing benefits, and fresh morning revival.

PRODUCT - UNDER COVER EYE TREATMENT:
**Multiple units (3-5 jars)** of Lumore Under Cover Eye Treatment:
- Fresh mint green dome jar (#D4E8DD)
- 15ml small dome-shaped container
- Arranged in elegant composition
- Dome shape prominent and distinctive
- Small, specialized eye care format
- Product labels clearly visible

PRODUCT REFERENCE - CRITICAL:
Use Under Cover Eye Treatment product reference image - strictly follow exact appearance.
IMPORTANT: Fresh mint green dome jar color (#D4E8DD), unique dome shape, small 15ml size, and "Lumore" + "under cover" label text must be 100% accurate - NO gibberish text.

CREATIVE STYLING - ICE COOLING FRESH:
Cooling elements emphasizing de-puffing eye care:
- Clear ice cubes scattered around products (3-5 cubes)
- Fresh mint leaves (2-3 sprigs with vibrant green)
- Water droplets from melting ice
- Cool, refreshing, morning revival aesthetic
- Frost or condensation on jars (optional)
- Products as hero with ice/mint supporting

BACKGROUND:
- Cool mint gradient (fresh mint to soft aqua to cream)
- OR soft mint with ice texture overlay
- Cooling, refreshing, de-puffing aesthetic
- Gradient flows creating freshness
- Premium e-commerce quality
- Ice fresh morning feel

LIGHTING:
- Bright cool studio lighting (fresh morning quality)
- Highlights on ice cubes creating sparkle
- Reflections on wet surface from melting ice
- Mint leaves vibrant and fresh
- Cool, refreshing, reviving quality
- Professional product photography

COMPOSITION:
- Square 1:1 format (1200x1200px)
- Products occupy center 55-65% of frame
- Ice cubes and mint frame products naturally
- Balanced arrangement showing dome jar shapes
- Visual flow creating coolness
- Fresh, cooling, premium aesthetic

COLOR PALETTE:
- Fresh mint greens (cooling, reviving)
- Clear ice (transparent, clean)
- Vibrant green mint leaves
- Soft aqua tones
- Cooling eye care color story

MOOD & STORY:
- "Cool, revive, de-puff tired eyes"
- Fresh morning eye care
- Cooling relief and revival
- Mint fresh benefits
- Premium under-eye treatment

STYLE:
- Photorealistic premium e-commerce photography
- Cooling ice aesthetic
- Fresh morning revival mood
- Editorial product quality
- 2026 skincare photography trends

TECHNICAL:
- Square 1:1 ratio (1200x1200px)
- High resolution (4K)
- E-commerce product card format
- Ice cooling effect emphasis

Photorealistic premium eye treatment e-commerce photography, ice fresh cooling aesthetic.

[Reference Image: Under Cover Eye Treatment]
```

---

## 📋 **GENERATION SUMMARY**

| # | Product | Creative Theme | Key Elements | Background |
|---|---------|---------------|--------------|------------|
| 1 | Solar Veil Sunscreen | Sun Protection Hero | Orange slices, golden rays | Warm orange gradient |
| 2 | Dew Drops Serum | Hydration Immersion | Water splash, droplets | Cool blue gradient |
| 3 | Lumiskin Moisturizer | Botanical Glow | White flowers, petals | Soft sage green |
| 4 | Reset Mist Toner | Spa Serenity | Lavender sprigs, mist | Soft lavender gradient |
| 5 | Melt Away Balm | Marble Luxe | Marble surface, texture | Warm marble texture |
| 6 | Kiss Proof Lip Nectar | Honey Glow | Honey drizzle, honeycomb | Golden honey gradient |
| 7 | Under Cover Eye Treatment | Ice Fresh | Ice cubes, mint leaves | Cool mint gradient |

---

## ✅ **GENERATION CHECKLIST**

### **Before Generating:**
- [ ] Upload product reference images to Gemini
- [ ] Review each creative concept
- [ ] Confirm 1200x1200px square format
- [ ] Prepare for varied creative approaches

### **Generate in Order:**
1. [ ] Solar Veil (citrus orange theme)
2. [ ] Dew Drops (water splash blue theme)
3. [ ] Lumiskin (botanical green theme)
4. [ ] Reset Mist (lavender spa theme)
5. [ ] Melt Away (marble luxury theme)
6. [ ] Kiss Proof (honey golden theme)
7. [ ] Under Cover (ice mint theme)

### **After Generating:**
- [ ] Convert all PNG to WebP using `cwebp -q 90`
- [ ] Place in `/public/assets/products/cover-photos/`
- [ ] Update asset inventory
- [ ] Verify creative execution and product accuracy

---

## 🎯 **CREATIVE DIFFERENTIATION**

Each product has a **unique visual identity**:

1. **Solar Veil** - Warm, energizing, citrus sunshine
2. **Dew Drops** - Dynamic, fresh, water motion
3. **Lumiskin** - Soft, calming, botanical garden
4. **Reset Mist** - Serene, spa-like, lavender calm
5. **Melt Away** - Luxurious, premium, marble elegance
6. **Kiss Proof** - Organic, nourishing, honey richness
7. **Under Cover** - Cooling, reviving, ice fresh

**No two images look the same** - each tells its own story while maintaining brand cohesion.

---

## 📚 **RESEARCH SOURCES**

This prompt strategy is based on extensive 2026 skincare photography research:

- [21 Skincare Product Photo Ideas](https://www.mainstreammultimedia.com/blog/skincare-product-photo-ideas)
- [Aesthetic Skincare Product Photography Guide](https://clippingpathstudio.com/skincare-product-photography/)
- [How to Make Skincare Photography That Sells](https://www.squareshot.com/post/how-to-make-skincare-photography-that-sells-creative-ideas)
- [Skincare Product Photography How to Take Photos That Sell](https://www.blog.selfnamed.com/articles/skincare-photography-how-to-take-photos-that-sell)
- [Top Skincare Trends for 2026](https://www.beautyindependent.com/top-skincare-trends-2026-those-losing-sizzle/)

**Key Insights Applied:**
- ✅ Water splash effects for hydration products
- ✅ Natural ingredient props (oranges, flowers, honey)
- ✅ Marble/stone backgrounds for luxury
- ✅ Minimalist modern aesthetics
- ✅ Authenticity over perfection (2026 trend)
- ✅ Mobile-first composition
- ✅ Creative differentiation per product

---

## 💡 **SUCCESS FACTORS**

1. **Product Accuracy** - Reference images ensure exact colors, shapes, sizes
2. **Creative Variety** - Each product has unique visual identity
3. **Ingredient Storytelling** - Props echo product benefits
4. **Premium Quality** - Professional studio photography aesthetic
5. **E-commerce Optimized** - 1:1 square format, mobile-friendly
6. **Brand Cohesion** - Varied yet unified visual language
7. **2026 Trends** - Authenticity, natural elements, creative flair

---

**Document Created:** January 20, 2026
**Version:** 1.0 (Research-Based Creative Approach)
**Status:** Ready for generation
**Total Images:** 7 unique product cover photos
