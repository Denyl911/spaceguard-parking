<template>
<section class="bg-slate-400">
        <div class="container p-4 grid grid-cols-[350px_900px]">            
            <form @submit.prevent="agregarProducto">
                <div class="mb-4">
                    <h1 style="color: black; font-family: Verdana; font-size: 36px;"><b>Inventario - Registro</b></h1>
                    <label for="id_proveedor" class="block text-black ...">ID_Proveedor:</label>
                    <input v-model="nuevoProducto.id_proveedor" id="id_proveedor"/>
                    <label for="id_producto" class="block text-black ...">ID_Producto:</label>
                    <input v-model="nuevoProducto.id_producto" id="id_producto"/>
                    <label for="nombre" class="block text-black ...">Nombre:</label>
                    <input v-model="nuevoProducto.nombre" id="nombre"/>
                    <label for="descripcion" class="block text-black ...">Descripción:</label>
                    <input v-model="nuevoProducto.descripcion" id="descripcion"/>
                    <label for="PrecioUnidad" class="block text-black ...">Precio por unidad:</label>
                    <input v-model="nuevoProducto.PrecioUnidad" id="PrecioUnidad"/>
                    <label for="stock" class="block text-black ...">Stock:</label>
                    <input v-model="nuevoProducto.stock" id="stock"/>
                    <label for="Imagen" class="block text-black ...">Imagen:</label>
                    <input v-model="nuevoProducto.imagen" id="Imagen" @keyup.enter="agregarProducto"/><br>
                    <MazBtn rounded class="mt-20 w-60" color="black" pastel  @click="agregarProducto">Guardar</MazBtn>
                </div>
            </form>
            
            <div>
                <table class="border-collapse border border-slate-500 ..." style="width: 100%;">
                    <thead>
                        <tr>
                            <th class="border border-slate-600 ...">ID_Proveedor</th>
                            <th class="border border-slate-600 ...">ID_Producto</th>
                            <th class="border border-slate-600 ...">Nombre</th>
                            <th class="border border-slate-600 ...">Descripción</th>
                            <th class="border border-slate-600 ...">Precio por unidad</th>
                            <th class="border border-slate-600 ...">Stock</th>
                            <th class="border border-slate-600 ...">Imagen</th>
                        </tr>
                    </thead>
                    <tbody>    
                        <tr v-for="(producto, index) in productos" :key="index">
                            <td class="border border-slate-700 ...">{{ producto.id_proveedor }}</td>
                            <td class="border border-slate-700 ...">{{ producto.id_producto }}</td>
                            <td class="border border-slate-700 ...">{{ producto.nombre }}</td>
                            <td class="border border-slate-700 ...">{{ producto.descripcion }}</td>
                            <td class="border border-slate-700 ...">{{ producto.PrecioUnidad }}</td>
                            <td class="border border-slate-700 ...">{{ producto.stock }}</td>
                            <td class="border border-slate-700 ...">{{ producto.imagen }}</td>
                        </tr>
                    </tbody>
                </table>    
            </div>                    
        </div>
    </section>
</template>



<script>
export default {
    data() {
        return {
        nuevoProducto: {
            id_proveedor: "",
            id_producto: "",
            nombre: "",
            descripcion: "",
            PrecioUnidad: "",
            stock: "",
            imagen: "",
        },
        productos: []
        };
    },
    methods: {
    agregarProducto() {
        // Agrega el nuevo producto al arreglo de productos
        this.productos.push(this.nuevoProducto);

        this.nuevoProducto = {
            id_proveedor: "",
            id_producto: "",
            nombre: "",
            descripcion: "",
            PrecioUnidad: "",
            stock: "",
            imagen: "",
        };
        }
    }
};
</script>
