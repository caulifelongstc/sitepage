'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git/COMMIT_EDITMSG": "dc3a30c6af0ff46585d9804677693912",
"/.git/config": "af7d5febcdb60a045feadc7694171eb8",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/FETCH_HEAD": "6818ddaad8bdc9358e3f412e05a1d09f",
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
"/.git/index": "e12c0891d7b9296e9d6f9c364aef379a",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "241ede3ba6665aa02c53830924865ccc",
"/.git/logs/refs/heads/master": "241ede3ba6665aa02c53830924865ccc",
"/.git/logs/refs/remotes/origin/HEAD": "8d7d718f62fd03e57c594a50d8bab74c",
"/.git/logs/refs/remotes/origin/master": "0d51b38e98215ee5f267258cd793e967",
"/.git/objects/02/38ea11b044078fb18aa140433caac2ac493628": "b0192a5257fe28818164f0b5c9240741",
"/.git/objects/09/8b179bb9c7fcfda9b65fcf3c97c0db106395ae": "ee5537909e558b7c91d4e25a501ec8cf",
"/.git/objects/0d/2f90f03bab54b8afb74d5cc4f45e46aaed5ef8": "4927567eaca2a8017a68bbf4cfe98d09",
"/.git/objects/13/956c78918666fe82d13ca33cf34c951368fbc0": "0a2a593ea6dd5409ecd18ce50cd43090",
"/.git/objects/13/c1c35a7262fab63b0a40a018e37980ac09315a": "43fba7dcdca4c21254f64e2e79e2be53",
"/.git/objects/34/12c6934e62f1571c0be23100f29e09b454d361": "8b3fe0a6a34d47b9a045a666464862f1",
"/.git/objects/40/8c73e33b4613f598b511a92430d06625962d8f": "a0decd6a673cdc158b97594d3baa368e",
"/.git/objects/42/8348c729b1cc94634668c4d3dbdf6de8a5d91b": "742a853a00642b1252f49edfdf1ca98f",
"/.git/objects/46/7bd2f24569bd162ff5ddeef84294d804237653": "778f8caa32cd2905b9db0b7be735499c",
"/.git/objects/4a/9eb88bb99be7284ee7840545f75921ce326cd8": "453d80e272ea6f2445ec2966cdee492f",
"/.git/objects/54/f94edbc497900b77e613265c699c623066240f": "9b1ae086134aca18721af880a7b3d76a",
"/.git/objects/57/c54205d46b029448c2d9fb8e534142bd7a5740": "f0a6c9f030d6b2708d5996047fe87bc5",
"/.git/objects/58/c3834654a60b1ca972d16408748b431e980b32": "dab95ebb3b57584bea548813ed652215",
"/.git/objects/5a/44ed1f39c7d1c0d123f726d65dc55ebe78c98c": "d08bca12478bd9c62d061ac602abc448",
"/.git/objects/5a/5ea869adf94c47fe72d72af97378e93e635ef6": "e188b3e795a1b1931320f9ee36923fb4",
"/.git/objects/5b/9da621837b8957946a26bed8d21530576102ee": "fac1185e34308ecd7f5ef1cb17917dce",
"/.git/objects/5e/084f862944c99d8e5c9ebb222ad75be07069f5": "70ff8c6f0d1d7c8bb5991ef1a6584935",
"/.git/objects/70/37ba38ca42719cdc12d94e478644bcf877f864": "da7818d19299a13c4437716bc3d63b0a",
"/.git/objects/73/e1a24ca8df4cf742604fe7f1df6d969254d294": "30e38c3b73988de5c08d817d1b6e8935",
"/.git/objects/90/68a8cee2e95b6bb497bc9e89d2e2148aba0067": "1f69c1ae18a16976d2087dfa76cd2cee",
"/.git/objects/99/aff2f74cdcca8910ed4f807d6f9c3685897955": "b60616a66d74aa1e435ef51989706b48",
"/.git/objects/a4/dabde660d8e201e7ce56b7df79ff33fcad382a": "071a9cff5b4ba5a3a5654fa3a5ffce1c",
"/.git/objects/b7/59f72acce355a0e2c18922bfb04fdd8de9fc89": "1fee69ebedad6e18758fbe516b3fe6ee",
"/.git/objects/b9/b63ffe019ff278bf467fb228ed4ddf11358cf3": "0988afb8398ba22e34ed72ef240a90f1",
"/.git/objects/be/43cd24b84435a94a7ef9dd42d239178b573cab": "8cecda40b56810e2236a18db9c7aa7e9",
"/.git/objects/ce/70fc3887f52a90fbd608221910695ec392ff82": "42561d64b4ef5653a5a1112f9f689e0e",
"/.git/objects/da/463daba8e2e341029b86e53e8cff67ac0d0f62": "b61ca258deda94367ad30d479dbb8257",
"/.git/objects/e0/e7bb1abd72a34e6db81add2028a63896fef75d": "d15e25fe4ff16decbe4628194e3184c4",
"/.git/objects/e2/85b006895f04306db77c1df9aa92c4febf8f13": "5bca055df8cce345b8a1ef7ac01b0d65",
"/.git/objects/e4/0717a71c3d4b89e7cce070b853603449cd718b": "9135991f8d12305ae50ea6eb3bd98099",
"/.git/objects/ed/917a5a36cd2080fe8ac1b3968e6844eda46fe9": "0949a056b3a84a16b184c5461c155910",
"/.git/objects/ef/558946ed59b5c692410214ece253c452bd8b78": "2b72b550280139fb880ffd017be80440",
"/.git/objects/f1/a0c16e715c313e1485570591169c85b721f4b8": "39be319a50d4e908364a7ef59f601421",
"/.git/objects/f3/f3e5c9e10d2a1d84d8fb3d0f05fedee7e079ec": "e9cdea368554d8cfc45b66865507d5f3",
"/.git/objects/pack/pack-910e9268f99bcc6a57fa6279168c9120304e9a09.idx": "f43b3c2b58b09d41dc9a967438367808",
"/.git/objects/pack/pack-910e9268f99bcc6a57fa6279168c9120304e9a09.pack": "d039213c69600e14a6ccb7ba204cf5ba",
"/.git/packed-refs": "7b7d7c76f3affc7a89a7c0fa524e206b",
"/.git/refs/heads/master": "f8083b4cffe86c8acaeb284dd332dd28",
"/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"/.git/refs/remotes/origin/master": "f8083b4cffe86c8acaeb284dd332dd28",
"/assets/AssetManifest.json": "bece17cf15f6ccd93f45afa4ecda310f",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/image/cau_stc_logo.png": "7833c2ffbfcc16283b6486237150b2c4",
"/assets/LICENSE": "f9676e3619c5d7311bd3cdf4caf89c4d",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "217852bf6e55bf946eec73cdcecfb804",
"/main.dart.js": "3a0dae76b5be1eb3cd1da60532b51181",
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
