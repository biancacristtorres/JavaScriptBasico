var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){

      console.log(this.value);
      var pacientes = document.querySelectorAll(".paciente");
      if(this.value.length > 0 ) {
          for (var i = 0; i < pacientes.length; i++) {
              var paciente = pacientes[i];
              var nomeTd = paciente.querySelector(".info-nome");
              var nome = nomeTd.textContent;
              console.log(nome);

              //filtrando letra a letra com uma expressão
              // var expressao = new RegExp(this.value,"i");
              // if(expressao.test(nome)){
              //    paciente.classList.remove("invisivel");
              //
              // } else {
              //     paciente.classList.add("invisivel");
              //   }


              /* filtrando com substr e sem distinção entre letra maiusculas e minusculas
              var comparavel = nome.substr(0, this.value.length);
              var comparavelMinusculo = comparavel.toLowerCase();
              var valorDigitadoMinusculo = this.value.toLowerCase();

              if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
                  paciente.classList.add("invisivel");
              } else{
                  paciente.classList.remove("invisivel");
              }*/

              /*filtrando letra a letra usando substr
              var comparavel = nome.substr(0, this.value.length);
              if (!(this.value == comparavel)) {
                    paciente.classList.add("invisivel");
                } else {
                  paciente.classList.remove("invisivel");
                }
                */

              /*Filtrando a palavra inteira
              if(nome != this.value){
                  paciente.classList.add("invisivel");
              } else {
                  paciente.classList.remove("invisivel");
              }*/

            }
      } else {
          for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
           }
      }
})
