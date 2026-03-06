const CACHE="pension-app-v1";

self.addEventListener("install",e=>{
self.skipWaiting();
});

self.addEventListener("fetch",event=>{
event.respondWith(
fetch(event.request).catch(()=>{
return caches.match(event.request);
})
);
});