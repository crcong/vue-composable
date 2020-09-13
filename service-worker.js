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
    "revision": "7f301c0d6dd8dc7884ae26c5d4f26a80"
  },
  {
    "url": "api/axios.api.html",
    "revision": "90db1ae99e8ca15b2ea77c6406748b19"
  },
  {
    "url": "api/core.api.html",
    "revision": "bb45020ba8d90012732623f7ce3c9abb"
  },
  {
    "url": "api/vue-composable.api.html",
    "revision": "b2f056268b266a0a3c30b85c33d10f10"
  },
  {
    "url": "api/web.api.html",
    "revision": "8713b79c025a0247656f588729f01f38"
  },
  {
    "url": "assets/css/2.styles.7a7969f8.css",
    "revision": "b41178b59c66518fac8b35d9c7be731b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.40026741.js",
    "revision": "905f52a46ad7c70d5286d7d9bf35c144"
  },
  {
    "url": "assets/js/1.0d1da739.js",
    "revision": "f9f75f57d613ef45baf895e9efa55541"
  },
  {
    "url": "assets/js/10.0d28cdb0.js",
    "revision": "3b0d8662c16b609449379efadbc95055"
  },
  {
    "url": "assets/js/100.6cb48840.js",
    "revision": "66dd78d5de86d1427889a350c9a87966"
  },
  {
    "url": "assets/js/101.90ba2d6f.js",
    "revision": "df6c2ea9d5219ba7c92a2172e866ec57"
  },
  {
    "url": "assets/js/102.ac62dfd6.js",
    "revision": "21aa26769bc07886b07a71a6adcbdcb4"
  },
  {
    "url": "assets/js/103.d8629773.js",
    "revision": "dd410956035aece7d2b3f70d4ba290cb"
  },
  {
    "url": "assets/js/104.4946306b.js",
    "revision": "0351e6f4da5b3220d5279799f87a9883"
  },
  {
    "url": "assets/js/105.636b9d5d.js",
    "revision": "dc06beabee88a210fbb76272ead77c3d"
  },
  {
    "url": "assets/js/106.642a4d84.js",
    "revision": "f6814b89139185dc7547ee09f80faa10"
  },
  {
    "url": "assets/js/107.6a22d572.js",
    "revision": "54cda727b8fa6dbb00de25144a1e650c"
  },
  {
    "url": "assets/js/108.ebcc02c0.js",
    "revision": "091bfac9cff77b3649a7b4c84bb4a5ea"
  },
  {
    "url": "assets/js/109.cd45928a.js",
    "revision": "5046248cb6ed761a3398edfba53009df"
  },
  {
    "url": "assets/js/11.95982981.js",
    "revision": "c5cbf715c10b794ff5baf55e64b94311"
  },
  {
    "url": "assets/js/110.5648f62d.js",
    "revision": "eb28d42c2b10acce2a695f9eaaa563c1"
  },
  {
    "url": "assets/js/111.51644f93.js",
    "revision": "ac7bf92efbb5b600f176551681779e69"
  },
  {
    "url": "assets/js/112.3db5e8de.js",
    "revision": "f3742d7403a7062b49215b413e7d226e"
  },
  {
    "url": "assets/js/113.a03628bf.js",
    "revision": "113008f23c3f22e8bc93658f6f53b9a1"
  },
  {
    "url": "assets/js/114.ca2c5488.js",
    "revision": "d124865605c24fc23d138190fd63482f"
  },
  {
    "url": "assets/js/115.76b51447.js",
    "revision": "1ce5fd82fdcb52ce80ef0c0f75dfcf80"
  },
  {
    "url": "assets/js/116.59cd2598.js",
    "revision": "769a6b75d6ae4ddeeec0e2f729753490"
  },
  {
    "url": "assets/js/117.809dc621.js",
    "revision": "b299215fe83582072db664fcedc86577"
  },
  {
    "url": "assets/js/12.7d79d73d.js",
    "revision": "a028cc1ec769c6c7f205494bccb16065"
  },
  {
    "url": "assets/js/13.42ab529d.js",
    "revision": "ca80aebdf2acb3e1158f90b374d31609"
  },
  {
    "url": "assets/js/14.5fb2e52a.js",
    "revision": "12a2986f5c41f9a61fbb206f6bb08326"
  },
  {
    "url": "assets/js/15.1d5622ce.js",
    "revision": "f5454dfc7bf8d46e274134b791ebb5ac"
  },
  {
    "url": "assets/js/16.7157f050.js",
    "revision": "b8d845f274d3fcc6aa505b6cb3981b83"
  },
  {
    "url": "assets/js/17.e8e00559.js",
    "revision": "76595322a3bd2680e47575fbd5018341"
  },
  {
    "url": "assets/js/18.f5bc2c93.js",
    "revision": "166eb269a6be5b2224c06b954ba742f9"
  },
  {
    "url": "assets/js/19.49b2b82d.js",
    "revision": "9ad771d4171a48000428c52cf5b97529"
  },
  {
    "url": "assets/js/20.27aaa2ce.js",
    "revision": "025434ca10c203f849bacffa137e5e21"
  },
  {
    "url": "assets/js/21.0ceb0303.js",
    "revision": "d20d07cb63c996a2d390e6ae4eec29ef"
  },
  {
    "url": "assets/js/22.e64e5688.js",
    "revision": "7e7dec8927db61137e6ca86887429aad"
  },
  {
    "url": "assets/js/23.f43745eb.js",
    "revision": "21264b043bd5d63144f010ad714901ba"
  },
  {
    "url": "assets/js/24.602b5d33.js",
    "revision": "c52e65af78e169d55ac4550c1430cf68"
  },
  {
    "url": "assets/js/25.8c5cf023.js",
    "revision": "e2371e4920058b6a57b2e300026edad7"
  },
  {
    "url": "assets/js/26.48c23f07.js",
    "revision": "c52194e5a9ef446733a3cf09a6761171"
  },
  {
    "url": "assets/js/27.1b544743.js",
    "revision": "54df7080e6bccdb1ea8c4582fef3979a"
  },
  {
    "url": "assets/js/28.4995045a.js",
    "revision": "e6003e8a16b537092e3fa328d7902e94"
  },
  {
    "url": "assets/js/29.2c96753c.js",
    "revision": "31d257feaf9ab1e6d1667e0a94842951"
  },
  {
    "url": "assets/js/30.76d06680.js",
    "revision": "cb7c408824bf925a0161967c5581b715"
  },
  {
    "url": "assets/js/31.25ea26fe.js",
    "revision": "a6a98e1f2956e15f6fd5d2270177ae7e"
  },
  {
    "url": "assets/js/32.14f6cbe8.js",
    "revision": "ed08157cf49bfe5ffe9164488d699c76"
  },
  {
    "url": "assets/js/33.53712306.js",
    "revision": "da2e10321e589294b6073a206c5bb287"
  },
  {
    "url": "assets/js/34.cafac8d5.js",
    "revision": "5787b20dbdcb8538dd4799f53497a599"
  },
  {
    "url": "assets/js/35.d13d5248.js",
    "revision": "4747b48d66c6473128ea5293f360c69e"
  },
  {
    "url": "assets/js/36.28f6da70.js",
    "revision": "66ea98244a4763e3658f9bb24e29956c"
  },
  {
    "url": "assets/js/37.2df97aa2.js",
    "revision": "d074b03552d5274ed4790155d29f9db9"
  },
  {
    "url": "assets/js/38.0e1fe0bc.js",
    "revision": "18f9ae7336efc6fe457619e0fd7b5b7e"
  },
  {
    "url": "assets/js/39.2ef62102.js",
    "revision": "705bfc8b86d2d34526680b3c0553c18f"
  },
  {
    "url": "assets/js/4.61470b67.js",
    "revision": "8cacf71cd5597f205377c9c45b39b3b4"
  },
  {
    "url": "assets/js/40.c50e296b.js",
    "revision": "67199abf110c97bc7ed87bb9a650c3d2"
  },
  {
    "url": "assets/js/41.6d12194e.js",
    "revision": "bfc0e08a48c04cd94adb583667f51292"
  },
  {
    "url": "assets/js/42.7bb3919c.js",
    "revision": "140033a2a98d7f4d9df3c009374c9f90"
  },
  {
    "url": "assets/js/43.93d0724d.js",
    "revision": "68dc10afca80596579002a38393bc3e4"
  },
  {
    "url": "assets/js/44.2a1f8c25.js",
    "revision": "ef73f5e0cd018f4c37308b8bd7858268"
  },
  {
    "url": "assets/js/45.24f952c0.js",
    "revision": "3e22f1b87278a1c4377e28b503fd0fee"
  },
  {
    "url": "assets/js/46.6a46b62b.js",
    "revision": "9e5c07fce28323b65d1a937f9ab6a124"
  },
  {
    "url": "assets/js/47.134d8b3c.js",
    "revision": "11d8c5b915da269d51a12be2655e5c23"
  },
  {
    "url": "assets/js/48.d5fab3c0.js",
    "revision": "a9114026efb95687050861104382b81d"
  },
  {
    "url": "assets/js/49.c5d6bc12.js",
    "revision": "70c897cf59c7cd08c3fc408b5b5d598b"
  },
  {
    "url": "assets/js/5.c062b819.js",
    "revision": "cd64e6d8db11a40cec87fff39c6ee40a"
  },
  {
    "url": "assets/js/50.fd5475d4.js",
    "revision": "86e9348f83821b4449b8869902d50137"
  },
  {
    "url": "assets/js/51.683bf341.js",
    "revision": "b37eade585fd8c4a25b7430fbecca947"
  },
  {
    "url": "assets/js/52.cd68a3ea.js",
    "revision": "2e2cd4e05b82415822856d1845d639ef"
  },
  {
    "url": "assets/js/53.d21ce2ed.js",
    "revision": "94bf8997830ff39fce9b9661eeb4281f"
  },
  {
    "url": "assets/js/54.ca763fc3.js",
    "revision": "275962b3c6677e3e685f1e1cd4bd1d73"
  },
  {
    "url": "assets/js/55.2f0fb4f2.js",
    "revision": "e3a9313d222897684eece19a0e99d473"
  },
  {
    "url": "assets/js/56.1862fa78.js",
    "revision": "7b1d79a0ee7073df4c8e4b51f7ada46b"
  },
  {
    "url": "assets/js/57.b384618a.js",
    "revision": "f545b282bedb3506d8651f80fec2ec83"
  },
  {
    "url": "assets/js/58.3880e776.js",
    "revision": "d370ba8580e1973899114798e1413618"
  },
  {
    "url": "assets/js/59.59c69b26.js",
    "revision": "75fc26ed103609f2f7cdba777d1b5197"
  },
  {
    "url": "assets/js/6.a6e770a0.js",
    "revision": "36539d1f675001e4886772a9a4e96c71"
  },
  {
    "url": "assets/js/60.3db32b51.js",
    "revision": "f9b8ff7a15db67d3f4e758bd9ee3ce82"
  },
  {
    "url": "assets/js/61.1a76e817.js",
    "revision": "f30f8133503fc1f3d7af87e5b0bd1e15"
  },
  {
    "url": "assets/js/62.bdd7ceec.js",
    "revision": "4e290be1d90f24d8030671446e9cbe40"
  },
  {
    "url": "assets/js/63.d57bb10f.js",
    "revision": "ed029d79ec3687d7f32d7aed5750d806"
  },
  {
    "url": "assets/js/64.b2141b2e.js",
    "revision": "7f965fc366352570a8ce180498cadb29"
  },
  {
    "url": "assets/js/65.eb9db6d2.js",
    "revision": "69fb19f05dcf6cb0025c23a3f0eee799"
  },
  {
    "url": "assets/js/66.fb017287.js",
    "revision": "9a83fec1ee4ac505e43848f943532e10"
  },
  {
    "url": "assets/js/67.4ae5f6ac.js",
    "revision": "486cc3ace29e3d394d295812ee753e88"
  },
  {
    "url": "assets/js/68.3f0acf81.js",
    "revision": "bc101e94f5ac8aab99a14167d9e0e7b6"
  },
  {
    "url": "assets/js/69.d6dad025.js",
    "revision": "46ec8f93c814d086ee9b69075614f2ef"
  },
  {
    "url": "assets/js/7.534146e6.js",
    "revision": "cfe5eae41df2900eebbfeee1d02a1cb1"
  },
  {
    "url": "assets/js/70.644dabc5.js",
    "revision": "3d5457bc45ab3d912cb47024e7324383"
  },
  {
    "url": "assets/js/71.76a1c97c.js",
    "revision": "270de816391db97fe1875492586a6d9c"
  },
  {
    "url": "assets/js/72.78fb8bd6.js",
    "revision": "6d0506acf34093b5340adef79f0139b7"
  },
  {
    "url": "assets/js/73.75206615.js",
    "revision": "5facd96bfa92179485f80db34bebe6a8"
  },
  {
    "url": "assets/js/74.7f95b6f6.js",
    "revision": "c501d5da98d1d3ec106333ffc0b1792f"
  },
  {
    "url": "assets/js/75.ffa5e61d.js",
    "revision": "bb064746639ca499642967c29904f877"
  },
  {
    "url": "assets/js/76.18fe9cad.js",
    "revision": "b2c069da5af39e677f7c16092fc7ed97"
  },
  {
    "url": "assets/js/77.0b144400.js",
    "revision": "f05ed07516a5e15e274e870020221169"
  },
  {
    "url": "assets/js/78.3b11033c.js",
    "revision": "a03228bdff539bda8bbf9a98f0a6fe16"
  },
  {
    "url": "assets/js/79.718a47c5.js",
    "revision": "a3ab5dfb1a7f04c8878731a4ac024c67"
  },
  {
    "url": "assets/js/8.583eec1d.js",
    "revision": "a3a9bbebd89ae567db912738b32d9eb3"
  },
  {
    "url": "assets/js/80.8e1a5bee.js",
    "revision": "4895714ae6b09e78deedd94e847f005a"
  },
  {
    "url": "assets/js/81.651f681f.js",
    "revision": "3ef87d8f388af095d8c03667198f7910"
  },
  {
    "url": "assets/js/82.e534e5c2.js",
    "revision": "d8765713f7f18f8628c6933f420f2701"
  },
  {
    "url": "assets/js/83.9f518057.js",
    "revision": "f4f3823ab589f1c51531e186c7786bbd"
  },
  {
    "url": "assets/js/84.6b48e9aa.js",
    "revision": "b15e8287730bf2a22f6e2221d69c4dc2"
  },
  {
    "url": "assets/js/85.8941e516.js",
    "revision": "ca0f01f0473f1e38e4dfe397872a0f31"
  },
  {
    "url": "assets/js/86.a895f6e2.js",
    "revision": "a6dbb424f9617f80ec4fd2a67186ed4d"
  },
  {
    "url": "assets/js/87.0d9af957.js",
    "revision": "80a14f0f052a256cb94e7b6b8b1fe093"
  },
  {
    "url": "assets/js/88.de8010b4.js",
    "revision": "153e5876dfdb74f5f167bee0af143637"
  },
  {
    "url": "assets/js/89.d0a8e2d2.js",
    "revision": "5bc3aaa9e52a0f1b264973b49099bacb"
  },
  {
    "url": "assets/js/9.f8f4fd6c.js",
    "revision": "53ec2f727e28ca5815ad83d331ad5c27"
  },
  {
    "url": "assets/js/90.fa740058.js",
    "revision": "05010361d4192535f3c0aa9cc83ab798"
  },
  {
    "url": "assets/js/91.8edd081a.js",
    "revision": "7bd7796ef3a060b7d6571407bf52417e"
  },
  {
    "url": "assets/js/92.23fc4ffc.js",
    "revision": "dec287e9384616c94badb6b34e135805"
  },
  {
    "url": "assets/js/93.4bf2f128.js",
    "revision": "817dda3735a9d9d34a8088d5f13bde65"
  },
  {
    "url": "assets/js/94.168eb2c7.js",
    "revision": "8a604d898c864c231a04c429cb8fcd97"
  },
  {
    "url": "assets/js/95.c949336f.js",
    "revision": "4690aa6f0108e6630c8efd237e02c3bf"
  },
  {
    "url": "assets/js/96.cbf918ea.js",
    "revision": "757788a5819d6df776858ab09bf27b64"
  },
  {
    "url": "assets/js/97.f338053d.js",
    "revision": "96d840713cad6b90a6d8246ff31bc4ba"
  },
  {
    "url": "assets/js/98.2f72ab38.js",
    "revision": "37ba922d9d238d5fc718b6b1bb9537f2"
  },
  {
    "url": "assets/js/99.b397e13f.js",
    "revision": "5a787d7abfd28d7f06da4725f6b12e89"
  },
  {
    "url": "assets/js/app.d5474a22.js",
    "revision": "ca0ad486e938047a3e7c4f26d911bb68"
  },
  {
    "url": "assets/logo.svg",
    "revision": "581a23a1a5bd08cf39402f9cc6755424"
  },
  {
    "url": "composable/_template.html",
    "revision": "1c22afc6f5e071d93b6bf432391f4aa6"
  },
  {
    "url": "composable/breakpoint/breakpoint.html",
    "revision": "0efd1cff3e2e16675b1b0a700063bcf3"
  },
  {
    "url": "composable/breakpoint/breakpointChrome.html",
    "revision": "faa2913f0a40994806b30acdcbfeed38"
  },
  {
    "url": "composable/breakpoint/breakpointTailwindCSS.html",
    "revision": "f8302028dec672a7f968b0942d904c8d"
  },
  {
    "url": "composable/breakpoint/matchMedia.html",
    "revision": "aae23a96a9acd1358c3959eeedd9885c"
  },
  {
    "url": "composable/date/dateNow.html",
    "revision": "e07f5d2302c8d37cafc6e04be97c1be5"
  },
  {
    "url": "composable/date/now.html",
    "revision": "79f069a6f70a055d51855d6142f6516b"
  },
  {
    "url": "composable/date/performanceNow.html",
    "revision": "ea533ecff35b4e993c9539067aabdf8d"
  },
  {
    "url": "composable/event/event.html",
    "revision": "55fd39571da2777518d74231de6627c6"
  },
  {
    "url": "composable/event/onMouseMove.html",
    "revision": "3c7ffb846f7dec4a6eb3ffca5f15992f"
  },
  {
    "url": "composable/event/onOutsidePress.html",
    "revision": "70331c8bcbbf33bf68fc7a6dfd31b8ee"
  },
  {
    "url": "composable/event/onResize.html",
    "revision": "b547f226ce3ef529c02716e7a6f74a81"
  },
  {
    "url": "composable/event/onScroll.html",
    "revision": "bf4d58af8a28b56b4aec378e0f4e55aa"
  },
  {
    "url": "composable/external/axios.html",
    "revision": "61225c8132b1fb173dc819324c3da294"
  },
  {
    "url": "composable/external/makeAxios.html",
    "revision": "61fce9a7905305d197d147309f526c9b"
  },
  {
    "url": "composable/format/format.html",
    "revision": "161b1f05eb50661831111c8a001f7f3e"
  },
  {
    "url": "composable/format/path.html",
    "revision": "55741a8bc8f515d0dd3a8c4c29b66e77"
  },
  {
    "url": "composable/i18n/i18n.html",
    "revision": "36e074eb4ff16a41e9c46466532c7a9e"
  },
  {
    "url": "composable/index.html",
    "revision": "405de0026460bb4d34447e49c4df83a5"
  },
  {
    "url": "composable/Intl/currencyFormat.html",
    "revision": "749ed1946a28a222c7287da4ba0e76ae"
  },
  {
    "url": "composable/Intl/dateTimeFormat.html",
    "revision": "f717734dc32dcb012ae8ac7e0335ebf6"
  },
  {
    "url": "composable/Intl/numberFormat.html",
    "revision": "80b29b6df65e3dd645f1296c8ccf85b3"
  },
  {
    "url": "composable/meta/title.html",
    "revision": "c77d9ff04eb3c3e2cd7d8e9dc11aecab"
  },
  {
    "url": "composable/misc/injectFactory.html",
    "revision": "aac2da2c825c83dc903bdc9dedaf301e"
  },
  {
    "url": "composable/misc/interval.html",
    "revision": "ea274b2d83bd69d55fdf03adecfb2286"
  },
  {
    "url": "composable/misc/lockScroll.html",
    "revision": "04590250458773c6151ce6aeb66ee510"
  },
  {
    "url": "composable/misc/sharedRef.html",
    "revision": "7643ab829d2f4c0f60ae8a8ebd272500"
  },
  {
    "url": "composable/misc/vmodel.html",
    "revision": "e9af36c30881d05578a1996ac9de6329"
  },
  {
    "url": "composable/pagination/arrayPagination.html",
    "revision": "3ec5eb80fdcd96421281b7fb23a54aaf"
  },
  {
    "url": "composable/pagination/pagination.html",
    "revision": "4d51148f2fab56a123db5ed7ab025e93"
  },
  {
    "url": "composable/promise/cancellablePromise.html",
    "revision": "291d5fb88ee1c786cbbee5ac22338256"
  },
  {
    "url": "composable/promise/promise.html",
    "revision": "7224f43fa123f22231a9c6b3000e4b7d"
  },
  {
    "url": "composable/promise/promiseLazy.html",
    "revision": "dce21d90ef15c5d6de72a2ed9acb1499"
  },
  {
    "url": "composable/promise/retry.html",
    "revision": "0d5179180352cd47ee859e51fbae2632"
  },
  {
    "url": "composable/state/timeline.html",
    "revision": "2f44f7f95b0fa0e1f1accceff5467129"
  },
  {
    "url": "composable/state/undo.html",
    "revision": "d44b9802b7a0ae5fa10a328461eec7ae"
  },
  {
    "url": "composable/state/valueSync.html",
    "revision": "f5147fe76dd0574c5e7db469a127b552"
  },
  {
    "url": "composable/storage/localStorage.html",
    "revision": "09f2b50a6c5fe0f12eae41f55ca64919"
  },
  {
    "url": "composable/storage/sessionStorage.html",
    "revision": "935233855f4b187348d61be32b7e645f"
  },
  {
    "url": "composable/storage/storage.html",
    "revision": "c6ccbbe60c419b71c9b477727c688ba3"
  },
  {
    "url": "composable/storage/webStorage.html",
    "revision": "7287b3c6ad65e478464baeee11e0d251"
  },
  {
    "url": "composable/validation/validation.html",
    "revision": "9e0879af8219dc61259a0d3f387836f9"
  },
  {
    "url": "composable/web/broadcastChannel.html",
    "revision": "9d78851de629f514fabbf7a834b7b672"
  },
  {
    "url": "composable/web/cssVariables.html",
    "revision": "f37f3aeb086cde7ae7faec0d1ebf6759"
  },
  {
    "url": "composable/web/fetch.html",
    "revision": "87e53bcaae8828293fbaaa62ebd9439f"
  },
  {
    "url": "composable/web/geolocation.html",
    "revision": "b328cc92fa39d71e5730b741a9c68a09"
  },
  {
    "url": "composable/web/intersectionObserver.html",
    "revision": "f503e782089d03d998bd30f2f4722309"
  },
  {
    "url": "composable/web/language.html",
    "revision": "de4135de627607bdc0e5391a9ee507e2"
  },
  {
    "url": "composable/web/networkInformation.html",
    "revision": "760014db30e134d6ee1264c500fe7f09"
  },
  {
    "url": "composable/web/online.html",
    "revision": "8f8fc0c558ee021f34d32e86dfaa8c67"
  },
  {
    "url": "composable/web/pageVisibility.html",
    "revision": "ce81f2b69433e1d58c493341301b8836"
  },
  {
    "url": "composable/web/share.html",
    "revision": "1101755af9599fdd7cb27b6366d64ff7"
  },
  {
    "url": "composable/web/webSocket.html",
    "revision": "c1c9747ff0ca79e4d962f3420445255f"
  },
  {
    "url": "composable/web/worker.html",
    "revision": "a156691c46a27dc688d3b12c78667b95"
  },
  {
    "url": "composable/web/workerFunction.html",
    "revision": "1b80ed22551bee7b974f19b09f3311ab"
  },
  {
    "url": "Examples/index.html",
    "revision": "b4f30c2fe4027a1355b8e81525e13456"
  },
  {
    "url": "img/android-chrome-192x192.png",
    "revision": "46feb08a707d6e70139970088cfbf15e"
  },
  {
    "url": "img/android-chrome-512x512.png",
    "revision": "3171a88ec7603f31ac1e598076de056d"
  },
  {
    "url": "img/apple-touch-icon.png",
    "revision": "84d9b37071bc9e5977feec6df62063ec"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "77285ac53516fb6b404d7c5610bd2b5a"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "19a6d4a66917dcda25caae8d34c0c8cf"
  },
  {
    "url": "img/mstile-144x144.png",
    "revision": "cc6105c0fccdf70fd6935fb66c78eb7f"
  },
  {
    "url": "img/mstile-150x150.png",
    "revision": "820538a3b382930b9d93872aac7e4620"
  },
  {
    "url": "img/mstile-310x150.png",
    "revision": "08d0342c2269809d855f41185958a902"
  },
  {
    "url": "img/mstile-310x310.png",
    "revision": "c25adad82f954fff78bee2ff56f7ad24"
  },
  {
    "url": "img/mstile-70x70.png",
    "revision": "9f09d77175ccda1f0adef3ddab039b25"
  },
  {
    "url": "index.html",
    "revision": "65e5d1a934ca2a68671a7f9d90bcb3ff"
  },
  {
    "url": "localStorage.gif",
    "revision": "575844f7c491240c02c7b269ed532917"
  },
  {
    "url": "worker.example.js",
    "revision": "f755a971ea3890285ded636071badae5"
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
