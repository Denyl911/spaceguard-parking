<template>
    <section class="bg-slate-400">
        <div class="container p-4">
          <h1 style="color: black; font-family: Verdana; font-size: 36px;"><b>Costos - Consulta (Entrada de vehiculos)</b></h1>
          <MazInput class="mt-8" v-model="buscarTiempo" label="Tiempo de estancia especifico"/>
            <MazBtn class="mt-2 mb-5" color="black" @click="BuscarCosto">Buscar Costo</MazBtn>     
        </div>
        <div id="tabla" class="mt-8"></div>
        <div class="container p-8">
          <MazBtn rounded class="mt-6 w-40" color="black" pastel @click="CerrarVentana">Cerrar ventana</MazBtn>
      </div>
    </section>
</template>
  
  
  <script setup>
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router'
    import { ref } from 'vue'
    import MazInput from 'maz-ui/components/MazInput'
    import { Grid } from 'gridjs';
    import 'gridjs/dist/theme/mermaid.css';

    import { useToast } from 'maz-ui';
  
    const toast = useToast();
  
    let buscarTiempo = ref('');
    let registros = JSON.parse(localStorage.getItem('costosEVehiculos'));

    onMounted(() => {
      if (registros) {
        registros = registros.map((el) => {
          return [
            el.tiempoEstancia,
            el.precio,
          ];
        });
      } else {
        registros = [];
      }

      let tabla = document.getElementById('tabla');
      
      new Grid({
        columns: ['Tiempo de estancia', 'Precio'],
        data: registros,
      }).render(tabla);
    });

    const router = useRouter()

    function BuscarCosto() {
      if (!buscarTiempo.value) {      
        toast.error('Ingresa el tiempo de estancia', {
                      position: 'bottom',
                      timeout: 3000,
                  });
      } else {
        const costoExistente = registros.some(item => item[0] === buscarTiempo.value);
        if (costoExistente) {
          toast.success('Tiempo de estancia existente', {
                      position: 'bottom',
                      timeout: 3000,
                  });
        } else {
          toast.error('El tiempo de estancia no existe', {
                      position: 'bottom',
                      timeout: 3000,
                  });
        }
      }
    }  
    
    function CerrarVentana() {
      router.push({ name: 'index' });
    }

</script>