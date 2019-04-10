var CACHE_NAME = 'mweb-mine-cache-v1';
var urlsToCache = [
  '/',
  '/asset/img/logo.svg',
  '/asset/main.css',
  '/asset/prism.css',
  '/asset/prism.js',
  // '/asset/instantclick.min.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
