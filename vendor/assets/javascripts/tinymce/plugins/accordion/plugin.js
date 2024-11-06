/**
 * TinyMCE version 7.5.0 (2024-11-06)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager");let t=0;const o=e=>t=>typeof t===e,n=e=>"string"===(e=>{const t=typeof e;return null===e?"null":"object"===t&&Array.isArray(e)?"array":"object"===t&&(o=n=e,(r=String).prototype.isPrototypeOf(o)||(null===(s=n.constructor)||void 0===s?void 0:s.name)===r.name)?"string":t;var o,n,r,s})(e),r=o("boolean"),s=e=>null==e,i=e=>!s(e),a=o("function"),d=o("number"),l=e=>()=>e,c=(e,t)=>e===t,m=l(!1);class u{constructor(e,t){this.tag=e,this.value=t}static some(e){return new u(!0,e)}static none(){return u.singletonNone}fold(e,t){return this.tag?t(this.value):e()}isSome(){return this.tag}isNone(){return!this.tag}map(e){return this.tag?u.some(e(this.value)):u.none()}bind(e){return this.tag?e(this.value):u.none()}exists(e){return this.tag&&e(this.value)}forall(e){return!this.tag||e(this.value)}filter(e){return!this.tag||e(this.value)?this:u.none()}getOr(e){return this.tag?this.value:e}or(e){return this.tag?this:e}getOrThunk(e){return this.tag?this.value:e()}orThunk(e){return this.tag?this:e()}getOrDie(e){if(this.tag)return this.value;throw new Error(null!=e?e:"Called getOrDie on None")}static from(e){return i(e)?u.some(e):u.none()}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(e){this.tag&&e(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}u.singletonNone=new u(!1);const g=Array.prototype.indexOf,p=(e,t)=>{return o=e,n=t,g.call(o,n)>-1;var o,n},h=(e,t)=>{const o=e.length,n=new Array(o);for(let r=0;r<o;r++){const o=e[r];n[r]=t(o,r)}return n},f=(e,t)=>{for(let o=0,n=e.length;o<n;o++)t(e[o],o)},y=Object.keys;"undefined"!=typeof window?window:Function("return this;")();const v=e=>e.dom.nodeName.toLowerCase(),w=e=>e.dom.nodeType,b=e=>t=>w(t)===e,N=b(1),T=b(3),A=b(9),C=b(11),S=(e,t,o)=>{if(!(n(o)||r(o)||d(o)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",o,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,o+"")},x=(e,t)=>{const o=e.dom.getAttribute(t);return null===o?void 0:o},D=(e,t)=>u.from(x(e,t)),E=(e,t)=>{e.dom.removeAttribute(t)},O=e=>{if(null==e)throw new Error("Node cannot be null or undefined");return{dom:e}},M={fromHtml:(e,t)=>{const o=(t||document).createElement("div");if(o.innerHTML=e,!o.hasChildNodes()||o.childNodes.length>1){const t="HTML does not have a single root node";throw console.error(t,e),new Error(t)}return O(o.childNodes[0])},fromTag:(e,t)=>{const o=(t||document).createElement(e);return O(o)},fromText:(e,t)=>{const o=(t||document).createTextNode(e);return O(o)},fromDom:O,fromPoint:(e,t,o)=>u.from(e.dom.elementFromPoint(t,o)).map(O)},P=(e,t)=>{const o=e.dom;if(1!==o.nodeType)return!1;{const e=o;if(void 0!==e.matches)return e.matches(t);if(void 0!==e.msMatchesSelector)return e.msMatchesSelector(t);if(void 0!==e.webkitMatchesSelector)return e.webkitMatchesSelector(t);if(void 0!==e.mozMatchesSelector)return e.mozMatchesSelector(t);throw new Error("Browser lacks native selectors")}},R=e=>1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType||0===e.childElementCount,k=P,B=(L=/^\s+|\s+$/g,e=>e.replace(L,""));var L;const $=e=>void 0!==e.style&&a(e.style.getPropertyValue),V=e=>u.from(e.dom.parentNode).map(M.fromDom),I=e=>u.from(e.dom.nextSibling).map(M.fromDom),j=e=>h(e.dom.childNodes,M.fromDom),q=e=>M.fromDom(e.dom.host),F=e=>{const t=T(e)?e.dom.parentNode:e.dom;if(null==t||null===t.ownerDocument)return!1;const o=t.ownerDocument;return(e=>{const t=(e=>M.fromDom(e.dom.getRootNode()))(e);return C(o=t)&&i(o.dom.host)?u.some(t):u.none();var o})(M.fromDom(t)).fold((()=>o.body.contains(t)),(n=F,r=q,e=>n(r(e))));var n,r},H=(e,t)=>$(e)?e.style.getPropertyValue(t):"",z=(e,t)=>{V(e).each((o=>{o.dom.insertBefore(t.dom,e.dom)}))},K=(e,t)=>{I(e).fold((()=>{V(e).each((e=>{U(e,t)}))}),(e=>{z(e,t)}))},U=(e,t)=>{e.dom.appendChild(t.dom)},Y=(e,t)=>{f(t,((o,n)=>{const r=0===n?e:t[n-1];K(r,o)}))},_=(e,t)=>{let o=[];return f(j(e),(e=>{t(e)&&(o=o.concat([e])),o=o.concat(_(e,t))})),o},G=(e,t,o)=>{let n=e.dom;const r=a(o)?o:m;for(;n.parentNode;){n=n.parentNode;const e=M.fromDom(n);if(t(e))return u.some(e);if(r(e))break}return u.none()},J=e=>{const t=e.dom;null!==t.parentNode&&t.parentNode.removeChild(t)},Q=(e,t,o)=>G(e,(e=>P(e,t)),o),W=(e,t)=>((e,t)=>{const o=void 0===t?document:t.dom;return R(o)?u.none():u.from(o.querySelector(e)).map(M.fromDom)})(t,e),X=((e,t)=>{const o=t=>e(t)?u.from(t.dom.nodeValue):u.none();return{get:t=>{if(!e(t))throw new Error("Can only get text value of a text node");return o(t).getOr("")},getOption:o,set:(t,o)=>{if(!e(t))throw new Error("Can only set raw text value of a text node");t.dom.nodeValue=o}}})(T);var Z=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","li","table","thead","tbody","tfoot","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"];const ee=(e,t)=>({element:e,offset:t}),te=(e,t,o)=>e.property().isText(t)&&0===e.property().getText(t).trim().length||e.property().isComment(t)?o(t).bind((t=>te(e,t,o).orThunk((()=>u.some(t))))):u.none(),oe=(e,t)=>e.property().isText(t)?e.property().getText(t).length:e.property().children(t).length,ne=(e,t)=>{const o=te(e,t,e.query().prevSibling).getOr(t);if(e.property().isText(o))return ee(o,oe(e,o));const n=e.property().children(o);return n.length>0?ne(e,n[n.length-1]):ee(o,oe(e,o))},re=ne,se={up:l({selector:Q,closest:(e,t,o)=>((e,t,o,n,r)=>((e,t)=>P(e,t))(o,n)?u.some(o):a(r)&&r(o)?u.none():t(o,n,r))(0,Q,e,t,o),predicate:G,all:(e,t)=>{const o=a(t)?t:m;let n=e.dom;const r=[];for(;null!==n.parentNode&&void 0!==n.parentNode;){const e=n.parentNode,t=M.fromDom(e);if(r.push(t),!0===o(t))break;n=e}return r}}),down:l({selector:(e,t)=>((e,t)=>{const o=void 0===t?document:t.dom;return R(o)?[]:h(o.querySelectorAll(e),M.fromDom)})(t,e),predicate:_}),styles:l({get:(e,t)=>{const o=e.dom,n=window.getComputedStyle(o).getPropertyValue(t);return""!==n||F(e)?n:H(o,t)},getRaw:(e,t)=>{const o=e.dom,n=H(o,t);return u.from(n).filter((e=>e.length>0))},set:(e,t,o)=>{((e,t,o)=>{if(!n(o))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",o,":: Element ",e),new Error("CSS value must be a string: "+o);$(e)&&e.style.setProperty(t,o)})(e.dom,t,o)},remove:(e,t)=>{((e,t)=>{$(e)&&e.style.removeProperty(t)})(e.dom,t),((e,t,o=c)=>e.exists((e=>o(e,t))))(D(e,"style").map(B),"")&&E(e,"style")}}),attrs:l({get:x,set:(e,t,o)=>{S(e.dom,t,o)},remove:E,copyTo:(e,t)=>{const o=(n=e.dom.attributes,r=(e,t)=>(e[t.name]=t.value,e),s={},f(n,((e,t)=>{s=r(s,e)})),s);var n,r,s;((e,t)=>{const o=e.dom;((e,t)=>{const o=y(e);for(let n=0,r=o.length;n<r;n++){const r=o[n];t(e[r],r)}})(t,((e,t)=>{S(o,t,e)}))})(t,o)}}),insert:l({before:z,after:K,afterAll:Y,append:U,appendAll:(e,t)=>{f(t,(t=>{U(e,t)}))},prepend:(e,t)=>{(e=>((e,t)=>{const o=e.dom.childNodes;return u.from(o[0]).map(M.fromDom)})(e))(e).fold((()=>{U(e,t)}),(o=>{e.dom.insertBefore(t.dom,o.dom)}))},wrap:(e,t)=>{z(e,t),U(t,e)}}),remove:l({unwrap:e=>{const t=j(e);t.length>0&&Y(e,t),J(e)},remove:J}),create:l({nu:M.fromTag,clone:e=>M.fromDom(e.dom.cloneNode(!1)),text:M.fromText}),query:l({comparePosition:(e,t)=>e.dom.compareDocumentPosition(t.dom),prevSibling:e=>u.from(e.dom.previousSibling).map(M.fromDom),nextSibling:I}),property:l({children:j,name:v,parent:V,document:e=>{return(t=e,A(t)?t:M.fromDom(t.dom.ownerDocument)).dom;var t},isText:T,isComment:e=>8===w(e)||"#comment"===v(e),isElement:N,isSpecial:e=>{const t=v(e);return p(["script","noscript","iframe","noframes","noembed","title","style","textarea","xmp"],t)},getLanguage:e=>N(e)?D(e,"lang"):u.none(),getText:e=>X.get(e),setText:(e,t)=>X.set(e,t),isBoundary:e=>!!N(e)&&("body"===v(e)||p(Z,v(e))),isEmptyTag:e=>!!N(e)&&p(["br","img","hr","input"],v(e)),isNonEditable:e=>N(e)&&"false"===x(e,"contenteditable")}),eq:(e,t)=>e.dom===t.dom,is:k},ie="details",ae="mce-accordion",de="mce-accordion-summary",le="mce-accordion-body",ce="div";var me=tinymce.util.Tools.resolve("tinymce.util.Tools");const ue=e=>"SUMMARY"===(null==e?void 0:e.nodeName),ge=e=>"DETAILS"===(null==e?void 0:e.nodeName),pe=e=>e.hasAttribute("open"),he=e=>{const t=e.selection.getNode();return ue(t)||Boolean(e.dom.getParent(t,ue))},fe=e=>!he(e)&&e.dom.isEditable(e.selection.getNode())&&!e.mode.isReadOnly(),ye=e=>u.from(e.dom.getParent(e.selection.getNode(),ge)),ve=e=>(e.innerHTML='<br data-mce-bogus="1" />',e),we=e=>ve(e.dom.create("p")),be=e=>t=>{((e,t)=>{if(ue(null==t?void 0:t.lastChild)){const o=we(e);t.appendChild(o),e.selection.setCursorLocation(o,0)}})(e,t),((e,t)=>{if(!ue(null==t?void 0:t.firstChild)){const o=(e=>ve(e.dom.create("summary")))(e);t.prepend(o),e.selection.setCursorLocation(o,0)}})(e,t)},Ne=e=>{if(!fe(e))return;const o=M.fromDom(e.getBody()),n=(e=>{const o=(new Date).getTime(),n=Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0]/4294967295*1e9);return t++,e+"_"+n+t+String(o)})("acc"),r=e.dom.encode(e.selection.getRng().toString()||e.translate("Accordion summary...")),s=e.dom.encode(e.translate("Accordion body...")),i=`<summary class="${de}">${r}</summary>`,a=`<${ce} class="${le}"><p>${s}</p></${ce}>`;e.undoManager.transact((()=>{e.insertContent([`<details data-mce-id="${n}" class="${ae}" open="open">`,i,a,"</details>"].join("")),W(o,`[data-mce-id="${n}"]`).each((t=>{E(t,"data-mce-id"),W(t,"summary").each((t=>{const o=e.dom.createRng(),n=re(se,t);o.setStart(n.element.dom,n.offset),o.setEnd(n.element.dom,n.offset),e.selection.setRng(o)}))}))}))},Te=(e,t)=>{const o=null!=t?t:!pe(e);return o?e.setAttribute("open","open"):e.removeAttribute("open"),o},Ae=e=>{e.addCommand("InsertAccordion",(()=>Ne(e))),e.addCommand("ToggleAccordion",((t,o)=>((e,t)=>{ye(e).each((o=>{((e,t,o)=>{e.dispatch("ToggledAccordion",{element:t,state:o})})(e,o,Te(o,t))}))})(e,o))),e.addCommand("ToggleAllAccordions",((t,o)=>((e,t)=>{const o=Array.from(e.getBody().querySelectorAll("details"));0!==o.length&&(f(o,(e=>Te(e,null!=t?t:!pe(e)))),((e,t,o)=>{e.dispatch("ToggledAllAccordions",{elements:t,state:o})})(e,o,t))})(e,o))),e.addCommand("RemoveAccordion",(()=>(e=>{e.mode.isReadOnly()||ye(e).each((t=>{const{nextSibling:o}=t;o?(e.selection.select(o,!0),e.selection.collapse(!0)):((e,t)=>{const o=we(e);t.insertAdjacentElement("afterend",o),e.selection.setCursorLocation(o,0)})(e,t),t.remove()}))})(e)))};var Ce=tinymce.util.Tools.resolve("tinymce.html.Node");const Se=e=>{var t,o;return null!==(o=null===(t=e.attr("class"))||void 0===t?void 0:t.split(" "))&&void 0!==o?o:[]},xe=(e,t)=>{const o=new Set([...Se(e),...t]),n=Array.from(o);n.length>0&&e.attr("class",n.join(" "))},De=(e,t)=>{const o=((e,o)=>{const n=[];for(let o=0,s=e.length;o<s;o++){const s=e[o];r=s,!t.has(r)&&n.push(s)}var r;return n})(Se(e));e.attr("class",o.length>0?o.join(" "):null)},Ee=e=>e.name===ie&&p(Se(e),ae),Oe=e=>{const t=e.children();let o,n;const r=[];for(let e=0;e<t.length;e++){const a=t[e];"summary"===a.name&&s(o)?o=a:(i=a).name===ce&&p(Se(i),le)&&s(n)?n=a:r.push(a)}var i;return{summaryNode:o,wrapperNode:n,otherNodes:r}},Me=e=>{const t=new Ce("br",1);t.attr("data-mce-bogus","1"),e.empty(),e.append(t)};var Pe=tinymce.util.Tools.resolve("tinymce.util.VK");const Re=e=>{(e=>{e.on("keydown",(t=>{(!t.shiftKey&&t.keyCode===Pe.ENTER&&he(e)||(e=>{const t=e.selection.getRng();return ge(t.startContainer)&&t.collapsed&&0===t.startOffset})(e))&&(t.preventDefault(),e.execCommand("ToggleAccordion"))}))})(e),e.on("ExecCommand",(t=>{const o=t.command.toLowerCase();"delete"!==o&&"forwarddelete"!==o||!(e=>ye(e).isSome())(e)||(e=>{me.each(me.grep(e.dom.select("details",e.getBody())),be(e))})(e)}))};var ke=tinymce.util.Tools.resolve("tinymce.Env");const Be=e=>t=>{const o=()=>t.setEnabled(fe(e));return e.on("NodeChange",o),()=>e.off("NodeChange",o)};e.add("accordion",(e=>{(e=>{const t=()=>e.execCommand("InsertAccordion");e.ui.registry.addButton("accordion",{icon:"accordion",tooltip:"Insert accordion",onSetup:Be(e),onAction:t}),e.ui.registry.addMenuItem("accordion",{icon:"accordion",text:"Accordion",onSetup:Be(e),onAction:t}),e.ui.registry.addToggleButton("accordiontoggle",{icon:"accordion-toggle",tooltip:"Toggle accordion",onAction:()=>e.execCommand("ToggleAccordion")}),e.ui.registry.addToggleButton("accordionremove",{icon:"remove",tooltip:"Delete accordion",onAction:()=>e.execCommand("RemoveAccordion")}),e.ui.registry.addContextToolbar("accordion",{predicate:t=>e.dom.is(t,"details")&&e.getBody().contains(t)&&e.dom.isEditable(t.parentNode),items:"accordiontoggle accordionremove",scope:"node",position:"node"})})(e),Ae(e),Re(e),(e=>{e.on("PreInit",(()=>{const{serializer:t,parser:o}=e;o.addNodeFilter(ie,(e=>{for(let t=0;t<e.length;t++){const o=e[t];if(Ee(o)){const e=o,{summaryNode:t,wrapperNode:n,otherNodes:r}=Oe(e),a=i(t),d=a?t:new Ce("summary",1);s(d.firstChild)&&Me(d),xe(d,[de]),a||(i(e.firstChild)?e.insert(d,e.firstChild,!0):e.append(d));const l=i(n),c=l?n:new Ce(ce,1);if(c.attr("data-mce-bogus","1"),xe(c,[le]),r.length>0)for(let e=0;e<r.length;e++){const t=r[e];c.append(t)}if(s(c.firstChild)){const e=new Ce("p",1);Me(e),c.append(e)}l||e.append(c)}}})),t.addNodeFilter(ie,(e=>{const t=new Set([de]);for(let o=0;o<e.length;o++){const n=e[o];if(Ee(n)){const e=n,{summaryNode:o,wrapperNode:r}=Oe(e);i(o)&&De(o,t),i(r)&&r.unwrap()}}}))}))})(e),(e=>{ke.browser.isSafari()&&e.on("click",(t=>{if(ue(t.target)){const o=t.target,n=e.selection.getRng();n.collapsed&&n.startContainer===o.parentNode&&0===n.startOffset&&e.selection.setCursorLocation(o,0)}}))})(e)}))}();