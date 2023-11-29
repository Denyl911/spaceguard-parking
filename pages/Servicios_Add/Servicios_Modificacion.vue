<template>
    <section class="bg-slate-400">
      <div class="container p-4">
        <h1 style="color: black; font-family: Verdana; font-size: 36px">
          <b>Servicios adicionales - Modificación</b>
        </h1>
        <section class="bg-slate-400">
            <label for="tiempoEstancia">ID servicio: </label>
            <select v-model="IDSer" style="width: 750px; height: 40px;">
              <option value="1">01LAVADO</option>
              <option value="2">02ENCERADO</option>
              <option value="3">03PULIDO</option>
              <option value="4">04ACEITE</option>
              <option value="5">05LLANTAS</option>
            </select>
        </section>
        <div class="w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md mt-2">
          <h2
            style="color: white; font-family: Verdana; font-size: 36px"
            class="mt-8"
          >
            Datos del servicio:
          </h2>
          <MazInput class="mb-1" v-model="IDSer" label="ID servicio" />
          <MazInput class="mb-1" v-model="nombre" label="Nombre" />
          <MazInput class="mb-1" v-model="descripcion" label="Descripción" />
          <MazInput class="mb-1" v-model="duracion" label="Duración" />
          <MazInput class="mb-1" v-model="costo" label="Costo" />
          <MazInput class="mb-1" v-model="materiales" label="Materiales" />
          <MazInput class="mb-1" v-model="empleado" label="Empleado asignado" />
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
  
  let buscarPromocion = ref('');
  let IDSer = ref('');
  let nombre = ref('');
  let descripcion = ref('');
  let duracion = ref('');
  let costo = ref('');
  let materiales = ref('');
  let empleado = ref('');
  
  let registros = [];
  
  const router = useRouter();
  
  onMounted(() => {
    registros = JSON.parse(localStorage.getItem('servicios'));
  });  
  
  const actualizar = () => {
    const index = registros.findIndex((el) => el.id == buscarPromocion.value);
    registros[index] = {
      id: IDSer.value,
      nombre: nombre.value,
      descripcion: descripcion.value,
      duracion: duracion.value,
      costo: costo.value,
      materiales: materiales.value,
      empleado: empleado.value,
    };
    localStorage.setItem('servicios', JSON.stringify(registros));
    router.push({ name: 'Servicios_Add-Servicios_Consulta' });
  };

  watch(IDSer, (newVal) => {
    if (newVal === '1') {
      IDSer. value = '01LAVADO';
      nombre.value = 'Lavado';
      descripcion.value = 'Lavado de vehículo';
      duracion.value = '30 minutos';
      costo.value = '$50.00';
      materiales.value = 'Agua, jabón, cepillos';
      empleado.value = 'Jorge Iván';
    } else if (newVal === '2') {
      IDSer. value = '02ENCERADO';
      nombre.value = 'Encerado';
      descripcion.value = 'Encerado de la carrocería';
      duracion.value = '2 horas';
      costo.value = '$300.00';
      materiales.value = 'Cera, espoja, agua, trapo';
      empleado.value = 'Victor';
    } else if (newVal === '3') {
      IDSer. value = '03PULIDO';
      nombre.value = 'Pulido';
      descripcion.value = 'Pulir carrocería y llantas';
      duracion.value = '2 horas';
      costo.value = '$400.00';
      materiales.value = 'Pulidora, cera, jabón, agua, trapos';
      empleado.value = 'Rodrigo';
    } else if (newVal === '4') {
      IDSer. value = '04ACEITE';
      nombre.value = 'Cambio de aceite';
      descripcion.value = 'Cambiar aceite y filtro';
      duracion.value = '30 minutos';
      costo.value = '$800.00';
      materiales.value = 'Aceite específico, filtro, llaves/pinzas.';
      empleado.value = 'Luis';
    } else if (newVal === '5') {
      IDSer. value = '05LLANTAS';
      nombre.value = 'Revisión de llantas';
      descripcion.value = 'Se calibra la presión del aire, fugas y posición';
      duracion.value = '1 hora';
      costo.value = '$250.00';
      materiales.value = 'Calibrador, compresora, agua y jabón';
      empleado.value = 'Jared';
    }
});
  </script>