//Sistema de cadastro atividade encontro remoto 1 UC-08

// Variáveis para decisão do cadastro de eventos

var datalimite = new Date('08/19/2022');

var dataevento = new Date('08/20/2022');

    if (dataevento <= datalimite) {

    console.log("Cadastro de palestra permitida")
    }
    else if (dataevento > datalimite) {

    console.log("Excedido data para cadastro de palestras")

    };

// Verificação da idade mínima para participação nos eventos.

var idademinima = Number(18);
var idade       = Number(16);

    if (idade >= idademinima){
        console.log("Idade para inscrição permitida")

    }

    else 
        console.log("Idade para inscrição não permitida");

// lista de participantes

let listaparticipantes = ["Abílio", "Carol", "Olívia", "Heitor", "Josué", "Rose", "Pedro", "Giovana", "Adriano", "Licia", "Alícia", "César"];

// Determinação do número de participantes.

var numerodeparticipantes = listaparticipantes.length; 

    console.log("O tatal de inscritos é de");

    console.log(numerodeparticipantes);

    console.log(listaparticipantes);


//Determição do número máximo de participantes.

        if (numerodeparticipantes < 100)  {

            console.log("Cadastro realizado com sucesso"); }

        else 

            

            console.log("Excedido o número máximo de participantes");

            console.log("Boa participação a todos");

        

