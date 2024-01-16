<template>
  <section class="bg-slate-400">
    <div class="container p-4">
      <h1 style="color: black; font-family: Verdana; font-size: 36px">
        <b>Vehículos pensionados - Registro</b>
      </h1>
      <MazBtn class="mt-8 mb-5 mr-3" color="black"
        >Lugares disponibles: {{ lugDispPensionados }}</MazBtn
      >
      <MazBtn
        class="mt-8 mb-5 mr-3"
        :style="{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }"
        >Hora actual: {{ horaActual }}</MazBtn
      >
      <MazBtn
        class="mt-8 mb-5 mr-3"
        :style="{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }"
        >Fecha actual: {{ fechaActual }}</MazBtn
      >
      <MazBtn class="mt-8" color="success"
        >Lugar a asignar: {{ lugDispPensionados }}</MazBtn
      >
      <div class="w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
        <h2
          style="color: white; font-family: Verdana; font-size: 36px"
          class="mt-8"
        >
          Datos del cliente:
        </h2>
        <MazInput
          class="mb-1"
          v-model="nombreCliente"
          type="text"
          label="Nombre del cliente"
        />
        <MazInput
          class="mb-1"
          type="tel"
          v-model="numeroTelefono"
          label="Número telefónico"
        />
        <MazInput
          class="mb-1"
          type="tel"
          v-model="NumeroEmergencia"
          label="Número de emergencia"
        />
        <!-- <MazInput v-model="EstadoCliente" label="Estado del cliente" disabled /> -->
        <h3
          style="color: white; font-family: Verdana; font-size: 36px"
          class="mt-8"
        >
          Datos del vehículo:
        </h3>
        <MazInput class="mb-1" v-model="ModeloVehiculo" label="Modelo" />
        <MazInput class="mb-1" v-model="MarcaVehiculo" label="Marca" />

        <h4
          style="color: white; font-family: Verdana; font-size: 18px"
          class="mt-8"
        >
          Foto:
        </h4>

        <div>
          <input type="file" @change="handleImageUpload" accept="image/*" />
          <img
            :src="carImage"
            alt="Preview"
            v-if="carImage"
            class="uploaded-image"
          />
        </div>

        <MazInput class="mb-1 mt-8" v-model="ColorVehiculo" label="Color" />
        <MazInput class="mb-1" v-model="AñoVehiculo" label="Año" />
        <MazInput class="mb-1" v-model="Placa" label="Placa" />

        <section class="bg-slate-400">
          <label for="tiempoEstancia">Tiempo de estancia: </label>
          <select v-model="tiempoEstancia" style="width: 35rem; height: 40px">
            <option value="1 semana">1 semana</option>
            <option value="1 mes">1 mes</option>
            <option value="6 meses">6 meses</option>
            <option value="1 año">1 año</option>
          </select>
        </section>
      </div>
      <MazBtn rounded class="mt-6 w-52" color="info" @click="registro"
        >Registrar</MazBtn
      >
      <MazBtn rounded class="mt-6 ml-6" color="warning" @click="MostrarTicket"
        >Imprimir ticket</MazBtn
      >
      <MazBtn rounded class="mt-6 ml-2" color="warning" @click="ServiciAdd"
        >Servicio adicional</MazBtn
      >
    </div>
    <MazDialog v-model="mostrarTicket" title="Detalle del Ticket">
      <p>Placa: {{ Placa }}</p>
      <p>Hora: {{ horaImpresion }}</p>
      <p>Fecha: {{ fechaActual }}</p>
      <p>Lugar asignado: {{ lugDispPensionados }}</p>
      <p>Tiempo de estancia: {{ tiempoEstancia }}</p>
      <!-- <p>Costo: $10 por hora</p> -->
      <template #footer>
        <MazBtn @click="cerrarTicketDialogo" color="success">Cerrar</MazBtn>
      </template>
    </MazDialog>
    <MazDialog v-model="mostrarDialogo" title="Agregar Servicio Adicional">
        <p>¿Deseas agregar un nuevo servicio adicional?</p>
        <template #footer>
          <MazBtn @click="agregarServicioAdicional" color="success">
            Sí
          </MazBtn>
          <MazBtn @click="cerrarDialogo" color="error"> No </MazBtn>
        </template>
      </MazDialog>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import MazInput from 'maz-ui/components/MazInput';
import { useRouter } from 'vue-router';

import { useToast } from 'maz-ui';
const toast = useToast();

let horaActual = ref(new Date().toLocaleTimeString());
let fechaActual = ref(new Date().toLocaleDateString());

const actualizarHora = () => {
  horaActual.value = new Date().toLocaleTimeString();
};

