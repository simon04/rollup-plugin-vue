/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "452f6dce9c27fd0d75ea1d08579558cc"
  },
  {
    "url": "assets/css/0.styles.3dbb6ab1.css",
    "revision": "496aa0daddb3bee2b4a2a26d80e65e34"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.6cc47258.js",
    "revision": "88fc041bda45fe6e48177b5420e2fb7c"
  },
  {
    "url": "assets/js/4.391fb617.js",
    "revision": "ae34c517742284904972e8572bcc5d39"
  },
  {
    "url": "assets/js/5.3c7fe8f1.js",
    "revision": "f22deb30380e3df4152b7914d1f703d6"
  },
  {
    "url": "assets/js/6.91425c4b.js",
    "revision": "d2b85354db3414cab8593d5e4ab3b05e"
  },
  {
    "url": "assets/js/7.64bc2712.js",
    "revision": "0ad89737ca8543bc080e8db815ee7704"
  },
  {
    "url": "assets/js/8.e2c3fc03.js",
    "revision": "04dea293ca9d1b38fdfc486455dc8c4f"
  },
  {
    "url": "assets/js/9.454e5532.js",
    "revision": "7b329ee93dbbf27cc51fd514fdc1da64"
  },
  {
    "url": "assets/js/app.044ce2dd.js",
    "revision": "ca3d2cbd6b4e6f28ca573d9eb9eb51c3"
  },
  {
    "url": "changelog.html",
    "revision": "06835dd9eba55cda021f48dd7fb837d6"
  },
  {
    "url": "examples.html",
    "revision": "c0371f3799542cd4bd755b002909a42b"
  },
  {
    "url": "getting-started.html",
    "revision": "24bb9ed603a9d3dd220dd667645242f6"
  },
  {
    "url": "index.html",
    "revision": "4140a5a2fa43a711dbf81cb589044fe1"
  },
  {
    "url": "logo.png",
    "revision": "b8c50251399a8890d798d2d531ca4d3b"
  },
  {
    "url": "migrating.html",
    "revision": "528db36f57e467bce6bb7d333070a859"
  },
  {
    "url": "options.html",
    "revision": "955e999a861d367bb69711b5275909e0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
