new Vue({
    el: 'main',
    data: {
        minimo: 5,
        busqueda: '',
        juegos:[{
            titulo: 'Battlefield',
            genero: 'fps',
            puntuacion: 9
        },
        {
            titulo: 'Civilization VI',
            genero: 'Estrategia',
            puntuacion: 10,
        },
        {
            titulo: 'Resident Evil 7',
            genero: 'Suvival Horror',
            puntuacion: 7,
        },
    ]
    },
    computed:{
        mejoresJuegos(){
            return this.juegos.filter((juego)=>juego.puntuacion >= this.minimo);
        },
        buscarJuego(){
            return this.juegos.filter((juego)=>juego.titulo.includes(this.busqueda));
        }
    }
});