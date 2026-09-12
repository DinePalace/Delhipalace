# Delhi Palace (staging)

Static site for Delhi Palace, 46 Dalhousie St, Brantford, ON.

**Live staging URL:** https://delhipalace.grcgroup.tech

## How this deploys

Cloudflare Workers is connected to this repo. Every push to `main` triggers a build
that runs `npx wrangler deploy`, which uploads everything inside `public/` as static
assets and serves it on the custom domain above.

## Where files go

Put every page and asset inside `public/`:

```
public/
  index.html        ->  /
  about.html        ->  /about
  menu.html         ->  /menu
  order.html        ->  /order
  gallery.html      ->  /gallery
  contact.html      ->  /contact
  404.html          ->  shown for any unknown URL
  assets/           ->  images, css, js (if pages are not self-contained)
```

Cloudflare serves `about.html` at `/about` automatically, so internal links can be
written either way. Pages that already have their images base64-embedded need no
`assets/` folder at all.

## Config

`wrangler.jsonc` is the only config file. It needs no changes when pages are added
or removed: whatever sits in `public/` gets deployed.

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
