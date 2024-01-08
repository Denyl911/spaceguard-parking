<template>
  <div>
    <NavBar />
    <SideBar />
    <div style="margin-left: 15vw">
      <div class="bg-slate-400" style="padding-top: 9vh; min-height: 100vh">
        <slot />
      </div>
    </div>
  </div>
</template>
