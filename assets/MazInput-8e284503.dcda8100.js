import{d as N,r as w,v as F,L as o,R as u,o as l,c,b as B,a1 as k,f as v,a2 as s,A as U,a7 as G,a3 as H,a8 as j,n as V,g as J,t as K,D as $,w as E,G as Q,a5 as f,s as W,a6 as m}from"./entry.544bcfbc.js";function X(e,a){let n;return(...i)=>{n&&clearTimeout(n),n=setTimeout(()=>{e(...i)},a)}}const Y=({componentName:e,instance:a,providedId:n})=>o(()=>n??`${e}-${a==null?void 0:a.uid}`),Z=f(()=>m(()=>import("./MazBtn-9d312f09.93fec4df.js"),["./MazBtn-9d312f09.93fec4df.js","./entry.544bcfbc.js","./entry.d477f484.css","./MazBtn-000f9f66.e22e0a93.js","./MazBtn-000f9f66.38af7d2c.css"],import.meta.url)),_=f(()=>m(()=>import("./MazIcon-bda198b4.5576c048.js"),["./MazIcon-bda198b4.5576c048.js","./entry.544bcfbc.js","./entry.d477f484.css"],import.meta.url)),x=f(()=>m(()=>import("./eye-slash-3c6844fc.aac03e22.js"),["./eye-slash-3c6844fc.aac03e22.js","./entry.544bcfbc.js","./entry.d477f484.css"],import.meta.url)),ee=f(()=>m(()=>import("./eye-290c6a03.2f9f576d.js"),["./eye-290c6a03.2f9f576d.js","./entry.544bcfbc.js","./entry.d477f484.css"],import.meta.url)),ae=f(()=>m(()=>import("./check-b1507ce9.7807ddf9.js"),["./check-b1507ce9.7807ddf9.js","./entry.544bcfbc.js","./entry.d477f484.css"],import.meta.url)),te=N({components:{MazBtn:Z,MazIcon:_,CheckIcon:ae,EyeIcon:ee,EyeOffIcon:x},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Boolean],default:void 0},placeholder:{type:String,default:void 0},color:{type:String,default:"primary"},label:{type:String,default:void 0},name:{type:String,default:"input"},type:{type:String,default:"text",validator:e=>["text","date","number","tel","search","url","password","month","time","week","email"].includes(e)},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},id:{type:String,default:void 0},error:{type:Boolean,default:!1},success:{type:Boolean,default:!1},warning:{type:Boolean,default:!1},hint:{type:String,default:void 0},inputClasses:{type:String,default:void 0},noBorder:{type:Boolean,default:!1},noRadius:{type:Boolean,default:!1},size:{type:String,default:"md",validator:e=>["mini","xs","sm","md","lg","xl"].includes(e)},debounce:{type:Boolean,default:!1},debounceDelay:{type:Number,default:500},validButton:{type:Boolean,default:!1},validButtonLoading:{type:Boolean,default:!1},autoFocus:{type:Boolean,default:!1},borderActive:{type:Boolean,default:!1},leftIcon:{type:String,default:void 0},rightIcon:{type:String,default:void 0}},emits:["focus","blur","update:model-value","click","change","update"],setup(e,{emit:a,slots:n}){const i=w(!1),r=w(!1),h=w(),y=W(),g=Y({componentName:"MazInput",instance:y,providedId:e.id});F(()=>{var t;e.autoFocus&&((t=h.value)==null||t.focus())});const p=o(()=>e.type==="password"),b=o(()=>i.value?"text":e.type),z=o(()=>{if(!e.noBorder){if(e.error)return"maz-border-danger";if(e.success)return"maz-border-success";if(e.warning)return"maz-border-warning";if(r.value||e.borderActive){if(e.color==="black")return"maz-border-black";if(e.color==="danger")return"maz-border-danger";if(e.color==="info")return"maz-border-info";if(e.color==="primary")return"maz-border-primary";if(e.color==="secondary")return"maz-border-secondary";if(e.color==="success")return"maz-border-success";if(e.color==="warning")return"maz-border-warning";if(e.color==="white")return"maz-border-white"}return"--default-border"}}),d=o(()=>{const{required:t,placeholder:I}=e;if(I)return t?`${I} *`:I}),S=o(()=>e.modelValue!==void 0&&e.modelValue!==""),C=o({get:()=>e.modelValue,set:t=>P(t)}),M=o(()=>(!!e.label||!!e.hint)&&(r.value||!!S.value||!!e.placeholder||["date","month","week"].includes(e.type))),L=o(()=>!!e.label||!!e.hint),T=()=>!!n["right-icon"]||p.value||!!n["valid-button"]||e.validButton||!!e.rightIcon,A=()=>!!n["left-icon"]||!!e.leftIcon,D=t=>{a("focus",t),r.value=!0},R=t=>{a("blur",t),r.value=!1},O=t=>a("change",t),q=X(t=>{a("update:model-value",t)},e.debounceDelay),P=t=>{if(e.debounce)return q(t);a("update:model-value",t)};return{inputValue:C,shouldUp:M,hasLabel:L,computedPlaceholder:d,isPasswordType:p,inputType:b,input:h,isFocused:r,hasPasswordVisible:i,borderStyle:z,focus:D,blur:R,change:O,emitValue:P,hasRightPart:T,hasLeftPart:A,instanceId:g}}}),ne=(e,a)=>{const n=e.__vccOpts||e;for(const[i,r]of a)n[i]=r;return n},oe={key:0,class:"m-input-wrapper-left"},re={class:"m-input-wrapper-input"},le=["id","type","name","placeholder","aria-label","disabled","readonly","required"],se=["for"],ie={key:0},de={key:1,class:"m-input-wrapper-right"};function ue(e,a,n,i,r,h){const y=u("MazIcon"),g=u("EyeOffIcon"),p=u("EyeIcon"),b=u("MazBtn"),z=u("CheckIcon");return l(),c("div",{class:V(["m-input",[{"--is-focused":e.isFocused||e.borderActive,"--should-up":e.shouldUp,"--has-label":e.hasLabel,"--is-disabled":e.disabled,"--is-readonly":e.readonly,"--has-z-2":e.error||e.warning||e.success,"--has-state":e.error||e.warning||e.success},e.$attrs.class,`--${e.color}`,`--${e.size}`]]),onClick:a[2]||(a[2]=d=>e.$emit("click",d))},[B("div",{class:V(["m-input-wrapper",[e.inputClasses,e.borderStyle,{"maz-rounded":!e.noRadius}]])},[e.hasLeftPart()?(l(),c("div",oe,[e.$slots["left-icon"]||e.leftIcon?k(e.$slots,"left-icon",{key:0},()=>[v(y,{name:e.leftIcon,class:"maz-text-xl maz-text-muted"},null,8,["name"])],!0):s("v-if",!0)])):s("v-if",!0),B("div",re,[U(B("input",H({id:e.instanceId,ref:"input","onUpdate:modelValue":a[0]||(a[0]=d=>e.inputValue=d),type:e.inputType,name:e.name},e.$attrs,{placeholder:e.computedPlaceholder,"aria-label":e.label||e.placeholder,disabled:e.disabled,readonly:e.readonly,required:e.required,class:"m-input-input"},j({blur:e.blur,focus:e.focus,change:e.change},!0)),null,16,le),[[G,e.inputValue]]),e.label||e.hint?(l(),c("label",{key:0,ref:"label",for:e.instanceId,class:V(["m-input-label",[{"maz-text-danger-600":e.error,"maz-text-success-600":e.success,"maz-text-warning-600":e.warning}]])},[J(K(e.hint||e.label)+" ",1),e.required?(l(),c("sup",ie,"*")):s("v-if",!0)],10,se)):s("v-if",!0)]),e.hasRightPart()?(l(),c("div",de,[e.$slots["right-icon"]||e.rightIcon?k(e.$slots,"right-icon",{key:0},()=>[v(y,{name:e.rightIcon,class:"maz-text-xl maz-text-muted"},null,8,["name"])],!0):s("v-if",!0),e.isPasswordType?(l(),$(b,{key:1,color:"transparent",tabindex:"-1",size:"mini",onClick:a[1]||(a[1]=Q(d=>e.hasPasswordVisible=!e.hasPasswordVisible,["stop"]))},{default:E(()=>[e.hasPasswordVisible?(l(),$(g,{key:0,class:"maz-text-xl maz-text-muted"})):(l(),$(p,{key:1,class:"maz-text-xl maz-text-muted"}))]),_:1})):s("v-if",!0),e.$slots["valid-button"]||e.validButton?k(e.$slots,"valid-button",{key:2},()=>[v(b,{color:"transparent",disabled:e.disabled,tabindex:"-1",loading:e.validButtonLoading,class:"m-input-valid-button",size:"mini",type:"submit"},{default:E(()=>[v(z,{class:"maz-text-2xl maz-text-normal"})]),_:1},8,["disabled","loading"])],!0):s("v-if",!0)])):s("v-if",!0)],2)],2)}const fe=ne(te,[["render",ue],["__scopeId","data-v-52aef9c7"]]);export{fe as M,ne as _};
