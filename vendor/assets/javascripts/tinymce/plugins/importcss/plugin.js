/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.9.1 (2021-08-27)
 */
!function(){"use strict";function t(n){return function(t){return r=typeof(e=t),(null===e?"null":"object"==r&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"==r&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":r)===n;var e,r}}function y(t){return t.getParam("importcss_selector_converter")}function u(e){return l(e)?function(t){return-1!==t.indexOf(e)}:e instanceof RegExp?function(t){return e.test(t)}:e}function h(t,e){var r,n=/^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(e);if(n){var o=n[1],i=n[2].substr(1).split(".").join(" "),c=x.makeMap("a,img");return n[1]?(r={title:e},t.schema.getTextBlockElements()[o]?r.block=o:t.schema.getBlockElements()[o]||c[o.toLowerCase()]?r.selector=o:r.inline=o):n[2]&&(r={inline:"span",title:e.substr(1),classes:i}),!1!==t.getParam("importcss_merge_classes")?r.classes=i:r.attributes={class:i},r}}function d(t,e){return null===e||!1!==t.getParam("importcss_exclusive")}function r(v){v.on("init",function(){function o(t,e){if(f=t,p=g,!(d(v,m=e)?f in p:f in m.selectors)){a=t,l=g,d(v,u=e)?l[a]=!0:u.selectors[a]=!0;var r=(i=(o=v).plugins.importcss,c=t,((s=e)&&s.selector_converter?s.selector_converter:y(o)?y(o):function(){return h(o,c)}).call(i,c,s));if(r){var n=r.name||_.DOM.uniqueId();return v.formatter.register(n,r),{title:r.title,format:n}}}var o,i,c,s,a,u,l,f,m,p;return null}var e,r,n,t,i=(e=[],r=[],n={},{addItemToGroup:function(t,e){n[t]?n[t].push(e):(r.push(t),n[t]=[e])},addItem:function(t){e.push(t)},toFormats:function(){return function(t){for(var e=[],r=0,n=t.length;r<n;++r){if(!f(t[r]))throw new Error("Arr.flatten item "+r+" was not an array, input: "+t);P.apply(e,t[r])}return e}(function(t,e){for(var r=t.length,n=new Array(r),o=0;o<r;o++){var i=t[o];n[o]=e(i,o)}return n}(r,function(t){var e=n[t];return 0===e.length?[]:[{title:t,items:e}]})).concat(e)}}),g={},c=u(v.getParam("importcss_selector_filter")),s=(t=v.getParam("importcss_groups"),x.map(t,function(t){return x.extend({},t,{original:t,selectors:{},filter:u(t.filter)})}));x.each(function(c,t,s){var a=[],r={},u=function(t,e){var r,n,o=n=t.href,i=p.cacheSuffix;if((n=o=l(o)?o.replace("?"+i,"").replace("&"+i,""):o)&&s(n,e)&&!function(t,e){var r,n=!1!==(r=t.getParam("skin"))&&(r||"oxide");if(n){var o=t.getParam("skin_url"),i=o?t.documentBaseURI.toAbsolute(o):m.baseURL+"/skins/ui/"+n,c=m.baseURL+"/skins/content/";return e===i+"/content"+(t.inline?".inline":"")+".min.css"||-1!==e.indexOf(c)}}(c,n)){x.each(t.imports,function(t){u(t,!0)});try{r=t.cssRules||t.rules}catch(t){}x.each(r,function(t){t.styleSheet?u(t.styleSheet,!0):t.selectorText&&x.each(t.selectorText.split(","),function(t){a.push(x.trim(t))})})}};x.each(c.contentCSS,function(t){r[t]=!0}),s=s||function(t,e){return e||r[t]};try{x.each(t.styleSheets,function(t){u(t)})}catch(t){}return a}(v,v.getDoc(),u(v.getParam("importcss_file_filter"))),function(r){var t,e,n;-1===r.indexOf(".mce-")&&(c&&!c(r)||(n=r,0<(t=x.grep(s,function(t){return!t.filter||t.filter(n)})).length?x.each(t,function(t){var e=o(r,t);e&&i.addItemToGroup(t.title,e)}):(e=o(r,null))&&i.addItem(e)))});var a=i.toFormats();v.fire("addStyleModifications",{items:a,replace:!v.getParam("importcss_append")})})}var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),l=t("string"),f=t("array"),_=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),m=tinymce.util.Tools.resolve("tinymce.EditorManager"),p=tinymce.util.Tools.resolve("tinymce.Env"),x=tinymce.util.Tools.resolve("tinymce.util.Tools"),P=Array.prototype.push;e.add("importcss",function(t){return r(t),e=t,{convertSelectorToFormat:function(t){return h(e,t)}};var e})}();