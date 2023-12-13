<template>
    <div class="container p-4">
      <h1 style="font-size: 36px">Página de inicio</h1>
      <h2>SPACEGUARD</h2><br>
      <h3>◀ Navega del lado izquierdo</h3><br>

      <img
          class="imagen-proporcionada"
          src="@/assets/Logo.png"
          alt="Mi Imagen"
        />
    </div>
</template>

<script setup>
const router = useRouter();
  if (!localStorage.getItem('usuario')) {
    router.push('/login');
  }
</script>


<style>
.imagen-proporcionada {
  width: 100%;
  height: 500px;
}
</style>