onMounted(() => {
  // Actualizar la hora cada segundo (puedes ajustar el intervalo según tus necesidades)
  setInterval(actualizarHora, 1000);
});

onBeforeUnmount(() => {
  // Limpiar el intervalo al desmontar el componente
  clearInterval(actualizarHora);
});

const actualizarFecha = () => {
  fechaActual.value = new Date().toLocaleDateString();
};

onMounted(() => {
  setInterval(actualizarFecha, 1000);
});

onBeforeUnmount(() => {
  clearInterval(actualizarFecha);
});

let lugDispPensionados = ref(5);
let nombreCliente = ref('');
let numeroTelefono = ref('');
let NumeroEmergencia = ref('');
let EstadoCliente = ref('Activo');
let ModeloVehiculo = ref('');
let MarcaVehiculo = ref('');
let FotoVehiculo = ref('');
let ColorVehiculo = ref('');
let AñoVehiculo = ref('');
let Placa = ref('');
let tiempoEstancia = ref('');
let carImage = ref('');
const mostrarTicket = ref(false);
const router = useRouter();
const horaImpresion = ref('');
const mostrarDialogo = ref(false);

onMounted(() => {
  const storedLugDisp = localStorage.getItem('lugDispPensionados');
  if (storedLugDisp !== null) {
    lugDispPensionados.value = parseInt(storedLugDisp);
  }
});

const registro = () => {
  if (!/^\d{10}$/.test(numeroTelefono.value)) {
    toast.error(
      'Número de teléfono inválido. Debe contener 10 dígitos numéricos.',
      {
        position: 'bottom',
        timeout: 3000,
      }
    );
    return; // Detener la ejecución del método si la validación falla
  }

  if (
    !nombreCliente.value &&
    !numeroTelefono.value &&
    !NumeroEmergencia.value &&
    !EstadoCliente.value
  ) {
    toast.error('Faltan datos del cliente', {
      position: 'bottom',
      timeout: 3000,
    });
  } else if (
    !ModeloVehiculo.value &&
    !MarcaVehiculo.value &&
    !FotoVehiculo.value &&
    !ColorVehiculo.value &&
    !AñoVehiculo.value &&
    !Placa.value
  ) {
    toast.error('Faltan datos del vehiculo', {
      position: 'bottom',
      timeout: 3000,
    });
  } else if (!tiempoEstancia.value) {
    toast.error('Falta elegir el tiempo de estancia', {
      position: 'bottom',
      timeout: 3000,
    });
  } else {
    const data = {
      nombre: nombreCliente.value,
      telefono: numeroTelefono.value,
      emergencia: NumeroEmergencia.value,
      status: EstadoCliente.value,
      modelo: ModeloVehiculo.value,
      marca: MarcaVehiculo.value,
      foto: carImage.value || null,
      color: ColorVehiculo.value,
      ano: AñoVehiculo.value,
      placa: Placa.value,
      tiempoEstancia: tiempoEstancia.value,
    };
    let registros = JSON.parse(localStorage.getItem('pensionados'));
    if (registros) {
      registros.push(data);
    } else {
      registros = [data];
    }
    localStorage.setItem('pensionados', JSON.stringify(registros));
    mostrarDialogo.value = true
    lugDispPensionados.value--;
    localStorage.setItem('lugDispPensionados', lugDispPensionados.value);
  }
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];

  if (file) {
    // Convierte la imagen a un objeto de datos URL para previsualización
    const reader = new FileReader();
    reader.onload = () => {
      carImage.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

function MostrarTicket() {
  if (!Placa.value) {
    toast.error('No hay información para mostrar en el ticket', {
      position: 'bottom',
      timeout: 3000,
    });
  } else {
    horaImpresion.value = new Date().toLocaleTimeString();
    mostrarTicket.value = true;
  }
}

function cerrarTicketDialogo() {
  mostrarTicket.value = false;
  
}

const agregarServicioAdicional = () => {
  console.log('si');
  router.push({ name: 'Servicios_Add-Servicios_Registro', query: { placa: Placa.value } });
  //cerrarDialogo();
};

const cerrarDialogo = () => {
  mostrarDialogo.value = false;
  router.push({ name: 'Pensionados-PensionadosConsulta' });
};

function ServiciAdd() {
  if (!Placa.value) {
    toast.error('No hay carro para asignarle un servicio', {
      position: 'bottom',
      timeout: 3000,
    });
  } else {
    router.push({ name: 'Servicios_Add-Servicios_Registro' });
  }
}
</script>

<style scoped>
.uploaded-image {
  width: 300px; /* Ajusta según tus necesidades */
  height: auto; /* Esto mantiene la proporción de la imagen */
  max-width: 100%; /* Ajusta para que no se desborde en caso de imágenes grandes */
}
</style>
