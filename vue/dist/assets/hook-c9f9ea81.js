import{Z as l,bA as y,be as q}from"./index-37f53eea.js";import{u as D,b as E,f as P,c as z,d as A,e as G,g as Q}from"./hook-cea1cfb9.js";const H=()=>{const e=l(),c=y(),o=l(),t={tabIdx:-1,target:"local",paneIdx:-1,walkMode:!1},{stackViewEl:r,multiSelectedIdxs:u,stack:m}=D({images:e}).toRefs(),{itemSize:f,gridItems:v}=E(t),{showMenuIdx:p}=P(),{onFileDragStart:I,onFileDragEnd:d}=z(),{showGenInfo:g,imageGenInfo:w,q:x,onContextMenuClick:i,onFileItemClick:k}=A(t,{openNext:q}),{previewIdx:F,previewing:M,onPreviewVisibleChange:b,previewImgMove:h,canPreview:C}=G(t,{scroller:o,files:e}),S=async(n,s,a)=>{m.value=[{curr:"",files:e.value}],await i(n,s,a)};return Q("removeFiles",async({paths:n})=>{var s;e.value=(s=e.value)==null?void 0:s.filter(a=>!n.includes(a.fullpath))}),{scroller:o,queue:c,images:e,onContextMenuClickU:S,stackViewEl:r,previewIdx:F,previewing:M,onPreviewVisibleChange:b,previewImgMove:h,canPreview:C,itemSize:f,gridItems:v,showGenInfo:g,imageGenInfo:w,q:x,onContextMenuClick:i,onFileItemClick:k,showMenuIdx:p,multiSelectedIdxs:u,onFileDragStart:I,onFileDragEnd:d}};export{H as u};