import{M as q}from"./MazBtn-000f9f66.2ded299f.js";import{d as K,D as G,E as N,o as y,F as $,w as r,b as l,G as I,H as k,I as D,n as M,c as z,g as m,t as b,y as i,f as d,J as R,r as h,v as L,k as X,K as Y,T as Q,L as ee,M as P,u as te,l as F,x as oe,N as H,z as ae,O as le}from"./entry.a2c9f724.js";import{M as se}from"./MazInput-8e284503.ce7797d8.js";const U="--backdrop-present",ne=()=>{document.documentElement.classList.add(U)},re=async()=>{document.querySelector(".m-backdrop.--present")||document.documentElement.classList.remove(U)},ie=K({inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},teleportSelector:{type:String,default:"body"},beforeClose:{type:Function,default:void 0},persistent:{type:Boolean,default:!1},noCloseOnEscKey:{type:Boolean,default:!1},transitionName:{type:String,default:"backdrop-anim"},backdropClass:{type:[Array,String,Object],default:void 0},backdropContentClass:{type:[Array,String,Object],default:void 0}},emits:["open","before-close","close","update:model-value"],setup(e,{emit:s}){const t=h(e.modelValue),o=()=>{f(!1)},f=async p=>{var E;p||(s("before-close"),await((E=e.beforeClose)==null?void 0:E.call(e))),t.value=p},v=()=>{s("open")},a=()=>{s("update:model-value",!1),s("close"),S()},c=()=>{e.persistent||o()},n=p=>{!e.noCloseOnEscKey&&p.key==="Escape"&&!e.persistent&&o()},A=()=>{ne(),document.addEventListener("keyup",n,!1)},S=()=>{document.removeEventListener("keyup",n),re()};return L(()=>{e.modelValue?A():S()}),X(()=>e.modelValue,p=>{t.value=p,p?A():S()}),{onBackdropAnimationEnter:v,onBackdropAnimationLeave:a,onBackdropClicked:c,close:o,present:t,toggleModal:f,onKeyPress:n}}}),x=(e,s)=>{const t=e.__vccOpts||e;for(const[o,f]of s)t[o]=f;return t};function ce(e,s,t,o,f,v){return y(),$(ee,{to:e.teleportSelector},[d(Q,{appear:"",name:e.transitionName,onAfterEnter:e.onBackdropAnimationEnter,onAfterLeave:e.onBackdropAnimationLeave},{default:r(()=>[e.present?(y(),z("div",{key:0,class:M(["m-backdrop --present",[e.backdropClass]]),tabindex:"-1",role:"dialog"},[l("div",{class:M(["m-backdrop-overlay",{"--disabled":e.persistent}]),tabindex:"-1",onClick:s[0]||(s[0]=Y((...a)=>e.onBackdropClicked&&e.onBackdropClicked(...a),["self"]))},null,2),l("div",I({class:["m-backdrop-content",e.backdropContentClass]},e.$attrs,{role:"document",tabindex:"0"}),[D(e.$slots,"default",{close:e.close})],16)],2)):k("v-if",!0)]),_:3},8,["name","onAfterEnter","onAfterLeave"])],8,["to"])}const de=x(ie,[["render",ce]]),ue={key:0,class:"maz-my-0 maz-text-xl maz-font-semibold"},me={class:"m-dialog-content"},fe={key:0,class:"m-dialog-footer"},pe=K({__name:"MazDialog",props:{title:{type:String,default:void 0},noClose:{type:Boolean,default:!1},width:{type:String,default:"500px"},maxWidth:{type:String,default:"95vw"},maxHeight:{type:String,default:"95vh"},scrollable:{type:Boolean,default:!1}},emits:["update:model-value","close","open"],setup(e){const s=R(()=>P(()=>import("./MazBtn-57cb16a1.ab8e5f6c.js"),["./MazBtn-57cb16a1.ab8e5f6c.js","./entry.a2c9f724.js","./entry.d477f484.css","./MazBtn-000f9f66.2ded299f.js","./MazBtn-000f9f66.38af7d2c.css","./MazInput-8e284503.ce7797d8.js","./MazInput-8e284503.5f4fe71b.css"],import.meta.url)),t=R(()=>P(()=>import("./x-mark-6dd31278.43f5def8.js"),["./x-mark-6dd31278.43f5def8.js","./entry.a2c9f724.js","./entry.d477f484.css"],import.meta.url)),o=G(),f=N(()=>({...o,class:void 0,style:void 0})),v=N(()=>({class:o.class,style:o.style}));return(a,c)=>(y(),$(de,I(f.value,{"transition-name":"modal-anim",onClose:c[0]||(c[0]=n=>a.$emit("close",n)),onOpen:c[1]||(c[1]=n=>a.$emit("open",n)),"onUpdate:modelValue":c[2]||(c[2]=n=>a.$emit("update:model-value",n))}),{default:r(({close:n})=>[l("div",I({class:["m-dialog",{"--scrollable":e.scrollable}],style:[{width:e.width,maxWidth:e.maxWidth,maxHeight:e.maxHeight}]},v.value),[k(`
          @slot Header slot
            @binding {Function} close close function
        `),D(a.$slots,"header",{close:n},()=>[l("div",{class:M(["m-dialog-header",{"--has-title":a.$slots.title||e.title}])},[a.$slots.title||e.title?(y(),z("h2",ue,[k(`
                @slot Title slot in the header
              `),D(a.$slots,"title",{},()=>[m(b(e.title),1)],!0)])):k("v-if",!0),e.noClose?k("v-if",!0):(y(),$(i(s),{key:1,class:"m-dialog-closebtn",color:"transparent",onClick:n},{default:r(()=>[d(i(t),{class:"maz-text-lg"})]),_:2},1032,["onClick"]))],2)],!0),l("div",me,[k(`
            @slot Default content
              @binding {Function} close close function
          `),D(a.$slots,"default",{close:n},void 0,!0)]),a.$slots.footer?(y(),z("div",fe,[k(`
            @slot Footer slot
              @binding {Function} close close function
          `),D(a.$slots,"footer",{close:n},void 0,!0)])):k("v-if",!0)],16)]),_:3},16))}}),ve=x(pe,[["__scopeId","data-v-085e6d92"]]),ge={class:"bg-slate-400"},be={class:"container p-4"},ye=l("h1",{style:{color:"black","font-family":"Verdana","font-size":"36px"}},[l("b",null,"Entrada de Vehículos - Registro")],-1),ke={class:"w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md"},he=l("h2",{style:{color:"white","font-family":"Verdana","font-size":"36px"},class:"mt-8"},"Datos del vehículo:",-1),_e=l("p",null,"¿Deseas agregar un nuevo servicio adicional?",-1),Se={style:{float:"left","margin-left":"850px"}},Ce=l("br",null,null,-1),Ae=l("div",{style:{clear:"both"}},null,-1),De={__name:"EntradaRegistro",setup(e){const s=te();let t=h(""),o=h(20),f=h(new Date().toLocaleTimeString()),v=h(new Date().toLocaleDateString());const a=h(!1),c=h(!1),n=h(""),A=()=>{f.value=new Date().toLocaleTimeString()};L(()=>{setInterval(A,1e3)}),F(()=>{clearInterval(A)});const S=()=>{v.value=new Date().toLocaleDateString()};L(()=>{setInterval(S,1e3)}),F(()=>{clearInterval(S)}),L(()=>{const C=localStorage.getItem("lugDisp");C!==null&&(o.value=parseInt(C))});const p=oe();function E(){t.value?p.push({name:"Servicios_Add-Servicios_Registro"}):s.error("No hay carro para asignarle un servicio",{position:"bottom",timeout:3e3})}function T(){let C=!1,g=!1;if(!t.value)s.error("Ingresa una placa",{position:"bottom",timeout:3e3});else{const u=/^[A-Z]{3}\d{3}[A-Z]$/,V=/^([A-Z]{3}-\d{3}-[A-Z])$/;if(u.test(t.value)?(t.value=`${t.value.slice(0,3)}-${t.value.slice(3,6)}-${t.value.slice(6)}`,C=!0):V.test(t.value)&&(g=!0),(JSON.parse(localStorage.getItem("entrada"))||[]).some(w=>w.placa===t.value))s.error("Ya existe un registro para esta placa",{position:"bottom",timeout:3e3});else if(C||g){const w={placa:t.value,lugDisp:o.value,fecha:v.value,hora:f.value};let B=JSON.parse(localStorage.getItem("entrada"));B?B.push(w):B=[w],localStorage.setItem("entrada",JSON.stringify(B)),s.success("Registro éxitoso",{position:"bottom",timeout:3e3}),o.value--,localStorage.setItem("lugDisp",o.value),a.value=!0}else s.error("Placa no válida. Ingresa una placa en formato AAA999B",{position:"bottom",timeout:3e3})}}const j=()=>{p.push({name:"Servicios_Add-Servicios_Registro",route:{placa:t}}),O()},O=()=>{a.value=!1};function J(){t.value?(n.value=new Date().toLocaleTimeString(),c.value=!0):s.error("No hay información para mostrar en el ticket",{position:"bottom",timeout:3e3})}function Z(){c.value=!1}const W=()=>{t.value=t.value.toUpperCase()};return(C,g)=>{const u=q,V=ve;return y(),z("section",ge,[l("div",be,[ye,(y(),$(u,{key:i(o),class:"mt-8 mb-5",color:"black"},{default:r(()=>[m("Lugares disponibles: "+b(i(o)),1)]),_:1})),d(u,{class:"mt-8 mb-5",style:H({backgroundColor:"rgba(0, 0, 0, 0.5)"})},{default:r(()=>[m("Hora actual: "+b(i(f)),1)]),_:1},8,["style"]),d(u,{class:"mt-8 mb-5",style:H({backgroundColor:"rgba(0, 0, 0, 0.5)"})},{default:r(()=>[m("Fecha actual: "+b(i(v)),1)]),_:1},8,["style"]),l("div",ke,[he,d(i(se),{class:"mb-1",modelValue:i(t),"onUpdate:modelValue":g[0]||(g[0]=_=>ae(t)?t.value=_:t=_),onInput:W,onKeyup:le(T,["enter"]),label:"Placa",disabled:i(o)===0},null,8,["modelValue","onKeyup","disabled"])]),d(u,{rounded:"",class:"mt-6 w-40",color:"black",pastel:"",onClick:T},{default:r(()=>[m("Registrar")]),_:1}),d(V,{modelValue:a.value,"onUpdate:modelValue":g[1]||(g[1]=_=>a.value=_),title:"Agregar Servicio Adicional"},{footer:r(()=>[d(u,{onClick:j,color:"success"},{default:r(()=>[m(" Sí ")]),_:1}),d(u,{onClick:O,color:"error"},{default:r(()=>[m(" No ")]),_:1})]),default:r(()=>[_e]),_:1},8,["modelValue"])]),l("div",Se,[(y(),$(u,{key:i(o),class:"mt-8",color:"success"},{default:r(()=>[m("Lugar asignado:"),Ce,m(b(i(o)),1)]),_:1}))]),Ae,l("div",null,[d(u,{rounded:"",class:"mt-6 w-40",color:"black",pastel:"",onClick:E},{default:r(()=>[m("Servicio adicional")]),_:1}),d(u,{rounded:"",class:"mt-6 w-40",color:"black",pastel:"",onClick:J},{default:r(()=>[m("Imprimir ticket")]),_:1}),d(V,{modelValue:c.value,"onUpdate:modelValue":g[2]||(g[2]=_=>c.value=_),title:"Detalle del Ticket"},{footer:r(()=>[d(u,{onClick:Z,color:"success"},{default:r(()=>[m("Cerrar")]),_:1})]),default:r(()=>[l("p",null,"Placa: "+b(i(t)),1),l("p",null,"Hora: "+b(n.value),1),l("p",null,"Fecha: "+b(i(v)),1),l("p",null,"Lugar asignado: "+b(i(o)+1),1)]),_:1},8,["modelValue"])])])}}},Be=Object.freeze(Object.defineProperty({__proto__:null,default:De},Symbol.toStringTag,{value:"Module"}));export{Be as E,x as _};