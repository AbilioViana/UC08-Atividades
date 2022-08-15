//Sistema de cadastro atividade encontro remoto 1 UC-08

// Variáveis para decisão do cadastro de eventos

var datalimite = new Date('08/19/2022');

var dataevento = new Date('08/15/2022');

    if (dataevento <= datalimite) {

    console.log("Cadastro de palestra permitida")
    }
    else if (dataevento > datalimite) {

    console.log("Excedido data para cadastro de palestras")

    };

// Verificação da idade mínima para participação nos eventos.

var idademinima = Number(18);
var idade       = Number(19);

    if (idade >= idademinima){
        console.log("Idade para inscrição permitida")

    }

    else 
        console.log("Idade para inscrição não permitida");

// lista de participantes

let listaparticipantes = ["Abílio", "Carol", "Olívia", "Heitor", "Josué", "Rose", "Pedro", "Giovana", "Adriano", "Licia", "Alícia", "César"];

    listaparticipantes.push ("Camile", "Anya");

// Determinação do número de participantes.

var numerodeparticipantes = listaparticipantes.length; 

    console.log("O tatal de inscritos é de");

    console.log(numerodeparticipantes);

    console.log

    console.log(listaparticipantes);


//Determição do número máximo de participantes.

        if (numerodeparticipantes < 100)  {

            console.log("Cadastro realizado com sucesso, número de participantes menor que 100"); }

        else 

            

            console.log("Excedido o número máximo de participantes, cadastro não permitido");

            console.log("Boa participação a todos");

        

