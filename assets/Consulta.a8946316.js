import{I as o}from"./mermaid.e29312f9.js";import{v as n,c,o as l,b as a}from"./entry.4c593aaa.js";const r={class:"bg-slate-400"},i=a("div",{class:"container p-4"},[a("h1",{style:{color:"black","font-family":"Verdana","font-size":"36px"}},[a("b",null,"Notificaciones - Consulta")])],-1),d=a("div",{id:"tabla",class:"mt-8 mx-6"},null,-1),u=[i,d],f={__name:"Consulta",setup(m){return n(()=>{let e=JSON.parse(localStorage.getItem("notificaciones"));e?e=e.map(t=>[t.id,t.placa,t.titulo,t.mensaje]):e=[];let s=document.getElementById("tabla");s.innerHTML="",new o({columns:["ID","Placa del Cliente","Titulo","Mensaje"],data:e,search:!0,language:{search:{placeholder:"Buscar"}}}).render(s)}),(e,s)=>(l(),c("section",r,u))}};export{f as default};
