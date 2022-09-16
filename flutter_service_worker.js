'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "70f525db5a9c342521f32b4352001803",
"assets/assets/images/accState.png": "d944502f3a04b7a75130d3a77b30e80a",
"assets/assets/images/apps/airbusResets.png": "55f0da90dd0a7df6027463e9f1f32b53",
"assets/assets/images/apps/aviationCal.jpg": "4e9c1209a44eea3cd7c54f7abdfd57c1",
"assets/assets/images/apps/boeingFlag.png": "fef15379426c69554792fd8961e3aee1",
"assets/assets/images/apps/logbook.png": "bffce53d9d3a8fa1e31d96ad420e8644",
"assets/assets/images/apps/reg.png": "a91f8b471f40c758106a108bf6e9bc14",
"assets/assets/images/apps/snowtam.png": "a8cd0acaa8fc68c94e702b265477fbcb",
"assets/assets/images/maxFdpAcc.png": "147fa1d92361e6c77f6dcc2df3f74241",
"assets/assets/images/maxFdpUnderFrm.png": "8ee24b052b1acf508683cc9cbbc963a7",
"assets/assets/images/maxFdpUnknownAcc.png": "ad5079ffcad26297a22237f140bfe32b",
"assets/assets/images/maxFdpWithEx.png": "b41419026688ca782946f5da4668d9fe",
"assets/assets/images/tarLogo.png": "322709ef229f86e4d7c81ca497906ca5",
"assets/assets/lottie/103649-client-faq-question-and-answer-with-eraser.json": "81db9575fc3f65d64a9631e87f50226d",
"assets/assets/lottie/26941-global-network.json": "c99157b79a6253ef63cc62b9cd35b573",
"assets/assets/lottie/42410-sleeping-polar-bear.json": "f536da733ab599cb7e3812de486eb597",
"assets/assets/lottie/44190-under-construction-1.json": "2d361eaa7dd473983c52ee2bffe395f4",
"assets/assets/lottie/7316-clock.json": "b34c1f08e0defcca0182321d5ce7deda",
"assets/assets/lottie/89661-raiting.json": "eeb362a8f41c2046e4d5829663b32589",
"assets/assets/lottie/93585-maths-formula.json": "dd3adda7139fdd72ec99e7222c624edb",
"assets/assets/lottie/9527-we-are-under-construction.json": "d5d6f197d7dbd52f457f6636c81729cd",
"assets/assets/tarAd.jpg": "398364d7e784b6b67978106c0f126291",
"assets/assets/tarMedAd.jpg": "69ab2cfc9c845b8ea9fe73594d56ed57",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "a9a5f43f8ae82e5b4c947cac47d70d94",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fbef9578d7f474e0cd8b8c3a556e75d2",
"/": "fbef9578d7f474e0cd8b8c3a556e75d2",
"main.dart.js": "c4be5c1e1022eb72b527228a1b8b0198",
"manifest.json": "565aba8e7d228d3bfdf7116451b7c9de",
"splash/img/dark-1x.png": "da2c6a0d15cc7e5030c86f37cb01e1dc",
"splash/img/dark-2x.png": "31848229d674e553665462427bd426bc",
"splash/img/dark-3x.png": "45de8c764d4515252c5f4d0e5683f890",
"splash/img/dark-4x.png": "2f37e9598b29a897222f86783c8c5c4c",
"splash/img/light-1x.png": "da2c6a0d15cc7e5030c86f37cb01e1dc",
"splash/img/light-2x.png": "31848229d674e553665462427bd426bc",
"splash/img/light-3x.png": "45de8c764d4515252c5f4d0e5683f890",
"splash/img/light-4x.png": "2f37e9598b29a897222f86783c8c5c4c",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "db6178791b6369b77311c0ae92809585",
"version.json": "7fb686b53e37a73104128f6f17aa731c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
