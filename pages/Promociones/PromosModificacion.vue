<template>
  <section class="bg-slate-400">
    <div class="container p-4">
      <h1 style="color: black; font-family: Verdana; font-size: 36px">
        <b>Promociones - Modificación</b>
      </h1>
      <MazInput class="mt-8" v-model="buscarPromocion" label="ID Promoción" />
      <MazBtn class="mt-2 mb-5" color="black" @click="buscar"
        >Buscar promocion</MazBtn
      >
      <div class="w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
        <h2
          style="color: white; font-family: Verdana; font-size: 36px"
          class="mt-8"
        >
          Datos de la promoción:
        </h2>
        <MazInput
          class="mb-1"
          v-model="IDPromo"
          label="ID promoción"
          disabled
        />
        <MazInput class="mb-1" v-model="nombre" label="Nombre" />
        <MazInput class="mb-1" v-model="descripcion" label="Descripción" />
        <MazInput class="mb-1" v-model="restricciones" label="Restricciones" />
        <MazInput class="mb-1" v-model="costo" label="Costo" />
        <MazInput class="mb-1" v-model="estado" label="Estado" />
      </div>
      <MazBtn rounded class="mt-6 w-80" color="black" pastel @click="actualizar"
        >Guardar y actualizar</MazBtn
      >
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import MazInput from 'maz-ui/components/MazInput';

let buscarPromocion = ref('');
let IDPromo = ref('');
let nombre = ref('');
let descripcion = ref('');
let restricciones = ref('');
let costo = ref('');
let estado = ref('');
let registros;
const toast = useToast();
onMounted(() => {
  registros = JSON.parse(localStorage.getItem('promociones'));
});

const buscar = () => {
  const reg = registros.find((el) => el.id == buscarPromocion.value);
  if (reg) {
    nombre.value = reg.nombre;
    descripcion.value = reg.descripcion;
    restricciones.value = reg.restricciones;
    costo.value = reg.costo;
    estado.value = reg.status;
    IDPromo.value = reg.id;
  } else {
    toast.error('Registro no encontrado', {
      position: 'bottom',
      timeout: 3000,
    });
  }
};

const actualizar = () => {
  const index = registros.findIndex((el) => el.placa == buscarCliente.value);
  registros[index] = {
    id: IDPromo.value,
    nombre: nombre.value,
    descripcion: descripcion.value,
    restricciones: restricciones.value,
    costo: costo.value,
    estado: estado.value,
  };
  localStorage.setItem('pensionados', JSON.stringify(registros));
  router.push({ name: 'Pensionados-PensionadosConsulta' });
};
</script>
