import{I as s}from"./mermaid.e29312f9.js";import{v as n,c,o as l,b as t}from"./entry.20fd3aae.js";const r={class:"bg-slate-400"},i=t("div",{class:"container p-4"},[t("h1",{style:{color:"black","font-family":"Verdana","font-size":"36px"}},[t("b",null,"Notificaciones - Consulta")])],-1),d=t("div",{id:"tabla",class:"mt-8 mx-6"},null,-1),u=[i,d],f={__name:"Consulta",setup(m){return n(()=>{let e=JSON.parse(localStorage.getItem("notificaciones"));e?e=e.map(a=>[a.id,a.placa,a.titulo,a.mensaje]):e=[];let o=document.getElementById("tabla");o.innerHTML="",new s({columns:["ID","Placa del Cliente","Titulo","Mensaje"],data:e,search:!0,language:{noRecordsFound:"Busqueda no encontrada",search:{placeholder:"Buscar"}}}).render(o)}),(e,o)=>(l(),c("section",r,u))}};export{f as default};