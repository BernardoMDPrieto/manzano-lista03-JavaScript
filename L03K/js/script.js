let resposta
let comodo
let base= 0
let altura = 0
let area = 0
let areaTotal = 0
while(resposta != "n"){
    comodo = prompt("Informe o cômodo")
    base = prompt("Informe a base do cômodo")
    altura = prompt("Informe a altura do cômodo")
    area = base*altura
    areaTotal+=area
    alert(`${comodo}: ${area}m²`)
    resposta = prompt("Deseja continuar calculando (s/n)?")
}
    alert(`A area total da casa é de ${areaTotal}m²`)