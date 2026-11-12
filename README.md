# Delhi Palace (staging)

Static site for Delhi Palace, 46 Dalhousie St, Brantford, ON.
Production home: https://thedelhipalace.ca (Hostinger, uploaded from `public_html/`).

**Live staging URL:** https://delhipalace.grcgroup.tech

## How this deploys

Cloudflare Pages publishes this repo with no build command. The output directory
is `public_html`.

`wrangler.jsonc` is a Workers static-assets config for that same folder
(`"directory": "./public_html"`). The same `public_html/` folder is what gets
uploaded to Hostinger for production (see `HOW-TO-DEPLOY.txt`), so staging and
production always ship identical files.

## Where files go

Put every page and asset inside `public_html/`:

```
public_html/
  index.html                              ->  /
  about/index.html                        ->  /about/
  menu/index.html                         ->  /menu/
  order/index.html                        ->  /order/
  gallery/index.html                      ->  /gallery/
  contact/index.html                      ->  /contact/
  blog/index.html                         ->  /blog/
  privacy-policy/index.html               ->  /privacy-policy/
  best-indian-food-brantford/index.html   ->  /best-indian-food-brantford/
  brantford-takeout-delivery/index.html   ->  /brantford-takeout-delivery/
  chinese-food-brantford/index.html       ->  /chinese-food-brantford/
  vegetarian-indian-food-brantford/index.html -> /vegetarian-indian-food-brantford/
  what-is-hakka-cuisine/index.html        ->  /what-is-hakka-cuisine/
  404.html                                ->  shown for any unknown URL
  llms.txt, robots.txt, sitemap.xml, favicon.ico
  assets/                                 ->  images, css, js
```

The canonical URL shape is **trailing slash** (`/menu/`), matching what Google
indexed from the old WordPress site. Each page is a folder with `index.html`.
`wrangler.jsonc` uses `"html_handling": "force-trailing-slash"` so Cloudflare
serves `menu/index.html` at `/menu/` and 301s `/menu` to `/menu/`. All internal
links and asset paths in the pages are absolute.

## Local preview

```
node preview-server.js
```

Serves `public_html/` at http://localhost:8124, including the legacy redirects
(`/about-us/` -> `/about/`). Pages in this version live at `folder/index.html`
(for example `menu/index.html`). `preview-server.js` still looks up `menu.html`
for `/menu/`, so directory-index pages need a static server that serves
`index.html` inside each folder.

## Config

`wrangler.jsonc` is the only config file. It needs no changes when pages are added
or removed: whatever sits in `public_html/` gets deployed.

## Build settings (set in the Cloudflare dashboard)

| Setting | Value |
| --- | --- |
| Build command | *(leave empty)* |
| Output directory | `public_html` |
| Root directory | `/` |
| Production branch | `main` |

There is no build step: the site is plain HTML, so a build command will only cause
the deploy to fail.
