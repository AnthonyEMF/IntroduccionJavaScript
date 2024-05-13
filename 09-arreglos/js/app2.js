// Recorrer arreglos con for
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.table(meses);

// Recorrer arreglo
console.log(meses[0]);
console.log(meses[2]);

for (let  i=0; i<meses.length; i++) {
    console.log(meses[i]);
}

// Tamaño del arreglo
console.log(meses.length);

// Editar arreglo
meses[4] = 'Mayo Editado';
console.log(meses[4]);