# Shewolf Tech — Next.js

Same design as the earlier builds (navy/blue/green, animated hero mark, the
four service pillars), now as a Next.js 14 (App Router) app.

```
shewolftech-next/
├── app/
│   ├── layout.js       ← fonts (next/font) + metadata
│   ├── page.js          ← assembles all sections
│   └── globals.css      ← full design system (unchanged from earlier builds)
├── components/
│   ├── SiteHeader.js     ← sticky nav, mobile menu (client component)
│   ├── SiteFooter.js
│   ├── Hero.js
│   ├── TrustStrip.js
│   ├── Services.js       ← the 4 pillars / 16 services
│   ├── Process.js
│   ├── About.js
│   ├── Audience.js
│   ├── Contact.js        ← working form (client component)
│   └── RevealOnScroll.js ← scroll-in animation wrapper
├── lib/constants.js       ← logo URL, contact email, location
└── .env.local.example
```

---

## 1. Run it locally

```bash
npm install
cp .env.local.example .env.local   # then fill in your Web3Forms key (step 3 below)
npm run dev
```

Open http://localhost:3000

---

## 2. About the logo

Per your request, there's **no inline SVG logo** — the header and footer both
render a plain `<img>` pointing at a dummy placeholder:

```js
// lib/constants.js
export const LOGO_URL = "https://placehold.co/200x48/0B1830/FFFFFF?text=Shewolf+Tech";
```

To use your real logo:
- Drop the file into `/public` (e.g. `/public/logo.png`)
- Change `LOGO_URL` to `"/logo.png"`
- If you'd rather keep hosting it externally, just swap in that URL instead —
  no other code needs to change.

---

## 3. Make the contact form actually send email

Same approach as the static version — **Web3Forms** (free, no backend needed):

1. Go to **https://web3forms.com**, enter your inbox email, confirm, copy the access key
2. In `.env.local`, set:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_real_key_here
   ```
3. Restart `npm run dev` (env vars are read at build/start time)

Until this is set, the form shows a "not connected yet" message instead of
failing silently. There's also a hidden honeypot field to cut down on spam.

**On Vercel:** add the same `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` under
Project Settings → Environment Variables, then redeploy.

---

## 4. Deploy

Next.js apps need a Node.js host — this won't work on GitHub Pages as-is.
Easiest path is **Vercel** (built by the Next.js team, free tier is generous):

1. Push this project to a GitHub repo
2. Go to vercel.com → New Project → import the repo
3. Add the `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` environment variable
4. Deploy — Vercel auto-detects Next.js, no config needed

Other options: Netlify, Render, or your own Node server via `npm run build && npm start`.

---

## 5. Customizing

- **Colors/fonts** — CSS variables at the top of `app/globals.css` (`:root {...}`)
- **Section copy** — each section is its own component in `/components`, with
  content in simple arrays/JSX at the top of the file (e.g. `PILLARS` in
  `Services.js`, `STEPS` in `Process.js`)
- **Contact email / location** — `lib/constants.js`
- **Nav links** — `NAV_LINKS` in `SiteHeader.js`, `FOOTER_LINKS` in `SiteFooter.js`
- **Social links** — `SOCIALS` array in `SiteFooter.js` (currently `#` placeholders)

---

## 6. Notes

- Respects `prefers-reduced-motion` (scroll-reveal effects disable automatically).
- Fully responsive; mobile nav becomes a slide-in menu below 760px.
- Fonts (Sora, Inter, JetBrains Mono) load via `next/font/google` — self-hosted
  at build time, no external font request at runtime, better performance than
  the old `<link>` tag approach.
- Verified this builds cleanly with `next build` before handing off.
