import{bW as Pe,bX as Fe,aL as Me,bY as Ee,bZ as Te,b_ as Le,ap as we,aj as ae,be as De,b$ as _e,c0 as Ce,c as Ne,af as Oe,c1 as oe,c2 as Ae,c3 as ze,k as qe,c4 as Re,c5 as ye,ah as U,bv as z,ag as C,c6 as B,Z as _,l as ne,bf as se,ay as Ue,c7 as q,c8 as We,c9 as le,ca as ue,ak as be,bs as fe,br as $e,cb as Y,cc as Ge,aC as Ve,bq as je,cd as He,bP as R,ce as H,t as re,cf as de,cg as Be,Q as ke,K as V,I as Ke,bU as Qe,ai as J,ch as Je,ci as Xe,cj as Ye,ck as Ze,cl as et,cm as tt}from"./index-4a93e9cd.js";import{b as at,h as nt,i as st,t as rt}from"./db-d8ccbb6e.js";var ve=1/0,it=17976931348623157e292;function ee(s){if(!s)return s===0?s:0;if(s=Pe(s),s===ve||s===-ve){var i=s<0?-1:1;return i*it}return s===s?s:0}function G(s){var i=s==null?0:s.length;return i?s[i-1]:void 0}function ot(s,i,a){if(!Fe(a))return!1;var r=typeof i;return(r=="number"?Me(a)&&Ee(i,a.length):r=="string"&&i in a)?Te(a[i],s):!1}var lt=Math.ceil,ct=Math.max;function ut(s,i,a,r){for(var c=-1,p=ct(lt((i-s)/(a||1)),0),f=Array(p);p--;)f[r?p:++c]=s,s+=a;return f}function ft(s){return function(i,a,r){return r&&typeof r!="number"&&ot(i,a,r)&&(a=r=void 0),i=ee(i),a===void 0?(a=i,i=0):a=ee(a),r=r===void 0?i<a?1:-1:ee(r),ut(i,a,r,s)}}var dt=ft();const vt=dt;function pe(s,i){return s&&s.length?Le(s,at(i)):[]}const K=(...s)=>{document.addEventListener(...s),we(()=>document.removeEventListener(...s))},X=new WeakMap;function pt(s,i){return{useHookShareState:r=>{const c=Ce();ae(c),X.has(c)||(X.set(c,De(s(c,r??(i==null?void 0:i())))),we(()=>{X.delete(c)}));const p=X.get(c);return ae(p),{state:p,toRefs(){return _e(p)}}}}}var gt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"database",theme:"outlined"};const ht=gt;function ge(s){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?Object(arguments[i]):{},r=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable}))),r.forEach(function(c){mt(s,c,a[c])})}return s}function mt(s,i,a){return i in s?Object.defineProperty(s,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[i]=a,s}var ce=function(i,a){var r=ge({},i,a.attrs);return Ne(Oe,ge({},r,{icon:ht}),null)};ce.displayName="DatabaseOutlined";ce.inheritAttrs=!1;const wt=ce;const j=async s=>(await oe.value.get("/files",{params:{folder_path:s}})).data,yt=async s=>(await oe.value.post("/delete_files",{file_paths:s})).data,Se=async(s,i)=>(await oe.value.post("/move_files",{file_paths:s,dest:i})).data;var xe={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(s,i){(function(a,r){s.exports=r})(Ae,function(){var a={};a.version="0.3.5";var r=a.settings={minimum:.08,easing:"linear",positionUsing:"",speed:200,trickle:!0,trickleSpeed:200,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};a.configure=function(t){var e,n;for(e in t)n=t[e],n!==void 0&&t.hasOwnProperty(e)&&(r[e]=n);return this},a.status=null,a.set=function(t){var e=a.isStarted();t=c(t,r.minimum,1),a.status=t===1?null:t;var n=a.render(!e),l=n.querySelector(r.barSelector),g=r.speed,h=r.easing;return n.offsetWidth,w(function(d){r.positionUsing===""&&(r.positionUsing=a.getPositioningCSS()),M(l,f(t,g,h)),t===1?(M(n,{transition:"none",opacity:1}),n.offsetWidth,setTimeout(function(){M(n,{transition:"all "+g+"ms linear",opacity:0}),setTimeout(function(){a.remove(),d()},g)},g)):setTimeout(d,g)}),this},a.isStarted=function(){return typeof a.status=="number"},a.start=function(){a.status||a.set(0);var t=function(){setTimeout(function(){a.status&&(a.trickle(),t())},r.trickleSpeed)};return r.trickle&&t(),this},a.done=function(t){return!t&&!a.status?this:a.inc(.3+.5*Math.random()).set(1)},a.inc=function(t){var e=a.status;return e?e>1?void 0:(typeof t!="number"&&(e>=0&&e<.2?t=.1:e>=.2&&e<.5?t=.04:e>=.5&&e<.8?t=.02:e>=.8&&e<.99?t=.005:t=0),e=c(e+t,0,.994),a.set(e)):a.start()},a.trickle=function(){return a.inc()},function(){var t=0,e=0;a.promise=function(n){return!n||n.state()==="resolved"?this:(e===0&&a.start(),t++,e++,n.always(function(){e--,e===0?(t=0,a.done()):a.set((t-e)/t)}),this)}}(),a.getElement=function(){var t=a.getParent();if(t){var e=Array.prototype.slice.call(t.querySelectorAll(".nprogress")).filter(function(n){return n.parentElement===t});if(e.length>0)return e[0]}return null},a.getParent=function(){if(r.parent instanceof HTMLElement)return r.parent;if(typeof r.parent=="string")return document.querySelector(r.parent)},a.render=function(t){if(a.isRendered())return a.getElement();E(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.className="nprogress",e.innerHTML=r.template;var n=e.querySelector(r.barSelector),l=t?"-100":p(a.status||0),g=a.getParent(),h;return M(n,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),r.showSpinner||(h=e.querySelector(r.spinnerSelector),h&&L(h)),g!=document.body&&E(g,"nprogress-custom-parent"),g.appendChild(e),e},a.remove=function(){a.status=null,I(document.documentElement,"nprogress-busy"),I(a.getParent(),"nprogress-custom-parent");var t=a.getElement();t&&L(t)},a.isRendered=function(){return!!a.getElement()},a.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};function c(t,e,n){return t<e?e:t>n?n:t}function p(t){return(-1+t)*100}function f(t,e,n){var l;return r.positionUsing==="translate3d"?l={transform:"translate3d("+p(t)+"%,0,0)"}:r.positionUsing==="translate"?l={transform:"translate("+p(t)+"%,0)"}:l={"margin-left":p(t)+"%"},l.transition="all "+e+"ms "+n,l}var w=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),t.length==1&&e()}}(),M=function(){var t=["Webkit","O","Moz","ms"],e={};function n(d){return d.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(y,S){return S.toUpperCase()})}function l(d){var y=document.body.style;if(d in y)return d;for(var S=t.length,x=d.charAt(0).toUpperCase()+d.slice(1),F;S--;)if(F=t[S]+x,F in y)return F;return d}function g(d){return d=n(d),e[d]||(e[d]=l(d))}function h(d,y,S){y=g(y),d.style[y]=S}return function(d,y){var S=arguments,x,F;if(S.length==2)for(x in y)F=y[x],F!==void 0&&y.hasOwnProperty(x)&&h(d,x,F);else h(d,S[1],S[2])}}();function T(t,e){var n=typeof t=="string"?t:P(t);return n.indexOf(" "+e+" ")>=0}function E(t,e){var n=P(t),l=n+e;T(n,e)||(t.className=l.substring(1))}function I(t,e){var n=P(t),l;T(t,e)&&(l=n.replace(" "+e+" "," "),t.className=l.substring(1,l.length-1))}function P(t){return(" "+(t&&t.className||"")+" ").replace(/\s+/gi," ")}function L(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return a})})(xe);var bt=xe.exports;const kt=ze(bt),te=new Map,k=qe(),he=Re(),me=new BroadcastChannel("iib-image-transfer-bus"),{eventEmitter:Z,useEventListen:ie}=ye(),{useHookShareState:W}=pt((s,{images:i})=>{const a=_({tabIdx:-1,paneIdx:-1}),r=U(()=>G(c.value)),c=_([]),p=U(()=>{var e;return c.value.map(n=>n.curr).slice((e=k.conf)!=null&&e.is_win?1:0)}),f=U(()=>le(...p.value)),w=_(k.defaultSortingMethod),M=U(()=>{var h;if(i.value)return i.value;if(!r.value)return[];const e=((h=r.value)==null?void 0:h.files)??[],n=w.value,{walkFiles:l}=r.value,g=d=>k.onlyFoldersAndImages?d.filter(y=>y.type==="dir"||R(y.name)):d;return a.value.walkModePath?l?l.map(d=>H(g(d),n)).flat():H(g(e),n):H(g(e),n)}),T=_([]),E=_(-1),I=_(!0),P=_(!1),L=_(!1),t=()=>k.tabList[a.value.tabIdx].panes[a.value.paneIdx];return{previewing:L,spinning:P,canLoadNext:I,multiSelectedIdxs:T,previewIdx:E,basePath:p,currLocation:f,currPage:r,stack:c,sortMethod:w,sortedFiles:M,scroller:_(),stackViewEl:_(),props:a,getPane:t,...ye()}},()=>({images:_()})),It=["detailList","largePreviewGrid","previewGrid"];function Pt(s,i){const{previewIdx:a,eventEmitter:r,canLoadNext:c,previewing:p}=W().toRefs(),{state:f}=W(),w=U(()=>(i==null?void 0:i.files.value)??f.sortedFiles),M=U(()=>(i==null?void 0:i.scroller.value)??f.scroller);let T=null;const E=(t,e)=>{var n;p.value=t,T!=null&&!t&&e&&((n=M.value)==null||n.scrollToItem(T),T=null)},I=()=>{s.walkModePath&&!L("next")&&c&&(z.info(C("loadingNextFolder")),r.value.emit("loadNextDir",!0))};K("keydown",t=>{var e;if(p.value){let n=a.value;if(["ArrowDown","ArrowRight"].includes(t.key))for(n++;w.value[n]&&!R(w.value[n].name);)n++;else if(["ArrowUp","ArrowLeft"].includes(t.key))for(n--;w.value[n]&&!R(w.value[n].name);)n--;if(R((e=w.value[n])==null?void 0:e.name)??""){a.value=n;const l=M.value;l&&!(n>=l.$_startIndex&&n<=l.$_endIndex)&&(T=n)}I()}});const P=t=>{var n;let e=a.value;if(t==="next")for(e++;w.value[e]&&!R(w.value[e].name);)e++;else if(t==="prev")for(e--;w.value[e]&&!R(w.value[e].name);)e--;if(R((n=w.value[e])==null?void 0:n.name)??""){a.value=e;const l=M.value;l&&!(e>=l.$_startIndex&&e<=l.$_endIndex)&&(T=e)}I()},L=t=>{var n;let e=a.value;if(t==="next")for(e++;w.value[e]&&!R(w.value[e].name);)e++;else if(t==="prev")for(e--;w.value[e]&&!R(w.value[e].name);)e--;return R((n=w.value[e])==null?void 0:n.name)??""};return ie("removeFiles",async()=>{var t;p.value&&!f.sortedFiles[a.value]&&(z.info(C("manualExitFullScreen"),5),await B(500),(t=document.querySelector(".ant-image-preview-operations-operation .anticon-close"))==null||t.click(),a.value=-1)}),{previewIdx:a,onPreviewVisibleChange:E,previewing:p,previewImgMove:P,canPreview:L}}function Ft(s){const i=_(),{scroller:a,stackViewEl:r,stack:c,currPage:p,currLocation:f,sortMethod:w,useEventListen:M,eventEmitter:T,getPane:E}=W().toRefs();ne(()=>c.value.length,se((o,u)=>{var m;o!==u&&((m=a.value)==null||m.scrollToItem(0))},300));const I=async o=>{if(await n(o),s.walkModePath){await B();const[u]=H(p.value.files,w.value).filter(m=>m.type==="dir");u&&await n(u.fullpath),await T.value.emit("loadNextDir")}};Ue(async()=>{var o;if(!c.value.length){const u=await j("/");c.value.push({files:u.files,curr:"/"})}i.value=new kt,i.value.configure({parent:r.value}),s.path&&s.path!=="/"?await I(s.walkModePath??s.path):(o=k.conf)!=null&&o.home&&n(k.conf.home)}),ne(f,se(o=>{const u=E.value();u.path=o;const m=u.path.split("/").pop(),D=(()=>{var A;if(!s.walkModePath){const O=Y(o);for(const[$,Q]of Object.entries(k.pathAliasMap))if(O.startsWith(Q))return O.replace(Q,$);return m}return"Walk: "+(((A=k.quickMovePaths.find(O=>O.dir===u.walkModePath))==null?void 0:A.zh)??m)})();u.name=q("div",{style:"display:flex;align-items:center"},[q(wt),q("span",{class:"line-clamp-1",style:"max-width: 256px"},D)]),u.nameFallbackStr=D,k.recent=k.recent.filter(A=>A.key!==u.key),k.recent.unshift({path:o,key:u.key}),k.recent.length>20&&(k.recent=k.recent.slice(0,20))},300));const P=()=>re(f.value),L=async o=>{var u,m;if(o.type==="dir")try{(u=i.value)==null||u.start();const{files:N}=await j(o.fullpath);c.value.push({files:N,curr:o.name})}finally{(m=i.value)==null||m.done()}},t=o=>{for(;o<c.value.length-1;)c.value.pop()},e=(o,u)=>(ae(k.conf,"global.conf load failed"),k.conf.is_win?o.toLowerCase()==u.toLowerCase():o==u),n=async o=>{var m,N;const u=c.value.slice();try{We(o)||(o=le(((m=k.conf)==null?void 0:m.sd_cwd)??"/",o));const D=ue(o),A=c.value.map(O=>O.curr);for(A.shift();A[0]&&D[0]&&e(A[0],D[0]);)A.shift(),D.shift();for(let O=0;O<A.length;O++)c.value.pop();if(!D.length)return l();for(const O of D){const $=(N=p.value)==null?void 0:N.files.find(Q=>e(Q.name,O));if(!$)throw console.error({frags:D,frag:O,stack:be(c.value)}),new Error(`${O} not found`);await L($)}}catch(D){throw z.error(C("moveFailedCheckPath")+(D instanceof Error?D.message:"")),console.error(o,ue(o),p.value),c.value=u,D}},l=fe(async()=>{var o,u,m;try{if((o=i.value)==null||o.start(),s.walkModePath)t(0),await I(s.walkModePath);else{const{files:N}=await j(c.value.length===1?"/":f.value);G(c.value).files=N}(u=a.value)==null||u.scrollToItem(0),z.success(C("refreshCompleted"))}finally{(m=i.value)==null||m.done()}});$e("returnToIIB",fe(async()=>{var o,u;if(!s.walkModePath)try{(o=i.value)==null||o.start();const{files:m}=await j(c.value.length===1?"/":f.value);G(c.value).files.map(D=>D.date).join()!==m.map(D=>D.date).join()&&(G(c.value).files=m,z.success(C("autoUpdate")))}finally{(u=i.value)==null||u.done()}})),M.value("refresh",l);const g=o=>{s.walkModePath&&(E.value().walkModePath=o),I(o)},h=U(()=>k.quickMovePaths.map(o=>({...o,path:Y(o.dir)}))),d=U(()=>{const o=Y(f.value);return h.value.find(m=>m.path===o)}),y=async()=>{const o=d.value;if(o){if(!o.can_delete)return;await nt(f.value),z.success(C("removeComplete"))}else await st(f.value),z.success(C("addComplete"));de.emit("searchIndexExpired"),de.emit("updateGlobalSetting")},S=_(!1),x=_(f.value),F=()=>{S.value=!0,x.value=f.value},v=async()=>{await n(x.value),S.value=!1};return K("click",()=>{S.value=!1}),{locInputValue:x,isLocationEditing:S,onLocEditEnter:v,onEditBtnClick:F,addToSearchScanPathAndQuickMove:y,searchPathInfo:d,refresh:l,copyLocation:P,back:t,openNext:L,currPage:p,currLocation:f,to:n,stack:c,scroller:a,share:()=>{const o=parent.location,u=o.href.substring(0,o.href.length-o.search.length),m=new URLSearchParams(o.search);m.set("action","open"),m.set("path",f.value);const N=`${u}?${m.toString()}`;re(N,C("copyLocationUrlSuccessMsg"))},quickMoveTo:g}}function Mt(s){const{scroller:i,sortedFiles:a,stack:r,sortMethod:c,currLocation:p,currPage:f,stackViewEl:w,canLoadNext:M,previewIdx:T}=W().toRefs(),{state:E}=W(),I=_(!1),P=_(k.defaultViewMode),L=272,t=64,e=L*2,{width:n}=Ge(w),l=U(()=>{const x=n.value;if(!(P.value==="detailList"||!x))return~~(x/(P.value==="previewGrid"?L:e))}),g=U(()=>{const x=P.value;if(x==="detailList")return{first:80,second:void 0};const F=x==="previewGrid"?L:e;return{first:F+t,second:F}}),h=_(!1),d=async()=>{var x;if(!(h.value||!s.walkModePath||!M.value))try{h.value=!0;const F=r.value[r.value.length-2],v=H(F.files,c.value),b=v.findIndex(o=>{var u;return o.name===((u=f.value)==null?void 0:u.curr)});if(b!==-1){const o=v[b+1],u=le(p.value,"../",o.name),m=await j(u),N=f.value;N.curr=o.name,N.walkFiles||(N.walkFiles=[N.files]),N.walkFiles.push(m.files),console.log("curr page files length",(x=f.value)==null?void 0:x.files.length)}}catch(F){console.error("loadNextDir",F),M.value=!1}finally{h.value=!1}},y=async(x=!1)=>{const F=i.value,v=()=>x?T.value:(F==null?void 0:F.$_endIndex)??0;for(;!a.value.length||v()>a.value.length-20&&M.value;)await B(100),await d()};E.useEventListen("loadNextDir",y);const S=se(()=>y(),300);return{gridItems:l,sortedFiles:a,sortMethodConv:Ve,moreActionsDropdownShow:I,viewMode:P,gridSize:L,sortMethod:c,largeGridSize:e,onScroll:S,loadNextDir:d,loadNextDirLoading:h,canLoadNext:M,itemSize:g}}const Ie=()=>q("p",{style:{background:"var(--zp-secondary-background)",padding:"8px",borderLeft:"4px solid var(--primary-color)"}},`Tips: ${C("multiSelectTips")}`);function Et(){const{currLocation:s,sortedFiles:i,currPage:a,multiSelectedIdxs:r,eventEmitter:c}=W().toRefs(),p=()=>{r.value=[]};return K("click",p),K("blur",p),ne(a,p),{onFileDragStart:(T,E)=>{const I=be(i.value[E]);he.fileDragging=!0,console.log("onFileDragStart set drag file ",T,E,I);const P=[I];let L=I.type==="dir";if(r.value.includes(E)){const e=r.value.map(n=>i.value[n]);P.push(...e),L=e.some(n=>n.type==="dir")}const t={includeDir:L,loc:s.value||"search-result",path:pe(P,"fullpath").map(e=>e.fullpath),nodes:pe(P,"fullpath"),__id:"FileTransferData"};T.dataTransfer.setData("text/plain",JSON.stringify(t))},onDrop:async T=>{var I;const E=JSON.parse(((I=T.dataTransfer)==null?void 0:I.getData("text"))??"{}");if(Be(E)){const P=s.value;if(E.loc===P)return;const L=q("div",[q("div",`${C("moveSelectedFilesTo")}${P}`),q("ol",E.path.map(t=>t.split(/[/\\]/).pop()).map(t=>q("li",t))),Ie()]);ke.confirm({title:C("confirm")+"?",content:L,maskClosable:!0,async onOk(){await Se(E.path,P),Z.emit("removeFiles",{paths:E.path,loc:E.loc}),await c.value.emit("refresh")}})}},multiSelectedIdxs:r,onFileDragEnd:()=>{he.fileDragging=!1}}}function Tt(s,{openNext:i}){const a=_(!1),r=_(""),{sortedFiles:c,previewIdx:p,multiSelectedIdxs:f,stack:w,currLocation:M,spinning:T,previewing:E}=W().toRefs(),I=Y;ie("removeFiles",({paths:e,loc:n})=>{if(I(n)!==I(M.value))return;const l=G(w.value);l&&(l.files=l.files.filter(g=>!e.includes(g.fullpath)),l.walkFiles&&(l.walkFiles=l.walkFiles.map(g=>g.filter(h=>!e.includes(h.fullpath)))))}),ie("addFiles",({files:e,loc:n})=>{if(I(n)!==I(M.value))return;const l=G(w.value);l&&l.files.unshift(...e)});const P=je(),L=async(e,n,l)=>{p.value=l,k.fullscreenPreviewInitialUrl=V(n);const g=f.value.indexOf(l);if(e.shiftKey){if(g!==-1)f.value.splice(g,1);else{f.value.push(l),f.value.sort((y,S)=>y-S);const h=f.value[0],d=f.value[f.value.length-1];f.value=vt(h,d+1)}e.stopPropagation()}else e.ctrlKey||e.metaKey?(g!==-1?f.value.splice(g,1):f.value.push(l),e.stopPropagation()):await i(n)},t=async(e,n,l)=>{var S,x,F;const g=V(n),h=M.value,d=()=>{let v=[];return f.value.includes(l)?v=f.value.map(b=>c.value[b]):v.push(n),v},y=async v=>{if(!T.value)try{T.value=!0,await Ye(n.fullpath),me.postMessage("iib_hidden_img_update_trigger");const b=setTimeout(()=>Ze.warn({message:C("long_loading"),duration:20}),5e3);await et(),clearTimeout(b),me.postMessage(`iib_hidden_tab_${v}`)}catch(b){console.error(b),z.error("发送图像失败，请携带console的错误消息找开发者")}finally{T.value=!1}};if(`${e.key}`.startsWith("toggle-tag-")){const v=+`${e.key}`.split("toggle-tag-")[1],{is_remove:b}=await rt({tag_id:v,img_path:n.fullpath}),o=(x=(S=k.conf)==null?void 0:S.all_custom_tags.find(u=>u.id===v))==null?void 0:x.name;z.success(C(b?"removedTagFromImage":"addedTagToImage",{tag:o}));return}switch(e.key){case"previewInNewWindow":return window.open(g);case"download":return window.open(V(n,!0));case"copyPreviewUrl":return re(parent.document.location.origin+g);case"send2txt2img":return y("txt2img");case"send2img2img":return y("img2img");case"send2inpaint":return y("inpaint");case"send2extras":return y("extras");case"send2savedDir":{const v=k.quickMovePaths.find(u=>u.key==="outdir_save");if(!v)return z.error(C("unknownSavedDir"));const b=Xe(v.dir,(F=k.conf)==null?void 0:F.sd_cwd),o=d();await Se(o.map(u=>u.fullpath),b),Z.emit("removeFiles",{paths:o.map(u=>u.fullpath),loc:M.value}),Z.emit("addFiles",{files:o,loc:b});break}case"send2controlnet-img2img":case"send2controlnet-txt2img":{const v=Je(),b=tt(),o=e.key.split("-")[1];o==="img2img"?b.switch_to_img2img():b.switch_to_txt2img(),await B(100);const m=v.querySelector(`#${o}_controlnet`).querySelector(".label-wrap");m.className.includes("open")||(m.click(),await B(100)),m.scrollIntoView();const D=await(await fetch(V(n))).blob(),A=new File([D],"image.jpg",{type:D.type,lastModified:Date.now()}),O=new DataTransfer;O.items.add(A);const $=new ClipboardEvent("paste",{clipboardData:O,bubbles:!0});m.dispatchEvent($);break}case"openWithWalkMode":{te.set(h,w.value);const v=k.tabList[s.tabIdx],b={type:"local",key:J(),path:n.fullpath,name:C("local"),stackKey:h,walkModePath:n.fullpath};v.panes.push(b),v.key=b.key;break}case"openInNewTab":{te.set(h,w.value);const v=k.tabList[s.tabIdx],b={type:"local",key:J(),path:n.fullpath,name:C("local"),stackKey:h};v.panes.push(b),v.key=b.key;break}case"openOnTheRight":{te.set(h,w.value);let v=k.tabList[s.tabIdx+1];v||(v={panes:[],key:"",id:J()},k.tabList[s.tabIdx+1]=v);const b={type:"local",key:J(),path:n.fullpath,name:C("local"),stackKey:h};v.panes.push(b),v.key=b.key;break}case"viewGenInfo":{a.value=!0,r.value=await P.pushAction(()=>Qe(n.fullpath)).res;break}case"openWithLocalFileBrowser":{await Ke(n.fullpath);break}case"deleteFiles":{const v=d();await new Promise(b=>{ke.confirm({title:C("confirmDelete"),maskClosable:!0,content:q("div",[q("ol",{style:"max-height:50vh;overflow:auto;"},v.map(o=>o.fullpath.split(/[/\\]/).pop()).map(o=>q("li",o))),Ie()]),async onOk(){const o=v.map(u=>u.fullpath);await yt(o),z.success(C("deleteSuccess")),Z.emit("removeFiles",{paths:o,loc:M.value}),b()}})});break}}return{}};return K("keydown",e=>{var n,l,g;if(E.value){const h=[];if(e.shiftKey&&h.push("Shift"),e.ctrlKey&&h.push("Ctrl"),e.code.startsWith("Key")||e.code.startsWith("Digit")){h.push(e.code);const d=h.join(" + "),y=(n=Object.entries(k.shortcut).find(S=>S[1]===d))==null?void 0:n[0];if(y){e.stopPropagation(),e.preventDefault();const S=p.value,x=c.value[S];switch(y){case"delete":return V(x)===k.fullscreenPreviewInitialUrl?z.warn(C("fullscreenRestriction")):t({key:"deleteFiles"},x,S);default:{const F=(l=/^toggle_tag_(.*)$/.exec(y))==null?void 0:l[1],v=(g=k.conf)==null?void 0:g.all_custom_tags.find(b=>b.name===F);return v?t({key:`toggle-tag-${v.id}`},x,S):void 0}}}}}}),{onFileItemClick:L,onContextMenuClick:t,showGenInfo:a,imageGenInfo:r,q:P}}const Lt=()=>{const{stackViewEl:s}=W().toRefs(),i=_(-1);return He(s,a=>{var c;let r=a.target;for(;r.parentElement;)if(r=r.parentElement,r.tagName.toLowerCase()==="li"&&r.classList.contains("file-item-trigger")){const p=(c=r.dataset)==null?void 0:c.idx;p&&Number.isSafeInteger(+p)&&(i.value=+p);return}}),{showMenuIdx:i}};export{Ft as a,Mt as b,Et as c,Tt as d,Pt as e,Lt as f,ie as g,K as h,G as l,te as s,ee as t,W as u,It as v};
