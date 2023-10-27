<template>
   <section class="bg-slate-400">
        <div class="container p-4">
            <h1 style="color: black; font-family: Verdana; font-size: 36px;"><b>Inventario - Consulta</b></h1>
            <MazInput class="mt-8" v-model="buscarArticulo" label="ID Producto"/>
            <MazBtn class="mt-2 mb-5" color="black">Consultar articulo</MazBtn>                    
        </div>
        <div id="tabla" class="mt-8"></div>  
    </section>
</template>


<script setup>
    import { onMounted } from 'vue';
    import { Grid } from 'gridjs';
    import { ref } from 'vue'
    import MazInput from 'maz-ui/components/MazInput'
    import 'gridjs/dist/theme/mermaid.css';
  
    let buscarArticulo = ref('');

    onMounted(() => {
      let tabla = document.getElementById('tabla');
      new Grid({
        columns: ['ID proveedor', 'ID producto', 'Nombre', 'Descripcion', 'Precio por unidad', 'Stock', 'Imagen'],
        data: [
          ['Joh2n','2282A','Jabon','Ninguna', '$/','10','..'],
          ['M1ark','2281C','Shampoo','Ninguna', '$/','8', '..'],
          ['Eo3in','2283R','Polish','Ninguna', '$/','9', '..'],
          ['Sarah4','2284W','Aceite','Ninguna', '$/','20', '..'],
          ['5Joel','2288G','Anticongelante','Ninguna', '$/','15', '..'],
        ],
      }).render(tabla);
    });  
</script>