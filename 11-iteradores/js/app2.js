// Break
for(let i=0; i<10; i++){
    if(i === 5){
        console.log(`Cinco`);
        break; // Terminar la ejecucion
    }else{
        console.log(i);
    }
}

for(let i=0; i<10; i++){
    if(i === 5){
        console.log(`Cinco`);
        continue; // Continua la ejecucion (poco utilizado)
    }
    console.log(i);
}