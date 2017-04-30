//
//*********INICIO ADICIONA PACIENTE DINAMICAMENTE NAS TABELAS********//
//
//Escutar evento com função anonima
// var botaoAdicionar = document.querySelector("#adicionar-paciente");
// botaoAdicionar.addEventListener("click", function(event){
//     event.preventDefault();//previni o comportamento padão do formulário
//     //console.log("Criquei no botão!!");
//     var form = document.querySelector("#form-adiciona");
//
//     var nome = form.nome.value;
//     var peso = form.peso.value;
//     var altura = form.altura.value;
//     var gordura = form.altura.value;
//
//     var pacienteTr = document.createElement("tr");
//
//     var nomeTd = document.createElement("td");
//     var pesoTd = document.createElement("td");
//     var alturaTd = document.createElement("td");
//     var gorduraTd = document.createElement("td");
//     var imcTd = document.createElement("td");
//
//     nomeTd.textContent = nome;
//     pesoTd.textContent = peso;
//     alturaTd.textContent = altura;
//     gorduraTd.textContent = gordura;
//     imcTd.textContent = calculaImc(peso,altura);
//
//     pacienteTr.appendChild(nomeTd);
//     pacienteTr.appendChild(pesoTd);
//     pacienteTr.appendChild(alturaTd);
//     pacienteTr.appendChild(gorduraTd);
//     pacienteTr.appendChild(imcTd);
//
//     tabela = document.querySelector("#tabela-pacientes");
//
//     tabela.appendChild(pacienteTr);
//
// });
//
//*********FIM ADICIONA PACIENTE DINAMICAMENTE NAS TABELAS***********//

//*********INICIO ADICIONA PACIENTE DINAMICAMENTE NAS TABELAS ORGANIZADO********//

//Escutar evento com função anonima
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){

    //previni o comportamento padão do formulário
    event.preventDefault();

    //pega o formulário do html
    var form = document.querySelector("#form-adiciona");

    //pega os valores do paciente do formulário
    var paciente = obtemPacientePorFomulario(form);

    /* Substituido pelo if comentado abaixo
      if(!validaPaciente(paciente)){
        console.log("Paciente inválido");
        form.reset();//limpa os dados do formulário
        return;
      }
      substituido pelo if baixo
      var erro = validaPaciente(paciente);
      if(erro.length > 0){
        console.log("Paciente inválido");
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erro;
        return;
      } */

    var erros = validaPaciente(paciente);
    if(erros.length > 0){
      exibeMensagensDeErro(erros);
      return;
    }

    // chamando a nova função adicionaPacienteNaTabela
    adicionaPacienteNaTabela(paciente);

    form.reset();//limpa os dados do formulário
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML="";
});

function adicionaPacienteNaTabela(paciente) {
            var pacienteTr = montarTr(paciente);
            tabela = document.querySelector("#tabela-pacientes");''
            tabela.appendChild(pacienteTr);//add dentro da tabela

}

//*********FIM ADICIONA PACIENTE DINAMICAMENTE NAS TABELAS ORGANIZADO***********//

//********INICIO FUNÇÕES************//

/*
*Monta a linha de novo paciente inserido
*/
function montarTr(paciente){
    var pacienteTr = document.createElement("tr");//cria uma tag <tr>
    pacienteTr.classList.add("paciente");

    //criação substituida por função
    // var nomeTd = document.createElement("td");
    // paciente.classList.add("info-nome");
    // nomeTd.textContent = paciente.nome;
    // var pesoTd = montaTd(paciente.peso,"info-peso");

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));//chama os métodos de criação de <td>
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));//chama os métodos de criação de <td>
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));//chama os métodos de criação de <td>
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));//chama os métodos de criação de <td>
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));//chama os métodos de criação de <td>

    return pacienteTr;
}

/*
*Retorna um objeto do tipo paciente
*/
function obtemPacientePorFomulario(form){
    var paciente = {
        nome: form.nome.value,//inserere o valor do atribulo com o nome digitado no campo do formulário
        peso: form.peso.value,//inserere o valor do atribulo com o peso digitado no campo do formulário
        altura: form.altura.value,//inserere o valor do atribulo com a altura digitado no campo do formulário
        gordura: form.gordura.value,//inserere o valor do atribulo com a gordura digitado no campo do formulário
        imc: calculaImc(form.peso.value, form.altura.value)//insere o calculo do imc da função calculaImc
      }
    return paciente;
}

/*
*monta os <td> necessarios
*add a classe dentro da tag <td>
*set como valor da <td> o dado passado
*/
function montaTd(dado,classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

/*
*Chama a função de validação do peso
*/
function validaPaciente(paciente){
    //substituido pelo código abaixo
    // if(!validaPeso(paciente.peso)){
    //   return "Peso é inválido";
    // }
    //
    // if(!validaAltura(paciente.altura)){
    //   return "Altura é inválida";
    // }

    var erros = [];

    if(paciente.nome.length == 0){
      erros.push("O nome não pode estar vazio");
    }

    if(!validaPeso(paciente.peso)){
      erros.push("Peso é inválido");
    }
    if(!validaAltura(paciente.altura)){
      erros.push("Altura é inválida");
    }

    if(paciente.peso.length == 0){
      erros.push("O peso não pode estar vazio");
    }

    if(paciente.altura.length ==0){
      erros.push("A altura não pode estar vazia");
    }

    if(paciente.gordura.length == 0){
      erros.push("A gordura não pode estar vazia");
    }
    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
