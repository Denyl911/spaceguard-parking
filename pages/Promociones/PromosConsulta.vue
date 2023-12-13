<template>
  <section class="bg-slate-400">
        <div class="container p-4">
            <h1 style="color: black; font-family: Verdana; font-size: 36px;"><b>Promociones - Consulta</b></h1>
            <MazInput class="mt-8" v-model="buscarPromocion" label="ID Promoción"/>
            <MazBtn class="mt-2 mb-5" color="black">Consultar promocion</MazBtn>                    
        </div>
        <div id="tabla" class="mt-8"></div>  
    </section>
</template>


<script setup>
    import { onMounted } from 'vue';
    import { Grid } from 'gridjs';
    import { ref } from 'vue'
    import MazInput from 'maz-ui/components/MazInput'
    import 'gridjs/dist/theme/mermaid.css';
  
    let buscarPromocion = ref('');

    onMounted(() => {
      let tabla = document.getElementById('tabla');
      new Grid({
        columns: ['ID', 'Nombre', 'Descripcion', 'Restriccion', 'Costo', 'Estado'],
        data: [
          ['2282','John','Bien','Ninguna', '$/', '..'],
          ['2281','Mark','Mal','Ninguna', '$/', '..'],
          ['2283','Eoin','Bien','Ninguna', '$/', '..'],
          ['2284','Sarah','Mal','Ninguna', '$/', '..'],
          ['2288','Joel','Bien','Ninguna', '$/', '..'],
        ],
      }).render(tabla);
    });  
</script>