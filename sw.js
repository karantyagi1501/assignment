var static_cache = "static-resources-V1";

var assets = [
    "/",
    "index.html",
    "lgin.html",
    "register.html",
    "manifest.json",
    "script.js",
    "style.css",
    "style1.css",
    "style2.css",
    "style5.css",
    "style6.css",
    "sw.js",
    "userprofile.html",
    "app.js",
    "auth.js",
    "icon-512.png",
    "icon192x192.png",
    "Contact-form-background.jpg",
    "custom.js"
];

self.addEventListener("activate", function(event) {
    var cacheWhitelist = [static_cache];

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

//install the service worker
self.addEventListener("install", function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(static_cache).then(function(cache) {
            console.log("caching all assets");
            return cache.addAll(assets);
        })
    );
});

//fetching the resources
self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.match(event.request).then((res) => {
            if (res) {
                return res;
            } else {
                return fetch(event.request);
            }
        })
    );
});

importScripts("https://cdn.pushalert.co/sw-17323_3.js");
