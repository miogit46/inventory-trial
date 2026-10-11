const CACHE = 'tokomusik-v2';
const FILES = [
  './Store.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key.startsWith('tokomusik-') && key !== CACHE).map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(event.request);
        if (response.ok) {
          const cache = await caches.open(CACHE);
          await cache.put(event.request, response.clone());
        }
        return response;
      } catch {
        const cachedPage = await caches.match(event.request);
        if (cachedPage) return cachedPage;
        const oldApp = await caches.match('./Store.html');
        return oldApp || Response.error();
      }
    })());
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request).then(networkResponse => {
      if (networkResponse.ok) {
        return caches.open(CACHE).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      }
      return networkResponse;
    }).catch(() => caches.match('./Store.html')))
  );
});
