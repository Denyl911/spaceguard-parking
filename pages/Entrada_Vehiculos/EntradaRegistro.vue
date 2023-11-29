<template>
 <section class="bg-slate-400">
        <div class="container p-4">            
            <h1 style="color: black; font-family: Verdana; font-size: 36px;"><b>Entrada de Vehículos - Registro</b></h1>            
                <MazBtn :key="lugDisp" class="mt-8 mb-5" color="black">Lugares disponibles: {{lugDisp}}</MazBtn>
                <MazBtn class="mt-8 mb-5" :style="{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }">Hora actual: {{ horaActual }}</MazBtn>
                <MazBtn class="mt-8 mb-5" :style="{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }">Fecha actual: {{ fechaActual }}</MazBtn>
            <div class = "w-3/4 border bg-gradienttwo p-8 rounded-lg shadow-md">
                <h2 style="color: white; font-family: Verdana; font-size: 36px;" class="mt-8">Datos del vehículo:</h2>
                <MazInput class="mb-1" v-model="placa" @input="convertirAMayusculas" @keyup.enter="Registro" label="Placa" :disabled="lugDisp === 0"/>
            </div>            
                <MazBtn rounded class="mt-6 w-40" color="black" pastel @click="Registro">Registrar</MazBtn>
                <MazDialog v-model="mostrarDialogo" title="Agregar Servicio Adicional">
                <p>¿Deseas agregar un nuevo servicio adicional?</p>
                <template #footer>
                    <MazBtn @click="agregarServicioAdicional" color="success">
                    Sí
                    </MazBtn>
                    <MazBtn @click="cerrarDialogo" color="error">
                    No
                    </MazBtn>
                </template>
                </MazDialog>
        </div>
        <div style="float: left; margin-left: 850px;">
            <MazBtn :key="lugDisp" class="mt-8" color="success">Lugar asignado:<br>{{lugDisp}}</MazBtn>
        </div>
            <div style="clear: both;"></div>
        <div>
            <MazBtn rounded class="mt-6 w-40" color="black" pastel @click="ServiciAdd">Servicio adicional</MazBtn>
            <MazBtn rounded class="mt-6 w-40" color="black" pastel @click="MostrarTicket">Imprimir ticket</MazBtn>
            <MazDialog v-model="mostrarTicket" title="Detalle del Ticket">
                <p>Placa: {{ placa }}</p>
                <p>Hora: {{ horaImpresion }}</p>
                <p>Fecha: {{ fechaActual }}</p>
                <p>Lugar asignado: {{ lugDisp+1 }}</p>
                <template #footer>
                    <MazBtn @click="cerrarTicketDialogo" color="success">
                    Cerrar
                    </MazBtn>
                </template>
            </MazDialog>
        </div>
    </section>
</template>


<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'
    import { useRouter } from 'vue-router'
    import MazInput from 'maz-ui/components/MazInput'
    import { useToast } from 'maz-ui';
  
    const toast = useToast();

    let placa = ref('');    
    let lugDisp = ref(3);
    let horaActual = ref(new Date().toLocaleTimeString());
    let fechaActual = ref(new Date().toLocaleDateString());
    const mostrarDialogo = ref(false);
    const mostrarTicket = ref(false);
    const horaImpresion = ref('');

    const actualizarHora = () => {
        horaActual.value = new Date().toLocaleTimeString();
    };

    onMounted(() => {    
        setInterval(actualizarHora, 1000);
    });

    onBeforeUnmount(() => {
        clearInterval(actualizarHora);
    });    

    const actualizarFecha = () => {
        fechaActual.value = new Date().toLocaleDateString();
    };

    onMounted(() => {
        setInterval(actualizarFecha, 1000);
    });

    onBeforeUnmount(() => {
        clearInterval(actualizarFecha);
    });

    onMounted(() => {
        const storedLugDisp = localStorage.getItem('lugDisp');
        if (storedLugDisp !== null) {
            lugDisp.value = parseInt(storedLugDisp);
        }
    });

    const router = useRouter()
    
    function ServiciAdd () {
        if(!placa.value){
            toast.error('No hay carro para asignarle un servicio', {
                    position: 'bottom',
                    timeout: 3000,
            });
        }else{
            router.push({ name: 'Servicios_Add-Servicios_Registro' });
        }    
    }
    

    function Registro (){
        let primerformato = false;
        let segundoformato = false;

        if(!placa.value){
            toast.error('Ingresa una placa', {
                    position: 'bottom',
                    timeout: 3000,
                }); 
        } else {
            const primerformatoValido = /^[A-Z]{3}\d{3}[A-Z]$/;
            const segundoformatoValido= /^([A-Z]{3}-\d{3}-[A-Z])$/;

            if (primerformatoValido.test(placa.value)) {                
                placa.value = `${placa.value.slice(0, 3)}-${placa.value.slice(3, 6)}-${placa.value.slice(6)}`;
                primerformato = true;
            } else if (segundoformatoValido.test(placa.value)) {              
                segundoformato = true;
            }


            let registros = JSON.parse(localStorage.getItem('entrada')) || [];

            // Verificar si el tiempoEstancia ya existe
            const existeRegistro = registros.some(
                (registro) => registro.placa === placa.value
            );

            if (existeRegistro) {
                toast.error('Ya existe un registro para esta placa', {
                    position: 'bottom',
                    timeout: 3000,
                });
            } else if (primerformato || segundoformato){
                const data = {
                    placa: placa.value,
                    lugDisp: lugDisp.value,
                    fecha: fechaActual.value,
                    hora: horaActual.value
                };
                let registros = JSON.parse(localStorage.getItem('entrada'));
                if (registros) {
                    registros.push(data);
                } else {
                    registros = [data];
                }
                localStorage.setItem('entrada', JSON.stringify(registros));
                //router.push({ name: 'Entrada_Vehiculos-EntradaConsulta' });
                                                                            
                toast.success('Registro éxitoso', {
                    position: 'bottom',
                    timeout: 3000,
                });      
                lugDisp.value--;
                localStorage.setItem('lugDisp', lugDisp.value);
                mostrarDialogo.value = true;                            
            } else {
                toast.error('Placa no válida. Ingresa una placa en formato AAA999B', {
                    position: 'bottom',
                    timeout: 3000,
                });
            }
        }
    }  

    const agregarServicioAdicional = () => {
        // Redirigir a la pestaña de 'servicios adicionales'
        router.push({ name: 'Servicios_Add-Servicios_Registro', query: {
            placa: placa.value
        }});
        cerrarDialogo();
    };

    const cerrarDialogo = () => {
        // Cerrar el diálogo
        mostrarDialogo.value = false;
    };

    function MostrarTicket() {
    if (!placa.value) {
        toast.error('No hay información para mostrar en el ticket', {
        position: 'bottom',
        timeout: 3000,
        });
    } else {
        // Mostrar el diálogo del ticket
        horaImpresion.value = new Date().toLocaleTimeString();
        mostrarTicket.value = true;
    }
    }

    function cerrarTicketDialogo() {
        // Cerrar el diálogo del ticket
        mostrarTicket.value = false;
    }

    const convertirAMayusculas = () => {
        // Convierte el valor de placa a mayúsculas
        placa.value = placa.value.toUpperCase();
    };
</script>