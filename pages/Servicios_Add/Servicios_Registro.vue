<template>
  <section class="bg-slate-400">
    <div class="container p-4">
      <h1 style="color: black; font-family: Verdana; font-size: 36px">
        <b>Servicios adicionales - Registro</b>
      </h1>
      <div class="w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
        <h2
          style="color: white; font-family: Verdana; font-size: 36px"
          class="mt-8"
        >
          Datos del servicio:
        </h2>
        <!-- <section class="bg-slate-400">
          
          <label for="tiempoEstancia">ID servicio:</label>
          <select v-model="IDSer" style="width: 765px; height: 40px">
            <option value="1">01LAVADO</option>
            <option value="2">02ENCERADO</option>
            <option value="3">03PULIDO</option>
            <option value="4">04ACEITE</option>
            <option value="5">05LLANTAS</option>
          </select>
        </section> -->
        <MazSelect
            v-model="IDSer"
            label="ID Servicio:"
            :options="[{value:'01LAVADO', label:'01LAVADO'}, {value: '02ENCERADO', label:'02ENCERADO'},
            {value: '03PULIDO', label:'03PULIDO'}, {value: '04ACEITE', label: '04ACEITE'}, {value: '05LLANTAS', label: '05LLANTAS'}]"
        />
        <MazInput class="mt-1 mb-1" v-model="placa" label="Placa" disabled />
        <MazInput
          class="mt-1 mb-1"
          v-model="nombre"
          label="Nombre"
          :disabled="true"
        />
        <MazInput
          class="mb-1"
          v-model="descripcion"
          label="Descripción"
          :disabled="true"
        />
        <MazInput
          class="mb-1"
          v-model="duracion"
          label="Duración"
          :disabled="true"
        />
        <MazInput class="mb-1" v-model="costo" label="Costo" :disabled="true"/>
        <MazInput
          class="mb-1"
          v-model="materiales"
          label="Materiales"
          :disabled="true"
        />
        <MazInput
          class="mb-1"
          v-model="empleado"
          label="Empleado asignado"
          :disabled="true"
        />
      </div>
      <MazBtn rounded class="mt-6 w-40" color="black" pastel @click="registro">Registrar</MazBtn
      >
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'maz-ui';

const toast = useToast();
const route = useRoute();

let IDSer = ref('');
let placa = ref('');
let nombre = ref('');
let descripcion = ref('');
let duracion = ref('');
let costo = ref('');
let materiales = ref('');
let empleado = ref('');

const router = useRouter();

// placa = route.query.placa;
// console.log(placa)

// onMounted(() => {
//   let registros = JSON.parse(localStorage.getItem('entrada'));
//   if (registros) {
//     registros = registros.map((el) => {
//       return [
//         el.placa
//       ];
//     });
//   } else {
//     registros = [];
//   }
// });

const registro = () => {
  if (
    !IDSer.value &&
    !nombre.value &&
    !descripcion.value &&
    !duracion.value &&
    !costo.value &&
    !materiales.value && !empleado.value && !placa.value
  ) {
    alert(placa);
    toast.error('Faltan datos', { position: 'bottom', timeout: 3000 });
  } else {
    const data = {
      id: IDSer.value,
      nombre: nombre.value,
      descripcion: descripcion.value,
      duracion: duracion.value,
      costo: costo.value,
      materiales: materiales.value,
      empleado: empleado.value,
      placa: placa.value
    };
    let registros = JSON.parse(localStorage.getItem('servicios'));
    if (registros) {
      registros.push(data);
    } else {
      registros = [data];
    }
      localStorage.setItem('servicios', JSON.stringify(registros));
      router.push({ name: 'Servicios_Add-Servicios_Consulta' });
      toast.error('Registro exitoso!', {position: 'bottom', timeout: 3000});
  }
};

watch(IDSer, (newVal) => {
  if (newVal === '01LAVADO') {
    nombre.value = 'Lavado';
    descripcion.value = 'Lavado de vehículo';
    duracion.value = '30 minutos';
    costo.value = '$50.00';
    materiales.value = 'Agua, jabón, cepillos';
    empleado.value = 'Jorge Iván';
  } else if (newVal === '02ENCERADO') {
    nombre.value = 'Encerado';
    descripcion.value = 'Encerado de la carrocería';
    duracion.value = '2 horas';
    costo.value = '$300.00';
    materiales.value = 'Cera, espoja, agua, trapo';
    empleado.value = 'Victor';
  } else if (newVal === '03PULIDO') {
    nombre.value = 'Pulido';
    descripcion.value = 'Pulir carrocería y llantas';
    duracion.value = '2 horas';
    costo.value = '$400.00';
    materiales.value = 'Pulidora, cera, jabón, agua, trapos';
    empleado.value = 'Rodrigo';
  } else if (newVal === '04ACEITE') {
    nombre.value = 'Cambio de aceite';
    descripcion.value = 'Cambiar aceite y filtro';
    duracion.value = '30 minutos';
    costo.value = '$800.00';
    materiales.value = 'Aceite específico, filtro, llaves/pinzas.';
    empleado.value = 'Luis';
  } else if (newVal === '05LLANTAS') {
    nombre.value = 'Revisión de llantas';
    descripcion.value = 'Se calibra la presión del aire, fugas y posición';
    duracion.value = '1 hora';
    costo.value = '$250.00';
    materiales.value = 'Calibrador, compresora, agua y jabón';
    empleado.value = 'Jared';
  }
});
</script>
