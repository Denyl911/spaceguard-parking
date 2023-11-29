<script setup>
  const route = useRoute();
</script>

<template>
  <nav
    id="sidebar"
    style="height: 91vh; width: 15vw"
    class="scroll scroll--simple fixed left-0 bottom-0 flex flex-col overflow-y-auto bg-gray-700 pt-3"
  >
    <div class="px-4">
      <h3 class="mb-2 text-xs font-medium uppercase text-gray-500">
        Dashboard
      </h3>
      <ul class="mb-5 text-sm font-medium">
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/' }"
            to="/"
          >
            <span class="select-none">Inicio</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="px-4">
      <h3 class="mb-2 text-xs font-medium uppercase text-gray-500">
        Entrada de Vehículos
      </h3>
      <ul class="mb-5 text-sm font-medium">
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/Entrada_Vehiculos/EntradaRegistro' }"
            to="/Entrada_Vehiculos/EntradaRegistro"
          >
            <span class="select-none">Registro</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/Entrada_Vehiculos/EntradaConsulta' }"
            to="/Entrada_Vehiculos/EntradaConsulta"
          >
            <span class="select-none">Consulta</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="px-4">
      <h3 class="mb-2 text-xs font-medium uppercase text-gray-500">Costos (Entrada Vehículos)</h3>
      <ul class="mb-5 text-sm font-medium">
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/Costos/CostosRegistro' }"
            to="/Costos/CostosRegistro"
          >
            <span class="select-none">Registro</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/Costos/CostosModificacion' }"
            to="/Costos/CostosModificacion"
          >
            <span class="select-none">Modificacion</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/Costos/CostosConsulta' }"
            to="/Costos/CostosConsulta"
          >
            <span class="select-none">Consulta</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="px-4">
      <h3 class="mb-2 text-xs font-medium uppercase text-gray-500">
        Vehiculos Pensionados
      </h3>
      <ul class="mb-5 text-sm font-medium">
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/Pensionados/PensionadosModificacion' }"
            to="/Pensionados/PensionadosRegistro"
          >
            <span class="select-none">Registro</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/Pensionados/PensionadosModificacion' }"
            to="/Pensionados/PensionadosModificacion"
          >
            <span class="select-none">Modificacion</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/Pensionados/PensionadosConsulta' }"
            to="/Pensionados/PensionadosConsulta"
          >
            <span class="select-none">Consulta</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="px-4">
      <h3 class="mb-2 text-xs font-medium uppercase text-gray-500">
        Promociones
      </h3>
      <ul class="mb-5 text-sm font-medium">
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/Promociones/PromosRegistro' }"
            to="/Promociones/PromosRegistro"
          >
            <span class="select-none">Registro</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/Promociones/PromosModificacion' }"
            to="/Promociones/PromosModificacion"
          >
            <span class="select-none">Modificacion</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/Promociones/PromosConsulta' }"
            to="/Promociones/PromosConsulta"
          >
            <span class="select-none">Consulta</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="px-4">
      <h3 class="mb-2 text-xs font-medium uppercase text-gray-500">
        Inventario
      </h3>
      <ul class="mb-5 text-sm font-medium">
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/Inventario/InventarioRegistro' }"
            to="/Inventario/InventarioRegistro"
          >
            <span class="select-none">Registro</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/Inventario/InventarioModificacion' }"
            to="/Inventario/InventarioModificacion"
          >
            <span class="select-none">Modificacion</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/Inventario/InventarioConsulta' }"
            to="/Inventario/InventarioConsulta"
          >
            <span class="select-none">Consulta</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="px-4">
      <h3 class="mb-2 text-xs font-medium uppercase text-gray-500">
        Servicios adicionales
      </h3>
      <ul class="mb-5 text-sm font-medium">
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/Servicios_Add/Servicios_Registro' }"
            to="/Servicios_Add/Servicios_Registro"
          >
            <span class="select-none">Registro</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/Servicios_Add/Servicios_Modificacion' }"
            to="/Servicios_Add/Servicios_Modificacion"
          >
            <span Modificacionlass="select-none">Modificacion</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/Servicios_Add/Servicios_Consulta' }"
            to="/Servicios_Add/Servicios_Consulta"
          >
            <span class="select-none">Consulta</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="px-4">
      <h3 class="mb-2 text-xs font-medium uppercase text-gray-500">
        Pensionados
      </h3>
      <ul class="mb-5 text-sm font-medium">
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/Pensionados/PensionadosRegistro' }"
            to="/Pensionados/PensionadosRegistro"
          >
            <span class="select-none">Registro</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/Pensionados/PensionadosModificacion' }"
            to="/Pensionados/PensionadosModificacion"
          >
            <span Modificacionlass="select-none">Modificacion</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
            :class="{ active: route.path == '/Pensionados/PensionadosConsulta' }"
            to="/Pensionados/PensionadosConsulta"
          >
            <span class="select-none">Consulta</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
ul.breadcrumb li + li::before {
  content: "\276F";
  padding-left: 8px;
  padding-right: 4px;
  color: inherit;
}

ul.breadcrumb li span {
  opacity: 60%;
}

#sidebar {
  -webkit-transition: all 300ms cubic-bezier(0, 0.77, 0.58, 1);
  transition: all 300ms cubic-bezier(0, 0.77, 0.58, 1);
}

#sidebar ul li a.active {
  background: #1f2937;
  background-color: #1f2937;
}

.scroll {
  height: 300px;
  width: 40px;
  overflow-y: scroll;
  display: inline-block;
}

.scroll .inner {
  height: 300%;
  width: 100%;
  content: ".";
}

.scroll--simple::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.scroll--simple::-webkit-scrollbar-track {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
}

.scroll--simple::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
}

.scroll--simple::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.4);
}

.scroll--simple::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0.9);
}
</style>

