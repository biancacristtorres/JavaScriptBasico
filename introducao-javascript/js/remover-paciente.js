var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
      /*
      *
      alvoDoEvento = event.target;
      var paiDoEvento = alvoDoEvento.parentNode;
      paiDoEvento.remove();
      event.target.parentNode.remove(); mesma coisa que as 3 linhas acima
      */

      event.target.parentNode.classList.add("fadeOut");

      setTimeout(function(){
        event.target.parentNode.remove();
      },500);

})

/*
* Remove somente os pacientes que estão no html
var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){
        this.remove();
    })
})
*/
