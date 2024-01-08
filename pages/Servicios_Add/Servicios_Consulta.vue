<template>
  <section class="bg-slate-400">
    <div class="container p-4">
      <h1 style="color: black; font-family: Verdana; font-size: 36px">
        <b>Servicios Adicionales - Consulta</b>
      </h1>
      <MazInput class="mt-8" v-model="buscarPlaca" label="Placa" />
      <MazBtn class="mt-2 mb-5" color="black" @click="BuscarPlaca"
        >Consultar servicio asignado a la placa</MazBtn
      >
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
import { useToast } from 'maz-ui';
const toast = useToast();

let buscarPlaca = ref('');

let registros = JSON.parse(localStorage.getItem('servicios'));

onMounted(() => {
  if (registros) {
    registros = registros.map((el) => {
      return [
        el.id,
        el.nombre,
        el.descripcion,
        el.duracion,
        el.costo,
        el.materiales,
        /* el.empleado, */
        el.placaDos,
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
      'Descripción',
      'Duración',
      'Costo',
      'Materiales',
      /*'Empleado asignado',*/ 'placa',
    ],
    data: registros,
  }).render(tabla);
});

function BuscarPlaca() {
  if (!buscarPlaca.value) {
    toast.error('Ingresa una placa', {
      position: 'bottom',
      timeout: 3000,
    });
  } else {
    let placaExistente = registros.find((item) =>
      item[7].includes(buscarPlaca.value)
    );
    if (placaExistente) {
      toast.success('Placa existente', {
        position: 'bottom',
        timeout: 3000,
      });
    } else {
      toast.error('La placa no existe', {
        position: 'bottom',
        timeout: 3000,
      });
    }
  }
}
</script>
