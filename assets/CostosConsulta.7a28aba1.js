import{M as r}from"./MazBtn-000f9f66.9e9a6b71.js";import{u as c,r as l,v as i,x as d,c as m,b as p,f as u,w as _,y as f,o as h,g as b}from"./entry.c2d89f30.js";import{I as g}from"./mermaid.d6c61c54.js";const v={class:"bg-slate-400"},w=f('<div class="container p-4"><h1 style="color:black;font-family:Verdana;font-size:36px;"><b>Costos - Consulta (Entrada de vehiculos)</b></h1><div class="w-3/4 bg-gradienttwo rounded-lg shadow-md"><h2 style="color:white;font-family:Verdana;font-size:36px;" class="mt-8">Ingresa el tiempo o el costo:</h2></div></div><div id="tabla" class="mt-4"></div>',2),x={class:"container p-8"},I={__name:"CostosConsulta",setup(C){c(),l("");let e=JSON.parse(localStorage.getItem("costosEVehiculos"));i(()=>{e?e=e.map(a=>[a.tiempoEstancia,a.precio]):e=[];let t=document.getElementById("tabla");new g({columns:["Tiempo de estancia","Precio"],data:e,search:{placeholder:"Ingresa el tiempo o precio a buscar"}}).render(t)});const o=d();function s(){o.push({name:"index"})}return(t,a)=>{const n=r;return h(),m("section",v,[w,p("div",x,[u(n,{rounded:"",class:"mt-6 w-40",color:"black",pastel:"",onClick:s},{default:_(()=>[b("Cerrar ventana")]),_:1})])])}}};export{I as default};
