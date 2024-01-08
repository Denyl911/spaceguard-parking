import{d as E,Z as L,$ as P,a0 as D,L as t,o as n,D as u,w as R,c as g,n as r,a1 as d,B as c,a2 as o,b as A,a3 as V,a4 as w,a5 as h,a6 as k}from"./entry.55f2f3a7.js";const O=E({__name:"MazBtn",props:{variant:{type:String,default:"button",validator:e=>["button","link"].includes(e)},size:{type:String,default:"md",validator:e=>["mini","xs","sm","md","lg","xl"].includes(e)},color:{type:String,default:"primary"},type:{type:String,default:"button",validator:e=>["button","submit","reset"].includes(e)},rounded:{type:Boolean,default:!1},noRounded:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},pastel:{type:Boolean,default:!1},block:{type:Boolean,default:!1},noUnderline:{type:Boolean,default:!1},noLeading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},fab:{type:Boolean,default:!1},icon:{type:String,default:void 0},leftIcon:{type:String,default:void 0},rightIcon:{type:String,default:void 0},noPadding:{type:Boolean,default:!1},noElevation:{type:Boolean,default:!1}},setup(e){const f=h(()=>k(()=>import("./MazSpinner-984d259a.2e7f2f75.js"),["./MazSpinner-984d259a.2e7f2f75.js","./entry.55f2f3a7.js","./entry.8bfc4f1d.css","./MazSpinner-331f6dc8.728df06e.css"],import.meta.url)),l=h(()=>k(()=>import("./MazIcon-bda198b4.aa03112b.js"),["./MazIcon-bda198b4.aa03112b.js","./entry.55f2f3a7.js","./entry.8bfc4f1d.css"],import.meta.url)),{href:v,to:m}=L(),z=P(),a=e;D(()=>{a.icon&&!a.fab&&console.error('[maz-ui](MazBtn) the prop "icon" must be used only with "fab" props')});const b=t(()=>v?"a":m?"router-link":"button"),I=t(()=>a.pastel?`--${a.color}-pastel`:a.outline?`--${a.color}-outline`:`--${a.color}`),y=t(()=>(a.loading||a.disabled)&&b.value==="button"),$=t(()=>y.value?"--cursor-default":"--cursor-pointer"),C=t(()=>`--is-${a.variant}`),i=t(()=>a.loading&&a.variant==="button"),p=t(()=>!!z["left-icon"]||a.leftIcon),B=t(()=>!!z["right-icon"]||a.rightIcon),S=t(()=>p.value||B.value),x=t(()=>a.fab&&a.icon),M=t(()=>b.value==="button"?a.type:void 0);return(s,N)=>(n(),u(w(b.value),V(s.$attrs,{disabled:y.value,class:["m-btn",[`--${e.size}`,I.value,$.value,C.value,{"--block":e.block,"--no-underline":e.noUnderline,"--no-leading":e.noLeading,"--fab":e.fab,"--loading":e.loading,"--disabled":y.value,"--icon":S.value,"--rounded":e.rounded,"--no-rounded":e.noRounded,"--no-padding":e.noPadding,"--no-elevation":e.noElevation}]],type:M.value}),{default:R(()=>[p.value?(n(),g("div",{key:0,class:r(["m-btn__icon-left maz-flex maz-flex-center",{"maz-invisible":i.value}])},[d(s.$slots,"left-icon",{},()=>[e.leftIcon?(n(),u(c(l),{key:0,name:e.leftIcon},null,8,["name"])):o("v-if",!0)],!0)],2)):o("v-if",!0),x.value?(n(),g("div",{key:1,class:r(["m-btn__icon maz-flex maz-flex-center",{"maz-invisible":i.value}])},[d(s.$slots,"icon",{},()=>[e.icon?(n(),u(c(l),{key:0,name:e.icon},null,8,["name"])):o("v-if",!0)],!0)],2)):o("v-if",!0),A("span",{class:r(["maz-flex maz-flex-center",{"maz-invisible":i.value}])},[d(s.$slots,"default",{},void 0,!0)],2),B.value?(n(),g("div",{key:2,class:r(["m-btn__icon-right maz-flex maz-flex-center",{"maz-invisible":i.value}])},[d(s.$slots,"right-icon",{},()=>[e.rightIcon?(n(),u(c(l),{key:0,name:e.rightIcon},null,8,["name"])):o("v-if",!0)],!0)],2)):o("v-if",!0),i.value?(n(),u(c(f),{key:3,size:"2em",color:e.color,class:"maz-absolute"},null,8,["color"])):o("v-if",!0)]),_:3},16,["disabled","class","type"]))}}),T=(e,f)=>{const l=e.__vccOpts||e;for(const[v,m]of f)l[v]=m;return l},F=T(O,[["__scopeId","data-v-054acd3d"]]);export{F as M,T as _};
