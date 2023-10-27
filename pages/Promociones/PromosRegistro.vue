<template>
    <section class="bg-slate-400">
        <div class="container p-4">
            <h1 style="color: black; font-family: Verdana; font-size: 36px;"><b>Promociones - Registro</b></h1>
            <div class = "w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
                <h2 style="color: white; font-family: Verdana; font-size: 36px;" class="mt-8">Datos de la promoción:</h2>
                <MazInput class="mb-1" v-model="IDPromo" label="ID promoción"/>
                <MazInput class="mb-1" v-model="nombre" label="Nombre"/>
                <MazInput class="mb-1" v-model="descripcion" label="Descripción"/>
                <MazInput class="mb-1" v-model="restricciones" label="Restricciones"/>
                <MazInput class="mb-1" v-model="costo" label="Costo"/>
                <MazInput class="mb-1" v-model="estado" label="Estado"/>
            </div>            
            <MazBtn rounded class="mt-6 w-40" color="black" pastel>Registrar</MazBtn>
        </div>
    </section>
</template>


<script setup>
    import { ref } from 'vue'
    import MazInput from 'maz-ui/components/MazInput'

    let IDPromo = ref('');
    let nombre = ref('');    
    let descripcion = ref('');
    let restricciones = ref('');
    let costo = ref('');
    let estado = ref('');
    
</script>