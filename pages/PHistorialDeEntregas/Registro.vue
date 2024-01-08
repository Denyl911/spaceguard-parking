<template>
  <section class="bg-slate-400">
    <div class="container p-4">
      <h1 style="color: black; font-family: Verdana; font-size: 36px">
        <b>Registro de entregaa</b>
      </h1>

      <div class="w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
        <h2
          style="color: white; font-family: Verdana; font-size: 36px"
          class="mt-8"
        >
          Datos del proveedor:
        </h2>
        <MazInput class="mb-1" v-model="Nombre" type="text" label="Nombre" />
        <MazInput class="mb-1" v-model="Direccion" label="Direccion" />
        <MazInput class="mb-1" v-model="Email" label="Email" />
        <MazInput class="mb-1" v-model="SitioWeb" label="Sitio Web" />
        <MazInput class="mb-1" v-model="Telefono" label="Teléfono" />
        <MazInput class="mb-1" v-model="TipoProds" label="Tipo de Productos" />
        <MazInput class="mb-1" v-model="RFC" label="RFC" />
      </div>
      <MazBtn rounded class="mt-6 w-40" color="black" pastel @click="registro"
        >Registrar</MazBtn
      >
    </div>
  </section>
</template>

<script setup>
const toast = useToast();

let Nombre = ref('');
let Direccion = ref('');
let Email = ref('');
let SitioWeb = ref('');
let Telefono = ref('');
let TipoProds = ref('');
let RFC = ref('');

const router = useRouter();

const registro = () => {
  if (
    !Nombre.value ||
    !Direccion.value ||
    !Email.value ||
    !SitioWeb.value ||
    !Telefono.value ||
    !TipoProds.value ||
    !RFC.value
  ) {
    toast.error('Datos incompletos', {
      position: 'bottom',
      timeout: 3000,
    });
  } else {
    const data = {
      id: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
      Nombre: Nombre.value,
      Direccion: Direccion.value,
      Email: Email.value,
      SitioWeb: SitioWeb.value,
      Telefono: Telefono.value,
      TipoProds: TipoProds.value,
      RFC: RFC.value,
    };
    let registros = JSON.parse(localStorage.getItem('proveedores')) || [];
    registros.push(data);
    localStorage.setItem('proveedores', JSON.stringify(registros));
    router.push({ name: 'Proveedores-Consulta' });
  }
};
</script>
