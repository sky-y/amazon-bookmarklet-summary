# Amazon Link Shortener Bookmarklet

Generates some bookmarklets to make a shortened Amazon link (with title or affiliate ID).

## Bookmarklets

These bookmarklets shows an alert popup.

- `dest/url.txt`: Just shows Amazon URL.
- `dest/url-title.txt`: Shows Amazon URL and its title.
- `dest/markdown.txt`: Shows Amazon URL and its title as a Markdown link.
- `dest/af-*.txt`: With Affiliate ID. (Place your Affilicate ID instead of `YOUR_AMAZON_AFFILIATE_ID`)

## Build

`git clone` this.

```
$ npm run build  # build all bookmarklets
$ npm run build:url  # build url.js bookmarklet (see package.json)
```

After building, bookmarklets (with `javascript:` prefix) will be generated in `dest/` directory.

## Special Thanks

- [Gist: peccu/copyToClipboard.js](https://gist.github.com/peccu/d59939959881c34bf9e1d10b2aa6f468#file-copytoclipboard-js)
