<template>
  <section class="bg-slate-400">
    <div class="container p-4">
      <h1 style="color: black; font-family: Verdana; font-size: 36px">
        <b>Promociones - Consulta</b>
      </h1>
    </div>
    <div id="tabla" class="mt-8 mx-5"></div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { Grid } from 'gridjs';
import { ref } from 'vue';
import MazInput from 'maz-ui/components/MazInput';
import 'gridjs/dist/theme/mermaid.css';

let buscarPromocion = ref('');

onMounted(() => {
  let registros = JSON.parse(localStorage.getItem('promociones'));
  if (registros) {
    registros = registros.map((el) => {
      return [el.id, el.nombre, el.descripcion, el.restricciones, el.costo];
    });
  } else {
    registros = [];
  }

  let tabla = document.getElementById('tabla');
  tabla.innerHTML = '';

  new Grid({
    columns: ['ID', 'Nombre', 'Registro', 'Restricciones', 'Costo'],
    data: registros,
    search: true,
    language: {
      search: {
        placeholder: 'Buscar',
      },
    },
  }).render(tabla);
});
</script>
