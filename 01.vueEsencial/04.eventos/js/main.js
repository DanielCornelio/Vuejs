const vm = new Vue({
    el: 'main',
    nuevaTarea: 'null',
    data: {
        tareas: [
            'Aprender Vue',
            'Aprender ES6',
            'Publicar algo todos los dias'
        ],
    },
    methods:{
        agregarTarea(){
            //this hace referencia a la instancia Vue
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea='';
        }
    }
});

//vanilla js
// function agregarTarea(){
//     const input = document.querySelector('input[type=text]');
//     vm.tareas.unshift(input.value);
//     input.value='';
// }