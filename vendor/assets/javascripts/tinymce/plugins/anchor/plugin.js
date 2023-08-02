/**
 * TinyMCE version 6.6.1 (2023-08-02)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),o=tinymce.util.Tools.resolve("tinymce.util.Tools");const n=("allow_html_in_named_anchor",e=>e.options.get("allow_html_in_named_anchor"));const a="a:not([href])",r=e=>!e,i=e=>e.getAttribute("id")||e.getAttribute("name")||"",l=e=>(e=>"a"===e.nodeName.toLowerCase())(e)&&!e.getAttribute("href")&&""!==i(e),s=e=>e.dom.getParent(e.selection.getStart(),a),d=(e,a)=>{const r=s(e);r?((e,t,o)=>{o.removeAttribute("name"),o.id=t,e.addVisual(),e.undoManager.add()})(e,a,r):((e,a)=>{e.undoManager.transact((()=>{n(e)||e.selection.collapse(!0),e.selection.isCollapsed()?e.insertContent(e.dom.createHTML("a",{id:a})):((e=>{const n=e.dom;t(n).walk(e.selection.getRng(),(e=>{o.each(e,(e=>{var t;l(t=e)&&!t.firstChild&&n.remove(e,!1)}))}))})(e),e.formatter.remove("namedAnchor",void 0,void 0,!0),e.formatter.apply("namedAnchor",{value:a}),e.addVisual())}))})(e,a),e.focus()},c=e=>(e=>r(e.attr("href"))&&!r(e.attr("id")||e.attr("name")))(e)&&!e.firstChild,m=e=>t=>{for(let o=0;o<t.length;o++){const n=t[o];c(n)&&n.attr("contenteditable",e)}},u=e=>t=>{const o=()=>{t.setEnabled(e.selection.isEditable())};return e.on("NodeChange",o),o(),()=>{e.off("NodeChange",o)}};e.add("anchor",(e=>{(e=>{(0,e.options.register)("allow_html_in_named_anchor",{processor:"boolean",default:!1})})(e),(e=>{e.on("PreInit",(()=>{e.parser.addNodeFilter("a",m("false")),e.serializer.addNodeFilter("a",m(null))}))})(e),(e=>{e.addCommand("mceAnchor",(()=>{(e=>{const t=(e=>{const t=s(e);return t?i(t):""})(e);e.windowManager.open({title:"Anchor",size:"normal",body:{type:"panel",items:[{name:"id",type:"input",label:"ID",placeholder:"example"}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:{id:t},onSubmit:t=>{((e,t)=>/^[A-Za-z][A-Za-z0-9\-:._]*$/.test(t)?(d(e,t),!0):(e.windowManager.alert("ID should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores."),!1))(e,t.getData().id)&&t.close()}})})(e)}))})(e),(e=>{const t=()=>e.execCommand("mceAnchor");e.ui.registry.addToggleButton("anchor",{icon:"bookmark",tooltip:"Anchor",onAction:t,onSetup:t=>{const o=e.selection.selectorChangedWithUnbind("a:not([href])",t.setActive).unbind,n=u(e)(t);return()=>{o(),n()}}}),e.ui.registry.addMenuItem("anchor",{icon:"bookmark",text:"Anchor...",onAction:t,onSetup:u(e)})})(e),e.on("PreInit",(()=>{(e=>{e.formatter.register("namedAnchor",{inline:"a",selector:a,remove:"all",split:!0,deep:!0,attributes:{id:"%value"},onmatch:(e,t,o)=>l(e)})})(e)}))}))}();