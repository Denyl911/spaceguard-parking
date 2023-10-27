<template>
    <section class="bg-slate-400">
        <div class="container p-4">
            <h1 style="color: black; font-family: Verdana; font-size: 36px;"><b>Costos - Consulta</b></h1>       
        </div>
        <div id="tabla" class="mt-8"></div>  
    </section>
  </template>
  
  
  <script setup>
    import { onMounted } from 'vue';
    import { Grid } from 'gridjs';
    import 'gridjs/dist/theme/mermaid.css';
  
    onMounted(() => {
      let tabla = document.getElementById('tabla');
      new Grid({
        columns: ['Tiempo de estancia', 'Precio'],
        data: [
          ['1 hora', '$10'],
          ['2 horas', '$20'],
          ['3 horas', '$30'],
          ['4 horas', '$40'],          
          ['5 horas', '$50'],
          ['6 horas', '$60'],
          ['7 horas', '$70']
        ],
      }).render(tabla);
    });  
  </script>