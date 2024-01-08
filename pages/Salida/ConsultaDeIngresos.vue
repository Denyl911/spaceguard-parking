<template>
  <section class="bg-slate-400">
    <div class="container p-4">
      <h1 style="color: black; font-family: Verdana; font-size: 36px">
        <b>Consulta de ingresos</b>
      </h1>
    </div>
    <div id="tabla" class="mt-4 mx-10 pb-32"></div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { Grid } from 'gridjs';
import 'gridjs/dist/theme/mermaid.css';

let registros = JSON.parse(localStorage.getItem('entrada'));

onMounted(() => {
  let data = [];
  let totalV = 0;
  let total = 0;
  if (registros) {
    registros.forEach((el) => {
      if (el.total) {
        totalV += 1;
        total += Number(el.total);
      }
    });
  }
  data = [[totalV, '$' + total.toFixed(2)]];

  let tabla = document.getElementById('tabla');
  tabla.innerHTML = '';

  new Grid({
    columns: ['Total de Vehiculos Registrados', 'Total de Ganancias'],
    data: data,
  }).render(tabla);
});

const router = useRouter();
</script>
