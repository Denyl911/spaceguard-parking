import{I as t}from"./mermaid.e29312f9.js";/* empty css                 */import{u as r,r as n,v as c,c as i,o as l,b as s}from"./entry.8ce994ef.js";const d={class:"bg-slate-400"},u=s("div",{class:"container p-4"},[s("h1",{style:{color:"black","font-family":"Verdana","font-size":"36px"}},[s("b",null,"Servicios Adicionales - Consulta")])],-1),m=s("div",{id:"tabla",class:"mt-8 mx-5"},null,-1),p=[u,m],g={__name:"Servicios_Consulta",setup(_){r(),n("");let a=JSON.parse(localStorage.getItem("servicios"));return c(()=>{a?a=a.map(e=>[e.id,e.nombre,e.descripcion,e.duracion,e.costo,e.materiales,e.placaDos]):a=[];let o=document.getElementById("tabla");o.innerHTML="",new t({columns:["ID","Nombre","Descripción","Duración","Costo","Materiales","placa"],data:a,search:!0,language:{noRecordsFound:"Busqueda no encontrada",search:{placeholder:"Buscar"}}}).render(o)}),(o,e)=>(l(),i("section",d,p))}};export{g as default};
