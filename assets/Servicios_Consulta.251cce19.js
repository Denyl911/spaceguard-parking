import{M as u}from"./MazBtn-000f9f66.2ded299f.js";import{I as d}from"./mermaid.d6c61c54.js";import{M as p}from"./MazInput-8e284503.ce7797d8.js";import{u as f,r as _,v as b,c as g,b as t,f as i,y as c,z as v,w as x,o as I,g as B}from"./entry.a2c9f724.js";const M={class:"bg-slate-400"},V={class:"container p-4"},C=t("h1",{style:{color:"black","font-family":"Verdana","font-size":"36px"}},[t("b",null,"Servicios Adicionales - Consulta")],-1),D=t("div",{id:"tabla",class:"mt-8"},null,-1),y={__name:"Servicios_Consulta",setup(h){const s=f();let o=_(""),e=JSON.parse(localStorage.getItem("servicios"));b(()=>{e?e=e.map(a=>[a.id,a.nombre,a.descripcion,a.duracion,a.costo,a.materiales,a.empleado,a.placaDos]):e=[];let l=document.getElementById("tabla");new d({columns:["ID","Nombre","Descripcion","Duracion","Costo","Materiales","Empleado asignado","placa"],data:e}).render(l)});function r(){o.value?e.find(a=>a[7].placaDos.includes===o.value)?s.success("Placa existente",{position:"bottom",timeout:3e3}):s.error("La placa no existe",{position:"bottom",timeout:3e3}):s.error("Ingresa una placa",{position:"bottom",timeout:3e3})}return(l,a)=>{const m=u;return I(),g("section",M,[t("div",V,[C,i(c(p),{class:"mt-8",modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=n=>v(o)?o.value=n:o=n),label:"ID Promoción"},null,8,["modelValue"]),i(m,{class:"mt-2 mb-5",color:"black",onClick:r},{default:x(()=>[B("Consultar servicio asignado a la placa")]),_:1})]),D])}}};export{y as default};
