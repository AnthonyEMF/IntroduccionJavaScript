// Recorrer arreglos (.map)
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

const nuevoArreglo = personas.map((persona) => {
    return `${persona.nombre} ${persona.apellido}`;
});

const nuevoArreglo2 = personas.map((persona) => {
    return {
        nombreCompleto: `${persona.nombre} ${persona.apellido}`,
        edad: persona.edad
    };
});

const nuevoArreglo3 = personas.forEach((persona) => {
    return `${persona.nombre} ${persona.apellido}`;
});

const nuevoArreglo4 = personas.forEach((persona) => {
    return {
        nombreCompleto: `${persona.nombre} ${persona.apellido}`,
        edad: persona.edad
    };
});

// Forma para retornar con foreach (no usar)
let nuevoArreglo5 = [];
personas.forEach((persona) => {
    nuevoArreglo5.push({
        nombreCompleto: `${persona.nombre} ${persona.apellido}`,
        edad: persona.edad
    });
});

// foreach no retorna informacion, map si
console.log(nuevoArreglo);
console.log(nuevoArreglo2);
console.log(nuevoArreglo3);
console.log(nuevoArreglo4);
console.log(nuevoArreglo5);