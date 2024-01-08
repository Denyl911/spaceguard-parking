import{M as U}from"./MazBtn-000f9f66.1d4b1829.js";import{M as $}from"./MazDialog-d5f6a7d8.0c44c412.js";import{u as E,r as d,v as k,l as x,x as F,c as Z,b as l,E as M,w as a,B as t,f as r,F as R,C as H,G as J,o as D,g as i,t as c}from"./entry.4c593aaa.js";import{M as K}from"./MazInput-8e284503.fe76a03e.js";/* empty css                 */const O={class:"bg-slate-400"},P={class:"container p-4"},G=l("h1",{style:{color:"black","font-family":"Verdana","font-size":"36px"}},[l("b",null,"Entrada de Vehículos - Registro")],-1),Y={class:"w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md"},j=l("h2",{style:{color:"white","font-family":"Verdana","font-size":"36px"},class:"mt-8"}," Datos del vehículo: ",-1),q=l("p",null,"¿Deseas agregar un nuevo servicio adicional?",-1),Q=l("p",null,"Costo: $10 por hora",-1),re={__name:"EntradaRegistro",setup(W){const m=E();let e=d(""),s=d(20),S=d(new Date().toLocaleTimeString()),p=d(new Date().toLocaleDateString());const f=d(!1),v=d(!1),y=d(""),V=()=>{S.value=new Date().toLocaleTimeString()};k(()=>{setInterval(V,1e3)}),x(()=>{clearInterval(V)});const A=()=>{p.value=new Date().toLocaleDateString()};k(()=>{setInterval(A,1e3)}),x(()=>{clearInterval(A)}),k(()=>{const g=localStorage.getItem("lugDisp");g!==null&&(s.value=parseInt(g))});const I=F();function z(){e.value?I.push({name:"Servicios_Add-Servicios_Registro"}):m.error("No hay carro para asignarle un servicio",{position:"bottom",timeout:3e3})}function w(){let g=!1,n=!1;if(!e.value)m.error("Ingresa una placa",{position:"bottom",timeout:3e3});else{const o=/^[A-Z]{3}\d{3}[A-Z]$/,_=/^([A-Z]{3}-\d{3}-[A-Z])$/;if(o.test(e.value)?(e.value=`${e.value.slice(0,3)}-${e.value.slice(3,6)}-${e.value.slice(6)}`,g=!0):_.test(e.value)&&(n=!0),(JSON.parse(localStorage.getItem("entrada"))||[]).some(b=>b.placa===e.value))m.error("Ya existe un registro para esta placa",{position:"bottom",timeout:3e3});else if(g||n){const b={placa:e.value,lugDisp:s.value,fecha:p.value,hora:S.value};let h=JSON.parse(localStorage.getItem("entrada"));h?h.push(b):h=[b],localStorage.setItem("entrada",JSON.stringify(h)),m.success("Registro éxitoso",{position:"bottom",timeout:3e3}),s.value--,localStorage.setItem("lugDisp",s.value),f.value=!0}else m.error("Placa no válida. Ingresa una placa en formato AAA999B",{position:"bottom",timeout:3e3})}}const B=()=>{I.push({name:"Servicios_Add-Servicios_Registro",route:{placa:e}}),C()},C=()=>{f.value=!1};function L(){e.value?(y.value=new Date().toLocaleTimeString(),v.value=!0):m.error("No hay información para mostrar en el ticket",{position:"bottom",timeout:3e3})}function N(){v.value=!1}const T=()=>{e.value=e.value.toUpperCase()};return(g,n)=>{const o=U,_=$;return D(),Z("section",O,[l("div",P,[G,(D(),M(o,{key:t(s),class:"mt-8 mb-5 mr-3",color:"black"},{default:a(()=>[i("Lugares disponibles: "+c(t(s)),1)]),_:1})),r(o,{class:"mt-8 mb-5 mr-3",style:R({backgroundColor:"rgba(0, 0, 0, 0.5)"})},{default:a(()=>[i("Hora actual: "+c(t(S)),1)]),_:1},8,["style"]),r(o,{class:"mt-8 mb-5 mr-3",style:R({backgroundColor:"rgba(0, 0, 0, 0.5)"})},{default:a(()=>[i("Fecha actual: "+c(t(p)),1)]),_:1},8,["style"]),(D(),M(o,{key:t(s),class:"mt-8",color:"secondary"},{default:a(()=>[i("Lugar a asignar: "+c(t(s)),1)]),_:1})),l("div",Y,[j,r(t(K),{class:"mb-1",modelValue:t(e),"onUpdate:modelValue":n[0]||(n[0]=u=>H(e)?e.value=u:e=u),onInput:T,onKeyup:J(w,["enter"]),label:"Placa",disabled:t(s)===0},null,8,["modelValue","onKeyup","disabled"])]),r(o,{rounded:"",class:"mt-6 w-52 mr-32",color:"info",onClick:w},{default:a(()=>[i("Registrar")]),_:1}),r(o,{rounded:"",class:"mt-6 mr-3",color:"warning",onClick:z},{default:a(()=>[i("Servicio adicional")]),_:1}),r(o,{rounded:"",class:"mt-6",color:"warning",onClick:L},{default:a(()=>[i("Imprimir ticket")]),_:1}),r(_,{modelValue:f.value,"onUpdate:modelValue":n[1]||(n[1]=u=>f.value=u),title:"Agregar Servicio Adicional"},{footer:a(()=>[r(o,{onClick:B,color:"success"},{default:a(()=>[i(" Sí ")]),_:1}),r(o,{onClick:C,color:"error"},{default:a(()=>[i(" No ")]),_:1})]),default:a(()=>[q]),_:1},8,["modelValue"])]),l("div",null,[r(_,{modelValue:v.value,"onUpdate:modelValue":n[2]||(n[2]=u=>v.value=u),title:"Detalle del Ticket"},{footer:a(()=>[r(o,{onClick:N,color:"success"},{default:a(()=>[i("Cerrar")]),_:1})]),default:a(()=>[l("p",null,"Placa: "+c(t(e)),1),l("p",null,"Hora: "+c(y.value),1),l("p",null,"Fecha: "+c(t(p)),1),l("p",null,"Lugar asignado: "+c(t(s)+1),1),Q]),_:1},8,["modelValue"])])])}}};export{re as default};