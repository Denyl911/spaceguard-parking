<template>
  <section class="bg-slate-400">
    <div class="container p-4">
      <h1 style="color: black; font-family: Verdana; font-size: 36px">
        <b>Inventario - Registro</b>
      </h1>

      <div class="w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
        <h2
          style="color: white; font-family: Verdana; font-size: 36px"
          class="mt-8"
        >
          Datos del artículo:
        </h2>
        <MazSelect
          class="mb-1"
          v-model="provee"
          label="Seleccione un proveedor"
          :options="proveedores"
          color="secondary"
        />
        <!-- <MazInput class="mb-1" v-model="provee" type="text" label="Proveedor" /> -->
        <MazInput class="mb-1" v-model="nombre" label="Nombre" />
        <MazInput class="mb-1" v-model="descripcion" label="Descripción" />
        <MazInput class="mb-1" v-model="ppp" label="Precio por Unidad" />
        <MazInput class="mb-1" v-model="stock" label="Stock" />
        <h4
          style="color: white; font-family: Verdana; font-size: 18px"
          class="mt-8"
        >
          Imagen:
        </h4>

        <div>
          <input type="file" @change="handleImageUpload" accept="image/*" />
          <img
            :src="carImage"
            alt="Preview"
            v-if="carImage"
            class="uploaded-image"
          />
        </div>
      </div>
      <MazBtn rounded class="mt-6 w-40" color="black" pastel @click="registro"
        >Registrar</MazBtn
      >
    </div>
  </section>
</template>

<script setup>
const toast = useToast();

let nombre = ref('');
let provee = ref('');
let descripcion = ref('');
let ppp = ref('');
let stock = ref('');
let carImage = ref('');
let proveedores = ref([]);

const router = useRouter();

onMounted(() => {
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
const registro = () => {
  if (
    !provee.value &&
    !nombre.value &&
    !descripcion.value &&
    !ppp.value &&
    !stock
  ) {
    toast.error('Datos incompletos', {
      position: 'bottom',
      timeout: 3000,
    });
  } else {
    const data = {
      id: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
      proveedor: provee.value,
      nombre: nombre.value,
      descripcion: descripcion.value,
      ppp: ppp.value,
      stock: stock.value,
      imagen: carImage.value || null,
    };
    let registros = JSON.parse(localStorage.getItem('inventario'));
    if (registros) {
      registros.push(data);
    } else {
      registros = [data];
    }
    localStorage.setItem('inventario', JSON.stringify(registros));
    router.push({ name: 'Inventario-InventarioConsulta' });
  }
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];

  if (file) {
    // Convierte la imagen a un objeto de datos URL para previsualización
    const reader = new FileReader();
    reader.onload = () => {
      carImage.value = reader.result;
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
