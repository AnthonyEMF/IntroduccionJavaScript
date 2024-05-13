console.log('Ejercicio 1: Conversor de monedas');

const btnConvertir = document.getElementById('convert-btn');
const resultado = document.getElementById('result-container');

btnConvertir.addEventListener('click', function(){
    let cantidad = parseFloat(document.getElementById("amount").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    let conversion = convertir(cantidad, from, to);
    resultado.innerHTML = `${conversion} ${to}`;
});

function convertir(cantidad,from,to){
    let tasa;
    if(from==="usd" && to==="eur"){
        tasa = 0.9237;
    }else if(from==="usd" && to==="lps"){
        tasa = 24.7247;
    }else if(from==="eur" && to==="usd"){
        tasa = 1.0827;
    }else if(from==="eur" && to==="lps"){
        tasa = 26.7704;
    }else if(from==="lps" && to==="usd"){
        tasa = 0.0405;
    }else if(from==="lps" && to==="eur"){
        tasa = 0.0374;
    }else{
        tasa = 0;
    }

    let cantidadConvertida = cantidad * tasa;
    return cantidadConvertida.toFixed(2);
}