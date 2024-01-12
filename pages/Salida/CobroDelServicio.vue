<template>
  <section class="bg-slate-400">
    <div class="container p-4">
      <h1 style="color: black; font-family: Verdana; font-size: 36px">
        <b>Salida de Vehículos</b>
      </h1>
      <MazBtn
        class="mt-8 mb-5 mr-3"
        :style="{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }"
        >Hora actual: {{ horaActual }}</MazBtn
      >
      <MazBtn
        class="mt-8 mb-5"
        :style="{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }"
        >Fecha actual: {{ fechaActual }}</MazBtn
      >
      <div class="w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
        <h2
          style="color: white; font-family: Verdana; font-size: 36px"
          class="mt-8"
        >
          Datos del vehículo:
        </h2>
        <MazInput
          class="mb-1"
          v-model="placa"
          @input="convertirAMayusculas"
          @keyup.enter="Registro"
          label="Placa"
        />
      </div>
      <MazBtn
        rounded
        class="mt-6 w-52 mr-32"
        color="secondary"
        @click="Registro"
        >Buscar</MazBtn
      >
      <!-- <MazBtn
        rounded
        class="mt-6 w-40"
        color="black"
        pastel
        @click="MostrarTicket"
        >Imprimir ticket</MazBtn
      > -->
    </div>
    <div>
      <MazDialog v-model="mostrarTicket" title="Detalle del Ticket" noClose>
        <p>Placa: {{ placa }}</p>
        <p>Hora de entrada: {{ entrada }}</p>
        <p>Hora de salida: {{ horaImpresion }}</p>
        <p>Fecha: {{ fechaActual }}</p>
        <p v-if="serviciosAdd">Servicios Adicionales: ${{ serviciosAdd }}</p>
        <p>Total: ${{ total }}</p>
        <template #footer>
          <MazBtn @click="cerrarTicketDialogo" color="success">Cobrar</MazBtn>
        </template>
      </MazDialog>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import MazInput from 'maz-ui/components/MazInput';
import { useToast } from 'maz-ui';

const toast = useToast();

let placa = ref('');
let lugDisp = ref(20);
let entrada = ref('');
let horaActual = ref(new Date().toLocaleTimeString());
let fechaActual = ref(new Date().toLocaleDateString());
const mostrarDialogo = ref(false);
const mostrarTicket = ref(false);
const horaImpresion = ref('');
const serviciosAdd = ref('');
let total = ref(0);
let registros;
let precios;
let servicios;

const actualizarHora = () => {
  horaActual.value = new Date().toLocaleTimeString();
};

const actualizarFecha = () => {
  fechaActual.value = new Date().toLocaleDateString();
};

onBeforeUnmount(() => {
  clearInterval(actualizarHora);
  clearInterval(actualizarFecha);
});

onMounted(() => {
  registros = JSON.parse(localStorage.getItem('entrada'));
  precios = JSON.parse(localStorage.getItem('costosEVehiculos'));
  servicios = JSON.parse(localStorage.getItem('servicios'));
  const storedLugDisp = localStorage.getItem('lugDisp');
  if (storedLugDisp !== null) {
    lugDisp.value = parseInt(storedLugDisp);
  }

  setInterval(actualizarFecha, 1000);
  setInterval(actualizarHora, 1000);
});

const router = useRouter();

function Registro() {
  const primerformatoValido = /^[A-Z]{3}\d{3}[A-Z]$/;
  if (primerformatoValido.test(placa.value)) {
    placa.value = `${placa.value.slice(0, 3)}-${placa.value.slice(
      3,
      6
    )}-${placa.value.slice(6)}`;
  }
  const reg = registros.find((el) => el.placa == placa.value);
  if (reg) {
    entrada = reg.hora;
    let tiempo = restarHoras(horaActual.value, reg.hora);
    if (tiempo < 1) {
      let precio = precios.find((el) => el.tiempoEstancia == 'Menos de 1 hora');

      if (precio) {
        precio = Number(precio.precio.substring(1));
      } else {
        precio = 10;
      }
      total.value = precio.toFixed(2);
    } else {
      let precio = Number(precios.find((el) => el.tiempoEstancia == '1 hora'));
      if (precio) {
        precio = Number(precio.precio.substring(1));
      } else {
        precio = 20;
      }
      total.value = (precio * tiempo).toFixed(2);
    }
    const servAdd = servicios.filter((el) => el.placaDos == placa.value);
    if (servAdd.length > 0) {
      servAdd.forEach((el) => {
        total.value = Number(total.value) + Number(el.costo.substring(1));
        total.value = total.value.toFixed(2);
      });
    }
    MostrarTicket();
  } else {
    toast.error('Placa no encontrada', {
      position: 'bottom',
      timeout: 3000,
    });
  }
}

function restarHoras(hora1, hora2) {
  // Convertir las horas de cadena a objetos Date para facilitar la manipulación
  let date1 = new Date('2000-01-01 ' + hora1); // Se usa una fecha fija para evitar problemas con la fecha en sí misma
  let date2 = new Date('2000-01-01 ' + hora2);

  // Restar las horas
  let diferencia = date1.getTime() - date2.getTime();

  // Convertir la diferencia de tiempo a horas, minutos y segundos
  let horas = Math.floor(diferencia / 3600000); // 1 hora = 3600000 milisegundos
  //   diferencia = diferencia % 3600000;
  //   let minutos = Math.floor(diferencia / 60000); // 1 minuto = 60000 milisegundos
  //   diferencia = diferencia % 60000;
  //   let segundos = Math.floor(diferencia / 1000); // 1 segundo = 1000 milisegundos

  // Retornar la diferencia de tiempo formateada
  return `${horas}`;
}

function MostrarTicket() {
  horaImpresion.value = new Date().toLocaleTimeString();
  mostrarTicket.value = true;
}

function cerrarTicketDialogo() {
  mostrarTicket.value = false;

  const index = registros.findIndex((el) => el.placa == placa.value);
  registros[index].salida = horaImpresion.value;
  registros[index].total = total.value;
  localStorage.setItem('entrada', JSON.stringify(registros));

  toast.success('Cobro registrado exitosamente', {
    position: 'bottom',
    timeout: 3000,
  });
}

const convertirAMayusculas = () => {
  placa.value = placa.value.toUpperCase();
};
</script>
