import{M as f}from"./MazBtn-000f9f66.6fed24bc.js";import{u as g,r as c,x as v,c as h,b as e,z as b,A as x,B as l,C as p,f as d,w,o as V,g as R,y as M}from"./entry.20fd3aae.js";import{M as y}from"./MazInput-8e284503.0fb23997.js";/* empty css                 */const S={class:"bg-slate-400"},z={class:"container p-4"},B=e("h1",{style:{color:"black","font-family":"Verdana","font-size":"36px"}},[e("b",null,"Costos para pensionados - Registro")],-1),C={class:"w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md"},E=e("h2",{style:{color:"white","font-family":"Verdana","font-size":"36px"},class:"mt-8"}," Datos de los costos: ",-1),N={class:"bg-slate-400"},I=e("label",{for:"tiempoEstancia"},"Tiempo de estancia: ",-1),P=M('<option value="1 semana">1 semana</option><option value="1 mes">1 mes</option><option value="2 meses">2 meses</option><option value="Medio año">Medio año</option><option value="1 año">1 año</option>',5),k=[P],j={__name:"CosRegistroPen",setup(D){const n=g();let t=c(""),o=c("");v();function m(){if(!t.value)n.error("Elije el tiempo de estancia",{position:"bottom",timeout:3e3});else if(!o.value)n.error("Ingresa el precio",{position:"bottom",timeout:3e3});else{const r=`$${o.value}`,s={tiempoEstancia:t.value,precio:r};let i=JSON.parse(localStorage.getItem("costosPensionados"))||[];i.some(_=>_.tiempoEstancia===t.value)?n.error("Ya existe un registro para este tiempo de estancia",{position:"bottom",timeout:3e3}):(i.push(s),localStorage.setItem("costosPensionados",JSON.stringify(i)),n.success("Registro éxitoso",{position:"bottom",timeout:3e3}))}}function u(){o.value=o.value.replace(/\D/g,"")}return(r,s)=>{const i=f;return V(),h("section",S,[e("div",z,[B,e("div",C,[E,e("section",N,[I,b(e("select",{"onUpdate:modelValue":s[0]||(s[0]=a=>p(t)?t.value=a:t=a),style:{"min-width":"57vw",height:"40px","border-radius":"10px"}},k,512),[[x,l(t)]])]),d(l(y),{class:"mt-5",modelValue:l(o),"onUpdate:modelValue":s[1]||(s[1]=a=>p(o)?o.value=a:o=a),label:"Precio",onInput:u},null,8,["modelValue"])]),d(i,{rounded:"",class:"mt-6 w-52",color:"info",onClick:m},{default:w(()=>[R("Registrar")]),_:1})])])}}};export{j as default};