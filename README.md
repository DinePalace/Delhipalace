# Delhi Palace (staging)

Static site for Delhi Palace, 46 Dalhousie St, Brantford, ON.
Production home: https://thedelhipalace.ca (Hostinger, uploaded from `public_html/`).

**Live staging URL:** https://delhipalace.grcgroup.tech

## How this deploys

Cloudflare Workers is connected to this repo. Every push to `main` triggers a build
that runs `npx wrangler deploy`, which uploads everything inside `public_html/` as
static assets and serves it on the custom domain above.

The same `public_html/` folder is what gets uploaded to Hostinger for production
(see `HOW-TO-DEPLOY.txt`), so staging and production always ship identical files.

## Where files go

Put every page and asset inside `public_html/`:

```
public_html/
  index.html        ->  /
  about.html        ->  /about/
  menu.html         ->  /menu/
  order.html        ->  /order/
  gallery.html      ->  /gallery/
  contact.html      ->  /contact/
  blog.html + posts ->  /blog/, /what-is-hakka-cuisine/, ...
  404.html          ->  shown for any unknown URL
  .htaccess         ->  Hostinger only (Cloudflare ignores it)
  assets/           ->  images, css, js
```

The canonical URL shape is **trailing slash** (`/menu/`), matching what Google
indexed from the old WordPress site. `wrangler.jsonc` uses
`"html_handling": "force-trailing-slash"` so Cloudflare serves `menu.html` at
`/menu/` and 301s `/menu` to `/menu/` — the same behaviour `.htaccess` gives
Hostinger. All internal links and asset paths in the pages are absolute.

## Local preview

```
node preview-server.js
```

Serves `public_html/` at http://localhost:8124 with the same clean-URL rewrites
and legacy redirects (`/about-us/` -> `/about/`) as production.

## Config

`wrangler.jsonc` is the only config file. It needs no changes when pages are added
or removed: whatever sits in `public_html/` gets deployed.

## Build settings (set in the Cloudflare dashboard)

| Setting | Value |
| --- | --- |
| Build command | *(leave empty)* |
| Deploy command | `npx wrangler deploy` |
| Version command | `npx wrangler versions upload` |
| Root directory | `/` |
| Production branch | `main` |

There is no build step: the site is plain HTML, so a build command will only cause
the deploy to fail.
