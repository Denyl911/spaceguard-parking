<template>
  <section class="bg-slate-400">
      <div class="container p-4">
          <h1 style="color: black; font-family: Verdana; font-size: 36px;"><b>Entrada de Vehículos - Consulta</b></h1>
          <div class = "w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
              <h2 style="color: white; font-family: Verdana; font-size: 36px;" class="mt-8">Datos del vehículo:</h2>
              <MazInput class="mb-1" v-model="placa" @input="convertirAMayusculas" label="Placa"/>
              <MazBtn rounded class="mt-6 w-40" color="black" pastel @click="Registro">Buscar</MazBtn>
          </div>            
      </div>
      <div id="tabla" class="mt-8"></div>  
      <div class="container p-8">
        <MazBtn rounded class="mt-6 w-40" color="black" pastel @click="CerrarVentana">Cerrar ventana</MazBtn>
      </div>
  </section>
</template>


<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import MazInput from 'maz-ui/components/MazInput'

  import { useToast } from 'maz-ui';
  
    const toast = useToast();

  let placa = ref('');    

  import { onMounted } from 'vue';
  import { Grid } from 'gridjs';
  import 'gridjs/dist/theme/mermaid.css';

  let registros = JSON.parse(localStorage.getItem('entrada'));

  onMounted(() => {
    if (registros) {
      registros = registros.map((el) => {
        return [
          el.placa,
          el.lugDisp,
          el.fecha,
          el.hora,
          { resaltar: false },
        ];
      });
    } else {
      registros = [];
    }

    let tabla = document.getElementById('tabla');
    
    new Grid({
      columns: ['Placa', 'Lugar asignado', 'Fecha', 'Hora'],
      data: registros,
        rowRenderer: (row) => {
        if (row.cells[4].data.resaltar) {
          return row.cells.map((cell) => cell.element.style.backgroundColor = 'lightyellow');
        }
      },
    }).render(tabla);
  });
  
  const router = useRouter()

  function Registro() {
    if (!placa.value) {
      toast.error('Ingresa una placa', {
                    position: 'bottom',
                    timeout: 3000,
                });  
    } else {
      let placaExistente = registros.some((item) => item[0] === placa.value);
      if (placaExistente) {       
        registros.forEach((item) => {
          item[4].resaltar = item[0] === placa.value;
        });

        toast.success('Placa existente', {
                    position: 'bottom',
                    timeout: 3000,
                });  
      } else {
        toast.error('La placa no existe', {
                    position: 'bottom',
                    timeout: 3000,
                });  
      }
    }
  }  

  function CerrarVentana() {
    router.push({ name: 'index' });
  }

  const convertirAMayusculas = () => {
    // Convierte el valor de placa a mayúsculas
    placa.value = placa.value.toUpperCase();

    const primerformatoValido = /^[A-Z]{3}\d{3}[A-Z]$/;
    const segundoformatoValido= /^([A-Z]{3}-\d{3}-[A-Z])$/;

    if (primerformatoValido.test(placa.value)) {                
      placa.value = `${placa.value.slice(0, 3)}-${placa.value.slice(3, 6)}-${placa.value.slice(6)}`;
    } else if (segundoformatoValido.test(placa.value)) {              
    }
  };
  
</script>