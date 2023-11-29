import{r as f,d as ie,E as S,U as Ve,k as se,V as Y,o as V,c as L,f as b,w as R,b as $,K as Z,y as k,G as ue,n as U,N as oe,H as E,I as W,Q as ze,R as Ie,t as re,T as Se,J as O,s as de,v as we,W as j,A as ke,X as Le,Y as Ae,g as ce,F as x,M as _,u as Ee,Z as $e,x as Ce,z as T}from"./entry.a4d36130.js";import{M as De}from"./MazInput-8e284503.74fbe47b.js";import{M as Be}from"./MazBtn-000f9f66.7c8d4601.js";function Pe(e,s){let r;return(...g)=>{r&&clearTimeout(r),r=setTimeout(()=>{e(...g)},s)}}const me=({componentName:e,instance:s,providedId:r})=>S(()=>r??`${e}-${s==null?void 0:s.uid}`),Te=O(()=>_(()=>import("./MazBtn-16ab35fe.a5d15677.js"),["./MazBtn-16ab35fe.a5d15677.js","./entry.a4d36130.js","./entry.d477f484.css","./MazBtn-000f9f66.7c8d4601.js","./MazBtn-000f9f66.38af7d2c.css","./MazInput-8e284503.74fbe47b.js","./MazInput-8e284503.5f4fe71b.css"],import.meta.url)),Oe=O(()=>_(()=>import("./MazIcon-bda198b4.a2cf0721.js"),["./MazIcon-bda198b4.a2cf0721.js","./entry.a4d36130.js","./entry.d477f484.css"],import.meta.url)),_e=O(()=>_(()=>import("./eye-slash-3c6844fc.44fd1f0e.js"),["./eye-slash-3c6844fc.44fd1f0e.js","./entry.a4d36130.js","./entry.d477f484.css"],import.meta.url)),Ke=O(()=>_(()=>import("./eye-290c6a03.36608cc1.js"),["./eye-290c6a03.36608cc1.js","./entry.a4d36130.js","./entry.d477f484.css"],import.meta.url)),Me=O(()=>_(()=>import("./check-b1507ce9.152772b6.js"),["./check-b1507ce9.152772b6.js","./entry.a4d36130.js","./entry.d477f484.css"],import.meta.url)),Ne=ie({components:{MazBtn:Te,MazIcon:Oe,CheckIcon:Me,EyeIcon:Ke,EyeOffIcon:_e},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Boolean],default:void 0},placeholder:{type:String,default:void 0},color:{type:String,default:"primary"},label:{type:String,default:void 0},name:{type:String,default:"input"},type:{type:String,default:"text",validator:e=>["text","date","number","tel","search","url","password","month","time","week","email"].includes(e)},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},id:{type:String,default:void 0},error:{type:Boolean,default:!1},success:{type:Boolean,default:!1},warning:{type:Boolean,default:!1},hint:{type:String,default:void 0},inputClasses:{type:String,default:void 0},noBorder:{type:Boolean,default:!1},noRadius:{type:Boolean,default:!1},size:{type:String,default:"md",validator:e=>["mini","xs","sm","md","lg","xl"].includes(e)},debounce:{type:Boolean,default:!1},debounceDelay:{type:Number,default:500},validButton:{type:Boolean,default:!1},validButtonLoading:{type:Boolean,default:!1},autoFocus:{type:Boolean,default:!1},borderActive:{type:Boolean,default:!1},leftIcon:{type:String,default:void 0},rightIcon:{type:String,default:void 0}},emits:["focus","blur","update:model-value","click","change","update"],setup(e,{emit:s,slots:r}){const g=f(!1),c=f(!1),h=f(),t=de(),m=me({componentName:"MazInput",instance:t,providedId:e.id});we(()=>{var p;e.autoFocus&&((p=h.value)==null||p.focus())});const d=S(()=>e.type==="password"),n=S(()=>g.value?"text":e.type),A=S(()=>{if(!e.noBorder){if(e.error)return"maz-border-danger";if(e.success)return"maz-border-success";if(e.warning)return"maz-border-warning";if(c.value||e.borderActive){if(e.color==="black")return"maz-border-black";if(e.color==="danger")return"maz-border-danger";if(e.color==="info")return"maz-border-info";if(e.color==="primary")return"maz-border-primary";if(e.color==="secondary")return"maz-border-secondary";if(e.color==="success")return"maz-border-success";if(e.color==="warning")return"maz-border-warning";if(e.color==="white")return"maz-border-white"}return"--default-border"}}),C=S(()=>{const{required:p,placeholder:N}=e;if(N)return p?`${N} *`:N}),z=S(()=>e.modelValue!==void 0&&e.modelValue!==""),u=S({get:()=>e.modelValue,set:p=>F(p)}),M=S(()=>(!!e.label||!!e.hint)&&(c.value||!!z.value||!!e.placeholder||["date","month","week"].includes(e.type))),w=S(()=>!!e.label||!!e.hint),I=()=>!!r["right-icon"]||d.value||!!r["valid-button"]||e.validButton||!!e.rightIcon,i=()=>!!r["left-icon"]||!!e.leftIcon,G=p=>{s("focus",p),c.value=!0},X=p=>{s("blur",p),c.value=!1},K=p=>s("change",p),P=Pe(p=>{s("update:model-value",p)},e.debounceDelay),F=p=>{if(e.debounce)return P(p);s("update:model-value",p)};return{inputValue:u,shouldUp:M,hasLabel:w,computedPlaceholder:C,isPasswordType:d,inputType:n,input:h,isFocused:c,hasPasswordVisible:g,borderStyle:A,focus:G,blur:X,change:K,emitValue:F,hasRightPart:I,hasLeftPart:i,instanceId:m}}}),ve=(e,s)=>{const r=e.__vccOpts||e;for(const[g,c]of s)r[g]=c;return r},Re={key:0,class:"m-input-wrapper-left"},Ue={class:"m-input-wrapper-input"},Fe=["id","type","name","placeholder","aria-label","disabled","readonly","required"],He=["for"],qe={key:0},je={key:1,class:"m-input-wrapper-right"};function We(e,s,r,g,c,h){const t=j("MazIcon"),m=j("EyeOffIcon"),d=j("EyeIcon"),n=j("MazBtn"),A=j("CheckIcon");return V(),L("div",{class:U(["m-input",[{"--is-focused":e.isFocused||e.borderActive,"--should-up":e.shouldUp,"--has-label":e.hasLabel,"--is-disabled":e.disabled,"--is-readonly":e.readonly,"--has-z-2":e.error||e.warning||e.success,"--has-state":e.error||e.warning||e.success},e.$attrs.class,`--${e.color}`,`--${e.size}`]]),onClick:s[2]||(s[2]=C=>e.$emit("click",C))},[$("div",{class:U(["m-input-wrapper",[e.inputClasses,e.borderStyle,{"maz-rounded":!e.noRadius}]])},[e.hasLeftPart()?(V(),L("div",Re,[e.$slots["left-icon"]||e.leftIcon?W(e.$slots,"left-icon",{key:0},()=>[b(t,{name:e.leftIcon,class:"maz-text-xl maz-text-muted"},null,8,["name"])],!0):E("v-if",!0)])):E("v-if",!0),$("div",Ue,[ke($("input",ue({id:e.instanceId,ref:"input","onUpdate:modelValue":s[0]||(s[0]=C=>e.inputValue=C),type:e.inputType,name:e.name},e.$attrs,{placeholder:e.computedPlaceholder,"aria-label":e.label||e.placeholder,disabled:e.disabled,readonly:e.readonly,required:e.required,class:"m-input-input"},Ae({blur:e.blur,focus:e.focus,change:e.change},!0)),null,16,Fe),[[Le,e.inputValue]]),e.label||e.hint?(V(),L("label",{key:0,ref:"label",for:e.instanceId,class:U(["m-input-label",[{"maz-text-danger-600":e.error,"maz-text-success-600":e.success,"maz-text-warning-600":e.warning}]])},[ce(re(e.hint||e.label)+" ",1),e.required?(V(),L("sup",qe,"*")):E("v-if",!0)],10,He)):E("v-if",!0)]),e.hasRightPart()?(V(),L("div",je,[e.$slots["right-icon"]||e.rightIcon?W(e.$slots,"right-icon",{key:0},()=>[b(t,{name:e.rightIcon,class:"maz-text-xl maz-text-muted"},null,8,["name"])],!0):E("v-if",!0),e.isPasswordType?(V(),x(n,{key:1,color:"transparent",tabindex:"-1",size:"mini",onClick:s[1]||(s[1]=Z(C=>e.hasPasswordVisible=!e.hasPasswordVisible,["stop"]))},{default:R(()=>[e.hasPasswordVisible?(V(),x(m,{key:0,class:"maz-text-xl maz-text-muted"})):(V(),x(d,{key:1,class:"maz-text-xl maz-text-muted"}))]),_:1})):E("v-if",!0),e.$slots["valid-button"]||e.validButton?W(e.$slots,"valid-button",{key:2},()=>[b(n,{color:"transparent",disabled:e.disabled,tabindex:"-1",loading:e.validButtonLoading,class:"m-input-valid-button",size:"mini",type:"submit"},{default:R(()=>[b(A,{class:"maz-text-2xl maz-text-normal"})]),_:1},8,["disabled","loading"])],!0):E("v-if",!0)])):E("v-if",!0)],2)],2)}const ne=ve(Ne,[["render",We],["__scopeId","data-v-52aef9c7"]]);f("system");f();f([]);let ee=null;function Je(e,s){ee&&clearTimeout(ee),ee=setTimeout(e,s)}const Qe=["onClick"],Ze={key:0,tabindex:"-1",class:"m-select-list__search-wrapper"},Ge={class:"m-select-list__no-results"},Xe={key:2,class:"m-select-list__scroll-wrapper",tabindex:"-1"},Ye=["onClick"],xe=ie({__name:"MazSelect",props:{modelValue:{type:[Number,String,Boolean],default:void 0},id:{type:String,default:void 0},options:{type:Array,default:void 0},optionValueKey:{type:String,default:"value"},optionLabelKey:{type:String,default:"label"},optionInputValueKey:{type:String,default:"label"},listPosition:{type:String,default:"bottom left",validator:e=>["top","top right","top left","bottom","bottom right","bottom left"].includes(e)},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},open:{type:Boolean,default:!1},color:{type:String,default:"primary"},itemHeight:{type:Number,default:40},maxListHeight:{type:Number,default:240},maxListWidth:{type:Number,default:void 0},size:{type:String,default:"md",validator:e=>["mini","xs","sm","md","lg","xl"].includes(e)},search:{type:Boolean,default:!1},searchPlaceholder:{type:String,default:"Search in options"}},emits:["close","open","blur","focus","change","update:model-value","selected-option"],setup(e,{emit:s}){const r=O(()=>_(()=>import("./magnifying-glass-6a0dd1a2.77b6553a.js"),["./magnifying-glass-6a0dd1a2.77b6553a.js","./entry.a4d36130.js","./entry.d477f484.css"],import.meta.url)),g=O(()=>_(()=>import("./chevron-down-7a070b10.de64030f.js"),["./chevron-down-7a070b10.de64030f.js","./entry.a4d36130.js","./entry.d477f484.css"],import.meta.url)),c=O(()=>_(()=>import("./no-symbol-6173a20b.ab1bfc91.js"),["./no-symbol-6173a20b.ab1bfc91.js","./entry.a4d36130.js","./entry.d477f484.css"],import.meta.url)),h=de(),t=e,m=s,d=f(!1),n=f(),A=S(()=>d.value||t.open),C=me({componentName:"MazSelect",instance:h,providedId:t.id});Ve(()=>{var l,a;(l=t.options)!=null&&l.length||console.warn("[maz-ui](MazSelect) you must provide options"),I.value&&(n.value=(a=t.options)==null?void 0:a.findIndex(o=>{var v;return o[t.optionValueKey]===((v=I.value)==null?void 0:v[t.optionValueKey])}))});const z=f(),u=f(),M=f(),w=f(),I=S(()=>{var l;return(l=t.options)==null?void 0:l.find(a=>t.modelValue===a[t.optionValueKey])}),i=l=>l==null,G=S(()=>{var l,a,o;return i((l=I.value)==null?void 0:l[t.optionValueKey])?void 0:((a=I.value)==null?void 0:a[t.optionInputValueKey])??((o=I.value)==null?void 0:o[t.optionLabelKey])}),X=S(()=>t.listPosition.includes("bottom")?"maz-slide":"maz-slideinvert"),K=f(""),P=f("");function F(l){return l.normalize("NFD").replaceAll(/[\u0300-\u036F]/g,"").replaceAll(/[^\dA-Za-z]/g,"")}const p=(l,a)=>a&&l&&F(l.toString().toLocaleLowerCase().trim()).includes(F(a.toLocaleLowerCase().trim()));se(()=>t.modelValue,(l,a)=>{l&&l!==a&&(Q(),ae())});function N(l){var a;return l?(a=t.options)==null?void 0:a.filter(o=>{const v=o[t.optionLabelKey],y=o[t.optionValueKey],B=o[t.optionInputValueKey];return p(v,l)||p(y,l)||p(B,l)}):t.options}const D=S(()=>N(K.value)),J=async l=>{var a;if(l&&("relatedTarget"in l&&((a=z.value)!=null&&a.contains(l.relatedTarget))||l.type==="keydown"))return l.preventDefault();await Y(),d.value=!1,n.value=0,m("close",l)},H=async l=>{l==null||l.preventDefault(),!t.disabled&&(d.value=!0,await Q(),m("focus",l),m("open",d.value))};function fe(l){var a,o;return d.value?J(l):((o=(a=u.value)==null?void 0:a.$el.querySelector("input"))==null?void 0:o.focus())??H()}function pe(l){var a;K.value=l,(a=M.value)==null||a.input.focus()}function be(l){var a;l==="Backspace"&&P.value.length>0?P.value=P.value.slice(0,-1):P.value+=l;const o=N(P.value);o!=null&&o.length&&(n.value=(a=D.value)==null?void 0:a.findIndex(v=>v[t.optionValueKey]===o[0][t.optionValueKey]),Q(n.value)),Je(()=>{P.value=""},1e3)}const ye=l=>{const a=l.key;/^[\dA-Za-z]$/.test(a)?(l.preventDefault(),H(l),t.search?pe(a):be(a)):le(l)},le=l=>{const a=l.code,o=["ArrowUp","ArrowDown"].includes(a),v=a==="Enter",y=a==="Escape"&&A.value;o?ge(l,n.value):v?he(l,n.value):y&&J()},ge=(l,a)=>{var o;l.preventDefault();const v=l.code;A.value||H(l);const y=(o=D.value)==null?void 0:o.length;y&&(typeof a=="number"?a===y-1&&v==="ArrowDown"?n.value=0:a===0&&v==="ArrowUp"?n.value=y-1:n.value=v==="ArrowDown"?a+1:a-1:n.value=v==="ArrowDown"?0:y-1,Q(n.value))},he=(l,a)=>{var o,v,y;if(l.preventDefault(),!A.value)return H(l);const B=a?((o=D.value)==null?void 0:o[a])??((v=D.value)==null?void 0:v[0]):(y=D.value)==null?void 0:y[0];i(B)||te(B)};async function Q(l){var a,o,v;await Y();const y=l??((a=D.value)==null?void 0:a.findIndex(B=>{var q;return((q=I.value)==null?void 0:q[t.optionValueKey])===B[t.optionValueKey]}));typeof y=="number"&&(n.value||(n.value=y),(v=(o=w.value)==null?void 0:o.querySelectorAll(".m-select-list-item")[y])==null||v.scrollIntoView({behavior:"auto",block:"nearest",inline:"start"}))}function ae(){var l;const a=(l=D.value)==null?void 0:l.findIndex(o=>I[t.optionValueKey]===o[t.optionValueKey]);n.value=a&&a>=0?a:void 0}const te=(l,a=!0)=>{a&&Y(()=>J()),K.value="",m("update:model-value",l[t.optionValueKey]),m("selected-option",l),ae()};return(l,a)=>(V(),L("div",{ref_key:"mazSelectElement",ref:z,class:U(["m-select",{"--is-open":A.value,"--disabled":e.disabled}]),onBlurCapture:J},[b(ne,ue({id:k(C),ref_key:"mazInputComponent",ref:u,class:"m-select-input"},l.$attrs,{required:e.required,"border-active":d.value,color:e.color,"model-value":G.value,autocomplete:"off",size:e.size,disabled:e.disabled,onFocus:Z(H,["prevent","stop"]),onChange:a[0]||(a[0]=o=>m("change",o)),onKeydown:ye}),{"right-icon":R(()=>[$("button",{tabindex:"-1",type:"button",class:"m-select-input__toggle-button maz-custom",onClick:Z(fe,["stop"])},[b(k(g),{class:"m-select-chevron maz-text-xl"})],8,Qe)]),_:1},16,["id","required","border-active","color","model-value","size","disabled","onFocus"]),b(Se,{name:X.value},{default:R(()=>[A.value?(V(),L("div",{key:0,ref_key:"optionsListElement",ref:w,class:U(["m-select-list",{"--top":e.listPosition.includes("top"),"--left":e.listPosition.includes("left"),"--right":e.listPosition.includes("right"),"--bottom":e.listPosition.includes("bottom")}]),style:oe({maxHeight:`${e.maxListHeight}px`,maxWidth:`${e.maxListWidth}px`})},[e.search?(V(),L("div",Ze,[b(ne,{ref_key:"searchInputComponent",ref:M,modelValue:K.value,"onUpdate:modelValue":[a[1]||(a[1]=o=>K.value=o),a[2]||(a[2]=o=>n.value=0)],size:"sm",color:e.color,placeholder:e.searchPlaceholder,name:"search",autocomplete:"off",tabindex:"-1",class:"m-select-list__search-input",onKeydown:le},{"left-icon":R(()=>[b(k(r),{class:"maz-h-[1.3rem] maz-w-[1.3rem]"})]),_:1},8,["modelValue","color","placeholder"])])):E("v-if",!0),E(" No results slot - Displayed when no results corresponding with seeach query "),!D.value||D.value.length<=0?W(l.$slots,"no-results",{key:1},()=>[$("span",Ge,[b(k(c),{class:"maz-h-6 maz-w-6 maz-text-normal"})])],!0):(V(),L("div",Xe,[(V(!0),L(ze,null,Ie(D.value,(o,v)=>{var y,B,q;return V(),L("button",{key:v,tabindex:"-1",type:"button",class:U(["m-select-list-item maz-custom",[{"--is-keyboard-selected":n.value===v,"--is-selected":((y=I.value)==null?void 0:y[e.optionValueKey])===o[e.optionValueKey]&&!i(o[e.optionValueKey]),"--is-none-value":i(o[e.optionValueKey])},`--${e.color}`]]),style:oe({minHeight:`${e.itemHeight}px`}),onClick:Z(sl=>te(o),["prevent","stop"])},[W(l.$slots,"default",{option:o,isSelected:((B=I.value)==null?void 0:B[e.optionValueKey])===o[e.optionValueKey],selectedOption:(q=I.value)==null?void 0:q[e.optionValueKey]},()=>[$("span",null,re(o[e.optionLabelKey]),1)],!0)],14,Ye)}),128))]))],6)):E("v-if",!0)]),_:3},8,["name"])],34))}}),el=ve(xe,[["__scopeId","data-v-2589528b"]]),ll={class:"bg-slate-400"},al={class:"container p-4"},tl=$("h1",{style:{color:"black","font-family":"Verdana","font-size":"36px"}},[$("b",null,"Servicios adicionales - Registro")],-1),ol={class:"w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md"},nl=$("h2",{style:{color:"white","font-family":"Verdana","font-size":"36px"},class:"mt-8"}," Datos del servicio: ",-1),il={__name:"Servicios_Registro",setup(e){const s=Ee();$e();let r=f(""),g=f(""),c=f(""),h=f(""),t=f(""),m=f(""),d=f(""),n=f("");const A=Ce(),C=()=>{if(!r.value&&!c.value&&!h.value&&!t.value&&!m.value&&!d.value&&!n.value&&!g.value)alert(g),s.error("Faltan datos",{position:"bottom",timeout:3e3});else{const z={id:r.value,nombre:c.value,descripcion:h.value,duracion:t.value,costo:m.value,materiales:d.value,empleado:n.value,placa:g.value};let u=JSON.parse(localStorage.getItem("servicios"));u?u.push(z):u=[z],localStorage.setItem("servicios",JSON.stringify(u)),A.push({name:"Servicios_Add-Servicios_Consulta"}),s.error("Registro exitoso!",{position:"bottom",timeout:3e3})}};return se(r,z=>{z==="01LAVADO"?(c.value="Lavado",h.value="Lavado de vehículo",t.value="30 minutos",m.value="$50.00",d.value="Agua, jabón, cepillos",n.value="Jorge Iván"):z==="02ENCERADO"?(c.value="Encerado",h.value="Encerado de la carrocería",t.value="2 horas",m.value="$300.00",d.value="Cera, espoja, agua, trapo",n.value="Victor"):z==="03PULIDO"?(c.value="Pulido",h.value="Pulir carrocería y llantas",t.value="2 horas",m.value="$400.00",d.value="Pulidora, cera, jabón, agua, trapos",n.value="Rodrigo"):z==="04ACEITE"?(c.value="Cambio de aceite",h.value="Cambiar aceite y filtro",t.value="30 minutos",m.value="$800.00",d.value="Aceite específico, filtro, llaves/pinzas.",n.value="Luis"):z==="05LLANTAS"&&(c.value="Revisión de llantas",h.value="Se calibra la presión del aire, fugas y posición",t.value="1 hora",m.value="$250.00",d.value="Calibrador, compresora, agua y jabón",n.value="Jared")}),(z,u)=>{const M=el,w=De,I=Be;return V(),L("section",ll,[$("div",al,[tl,$("div",ol,[nl,b(M,{modelValue:k(r),"onUpdate:modelValue":u[0]||(u[0]=i=>T(r)?r.value=i:r=i),label:"ID Servicio:",options:[{value:"01LAVADO",label:"01LAVADO"},{value:"02ENCERADO",label:"02ENCERADO"},{value:"03PULIDO",label:"03PULIDO"},{value:"04ACEITE",label:"04ACEITE"},{value:"05LLANTAS",label:"05LLANTAS"}]},null,8,["modelValue"]),b(w,{class:"mt-1 mb-1",modelValue:k(g),"onUpdate:modelValue":u[1]||(u[1]=i=>T(g)?g.value=i:g=i),label:"Placa",disabled:""},null,8,["modelValue"]),b(w,{class:"mt-1 mb-1",modelValue:k(c),"onUpdate:modelValue":u[2]||(u[2]=i=>T(c)?c.value=i:c=i),label:"Nombre",disabled:!0},null,8,["modelValue"]),b(w,{class:"mb-1",modelValue:k(h),"onUpdate:modelValue":u[3]||(u[3]=i=>T(h)?h.value=i:h=i),label:"Descripción",disabled:!0},null,8,["modelValue"]),b(w,{class:"mb-1",modelValue:k(t),"onUpdate:modelValue":u[4]||(u[4]=i=>T(t)?t.value=i:t=i),label:"Duración",disabled:!0},null,8,["modelValue"]),b(w,{class:"mb-1",modelValue:k(m),"onUpdate:modelValue":u[5]||(u[5]=i=>T(m)?m.value=i:m=i),label:"Costo",disabled:!0},null,8,["modelValue"]),b(w,{class:"mb-1",modelValue:k(d),"onUpdate:modelValue":u[6]||(u[6]=i=>T(d)?d.value=i:d=i),label:"Materiales",disabled:!0},null,8,["modelValue"]),b(w,{class:"mb-1",modelValue:k(n),"onUpdate:modelValue":u[7]||(u[7]=i=>T(n)?n.value=i:n=i),label:"Empleado asignado",disabled:!0},null,8,["modelValue"])]),b(I,{rounded:"",class:"mt-6 w-40",color:"black",pastel:"",onClick:C},{default:R(()=>[ce("Registrar")]),_:1})])])}}},cl=Object.freeze(Object.defineProperty({__proto__:null,default:il},Symbol.toStringTag,{value:"Module"}));export{cl as S,ve as _};
