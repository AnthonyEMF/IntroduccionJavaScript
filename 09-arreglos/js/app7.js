// Recorrer arreglos .foreach
const personas = [
    {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 24
    },
    {
        nombre: 'Maria',
        apellido: 'Lopez',
        edad: 21
    },
    {
        nombre: 'Charlie',
        apellido: 'Arellano',
        edad: 19
    },
    {
        nombre: 'Vanessa',
        apellido: 'Martinez',
        edad: 30
    }
]

// Recorrer arreglo (for)
for(let i=0;i<personas.length;i++){
    console.log(personas[i]);
}

// Recorrer arreglo (.forEach)
personas.forEach(function(persona) {
    console.log(persona);
});

personas.forEach(persona => console.log(persona));