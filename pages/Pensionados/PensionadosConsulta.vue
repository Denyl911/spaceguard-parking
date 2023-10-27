<template>
    <section class="bg-slate-400">
        <div class="container p-4">
            <h1 style="color: black; font-family: Verdana; font-size: 36px;"><b>Vehiculos pensionados - Consulta</b></h1>                    
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
        columns: ['Cliente', 'Teléfono', 'Emergencia', 'Estado', 'Modelo', 'Marca', 'Foto', 'Color', 'Año', 'Placa'],
        data: [
          ['John', '2282', '911', 'Bien', 'Prius', 'Toyota', ':)', 'Rojo','2022', 'YBR883H2'],
          ['Mark', '2281', '911', 'Mal', 'Corolla', 'Toyota', ':)', 'Azul','2023', 'YSW77272'],
          ['Eoin', '2283', '911', 'Bien', 'HR-V', 'Honda', ':)', 'Blanco','2019', 'JDK3YD9'],
          ['Sarah', '2284', '911', 'Mal', 'Civic', 'Honda', ':)', 'Rojo','2018', 'HRG3348'],
          ['Joel', '2288', '911', 'Bien', 'BR-V', 'Honda', ':)', 'Verde','2020', 'PRUE345'],
        ],
      }).render(tabla);
    });  
</script>
  