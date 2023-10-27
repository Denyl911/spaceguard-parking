<template>
    <section class="bg-slate-400">
        <div class="container p-4">
            <h1 style="color: black; font-family: Verdana; font-size: 36px;"><b>Inventario - Modificación</b></h1>            
            <MazInput class="mt-8" v-model="buscarProducto" label="ID Producto"/>
            <MazBtn class="mt-2 mb-5" color="black">Buscar artículo</MazBtn>
            <div class = "w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
                <h2 style="color: white; font-family: Verdana; font-size: 36px;" class="mt-8">Datos del artículo:</h2>
                <MazInput class="mb-1" v-model="IDProveedor" label="ID proveedor"/>
                <MazInput class="mb-1" v-model="IDProducto" label="ID producto"/>
                <MazInput class="mb-1" v-model="nombre" label="Nombre"/>
                <MazInput class="mb-1" v-model="descripcion" label="Descripcion"/>
                <MazInput class="mb-1" v-model="precioporunidad" label="Precio por unidad"/>
                <MazInput class="mb-1" v-model="stock" label="Stock"/>
                <MazInput class="mb-1" v-model="imagen" label="Imagen"/>
            </div>            
            <MazBtn rounded class="mt-6 w-80" color="black" pastel>Guardar y actualizar</MazBtn>
        </div>
    </section>
</template>


<script setup>
    import { ref } from 'vue'
    import MazInput from 'maz-ui/components/MazInput'

    let buscarProducto = ref('');
    let IDProveedor = ref('');
    let IDProducto = ref('');
    let nombre = ref('');
    let descripcion = ref('');
    let precioporunidad = ref('');
    let stock = ref('');
    let imagen = ref('');


</script>