// Funcion .concat()
// Sirve para concatenar arreglos existentes en un unico arreglo

const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio'
];

const meses2 = [
    'Agosto',
    'Septiembre'
]

const meses3 = [
    'Octubre',
    'Noviembre'
]

// Concatenacion de arreglos
const resultado = meses.concat(meses2, meses3, 'Diciembre');
console.log(resultado);

// spread operator, misma funcion pero mas simple (mas usado)
const resultado2 = [...meses, ...meses2, ...meses3, 'Diciembre'];
console.log(resultado2);