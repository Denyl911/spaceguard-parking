import{M as g}from"./MazBtn-000f9f66.364c4031.js";import{M as t}from"./MazInput-8e284503.83ae3601.js";import{r as s,c as k,b as u,f as a,y as o,z as d,w as I,o as w,g as U}from"./entry.160f932c.js";const z={class:"bg-slate-400"},D={class:"container p-4"},M=u("h1",{style:{color:"black","font-family":"Verdana","font-size":"36px"}},[u("b",null,"Inventario - Modificación")],-1),v={class:"w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md"},x=u("h2",{style:{color:"white","font-family":"Verdana","font-size":"36px"},class:"mt-8"},"Datos del artículo:",-1),C={__name:"InventarioModificacion",setup(y){let r=s(""),m=s(""),n=s(""),i=s(""),c=s(""),p=s(""),V=s(""),b=s("");return(B,e)=>{const f=g;return w(),k("section",z,[u("div",D,[M,a(o(t),{class:"mt-8",modelValue:o(r),"onUpdate:modelValue":e[0]||(e[0]=l=>d(r)?r.value=l:r=l),label:"ID Producto"},null,8,["modelValue"]),a(f,{class:"mt-2 mb-5",color:"black"},{default:I(()=>[U("Buscar artículo")]),_:1}),u("div",v,[x,a(o(t),{class:"mb-1",modelValue:o(m),"onUpdate:modelValue":e[1]||(e[1]=l=>d(m)?m.value=l:m=l),label:"ID proveedor"},null,8,["modelValue"]),a(o(t),{class:"mb-1",modelValue:o(n),"onUpdate:modelValue":e[2]||(e[2]=l=>d(n)?n.value=l:n=l),label:"ID producto"},null,8,["modelValue"]),a(o(t),{class:"mb-1",modelValue:o(i),"onUpdate:modelValue":e[3]||(e[3]=l=>d(i)?i.value=l:i=l),label:"Nombre"},null,8,["modelValue"]),a(o(t),{class:"mb-1",modelValue:o(c),"onUpdate:modelValue":e[4]||(e[4]=l=>d(c)?c.value=l:c=l),label:"Descripcion"},null,8,["modelValue"]),a(o(t),{class:"mb-1",modelValue:o(p),"onUpdate:modelValue":e[5]||(e[5]=l=>d(p)?p.value=l:p=l),label:"Precio por unidad"},null,8,["modelValue"]),a(o(t),{class:"mb-1",modelValue:o(V),"onUpdate:modelValue":e[6]||(e[6]=l=>d(V)?V.value=l:V=l),label:"Stock"},null,8,["modelValue"]),a(o(t),{class:"mb-1",modelValue:o(b),"onUpdate:modelValue":e[7]||(e[7]=l=>d(b)?b.value=l:b=l),label:"Imagen"},null,8,["modelValue"])]),a(f,{rounded:"",class:"mt-6 w-80",color:"black",pastel:""},{default:I(()=>[U("Guardar y actualizar")]),_:1})])])}}};export{C as default};