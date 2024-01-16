import{r as c,d as ne,I as m,Y as be,k as he,a8 as J,o as f,c as b,f as V,w as _,b as C,a5 as G,B as Z,$ as ie,n as A,G as le,E as y,Z as R,a9 as ge,aa as ze,t as se,a6 as Ve,a1 as B,s as ue,v as we,O as N,z as Ie,a3 as ke,a4 as Se,g as $e,F as X,a2 as L}from"./entry.20fd3aae.js";function Be(e,n){let d;return(...w)=>{d&&clearTimeout(d),d=setTimeout(()=>{e(...w)},n)}}const re=({componentName:e,instance:n,providedId:d})=>m(()=>d??`${e}-${n==null?void 0:n.uid}`),Le=B(()=>L(()=>import("./MazBtn-16ab35fe.3f115893.js"),["./MazBtn-16ab35fe.3f115893.js","./entry.20fd3aae.js","./entry.fe6028ed.css","./MazBtn-000f9f66.6fed24bc.js","./MazBtn-000f9f66.38af7d2c.css"],import.meta.url)),Ee=B(()=>L(()=>import("./MazIcon-bda198b4.58e1f15d.js"),["./MazIcon-bda198b4.58e1f15d.js","./entry.20fd3aae.js","./entry.fe6028ed.css"],import.meta.url)),Ke=B(()=>L(()=>import("./eye-slash-3c6844fc.6979a2e4.js"),["./eye-slash-3c6844fc.6979a2e4.js","./entry.20fd3aae.js","./entry.fe6028ed.css"],import.meta.url)),Pe=B(()=>L(()=>import("./eye-290c6a03.8676cb6c.js"),["./eye-290c6a03.8676cb6c.js","./entry.20fd3aae.js","./entry.fe6028ed.css"],import.meta.url)),Ce=B(()=>L(()=>import("./check-b1507ce9.5afb4588.js"),["./check-b1507ce9.5afb4588.js","./entry.20fd3aae.js","./entry.fe6028ed.css"],import.meta.url)),Ae=ne({components:{MazBtn:Le,MazIcon:Ee,CheckIcon:Ce,EyeIcon:Pe,EyeOffIcon:Ke},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Boolean],default:void 0},placeholder:{type:String,default:void 0},color:{type:String,default:"primary"},label:{type:String,default:void 0},name:{type:String,default:"input"},type:{type:String,default:"text",validator:e=>["text","date","number","tel","search","url","password","month","time","week","email"].includes(e)},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},id:{type:String,default:void 0},error:{type:Boolean,default:!1},success:{type:Boolean,default:!1},warning:{type:Boolean,default:!1},hint:{type:String,default:void 0},inputClasses:{type:String,default:void 0},noBorder:{type:Boolean,default:!1},noRadius:{type:Boolean,default:!1},size:{type:String,default:"md",validator:e=>["mini","xs","sm","md","lg","xl"].includes(e)},debounce:{type:Boolean,default:!1},debounceDelay:{type:Number,default:500},validButton:{type:Boolean,default:!1},validButtonLoading:{type:Boolean,default:!1},autoFocus:{type:Boolean,default:!1},borderActive:{type:Boolean,default:!1},leftIcon:{type:String,default:void 0},rightIcon:{type:String,default:void 0}},emits:["focus","blur","update:model-value","click","change","update"],setup(e,{emit:n,slots:d}){const w=c(!1),h=c(!1),D=c(),o=ue(),g=re({componentName:"MazInput",instance:o,providedId:e.id});we(()=>{var u;e.autoFocus&&((u=D.value)==null||u.focus())});const p=m(()=>e.type==="password"),s=m(()=>w.value?"text":e.type),I=m(()=>{if(!e.noBorder){if(e.error)return"maz-border-danger";if(e.success)return"maz-border-success";if(e.warning)return"maz-border-warning";if(h.value||e.borderActive){if(e.color==="black")return"maz-border-black";if(e.color==="danger")return"maz-border-danger";if(e.color==="info")return"maz-border-info";if(e.color==="primary")return"maz-border-primary";if(e.color==="secondary")return"maz-border-secondary";if(e.color==="success")return"maz-border-success";if(e.color==="warning")return"maz-border-warning";if(e.color==="white")return"maz-border-white"}return"--default-border"}}),S=m(()=>{const{required:u,placeholder:P}=e;if(P)return u?`${P} *`:P}),q=m(()=>e.modelValue!==void 0&&e.modelValue!==""),F=m({get:()=>e.modelValue,set:u=>T(u)}),H=m(()=>(!!e.label||!!e.hint)&&(h.value||!!q.value||!!e.placeholder||["date","month","week"].includes(e.type))),U=m(()=>!!e.label||!!e.hint),v=()=>!!d["right-icon"]||p.value||!!d["valid-button"]||e.validButton||!!e.rightIcon,K=()=>!!d["left-icon"]||!!e.leftIcon,Y=u=>{n("focus",u),h.value=!0},j=u=>{n("blur",u),h.value=!1},E=u=>n("change",u),$=Be(u=>{n("update:model-value",u)},e.debounceDelay),T=u=>{if(e.debounce)return $(u);n("update:model-value",u)};return{inputValue:F,shouldUp:H,hasLabel:U,computedPlaceholder:S,isPasswordType:p,inputType:s,input:D,isFocused:h,hasPasswordVisible:w,borderStyle:I,focus:Y,blur:j,change:E,emitValue:T,hasRightPart:v,hasLeftPart:K,instanceId:g}}}),de=(e,n)=>{const d=e.__vccOpts||e;for(const[w,h]of n)d[w]=h;return d},De={key:0,class:"m-input-wrapper-left"},Te={class:"m-input-wrapper-input"},Me=["id","type","name","placeholder","aria-label","disabled","readonly","required"],Oe=["for"],Ne={key:0},_e={key:1,class:"m-input-wrapper-right"};function Re(e,n,d,w,h,D){const o=N("MazIcon"),g=N("EyeOffIcon"),p=N("EyeIcon"),s=N("MazBtn"),I=N("CheckIcon");return f(),b("div",{class:A(["m-input",[{"--is-focused":e.isFocused||e.borderActive,"--should-up":e.shouldUp,"--has-label":e.hasLabel,"--is-disabled":e.disabled,"--is-readonly":e.readonly,"--has-z-2":e.error||e.warning||e.success,"--has-state":e.error||e.warning||e.success},e.$attrs.class,`--${e.color}`,`--${e.size}`]]),onClick:n[2]||(n[2]=S=>e.$emit("click",S))},[C("div",{class:A(["m-input-wrapper",[e.inputClasses,e.borderStyle,{"maz-rounded":!e.noRadius}]])},[e.hasLeftPart()?(f(),b("div",De,[e.$slots["left-icon"]||e.leftIcon?R(e.$slots,"left-icon",{key:0},()=>[V(o,{name:e.leftIcon,class:"maz-text-xl maz-text-muted"},null,8,["name"])],!0):y("v-if",!0)])):y("v-if",!0),C("div",Te,[Ie(C("input",ie({id:e.instanceId,ref:"input","onUpdate:modelValue":n[0]||(n[0]=S=>e.inputValue=S),type:e.inputType,name:e.name},e.$attrs,{placeholder:e.computedPlaceholder,"aria-label":e.label||e.placeholder,disabled:e.disabled,readonly:e.readonly,required:e.required,class:"m-input-input"},Se({blur:e.blur,focus:e.focus,change:e.change},!0)),null,16,Me),[[ke,e.inputValue]]),e.label||e.hint?(f(),b("label",{key:0,ref:"label",for:e.instanceId,class:A(["m-input-label",[{"maz-text-danger-600":e.error,"maz-text-success-600":e.success,"maz-text-warning-600":e.warning}]])},[$e(se(e.hint||e.label)+" ",1),e.required?(f(),b("sup",Ne,"*")):y("v-if",!0)],10,Oe)):y("v-if",!0)]),e.hasRightPart()?(f(),b("div",_e,[e.$slots["right-icon"]||e.rightIcon?R(e.$slots,"right-icon",{key:0},()=>[V(o,{name:e.rightIcon,class:"maz-text-xl maz-text-muted"},null,8,["name"])],!0):y("v-if",!0),e.isPasswordType?(f(),X(s,{key:1,color:"transparent",tabindex:"-1",size:"mini",onClick:n[1]||(n[1]=G(S=>e.hasPasswordVisible=!e.hasPasswordVisible,["stop"]))},{default:_(()=>[e.hasPasswordVisible?(f(),X(g,{key:0,class:"maz-text-xl maz-text-muted"})):(f(),X(p,{key:1,class:"maz-text-xl maz-text-muted"}))]),_:1})):y("v-if",!0),e.$slots["valid-button"]||e.validButton?R(e.$slots,"valid-button",{key:2},()=>[V(s,{color:"transparent",disabled:e.disabled,tabindex:"-1",loading:e.validButtonLoading,class:"m-input-valid-button",size:"mini",type:"submit"},{default:_(()=>[V(I,{class:"maz-text-2xl maz-text-normal"})]),_:1},8,["disabled","loading"])],!0):y("v-if",!0)])):y("v-if",!0)],2)],2)}const oe=de(Ae,[["render",Re],["__scopeId","data-v-52aef9c7"]]);c("system");c();c([]);let x=null;function qe(e,n){x&&clearTimeout(x),x=setTimeout(e,n)}const Fe=["onClick"],He={key:0,tabindex:"-1",class:"m-select-list__search-wrapper"},Ue={class:"m-select-list__no-results"},We={key:2,class:"m-select-list__scroll-wrapper",tabindex:"-1"},Qe=["onClick"],Ze=ne({__name:"MazSelect",props:{modelValue:{type:[Number,String,Boolean],default:void 0},id:{type:String,default:void 0},options:{type:Array,default:void 0},optionValueKey:{type:String,default:"value"},optionLabelKey:{type:String,default:"label"},optionInputValueKey:{type:String,default:"label"},listPosition:{type:String,default:"bottom left",validator:e=>["top","top right","top left","bottom","bottom right","bottom left"].includes(e)},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},open:{type:Boolean,default:!1},color:{type:String,default:"primary"},itemHeight:{type:Number,default:40},maxListHeight:{type:Number,default:240},maxListWidth:{type:Number,default:void 0},size:{type:String,default:"md",validator:e=>["mini","xs","sm","md","lg","xl"].includes(e)},search:{type:Boolean,default:!1},searchPlaceholder:{type:String,default:"Search in options"}},emits:["close","open","blur","focus","change","update:model-value","selected-option"],setup(e,{emit:n}){const d=B(()=>L(()=>import("./magnifying-glass-6a0dd1a2.cb572ffe.js"),["./magnifying-glass-6a0dd1a2.cb572ffe.js","./entry.20fd3aae.js","./entry.fe6028ed.css"],import.meta.url)),w=B(()=>L(()=>import("./chevron-down-7a070b10.0f81c999.js"),["./chevron-down-7a070b10.0f81c999.js","./entry.20fd3aae.js","./entry.fe6028ed.css"],import.meta.url)),h=B(()=>L(()=>import("./no-symbol-6173a20b.5260bd46.js"),["./no-symbol-6173a20b.5260bd46.js","./entry.20fd3aae.js","./entry.fe6028ed.css"],import.meta.url)),D=ue(),o=e,g=n,p=c(!1),s=c(),I=m(()=>p.value||o.open),S=re({componentName:"MazSelect",instance:D,providedId:o.id});be(()=>{var t,a;(t=o.options)!=null&&t.length||console.warn("[maz-ui](MazSelect) you must provide options"),v.value&&(s.value=(a=o.options)==null?void 0:a.findIndex(l=>{var i;return l[o.optionValueKey]===((i=v.value)==null?void 0:i[o.optionValueKey])}))});const q=c(),F=c(),H=c(),U=c(),v=m(()=>{var t;return(t=o.options)==null?void 0:t.find(a=>o.modelValue===a[o.optionValueKey])}),K=t=>t==null,Y=m(()=>{var t,a,l;return K((t=v.value)==null?void 0:t[o.optionValueKey])?void 0:((a=v.value)==null?void 0:a[o.optionInputValueKey])??((l=v.value)==null?void 0:l[o.optionLabelKey])}),j=m(()=>o.listPosition.includes("bottom")?"maz-slide":"maz-slideinvert"),E=c(""),$=c("");function T(t){return t.normalize("NFD").replaceAll(/[\u0300-\u036F]/g,"").replaceAll(/[^\dA-Za-z]/g,"")}const u=(t,a)=>a&&t&&T(t.toString().toLocaleLowerCase().trim()).includes(T(a.toLocaleLowerCase().trim()));he(()=>o.modelValue,(t,a)=>{t&&t!==a&&(Q(),te())});function P(t){var a;return t?(a=o.options)==null?void 0:a.filter(l=>{const i=l[o.optionLabelKey],r=l[o.optionValueKey],k=l[o.optionInputValueKey];return u(i,t)||u(r,t)||u(k,t)}):o.options}const z=m(()=>P(E.value)),W=async t=>{var a;if(t&&("relatedTarget"in t&&((a=q.value)!=null&&a.contains(t.relatedTarget))||t.type==="keydown"))return t.preventDefault();await J(),p.value=!1,s.value=0,g("close",t)},M=async t=>{t==null||t.preventDefault(),!o.disabled&&(p.value=!0,await Q(),g("focus",t),g("open",p.value))};function ce(t){var a,l;return p.value?W(t):((l=(a=F.value)==null?void 0:a.$el.querySelector("input"))==null?void 0:l.focus())??M()}function me(t){var a;E.value=t,(a=H.value)==null||a.input.focus()}function fe(t){var a;t==="Backspace"&&$.value.length>0?$.value=$.value.slice(0,-1):$.value+=t;const l=P($.value);l!=null&&l.length&&(s.value=(a=z.value)==null?void 0:a.findIndex(i=>i[o.optionValueKey]===l[0][o.optionValueKey]),Q(s.value)),qe(()=>{$.value=""},1e3)}const ve=t=>{const a=t.key;/^[\dA-Za-z]$/.test(a)?(t.preventDefault(),M(t),o.search?me(a):fe(a)):ee(t)},ee=t=>{const a=t.code,l=["ArrowUp","ArrowDown"].includes(a),i=a==="Enter",r=a==="Escape"&&I.value;l?pe(t,s.value):i?ye(t,s.value):r&&W()},pe=(t,a)=>{var l;t.preventDefault();const i=t.code;I.value||M(t);const r=(l=z.value)==null?void 0:l.length;r&&(typeof a=="number"?a===r-1&&i==="ArrowDown"?s.value=0:a===0&&i==="ArrowUp"?s.value=r-1:s.value=i==="ArrowDown"?a+1:a-1:s.value=i==="ArrowDown"?0:r-1,Q(s.value))},ye=(t,a)=>{var l,i,r;if(t.preventDefault(),!I.value)return M(t);const k=a?((l=z.value)==null?void 0:l[a])??((i=z.value)==null?void 0:i[0]):(r=z.value)==null?void 0:r[0];K(k)||ae(k)};async function Q(t){var a,l,i;await J();const r=t??((a=z.value)==null?void 0:a.findIndex(k=>{var O;return((O=v.value)==null?void 0:O[o.optionValueKey])===k[o.optionValueKey]}));typeof r=="number"&&(s.value||(s.value=r),(i=(l=U.value)==null?void 0:l.querySelectorAll(".m-select-list-item")[r])==null||i.scrollIntoView({behavior:"auto",block:"nearest",inline:"start"}))}function te(){var t;const a=(t=z.value)==null?void 0:t.findIndex(l=>v[o.optionValueKey]===l[o.optionValueKey]);s.value=a&&a>=0?a:void 0}const ae=(t,a=!0)=>{a&&J(()=>W()),E.value="",g("update:model-value",t[o.optionValueKey]),g("selected-option",t),te()};return(t,a)=>(f(),b("div",{ref_key:"mazSelectElement",ref:q,class:A(["m-select",{"--is-open":I.value,"--disabled":e.disabled}]),onBlurCapture:W},[V(oe,ie({id:Z(S),ref_key:"mazInputComponent",ref:F,class:"m-select-input"},t.$attrs,{required:e.required,"border-active":p.value,color:e.color,"model-value":Y.value,autocomplete:"off",size:e.size,disabled:e.disabled,onFocus:G(M,["prevent","stop"]),onChange:a[0]||(a[0]=l=>g("change",l)),onKeydown:ve}),{"right-icon":_(()=>[C("button",{tabindex:"-1",type:"button",class:"m-select-input__toggle-button maz-custom",onClick:G(ce,["stop"])},[V(Z(w),{class:"m-select-chevron maz-text-xl"})],8,Fe)]),_:1},16,["id","required","border-active","color","model-value","size","disabled","onFocus"]),V(Ve,{name:j.value},{default:_(()=>[I.value?(f(),b("div",{key:0,ref_key:"optionsListElement",ref:U,class:A(["m-select-list",{"--top":e.listPosition.includes("top"),"--left":e.listPosition.includes("left"),"--right":e.listPosition.includes("right"),"--bottom":e.listPosition.includes("bottom")}]),style:le({maxHeight:`${e.maxListHeight}px`,maxWidth:`${e.maxListWidth}px`})},[e.search?(f(),b("div",He,[V(oe,{ref_key:"searchInputComponent",ref:H,modelValue:E.value,"onUpdate:modelValue":[a[1]||(a[1]=l=>E.value=l),a[2]||(a[2]=l=>s.value=0)],size:"sm",color:e.color,placeholder:e.searchPlaceholder,name:"search",autocomplete:"off",tabindex:"-1",class:"m-select-list__search-input",onKeydown:ee},{"left-icon":_(()=>[V(Z(d),{class:"maz-h-[1.3rem] maz-w-[1.3rem]"})]),_:1},8,["modelValue","color","placeholder"])])):y("v-if",!0),y(" No results slot - Displayed when no results corresponding with seeach query "),!z.value||z.value.length<=0?R(t.$slots,"no-results",{key:1},()=>[C("span",Ue,[V(Z(h),{class:"maz-h-6 maz-w-6 maz-text-normal"})])],!0):(f(),b("div",We,[(f(!0),b(ge,null,ze(z.value,(l,i)=>{var r,k,O;return f(),b("button",{key:i,tabindex:"-1",type:"button",class:A(["m-select-list-item maz-custom",[{"--is-keyboard-selected":s.value===i,"--is-selected":((r=v.value)==null?void 0:r[e.optionValueKey])===l[e.optionValueKey]&&!K(l[e.optionValueKey]),"--is-none-value":K(l[e.optionValueKey])},`--${e.color}`]]),style:le({minHeight:`${e.itemHeight}px`}),onClick:G(Ge=>ae(l),["prevent","stop"])},[R(t.$slots,"default",{option:l,isSelected:((k=v.value)==null?void 0:k[e.optionValueKey])===l[e.optionValueKey],selectedOption:(O=v.value)==null?void 0:O[e.optionValueKey]},()=>[C("span",null,se(l[e.optionLabelKey]),1)],!0)],14,Qe)}),128))]))],6)):y("v-if",!0)]),_:3},8,["name"])],34))}}),je=de(Ze,[["__scopeId","data-v-2589528b"]]);export{je as M,de as _};