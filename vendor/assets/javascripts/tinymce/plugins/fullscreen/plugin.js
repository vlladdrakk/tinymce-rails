/**
 * TinyMCE version 7.0.0 (2024-03-20)
 */
!function(){"use strict";const e=e=>{let t=e;return{get:()=>t,set:e=>{t=e}}};var t=tinymce.util.Tools.resolve("tinymce.PluginManager");const n=e=>t=>(e=>{const t=typeof e;return null===e?"null":"object"===t&&Array.isArray(e)?"array":"object"===t&&(n=r=e,(o=String).prototype.isPrototypeOf(n)||(null===(s=r.constructor)||void 0===s?void 0:s.name)===o.name)?"string":t;var n,r,o,s})(t)===e,r=e=>t=>typeof t===e,o=e=>t=>e===t,s=n("string"),i=n("object"),l=n("array"),a=o(null),c=r("boolean"),u=o(void 0),d=e=>!(e=>null==e)(e),m=r("function"),h=r("number"),g=()=>{},p=e=>()=>e;function f(e,...t){return(...n)=>{const r=t.concat(n);return e.apply(null,r)}}const v=p(!1),w=p(!0);class b{constructor(e,t){this.tag=e,this.value=t}static some(e){return new b(!0,e)}static none(){return b.singletonNone}fold(e,t){return this.tag?t(this.value):e()}isSome(){return this.tag}isNone(){return!this.tag}map(e){return this.tag?b.some(e(this.value)):b.none()}bind(e){return this.tag?e(this.value):b.none()}exists(e){return this.tag&&e(this.value)}forall(e){return!this.tag||e(this.value)}filter(e){return!this.tag||e(this.value)?this:b.none()}getOr(e){return this.tag?this.value:e}or(e){return this.tag?this:e}getOrThunk(e){return this.tag?this.value:e()}orThunk(e){return this.tag?this:e()}getOrDie(e){if(this.tag)return this.value;throw new Error(null!=e?e:"Called getOrDie on None")}static from(e){return d(e)?b.some(e):b.none()}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(e){this.tag&&e(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}b.singletonNone=new b(!1);const y=Array.prototype.push,S=(e,t)=>{const n=e.length,r=new Array(n);for(let o=0;o<n;o++){const n=e[o];r[o]=t(n,o)}return r},x=(e,t)=>{for(let n=0,r=e.length;n<r;n++)t(e[n],n)},E=(e,t)=>{const n=[];for(let r=0,o=e.length;r<o;r++){const o=e[r];t(o,r)&&n.push(o)}return n},F=(e,t)=>((e,t,n)=>{for(let r=0,o=e.length;r<o;r++){const o=e[r];if(t(o,r))return b.some(o);if(n(o,r))break}return b.none()})(e,t,v),O=t=>{const n=e(b.none()),r=()=>n.get().each(t);return{clear:()=>{r(),n.set(b.none())},isSet:()=>n.get().isSome(),get:()=>n.get(),set:e=>{r(),n.set(b.some(e))}}},k=()=>O((e=>e.unbind())),T=Object.keys,C="undefined"!=typeof window?window:Function("return this;")(),A=(e,t)=>((e,t)=>{let n=null!=t?t:C;for(let t=0;t<e.length&&null!=n;++t)n=n[e[t]];return n})(e.split("."),t),R=Object.getPrototypeOf,L=e=>{const t=A("ownerDocument.defaultView",e);return i(e)&&((e=>((e,t)=>{const n=((e,t)=>A(e,t))(e,t);if(null==n)throw new Error(e+" not available on this browser");return n})("HTMLElement",e))(t).prototype.isPrototypeOf(e)||/^HTML\w*Element$/.test(R(e).constructor.name))},M=e=>t=>(e=>e.dom.nodeType)(t)===e,P=M(1),D=M(3),N=M(9),H=M(11),W=(e,t)=>{const n=e.dom.getAttribute(t);return null===n?void 0:n},q=(e,t)=>{e.dom.removeAttribute(t)},I=(e,t,n=0,r)=>{const o=e.indexOf(t,n);return-1!==o&&(!!u(r)||o+t.length<=r)},V=e=>void 0!==e.style&&m(e.style.getPropertyValue),j=e=>{if(null==e)throw new Error("Node cannot be null or undefined");return{dom:e}},B=j,_=(e,t)=>{const n=e.dom;if(1!==n.nodeType)return!1;{const e=n;if(void 0!==e.matches)return e.matches(t);if(void 0!==e.msMatchesSelector)return e.msMatchesSelector(t);if(void 0!==e.webkitMatchesSelector)return e.webkitMatchesSelector(t);if(void 0!==e.mozMatchesSelector)return e.mozMatchesSelector(t);throw new Error("Browser lacks native selectors")}},z=e=>B(e.dom.ownerDocument),$=e=>S(e.dom.childNodes,B),U=m(Element.prototype.attachShadow)&&m(Node.prototype.getRootNode),K=p(U),X=U?e=>B(e.dom.getRootNode()):e=>N(e)?e:z(e),Y=e=>{const t=X(e);return H(n=t)&&d(n.dom.host)?b.some(t):b.none();var n},G=e=>B(e.dom.host),J=e=>{const t=D(e)?e.dom.parentNode:e.dom;if(null==t||null===t.ownerDocument)return!1;const n=t.ownerDocument;return Y(B(t)).fold((()=>n.body.contains(t)),(r=J,o=G,e=>r(o(e))));var r,o},Q=(e,t,n)=>{if(!s(n))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n);V(e)&&e.style.setProperty(t,n)},Z=(e,t,n)=>{const r=e.dom;Q(r,t,n)},ee=(e,t)=>{const n=e.dom;((e,t)=>{const n=T(e);for(let r=0,o=n.length;r<o;r++){const o=n[r];t(e[o],o)}})(t,((e,t)=>{Q(n,t,e)}))},te=(e,t)=>{const n=e.dom,r=window.getComputedStyle(n).getPropertyValue(t);return""!==r||J(e)?r:ne(n,t)},ne=(e,t)=>V(e)?e.style.getPropertyValue(t):"",re=e=>{const t=B((e=>{if(K()&&d(e.target)){const t=B(e.target);if(P(t)&&d(t.dom.shadowRoot)&&e.composed&&e.composedPath){const t=e.composedPath();if(t)return((e,t)=>0<e.length?b.some(e[0]):b.none())(t)}}return b.from(e.target)})(e).getOr(e.target)),n=()=>e.stopPropagation(),r=()=>e.preventDefault(),o=(s=r,i=n,(...e)=>s(i.apply(null,e)));var s,i;return((e,t,n,r,o,s,i)=>({target:e,x:t,y:n,stop:r,prevent:o,kill:s,raw:i}))(t,e.clientX,e.clientY,n,r,o,e)},oe=(e,t,n,r)=>{e.dom.removeEventListener(t,n,r)},se=w,ie=(e,t,n)=>((e,t,n,r)=>((e,t,n,r,o)=>{const s=((e,t)=>n=>{e(n)&&t(re(n))})(n,r);return e.dom.addEventListener(t,s,o),{unbind:f(oe,e,t,s,o)}})(e,t,n,r,!1))(e,t,se,n),le=()=>ae(0,0),ae=(e,t)=>({major:e,minor:t}),ce={nu:ae,detect:(e,t)=>{const n=String(t).toLowerCase();return 0===e.length?le():((e,t)=>{const n=((e,t)=>{for(let n=0;n<e.length;n++){const r=e[n];if(r.test(t))return r}})(e,t);if(!n)return{major:0,minor:0};const r=e=>Number(t.replace(n,"$"+e));return ae(r(1),r(2))})(e,n)},unknown:le},ue=(e,t)=>{const n=String(t).toLowerCase();return F(e,(e=>e.search(n)))},de=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,me=e=>t=>I(t,e),he=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:e=>I(e,"edge/")&&I(e,"chrome")&&I(e,"safari")&&I(e,"applewebkit")},{name:"Chromium",brand:"Chromium",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,de],search:e=>I(e,"chrome")&&!I(e,"chromeframe")},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:e=>I(e,"msie")||I(e,"trident")},{name:"Opera",versionRegexes:[de,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:me("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:me("firefox")},{name:"Safari",versionRegexes:[de,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:e=>(I(e,"safari")||I(e,"mobile/"))&&I(e,"applewebkit")}],ge=[{name:"Windows",search:me("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:e=>I(e,"iphone")||I(e,"ipad"),versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:me("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"macOS",search:me("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:me("linux"),versionRegexes:[]},{name:"Solaris",search:me("sunos"),versionRegexes:[]},{name:"FreeBSD",search:me("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:me("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],pe={browsers:p(he),oses:p(ge)},fe="Edge",ve="Chromium",we="Opera",be="Firefox",ye="Safari",Se=e=>{const t=e.current,n=e.version,r=e=>()=>t===e;return{current:t,version:n,isEdge:r(fe),isChromium:r(ve),isIE:r("IE"),isOpera:r(we),isFirefox:r(be),isSafari:r(ye)}},xe=()=>Se({current:void 0,version:ce.unknown()}),Ee=Se,Fe=(p(fe),p(ve),p("IE"),p(we),p(be),p(ye),"Windows"),Oe="Android",ke="Linux",Te="macOS",Ce="Solaris",Ae="FreeBSD",Re="ChromeOS",Le=e=>{const t=e.current,n=e.version,r=e=>()=>t===e;return{current:t,version:n,isWindows:r(Fe),isiOS:r("iOS"),isAndroid:r(Oe),isMacOS:r(Te),isLinux:r(ke),isSolaris:r(Ce),isFreeBSD:r(Ae),isChromeOS:r(Re)}},Me=()=>Le({current:void 0,version:ce.unknown()}),Pe=Le,De=(p(Fe),p("iOS"),p(Oe),p(ke),p(Te),p(Ce),p(Ae),p(Re),(e,t,n)=>{const r=pe.browsers(),o=pe.oses(),s=t.bind((e=>((e,t)=>((e,t)=>{for(let n=0;n<e.length;n++){const r=t(e[n]);if(r.isSome())return r}return b.none()})(t.brands,(t=>{const n=t.brand.toLowerCase();return F(e,(e=>{var t;return n===(null===(t=e.brand)||void 0===t?void 0:t.toLowerCase())})).map((e=>({current:e.name,version:ce.nu(parseInt(t.version,10),0)})))})))(r,e))).orThunk((()=>((e,t)=>ue(e,t).map((e=>{const n=ce.detect(e.versionRegexes,t);return{current:e.name,version:n}})))(r,e))).fold(xe,Ee),i=((e,t)=>ue(e,t).map((e=>{const n=ce.detect(e.versionRegexes,t);return{current:e.name,version:n}})))(o,e).fold(Me,Pe),l=((e,t,n,r)=>{const o=e.isiOS()&&!0===/ipad/i.test(n),s=e.isiOS()&&!o,i=e.isiOS()||e.isAndroid(),l=i||r("(pointer:coarse)"),a=o||!s&&i&&r("(min-device-width:768px)"),c=s||i&&!a,u=t.isSafari()&&e.isiOS()&&!1===/safari/i.test(n),d=!c&&!a&&!u;return{isiPad:p(o),isiPhone:p(s),isTablet:p(a),isPhone:p(c),isTouch:p(l),isAndroid:e.isAndroid,isiOS:e.isiOS,isWebView:p(u),isDesktop:p(d)}})(i,s,e,n);return{browser:s,os:i,deviceType:l}}),Ne=e=>window.matchMedia(e).matches;let He=(e=>{let t,n=!1;return(...r)=>(n||(n=!0,t=e.apply(null,r)),t)})((()=>De(navigator.userAgent,b.from(navigator.userAgentData),Ne)));const We=(e,t)=>({left:e,top:t,translate:(n,r)=>We(e+n,t+r)}),qe=We,Ie=e=>{const t=void 0===e?window:e;return He().browser.isFirefox()?b.none():b.from(t.visualViewport)},Ve=(e,t,n,r)=>({x:e,y:t,width:n,height:r,right:e+n,bottom:t+r}),je=e=>{const t=void 0===e?window:e,n=t.document,r=(e=>{const t=void 0!==e?e.dom:document,n=t.body.scrollLeft||t.documentElement.scrollLeft,r=t.body.scrollTop||t.documentElement.scrollTop;return qe(n,r)})(B(n));return Ie(t).fold((()=>{const e=t.document.documentElement,n=e.clientWidth,o=e.clientHeight;return Ve(r.left,r.top,n,o)}),(e=>Ve(Math.max(e.pageLeft,r.left),Math.max(e.pageTop,r.top),e.width,e.height)))},Be=(e,t,n)=>Ie(n).map((n=>{const r=e=>t(re(e));return n.addEventListener(e,r),{unbind:()=>n.removeEventListener(e,r)}})).getOrThunk((()=>({unbind:g})));var _e=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),ze=tinymce.util.Tools.resolve("tinymce.Env");const $e=(e,t)=>{e.dispatch("FullscreenStateChanged",{state:t}),e.dispatch("ResizeEditor")},Ue=("fullscreen_native",e=>e.options.get("fullscreen_native"));const Ke=e=>{return e.dom===(void 0!==(t=z(e).dom).fullscreenElement?t.fullscreenElement:void 0!==t.msFullscreenElement?t.msFullscreenElement:void 0!==t.webkitFullscreenElement?t.webkitFullscreenElement:null);var t},Xe=(e,t,n)=>((e,t,n)=>E(((e,t)=>{const n=m(t)?t:v;let r=e.dom;const o=[];for(;null!==r.parentNode&&void 0!==r.parentNode;){const e=r.parentNode,t=B(e);if(o.push(t),!0===n(t))break;r=e}return o})(e,n),t))(e,(e=>_(e,t)),n),Ye=(e,t)=>((e,n)=>{return E((e=>b.from(e.dom.parentNode).map(B))(r=e).map($).map((e=>E(e,(e=>{return t=e,!(r.dom===t.dom);var t})))).getOr([]),(e=>_(e,t)));var r})(e),Ge="data-ephox-mobile-fullscreen-style",Je="position:absolute!important;",Qe="top:0!important;left:0!important;margin:0!important;padding:0!important;width:100%!important;height:100%!important;overflow:visible!important;",Ze=ze.os.isAndroid(),et=(e,t,n)=>{const r=t=>n=>{const r=W(n,"style"),o=void 0===r?"no-styles":r.trim();o!==t&&(((e,t,n)=>{((e,t,n)=>{if(!(s(n)||c(n)||h(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,n+"")})(e.dom,t,n)})(n,Ge,o),ee(n,e.parseStyle(t)))},o=Xe(t,"*"),i=(e=>{const t=[];for(let n=0,r=e.length;n<r;++n){if(!l(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);y.apply(t,e[n])}return t})(S(o,(e=>Ye(e,"*:not(.tox-silver-sink)")))),a=(e=>{const t=te(e,"background-color");return void 0!==t&&""!==t?"background-color:"+t+"!important":"background-color:rgb(255,255,255)!important;"})(n);x(i,r("display:none!important;")),x(o,r(Je+Qe+a)),r((!0===Ze?"":Je)+Qe+a)(t)},tt=_e.DOM,nt=Ie().fold((()=>({bind:g,unbind:g})),(e=>{const t=(()=>{const e=O(g);return{...e,on:t=>e.get().each(t)}})(),n=k(),r=k(),o=((e,t)=>{let n=null;return{cancel:()=>{a(n)||(clearTimeout(n),n=null)},throttle:(...t)=>{a(n)&&(n=setTimeout((()=>{n=null,e.apply(null,t)}),50))}}})((()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0,window.requestAnimationFrame((()=>{t.on((t=>ee(t,{top:e.offsetTop+"px",left:e.offsetLeft+"px",height:e.height+"px",width:e.width+"px"})))}))}));return{bind:e=>{t.set(e),o.throttle(),n.set(Be("resize",o.throttle)),r.set(Be("scroll",o.throttle))},unbind:()=>{t.on((()=>{n.clear(),r.clear()})),t.clear()}}})),rt=(e,t)=>{const n=document.body,r=document.documentElement,o=e.getContainer(),s=B(o),i=(l=s,b.from(l.dom.nextSibling).map(B)).filter((e=>(e=>P(e)&&L(e.dom))(e)&&((e,t)=>(e=>void 0!==e.dom.classList)(e)&&e.dom.classList.contains("tox-silver-sink"))(e)));var l;const a=(e=>{const t=B(e.getElement());return Y(t).map(G).getOrThunk((()=>(e=>{const t=e.dom.body;if(null==t)throw new Error("Body is not available yet");return B(t)})(z(t))))})(e),c=t.get(),u=B(e.getBody()),d=ze.deviceType.isTouch(),m=o.style,h=e.iframeElement,g=null==h?void 0:h.style,p=e=>{e(n,"tox-fullscreen"),e(r,"tox-fullscreen"),e(o,"tox-fullscreen"),Y(s).map((e=>G(e).dom)).each((t=>{e(t,"tox-fullscreen"),e(t,"tox-shadowhost")}))},f=()=>{d&&(e=>{const t=((e,t)=>{const n=document;return 1!==(r=n).nodeType&&9!==r.nodeType&&11!==r.nodeType||0===r.childElementCount?[]:S(n.querySelectorAll(e),B);var r})("["+Ge+"]");x(t,(t=>{const n=W(t,Ge);n&&"no-styles"!==n?ee(t,e.parseStyle(n)):q(t,"style"),q(t,Ge)}))})(e.dom),p(tt.removeClass),nt.unbind(),b.from(t.get()).each((e=>e.fullscreenChangeHandler.unbind()))};if(c)c.fullscreenChangeHandler.unbind(),Ue(e)&&Ke(a)&&(e=>{const t=e.dom;t.exitFullscreen?t.exitFullscreen():t.msExitFullscreen?t.msExitFullscreen():t.webkitCancelFullScreen&&t.webkitCancelFullScreen()})(z(a)),g.width=c.iframeWidth,g.height=c.iframeHeight,m.width=c.containerWidth,m.height=c.containerHeight,m.top=c.containerTop,m.left=c.containerLeft,w=i,y=c.sinkCssPosition,E=(e,t)=>{Z(e,"position",t)},w.isSome()&&y.isSome()?b.some(E(w.getOrDie(),y.getOrDie())):b.none(),f(),v=c.scrollPos,window.scrollTo(v.x,v.y),t.set(null),$e(e,!1),e.off("remove",f);else{const n=ie(z(a),void 0!==document.fullscreenElement?"fullscreenchange":void 0!==document.msFullscreenElement?"MSFullscreenChange":void 0!==document.webkitFullscreenElement?"webkitfullscreenchange":"fullscreenchange",(n=>{Ue(e)&&(Ke(a)||null===t.get()||rt(e,t))})),r={scrollPos:je(window),containerWidth:m.width,containerHeight:m.height,containerTop:m.top,containerLeft:m.left,iframeWidth:g.width,iframeHeight:g.height,fullscreenChangeHandler:n,sinkCssPosition:i.map((e=>te(e,"position")))};d&&et(e.dom,s,u),g.width=g.height="100%",m.width=m.height="",p(tt.addClass),i.each((e=>{Z(e,"position","fixed")})),nt.bind(s),e.on("remove",f),t.set(r),Ue(e)&&(e=>{const t=e.dom;t.requestFullscreen?t.requestFullscreen():t.msRequestFullscreen?t.msRequestFullscreen():t.webkitRequestFullScreen&&t.webkitRequestFullScreen()})(a),$e(e,!0)}var v,w,y,E},ot=(e,t)=>n=>{n.setActive(null!==t.get());const r=e=>n.setActive(e.state);return e.on("FullscreenStateChanged",r),()=>e.off("FullscreenStateChanged",r)};t.add("fullscreen",(t=>{const n=e(null);return t.inline||((e=>{(0,e.options.register)("fullscreen_native",{processor:"boolean",default:!1})})(t),((e,t)=>{e.addCommand("mceFullScreen",(()=>{rt(e,t)}))})(t,n),((e,t)=>{const n=()=>e.execCommand("mceFullScreen");e.ui.registry.addToggleMenuItem("fullscreen",{text:"Fullscreen",icon:"fullscreen",shortcut:"Meta+Shift+F",onAction:n,onSetup:ot(e,t)}),e.ui.registry.addToggleButton("fullscreen",{tooltip:"Fullscreen",icon:"fullscreen",onAction:n,onSetup:ot(e,t),shortcut:"Meta+Shift+F"})})(t,n),t.addShortcut("Meta+Shift+F","","mceFullScreen")),(e=>({isFullscreen:()=>null!==e.get()}))(n)}))}();