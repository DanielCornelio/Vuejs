const vm = new Vue({
    el: 'main',
    
    data: {
        mensaje: 'Hola Mundo :V',
        nuevaTarea: 'null',
        tareas: [
            {titulo: 'Aprender Vue', prioridad: true, antiguedad:23},
            {titulo: 'Aprender ES6', prioridad: false, antiguedad:135},
            {titulo: 'Publicar algo todos los dias', prioridad: true, antiguedad:378},
        ],
    },
    methods:{
        agregarTarea(){
            //this hace referencia a la instancia Vue
            this.tareas.unshift({
                titulo: this.nuevaTarea,
                prioridad: false,
                antiguedad: 0,
            });
            this.nuevaTarea=null;
        }
    },
    computed:{
        mensajeAlReves(){
            return this.mensaje.split('').reverse().join('');
        },
        tareasConPrioridad(){
            return this.tareas.filter((tarea)=>tarea.prioridad);
        },
        tareasPorAntiguedad(){
            return this.tareas.sort((a,b)=>b.antiguedad - a.antiguedad);
        }
    }
});

//vanilla js
// function agregarTarea(){
//     const input = document.querySelector('input[type=text]');
//     vm.tareas.unshift(input.value);
//     input.value='';
// }