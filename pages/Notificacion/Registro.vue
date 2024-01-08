<template>
  <section class="bg-slate-400">
    <div class="container p-4">
      <h1 style="color: black; font-family: Verdana; font-size: 36px">
        <b>Notificaciones - Registro</b>
      </h1>

      <div class="w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
        <h2
          style="color: white; font-family: Verdana; font-size: 36px"
          class="mt-8"
        >
          Datos de la notificación:
        </h2>
        <MazInput
          class="mb-1"
          v-model="placa"
          type="text"
          label="Placa del cliente"
        />
        <MazInput class="mb-1" v-model="titulo" label="Título" />
        <MazInput class="mb-1" v-model="mensaje" label="Mensaje" />
      </div>
      <MazBtn rounded class="mt-6 w-40" color="black" pastel @click="registro"
        >Registrar</MazBtn
      >
    </div>
  </section>
</template>

<script setup>
const toast = useToast();

let placa = ref('');
let titulo = ref('');
let mensaje = ref('');

const router = useRouter();

const registro = () => {
  if (!placa.value && !titulo.value && !mensaje.value) {
    toast.error('Datos incompletos', {
      position: 'bottom',
      timeout: 3000,
    });
  } else {
    const data = {
      id: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
      titulo: titulo.value,
      mensaje: mensaje.value,
      placa: placa.value,
    };
    let registros = JSON.parse(localStorage.getItem('notificaciones'));
    if (registros) {
      registros.push(data);
    } else {
      registros = [data];
    }
    localStorage.setItem('notificaciones', JSON.stringify(registros));
    router.push({ name: 'Notificacion-Consulta' });
  }
};
</script>
