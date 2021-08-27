/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.9.1 (2021-08-27)
 */
!function(){"use strict";function e(r){return function(e){return n=typeof(t=e),(null===t?"null":"object"==n&&(Array.prototype.isPrototypeOf(t)||t.constructor&&"Array"===t.constructor.name)?"array":"object"==n&&(String.prototype.isPrototypeOf(t)||t.constructor&&"String"===t.constructor.name)?"string":n)===r;var t,n}}function t(t){return function(e){return typeof e===t}}function D(e){return!(null==e)}function l(){}function i(e){return function(){return e}}function n(e){return e}function r(){return g}var a,o=tinymce.util.Tools.resolve("tinymce.PluginManager"),y=function(){return(y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},T=e("string"),s=e("object"),c=e("array"),N=t("boolean"),w=t("function"),u=t("number"),m=i(!1),d=i(!(a=null)),g={fold:function(e,t){return e()},isSome:m,isNone:d,getOr:n,getOrThunk:p,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:i(null),getOrUndefined:i(void 0),or:n,orThunk:p,map:r,each:l,bind:r,exists:m,forall:d,filter:function(){return g},toArray:function(){return[]},toString:i("none()")};function p(e){return e()}function f(e,i,o,l){return function(e){for(var t=v(e),n=0,r=t.length;n<r;n++){var a=t[n];!function(e,t){(i(e,t)?o:l)(e,t)}(e[a],a)}}(e),1}function h(e,t){return A.call(e,t)}function S(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!c(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);U.apply(t,e[n])}return t}var b=function(n){function e(){return a}function t(e){return e(n)}var r=i(n),a={fold:function(e,t){return t(n)},isSome:d,isNone:m,getOr:r,getOrThunk:r,getOrDie:r,getOrNull:r,getOrUndefined:r,or:e,orThunk:e,map:function(e){return b(e(n))},each:function(e){e(n)},bind:t,exists:t,forall:t,filter:function(e){return e(n)?a:g},toArray:function(){return[n]},toString:function(){return"some("+n+")"}};return a},L={some:b,none:r,from:function(e){return null==e?g:b(e)}},v=Object.keys,A=Object.hasOwnProperty,U=Array.prototype.push;function C(e,t,n){!function(e,t,n){if(!(T(n)||N(n)||u(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,n+"")}(e.dom,t,n)}function I(e){return e.getParam("image_dimensions",!0,"boolean")}function x(e,t){return Math.max(parseInt(e,10),parseInt(t,10))}function O(e){return e&&e.replace(/px$/,"")}function P(e){return 0<e.length&&/^[0-9]+$/.test(e)&&(e+="px"),e}function _(e){if(e.margin){var t=String(e.margin).split(" ");switch(t.length){case 1:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[0],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[0];break;case 2:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[1];break;case 3:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[1];break;case 4:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[3]}delete e.margin}return e}function E(e){return"IMG"===e.nodeName&&(e.hasAttribute("data-mce-object")||e.hasAttribute("data-mce-placeholder"))}function R(e){return e.style.marginLeft&&e.style.marginRight&&e.style.marginLeft===e.style.marginRight?O(e.style.marginLeft):""}function k(e){return e.style.marginTop&&e.style.marginBottom&&e.style.marginTop===e.style.marginBottom?O(e.style.marginTop):""}function z(e){return e.style.borderWidth?O(e.style.borderWidth):""}function M(e,t){return e.hasAttribute(t)?e.getAttribute(t):""}function j(e,t){return e.style[t]||""}function B(e){return null!==e.parentNode&&"FIGURE"===e.parentNode.nodeName}function H(e,t,n){""===n?e.removeAttribute(t):e.setAttribute(t,n)}function F(e,t){var n=e.getAttribute("style"),r=t(null!==n?n:"");0<r.length?(e.setAttribute("style",r),e.setAttribute("data-mce-style",r)):e.removeAttribute("style")}function G(e,r){return function(e,t,n){e.style[t]?(e.style[t]=P(n),F(e,r)):H(e,t,n)}}function W(e,t){return e.style[t]?O(e.style[t]):M(e,t)}function V(e,t){var n=P(t);e.style.marginLeft=n,e.style.marginRight=n}function $(e,t){var n=P(t);e.style.marginTop=n,e.style.marginBottom=n}function J(e,t){var n=P(t);e.style.borderWidth=n}function K(e,t){e.style.borderStyle=t}function X(e){return"FIGURE"===e.nodeName}function Z(e){return 0===we.getAttrib(e,"alt").length&&"presentation"===we.getAttrib(e,"role")}function q(){return{src:"",alt:"",title:"",width:"",height:"",class:"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:"",isDecorative:!1}}function Q(e,t){return{src:M(t,"src"),alt:Z(n=t)?"":M(n,"alt"),title:M(t,"title"),width:W(t,"width"),height:W(t,"height"),class:M(t,"class"),style:e(M(t,"style")),caption:B(t),hspace:R(t),vspace:k(t),border:z(t),borderStyle:j(t,"borderStyle"),isDecorative:Z(t)};var n}function Y(e,t,n,r,a){n[r]!==t[r]&&a(e,r,n[r])}function ee(r,a){return function(e,t,n){r(e,n),F(e,a)}}function te(e,t){var n=_(e.dom.styles.parse(t)),r=e.dom.styles.parse(e.dom.styles.serialize(n));return e.dom.styles.serialize(r)}function ne(e){var t=e.selection.getNode(),n=e.dom.getParent(t,"figure.image");return n?e.dom.select("img",n)[0]:t&&("IMG"!==t.nodeName||E(t))?null:t}function re(n,e){var r,t,a=n.dom,i=(f(n.schema.getTextBlockElements(),function(e,t){return!n.schema.isValidChild(t,"figure")},(r=t={},function(e,t){r[t]=e}),l),t),o=a.getParent(e.parentNode,function(e){return h(t=i,n=e.nodeName)&&null!=t[n];var t,n},n.getBody());return o?a.split(o,e):e}function ae(r,e){var t=function(e){var t=document.createElement("img");if(Ue(function(e){return te(r,e)},y(y({},e),{caption:!1}),t),Se(t,e.alt,e.isDecorative),e.caption){var n=we.create("figure",{class:"image"});return n.appendChild(t),n.appendChild(we.create("figcaption",{contentEditable:"true"},"Caption")),n.contentEditable="false",n}return t}(e);r.dom.setAttrib(t,"data-mce-id","__mcenew"),r.focus(),r.selection.setContent(t.outerHTML);var n,a=r.dom.select('*[data-mce-id="__mcenew"]')[0];r.dom.setAttrib(a,"data-mce-id",null),X(a)?(n=re(r,a),r.selection.select(n)):r.selection.select(a)}function ie(e){return T(e.value)?e.value:""}function oe(t){return void 0===t&&(t=ie),function(e){return e?L.from(e).map(function(e){return Oe(e,t)}):L.none()}}function le(e){var t=e.imageList.map(function(e){return{name:"images",type:"listbox",label:"Image list",items:e}}),n={name:"alt",type:"input",label:"Alternative description",disabled:e.hasAccessibilityOptions&&e.image.isDecorative},r=e.classList.map(function(e){return{name:"classes",type:"listbox",label:"Class",items:e}});return S([[{name:"src",type:"urlinput",filetype:"image",label:"Source"}],t.toArray(),e.hasAccessibilityOptions&&e.hasDescription?[{type:"label",label:"Accessibility",items:[{name:"isDecorative",type:"checkbox",label:"Image is decorative"}]}]:[],e.hasDescription?[n]:[],e.hasImageTitle?[{name:"title",type:"input",label:"Image title"}]:[],e.hasDimensions?[{name:"dimensions",type:"sizeinput"}]:[],[y(y({},e.classList.isSome()&&e.hasImageCaption?{type:"grid",columns:2}:{type:"panel"}),{items:S([r.toArray(),e.hasImageCaption?[{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[]])})]])}function se(e){return{src:{value:e.src,meta:{}},images:e.src,alt:e.alt,title:e.title,dimensions:{width:e.width,height:e.height},classes:e.class,caption:e.caption,style:e.style,vspace:e.vspace,border:e.border,hspace:e.hspace,borderstyle:e.borderStyle,fileinput:[],isDecorative:e.isDecorative}}function ce(e,t){return{src:e.src.value,alt:0===e.alt.length&&t?null:e.alt,title:e.title,width:e.dimensions.width,height:e.dimensions.height,class:e.classes,style:e.style,caption:e.caption,hspace:e.hspace,vspace:e.vspace,border:e.border,borderStyle:e.borderstyle,isDecorative:e.isDecorative}}function ue(e,t,n,r){var a,i,o,l,s,c,u,m,d,g,p,f,h,b,y,v,A,D,w,S,U,C,I,x,O;U=t,I=(C=r).getData(),x=U,O=I.src.value,(/^(?:[a-zA-Z]+:)?\/\//.test(O)?L.none():x.prependURL.bind(function(e){return O.substring(0,e.length)!==e?L.some(e+O):L.none()})).each(function(e){C.setData({src:{value:e,meta:I.src.meta}})}),h=t,w=(b=r).getData(),void 0!==(S=w.src.meta)&&(y=Ce({},w),A=y,D=S,(v=h).hasDescription&&T(D.alt)&&(A.alt=D.alt),v.hasAccessibilityOptions&&(A.isDecorative=D.isDecorative||A.isDecorative||!1),v.hasImageTitle&&T(D.title)&&(A.title=D.title),v.hasDimensions&&(T(D.width)&&(A.dimensions.width=D.width),T(D.height)&&(A.dimensions.height=D.height)),T(D.class)&&Pe(v.classList,D.class).each(function(e){A.classes=e.value}),v.hasImageCaption&&N(D.caption)&&(A.caption=D.caption),v.hasAdvTab&&(T(D.style)&&(A.style=D.style),T(D.vspace)&&(A.vspace=D.vspace),T(D.border)&&(A.border=D.border),T(D.hspace)&&(A.hspace=D.hspace),T(D.borderstyle)&&(A.borderstyle=D.borderstyle)),b.setData(y)),a=e,i=t,o=n,c=(s=(l=r).getData()).src.value,(u=s.src.meta||{}).width||u.height||!i.hasDimensions||(0<c.length?a.imageSize(c).then(function(e){o.open&&l.setData({dimensions:e})}).catch(function(e){return console.error(e)}):l.setData({dimensions:{width:"",height:""}})),m=t,d=n,p=(g=r).getData(),f=Pe(m.imageList,p.src.value),d.prevImage=f,g.setData({images:f.map(function(e){return e.value}).getOr("")})}function me(l,s,t,c){var e,n=c.getData();c.block("Uploading image"),(0<(e=n.fileinput).length?L.some(e[0]):L.none()).fold(function(){c.unblock()},function(n){function r(){c.unblock(),URL.revokeObjectURL(i)}function a(e){c.setData({src:{value:e,meta:{}}}),c.showTab("general"),ue(l,s,t,c)}var i=URL.createObjectURL(n),o=n;new Ae(function(e,t){var n=new FileReader;n.onload=function(){e(n.result)},n.onerror=function(){t(n.error.message)},n.readAsDataURL(o)}).then(function(e){var t=l.createBlobCache(n,i,e);s.automaticUploads?l.uploadImage(t).then(function(e){a(e.url),r()}).catch(function(e){r(),l.alertErr(e)}):(l.addToBlobCache(t),a(t.blobUri()),c.unblock())})})}function de(S,U,C){return function(e,t){var n,r,a,i,o,l,s,c,u,m,d,g,p,f,h,b,y,v,A,D,w;"src"===t.name?ue(S,U,C,e):"images"===t.name?(c=S,u=U,m=C,g=(d=e).getData(),(p=Pe(u.imageList,g.images)).each(function(e){""===g.alt||m.prevImage.map(function(e){return e.text===g.alt}).getOr(!1)?""===e.value?d.setData({src:e,alt:m.prevAlt}):d.setData({src:e,alt:e.text}):d.setData({src:e})}),m.prevImage=p,ue(c,u,m,d)):"alt"===t.name?C.prevAlt=e.getData().alt:"style"===t.name?(o=S,s=(l=e).getData(),y=o.parseStyle,v=o.serializeStyle,D=_(y((A=s).style)),(w=Ce({},A)).vspace=D["margin-top"]&&D["margin-bottom"]&&D["margin-top"]===D["margin-bottom"]?O(String(D["margin-top"])):"",w.hspace=D["margin-right"]&&D["margin-left"]&&D["margin-right"]===D["margin-left"]?O(String(D["margin-right"])):"",w.border=D["border-width"]?O(String(D["border-width"])):"",w.borderstyle=D["border-style"]?String(D["border-style"]):"",w.style=v(y(v(D))),l.setData(w)):"vspace"===t.name||"hspace"===t.name||"border"===t.name||"borderstyle"===t.name?(n=S,a=Ce(se(U.image),(r=e).getData()),f=n.normalizeCss,h=ce(a,!1),H(b=document.createElement("img"),"style",h.style),!R(b)&&""===h.hspace||V(b,h.hspace),!k(b)&&""===h.vspace||$(b,h.vspace),!z(b)&&""===h.border||J(b,h.border),!j(b,"borderStyle")&&""===h.borderStyle||K(b,h.borderStyle),i=f(b.getAttribute("style")),r.setData({style:i})):"fileinput"===t.name?me(S,U,C,e):"isDecorative"===t.name&&(e.getData().isDecorative?e.disable("alt"):e.enable("alt"))}}function ge(v){var t,n,r,a,i,o,l,s,c,A={onSubmit:function(n){return function(e){var t=Ce(se(n.image),e.getData());c.execCommand("mceUpdateImage",!1,ce(t,n.hasAccessibilityOptions)),c.editorUpload.uploadImagesAuto(),e.close()}},imageSize:function(e){return a=s.documentBaseURI.toAbsolute(e),new Ae(function(t){function n(e){r.onload=r.onerror=null,r.parentNode&&r.parentNode.removeChild(r),t(e)}var r=document.createElement("img");r.onload=function(){var e=x(r.width,r.clientWidth),t=x(r.height,r.clientHeight);n(Ae.resolve({width:e,height:t}))},r.onerror=function(){n(Ae.reject("Failed to get image dimensions for: "+a))};var e=r.style;e.visibility="hidden",e.position="fixed",e.bottom=e.left="0px",e.width=e.height="auto",document.body.appendChild(r),r.src=a}).then(function(e){return{width:String(e.width),height:String(e.height)}});var a},addToBlobCache:function(e){l.editorUpload.blobCache.add(e)},createBlobCache:function(e,t,n){return o.editorUpload.blobCache.create({blob:e,blobUri:t,name:e.name?e.name.replace(/\.[^\.]+$/,""):null,filename:e.name,base64:n.split(",")[1]})},alertErr:function(e){i.windowManager.alert(e)},normalizeCss:function(e){return te(a,e)},parseStyle:function(e){return r.dom.parseStyle(e)},serializeStyle:function(e,t){return n.dom.serializeStyle(e,t)},uploadImage:(t=n=r=a=i=o=l=s=c=v,function(e){return Ie(t).upload([e],!1).then(function(e){return 0===e.length?Ae.reject("Failed to upload image"):!1===e[0].status?Ae.reject(e[0].error.message):e[0]})})};return{open:function(){var i,r,t,e,a,n,o,l,s,c,u,m,d,g,p,f,h,b,y;r=v,a=Ne(function(e){return r.convertURL(e.value||e.url,"src")}),n=new Ae(function(t){var n=function(e){t(a(e).map(function(e){return S([[{text:"None",value:""}],e])}))},e=r.getParam("image_list",!1);T(e)?De.send({url:e,success:function(e){n(JSON.parse(e))}}):w(e)?e(n):n(e)}),o=Le(r.getParam("image_class_list")),l=r.getParam("image_advtab",!1,"boolean"),s=r.getParam("image_uploadtab",!0,"boolean"),c=D(r.getParam("images_upload_url")),u=D(r.getParam("images_upload_handler")),m=(e=ne(t=r))?Q(function(e){return te(t,e)},e):q(),d=r.getParam("image_description",!0,"boolean"),g=r.getParam("image_title",!1,"boolean"),p=I(r),f=r.getParam("image_caption",!1,"boolean"),h=r.getParam("a11y_advanced_options",!1,"boolean"),b=r.getParam("automatic_uploads",!0,"boolean"),y=L.some(r.getParam("image_prepend_url","","string")).filter(function(e){return T(e)&&0<e.length}),n.then(function(e){return{image:m,imageList:e,classList:o,hasAdvTab:l,hasUploadTab:s,hasUploadUrl:c,hasUploadHandler:u,hasDescription:d,hasImageTitle:g,hasDimensions:p,hasImageCaption:f,prependURL:y,hasAccessibilityOptions:h,automaticUploads:b}}).then((i=A,function(e){var t,n,r,a={prevImage:Pe((t=e).imageList,t.image.src),prevAlt:t.image.alt,open:!0};return{title:"Insert/Edit Image",size:"normal",body:(r=e).hasAdvTab||r.hasUploadUrl||r.hasUploadHandler?{type:"tabpanel",tabs:S([[Ee(r)],r.hasAdvTab?[_e(r)]:[],r.hasUploadTab&&(r.hasUploadUrl||r.hasUploadHandler)?[ke(r)]:[]])}:{type:"panel",items:Re(r)},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:se(e.image),onSubmit:i.onSubmit(e),onChange:de(i,e,a),onClose:(n=a,function(){n.open=!1})}})).then(v.windowManager.open)}}}function pe(b){b.addCommand("mceImage",ge(b).open),b.addCommand("mceUpdateImage",function(e,h){b.undoManager.transact(function(){var t,e,n,r,a,i,o,l,s,c,u,m,d,g,p;function f(){g.onload=g.onerror=null,m.selection&&(m.selection.select(g),m.nodeChanged())}e=h,(l=ne(t=b))?(n=Q(function(e){return te(t,e)},l),(r=y(y({},n),e)).src?(c=r,p=ne(s=t),Ue(function(e){return te(s,e)},c,p),s.dom.setAttrib(p,"src",p.getAttribute("src")),X(p.parentNode)?(u=p.parentNode,re(s,u),s.selection.select(p.parentNode)):(s.selection.select(p),m=s,d=c,(g=p).onload=function(){d.width||d.height||!I(m)||m.dom.setAttribs(g,{width:String(g.clientWidth),height:String(g.clientHeight)}),f()},g.onerror=f)):(a=t,(i=l)&&(o=a.dom.is(i.parentNode,"figure.image")?i.parentNode:i,a.dom.remove(o),a.focus(),a.nodeChanged(),a.dom.isEmpty(a.getBody())&&(a.setContent(""),a.selection.setCursorLocation())))):e.src&&ae(t,y(y({},q()),e))})})}function fe(i){return function(e){for(var t=e.length,n=function(e){e.attr("contenteditable",i?"true":null)};t--;){var r,a=e[t];(r=a.attr("class"))&&/\bimage\b/.test(r)&&(a.attr("contenteditable",i?"false":null),xe.each(a.getAll("figcaption"),n))}}}"undefined"!=typeof window||Function("return this;")();function he(e){if(null==e)throw new Error("Node cannot be null or undefined");return{dom:e}}var be,ye=he,ve=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),Ae=tinymce.util.Tools.resolve("tinymce.util.Promise"),De=tinymce.util.Tools.resolve("tinymce.util.XHR"),we=ve.DOM,Se=function(e,t,n){n?(we.setAttrib(e,"role","presentation"),C(ye(e),"alt","")):(a===t?ye(e).dom.removeAttribute("alt"):C(ye(e),"alt",t),"presentation"===we.getAttrib(e,"role")&&we.setAttrib(e,"role",""))},Ue=function(e,t,n){var r=Q(e,n);Y(n,r,t,"caption",function(e,t,n){return B(r=e)?(o=r.parentNode,we.insertAfter(r,o),we.remove(o)):(a=r,i=we.create("figure",{class:"image"}),we.insertAfter(i,a),i.appendChild(a),i.appendChild(we.create("figcaption",{contentEditable:"true"},"Caption")),i.contentEditable="false"),0;var r,a,i,o}),Y(n,r,t,"src",H),Y(n,r,t,"title",H),Y(n,r,t,"width",G(0,e)),Y(n,r,t,"height",G(0,e)),Y(n,r,t,"class",H),Y(n,r,t,"style",ee(function(e,t){return H(e,"style",t),0},e)),Y(n,r,t,"hspace",ee(V,e)),Y(n,r,t,"vspace",ee($,e)),Y(n,r,t,"border",ee(J,e)),Y(n,r,t,"borderStyle",ee(K,e)),t.alt===r.alt&&t.isDecorative===r.isDecorative||Se(n,t.alt,t.isDecorative)},Ce=(be=function(e,t){return s(e)&&s(t)?Ce(e,t):t},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(0===e.length)throw new Error("Can't merge zero objects");for(var n={},r=0;r<e.length;r++){var a,i=e[r];for(a in i)h(i,a)&&(n[a]=be(n[a],i[a]))}return n}),Ie=tinymce.util.Tools.resolve("tinymce.util.ImageUploader"),xe=tinymce.util.Tools.resolve("tinymce.util.Tools"),Oe=function(e,i){var o=[];return xe.each(e,function(e){var t,n,r,a=T((t=e).text)?t.text:T(t.title)?t.title:"";void 0!==e.menu?(n=Oe(e.menu,i),o.push({text:a,items:n})):(r=i(e),o.push({text:a,value:r}))}),o},Te=function(e,a){return function(e){for(var t,n=0;n<e.length;n++){var r=h(t=e[n],"items")?Te(t.items,a):t.value===a?L.some(t):L.none();if(r.isSome())return r}return L.none()}(e)},Ne=oe,Le=function(e){return oe(ie)(e)},Pe=function(e,t){return e.bind(function(e){return Te(e,t)})},_e=function(e){return{title:"Advanced",name:"advanced",items:[{type:"input",label:"Style",name:"style"},{type:"grid",columns:2,items:[{type:"input",label:"Vertical space",name:"vspace",inputMode:"numeric"},{type:"input",label:"Horizontal space",name:"hspace",inputMode:"numeric"},{type:"input",label:"Border width",name:"border",inputMode:"numeric"},{type:"listbox",name:"borderstyle",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]}]}]}},Ee=function(e){return{title:"General",name:"general",items:le(e)}},Re=le,ke=function(e){return{title:"Upload",name:"upload",items:[{type:"dropzone",name:"fileinput"}]}};o.add("image",function(e){var t,n;(t=e).on("PreInit",function(){t.parser.addNodeFilter("figure",fe(!0)),t.serializer.addNodeFilter("figure",fe(!1))}),(n=e).ui.registry.addToggleButton("image",{icon:"image",tooltip:"Insert/edit image",onAction:ge(n).open,onSetup:function(e){return n.selection.selectorChangedWithUnbind("img:not([data-mce-object],[data-mce-placeholder]),figure.image",e.setActive).unbind}}),n.ui.registry.addMenuItem("image",{icon:"image",text:"Image...",onAction:ge(n).open}),n.ui.registry.addContextMenu("image",{update:function(e){return X(e)||"IMG"===e.nodeName&&!E(e)?["image"]:[]}}),pe(e)})}();