<template>
  <section class="bg-slate-400">
    <div class="container p-4">
      <h1 style="color: black; font-family: Verdana; font-size: 36px">
        <b>Costos para pensionados - Modificar</b>
      </h1>
      <div class="w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
        <h2
          style="color: white; font-family: Verdana; font-size: 36px"
          class="mt-8"
        >
          Datos de los costos:
        </h2>
        <section class="bg-slate-400">
          <label for="tiempoEstancia">Tiempo de estancia:</label>
          <select
            v-model="tiempoEstancia"
            style="min-width: 57vw; height: 40px; border-radius: 10px"
          >
            <option value="1 semana">1 semana</option>
            <option value="1 mes">1 mes</option>
            <option value="2 meses">2 meses</option>
            <option value="Medio año">Medio año</option>
            <option value="1 año">1 año</option>
          </select>
        </section>
        <MazInput
          class="mt-5"
          v-model="precio"
          label="Precio"
          @input="validarPrecio"
        />
      </div>
      <MazBtn
        rounded
        class="mt-6 w-130"
        color="black"
        pastel
        @click="GuardarUpdate"
      >
        Guardar y actualizar
      </MazBtn>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import MazInput from 'maz-ui/components/MazInput';
import { useToast } from 'maz-ui';

const toast = useToast();
const router = useRouter();

let tiempoEstancia = ref('');
let precio = ref('');

let registros = JSON.parse(localStorage.getItem('costosPensionados'));
let preciosPorTiempoEstancia = [];

onMounted(() => {
  if (registros) {
    preciosPorTiempoEstancia = registros.map((el) => {
      return {
        tiempoEstancia: el.tiempoEstancia,
        precio: el.precio,
      };
    });
  } else {
    preciosPorTiempoEstancia = [];
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
    let registros = JSON.parse(localStorage.getItem('costosPensionados')) || [];
    // Verificar si el tiempoEstancia ya existe
    const existeRegistro = registros.some(
      (registro) => registro.tiempoEstancia === tiempoEstancia.value
    );
    if (existeRegistro) {
      const index = registros.findIndex(
        (el) => el.tiempoEstancia == tiempoEstancia.value
      );
      const precioConSimbolo = `$${precio.value}`;
      registros[index] = {
        tiempoEstancia: tiempoEstancia.value,
        precio: precioConSimbolo,
      };
      localStorage.setItem('costosPensionados', JSON.stringify(registros));

      toast.success('Guardado y actualizado con éxito', {
        position: 'bottom',
        timeout: 3000,
      });
    } else {
      toast.error('Aún no existe un registro para este tiempo de estancia', {
        position: 'bottom',
        timeout: 3000,
      });
    }
    //router.push({ name: 'index' });
  }
}

function validarPrecio() {
  // Utiliza una expresión regular para permitir solo números
  precio.value = precio.value.replace(/\D/g, '');
}

watch(tiempoEstancia, (newVal) => {
  for (let i = 0; i < preciosPorTiempoEstancia.length; i++) {
    const element = preciosPorTiempoEstancia[i];

    // Accede a cada propiedad del elemento
    const tiempoEstanciaDOS = element.tiempoEstancia;
    const precioDOS = element.precio;

    if (newVal === tiempoEstanciaDOS) {
      precio.value = precioDOS;
    }
  }
});
</script>
