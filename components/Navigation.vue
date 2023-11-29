<template>
    <div>
            <MazSelect
                v-model="selectedValue"
                label="Seleccionar pestaña"
                :options="pages"
                @update:model-value="Selection"
                :style="{ width: '340px', height: '40px' }"
            />
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const selectedValue = ref()
    const router = useRouter()

    const pages = [
        { label: 'Entrada vehiculo registro', value: 'D'},
        { label: 'Entrada vehiculo consultar', value: 'F'},
        { label: 'Costos registros', value: 'E'},
        { label: 'Costos modificacion', value: 'G'},
        { label: 'Costos consulta', value: 'H'},   
        { label: 'Vehiculo pensionado registrar', value: 'A' },
        { label: 'Vehiculo pensionado modificar', value: 'B' },
        { label: 'Vehiculo pensionado consultar', value: 'I'},    
        { label: 'Promociones registro', value: 'J'},
        { label: 'Promociones modificacion', value: 'K'},
        { label: 'Promociones consultar', value: 'L'},
        { label: 'Inventario registro', value: 'C' },
        { label: 'Inventario modificacion', value: 'M'},
        { label: 'Inventario consulta', value: 'N'},
        { label: 'Servicios adicionales', value: 'O'}
                 
    ]

    function Selection (E) {
        if(E === 'A'){
            router.push({name:'Pensionados-PensionadosRegistro'})
        }else if(E === 'B'){
            router.push({name:'Pensionados-PensionadosModificacion'})
        }else if(E === 'C'){
            router.push({name: 'Inventario-InventarioRegistro'})
        }else if(E === 'D'){
            router.push({name: 'Entrada_Vehiculos-EntradaRegistro'})
        }else if(E === 'E'){
            router.push({name: 'Costos-CostosRegistro'})
        }else if(E === 'F'){
            router.push({name: 'Entrada_Vehiculos-EntradaConsulta'})
        }else if(E === 'G'){
            router.push({name: 'Costos-CostosModificacion'})
        }else if(E === 'H'){
            router.push({name: 'Costos-CostosConsulta'})
        }else if(E === 'I'){
            router.push({name:'Pensionados-PensionadosConsulta'})
        }else if(E === 'J'){
            router.push({name: 'Promociones-PromosRegistro'})
        }else if(E === 'K'){
            router.push({name: 'Promociones-PromosModificacion'})
        }else if(E === 'L'){
            router.push({name: 'Promociones-PromosConsulta'})
        }else if(E === 'M'){
            router.push({name: 'Inventario-InventarioModificacion'})
        }else if(E === 'N'){
            router.push({name: 'Inventario-InventarioConsulta'})
        }else if(E === 'O'){
            router.push({name: 'Servicios_Add-ServiciosConsulta'})
        }
    }
    
</script>