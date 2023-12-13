<template>
    <section class="bg-slate-400">
         <div class="container p-4">
             <h1 style="color: black; font-family: Verdana; font-size: 36px;"><b>Costos para pensionados - Registro</b></h1>
             <div class = "w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
                 <h2 style="color: white; font-family: Verdana; font-size: 36px;" class="mt-8">Datos de los costos:</h2>
                 <section class="bg-slate-400">
                     <label for="tiempoEstancia">Tiempo de estancia:   </label>
                     <select v-model="tiempoEstancia" style="width: 780px; height: 40px;">
                         <option value="1 semana">1 semana</option>
                         <option value="1 mes">1 mes</option>
                         <option value="2 meses">2 meses</option>
                         <option value="Medio año">Medio año</option>
                         <option value="1 año">1 año</option>
                     </select>
                 </section>
                 <MazInput class="mt-5" v-model="precio" label="Precio" @input="validarPrecio"/>                
             </div>            
             <MazBtn rounded class="mt-6 w-40" color="black" pastel @click="Registro">Registrar</MazBtn>
         </div>
     </section>
 </template>
 
 
 <script setup>
     import { ref } from 'vue'
     import { useRouter } from 'vue-router'
     import MazInput from 'maz-ui/components/MazInput'
 
     import { useToast } from 'maz-ui';
   
     const toast = useToast();
 
     let tiempoEstancia = ref('');
     let precio = ref('');
     
     const router = useRouter()
 
     function Registro() {
         if (!tiempoEstancia.value) {
             toast.error('Elije el tiempo de estancia', {
             position: 'bottom',
             timeout: 3000,
             });
         } else if (!precio.value) {
             toast.error('Ingresa el precio', {
             position: 'bottom',
             timeout: 3000,
             });
         } else {
             const precioConSimbolo = `\$${precio.value}`;
             const data = {
                 tiempoEstancia: tiempoEstancia.value,
                 precio: precioConSimbolo,
             };
 
             let registros = JSON.parse(localStorage.getItem('costosPensionados')) || [];
 
             // Verificar si el tiempoEstancia ya existe
             const existeRegistro = registros.some(
                 (registro) => registro.tiempoEstancia === tiempoEstancia.value
             );
 
             if (existeRegistro) {
             toast.error('Ya existe un registro para este tiempo de estancia', {
                 position: 'bottom',
                 timeout: 3000,
             });
             } else {
                 registros.push(data);
                 localStorage.setItem('costosPensionados', JSON.stringify(registros));
 
                 toast.success('Registro éxitoso', {
                     position: 'bottom',
                     timeout: 3000,
                 });
                 //router.push({ name: 'index' });
             }
         }
     }
 
     function validarPrecio() {
         // Utiliza una expresión regular para permitir solo números
         precio.value = precio.value.replace(/\D/g, '');
     }
 </script>