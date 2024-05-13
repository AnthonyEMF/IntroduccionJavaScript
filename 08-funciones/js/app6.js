// Se puede agregar funciones a un objeto

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo la cancion: ${id}`);
    },
    pausar: function() {
        console.log('Pausando musica...');
    },
    crearPlaylist: function(nombre) {
        console.log(`Playlist ${nombre} creada`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproducinedo Playlist ${nombre}`);
    }
}

//console.log(reproductor);
reproductor.reproducir(55);
reproductor.pausar();
reproductor.crearPlaylist('Las mamalonas');
reproductor.reproducirPlaylist('Las mamalonas');

reproductor.borrar = function(id) {
    console.log(`Borrando cancion ${id}`);
}

reproductor.borrar(55);