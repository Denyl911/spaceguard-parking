<template>
  <section class="bg-slate-400">
    <div class="container p-4">
      <h1 style="color: black; font-family: Verdana; font-size: 36px">
        <b>Vehículos pensionados - Consulta</b>
      </h1>
    </div>
    <div id="tabla" class="mt-8"></div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { Grid, html } from 'gridjs';
import 'gridjs/dist/theme/mermaid.css';

onMounted(() => {
  let registros = JSON.parse(localStorage.getItem('pensionados'));
  if (registros) {
    console.log(registros);
    registros = registros.map((el) => {
      return [
        el.nombre,
        el.telefono,
        el.emergencia,
        el.status,
        el.modelo,
        el.marca,
        html(`<image src="${el.foto}" onclick="alert('hola')" />`),
        el.color,
        el.ano,
        el.placa,
        el.tiempoEstancia,
      ];
    });
  } else {
    registros = [];
  }
  let tabla = document.getElementById('tabla');
  tabla.innerHTML = '';
  new Grid({
    columns: [
      'Cliente',
      'Teléfono',
      'Emergencia',
      'Estado',
      'Modelo',
      'Marca',
      'Foto',
      'Color',
      'Año',
      'Placa',
      'Tiempo de estancia',
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
</script>
