import{M as E}from"./MazBtn-000f9f66.9e9a6b71.js";import{e as T,u as O,r as s,v as C,l as P,x as H,c as L,b as a,f as t,w as f,E as R,B as o,C as d,L as J,z as j,A as q,o as F,g as u,t as S,p as G,a as K}from"./entry.c2d89f30.js";import{M as r}from"./MazInput-8e284503.8f51acfc.js";const n=g=>(G("data-v-3e177dbf"),g=g(),K(),g),Q={class:"bg-slate-400"},W={class:"container p-4"},X=n(()=>a("h1",{style:{color:"black","font-family":"Verdana","font-size":"36px"}},[a("b",null,"Vehículos pensionados - Registro")],-1)),Y={class:"w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md"},Z=n(()=>a("h2",{style:{color:"white","font-family":"Verdana","font-size":"36px"},class:"mt-8"}," Datos del cliente: ",-1)),$=n(()=>a("h3",{style:{color:"white","font-family":"Verdana","font-size":"36px"},class:"mt-8"}," Datos del vehículo: ",-1)),ee=n(()=>a("h4",{style:{color:"white","font-family":"Verdana","font-size":"18px"},class:"mt-8"}," Foto: ",-1)),le=["src"],oe={class:"bg-slate-400"},ae=n(()=>a("label",{for:"tiempoEstancia"},"Tiempo de estancia: ",-1)),te=n(()=>a("option",{value:"1 semana"},"1 semana",-1)),se=n(()=>a("option",{value:"1 mes"},"1 mes",-1)),ne=n(()=>a("option",{value:"6 meses"},"6 meses",-1)),ie=n(()=>a("option",{value:"1 año"},"1 año",-1)),de=[te,se,ne,ie],ue={style:{float:"left","margin-left":"850px"}},re=n(()=>a("br",null,null,-1)),me=n(()=>a("div",{style:{clear:"both"}},null,-1)),ce={data(){return{imageUrl:null}},methods:{handleImageUpload(g){const m=g.target.files[0];if(m){const v=new FileReader;v.onload=()=>{this.imageUrl=v.result},v.readAsDataURL(m)}}}},pe=Object.assign(ce,{__name:"PensionadosRegistro",setup(g){const m=O();let v=s(new Date().toLocaleTimeString()),k=s(new Date().toLocaleDateString());const x=()=>{v.value=new Date().toLocaleTimeString()};C(()=>{setInterval(x,1e3)}),P(()=>{clearInterval(x)});const z=()=>{k.value=new Date().toLocaleDateString()};C(()=>{setInterval(z,1e3)}),P(()=>{clearInterval(z)});let D=s(5),b=s(""),c=s(""),_=s(""),M=s("Activo"),V=s(""),h=s(""),N=s(""),y=s(""),w=s(""),U=s(""),I=s("");const A=H();C(()=>{const i=localStorage.getItem("lugDispPensionados");i!==null&&(D.value=parseInt(i))});const B=()=>{if(!/^\d{10}$/.test(c.value)){m.error("Número de teléfono inválido. Debe contener 10 dígitos numéricos.",{position:"bottom",timeout:3e3});return}if(!b.value&&!c.value&&!_.value&&!M.value)m.error("Faltan datos del cliente",{position:"bottom",timeout:3e3});else if(!V.value&&!h.value&&!N.value&&!y.value&&!w.value&&!U.value)m.error("Faltan datos del vehiculo",{position:"bottom",timeout:3e3});else if(!I.value)m.error("Falta elegir el tiempo de estancia",{position:"bottom",timeout:3e3});else{const i={nombre:b.value,telefono:c.value,emergencia:_.value,status:M.value,modelo:V.value,marca:h.value,foto:N.value,color:y.value,ano:w.value,placa:U.value,tiempoEstancia:I.value};let l=JSON.parse(localStorage.getItem("pensionados"));l?l.push(i):l=[i],localStorage.setItem("pensionados",JSON.stringify(l)),A.push({name:"Pensionados-PensionadosConsulta"})}};return(i,l)=>{const p=E;return F(),L("section",Q,[a("div",W,[X,t(p,{class:"mt-8 mb-5",color:"black"},{default:f(()=>[u("Lugares disponibles: "+S(o(D)),1)]),_:1}),t(p,{class:"mt-8 mb-5",style:R({backgroundColor:"rgba(0, 0, 0, 0.5)"})},{default:f(()=>[u("Hora actual: "+S(o(v)),1)]),_:1},8,["style"]),t(p,{class:"mt-8 mb-5",style:R({backgroundColor:"rgba(0, 0, 0, 0.5)"})},{default:f(()=>[u("Fecha actual: "+S(o(k)),1)]),_:1},8,["style"]),a("div",Y,[Z,t(o(r),{class:"mb-1",modelValue:o(b),"onUpdate:modelValue":l[0]||(l[0]=e=>d(b)?b.value=e:b=e),type:"text",label:"Nombre del cliente"},null,8,["modelValue"]),t(o(r),{class:"mb-1",type:"tel",modelValue:o(c),"onUpdate:modelValue":l[1]||(l[1]=e=>d(c)?c.value=e:c=e),label:"Número telefónico"},null,8,["modelValue"]),t(o(r),{class:"mb-1",type:"tel",modelValue:o(_),"onUpdate:modelValue":l[2]||(l[2]=e=>d(_)?_.value=e:_=e),label:"Número de emergencia"},null,8,["modelValue"]),$,t(o(r),{class:"mb-1",modelValue:o(V),"onUpdate:modelValue":l[3]||(l[3]=e=>d(V)?V.value=e:V=e),label:"Modelo"},null,8,["modelValue"]),t(o(r),{class:"mb-1",modelValue:o(h),"onUpdate:modelValue":l[4]||(l[4]=e=>d(h)?h.value=e:h=e),label:"Marca"},null,8,["modelValue"]),ee,a("div",null,[a("input",{type:"file",onChange:l[5]||(l[5]=(...e)=>i.handleImageUpload&&i.handleImageUpload(...e)),accept:"image/*"},null,32),i.imageUrl?(F(),L("img",{key:0,src:i.imageUrl,alt:"Preview",class:"uploaded-image"},null,8,le)):J("",!0)]),t(o(r),{class:"mb-1 mt-8",modelValue:o(y),"onUpdate:modelValue":l[6]||(l[6]=e=>d(y)?y.value=e:y=e),label:"Color"},null,8,["modelValue"]),t(o(r),{class:"mb-1",modelValue:o(w),"onUpdate:modelValue":l[7]||(l[7]=e=>d(w)?w.value=e:w=e),label:"Año"},null,8,["modelValue"]),t(o(r),{class:"mb-1",modelValue:o(U),"onUpdate:modelValue":l[8]||(l[8]=e=>d(U)?U.value=e:U=e),label:"Placa"},null,8,["modelValue"]),a("section",oe,[ae,j(a("select",{"onUpdate:modelValue":l[9]||(l[9]=e=>d(I)?I.value=e:I=e),style:{width:"765px",height:"40px"}},de,512),[[q,o(I)]])])]),t(p,{rounded:"",class:"mt-6 w-40",color:"black",pastel:"",onClick:B},{default:f(()=>[u("Registrar")]),_:1})]),a("div",ue,[t(p,{class:"mt-8",color:"success"},{default:f(()=>[u("Lugar asignado:"),re,u(S(o(D)),1)]),_:1})]),me,a("div",null,[t(p,{rounded:"",class:"mt-6 w-40",color:"black",pastel:""},{default:f(()=>[u("Servicio adicional")]),_:1}),t(p,{rounded:"",class:"mt-6 w-40",color:"black",pastel:""},{default:f(()=>[u("Promociones")]),_:1})])])}}}),be=T(pe,[["__scopeId","data-v-3e177dbf"]]);export{be as default};
