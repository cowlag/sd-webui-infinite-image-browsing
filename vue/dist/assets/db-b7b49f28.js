import{c6 as t}from"./index-1da1c976.js";const o=async()=>(await t.value.get("/db/basic_info")).data,c=async()=>(await t.value.get("/db/expired_dirs")).data,r=async()=>{await t.value.post("/db/update_image_data",{},{timeout:1/0})},d=async a=>(await t.value.post("/db/match_images_by_tags",a)).data,g=async a=>(await t.value.post("/db/add_custom_tag",a)).data,u=async a=>(await t.value.post("/db/toggle_custom_tag_to_img",a)).data,p=async a=>{await t.value.post("/db/remove_custom_tag",a)},i=async a=>(await t.value.get("/db/search_by_substr",{params:{substr:a}})).data,e="/db/scanned_paths",m=async a=>{await t.value.post(e,{path:a})},_=async a=>{await t.value.delete(e,{data:{path:a}})},b=async a=>(await t.value.post("/db/get_image_tags",{paths:a})).data;export{m as a,o as b,c,g as d,i as e,b as f,d as g,_ as h,p as r,u as t,r as u};