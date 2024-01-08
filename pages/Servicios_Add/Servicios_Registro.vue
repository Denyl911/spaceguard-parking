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
        <MazInput class="mt-1 mb-1" v-model="placaDos" label="Placa" />
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
        <MazInput class="mb-1" v-model="costo" label="Costo" :disabled="true" />
        <MazInput
          class="mb-1"
          v-model="materiales"
          label="Materiales"
          :disabled="true"
        />
        <!-- <MazInput
          class="mb-1"
          v-model="empleado"
          label="Empleado asignado"
          :disabled="true"
        /> -->
      </div>
      <MazBtn rounded class="mt-6 w-52" color="info" @click="registro"
        >Registrar</MazBtn
      >
      <MazDialog v-model="mostrarTicket" title="Detalle del Ticket">
        <p>Placa: {{ placaDos }}</p>
        <p>Hora: {{ hora }}</p>
        <p>Fecha: {{ fecha }}</p>
        <p>Lugar asignado: {{ lugar }}</p>
        <p>Servicio adicional: {{ IDSer }}</p>
        <p>Costo: $10 por hora</p>
        <p>Costo del servicio adicional: {{ costo }}</p>
        <template #footer>
          <MazBtn @click="cerrarTicketDialogo" color="success">Cerrar</MazBtn>
        </template>
      </MazDialog>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'maz-ui';

const toast = useToast();

let IDSer = ref('');
let nombre = ref('');
let descripcion = ref('');
let duracion = ref('');
let costo = ref('');
let materiales = ref('');
let empleado = ref('');

let placaDos = ref('');
let lugar = ref('');
let fecha = ref('');
let hora = ref('');
const mostrarTicket = ref(false);

const router = useRouter();

let registros = JSON.parse(localStorage.getItem('entrada'));
onMounted(() => {
  if (registros) {
    registros = registros.map((el) => {
      return [el.placa, el.lugDisp, el.fecha, el.hora];
    });
  } else {
    registros = [];
  }
  // Obtener la última placa ingresada
  const ultimaPlaca =
    registros.length > 0 ? registros[registros.length - 1] : null;
  if (ultimaPlaca) {
    placaDos.value = ultimaPlaca[0];
    lugar.value = ultimaPlaca[1];
    fecha.value = ultimaPlaca[2];
    hora.value = ultimaPlaca[3];
  }
});

const registro = () => {
  if (!placaDos.value) {
    toast.error('Faltan datos', { position: 'bottom', timeout: 3000 });
  } else if (!IDSer.value) {
    toast.error('Faltan datos', { position: 'bottom', timeout: 3000 });
  } else {
    let registros = JSON.parse(localStorage.getItem('servicios')) || [];

    // Verificar si ya existe un servicio con la misma placa y ID
    const servicioExistente = registros.some(
      (servicio) =>
        servicio.placaDos === placaDos.value && servicio.id === IDSer.value
    );

    if (servicioExistente) {
      toast.error(
        'Este servicio ya está registrado para la placa especificada',
        { position: 'bottom', timeout: 3000 }
      );
    } else {
      const data = {
        id: IDSer.value,
        nombre: nombre.value,
        descripcion: descripcion.value,
        duracion: duracion.value,
        costo: costo.value,
        materiales: materiales.value,
        empleado: empleado.value,
        placaDos: placaDos.value,
      };

      registros.push(data);
      localStorage.setItem('servicios', JSON.stringify(registros));
      //placaDos.value = '';
      toast.success('Registro exitoso!', { position: 'bottom', timeout: 3000 });
      mostrarTicket.value = true;
    }
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

function cerrarTicketDialogo() {
  mostrarTicket.value = false;
}
</script>
