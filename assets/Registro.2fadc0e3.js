import{M}from"./MazInput-8e284503.fe76a03e.js";import{M as N}from"./MazBtn-000f9f66.1d4b1829.js";import{u as R,r as t,D as T,c as w,b as c,f as o,B as s,C as r,w as x,o as C,g as S}from"./entry.4c593aaa.js";/* empty css                 */const U={class:"bg-slate-400"},y={class:"container p-4"},z=c("h1",{style:{color:"black","font-family":"Verdana","font-size":"36px"}},[c("b",null,"Proveedores - Registro")],-1),B={class:"w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md"},D=c("h2",{style:{color:"white","font-family":"Verdana","font-size":"36px"},class:"mt-8"}," Datos del proveedor: ",-1),W={__name:"Registro",setup(k){const f=R();let u=t(""),d=t(""),n=t(""),m=t(""),i=t(""),p=t(""),b=t("");const v=T(),g=()=>{if(!u.value||!d.value||!n.value||!m.value||!i.value||!p.value||!b.value)f.error("Datos incompletos",{position:"bottom",timeout:3e3});else{const V={id:Math.floor(Math.random()*9e5)+1e5,Nombre:u.value,Direccion:d.value,Email:n.value,SitioWeb:m.value,Telefono:i.value,TipoProds:p.value,RFC:b.value};let l=JSON.parse(localStorage.getItem("proveedores"))||[];l.push(V),localStorage.setItem("proveedores",JSON.stringify(l)),v.push({name:"Proveedores-Consulta"})}};return(V,l)=>{const a=M,_=N;return C(),w("section",U,[c("div",y,[z,c("div",B,[D,o(a,{class:"mb-1",modelValue:s(u),"onUpdate:modelValue":l[0]||(l[0]=e=>r(u)?u.value=e:u=e),type:"text",label:"Nombre"},null,8,["modelValue"]),o(a,{class:"mb-1",modelValue:s(d),"onUpdate:modelValue":l[1]||(l[1]=e=>r(d)?d.value=e:d=e),label:"Direccion"},null,8,["modelValue"]),o(a,{class:"mb-1",modelValue:s(n),"onUpdate:modelValue":l[2]||(l[2]=e=>r(n)?n.value=e:n=e),label:"Email"},null,8,["modelValue"]),o(a,{class:"mb-1",modelValue:s(m),"onUpdate:modelValue":l[3]||(l[3]=e=>r(m)?m.value=e:m=e),label:"Sitio Web"},null,8,["modelValue"]),o(a,{class:"mb-1",modelValue:s(i),"onUpdate:modelValue":l[4]||(l[4]=e=>r(i)?i.value=e:i=e),label:"Teléfono"},null,8,["modelValue"]),o(a,{class:"mb-1",modelValue:s(p),"onUpdate:modelValue":l[5]||(l[5]=e=>r(p)?p.value=e:p=e),label:"Tipo de Productos"},null,8,["modelValue"]),o(a,{class:"mb-1",modelValue:s(b),"onUpdate:modelValue":l[6]||(l[6]=e=>r(b)?b.value=e:b=e),label:"RFC"},null,8,["modelValue"])]),o(_,{rounded:"",class:"mt-6 w-40",color:"black",pastel:"",onClick:g},{default:x(()=>[S("Registrar")]),_:1})])])}}};export{W as default};
