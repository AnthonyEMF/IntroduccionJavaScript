console.log('Ejercicio 18: Ejercicios anteriores con While replicados con For');
console.log('----------------------------------------------------------------');

alert('>> Menu:\n1. Ejercicio 13\n2. Ejercicio 14\n3. Ejercicio 15\n4. Ejercicio 16\n5. Ejercicio 17');
let op = parseInt(prompt('Ingresar opcion:'));

switch(op){
    case 1:
        console.log('Ejercicio 13: Numeros de 1 a N con For');
        let N1 = ingresarNumero();
        console.log(`Numero ingresado: ${N1}`);
        let numeros1 = [];

        for(let i=1;i<=N1;i++){
            numeros1.push(i);
        }
        console.log(`>> ${numeros1}`);
        break;
    case 2:
        console.log('Ejercicio 14: Numeros de 1 a N de 2 en 2 con For');
        let N2 = ingresarNumero();
        console.log(`Numero ingresado: ${N2}`);
        let numeros2 = [];

        for(let i=1;i<N2;i+=2){
            numeros2.push(i);
        }
        console.log(`>> ${numeros2},${N2}`);
        break;
    case 3:
        console.log('Ejercicio 15: Numeros de N a 1 con For');
        let N3 = ingresarNumero();
        console.log(`Numero ingresado: ${N3}`);
        let numeros3 = [];
        
        for(let i=1;i<=N3;N3--){
            numeros3.push(N3);
        }
        console.log(`>> ${numeros3}`);
        break;
    case 4:
        console.log('Ejercicio 16: Tabla de un numero con For');
        let N4 = ingresarNumero();
        console.log(`Numero ingresado: ${N4}`);
        let i;

        for(i=1;i<=12;i++){
            console.log(`${N4} x ${i} = ${N4*i}`);
        }
        break;
    case 5:
        console.log('Ejercicio 17: Suma de numeros pares entre N y M');
        let N = parseInt(prompt('Ingresar primer numero (N):'));
        let M = parseInt(prompt('Ingresar segundo numero (M):'));
        let suma = 0;
        console.log(`Intervalo ingresado: De ${N} a ${M}`);

        for(let i=N;i<=M;i++){
            if(i % 2 === 0){
                suma+=i;
            }
        }
        console.log(`>> Suma de los numeros pares: ${suma}`);
        break;
    default:
        alert('Opcion no valida');
        break;
}

function ingresarNumero(){
    let numero = parseInt(prompt('Ingresar numero:'));
    return numero;
}