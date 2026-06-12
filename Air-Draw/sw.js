var CACHE='airdraw-v1';
var ASSETS=['./index.html','./manifest.json'];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ASSETS);}));
});
self.addEventListener('fetch',function(e){
  e.respondWith(fetch(e.request).catch(function(){return caches.match(e.request);}));
});
