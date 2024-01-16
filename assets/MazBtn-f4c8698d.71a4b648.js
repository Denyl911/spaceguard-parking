import{_ as M,d as L,W as P,X as R,Y as A,I as t,o as n,F as s,w as D,c as m,n as u,Z as r,B as d,E as o,b as V,$ as w,a0 as T,a1 as z,a2 as p}from"./entry.20fd3aae.js";const F=L({__name:"MazBtn",props:{variant:{type:String,default:"button",validator:e=>["button","link"].includes(e)},size:{type:String,default:"md",validator:e=>["mini","xs","sm","md","lg","xl"].includes(e)},color:{type:String,default:"primary"},type:{type:String,default:"button",validator:e=>["button","submit","reset"].includes(e)},rounded:{type:Boolean,default:!1},noRounded:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},pastel:{type:Boolean,default:!1},block:{type:Boolean,default:!1},noUnderline:{type:Boolean,default:!1},noLeading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},fab:{type:Boolean,default:!1},icon:{type:String,default:void 0},leftIcon:{type:String,default:void 0},rightIcon:{type:String,default:void 0},noPadding:{type:Boolean,default:!1},noElevation:{type:Boolean,default:!1}},setup(e){const B=z(()=>p(()=>import("./MazSpinner-331f6dc8.8f28330d.js"),["./MazSpinner-331f6dc8.8f28330d.js","./entry.20fd3aae.js","./entry.fe6028ed.css","./MazSpinner-331f6dc8.728df06e.css"],import.meta.url)),c=z(()=>p(()=>import("./MazIcon-2c79b9d8.e5976317.js"),["./MazIcon-2c79b9d8.e5976317.js","./entry.20fd3aae.js","./entry.fe6028ed.css"],import.meta.url)),{href:h,to:I}=P(),b=R(),a=e;A(()=>{a.icon&&!a.fab&&console.error('[maz-ui](MazBtn) the prop "icon" must be used only with "fab" props')});const f=t(()=>h?"a":I?"router-link":"button"),k=t(()=>a.pastel?`--${a.color}-pastel`:a.outline?`--${a.color}-outline`:`--${a.color}`),v=t(()=>(a.loading||a.disabled)&&f.value==="button"),$=t(()=>v.value?"--cursor-default":"--cursor-pointer"),C=t(()=>`--is-${a.variant}`),l=t(()=>a.loading&&a.variant==="button"),y=t(()=>!!b["left-icon"]||a.leftIcon),g=t(()=>!!b["right-icon"]||a.rightIcon),S=t(()=>y.value||g.value),x=t(()=>a.fab&&a.icon),E=t(()=>f.value==="button"?a.type:void 0);return(i,N)=>(n(),s(T(f.value),w(i.$attrs,{disabled:v.value,class:["m-btn",[`--${e.size}`,k.value,$.value,C.value,{"--block":e.block,"--no-underline":e.noUnderline,"--no-leading":e.noLeading,"--fab":e.fab,"--loading":e.loading,"--disabled":v.value,"--icon":S.value,"--rounded":e.rounded,"--no-rounded":e.noRounded,"--no-padding":e.noPadding,"--no-elevation":e.noElevation}]],type:E.value}),{default:D(()=>[y.value?(n(),m("div",{key:0,class:u(["m-btn__icon-left maz-flex maz-flex-center",{"maz-invisible":l.value}])},[r(i.$slots,"left-icon",{},()=>[e.leftIcon?(n(),s(d(c),{key:0,name:e.leftIcon},null,8,["name"])):o("v-if",!0)],!0)],2)):o("v-if",!0),x.value?(n(),m("div",{key:1,class:u(["m-btn__icon maz-flex maz-flex-center",{"maz-invisible":l.value}])},[r(i.$slots,"icon",{},()=>[e.icon?(n(),s(d(c),{key:0,name:e.icon},null,8,["name"])):o("v-if",!0)],!0)],2)):o("v-if",!0),V("span",{class:u(["maz-flex maz-flex-center",{"maz-invisible":l.value}])},[r(i.$slots,"default",{},void 0,!0)],2),g.value?(n(),m("div",{key:2,class:u(["m-btn__icon-right maz-flex maz-flex-center",{"maz-invisible":l.value}])},[r(i.$slots,"right-icon",{},()=>[e.rightIcon?(n(),s(d(c),{key:0,name:e.rightIcon},null,8,["name"])):o("v-if",!0)],!0)],2)):o("v-if",!0),l.value?(n(),s(d(B),{key:3,size:"2em",color:e.color,class:"maz-absolute"},null,8,["color"])):o("v-if",!0)]),_:3},16,["disabled","class","type"]))}}),U=M(F,[["__scopeId","data-v-054acd3d"]]);export{U as default};