'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git/COMMIT_EDITMSG": "537d0ca380602bc986223b965a23ab8e",
"/.git/config": "af7d5febcdb60a045feadc7694171eb8",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/FETCH_HEAD": "43559164d711ca118435c891b327fd41",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/index": "76c2361d3e5c337f504d2561d89091cd",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "41a15b589022e3ac95f0685583abd68e",
"/.git/logs/refs/heads/master": "41a15b589022e3ac95f0685583abd68e",
"/.git/logs/refs/remotes/origin/HEAD": "8d7d718f62fd03e57c594a50d8bab74c",
"/.git/logs/refs/remotes/origin/master": "ed4c7470e0d77d3edf68275d48d470b7",
"/.git/objects/02/38ea11b044078fb18aa140433caac2ac493628": "b0192a5257fe28818164f0b5c9240741",
"/.git/objects/09/8b179bb9c7fcfda9b65fcf3c97c0db106395ae": "ee5537909e558b7c91d4e25a501ec8cf",
"/.git/objects/57/c54205d46b029448c2d9fb8e534142bd7a5740": "f0a6c9f030d6b2708d5996047fe87bc5",
"/.git/objects/5a/5ea869adf94c47fe72d72af97378e93e635ef6": "e188b3e795a1b1931320f9ee36923fb4",
"/.git/objects/70/37ba38ca42719cdc12d94e478644bcf877f864": "da7818d19299a13c4437716bc3d63b0a",
"/.git/objects/e4/0717a71c3d4b89e7cce070b853603449cd718b": "9135991f8d12305ae50ea6eb3bd98099",
"/.git/objects/ef/558946ed59b5c692410214ece253c452bd8b78": "2b72b550280139fb880ffd017be80440",
"/.git/objects/f1/a0c16e715c313e1485570591169c85b721f4b8": "39be319a50d4e908364a7ef59f601421",
"/.git/objects/pack/pack-910e9268f99bcc6a57fa6279168c9120304e9a09.idx": "f43b3c2b58b09d41dc9a967438367808",
"/.git/objects/pack/pack-910e9268f99bcc6a57fa6279168c9120304e9a09.pack": "d039213c69600e14a6ccb7ba204cf5ba",
"/.git/packed-refs": "7b7d7c76f3affc7a89a7c0fa524e206b",
"/.git/refs/heads/master": "d3baaf47715bc3686c4af4cd6a195be5",
"/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"/.git/refs/remotes/origin/master": "d3baaf47715bc3686c4af4cd6a195be5",
"/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "2858a6dcc58080e5389ea38aa9657ac7",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "217852bf6e55bf946eec73cdcecfb804",
"/main.dart.js": "c5be52d854cfa37f1ac091dbc5a8ec18",
"/manifest.json": "5c0bd6cb095456ca81973a8f3c3a676d",
"/_config.yml": "932865e374757d33e321eeb2d5e88b6b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
