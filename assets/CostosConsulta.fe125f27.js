import{M as r}from"./MazBtn-000f9f66.1d4b1829.js";import{u as c,r as l,v as i,x as d,c as m,b as u,f as p,w as _,y as f,o as h,g}from"./entry.4c593aaa.js";import{I as b}from"./mermaid.e29312f9.js";const v={class:"bg-slate-400"},x=f('<div class="container p-4"><h1 style="color:black;font-family:Verdana;font-size:36px;"><b>Costos - Consulta (Entrada de vehículos)</b></h1><div class="w-3/4 bg-gradienttwo rounded-lg"><h2 style="color:white;font-family:Verdana;font-size:36px;" class="mt-8"> Ingresa el tiempo o el costo: </h2></div></div><div id="tabla" class="mt-4 mx-5"></div>',2),C={class:"container p-8"},k={__name:"CostosConsulta",setup(V){c(),l("");let e=JSON.parse(localStorage.getItem("costosEVehiculos"));i(()=>{e?e=e.map(t=>[t.tiempoEstancia,t.precio]):e=[];let a=document.getElementById("tabla");a.innerHTML="",new b({columns:["Tiempo de estancia","Precio"],data:e,search:!0,language:{search:{placeholder:"Buscar"}}}).render(a)});const o=d();function s(){o.push({name:"index"})}return(a,t)=>{const n=r;return h(),m("section",v,[x,u("div",C,[p(n,{rounded:"",class:"mt-6 w-40",color:"black",pastel:"",onClick:s},{default:_(()=>[g("Cerrar ventana")]),_:1})])])}}};export{k as default};
