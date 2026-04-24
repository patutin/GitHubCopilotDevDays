# GitHub Copilot Dev Days — Presentation Style Guide

> Extracted from **GitHub Copilot Dev Days - CLI.pptx** (16 slides, 13.33 × 7.50 in widescreen)

---

## 1. Theme & Color Palette

The presentation uses the **"Universe 2025"** GitHub color scheme — a dark-mode-first palette built on deep blacks and signature GitHub greens.

| Role | Hex | Swatch | Usage |
|---|---|---|---|
| **Dark 1** (Primary BG) | `#000000` | ⬛ | Slide backgrounds, dark fills |
| **Light 1** | `#FFFFFF` | ⬜ | Primary text on dark backgrounds, high-contrast headings |
| **Dark 2** | `#E4EBE5` | 🟩 | Muted light-green for secondary surfaces |
| **Light 2** | `#232824` | 🟫 | Body text on light panels, dark green-black |
| **Accent 1** | `#BEFFD0` | 🟢 | Light mint, subtle highlight fills |
| **Accent 2** | `#8BF1A6` | 🟢 | Medium green for secondary accents |
| **Accent 3** ★ | `#5EEC83` | 🟢 | **Hero green** — the most prominent accent; used for emphasized words in headings (e.g., "Many use cases.") |
| **Accent 4** | `#087827` | 🟢 | Deep green for icons & filled shapes |
| **Accent 5** | `#DBFF95` | 🟡 | Lime-yellow secondary accent |
| **Accent 6** | `#D3FA36` | 🟡 | Bright lime for callouts |
| **Hyperlink** | `#EEF6FC` | 🔵 | Very pale blue link text |
| **Followed Link** | `#56CCC4` | 🔵 | Teal for visited links |

### Background Rules

- **Default**: Pure black (`#000000`) background for nearly all slides.
- **Split-panel slides** (e.g., Slide 3 "Core Features"): Half-image / half-dark layout using a `6096000 × 6858000 EMU` rectangle covering the left 50%.
- **Feature highlight slides**: Dark background with a large right-side screenshot placeholder.

---

## 2. Typography

### Font Stack

| Context | Font | Fallback |
|---|---|---|
| **Headings / Titles** | **Aptos** | Arial |
| **Body text** | **Aptos** or **Arial** | (theme minor font = Arial) |
| **Code / Commands** | **Consolas** or **Courier New** | monospace |

### Type Scale

| Element | Size | Weight | Color | Example |
|---|---|---|---|---|
| **Title — Hero** | 96 pt | Regular | White (`#FFFFFF`) / theme | "GitHub Copilot Dev Days" |
| **Title — Section** | 57.66 pt | **Bold** | White + Green accent | "Many modes. **Many use cases.**" |
| **Title — Slide** | 28–38 pt | **Bold** | White (`#FFFFFF`) | "Personalized" |
| **Subtitle / Accent** | 28 pt | **Bold** | Green (`#5EEC83`) | "Custom Agents", "Built-in Agents" |
| **Heading 2** | 24 pt | Regular/Bold | White or theme | Section subheadings |
| **Body — Features** | 18 pt | Regular | Theme (white on dark) | Feature descriptions |
| **Body — Standard** | 16 pt | Regular | `#232824` (on light panels) | Explanatory paragraphs |
| **Body — Small** | 12 pt | Regular | Theme | Card descriptions within boxes |
| **Code inline** | 12–13.33 pt | Regular | Theme | `copilot`, `copilot –p` |
| **Code block** | 8 pt | Regular | `#24292F` | YAML/config frontmatter |
| **Table cell** | 9–10 pt | Regular (bold for headers) | Theme | Agent/field descriptions |
| **Footnote** | 10 pt | Regular | Theme | "* More details on our docs page." |

### Two-Tone Heading Pattern

The signature style is **white + green** split headings:
- First part in **white (`#FFFFFF`)**, bold
- Second part in **green (`#5EEC83`)**, bold
- Example: `"Many modes. "` (white) + `"Many use cases."` (green)
- Example: `"Powerful"` (white) / `"Built-in Agents"` (green)
- Example: `"Personalized"` (white) / `"Custom Agents"` (green)

---

## 3. Slide Layouts

The presentation uses **7 primary layout patterns** from 52+ available slide layouts:

### Layout 1 — Title Card (Dark, 2 Speakers)
- **Used for**: Opening/closing slides
- **Features**: Full background image, title in Aptos 96pt, speaker photo placeholders with name/title below
- **Slide example**: Slide 1 "GitHub Copilot Dev Days"

### Layout 2 — Feature Showcase (Left Text / Right Image)
- **Used for**: Feature deep-dives
- **Features**: Left half is dark with title + bullet text; right half is a full-height screenshot/image placeholder
- **Slide examples**: Slide 7 "Subagents", Slide 11 "Skills & Plugins"

### Layout 3 — Split Panel (Image Left / Text Right)
- **Used for**: Core feature overviews
- **Features**: Left half filled with screenshot on colored rectangle; right half has title + scattered feature labels
- **Slide example**: Slide 3 "Core Features"

### Layout 4 — Three / Four Statements Grid
- **Used for**: Installation options, tools, commands
- **Features**: 3–4 evenly spaced columns; each has a heading (Consolas for commands) + description
- **Slide examples**: Slide 5 "Installation", Slide 8 "Slash Commands", Slide 10 "Built-in Tools"

### Layout 5 — Hero Statement + Cards
- **Used for**: Mode overviews
- **Features**: Large two-tone heading centered at top; 3 card boxes below with icon, monospace label, and description
- **Slide example**: Slide 4 "Many modes. Many use cases."

