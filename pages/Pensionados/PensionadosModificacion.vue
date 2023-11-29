<template>
    <section class="bg-slate-400">
      <div class="container p-4">
        <h1 style="color: black; font-family: Verdana; font-size: 36px">
          <b>Vehiculos pensionados - Modificación</b>
        </h1>
        <MazInput
          class="mt-8"
          v-model="buscarCliente"
          label="Placa del vehiculo"
        />
        <MazBtn class="mt-2 mb-5" color="black" @click="buscar"
          >Buscar datos del cliente</MazBtn
        >
        <div class="w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
          <h2 class="mt-8">Datos del cliente:</h2>
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
          />
          <MazInput v-model="EstadoCliente" label="Estado del cliente" />
          <h3 class="mt-8">Datos del vehiculo:</h3>
          <MazInput class="mb-1" v-model="ModeloVehiculo" label="Modelo" />
          <MazInput class="mb-1" v-model="MarcaVehiculo" label="Marca" />
          <MazInput class="mb-1" v-model="FotoVehiculo" label="Foto" />
          <MazInput class="mb-1" v-model="ColorVehiculo" label="Color" />
          <MazInput class="mb-1" v-model="AñoVehiculo" label="Año" />
          <MazInput v-model="Placa" label="Placa" />
          <h4 class="mt-8">Extras:</h4>
          <MazInput
            class="mb-1"
            v-model="ServicioAdd"
            label="Serivicio adicional"
          />
          <MazInput v-model="Promocion" label="Editar promoción" />
          <section class="bg-slate-400">
                <label for="tiempoEstancia">Tiempo de estancia:   </label>
                <select v-model="tiempoEstancia" style="width: 765px; height: 40px;">
                    <option value="1">1 semana</option>
                    <option value="2">1 mes</option>
                    <option value="3">6 meses</option>
                    <option value="4">1 año</option>
                </select>
          </section>
        </div>
        <MazBtn rounded class="mt-6 w-80" color="black" pastel @click="actualizar"
          >Guardar y actualizar</MazBtn
        >
      </div>
      <div style="float: left; margin-left: 850px">
        <MazBtn class="mt-6 mb-12" color="success"
          >Lugar asignado:<br />9</MazBtn
        >
      </div>
      <div style="clear: both"></div>
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
      foto: FotoVehiculo.value,
      color: ColorVehiculo.value,
      ano: AñoVehiculo.value,
      placa: Placa.value,
    };
    localStorage.setItem('pensionados', JSON.stringify(registros));
    router.push({ name: 'Pensionados-PensionadosConsulta' });
  };
  </script>