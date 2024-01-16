import{M as N}from"./MazBtn-000f9f66.6fed24bc.js";import{e as A,u as D,r as s,D as R,v as T,c as P,b as l,f as n,B as t,C as d,w as I,E as F,z as J,A as O,o as U,g as M,p as G,a as L}from"./entry.20fd3aae.js";import{M as b}from"./MazInput-8e284503.0fb23997.js";/* empty css                 */const i=g=>(G("data-v-f7d700b5"),g=g(),L(),g),j={class:"bg-slate-400"},q={class:"container p-4"},H=i(()=>l("h1",{style:{color:"black","font-family":"Verdana","font-size":"36px"}},[l("b",null,"Vehículos pensionados - Modificación")],-1)),K={class:"w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md"},Q=i(()=>l("h3",{class:"mt-8"},"Datos del vehiculo:",-1)),W=i(()=>l("h4",{style:{color:"white","font-family":"Verdana","font-size":"18px"},class:"mt-8"}," Foto: ",-1)),X={class:"mb-4"},Y=["src"],Z={class:"bg-slate-400 mt-2"},$=i(()=>l("label",{for:"tiempoEstancia"},[M("Tiempo de estancia: "),l("br")],-1)),ee=i(()=>l("option",{value:"1 semana"},"1 semana",-1)),oe=i(()=>l("option",{value:"1 mes"},"1 mes",-1)),ae=i(()=>l("option",{value:"6 meses"},"6 meses",-1)),le=i(()=>l("option",{value:"1 año"},"1 año",-1)),te=[ee,oe,ae,le],se={__name:"PensionadosModificacion",setup(g){const k=D();let u=s(""),w=s(""),C=s(""),x=s(""),y=s(""),c=s(""),r=s(""),V=s(""),m=s(""),p=s(""),v=s(""),_=s("");s(""),s("");let h=[];const z=R();T(()=>{h=JSON.parse(localStorage.getItem("pensionados"))});const E=()=>{const a=h.find(e=>e.placa==u.value);a?(w.value=a.nombre,C.value=a.telefono,x.value=a.emergencia,y.value=a.status,c.value=a.modelo,r.value=a.marca,V.value=a.foto,m.value=a.color,p.value=a.ano,v.value=a.placa,_.value=a.tiempoEstancia):k.error("Placa no encontrada",{position:"bottom",timeout:3e3})},S=()=>{const a=h.findIndex(e=>e.placa==u.value);h[a]={nombre:w.value,telefono:C.value,emergencia:x.value,status:y.value,modelo:c.value,marca:r.value,foto:V.value||null,color:m.value,ano:p.value,placa:v.value,tiempoEstancia:_.value},localStorage.setItem("pensionados",JSON.stringify(h)),z.push({name:"Pensionados-PensionadosConsulta"})},B=a=>{const e=a.target.files[0];if(e){const f=new FileReader;f.onload=()=>{V.value=f.result},f.readAsDataURL(e)}};return(a,e)=>{const f=N;return U(),P("section",j,[l("div",q,[H,n(t(b),{class:"mt-8",modelValue:t(u),"onUpdate:modelValue":e[0]||(e[0]=o=>d(u)?u.value=o:u=o),label:"Placa del vehiculo"},null,8,["modelValue"]),n(f,{class:"mt-2 mb-5",color:"black",onClick:E},{default:I(()=>[M("Buscar datos")]),_:1}),l("div",K,[Q,n(t(b),{class:"mb-1",modelValue:t(c),"onUpdate:modelValue":e[1]||(e[1]=o=>d(c)?c.value=o:c=o),label:"Modelo"},null,8,["modelValue"]),n(t(b),{class:"mb-1",modelValue:t(r),"onUpdate:modelValue":e[2]||(e[2]=o=>d(r)?r.value=o:r=o),label:"Marca"},null,8,["modelValue"]),W,l("div",X,[l("input",{type:"file",onChange:B,accept:"image/*"},null,32),t(V)?(U(),P("img",{key:0,src:t(V),alt:"Preview",class:"uploaded-image"},null,8,Y)):F("",!0)]),n(t(b),{class:"mb-1",modelValue:t(m),"onUpdate:modelValue":e[3]||(e[3]=o=>d(m)?m.value=o:m=o),label:"Color"},null,8,["modelValue"]),n(t(b),{class:"mb-1",modelValue:t(p),"onUpdate:modelValue":e[4]||(e[4]=o=>d(p)?p.value=o:p=o),label:"Año"},null,8,["modelValue"]),n(t(b),{modelValue:t(v),"onUpdate:modelValue":e[5]||(e[5]=o=>d(v)?v.value=o:v=o),label:"Placa"},null,8,["modelValue"]),l("section",Z,[$,J(l("select",{"onUpdate:modelValue":e[6]||(e[6]=o=>d(_)?_.value=o:_=o),style:{width:"35rem",height:"40px"}},te,512),[[O,t(_)]])])]),n(f,{rounded:"",class:"mt-6 w-80",color:"black",pastel:"",onClick:S},{default:I(()=>[M("Guardar y actualizar")]),_:1})])])}}},ce=A(se,[["__scopeId","data-v-f7d700b5"]]);export{ce as default};