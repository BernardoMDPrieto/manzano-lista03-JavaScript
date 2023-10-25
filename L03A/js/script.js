//Tabuada de qualquer número
let numero = parseInt(prompt("Informe o número!"))
let contadora = 1;

while(contadora < 11){
    let resultado = numero*contadora
    alert(`${numero} X ${contadora} = ${resultado}`)
    contadora++
} 