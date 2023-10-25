let contadora = 50
let soma = 0
let acumuladora = 0
while(contadora < 71){
    if(contadora%2==0){
        soma+=contadora
        acumuladora++
    }
    contadora++
}
let resultado = soma/acumuladora
alert(resultado)