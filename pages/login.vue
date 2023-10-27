<script setup>
definePageMeta({
  layout: "nothing",
});

let email = ref("");
let pass = ref("");

let correo = "spaceguard";
let contra = "parking";

const router = useRouter();

function login() {
  if (email.value === correo && pass.value === contra) {
    router.push({ name: "Entrada_Vehiculos-EntradaRegistro" });
  } else {
    alert("El correo o la contraseña es inválida");
  }
}
</script>

<template>
  <div>
    <section class="bg-gradient">
    <div
      class="container mx-auto flex justify-center items-center h-screen text-center"
    >
      <div class="w-2/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
        <img
          class="imagen-proporcionada"
          src="@/assets/Logo.png"
          alt="Mi Imagen"
        />
        <MazInput class="mt-8 mb-5" v-model="email" label="Correo" />
        <MazInput
          v-model="pass"
          label="Contraseña"
          type="password"
          @keyup.enter="login"
        />
        <MazBtn
          class="mt-6 block animate-bounce w-80"
          color="black"
          @click="login"
          >Iniciar Sesion</MazBtn
        >
      </div>
    </div>
  </section>
  </div>
</template>



<style>
.bg-gradient {
  background-image: linear-gradient(to bottom, #8a97b8, #10223b);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.bg-gradienttwo {
  background-image: linear-gradient(to bottom, #10223b, #8a97b8);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.imagen-proporcionada {
  width: 100%;
  height: 300px;
}
</style>
