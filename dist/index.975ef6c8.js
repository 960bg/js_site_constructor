// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"icZzK":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var _modelJs = require("./model.js");
var _siteJs = require("./classes/site.js");
//импорт стилей в js для взаимодействия с js
var _styleCss = require("./style/style.css");
var _sidebarJs = require("./classes/sidebar.js");
const site = new (0, _siteJs.Site)("#site");
site.render((0, _modelJs.model));
const sidebar = new (0, _sidebarJs.Sidebar)("#panel"); // --start СТАРАЯ РЕАЛИЗАЦИЯ КЛАССЫ - без использования абстракции класса Site 
 // const $site = document.querySelector('#site');
 // import { title, text, columns, image } from './templates.js';
 // import { templates } from './templates.js';
 // import { TitleBlock, TextBlock, ColumnsBlock, ImageBlock } from './classes/blocks.js';
 // для каждого объекта вызываем его метод toHtml() для добавления полей объекта 
 // на web-страницу
 // model.forEach(block => {
 //   $site.insertAdjacentHTML('beforeend', block.toHtml());
 // });
 // --end СТАРАЯ РЕАЛИЗАЦИЯ КЛАССЫ - без использования абстракции класса Site 
 // СТАРАЯ РЕАЛИЗАЦИЯ БЕЗ КЛАССОВ - через объекты
 //** */   здесь для каждого block из model импортированного из model.js
 //   выполняем функцию из файла templates по переданному
 //   параметру - block.type - это ф - я которая вызовится и в качестве параметра 
 //   уже для этой функции подставляем значение которое хранится в массиве объектов model
 //   т.е.в файле model определена структура массив объектов:
 //   массив_объектов = [
 //     {
 //       тип_обработки: имя_функции_обработки,
 //       данные_для_обработки: параметр_для_этойфункции_обработки,
 //     },
 //     {
 //       тип_обработки: имя_функции_обработки,
 //       данные_для_обработки: параметр_для_этойфункции_обработки,
 //     },
 //     {
 //       тип_обработки: имя_функции_обработки,
 //       данные_для_обработки: параметр_для_этойфункции_обработки,
 //     },
 //     а в файле templates - определены функции которые мы вызываем 
 //     при обращении к массиву_объектов из model.Это всЁ позволяет убрать
 //     конструкцию switch...и записать код более коротко,
 //   хотя более сложно для понимания
 // поэтому запись - templates[block.type]({ value: block.data })
 // означает взять соотв - ю функцию из templates по block.type из model и
 // передать ей параметр объект { value: block.data } из templates по block.data из model,
 //   в функции мы писали именно объект в качестве параметра
 // и поле объекта по которому обращаемся там указали value 
 // let html = templates[block.type]({ value: block.data });
 // model.forEach(block => {
 //   // проверка что ф-я существует
 //   if (templates[block.type]) {
 //     $site.insertAdjacentHTML('beforeend', templates[block.type](block));
 //   }
 //   console.log(templates[block.type]);
 //   // switch (block.type) {
 //   //   case 'title':
 //   //     html = title(block);
 //   //     break;
 //   //   case 'text':
 //   //     html = text(block);
 //   //     break;
 //   //   case 'columns':
 //   //     html = columns(block);
 //   //     break;
 //   //   case 'image':
 //   //     html = image(block);
 //   //     break;
 //   //   default:
 //   //     break;
 //   // }
 // });

},{"./model.js":"dEDha","./style/style.css":"44cui","./classes/site.js":"24VTm","./classes/sidebar.js":"5YCBk"}],"dEDha":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "model", ()=>model);
var _homerJpg = require("./assets/homer.jpg");
var _homerJpgDefault = parcelHelpers.interopDefault(_homerJpg);
var _blocksJs = require("./classes/blocks.js");
const textCreateBlockHtml = "HTML \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u0442 JS, \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0431\u043B\u043E\u043A\u043E\u0432 \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u044B \u0432 \u0444\u0430\u0439\u043B\u0435 model.js.";
const model = [
    new (0, _blocksJs.Blocks).TitleBlock("\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0441\u0430\u0439\u0442\u043E\u0432 \u043D\u0430 JS", {
        tag: "h2",
        styles: {
            background: "linear-gradient(to right, #ff0099, #493240)",
            color: "#fff",
            padding: "0.7em"
        }
    }),
    new (0, _blocksJs.Blocks).TextBlock(textCreateBlockHtml, {
        tag: "p",
        styles: {
            background: "linear-gradient(to left, #f2994a, #f2c94c)",
            color: "#fff",
            padding: "0.5em",
            "font-weight": "bold"
        }
    }),
    new (0, _blocksJs.Blocks).ColumnsBlock([
        "\u0444\u0430\u0439\u043B templates.js - \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043E\u0431\u0435\u0440\u0442\u043A\u0438 \u0432 HTML \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0438\u0437 \u0444\u0430\u0439\u043B\u0430 model.js",
        "\u0444\u0430\u0439\u043B utils.js - \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u043C\u044B\u0435 \u0438\u0437 templates.js",
        "\u0444\u0430\u0439\u043B blocks.js - \u043A\u043B\u0430\u0441\u0441\u044B \u0434\u043B\u044F \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0431\u043B\u043E\u043A\u043E\u0432 \u0438\u0437 model.js"
    ], {
        tag: "p",
        styles: {
            background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
            color: "#fff",
            padding: "0.5em",
            "font-weight": "bold"
        }
    }),
    new (0, _blocksJs.Blocks).ImageBlock((0, _homerJpgDefault.default), {
        tag: "img",
        alt: "\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u0413\u043E\u043C\u0435\u0440 \u0421\u0438\u043C\u043F\u0441\u043E\u043D",
        styles: {
            width: "150px",
            height: "auto",
            border: "solid 5px",
            background: "linear-gradient(to top, #00e5ff, #4761bf)",
            display: "flex",
            "justify-content": "center",
            color: "#fff",
            padding: "0.5em"
        }
    }),
    new (0, _blocksJs.Blocks).ColumnsBlock([
        "\u0421\u0442\u0438\u043B\u0438: \u0434\u043B\u044F \u0441\u0435\u0442\u043A\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F bootstrap.",
        "\u0421\u0442\u0438\u043B\u0438: \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u0438\u043B\u0438 \u043F\u0440\u043E\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0432 \u0444\u0430\u0439\u043B\u0435 model.js \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0431\u043B\u043E\u043A\u0430 \u0432 \u0441\u0435\u043A\u0446\u0438\u0438 styles",
        "HTML \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u0442 JS"
    ], {
        tag: "p",
        styles: {
            background: "linear-gradient(to right, #00e5ff, #4761bf)",
            color: "#fff",
            padding: "0.5em"
        }
    })
]; // СТАРАЯ МОДЕЛЬ БЕЗ ИСПОЛЬЗОВАНИЯ КЛАССОВ
 // export const model = [
 // {
 //   type: 'f_title',
 //   value: 'Конструктор сайтов на JS',
 //   options: {
 //     tag: 'h2',
 //     styles: {
 //       background: 'linear-gradient(to right, #ff0099, #493240)',
 //       color: '#fff',
 //       padding: '0.5em',
 //     },
 //   }
 // },
 // {
 //   type: 'f_columns',
 //   value: ['Конструктор сайтов на JS',],
 //   options: {
 //     tag: 'h2',
 //     styles: {
 //       background: 'linear-gradient(to right, #ff0099, #493240)',
 //       color: '#fff',
 //       padding: '0.5em',
 //     },
 //   },
 // },
 // {
 //   type: 'f_text',
 //   value: 'text text text js!',
 // },
 // {
 //   type: 'f_columns',
 //   value: ['HTML страницу формирует JS',
 //     textCreateBlockHtml,],
 //   options: {
 //     tag: 'p',
 //     styles: {
 //       background: 'linear-gradient(to right, #ff0099, #493240)',
 //       color: '#fff',
 //       padding: '0.5em',
 //       'font-weight': '600',
 //     },
 //   }
 // },
 // {
 //   type: 'f_columns',
 //   value: [
 //     'Стили: для сетки используется bootstrap.',
 //     'Стили: остальные стили прописываются в файле model.js для каждого блока в секции styles',
 //     'three',
 //   ],
 //   options: {
 //     tag: 'p',
 //     styles: {
 //       background: 'linear-gradient(to right, #00e5ff, #4761bf)',
 //       color: '#fff',
 //       padding: '0.5em',
 //     },
 //   }
 // },
 // {
 //   type: 'f_image',
 //   value: imagePath,
 //   options: {
 //     tag: 'p',
 //     alt: 'Картинка Гомер Симпсон',
 //     styles: {
 //       width: '150px',
 //       border: 'solid 5px',
 //       background: 'linear-gradient(to top, #00e5ff, #4761bf)',
 //       color: '#fff',
 //       padding: '0.5em',
 //     },
 //   },
 //   // './src/assets/homer.jfif',
 // },];

},{"./assets/homer.jpg":"6U03o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./classes/blocks.js":"gMfMj"}],"6U03o":[function(require,module,exports) {
module.exports = require("d8a2db5fcded5f94").getBundleURL("bLxZJ") + "homer.07109c75.jpg" + "?" + Date.now();

},{"d8a2db5fcded5f94":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gMfMj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Blocks", ()=>Blocks);
var _utilsJs = require("../utils.js");
class Block {
    constructor(value, options){
        this.value = value;
        this.options = options;
    }
    toHtml() {
        throw new Error("\u041C\u0435\u0442\u043E\u0434 toHtml \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D");
    }
}
class TitleBlock extends Block {
    constructor(value, options){
        super(value, options);
    }
    toHtml() {
        const { tag = "h1", styles } = this.options;
        return (0, _utilsJs.row)((0, _utilsJs.col)((0, _utilsJs.inHtmlCode)(this.value, styles, tag)));
    }
}
class TextBlock extends Block {
    constructor(value, options){
        super(value, options);
    }
    toHtml() {
        const { tag = "p", styles } = this.options;
        return (0, _utilsJs.row)((0, _utilsJs.col)((0, _utilsJs.inHtmlCode)(this.value, styles, tag)));
    }
}
/*  Блок работает с массивом данных, 
если в value= строка то разделитель для массива = "," */ class ColumnsBlock extends Block {
    constructor(value, options){
        super(value, options);
    }
    toHtml() {
        const { tag = "h1", styles } = this.options;
        // если пришел не массив с колонками а строка 
        // преобразовать строку в массив
        const valueForColumns = typeof this.value === "string" ? this.value.split(",") : this.value;
        // если пришло изображение тогда 
        // создаем объект для картинки
        // и передаем в ф-ю img для подготовки html кода для картинки
        function StrOrImgToHtml(blockValue) {
            // передали текст а не ссылку на изображение
            if (blockValue.search("http") === -1) // если строка - вернуть ее же
            return blockValue;
            // если изображение
            const image = (0, _utilsJs.stringToImg)(blockValue, styles);
            return (0, _utilsJs.img)(image);
        }
        const codeHtml = (blockValue)=>(0, _utilsJs.inHtmlCode)(StrOrImgToHtml(blockValue), styles, tag);
        const html = valueForColumns.map((blockValue)=>(0, _utilsJs.col)(codeHtml(blockValue))).join("");
        return (0, _utilsJs.row)(html);
    }
}
class ImageBlock extends Block {
    constructor(value, options){
        super(value, options);
    }
    toHtml() {
        return (0, _utilsJs.row)((0, _utilsJs.img)(this));
    }
}
const Blocks = {
    ImageBlock,
    ColumnsBlock,
    TextBlock,
    TitleBlock
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../utils.js":"en4he"}],"en4he":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "row", ()=>row);
parcelHelpers.export(exports, "col", ()=>col);
parcelHelpers.export(exports, "img", ()=>img);
parcelHelpers.export(exports, "inHtmlCode", ()=>inHtmlCode);
parcelHelpers.export(exports, "css", ()=>css);
parcelHelpers.export(exports, "createForm", ()=>createForm);
parcelHelpers.export(exports, "stringToImg", ()=>stringToImg);
function row(content) {
    return `<div class="row"> ${content} </div>`;
}
function col(content) {
    return `<div class="col-sm"> ${content} </div>`;
}
function img(content) {
    if (content.value) return `<img src="${content.value}" style="${css(content.options.styles)}" alt="${content.options.alt}"/>`;
}
function inHtmlCode(value, styles, tag) {
    const htmlCode = `
    <${tag} style="${css(styles)}">
    ${value}
    </${tag}>
    `;
    return htmlCode;
}
function css(styles = {}) {
    // если пришла строка - вернем ее же,
    if (typeof styles === "string") return styles;
    // если пришел объект - преобразование к строке
    const toString = (key)=>`${key}: ${styles[key]};`;
    return Object.keys(styles).map(toString).join("");
}
function createForm(type) {
    return `
  <form name="${type}">
  <h5>${type}</h5>
  <div class="form-group">
    <input class="form-control form-control-sm" type="text" name="value" placeholder="value">
  </div>
  <div class="form-group">
    <input class="form-control form-control-sm" type="text" name="styles" placeholder="styles">
  </div>
  <button class="btn btn-primary btn-sm" type="submit" >\u{414}\u{43E}\u{431}\u{430}\u{432}\u{438}\u{442}\u{44C}</button>
</form>
<hr>
`;
}
function stringToImg(value, styles, tag = "img", alt = "\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430") {
    if (typeof value !== "string") console.log("stringToImg(): \u0412 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0435 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u0430 \u0441\u0442\u0440\u043E\u043A\u0430");
    return {
        value,
        options: {
            tag,
            alt,
            styles
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"44cui":[function() {},{}],"24VTm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Site", ()=>Site);
class Site {
    constructor(selector){
        this.$element = document.querySelector(selector);
    }
    render(model) {
        model.forEach((block)=>{
            this.$element.insertAdjacentHTML("beforeend", block.toHtml());
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5YCBk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Sidebar", ()=>Sidebar);
var _utils = require("../utils");
var _blocksJs = require("./blocks.js");
var _siteJs = require("./site.js");
class Sidebar {
    constructor(selector){
        this.$element = document.querySelector(selector);
        this.init();
    }
    init() {
        this.$element.insertAdjacentHTML("afterbegin", this.template);
        this.$element.addEventListener("submit", this.add);
    }
    get template() {
        return [
            (0, _utils.createForm)("TextBlock"),
            (0, _utils.createForm)("TitleBlock"),
            (0, _utils.createForm)("ColumnsBlock"),
            (0, _utils.createForm)("ImageBlock")
        ].join("");
    }
    add(event) {
        event.preventDefault();
        const type = event.target.name;
        const value = event.target.value.value;
        const styles = event.target.styles.value;
        // создать блок в html
        const newBlock = new (0, _blocksJs.Blocks)[type](value, {
            styles
        });
        const site = new (0, _siteJs.Site)("#site");
        site.render([
            newBlock
        ]);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../utils":"en4he","./blocks.js":"gMfMj","./site.js":"24VTm"}]},["icZzK","8lqZg"], "8lqZg", "parcelRequire5ad8")

//# sourceMappingURL=index.975ef6c8.js.map
