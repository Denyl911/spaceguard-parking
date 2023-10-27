<template>
  <section class="bg-slate-400">
      <div class="container p-4">
          <h1 style="color: black; font-family: Verdana; font-size: 36px;"><b>Entrada de Vehiculos - Consulta</b></h1>
          <div class = "w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
              <h2 style="color: white; font-family: Verdana; font-size: 36px;" class="mt-8">Datos del vehiculo:</h2>
              <MazInput class="mb-1" v-model="placa" label="Placa"/>
          </div>            
      </div>
      <div id="tabla" class="mt-8"></div>  
  </section>
</template>


<script setup>
  import { ref } from 'vue'
  import MazInput from 'maz-ui/components/MazInput'

  let placa = ref('');    

  import { onMounted } from 'vue';
  import { Grid } from 'gridjs';
  import 'gridjs/dist/theme/mermaid.css';

  onMounted(() => {
    let tabla = document.getElementById('tabla');
    new Grid({
      columns: ['Placa', 'Empleado asignado', 'Lugar asignado'],
      data: [
        ['YJP87DY6', 'john', '01A'],
        ['HKP0239D', 'mark', '02B'],
        ['PP08JEJ3', 'eoin', '03A'],
        ['II388392', 'sarah', '05C'],
        ['299DNND4', 'joel', '02A'],
      ],
    }).render(tabla);
  });  
</script>
