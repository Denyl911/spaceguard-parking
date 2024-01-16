<template>
  <section class="bg-slate-400">
    <div class="container p-4">
      <h1 style="color: black; font-family: Verdana; font-size: 36px">
        <b>Vehículos pensionados - Modificación</b>
      </h1>
      <MazInput
        class="mt-8"
        v-model="buscarCliente"
        label="Placa del vehiculo"
      />
      <MazBtn class="mt-2 mb-5" color="black" @click="buscar"
        >Buscar datos</MazBtn
      >
      <div class="w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
        <!-- <h2 class="mt-8">Datos del cliente:</h2>
        <MazInput
          class="mb-1"
          v-model="nombreCliente"
          label="Nombre del cliente"
        />
        <MazInput
          class="mb-1"
          v-model="numeroTelefono"
          label="Numero telefónico"
        />
        <MazInput
          class="mb-1"
          v-model="NumeroEmergencia"
          label="Numero de emergencia"
        /> -->
        <!-- <MazInput v-model="EstadoCliente" label="Estado del cliente" /> -->
        <h3 class="mt-8">Datos del vehiculo:</h3>
        <MazInput class="mb-1" v-model="ModeloVehiculo" label="Modelo" />
        <MazInput class="mb-1" v-model="MarcaVehiculo" label="Marca" />
        <h4
          style="color: white; font-family: Verdana; font-size: 18px"
          class="mt-8"
        >
          Foto:
        </h4>

        <div class="mb-4">
          <input type="file" @change="handleImageUpload" accept="image/*" />
          <img
            :src="FotoVehiculo"
            alt="Preview"
            v-if="FotoVehiculo"
            class="uploaded-image"
          />
        </div>
        <MazInput class="mb-1" v-model="ColorVehiculo" label="Color" />
        <MazInput class="mb-1" v-model="AñoVehiculo" label="Año" />
        <MazInput v-model="Placa" label="Placa" />
        <!-- <h4 class="mt-8">Extras:</h4>
          <MazInput
            class="mb-1"
            v-model="ServicioAdd"
            label="Serivicio adicional"
          />
          <MazInput v-model="Promocion" label="Editar promoción" /> -->
        <section class="bg-slate-400 mt-2">
          <label for="tiempoEstancia">Tiempo de estancia: <br /></label>
          <select v-model="tiempoEstancia" style="width: 35rem; height: 40px">
            <option value="1 semana">1 semana</option>
            <option value="1 mes">1 mes</option>
            <option value="6 meses">6 meses</option>
            <option value="1 año">1 año</option>
          </select>
        </section>
      </div>
      <MazBtn rounded class="mt-6 w-80" color="black" pastel @click="actualizar"
        >Guardar y actualizar</MazBtn
      >
    </div>
    <!-- <div style="float: left; margin-left: 850px">
      <MazBtn class="mt-6 mb-12" color="success">Lugar asignado:<br />9</MazBtn>
    </div>
    <div style="clear: both"></div> -->
  </section>
</template>

<script setup>
import { ref } from 'vue';
import MazInput from 'maz-ui/components/MazInput';
import { useToast } from 'maz-ui';

const toast = useToast();

let buscarCliente = ref('');
let nombreCliente = ref('');
let numeroTelefono = ref('');
let NumeroEmergencia = ref('');
let EstadoCliente = ref('');
let ModeloVehiculo = ref('');
let MarcaVehiculo = ref('');
let FotoVehiculo = ref('');
let ColorVehiculo = ref('');
let AñoVehiculo = ref('');
let Placa = ref('');
let tiempoEstancia = ref('');
let ServicioAdd = ref('');
let Promocion = ref('');
let registros = [];

const router = useRouter();

onMounted(() => {
  registros = JSON.parse(localStorage.getItem('pensionados'));
});

const buscar = () => {
  const reg = registros.find((el) => el.placa == buscarCliente.value);
  if (reg) {
    nombreCliente.value = reg.nombre;
    numeroTelefono.value = reg.telefono;
    NumeroEmergencia.value = reg.emergencia;
    EstadoCliente.value = reg.status;
    ModeloVehiculo.value = reg.modelo;
    MarcaVehiculo.value = reg.marca;
    FotoVehiculo.value = reg.foto;
    ColorVehiculo.value = reg.color;
    AñoVehiculo.value = reg.ano;
    Placa.value = reg.placa;
    tiempoEstancia.value = reg.tiempoEstancia;
  } else {
    toast.error('Placa no encontrada', {
      position: 'bottom',
      timeout: 3000,
    });
  }
};

const actualizar = () => {
  const index = registros.findIndex((el) => el.placa == buscarCliente.value);
  registros[index] = {
    nombre: nombreCliente.value,
    telefono: numeroTelefono.value,
    emergencia: NumeroEmergencia.value,
    status: EstadoCliente.value,
    modelo: ModeloVehiculo.value,
    marca: MarcaVehiculo.value,
    foto: FotoVehiculo.value || null,
    color: ColorVehiculo.value,
    ano: AñoVehiculo.value,
    placa: Placa.value,
    tiempoEstancia: tiempoEstancia.value,
  };
  localStorage.setItem('pensionados', JSON.stringify(registros));
  router.push({ name: 'Pensionados-PensionadosConsulta' });
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];

  if (file) {
    // Convierte la imagen a un objeto de datos URL para previsualización
    const reader = new FileReader();
    reader.onload = () => {
      FotoVehiculo.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};
</script>

<style scoped>
.uploaded-image {
  width: 300px; /* Ajusta según tus necesidades */
  height: auto; /* Esto mantiene la proporción de la imagen */
  max-width: 100%; /* Ajusta para que no se desborde en caso de imágenes grandes */
}
</style>
