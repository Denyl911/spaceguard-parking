<template>
  <section class="bg-slate-400">
    <div class="container p-4">
      <h1 style="color: black; font-family: Verdana; font-size: 36px">
        <b>Proveedores - Consulta</b>
      </h1>
    </div>
    <div id="tabla" class="mt-8 mx-5"></div>
  </section>
</template>

<script setup>
import { Grid } from 'gridjs';
import 'gridjs/dist/theme/mermaid.css';

onMounted(() => {
  let registros = JSON.parse(localStorage.getItem('proveedores'));
  if (registros) {
    registros = registros.map((el) => {
      return [
        el.id,
        el.Nombre,
        el.Direccion,
        el.Email,
        el.SitioWeb,
        el.Telefono,
        el.TipoProds,
        el.RFC,
      ];
    });
  } else {
    registros = [];
  }
  let tabla = document.getElementById('tabla');
  tabla.innerHTML = '';
  new Grid({
    columns: [
      'ID',
      'Nombre',
      'Direccion',
      'Email',
      'Sitio Web',
      'Teléfono',
      'Tipo de Productos',
      'RFC',
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
