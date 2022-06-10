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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "321753a4cc406736692bff7e51ce2871"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.a5e43105.js",
    "revision": "5af1e12534ef26ca82ca06fe184e37d1"
  },
  {
    "url": "assets/js/10.33f76f26.js",
    "revision": "220f65ea638281da19c0b0a7cdd4a305"
  },
  {
    "url": "assets/js/11.25089477.js",
    "revision": "4ef4bceb3f3fbc91dbae4f1f03563e71"
  },
  {
    "url": "assets/js/12.8daec512.js",
    "revision": "abef476360cee8a93e81ce167e48015d"
  },
  {
    "url": "assets/js/13.992a6f22.js",
    "revision": "e50d8eec8f8aa4ba351f27f26bd57170"
  },
  {
    "url": "assets/js/14.f7fde798.js",
    "revision": "42abdb2d95f92baffbd9cc34cede30be"
  },
  {
    "url": "assets/js/15.6ff5bfa8.js",
    "revision": "63a1157a67f9588bcc18ea4d3ac865b9"
  },
  {
    "url": "assets/js/16.b4126a68.js",
    "revision": "49bd3bfe51d19e41b4e1572f74d5cd9d"
  },
  {
    "url": "assets/js/17.6d8c550e.js",
    "revision": "ec48824028dfa0b249fb69912dfcfa31"
  },
  {
    "url": "assets/js/18.ccb1f5a6.js",
    "revision": "4618a2a9e799f30e7bb8423bdc449866"
  },
  {
    "url": "assets/js/4.865a9b77.js",
    "revision": "d53d78f2915b550d3c9724e1c5de4845"
  },
  {
    "url": "assets/js/5.6cbec563.js",
    "revision": "18b6c674cfe625f24aeaef8b3afe227b"
  },
  {
    "url": "assets/js/6.4de37bc9.js",
    "revision": "bee0a979c6054fa7fbf12430a9a2d267"
  },
  {
    "url": "assets/js/7.e6635361.js",
    "revision": "70a7b2deffbe74dbbb2bdbd4ff3bf4d0"
  },
  {
    "url": "assets/js/8.c32581b2.js",
    "revision": "75bbb0b04f31e38bddf06c1e7f804ec4"
  },
  {
    "url": "assets/js/9.34fc3aa4.js",
    "revision": "aa9b16c5468cdd3b24805703bc036afc"
  },
  {
    "url": "assets/js/app.b4948c6f.js",
    "revision": "e109519f262c042d015c18110686c11f"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.c6937b0c.js",
    "revision": "81ef84d370addbda5a2e08aa6861f5f8"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "5c0aae136c40f337e883301fd694f087"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b7ed0b620f6a995f0deba72bdcea3123"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "830a07eb2a4067f032b9b5f65b5d69d7"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c1f677efb6295681a647f66eacbbed88"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "2733ef8d7028cb3cc9218ce7d7f1c27f"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "dbf86e93e3b53ef967ac67740a015bfd"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "93cfb2fb4b5efe2eece8f73cf218f020"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "549b9f6c3b87d03514c80efef3305c71"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "dda5897041047a952d1fe5d1d4eb2af1"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ccdc2b50bd124c6dcbf233cc7c851ef0"
  },
  {
    "url": "tags/js/index.html",
    "revision": "3faa3fcedcc3d78c412cf5d646707996"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "cc7ceeb21b3ba13e298d93803b91b77a"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "10d6fd53a2e0a8c52ec1d4e53982aca1"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "7afac0dd78f9d40f25ef5f92f8b474c0"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "c77cbae5518ceaac5f02e1a5a6d94810"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "b9528d6d07746416df767bdc80f67249"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f0491ef2177b8eb1efe721520a13b94c"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "4eeb3e057c6c0e03ad615b5484214495"
  },
  {
    "url": "timeline/index.html",
    "revision": "582ce05b43b161538a7b556d06cec77c"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c4112d1c28c9c498dfd77a54cdefa314"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "77fc08549ce1e125ca22263c2f945790"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "e1c6eabfae48e1df3a2a6c2cc7dc1737"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "4ec339984c78b42e9c2274349b3a98e9"
  },
  {
    "url": "生活分享/life.html",
    "revision": "c739162b0b85fe7b91c81e0a0ddea081"
  }
].concat(self.__precacheManifest || []);
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
