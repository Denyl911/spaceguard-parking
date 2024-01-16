<template>
  <section class="bg-slate-400">
    <div class="container p-4">
      <h1 style="color: black; font-family: Verdana; font-size: 36px">
        <b>Servicios adicionales - Modificación</b>
      </h1>
      <MazInput
        class="mt-8"
        v-model="buscarCliente"
        label="Placa del vehiculo"
      />
      <MazBtn class="mt-2 mb-5" color="black" @click="buscar"
        >Buscar datos</MazBtn
      >
      <div class="w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md mt-2">
        <h2
          style="color: white; font-family: Verdana; font-size: 36px"
          class="mt-8"
        >
          Datos del servicio:
        </h2>
        <MazInput
          class="mb-1"
          @input="convertirAMayusculas"
          v-model="placa"
          label="Placa"
        />
        <MazSelect
          v-model="IDSer"
          label="ID Servicio:"
          :options="[
            { value: '01LAVADO', label: '01LAVADO' },
            { value: '02ENCERADO', label: '02ENCERADO' },
            { value: '03PULIDO', label: '03PULIDO' },
            { value: '04ACEITE', label: '04ACEITE' },
            { value: '05LLANTAS', label: '05LLANTAS' },
          ]"
        />
        <MazInput class="mb-1 mt-1" v-model="nombre" label="Nombre" disabled />
        <MazInput
          class="mb-1"
          v-model="descripcion"
          label="Descripción"
          disabled
        />
        <MazInput class="mb-1" v-model="duracion" label="Duración" />
        <MazInput class="mb-1" v-model="costo" label="Costo" />
        <MazInput class="mb-1" v-model="materiales" label="Materiales" />
        <!-- <MazInput class="mb-1" v-model="empleado" label="Empleado asignado"/> -->
      </div>
      <MazBtn rounded class="mt-6 w-80" color="black" pastel @click="actualizar"
        >Guardar y actualizar</MazBtn
      >
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';
import MazInput from 'maz-ui/components/MazInput';
import { useToast } from 'maz-ui';

const toast = useToast();

let IDSer = ref('');
let nombre = ref('');
let descripcion = ref('');
let duracion = ref('');
let costo = ref('');
let materiales = ref('');
let empleado = ref('');
let placa = ref('');
let buscarCliente = ref('');

let registros = [];

const router = useRouter();

onMounted(() => {
  registros = JSON.parse(localStorage.getItem('servicios'));
});

const buscar = () => {
  const reg = registros.find((el) => el.placaDos == buscarCliente.value);
  if (reg) {
    placa.value = reg.placaDos;
    IDSer.value = reg.id;
    descripcion.value = reg.descripcion;
    duracion.value = reg.duracion;
    costo.value = reg.costo;
    materiales.value = reg.materiales;
    empleado.value = reg.empleado;
    ColorVehiculo.value = reg.color;
  } else {
    toast.error('Placa no encontrada', {
      position: 'bottom',
      timeout: 3000,
    });
  }
};

const actualizar = () => {
  const index = registros.findIndex((el) => el.placaDos == placa.value);
  registros[index] = {
    id: IDSer.value,
    nombre: nombre.value,
    descripcion: descripcion.value,
    duracion: duracion.value,
    costo: costo.value,
    materiales: materiales.value,
    empleado: empleado.value,
    placaDos: placa.value,
  };
  localStorage.setItem('servicios', JSON.stringify(registros));

  toast.success('Guardado y actualizado con éxito', {
    position: 'bottom',
    timeout: 3000,
  });
  //router.push({ name: 'Servicios_Add-Servicios_Consulta' });
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

const convertirAMayusculas = () => {
  placa.value = placa.value.toUpperCase();
};
</script>
