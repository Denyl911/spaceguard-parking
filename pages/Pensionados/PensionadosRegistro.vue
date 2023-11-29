<template>
    <section class="bg-slate-400">
      <div class="container p-4">
        <h1 style="color: black; font-family: Verdana; font-size: 36px">
          <b>Vehiculos pensionados - Registro</b>
        </h1>
        <MazBtn class="mt-8 mb-5" color="black">Lugares disponibles: {{ lugDispPensionados }}</MazBtn>
        <MazBtn class="mt-8 mb-5" :style="{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }">Hora actual: {{ horaActual }}</MazBtn>    
        <MazBtn class="mt-8 mb-5" :style="{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }">Fecha actual: {{ fechaActual }}</MazBtn>
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
            label="Numero telefónico"
          />
          <MazInput
            class="mb-1"
            type="tel"
            v-model="NumeroEmergencia"
            label="Numero de emergencia"
          />
          <MazInput v-model="EstadoCliente" label="Estado del cliente" disabled />
          <h3
            style="color: white; font-family: Verdana; font-size: 36px"
            class="mt-8"
          >
            Datos del vehiculo:
          </h3>
          <MazInput class="mb-1" v-model="ModeloVehiculo" label="Modelo" />
          <MazInput class="mb-1" v-model="MarcaVehiculo" label="Marca" />
          <MazInput class="mb-1" v-model="FotoVehiculo" label="Foto" />
          <MazInput class="mb-1" v-model="ColorVehiculo" label="Color" />
          <MazInput class="mb-1" v-model="AñoVehiculo" label="Año" />
          <MazInput class="mb-1" v-model="Placa" label="Placa" />

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
        <MazBtn rounded class="mt-6 w-40" color="black" pastel @click="registro"
          >Registrar</MazBtn
        >
      </div>
      <div style="float: left; margin-left: 850px">
        <MazBtn class="mt-8" color="success"
          >Lugar asignado:<br />{{lugDispPensionados}}</MazBtn
        >
      </div>
      <div style="clear: both"></div>
      <div>
        <MazBtn rounded class="mt-6 w-40" color="black" pastel
          >Servicio adicional</MazBtn
        >
        <MazBtn rounded class="mt-6 w-40" color="black" pastel
          >Promociones</MazBtn
        >
      </div>
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
  
  const router = useRouter();

  onMounted(() => {
        const storedLugDisp = localStorage.getItem('lugDispPensionados');
        if (storedLugDisp !== null) {
            lugDispPensionados.value = parseInt(storedLugDisp);
        }
    });
  
  const registro = () => {
    if(!nombreCliente.value && !numeroTelefono.value && !NumeroEmergencia.value && !EstadoCliente.value){
      toast.error('Faltan datos del cliente', {
                    position: 'bottom',
                    timeout: 3000,
                }); 
    }else if(!ModeloVehiculo.value && !MarcaVehiculo.value && !FotoVehiculo.value && !ColorVehiculo.value && !AñoVehiculo.value && !Placa.value){
      toast.error('Faltan datos del vehiculo', {
                    position: 'bottom',
                    timeout: 3000,
                }); 
    } else if(!tiempoEstancia.value){
      toast.error('Falta elegir el tiempo de estancia', {
                    position: 'bottom',
                    timeout: 3000,
                });
    } else{
        const data = {
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
        tiempoEstancia: tiempoEstancia.value,
      };
        let registros = JSON.parse(localStorage.getItem('pensionados'));
        if (registros) {
          registros.push(data);
        } else {
          registros = [data];
        }
        localStorage.setItem('pensionados', JSON.stringify(registros));
        router.push({ name: 'Pensionados-PensionadosConsulta' });
      };
    }
  </script>