importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const JS_CSS_CACHE = "javascript";
const IMAGE_CACHE = "images";
const FONT_CACHE = "fonts";
const SOUND_CACHE = "sound";
const CORE_CACHE = "core";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Precache important core files (HTML, main JS, CSS)
workbox.precaching.precacheAndRoute([
    { url: '/', revision: '1' },
    { url: '/index.html', revision: '1' },
    { url: '/styles.css', revision: '1' },
    { url: '/app.js', revision: '1' },
    { url: '/manifest.json', revision: '1' },
    { url: '/pwa-assets/android-launchericon-512-512.png', revision: '1' },
  ]);

workbox.routing.registerRoute(
  new RegExp('\/css|\/js\/'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: JS_CSS_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
      }),
    ],
  })
);

workbox.routing.registerRoute(
    new RegExp('.*\\.mp3$'),
    new workbox.strategies.CacheFirst({
      cacheName: SOUND_CACHE,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 20,
          maxAgeSeconds: 90 * 24 * 60 * 60, // Cache for 90 days
        }),
      ],
    })
  );
  
workbox.routing.registerRoute(
  new RegExp('.*\.(jpe?g|png|gif|svg)$'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: IMAGE_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 30,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  ({event}) => event.request.destination === 'font',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: FONT_CACHE,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 15,
      }),
    ],
  })
);

// Offline fallback for HTML
workbox.routing.registerRoute(
    ({ request }) => request.mode === 'navigate',
    new workbox.strategies.CacheFirst({
      cacheName: CORE_CACHE,
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 10,
        }),
      ],
    })
  );