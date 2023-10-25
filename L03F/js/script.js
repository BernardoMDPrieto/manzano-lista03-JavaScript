// Descrição   : expoenciacão de informada pelo usuário, e uma potência também informada pelo usuário!
var numero = 1;
var contadora = 0;
var numeroBase = parseInt(prompt("Informe a base"))
var potencia = parseInt(prompt("Informe a potência"))
potencia++
while(contadora < potencia){
     if(contadora == 0){
         numero = 1
     } else{
         numero = numero*numeroBase
     }
    alert(numero)
    contadora++
}

