//Criação de variáveis e constantes.

const listaPecas = ["Porca", "Prego", "Arruela", "Parafuso", "Po"]

let pesoPeca = 100

// Verficação do peso das peças.
console.log ("Verificação do peso das peças")

console.log("-------------------------------")
console.log("")

    if (pesoPeca > 100) {console.log ("Peso Ok: cadastro permitido")}
    else {console.log ("Cadastro não permitido: peso abaixo do padrão.")}

//Verificação de quantidade de peças por caixa.

console.log("Verificação de quantidade de peças por caixa")
console.log("-------------------------------")


let qtdePeca = 10
    console.log('O número de peças por caixa é de', qtdePeca)

    if ( qtdePeca > 10) {console.log ("Empacotamento não permitido: limite de itens por caixa ultrapassado")}
    else {console.log ("Empacotamento liberado.")}

console.log ("------------------------------")
//Vericação da quantidade de letras do cadastro das peças

let nomePecas = listaPecas[3]

if ( nomePecas.length < 3 ) {console.log ("cadastro não permitido: nome inválido")}
else {console.log ("Cadastro da verificação de nomes permitido")}
console.log ("------------------------------")
console.log ("Fim da aplicação")
