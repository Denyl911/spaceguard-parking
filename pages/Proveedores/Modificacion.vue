<template>
  <section class="bg-slate-400">
    <div class="container p-4">
      <h1 style="color: black; font-family: Verdana; font-size: 36px">
        <b>Proveedores - Modificación</b>
      </h1>
      <MazInput
        class="mt-8"
        v-model="buscarProducto"
        label="ID del Proveedor"
        @keyup.enter="buscar"
      />
      <MazBtn class="mt-2 mb-5" color="black" @click="buscar"
        >Buscar proveedor
      </MazBtn>
      <div class="w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
        <h2
          style="color: white; font-family: Verdana; font-size: 36px"
          class="mt-8"
        >
          Datos del proveedor:
        </h2>
        <MazInput
          class="mb-1"
          v-model="IDProveedor"
          label="ID Proveedor"
          disabled
        />
        <MazInput class="mb-1" v-model="Nombre" type="text" label="Nombre" />
        <MazInput class="mb-1" v-model="Direccion" label="Direccion" />
        <MazInput class="mb-1" v-model="Email" label="Email" />
        <MazInput class="mb-1" v-model="SitioWeb" label="Sitio Web" />
        <MazInput class="mb-1" v-model="Telefono" label="Teléfono" />
        <MazInput class="mb-1" v-model="TipoProds" label="Tipo de Productos" />
        <MazInput class="mb-1" v-model="RFC" label="RFC" />
      </div>
      <MazBtn rounded class="mt-6 w-80" color="black" pastel @click="actualizar"
        >Guardar y actualizar</MazBtn
      >
    </div>
  </section>
</template>

<script setup>
const toast = useToast();

let buscarProducto = ref('');
let IDProveedor = ref('');
let Nombre = ref('');
let Direccion = ref('');
let Email = ref('');
let SitioWeb = ref('');
let Telefono = ref('');
let TipoProds = ref('');
let RFC = ref('');
let registros = [];

const router = useRouter();

onMounted(() => {
  registros = JSON.parse(localStorage.getItem('proveedores'));
});

const buscar = () => {
  const reg = registros.find((el) => el.id == buscarProducto.value);
  if (reg) {
    IDProveedor.value = reg.id;
    Nombre.value = reg.Nombre;
    Direccion.value = reg.Direccion;
    Email.value = reg.Email;
    SitioWeb.value = reg.SitioWeb;
    Telefono.value = reg.Telefono;
    TipoProds.value = reg.TipoProds;
    RFC.value = reg.RFC;
  } else {
    toast.error('Registro no encontrado', {
      position: 'bottom',
      timeout: 3000,
    });
  }
};

const actualizar = () => {
  const index = registros.findIndex((el) => el.id == buscarProducto.value);
  registros[index] = {
    id: IDProveedor.value,
    Nombre: Nombre.value,
    Direccion: Direccion.value,
    Email: Email.value,
    SitioWeb: SitioWeb.value,
    Telefono: Telefono.value,
    TipoProds: TipoProds.value,
    RFC: RFC.value,
  };
  localStorage.setItem('proveedores', JSON.stringify(registros));
  router.push({ name: 'Proveedores-Consulta' });
};
</script>
