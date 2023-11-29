<template>
    <section class="bg-slate-400">
        <div class="container p-4">
            <h1 style="color: black; font-family: Verdana; font-size: 36px;"><b>Costos - Modificar</b></h1>
            <MazInput class="mt-8" v-model="buscarTime" label="Tiempo de estancia"/>
            <MazBtn class="mt-2 mb-5" color="black">Buscar Costos</MazBtn>
            <div class = "w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
                <h2 style="color: white; font-family: Verdana; font-size: 36px;" class="mt-8">Datos de los costos:</h2>
                <MazInput class="mb-1" v-model="tiempoEstancia" label="Tiempo de estancia"/>
                <MazInput class="mb-1" v-model="precio" label="Precio"/>                
            </div>            
            <MazBtn rounded class="mt-6 w-130" color="black" pastel>Guardar y actualizar</MazBtn>
        </div>
    </section>
</template>


<script setup>
    import { ref } from 'vue'
    import MazInput from 'maz-ui/components/MazInput'

    let tiempoEstancia = ref('');
    let precio = ref('');  
    let buscarTime = ref('');

    

</script>