<template>
 <section class="bg-slate-400">
        <div class="container p-4">
            <h1 style="color: black; font-family: Verdana; font-size: 36px;"><b>Entrada de Vehiculos - Registro</b></h1>
            <MazBtn class="mt-8 mb-5" color="black">Lugares disponibles: 10</MazBtn>
            <div class = "w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
                <h2 style="color: white; font-family: Verdana; font-size: 36px;" class="mt-8">Datos del vehiculo:</h2>
                <MazInput class="mb-1" v-model="placa" label="Placa"/>
            </div>            
            <MazBtn rounded class="mt-6 w-40" color="black" pastel @click="Registro">Registrar</MazBtn>
        </div>
        <div style="float: left; margin-left: 950px;">
            <MazBtn class="mt-8" color="warning" outline>Empleado asignado:<br>Josue Bonal</MazBtn>
        </div>
        <div style="float: left; margin-left: 10px;">
            <MazBtn class="mt-8" color="success" outline>Lugar asignado:<br>9</MazBtn>
        </div>
            <div style="clear: both;"></div>
        <div>
            <MazBtn rounded class="mt-6 w-40" color="black" pastel @click="ServiciAdd">Servicio adicional</MazBtn>
            <MazBtn rounded class="mt-6 w-40" color="black" pastel>Imprimir ticket</MazBtn>
        </div>
    </section>
</template>


<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import MazInput from 'maz-ui/components/MazInput'

    let placa = ref('');    
    
    const router = useRouter()
    
    function ServiciAdd () {
        router.push({ name: 'Servicios_Add-Servicios_Registro' });
    }

    function Registro (){
        if(!placa.value){
            alert('Ingresa una placa')
        }else{
            alert('Registro éxitoso')
        }
    }
</script>
