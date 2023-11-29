<template>
  <section class="bg-slate-400">
    <div class="container p-4">
      <h1 style="color: black; font-family: Verdana; font-size: 36px">
        <b>Servicios Adicionales - Consulta</b>
      </h1>
      <MazInput class="mt-8" v-model="buscarPromocion" label="ID Promoción" />
      <MazBtn class="mt-2 mb-5" color="black">Consultar servicio</MazBtn>
    </div>
    <div id="tabla" class="mt-8"></div>
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
  let registros = JSON.parse(localStorage.getItem('servicios'));
  if (registros) {
    registros = registros.map((el) => {
      return [
        el.id,
        el.nombre,
        el.descripcion,
        el.duracion,
        el.costo,
        el.materiales,
        el.empleado,
        el.placa
      ];
    });
  } else {
    registros = [];
  }

  let tabla = document.getElementById('tabla');
  new Grid({
    columns: ['ID', 'Nombre', 'Descripcion', 'Duracion', 'Costo', 'Materiales', 'Empleado asignado', 'placa'],
    data: registros,
  }).render(tabla);
});
</script>