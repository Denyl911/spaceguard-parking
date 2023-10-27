<template>
    <section class="bg-slate-400">
        <div class="container p-4">
            <h1 style="color: black; font-family: Verdana; font-size: 36px;"><b>Vehiculos pensionados - Modificación</b></h1>            
            <MazInput class="mt-8" v-model="buscarCliente" label="Placa del vehiculo"/>
            <MazBtn class="mt-2 mb-5" color="black">Buscar datos del cliente</MazBtn>
            <div class = "w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
                <h2 class="mt-8">Datos del cliente:</h2>
                <MazInput class="mb-1" v-model="nombreCliente" label="Nombre del cliente"/>
                <MazInput class="mb-1" v-model="numeroTelefono" label="Numero telefónico"/>
                <MazInput class="mb-1" v-model="NumeroEmergencia" label="Numero de emergencia"/>
                <MazInput v-model="EstadoCliente" label="Estado del cliente"/>
                <h3 class="mt-8">Datos del vehiculo:</h3>
                <MazInput class="mb-1" v-model="ModeloVehiculo" label="Modelo"/>
                <MazInput class="mb-1" v-model="MarcaVehiculo" label="Marca"/>
                <MazInput class="mb-1" v-model="FotoVehiculo" label="Foto"/>        
                <MazInput class="mb-1" v-model="ColorVehiculo" label="Color"/>
                <MazInput class="mb-1" v-model="AñoVehiculo" label="Año"/>
                <MazInput v-model="Placa" label="Placa"/>
                <h4 class="mt-8">Extras:</h4>
                <MazInput class="mb-1" v-model="ServicioAdd" label="Serivicio adicional"/>
                <MazInput v-model="Promocion" label="Editar promoción"/>
            </div>            
            <MazBtn rounded class="mt-6 w-80" color="black" pastel>Guardar y actualizar</MazBtn>
        </div>
        <div style="float: left; margin-left: 950px;">
            <MazBtn class="mt-6 mb-12" color="warning" outline>Empleado asignado:<br>Josue Bonal</MazBtn>
        </div>
        <div style="float: left; margin-left: 10px;">
            <MazBtn class="mt-6 mb-12" color="success" outline>Lugar asignado:<br>9</MazBtn>
        </div>
            <div style="clear: both;"></div>
    </section>
</template>


<script setup>
    import { ref } from 'vue'
    import MazInput from 'maz-ui/components/MazInput'

    let buscarCliente = ref('');
    let nombreCliente = ref('');
    let numeroTelefono = ref('');
    let NumeroEmergencia = ref('');
    let EstadoCliente = ref('');
    let ModeloVehiculo = ref('');
    let MarcaVehiculo = ref('');
    let FotoVehiculo = ref('');
    let ColorVehiculo = ref('');
    let AñoVehiculo = ref('');
    let Placa = ref('');
    let ServicioAdd = ref('');
    let Promocion = ref('');    

</script>