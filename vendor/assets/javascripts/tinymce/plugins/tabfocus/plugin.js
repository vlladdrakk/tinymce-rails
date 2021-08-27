/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.9.1 (2021-08-27)
 */
!function(){"use strict";function n(e){e.keyCode!==y.TAB||e.ctrlKey||e.altKey||e.metaKey||e.preventDefault()}var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),s=tinymce.util.Tools.resolve("tinymce.EditorManager"),o=tinymce.util.Tools.resolve("tinymce.Env"),a=tinymce.util.Tools.resolve("tinymce.util.Delay"),c=tinymce.util.Tools.resolve("tinymce.util.Tools"),y=tinymce.util.Tools.resolve("tinymce.util.VK"),d=t.DOM;e.add("tabfocus",function(e){function t(l){var r,e,t,n,i;l.keyCode!==y.TAB||l.ctrlKey||l.altKey||l.metaKey||l.isDefaultPrevented()||(e=function(e){function t(e){return/INPUT|TEXTAREA|BUTTON/.test(e.tagName)&&s.get(l.id)&&-1!==e.tabIndex&&i(e)}var n=d.select(":input:enabled,*[tabindex]:not(iframe)"),i=function(e){return"BODY"===e.nodeName||"hidden"!==e.type&&"none"!==e.style.display&&"hidden"!==e.style.visibility&&i(e.parentNode)};if(c.each(n,function(e,t){if(e.id===u.id)return r=t,!1}),0<e){for(var o=r+1;o<n.length;o++)if(t(n[o]))return n[o]}else for(o=r-1;0<=o;o--)if(t(n[o]))return n[o];return null},1===(t=c.explode(u.getParam("tab_focus",u.getParam("tabfocus_elements",":prev,:next")))).length&&(t[1]=t[0],t[0]=":prev"),(n=l.shiftKey?":prev"===t[0]?e(-1):d.get(t[0]):":next"===t[1]?e(1):d.get(t[1]))&&(i=s.get(n.id||n.name),n.id&&i?i.focus():a.setTimeout(function(){o.webkit||window.focus(),n.focus()},10),l.preventDefault()))}var u;(u=e).on("init",function(){u.inline&&d.setAttrib(u.getBody(),"tabIndex",null),u.on("keyup",n),o.gecko?u.on("keypress keydown",t):u.on("keydown",t)})})}();