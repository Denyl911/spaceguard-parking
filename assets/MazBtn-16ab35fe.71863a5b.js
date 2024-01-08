import{d as L,Z as M,$ as P,a0 as D,L as t,o as n,D as s,w as R,c as v,n as u,a1 as r,B as d,a2 as o,b as A,a3 as V,a4 as w,a5 as p,a6 as z}from"./entry.55f2f3a7.js";import"./MazBtn-000f9f66.b425f858.js";import{_ as T}from"./MazSelect-1f4d1193.7d6bce71.js";const N=L({__name:"MazBtn",props:{variant:{type:String,default:"button",validator:e=>["button","link"].includes(e)},size:{type:String,default:"md",validator:e=>["mini","xs","sm","md","lg","xl"].includes(e)},color:{type:String,default:"primary"},type:{type:String,default:"button",validator:e=>["button","submit","reset"].includes(e)},rounded:{type:Boolean,default:!1},noRounded:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},pastel:{type:Boolean,default:!1},block:{type:Boolean,default:!1},noUnderline:{type:Boolean,default:!1},noLeading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},fab:{type:Boolean,default:!1},icon:{type:String,default:void 0},leftIcon:{type:String,default:void 0},rightIcon:{type:String,default:void 0},noPadding:{type:Boolean,default:!1},noElevation:{type:Boolean,default:!1}},setup(e){const B=p(()=>z(()=>import("./MazSpinner-5fdafc97.90cd79a9.js"),["./MazSpinner-5fdafc97.90cd79a9.js","./MazSelect-1f4d1193.7d6bce71.js","./entry.55f2f3a7.js","./entry.8bfc4f1d.css","./MazSelect-1f4d1193.83541082.css","./MazSpinner-331f6dc8.728df06e.css"],import.meta.url)),c=p(()=>z(()=>import("./MazIcon-bda198b4.aa03112b.js"),["./MazIcon-bda198b4.aa03112b.js","./entry.55f2f3a7.js","./entry.8bfc4f1d.css"],import.meta.url)),{href:h,to:I}=M(),b=P(),a=e;D(()=>{a.icon&&!a.fab&&console.error('[maz-ui](MazBtn) the prop "icon" must be used only with "fab" props')});const f=t(()=>h?"a":I?"router-link":"button"),k=t(()=>a.pastel?`--${a.color}-pastel`:a.outline?`--${a.color}-outline`:`--${a.color}`),m=t(()=>(a.loading||a.disabled)&&f.value==="button"),$=t(()=>m.value?"--cursor-default":"--cursor-pointer"),C=t(()=>`--is-${a.variant}`),l=t(()=>a.loading&&a.variant==="button"),y=t(()=>!!b["left-icon"]||a.leftIcon),g=t(()=>!!b["right-icon"]||a.rightIcon),S=t(()=>y.value||g.value),x=t(()=>a.fab&&a.icon),E=t(()=>f.value==="button"?a.type:void 0);return(i,O)=>(n(),s(w(f.value),V(i.$attrs,{disabled:m.value,class:["m-btn",[`--${e.size}`,k.value,$.value,C.value,{"--block":e.block,"--no-underline":e.noUnderline,"--no-leading":e.noLeading,"--fab":e.fab,"--loading":e.loading,"--disabled":m.value,"--icon":S.value,"--rounded":e.rounded,"--no-rounded":e.noRounded,"--no-padding":e.noPadding,"--no-elevation":e.noElevation}]],type:E.value}),{default:R(()=>[y.value?(n(),v("div",{key:0,class:u(["m-btn__icon-left maz-flex maz-flex-center",{"maz-invisible":l.value}])},[r(i.$slots,"left-icon",{},()=>[e.leftIcon?(n(),s(d(c),{key:0,name:e.leftIcon},null,8,["name"])):o("v-if",!0)],!0)],2)):o("v-if",!0),x.value?(n(),v("div",{key:1,class:u(["m-btn__icon maz-flex maz-flex-center",{"maz-invisible":l.value}])},[r(i.$slots,"icon",{},()=>[e.icon?(n(),s(d(c),{key:0,name:e.icon},null,8,["name"])):o("v-if",!0)],!0)],2)):o("v-if",!0),A("span",{class:u(["maz-flex maz-flex-center",{"maz-invisible":l.value}])},[r(i.$slots,"default",{},void 0,!0)],2),g.value?(n(),v("div",{key:2,class:u(["m-btn__icon-right maz-flex maz-flex-center",{"maz-invisible":l.value}])},[r(i.$slots,"right-icon",{},()=>[e.rightIcon?(n(),s(d(c),{key:0,name:e.rightIcon},null,8,["name"])):o("v-if",!0)],!0)],2)):o("v-if",!0),l.value?(n(),s(d(B),{key:3,size:"2em",color:e.color,class:"maz-absolute"},null,8,["color"])):o("v-if",!0)]),_:3},16,["disabled","class","type"]))}}),j=T(N,[["__scopeId","data-v-054acd3d"]]);export{j as default};
