if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const f=e=>i(e,n),r={module:{uri:n},exports:t,require:f};s[n]=Promise.all(a.map((e=>r[e]||f(e)))).then((e=>(c(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"7fb3a8c6704ccd77c86b3af30652c338"},{url:"/_next/static/Z9lAfKq6fV-K_hXPsiSe2/_buildManifest.js",revision:"3e2d62a10f4d6bf0b92e14aecf7836f4"},{url:"/_next/static/Z9lAfKq6fV-K_hXPsiSe2/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-92609108658fa081.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/1957.d88863b65eb79f94.js",revision:"d88863b65eb79f94"},{url:"/_next/static/chunks/231-a6eecb82c3be5cc2.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/2391-1011705406369a88.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/2820.8b9139b623f0e9e8.js",revision:"8b9139b623f0e9e8"},{url:"/_next/static/chunks/3086-b759a1ecc8a30f47.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/3215.02278409e2dd6013.js",revision:"02278409e2dd6013"},{url:"/_next/static/chunks/3410.d937e0d57ae5cecc.js",revision:"d937e0d57ae5cecc"},{url:"/_next/static/chunks/3653.d074790813be5e93.js",revision:"d074790813be5e93"},{url:"/_next/static/chunks/3761-9e5cde1f3d1bc536.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/3799.960c9a218b0870f4.js",revision:"960c9a218b0870f4"},{url:"/_next/static/chunks/3965.0090078691b185d5.js",revision:"0090078691b185d5"},{url:"/_next/static/chunks/4077-69cdea7a5bdfcd29.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/4538-7e97cede2efa6d37.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/4674-8261e3f833d46bd8.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/4832-65d48d007ae44aa4.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/4868-450938e158403f3f.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/5072-53b8664d4a266dbd.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/5314.630d42419f47e730.js",revision:"630d42419f47e730"},{url:"/_next/static/chunks/5709.ec14411c755f91bf.js",revision:"ec14411c755f91bf"},{url:"/_next/static/chunks/5861.80ae4bbc29bceece.js",revision:"80ae4bbc29bceece"},{url:"/_next/static/chunks/5906-8931df65906c5aa9.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/6648-2ee478a5865a1fb5.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/7023-2b5baf6f26e55dbf.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/7369.cfc15aeb95020de2.js",revision:"cfc15aeb95020de2"},{url:"/_next/static/chunks/7583-1c146e64384d289f.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/795d4814.d758a4173626a564.js",revision:"d758a4173626a564"},{url:"/_next/static/chunks/8273.fec1415d06684257.js",revision:"fec1415d06684257"},{url:"/_next/static/chunks/8434-7ced50389f7b0cfd.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/8472.e7e121c88fd90855.js",revision:"e7e121c88fd90855"},{url:"/_next/static/chunks/8589-211c0ae1ec9fb740.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/8742.c373a2dacf8537d8.js",revision:"c373a2dacf8537d8"},{url:"/_next/static/chunks/8748.21e249f5848fa484.js",revision:"21e249f5848fa484"},{url:"/_next/static/chunks/8e1d74a4-ba4b0f98560eb130.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/9109-53f4e68d94f86c8f.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/9483.6d0a56c925fbd5bd.js",revision:"6d0a56c925fbd5bd"},{url:"/_next/static/chunks/9553-0b71252fb1abc738.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/9667-30b8c7eca7efb5d2.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/_not-found/page-18490bb9cac6216c.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/book-counseling/page-115cfeb7f9f4987c.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/book-counseling/slot-selection/page-120033f39021f926.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/book/page-e001e18c60ac2a79.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/classes/page-403ead3e477c2a2a.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/courses/page-72b6d7d6deb3847d.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/courses/quant-course/page-87f05510421bbcb7.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/courses/toefl-course/page-8f501c07dd1c361e.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/courses/verbal-course/page-f652bf98bfc757ac.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/forum/page-d3f20fca45c9f1be.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/layout-ddfd2537a2f5ac11.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/not-found-54539e15f676192c.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/page-bba034434412cad8.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/payment/page-19242a5cb3f082ac.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/payment/payment-verify/page-112f7f6574eec348.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/score-reporting/page-6c7612307a9bf3a2.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/student-internship/page-67f323581c4924a7.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/study-partner/page-229c14fe3c056184.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/study-plan/page-5052b517244ecd64.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/tests-showcase/page-bf1e0bd26710bd82.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/tests/%5Bid%5D/layout-aa24f1a1133d071c.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/tests/%5Bid%5D/page-365015edd6639628.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/toefl-voucher/layout-6e42960ba29d56d3.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/toefl-voucher/page-7f57ba8de1e056c4.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/university-shortlisting/page-abbdb5469967c521.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/vocab-ladder/page-bf6b92da9f034e7e.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/app/vocabulary-course/page-f4ca2cf92e325084.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/b714f034.53b2058600acd838.js",revision:"53b2058600acd838"},{url:"/_next/static/chunks/bc9e92e6-02f4c47c141a2fd4.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/ca377847.540cd9d2ef6565d3.js",revision:"540cd9d2ef6565d3"},{url:"/_next/static/chunks/fd9d1056-d595d37ed0e7e3af.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/main-7a53323699f1c9ca.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/main-app-0834388fc600949a.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/pages/_app-f870474a17b7f2fd.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/pages/_error-c66a4e8afc46f17b.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-964d164644c6905a.js",revision:"Z9lAfKq6fV-K_hXPsiSe2"},{url:"/_next/static/css/7337e4b164358a35.css",revision:"7337e4b164358a35"},{url:"/_next/static/css/79e41fe3caae306c.css",revision:"79e41fe3caae306c"},{url:"/_next/static/css/ac1555e2e05d3188.css",revision:"ac1555e2e05d3188"},{url:"/_next/static/css/c3c1fbb4abd379f9.css",revision:"c3c1fbb4abd379f9"},{url:"/_next/static/media/Book_1-1with_Experts.d0fc6f7b.png",revision:"631080732c74695ef12df847cdc9d97c"},{url:"/_next/static/media/jese-leos.5e8d8e4c.png",revision:"f22602a88ae7c19a46fbf70d7a3e3477"},{url:"/_next/static/media/murli.deae5d95.avif",revision:"fff8ae747e1bf7b644ac7468c13073b0"},{url:"/_next/static/media/profile-picture-2.7e3f5818.jpg",revision:"95cc79ae1d84c6a701c1408df4821706"},{url:"/assets/Book_1-1with_Experts.png",revision:"631080732c74695ef12df847cdc9d97c"},{url:"/assets/Man-giving-speech.png",revision:"de9532f2024e1f4dc7640779ea3757c6"},{url:"/assets/T1C1.mp4",revision:"e259d9d5d2327e5702eedc1427330080"},{url:"/assets/T1C1_Listening.webp",revision:"51781c02f31e34c0e7f3a6c1c987e971"},{url:"/assets/T1C2.mp4",revision:"b537c71815d0d3f92af5541cc5cd3c67"},{url:"/assets/T1C2_Listening.jpg",revision:"4056f2d427c35ca594c41826f73e5d6d"},{url:"/assets/T1C3.mp3",revision:"b75cbbb5dd08a069eaa12c01a324ccf3"},{url:"/assets/T1C3_Listening.avif",revision:"1760c78f0e6f3448da307b944b0a64d4"},{url:"/assets/T1C4.mp3",revision:"220e644541199a5612d55ec115e567fb"},{url:"/assets/T1C4_Listening.jpg",revision:"8e3477e7154728f54ff706dd5f97e91a"},{url:"/assets/T1C5.mp3",revision:"fb66a982c6cca6c437b2385b0870907b"},{url:"/assets/T1C5_Listening.jpg",revision:"c47eeb37785ae73c8f2ff434761f1415"},{url:"/assets/T1S1.mp3",revision:"5c230324d656211e7d6814adb8505a1f"},{url:"/assets/T1S2.mp3",revision:"49fd9fd0bc2e7d2db08c0d7b39522ddb"},{url:"/assets/T1S3.mp3",revision:"56db03103c7e53cc7fc9ae95c817eff5"},{url:"/assets/T1W1.mp3",revision:"199548246ab4d05acdc4878f6b3f43f0"},{url:"/assets/T1W1_Writing.webp",revision:"bda0ab087aa1b8a1e1d6e03fc3ebf07c"},{url:"/assets/T2C1_Listening.jpg",revision:"4815437200862e33cfaea6d769f87538"},{url:"/assets/T2C2_Listening.webp",revision:"caf8d8f209ba65ced1eedeb777b098f1"},{url:"/assets/T2C3_Listening.jpg",revision:"c4877594c9265bb0745efab86c1beada"},{url:"/assets/Titik-titik.svg",revision:"195e90d1e266d8d1e55501f84680e61c"},{url:"/assets/Two-Students_talking-in-coridor.png",revision:"81e9d17a22d03c765b0c0662d824604a"},{url:"/assets/arrow-line.svg",revision:"a8ca9e345381e447f76d539072bafd2e"},{url:"/assets/background-books.jpg",revision:"6fcc5142d575a410a2999bb31807215f"},{url:"/assets/background.svg",revision:"ace95fb7f5866f1fe8b3105c840d9a2d"},{url:"/assets/bonnie-green.png",revision:"8a5d325d659dd18ecca4c547397b39a8"},{url:"/assets/clock.svg",revision:"7bf2173ff339ba9b8922f6db4d0eb6ab"},{url:"/assets/course.svg",revision:"c88b7ef03bd3d38f45248e4e311d18f9"},{url:"/assets/discount.svg",revision:"1f85107a7863e6eac69be41b86df038a"},{url:"/assets/ellipse 1.svg",revision:"ef64147b6e5f0714bd27eed20763bcb2"},{url:"/assets/ellipse 2.svg",revision:"75486d588d18f4df3274c19ea8288c6e"},{url:"/assets/ets-logo.png",revision:"51b3560e9eecad051e723895d9c29406"},{url:"/assets/globe.png",revision:"e6b986d3c2c2c81ef2cdb9ed2d87e73f"},{url:"/assets/goglobal.webp",revision:"60335fc11f7f6412fa6429aaff90fbc7"},{url:"/assets/goglobal1.webp",revision:"f30c53fc71b288a174dfcc74f296a282"},{url:"/assets/guest-account-logo.jpg",revision:"55da7af1fe0e0dc0665e68860319c6be"},{url:"/assets/hero.png",revision:"3a49e55f7f9aa3b5766a5f7d10b0bcc6"},{url:"/assets/hero.webp",revision:"55b38bf147cd6fe3b6f8b83188f6d8bd"},{url:"/assets/huge.mp4",revision:"67cbfa4f0f684e143be549d04223eab6"},{url:"/assets/jese-leos.png",revision:"f22602a88ae7c19a46fbf70d7a3e3477"},{url:"/assets/lib-bg.jpg",revision:"1b4bba087924acc179eb10c741b541a7"},{url:"/assets/mja-getting-award.mp4",revision:"0c9566ee8c9007d4a646d3a3c2070afd"},{url:"/assets/murli.avif",revision:"fff8ae747e1bf7b644ac7468c13073b0"},{url:"/assets/profile-picture-2.jpg",revision:"95cc79ae1d84c6a701c1408df4821706"},{url:"/assets/profile.svg",revision:"d1afd056b8d5e2e4d7789f49011dd47f"},{url:"/assets/score-reporting-feature-1.png",revision:"2e3ddbf352965cf8e5002b14094c6e41"},{url:"/assets/score-reporting-feature-2.png",revision:"385db6e9f650a586bc5726abe6cf3b8d"},{url:"/assets/score-reporting-hero.png",revision:"4457ba61fcc2363b775edc30cd4c25e5"},{url:"/assets/star.png",revision:"80876738fbd854f3e9584a8518558909"},{url:"/assets/starttestbg.webp",revision:"b9572dd7b6e58c0438e08a025c88b759"},{url:"/assets/study.svg",revision:"46492f190ad526126603b41b886fb82c"},{url:"/assets/toefl-buy-voucher-updated.png",revision:"a0ccf5d6d995ef8896c688b7d6e2067f"},{url:"/assets/toefl-buy-voucher.png",revision:"6bb5807decaac74fc52fcb566860d9f8"},{url:"/assets/toefl-ets-overview.webp",revision:"6580a897ae9b1a9067f3805a002a0bf2"},{url:"/assets/toefl-ets.webp",revision:"270557f7fa9049e8e0c2057f3f2ec0f1"},{url:"/assets/toefl-exam.webp",revision:"6e3d837450c85320dd04be0b062b75fa"},{url:"/assets/toefl-fees.webp",revision:"24325bd5447fa65db75b43d7750493c6"},{url:"/assets/toefl-full-form.webp",revision:"11c3fbe5de8d742ac251ecddf2b6e77f"},{url:"/assets/toefl-guide.webp",revision:"59075b486337e980e2c4bc10b9dabffb"},{url:"/assets/toefl-vs-ielts.webp",revision:"ad115d92e8575f4b587169ce2ec8f9cf"},{url:"/assets/two-students-talking.jpg",revision:"a49ec965120b624dd9e4ebe6067842bc"},{url:"/assets/uni-short-img.webp",revision:"881991ad0413ef85934866cae1802b8b"},{url:"/assets/verbal-course-banner.png",revision:"95f846c991a1b0fa7eeaa1810b7c3516"},{url:"/assets/video-confrencing-bg.jpg",revision:"f3fb1e64cdb489a1e0595dc0edd45207"},{url:"/assets/whatsapp.png",revision:"097b297900714fecd391f9834be42f97"},{url:"/assets/whatsapp.svg",revision:"88856d45da01f7024ea05a68b57b617b"},{url:"/assets/woman-young-free-clipart-hd.png",revision:"08f09e7b5247f838f843ac5edf4c74d5"},{url:"/assets/women-lecture2.png",revision:"19614e721c66f4451b6b60feeb0f9726"},{url:"/assets/youtube-get-code.png",revision:"d8493d47502ec21d2594f0cab9090904"},{url:"/assets/youtube-icon.png",revision:"6fdd9b690fb7cb5fcfa7a99d36cad735"},{url:"/assets/youtube-icon2.png",revision:"cd7c2c59243202d3edf20eed58793e83"},{url:"/favicon/apple-touch-icon.png",revision:"976444858f6c9a2abad8479a205a87f4"},{url:"/favicon/favicon-96x96.png",revision:"c001af062230e02124cd2b5cba44b5c8"},{url:"/favicon/web-app-manifest-192x192.png",revision:"47d14623231a5aaf48687402a8fc88b3"},{url:"/favicon/web-app-manifest-512x512.png",revision:"f0501914d0a52517669f16630ee565d7"},{url:"/manifest.json",revision:"b6f6fbf52fbafa4ac0aa4df79daa9d75"},{url:"/tests/Librarian-student-talking.png",revision:"acfcd4dd4d1e1240f8ce1f3c84826490"},{url:"/tests/cop-student-talking.png",revision:"62bf5cf5a9b70984a1a86a082742e565"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
