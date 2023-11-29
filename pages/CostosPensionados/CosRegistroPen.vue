<template>
    <section class="bg-slate-400">
        <div class="container p-4">
            <h1 style="color: black; font-family: Verdana; font-size: 36px;"><b>Costo - Registro</b></h1>
            <div class = "w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
                <h2 style="color: white; font-family: Verdana; font-size: 36px;" class="mt-8">Datos de los costos:</h2>
                <MazInput class="mb-1" v-model="tiempoEstancia" label="Tiempo de estancia"/>
                <MazInput class="mb-1" v-model="precio" label="Precio"/>                
            </div>            
            <MazBtn rounded class="mt-6 w-40" color="black" pastel @click="Registro">Registrar</MazBtn>
        </div>
    </section>
</template>
 
 
 <script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import MazInput from 'maz-ui/components/MazInput'
 
    let tiempoEstancia = ref('');
    let precio = ref('');    

    const router = useRouter()

    function Registro (){
        if(!tiempoEstancia.value){
            alert('Ingresa el tiempo de estancia')
        }else if (!precio.value){
            alert('Ingresa el precio')
        }
    }
 </script>