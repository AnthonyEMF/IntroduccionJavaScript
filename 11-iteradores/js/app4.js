// Ciclos con While
let i = 1;
while(i<=10){
    console.log(`Numero ${i}`);
    i++;
}

// Ejercicio FizzBuzz con While
i=1;
while(i<=100){
    if(i%15 === 0){
        console.log(`${i} FizzBuzz!!`);
    }else if(i%3 === 0){
        console.log(`${i} Fizz`);
    }else if(i%5 === 0){
        console.log(`${i} Buzz`);
    }
    i++;
}