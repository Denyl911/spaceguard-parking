<script setup>
const logout = () => {
  const router = useRouter();
  localStorage.removeItem('usuario');
  router.push('/login');
};
</script>

<template>
  <!-- bg-gray-600 -->
  <nav
    style="height: 9vh; width: 100vw"
    class="bg-slate-800 z-40 p-4 fixed flex items-center justify-between"
  >
    <div>
      <h1 class="text-white text-xl font-semibold">SPACEGUARD PARKING</h1>
    </div>
    <div class="flex space-x-3 items-center px-3">
      <div class="flex-none flex justify-center">
        <div class="w-8 h-8 flex">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShta_GXR2xdnsxSzj_GTcJHcNykjVKrCBrZ9qouUl0usuJWG2Rpr_PbTDu3sA9auNUH64&usqp=CAU"
            alt="profile"
            class="shadow rounded-full object-cover"
          />
        </div>
      </div>
      <div
        @click="logout"
        class="hidden md:block text-sm md:text-md text-black dark:text-white"
      >
        Eduardo HL
      </div>
    </div>
  </nav>
</template>
