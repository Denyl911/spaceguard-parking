import{G as n,I as r}from"./mermaid.e29312f9.js";import{v as s,c,o as i,b as a}from"./entry.8ce994ef.js";const d={class:"bg-slate-400"},l=a("div",{class:"container p-4"},[a("h1",{style:{color:"black","font-family":"Verdana","font-size":"36px"}},[a("b",null,"Inventario - Consulta")])],-1),m=a("div",{id:"tabla",class:"mt-8 mx-5"},null,-1),u=[l,m],b={__name:"InventarioConsulta",setup(p){return s(()=>{let o=JSON.parse(localStorage.getItem("inventario"));o?o=o.map(e=>[e.id,e.proveedor,e.nombre,e.descripcion,e.ppp,e.stock,n(`<image src="${e.imagen}" />`)]):o=[];let t=document.getElementById("tabla");t.innerHTML="",new r({columns:["ID Producto","Proveedor","Nombre","Descripcion","Precio por unidad","Stock","Imagen"],data:o,search:!0,language:{noRecordsFound:"Busqueda no encontrada",search:{placeholder:"Buscar"}}}).render(t)}),(o,t)=>(i(),c("section",d,u))}};export{b as default};
