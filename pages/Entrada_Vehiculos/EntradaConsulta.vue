<template>
  <section class="bg-slate-400">
    <div class="container p-4">
      <h1 style="color: black; font-family: Verdana; font-size: 36px">
        <b>Entrada de Vehículos - Consulta</b>
      </h1>
      <div class="w-3/4 bg-gradienttwo rounded-lg">
        <h2
          style="color: white; font-family: Verdana; font-size: 36px"
          class="mt-8"
        >
          Ingresa una placa:
        </h2>
      </div>
    </div>
    <div id="tabla" class="mt-4 mx-5"></div>
    <div class="container p-8">
      <MazBtn
        rounded
        class="mt-6 w-40"
        color="black"
        pastel
        @click="CerrarVentana"
        >Cerrar ventana</MazBtn
      >
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { Grid } from 'gridjs';
import 'gridjs/dist/theme/mermaid.css';

let registros = JSON.parse(localStorage.getItem('entrada'));

onMounted(() => {
  if (registros) {
    registros = registros.map((el) => {
      return [
        el.placa,
        el.lugDisp,
        el.fecha,
        el.hora,
        el.salida ?? 'En estancia',
      ];
    });
  } else {
    registros = [];
  }

  let tabla = document.getElementById('tabla');
  tabla.innerHTML = '';

  new Grid({
    columns: [
      'Placa',
      'Lugar asignado',
      'Fecha',
      'Hora Entrada',
      'Hora Salida',
    ],
    data: registros,
    search: true,
    language: {
      search: {
        placeholder: 'Buscar',
      },
    },
  }).render(tabla);
});

const router = useRouter();

function CerrarVentana() {
  router.push({ name: 'index' });
}
</script>