### Layout 6 — Side-by-Side Info Panel
- **Used for**: Comparing built-in vs custom, agents table
- **Features**: Vertical divider line; left side has table/grid; right side has code block + property table
- **Slide example**: Slide 6 "Built-in Agents / Custom Agents"

### Layout 7 — Title & Subtitle (Section Divider)
- **Used for**: Demo transitions, section breaks
- **Features**: Minimal — small subtitle up top, large title in center
- **Slide example**: Slide 14 "Demo"

---

## 4. Visual Components

### Cards / Feature Boxes
- **Background**: Rounded rectangle with subtle fill (dark variant)
- **Icon**: Placed at top-left of card (PNG, ~400×400 px)
- **Label**: Consolas font, 12–13pt, centered in a pill/tag shape
- **Description**: Arial 12pt, left-aligned below the label
- **Dimensions**: ~2491276 × 3279845 EMU per card (≈2.72 × 3.59 inches)

### Code Blocks
- **Font**: Courier New, 8pt
- **Color**: `#24292F` (GitHub dark gray) on light background
- **Used for**: YAML frontmatter, configuration examples
- **Style**: Left-aligned, no syntax highlighting, all lines visible

### Command Pills
- **Font**: Consolas, 12–13.33pt
- **Background**: Subtle rounded rectangle shape
- **Text alignment**: Centered
- **Examples**: `copilot`, `copilot –p`, `copilot --server`

### Tables
- **Header row**: 9pt, **bold**, theme color
- **Body cells**: 9–10pt, regular, theme color
- **Layout**: Clean, minimal borders
- **Used for**: Field descriptions (Custom Agent frontmatter), Built-in Agent comparison

### Vertical Divider
- **Type**: Straight connector line
- **Position**: Center of slide (x ≈ 5847645 EMU)
- **Height**: Nearly full slide height (~5734755 EMU)
- **Used for**: Separating side-by-side content panels

---

## 5. Imagery & Screenshots

### Screenshot Style
- **Size**: Large — typically 60–70% of slide area
- **Format**: PNG
- **Placement**: Right half for feature slides, centered for roadmap slides
- **Content**: Terminal/CLI screenshots showing GitHub Copilot in action
- **Typical sizes**: 400–700 KB per screenshot

### Icons
- **Style**: Flat, monochrome or GitHub-branded
- **Size**: Small (~300–650 EMU, i.e., ~0.3–0.7 inches)
- **Format**: PNG with transparency
- **Used for**: Feature indicators in grid layouts, card icons

### Decorative Elements
- **"Copilot spark" image**: Large angled overlay (bottom-right corner), ~3199×3199 EMU
- **Background fills**: BACKGROUND type (theme-driven, not solid color images)

---

## 6. Content Patterns

### Slide Structure Formula
1. **Category label** — Small text, top area (e.g., "GitHub Copilot CLI"), 16pt
2. **Title** — Large, prominent, uses two-tone white+green pattern
3. **Content zone** — Features, screenshots, or grid layout
4. **Footnotes/links** — Bottom, 10pt, optional

### Text Hierarchy on Feature Slides
```
[Category Label]    — 16pt, theme color, top
[Title]             — 28-38pt, bold, white/green
[Subtitle/Tagline]  — 16-18pt, regular, body color
[Feature List]      — Bullet points or grid items
[Footnote]          — 10pt, bottom
```

### Command Documentation Pattern (Slash Commands)
Each command follows this format:
- **Command name**: Consolas font, theme color (acts as heading)
- **Description**: Regular font, 1-line explanation directly below

### Two-Column Comparison Pattern
- Left: Category A with its own heading, descriptions, icon grid
- Center: Vertical divider line
- Right: Category B with heading, code example, property table

---

## 7. Do's and Don'ts

### ✅ Do
- Use **dark backgrounds** (`#000000`) as the default
- Apply the **two-tone heading** (white + `#5EEC83` green) for emphasis
- Use **Consolas/Courier New** for any CLI commands, code, or technical identifiers
- Keep **body text** at 12–18pt for readability
- Use **large screenshots** to demonstrate features visually
- Place **category labels** ("GitHub Copilot CLI") above slide titles
- Use the **three/four column grid** for listing parallel items

### ❌ Don't
- Use light backgrounds (the theme is dark-mode-first)
- Mix more than 2 fonts on a single slide (pick from Aptos + one monospace)
- Use font sizes below 8pt (the minimum used is 8pt for code blocks)
- Overload slides with text — the presentation favors **visual + short text** combos
- Use colors outside the Universe 2025 palette
- Put code in proportional fonts — always use monospace for code/commands

---

## 8. Quick Reference — Color CSS Variables

For web implementations matching this theme:

```css
:root {
  /* Universe 2025 — GitHub Copilot Dev Days */
  --color-bg-primary:    #000000;
  --color-bg-surface:    #232824;
  --color-bg-muted:      #E4EBE5;
  --color-text-primary:  #FFFFFF;
  --color-text-body:     #232824;
  --color-text-code:     #24292F;
  --color-accent-hero:   #5EEC83;  /* ★ primary green */
  --color-accent-light:  #BEFFD0;
  --color-accent-medium: #8BF1A6;
  --color-accent-deep:   #087827;
  --color-accent-lime:   #D3FA36;
  --color-accent-yellow: #DBFF95;
  --color-link:          #EEF6FC;
  --color-link-visited:  #56CCC4;

  /* Fonts */
  --font-heading:  'Aptos', 'Arial', sans-serif;
  --font-body:     'Aptos', 'Arial', sans-serif;
  --font-code:     'Consolas', 'Courier New', monospace;
}
```

---

*Generated from GitHub Copilot Dev Days - CLI.pptx (16 slides, Universe 2025 theme)*
