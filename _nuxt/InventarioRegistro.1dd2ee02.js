import{M as b}from"./MazBtn-000f9f66.7c8d4601.js";import{e as _,c as i,b as o,K as p,A as s,P as d,O as m,f as P,w as v,Q as k,R as g,o as c,g as h,t as l}from"./entry.a4d36130.js";const f={data(){return{nuevoProducto:{id_proveedor:"",id_producto:"",nombre:"",descripcion:"",PrecioUnidad:"",stock:"",imagen:""},productos:[]}},methods:{agregarProducto(){this.productos.push(this.nuevoProducto),this.nuevoProducto={id_proveedor:"",id_producto:"",nombre:"",descripcion:"",PrecioUnidad:"",stock:"",imagen:""}}}},x={class:"bg-slate-400"},U={class:"container p-4 grid grid-cols-[350px_900px]"},V={class:"mb-4"},I=o("h1",{style:{color:"black","font-family":"Verdana","font-size":"36px"}},[o("b",null,"Inventario - Registro")],-1),y=o("label",{for:"id_proveedor",class:"block text-black ..."},"ID_Proveedor:",-1),D=o("label",{for:"id_producto",class:"block text-black ..."},"ID_Producto:",-1),w=o("label",{for:"nombre",class:"block text-black ..."},"Nombre:",-1),B=o("label",{for:"descripcion",class:"block text-black ..."},"Descripción:",-1),M=o("label",{for:"PrecioUnidad",class:"block text-black ..."},"Precio por unidad:",-1),N=o("label",{for:"stock",class:"block text-black ..."},"Stock:",-1),S=o("label",{for:"Imagen",class:"block text-black ..."},"Imagen:",-1),z=o("br",null,null,-1),C={class:"border-collapse border border-slate-500 ...",style:{width:"100%"}},K=o("thead",null,[o("tr",null,[o("th",{class:"border border-slate-600 ..."},"ID_Proveedor"),o("th",{class:"border border-slate-600 ..."},"ID_Producto"),o("th",{class:"border border-slate-600 ..."},"Nombre"),o("th",{class:"border border-slate-600 ..."},"Descripción"),o("th",{class:"border border-slate-600 ..."},"Precio por unidad"),o("th",{class:"border border-slate-600 ..."},"Stock"),o("th",{class:"border border-slate-600 ..."},"Imagen")])],-1),R={class:"border border-slate-700 ..."},T={class:"border border-slate-700 ..."},A={class:"border border-slate-700 ..."},E={class:"border border-slate-700 ..."},F={class:"border border-slate-700 ..."},G={class:"border border-slate-700 ..."},L={class:"border border-slate-700 ..."};function O(Q,r,j,q,t,n){const a=b;return c(),i("section",x,[o("div",U,[o("form",{onSubmit:r[8]||(r[8]=p((...e)=>n.agregarProducto&&n.agregarProducto(...e),["prevent"]))},[o("div",V,[I,y,s(o("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>t.nuevoProducto.id_proveedor=e),id:"id_proveedor"},null,512),[[d,t.nuevoProducto.id_proveedor]]),D,s(o("input",{"onUpdate:modelValue":r[1]||(r[1]=e=>t.nuevoProducto.id_producto=e),id:"id_producto"},null,512),[[d,t.nuevoProducto.id_producto]]),w,s(o("input",{"onUpdate:modelValue":r[2]||(r[2]=e=>t.nuevoProducto.nombre=e),id:"nombre"},null,512),[[d,t.nuevoProducto.nombre]]),B,s(o("input",{"onUpdate:modelValue":r[3]||(r[3]=e=>t.nuevoProducto.descripcion=e),id:"descripcion"},null,512),[[d,t.nuevoProducto.descripcion]]),M,s(o("input",{"onUpdate:modelValue":r[4]||(r[4]=e=>t.nuevoProducto.PrecioUnidad=e),id:"PrecioUnidad"},null,512),[[d,t.nuevoProducto.PrecioUnidad]]),N,s(o("input",{"onUpdate:modelValue":r[5]||(r[5]=e=>t.nuevoProducto.stock=e),id:"stock"},null,512),[[d,t.nuevoProducto.stock]]),S,s(o("input",{"onUpdate:modelValue":r[6]||(r[6]=e=>t.nuevoProducto.imagen=e),id:"Imagen",onKeyup:r[7]||(r[7]=m((...e)=>n.agregarProducto&&n.agregarProducto(...e),["enter"]))},null,544),[[d,t.nuevoProducto.imagen]]),z,P(a,{rounded:"",class:"mt-20 w-60",color:"black",pastel:"",onClick:n.agregarProducto},{default:v(()=>[h("Guardar")]),_:1},8,["onClick"])])],32),o("div",null,[o("table",C,[K,o("tbody",null,[(c(!0),i(k,null,g(t.productos,(e,u)=>(c(),i("tr",{key:u},[o("td",R,l(e.id_proveedor),1),o("td",T,l(e.id_producto),1),o("td",A,l(e.nombre),1),o("td",E,l(e.descripcion),1),o("td",F,l(e.PrecioUnidad),1),o("td",G,l(e.stock),1),o("td",L,l(e.imagen),1)]))),128))])])])])])}const W=_(f,[["render",O]]);export{W as default};
