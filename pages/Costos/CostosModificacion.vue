<template>
    <section class="bg-slate-400">
      <div class="container p-4">
        <h1 style="color: black; font-family: Verdana; font-size: 36px;"><b>Costos - Modificar</b></h1>
        <div class="w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
          <h2 style="color: white; font-family: Verdana; font-size: 36px;" class="mt-8">Datos de los costos:</h2>
          <section class="bg-slate-400">
            <label for="tiempoEstancia">Tiempo de estancia:</label>
            <select v-model="tiempoEstancia" style="width: 775px; height: 40px;">
                <option value="Menos de 1 hora">Menos de 1 hora</option>
                <option value="1 hora">1 hora</option>
                <option value="1 día">1 día</option>
                <option value="1 semana">1 semana</option>
                <option value="1 mes">1 mes</option>
            </select>
          </section>
          <MazInput class="mt-5" v-model="precio" label="Precio" @input="validarPrecio" />
        </div>
        <MazBtn rounded class="mt-6 w-130" color="black" pastel @click="GuardarUpdate">
          Guardar y actualizar
        </MazBtn>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import MazInput from 'maz-ui/components/MazInput';
  import { useToast } from 'maz-ui';
  
  const toast = useToast();
  const router = useRouter();
  
  let tiempoEstancia = ref('');
  let precio = ref('');
  
  // Cargar registros al inicio
  onMounted(() => {
    // Utiliza registros como variable local al script
    let registros = JSON.parse(localStorage.getItem('costosEVehiculos'));
    // Verifica si los registros existen antes de asignarlos a la variable
    if (!registros) {
      registros = [];
    }
  });
  
  function GuardarUpdate() {
    if (!tiempoEstancia.value) {
      toast.error('Elije el nuevo tiempo de estancia', {
        position: 'bottom',
        timeout: 3000,
      });
    } else if (!precio.value) {
      toast.error('Ingresa el nuevo precio', {
        position: 'bottom',
        timeout: 3000,
      });
    } else {
      // Utiliza registros como variable local al script
      let registros = JSON.parse(localStorage.getItem('costosEVehiculos'));
      // Verifica si los registros existen antes de intentar acceder a ellos
      if (!registros) {
        registros = [];
      }
  
      const index = registros.findIndex((el) => el.tiempoEstancia == tiempoEstancia.value);
      const precioConSimbolo = `$${precio.value}`;
      registros[index] = {
        tiempoEstancia: tiempoEstancia.value,
        precio: precioConSimbolo,
      };
      localStorage.setItem('costosEVehiculos', JSON.stringify(registros));
  
      toast.success('Guardado y actualizado con éxito', {
        position: 'bottom',
        timeout: 3000,
      });
      router.push({ name: 'index' });
    }
  }

    function validarPrecio() {
        // Utiliza una expresión regular para permitir solo números
        precio.value = precio.value.replace(/\D/g, '');
    }
</script>
  