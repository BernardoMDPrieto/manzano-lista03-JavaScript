let numero = 0
let acumuladora=0
let contadora = 0
while(contadora < 10){
    numero = parseInt(prompt("Informe um valor"))
    acumuladora+=numero
    contadora++
    alert(acumuladora)
}
acumuladora=acumuladora/contadora
alert(acumuladora)