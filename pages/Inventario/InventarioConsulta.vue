<template>
  <section class="bg-slate-400">
    <div class="container p-4">
      <h1 style="color: black; font-family: Verdana; font-size: 36px">
        <b>Inventario - Consulta</b>
      </h1>
    </div>
    <div id="tabla" class="mt-8 mx-5"></div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { Grid, html } from 'gridjs';
import 'gridjs/dist/theme/mermaid.css';

onMounted(() => {
  let registros = JSON.parse(localStorage.getItem('inventario'));
  if (registros) {
    registros = registros.map((el) => {
      return [
        el.id,
        el.proveedor,
        el.nombre,
        el.descripcion,
        el.ppp,
        el.stock,
        html(`<image src="${el.imagen}" />`),
      ];
    });
  } else {
    registros = [];
  }
  let tabla = document.getElementById('tabla');
  tabla.innerHTML = '';
  new Grid({
    columns: [
      'ID Producto',
      'Proveedor',
      'Nombre',
      'Descripcion',
      'Precio por unidad',
      'Stock',
      'Imagen',
    ],
    data: registros,
    search: true,
    language: {
      noRecordsFound: 'Busqueda no encontrada',
      search: {
        placeholder: 'Buscar',
      },
    },
  }).render(tabla);
});
</script>
