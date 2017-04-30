//console.log("Olá mundo!!");
//console.log(document);

//console.log(document.querySelector("h1"));
//var titulo = document.querySelector("h1");

//console.log(titulo);
//console.log(titulo.textContent);
//titulo.textContent = "Aparecida Nutricionista";

// console.log("Fui carregado de um arquivo externo!!");

//******INICIO IMC PRIMEIRO PACIENTE*********//

// var paciente = document.querySelector("#primeiro-paciente");
//
// var tdPeso = paciente.querySelector(".info-peso");
// var peso = tdPeso.textContent;
//
// var tdAltura = paciente.querySelector(".info-altura");
// var altura = tdAltura.textContent;
//
// var tdimc = paciente.querySelector(".info-imc");
// var pesoEhValido = true;
// var alturaEhValida = true;
//
// if (peso <=0 || peso>=1000){
//     console.log("Peso Inválido!");
//     pesoEhValido = false;
//     tdimc.textContent = "O peso é inválido!";
// }
//
// if (altura <=0 || altura>=3){
//     console.log("Altura Inválida!");
//     alturaEhValida = false;
//     tdimc.textContent = "A altura é inválida!";
// }
//
// if(pesoEhValido && alturaEhValida){
//     var imc = peso / (altura * altura);
//     tdimc.textContent = imc;
// }
// console.log(imc);

//*********FIM IMC PRIMEIRO PACIENTE*********//


//******INICIO IMC TODOS OS PACIENTES********//

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdimc = paciente.querySelector(".info-imc");
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido){
        console.log("Peso Inválido!");
        tdimc.textContent = "O peso é inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida){
        console.log("Altura Inválida!");
        tdimc.textContent = "A altura é inválida!";
        paciente.style.backgroundColor="lightcoral";
    }

    if(pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso,altura);
        tdimc.textContent = imc;
    }
}

//*********FIM IMC TODOS OS PACIENTES********//

//************INCIO FUNÇÕES***************//

/*
*Calcula o IMC
*/
function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

/*
*Valida o peso
*/
function validaPeso(peso){
  if(peso >= 0 && peso <= 100){
    return true;
  }else{
    return false;
  }
}

/*
*Valida a altura
*/
function validaAltura(altura){
  if(altura >= 0 && altura <= 3){
    return true;
  }else{
    return false;
  }
}
