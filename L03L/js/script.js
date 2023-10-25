let numeroMenor = 9999
let numero = 0
let numeroMaior = 0
while(numero > -1){
    numero = parseInt(prompt("Informe um número"))
    if(numero > 0){
        if(numero > numeroMaior){
            numeroMaior = numero
        }
        if(numero < numeroMenor){
            numeroMenor = numero
        }
    }
}
alert(`O maior número é: ${numeroMaior}`)
alert(`O menor número é: ${numeroMenor}`)


// numeroMenor<-9999
// enquanto numero > -1 faca
//    escreval("Informe um número")
//    leia(numero)
//    se numero > 0 entao
//       se numero > numeroMaior entao
//          numeroMaior<-numero
//       fimse
//       se numero < numeroMenor entao
//          numeroMenor<-numero
//       fimse
//    fimse
// fimenquanto
// escreval("O maior número é: ", numeroMaior)
// escreval("O menor número é: ", numeroMenor)