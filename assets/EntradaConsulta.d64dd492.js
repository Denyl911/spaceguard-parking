import{M as r}from"./MazBtn-000f9f66.b425f858.js";import{u as c,r as l,v as d,x as i,c as u,b as m,f as p,w as f,y as h,o as _,g}from"./entry.55f2f3a7.js";import{I as b}from"./mermaid.d6c61c54.js";const v={class:"bg-slate-400"},w=h('<div class="container p-4"><h1 style="color:black;font-family:Verdana;font-size:36px;"><b>Entrada de Vehículos - Consulta</b></h1><div class="w-3/4 bg-gradienttwo rounded-lg shadow-md"><h2 style="color:white;font-family:Verdana;font-size:36px;" class="mt-8">Ingresa una placa:</h2></div></div><div id="tabla" class="mt-4"></div>',2),x={class:"container p-8"},k={__name:"EntradaConsulta",setup(V){c(),l("");let a=JSON.parse(localStorage.getItem("entrada"));d(()=>{a?a=a.map(e=>[e.placa,e.lugDisp,e.fecha,e.hora,{resaltar:!1}]):a=[];let t=document.getElementById("tabla");new b({columns:["Placa","Lugar asignado","Fecha","Hora"],data:a,search:{}}).render(t)});const s=i();function o(){s.push({name:"index"})}return(t,e)=>{const n=r;return _(),u("section",v,[w,m("div",x,[p(n,{rounded:"",class:"mt-6 w-40",color:"black",pastel:"",onClick:o},{default:f(()=>[g("Cerrar ventana")]),_:1})])])}}};export{k as default};
