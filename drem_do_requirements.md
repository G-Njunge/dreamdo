# DreamDo Website — Build Prompt for AI IDE

Paste this entire document into your AI IDE (Claude Code, Cursor, Windsurf, etc.) as the first message for the project. It contains the full brief, content, and technical structure needed to scaffold the site.

---

## 1. Project Summary

DreamDo is a children and youth professional-development platform (not a school, not a generic services company). It equips children and youth with hands-on experience in agriculture, AI, entrepreneurship, and life skills so they grow into confident problem-solvers and future leaders.

**New tagline (approved by client):**
> The Launchpad for Africa's Next Generation of Doers.

**Subhead:**
> A children's professional development platform where young people gain real-world experience in agriculture, AI, entrepreneurship, and life skills to build confidence, purpose, and future readiness.

**Mission:**
> Empowering children and youth through experiential learning, entrepreneurship, agriculture, technology, and career exploration to become confident problem-solvers and future leaders.

**Vision:**
> A generation of African young people equipped with the skills, mindset, and opportunities to create thriving communities and sustainable futures.

**Core Values:** Learning by Doing · Creativity · Responsibility · Innovation · Community · Sustainability

**Brand colors (carry over from existing mockup, client approved):** Deep Blue (~#1D4ED8) and Orange (~#F97316). Confirm exact hex values against the official logo file before final build.

**Photos — important:** Use neutral placeholder stock photography of children for every image slot. Do NOT use any real photos of DreamDo students yet — the agency intentionally avoided this to protect children's data/privacy rights. Real photos will be swapped in once written parental/guardian consent is collected. Mark every image component with a code comment: `{/* PLACEHOLDER IMAGE — replace once parental consent obtained */}`.

---

## 2. Tech Stack

- **Framework:** Next.js 14+ (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **Internationalization:** `next-intl`, with English and French content kept in fully separate dictionary files (see folder structure below — never inline hardcoded strings in components)
- **Forms (Contact, Booking, Newsletter):** Next.js Route Handlers (API routes) + [Resend](https://resend.com) for email delivery to the DreamDo team. If a faster MVP is preferred, swap in Formspree with no backend changes needed.
- **Images:** `next/image` for optimization
- **Animations (optional, light touch only):** Framer Motion
- **Deployment:** Vercel (free tier is sufficient)
- **Future phase (not required now):** a headless CMS (Sanity or Contentful) for the Blog/News and Events pages once content volume grows.

---

## 3. Hard Requirements

1. **Every page is its own dedicated route file.** No single page component conditionally rendering multiple "pages" via tabs or query params.
2. **Every language lives in its own files**, organized by locale folder, not inline in components:

```
messages/
  en/
    common.json
    home.json
    about.json
    programs.json
    impact.json
    partners.json
    resources.json
    gallery.json
    blog.json
    events.json
    contact.json
    booking.json
  fr/
    common.json
    home.json
    about.json
    programs.json
    impact.json
    partners.json
    resources.json
    gallery.json
    blog.json
    events.json
    contact.json
    booking.json
```

3. Routes are locale-prefixed: `/en/...` and `/fr/...`, with a language switcher in the header that swaps the prefix and preserves the current page.
4. Fully responsive (mobile-first), matching the approved desktop + mobile mockups.
5. Semantic HTML and basic accessibility (alt text on every image, proper heading hierarchy, labelled form fields).

---

## 4. File / Route Structure

```
app/
  [locale]/
    page.tsx                          → Home
    about/
      page.tsx                        → Mission, Vision, Values, DreamDo Story
      team/page.tsx                   → Team + Founder Story
    programs/
      page.tsx                        → Programs overview (all 4 cards)
      little-farmers/page.tsx
      ai-explorers/page.tsx
      young-entrepreneurs/page.tsx
      pathways/page.tsx
    impact/page.tsx                   → Success stories + metrics
    partners/page.tsx                 → Partner With DreamDo
    resources/page.tsx                → Learning Resources (renamed from "Shop")
    gallery/page.tsx
    blog/
      page.tsx
      [slug]/page.tsx
    events/page.tsx
    pricing/page.tsx                  → placeholder, see Open Questions
    contact/page.tsx
    booking/page.tsx
components/
  Navbar.tsx
  Footer.tsx
  WhatsAppFloatButton.tsx
  LanguageSwitcher.tsx
  AudienceCTAGrid.tsx                 → "I am a Parent / School / Employer / Sponsor"
  ProgramCard.tsx
  TestimonialCard.tsx
  ImpactStat.tsx
  NewsletterSignup.tsx
  ContactForm.tsx
  BookingForm.tsx
messages/
  en/ ... fr/ ...  (see structure above)
```

---

## 5. Navigation

```
Home
About
  - Mission & Vision
  - Team
Programs
  - Little Farmers
  - AI Explorers
  - Young Entrepreneurs
  - Pathways
Impact
Partners
Resources
Gallery
Blog
Events
Contact
[Book a Session] (button, top right)
[EN | FR] (language switcher)
```

A floating WhatsApp button appears on every page (client loves this — keep it exactly as in the existing mockup).

---

## 6. Page-by-Page Content Requirements

### Home (`/`)
1. Hero — keep the existing child-focused hero photo (placeholder), update headline to the new tagline + subhead above. Two buttons: "Our Programs" and "Book a Session."
2. **Mission / Vision / Core Values section directly below the hero** (this was flagged as the single biggest missing piece — do not skip).
3. **Audience CTA grid** — four cards, each with an icon, short label, and button:
   - I Am a Parent → "Register My Child" (links to Programs or Booking)
   - I Am a School → "Partner With Us" (links to Partners)
   - I Am an Employer → "Host Students" (links to Partners)
   - I Am a Sponsor → "Support DreamDo" (links to Partners or a future donate flow)
4. Programs preview — 4 program cards (name, age range, one-line outcome, "Learn more" link).
5. Impact preview — 2–3 stat highlights (placeholder numbers, see Open Questions) linking to the full Impact page.
6. Testimonials preview — 2–3 short quotes linking to the full Impact page.
7. Final CTA banner before the footer ("Ready to help your child dream and do?").

### About (`/about`)
- DreamDo's story told as **Problem → Solution**: "Young people lack practical exposure and career guidance" → "DreamDo connects children and youth with hands-on learning experiences."
- Mission, Vision, and Core Values in full (can repeat content from Home, reworded slightly for SEO).

### About → Team (`/about/team`)
- "Meet the Founder" section: founder photo (placeholder), why DreamDo was created, personal motivation, vision for African youth.
- Team grid for other staff/mentors (placeholder cards if no bios are ready yet).

### Programs overview (`/programs`)
Four program cards, each linking to its own page. Card fields: name, age range, one-line description, "View Program" button.

### Individual program pages
Each program page (`little-farmers`, `ai-explorers`, `young-entrepreneurs`, `pathways`) needs:
- Program name + age range + duration
- Focus area description
- "Why this age" rationale
- Learning outcomes (bulleted)
- A registration/"Book a Session" button

Use this content for each:

**Little Farmers — Ages 6–10**
Focus: Sensory learning, basic plant biology, responsibility, and connecting with nature. Children at this age are highly curious, love hands-on activity, and are developing a sense of responsibility.

**AI Explorers — Ages 10–14**
Focus: Introduction to digital logic, basic coding, understanding how AI works, and digital creativity. This age group is ready to move from consuming technology to creating with it, while still learning best through play and visual interfaces.

**Young Entrepreneurs — Ages 12–16**
Focus: Business basics, financial literacy, design thinking, and pitching ideas. This age group is developing critical thinking and social awareness, old enough to grasp profit, loss, marketing, and customer needs.

**DreamDo Pathways (Career Immersion) — Ages 14–18**
Focus: High-school career exposure, industry shadowing, mentorship, and real-world problem-solving. Teenagers at this stage are actively thinking about their futures, further education, and the workforce.

### Impact (`/impact`)
- Impact stats section (placeholder numbers, flag for client to confirm real figures), e.g.: learners reached, schools engaged, employer partners, community projects completed.
- Success Stories section with three testimonial categories: Parent Testimonials, Student Success Stories, Employer Testimonials. Build the testimonial card to optionally support an embedded video, even though only text placeholders exist for now.

### Partners (`/partners`)
"Partner With DreamDo" — for Schools, Employers, NGOs, Government Institutions, and Development Partners. List benefits: community engagement, CSR opportunities, mentorship opportunities, taking part in empowering the next generation. Prominent "Become a Partner" button linking to the Contact form.

### Resources (`/resources`)
Rename "Shop" to "Resources." Reframe the existing product-style grid (workbook, guide, starter kit, backpack, mug, water bottle, etc.) as **Learning Kits and Parent Resources** rather than generic merchandise, since the goal is supporting the mission rather than running a storefront. Keep the same card layout from the original mockup.

### Gallery (`/gallery`)
Keep as in the original mockup — photo grid organized by Workshops, Learning Sessions, Activities, and Events. Placeholder images only.

### Blog (`/blog`, `/blog/[slug]`)
Keep as in the original mockup. Each post is its own route via the `[slug]` dynamic segment, content sourced from local MDX/JSON files for now (no CMS needed yet).

### Events (`/events`)
New page (not in the original mockup, added per the suggested navigation). Simple list of upcoming workshops/camps with date, location, and a "Register Interest" button linking to Booking. Use 2–3 placeholder events.

### Pricing (`/pricing`)
Client feedback on this page was "not sure" — build a simple placeholder version (the three existing tiers: Individual, School, Organization) but add a `{/* TODO: confirm final pricing structure with client */}` comment. Do not treat this page as final.

### Contact (`/contact`)
Keep exactly as the original mockup — client loves it. Inquiry form, Google Maps embed, social links (Facebook, LinkedIn, Instagram), WhatsApp button.

### Booking (`/booking`)
Keep as in the original mockup — name, email, phone, preferred date, service/program dropdown.

---

## 7. New Components to Build

- **AudienceCTAGrid** — 4-card "I am a..." selector for the homepage.
- **ProgramCard** — reusable across Programs overview and Home preview; props: name, ageRange, summary, href.
- **TestimonialCard** — supports text-only or text + optional video embed; props: name, role (Parent/Student/Employer), quote, videoUrl?.
- **ImpactStat** — large number + label, used on Home preview and the full Impact page.
- **NewsletterSignup** — email field + submit button, posts to an API route.
- **AudienceCTAGrid**, **WhatsAppFloatButton**, and **LanguageSwitcher** should appear globally (layout-level), not per-page.

---

## 8. Forms & Integrations

- **Contact form, Booking form, Newsletter signup** all post to their own Next.js Route Handler under `app/api/`.
- Route handlers send submissions to the DreamDo team via Resend (or log to console in development).
- No database is required for the MVP. If submission history is needed later, add a lightweight store (e.g. a simple Postgres table via Supabase) as a phase 2 task — do not build this now.

---

## 9. Open Questions — flag these, do not silently resolve them

1. **Age range messaging conflict:** the client described DreamDo as serving "youth from ages 6 to 15," but the four named programs span ages 6–18 (Pathways is explicitly 14–18). Use the individual program age ranges as the source of truth for now, and add a comment flagging this for the client to confirm the umbrella age range used in headline copy (e.g. "Ages 6–18" vs. "Children & Youth").
2. **Pricing page structure** — client marked this "not sure." Treat the current 3-tier layout as a placeholder only.
3. **Exact brand hex codes** — confirm against the logo source file rather than eyeballing the mockup.
4. **Real impact numbers** — all stats are placeholders until the client provides actual figures.

---

## 10. Build Instructions for the AI Assistant

1. Scaffold a new Next.js 14 App Router project with TypeScript and Tailwind CSS.
2. Set up `next-intl` with the `messages/en/` and `messages/fr/` folder structure described above, and locale-prefixed routing.
3. Build the shared layout: Navbar (with dropdown sub-menus for About and Programs, plus the language switcher), Footer, and the global WhatsApp floating button.
4. Build each route listed in Section 4, pulling all copy from the matching locale JSON file — no hardcoded strings in components.
5. Build the reusable components in Section 7 and use them across the relevant pages.
6. Wire up the three forms to API routes per Section 8.
7. Use placeholder stock photography for every image, each wrapped in the placeholder comment specified in Section 1.
8. Ensure full mobile responsiveness matching the provided mockup's mobile view.
9. Add basic SEO metadata (title, description) per page, in both languages.
10. Leave clear `// TODO` comments at every Open Question from Section 9.