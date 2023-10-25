/**
 * TinyMCE version 6.7.2 (2023-10-25)
 */
!function(){"use strict";var n=tinymce.util.Tools.resolve("tinymce.PluginManager");const e=n=>e=>typeof e===n,o=e("boolean"),a=e("number"),t=n=>e=>e.options.get(n),i=t("nonbreaking_force_tab"),s=t("nonbreaking_wrap"),r=(n,e)=>{let o="";for(let a=0;a<e;a++)o+=n;return o},c=(n,e)=>{const o=s(n)||n.plugins.visualchars?`<span class="${(n=>!!n.plugins.visualchars&&n.plugins.visualchars.isEnabled())(n)?"mce-nbsp-wrap mce-nbsp":"mce-nbsp-wrap"}" contenteditable="false">${r("&nbsp;",e)}</span>`:r("&nbsp;",e);n.undoManager.transact((()=>n.insertContent(o)))};var l=tinymce.util.Tools.resolve("tinymce.util.VK");const u=n=>e=>{const o=()=>{e.setEnabled(n.selection.isEditable())};return n.on("NodeChange",o),o(),()=>{n.off("NodeChange",o)}};n.add("nonbreaking",(n=>{(n=>{const e=n.options.register;e("nonbreaking_force_tab",{processor:n=>o(n)?{value:n?3:0,valid:!0}:a(n)?{value:n,valid:!0}:{valid:!1,message:"Must be a boolean or number."},default:!1}),e("nonbreaking_wrap",{processor:"boolean",default:!0})})(n),(n=>{n.addCommand("mceNonBreaking",(()=>{c(n,1)}))})(n),(n=>{const e=()=>n.execCommand("mceNonBreaking");n.ui.registry.addButton("nonbreaking",{icon:"non-breaking",tooltip:"Nonbreaking space",onAction:e,onSetup:u(n)}),n.ui.registry.addMenuItem("nonbreaking",{icon:"non-breaking",text:"Nonbreaking space",onAction:e,onSetup:u(n)})})(n),(n=>{const e=i(n);e>0&&n.on("keydown",(o=>{if(o.keyCode===l.TAB&&!o.isDefaultPrevented()){if(o.shiftKey)return;o.preventDefault(),o.stopImmediatePropagation(),c(n,e)}}))})(n)}))}();