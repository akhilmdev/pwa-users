(this["webpackJsonppwa-users"]=this["webpackJsonppwa-users"]||[]).push([[0],{11:function(e,n,t){},12:function(e,n,t){},13:function(e,n,t){"use strict";t.r(n);var i=t(0),a=t(1),o=t.n(a),s=t(3),c=t.n(s),r=(t(11),t(5)),l=t(4);t(12);var u=function(e){return Object(i.jsxs)("div",{className:"user-card",children:[Object(i.jsx)("div",{className:"user-card-avatar",children:Object(i.jsx)("img",{src:null===e||void 0===e?void 0:e.avatar,alt:"user-avatar",className:"user-avatar"})}),Object(i.jsx)("div",{className:"user-card-name",children:e.first_name+" "+e.last_name}),Object(i.jsx)("div",{className:"user-card-email",children:e.email})]})};var d=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1];return Object(a.useEffect)((function(){fetch("https://6021303e46f1e40017804036.mockapi.io/users").then((function(e){return e.json()})).then((function(e){o(e)}))}),[]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("div",{className:"users",children:null===t||void 0===t?void 0:t.map((function(e){return Object(i.jsx)("div",{className:"user-card-wrapper",children:Object(i.jsx)(u,Object(r.a)({},e))},e.id)}))}),Object(i.jsx)("div",{className:"updateContainer",id:"notification",children:Object(i.jsxs)("div",{className:"updateText",children:["A new version of users is available",Object(i.jsx)("button",{className:"updateButton",children:"REFRESH"})]})})]})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,o=n.getLCP,s=n.getTTFB;t(e),i(e),a(e),o(e),s(e)}))},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){if("installed"===t.state)if(navigator.serviceWorker.controller){console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),console.log("this is new");var i=document.getElementById("notification ");i&&(i.className=i.className+" show"),n&&n.onUpdate&&n.onUpdate(e)}else console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root")),f(),function(e){if("serviceWorker"in navigator){if(new URL("/pwa-users",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/pwa-users","/service-worker.js");v?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):h(n,e)}))}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.aa5a627c.chunk.js.map