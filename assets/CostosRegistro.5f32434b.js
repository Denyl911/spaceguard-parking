import{M as h}from"./MazBtn-000f9f66.e22e0a93.js";import{u as g,r as c,x as v,c as b,b as e,A as x,B as V,y as l,z as p,f as u,w,o as R,g as E,C as M}from"./entry.544bcfbc.js";import{M as y}from"./MazInput-8e284503.dcda8100.js";const S={class:"bg-slate-400"},z={class:"container p-4"},B=e("h1",{style:{color:"black","font-family":"Verdana","font-size":"36px"}},[e("b",null,"Costos - Registro")],-1),C={class:"w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md"},N=e("h2",{style:{color:"white","font-family":"Verdana","font-size":"36px"},class:"mt-8"},"Datos de los costos:",-1),k={class:"bg-slate-400"},I=e("label",{for:"tiempoEstancia"},"Tiempo de estancia: ",-1),D=M('<option value="Menos de 1 hora">Menos de 1 hora</option><option value="1 hora">1 hora</option><option value="1 día">1 día</option><option value="1 semana">1 semana</option><option value="1 mes">1 mes</option>',5),T=[D],j={__name:"CostosRegistro",setup(J){const n=g();let t=c(""),o=c("");const d=v();function m(){if(!t.value)n.error("Elije el tiempo de estancia",{position:"bottom",timeout:3e3});else if(!o.value)n.error("Ingresa el precio",{position:"bottom",timeout:3e3});else{const r=`$${o.value}`,s={tiempoEstancia:t.value,precio:r};let i=JSON.parse(localStorage.getItem("costosEVehiculos"))||[];i.some(f=>f.tiempoEstancia===t.value)?n.error("Ya existe un registro para este tiempo de estancia",{position:"bottom",timeout:3e3}):(i.push(s),localStorage.setItem("costosEVehiculos",JSON.stringify(i)),n.success("Registro éxitoso",{position:"bottom",timeout:3e3}),d.push({name:"index"}))}}function _(){o.value=o.value.replace(/\D/g,"")}return(r,s)=>{const i=h;return R(),b("section",S,[e("div",z,[B,e("div",C,[N,e("section",k,[I,x(e("select",{"onUpdate:modelValue":s[0]||(s[0]=a=>p(t)?t.value=a:t=a),style:{width:"780px",height:"40px"}},T,512),[[V,l(t)]])]),u(l(y),{class:"mt-5",modelValue:l(o),"onUpdate:modelValue":s[1]||(s[1]=a=>p(o)?o.value=a:o=a),label:"Precio",onInput:_},null,8,["modelValue"])]),u(i,{rounded:"",class:"mt-6 w-40",color:"black",pastel:"",onClick:m},{default:w(()=>[E("Registrar")]),_:1})])])}}};export{j as default};