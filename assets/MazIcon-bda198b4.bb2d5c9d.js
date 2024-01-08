import{d as $,r as g,I as p,v as b,h as C,o as h,c as S,H as i,$ as P,a9 as _,ac as A,a8 as H}from"./entry.4c593aaa.js";function I(s,u){const a=A(s,u);if(!a)throw new TypeError(`[maz-ui](injectStrict) Could not resolve ${s}`);return a}const q=["innerHTML"],G=$({__name:"MazIcon",props:{src:{type:String,default:void 0},path:{type:String,default:void 0},name:{type:String,default:void 0},size:{type:String,default:void 0},title:{type:String,default:void 0},transformSource:{type:Function,default:s=>s}},emits:["loaded","unloaded","error"],setup(s,{emit:u}){const a={},l=g(),v=g(),w=()=>{try{return I("mazIconPath")}catch{return}},o=s,d=u,f=p(()=>o.path??w()),E=p(()=>o.src?o.src:f.value?`${f.value}/${o.name}.svg`:`/${o.name}.svg`);b(()=>{!o.name&&!o.src&&console.error('[maz-ui](MazIcon) you should provide "name" or "src" as prop')});const y=(e,n)=>{const t=e.querySelectorAll("title");if(t.length>0)t[0].textContent=n;else{const r=document.createElementNS("http://www.w3.org/2000/svg","title");r.textContent=n,e.append(r)}},z=e=>Object.keys(e).reduce((n,t)=>(e[t]!==!1&&e[t]!==null&&e[t]!==void 0&&(n[t]=e[t]),n),{}),M=e=>{const n={},t=e.attributes;if(!t)return n;for(let r=t.length-1;r>=0;r--)n[t[r].name]=t[r].value;return n},T=e=>{let n=e.cloneNode(!0);return n=o.transformSource(e),o.title&&y(n,o.title),e.innerHTML},x=async e=>{a[e]||(a[e]=L(e));try{l.value=await a[e],await H(),d("loaded",v.value)}catch(n){l.value&&(l.value=void 0,d("unloaded")),delete a[e],d("error",n)}},L=e=>new Promise((n,t)=>{const r=new XMLHttpRequest;r.open("GET",e,!0),r.addEventListener("load",()=>{if(r.status>=200&&r.status<400)try{let c=new DOMParser().parseFromString(r.responseText,"text/xml").querySelectorAll("svg")[0];c?(c=o.transformSource(c),n(c)):t(new Error('Loaded file is not valid SVG"'))}catch(m){t(m)}else t(new Error("Error loading SVG"))}),r.addEventListener("error",()=>t()),r.send()});return C(()=>x(E.value)),(e,n)=>(h(),S(_,null,[i(" eslint-disable vue/no-v-html "),i(" eslint-disable vue/html-self-closing "),l.value?(h(),S("svg",P({key:0,ref_key:"svgElem",ref:v,width:"1em",height:"1em"},{...M(l.value),...z(e.$attrs)},{style:`font-size: ${s.size}`,innerHTML:T(l.value)}),null,16,q)):i("v-if",!0),i(" eslint-enable vue/no-v-html "),i(" eslint-enable vue/html-self-closing ")],2112))}});export{G as default};