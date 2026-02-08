# zenzombie.me

Personal website and essays at [zenzombie.me](https://zenzombie.me).

Built with [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/). Deployed to [Cloudflare Pages](https://pages.cloudflare.com/).

## Project Structure

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   │       ├── about.md
│   │       └── essays/
│   ├── pages/
│   │   └── index.astro
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview build locally before deploying       |
