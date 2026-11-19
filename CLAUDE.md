# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

This is a Next.js 13 (Pages Router) + Chakra UI v2 + Sanity blog for jack.gaarkeuken.com, deployed on Vercel. A duplicate checkout of the same project lives at `../sisterjackblog-documents-copy/`.

## Commands

- `npm ci` installs dependencies from `package-lock.json`. If `next` is missing, `node_modules` is incomplete (for example, no `node_modules/.bin`). Remove `node_modules` and run `npm ci` again.
- `npm run dev` starts the dev server on port 3000, or the next free port.
- `npm run build` / `npm start` build and serve the production version.
- `npm run lint` runs `next lint`.

There is no test setup. You don't need env vars, because the Sanity config (project `flrx9ptv`, dataset `production`, CDN on) is set in `lib/sanity.js`. `package.json` pins Node `22.x` through `engines`, which Vercel uses. Newer local Node versions only print an npm warning and run the dev server fine.

## Architecture

- **App shell** (`pages/_app.js`): `ChakraProvider` with `styles/theme.js`, a `ColorModeProvider`, `StaticKitProvider` (the form backend for `/contact`, site id `1e9b12e6d292`) and `next-seo`'s `DefaultSeo` from `lib/next-seo.config.js`. Global CSS comes from `styles/global.css` and `styles/code.theme.css`, the syntax-highlight theme.
- **Theme** (`styles/theme.js`): uses the `Ranua-Regular` font for headings and body, a fixed `#EFF2F4` background in both color modes and `orange.300` set to `#F67B08`. The Ranua `.otf` files are in `public/` and are loaded by `components/Fonts.js`.
- **Content**: `lib/sanity.js` creates the `@sanity/client`. `lib/api.js` exports `imageBuilder` and the GROQ queries (`getAllPostsFromHome`, `getAllPostsWithSlug`, `getPostAndMorePosts`). Rich text is rendered with `@sanity/block-content-to-react` and the custom serializers in `serializers/` (block, list, list item, image, code, YouTube). Code blocks use `react-code-blocks`, and videos use `react-player`.
- **Routes**: `/` (`pages/index.js`), `/contact`, `/projects` and `/projects/superbonjour`. Post pages are linked as `/post/[slug]`, but there is no `pages/post/` file, so those links 404.

## Known issues

- `lib/blog.js` is dead code. It's in `lib/`, so it isn't routed. It imports `../comnponents/Container` (a typo), maps with `(posts) =>` but reads `post.*`, uses `maxwidth` instead of `maxW` and has a leftover `console.log`.
- `components/CoverImage.js` (used by `PostPreview`) nests `<a>` inside `<Link>`. That's the pre-Next-13 pattern and needs `legacyBehavior` or removing the `<a>`.
- Some code still uses Chakra v0 props, such as `variantColor`, which triggers a React unknown-prop warning in dev.
- `npm ci` reports about 26 vulnerabilities in the older dependencies.
