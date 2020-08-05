new Vue({
    el:'main',
    data:{
        tareas:[
            {titulo:'comprar', completado: false},
            {titulo:'Vuejs', completado: false},
            {titulo:'firebase', completado: false},
            {titulo:'ES6', completado: false},
            {titulo:'corrrer', completado: false},

        ]
    },
    methods:{
        completarTarea(tarea){
            tarea.completado = !tarea.completado;
        }
    },
    computed:{
        tareasCompletadas(){
            return this.tareas.filter((tarea)=>tarea.completado);
        }
    }
});