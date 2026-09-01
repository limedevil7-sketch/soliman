# Soliman Nightmares — Official Website

Premium cinematic website for the **Soliman Nightmares** YouTube channel.

**Brand:** Horror × Mystery × Dark Technology  
**Handle:** @solimannightmares

## Features

- Full dark cinematic homepage with Hero, Featured Nightmare, Videos, Stories, Dark Tech, Categories, Community, Social Hub, About, Final CTA
- Sticky glass navbar with mobile hamburger
- **Easter Egg**: Click the logo/raven area exactly **3 times** → cinematic notification «عاش يا شبح 👻»
- **Messages //** page (`/pages/messages.html`) — futuristic public transmission terminal
  - All messages appear as **👻 شبح**
  - No username input
  - XSS sanitization + rate limiting
  - Supabase-ready shared/realtime architecture with local fallback; see SUPABASE_MESSAGES_SETUP.md
- Stories archive with live search + category filters
- 404 branded page
- SEO metadata, Open Graph, JSON-LD
- Responsive (mobile → 4K)
- Accessibility: focus states, reduced-motion, semantic HTML, ARIA

## Structure

```
soliman-nightmares-web/
├── index.html
├── css/main.css          # Full design system
├── js/
│   ├── data.js           # Videos, Stories, Categories, MessagesStore
│   ├── main.js           # Rendering + interactions
│   └── easter-egg.js     # 3-click secret
├── pages/
│   ├── messages.html
│   ├── stories.html
│   ├── about.html
│   └── 404.html
├── images/logo.jfif
└── README.md
```

## Run locally

```bash
# Any static server
npx serve .
# or
python -m http.server 3000
```

Then open `http://localhost:3000`

## Social Links (official only)

- YouTube: https://youtube.com/@solimannightmares
- Telegram: https://t.me/+Di-kNOxDldE0OTk0
- Facebook Page / Group
- Discord: https://discord.gg/bXbSysEwa

## Design System

- **Deep Black** `#050505` + **Blood Crimson** `#c41e3a`
- Typography: Cinzel (display) · Inter + Noto Sans Arabic (body) · JetBrains Mono (tech)
- Subtle glitch, grain, vignette, red ambient glow
- Premium, not excessive neon/gaming

## Easter Egg

Secret. Do not document in visible UI.  
Click logo area × 3 within a short window.

## Messages Architecture

`MessagesStore` in `js/data.js` abstracts storage.  
Replace `localStorage` with fetch calls to your API when ready.  
Author is always forced to `"شبح"`.

---

Built as a production-ready brand experience for Soliman Nightmares.


## Video player
Homepage video cards use the supplied YouTube video IDs and can open an in-site YouTube embed with a direct YouTube fallback.
