<template>
  <section class="bg-slate-400">
    <div class="container p-4">
      <h1 style="color: black; font-family: Verdana; font-size: 36px">
        <b>Inventario - Modificación</b>
      </h1>
      <MazInput
        class="mt-8"
        v-model="buscarProducto"
        label="ID Producto"
        @keyup.enter="buscar"
      />
      <MazBtn class="mt-2 mb-5" color="black" @click="buscar"
        >Buscar artículo</MazBtn
      >
      <div class="w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
        <h2
          style="color: white; font-family: Verdana; font-size: 36px"
          class="mt-8"
        >
          Datos del artículo:
        </h2>
        <MazInput
          class="mb-1"
          v-model="IDProducto"
          label="ID producto"
          disabled
        />
        <MazSelect
          class="mb-1"
          v-model="IDProveedor"
          label="Seleccione un proveedor"
          :options="proveedores"
          color="secondary"
        />
        <!-- <MazInput class="mb-1" v-model="IDProveedor" label="Proveedor" /> -->

        <MazInput class="mb-1" v-model="nombre" label="Nombre" />
        <MazInput class="mb-1" v-model="descripcion" label="Descripcion" />
        <MazInput
          class="mb-1"
          v-model="precioporunidad"
          label="Precio por unidad"
        />
        <MazInput class="mb-1" v-model="stock" label="Stock" />
        <h4
          style="color: white; font-family: Verdana; font-size: 18px"
          class="mt-8"
        >
          Foto:
        </h4>

        <div>
          <input type="file" @change="handleImageUpload" accept="image/*" />
          <img
            :src="imagen"
            alt="Preview"
            v-if="imagen"
            class="uploaded-image"
          />
        </div>
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
let IDProducto = ref('');
let nombre = ref('');
let descripcion = ref('');
let precioporunidad = ref('');
let stock = ref('');
let imagen = ref('');
let registros = [];
let proveedores = ref([]);

const router = useRouter();

onMounted(() => {
  registros = JSON.parse(localStorage.getItem('inventario'));
  let data = JSON.parse(localStorage.getItem('proveedores')) || [
    {
      label: 'Añada un provedor antes',
    },
  ];
  proveedores.value = data.map((el) => {
    return {
      value: el.Nombre,
      label: `${el.id} - ${el.Nombre}`,
    };
  });
});

const buscar = () => {
  const reg = registros.find((el) => el.id == buscarProducto.value);
  if (reg) {
    IDProveedor.value = reg.proveedor;
    IDProducto.value = reg.id;
    nombre.value = reg.nombre;
    descripcion.value = reg.descripcion;
    precioporunidad.value = reg.ppp;
    stock.value = reg.stock;
    imagen.value = reg.imagen;
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
    id: IDProducto.value,
    nombre: nombre.value,
    proveedor: IDProveedor.value,
    descripcion: descripcion.value,
    ppp: precioporunidad.value,
    stock: stock.value,
    imagen: imagen.value || null,
  };
  localStorage.setItem('inventario', JSON.stringify(registros));
  router.push({ name: 'Inventario-InventarioConsulta' });
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];

  if (file) {
    // Convierte la imagen a un objeto de datos URL para previsualización
    const reader = new FileReader();
    reader.onload = () => {
      imagen.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};
</script>

<style scoped>
.uploaded-image {
  width: 300px; /* Ajusta según tus necesidades */
  height: auto; /* Esto mantiene la proporción de la imagen */
  max-width: 100%; /* Ajusta para que no se desborde en caso de imágenes grandes */
}
</style>
