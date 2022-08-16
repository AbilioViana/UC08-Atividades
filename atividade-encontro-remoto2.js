//Contagem de alunos


     let listadealunos = 
    ["Abílio", "Carolina", "Olívia", "Heitor", "Valdelice","Camile","Anya"];

 //Adição de novos alunos

    listadealunos.push ("Bombom","Josué");

//Lista de alunos cadastrados

    console.log('Lista de alunos', listadealunos);

    var numerodealunos = listadealunos.length;
 
//Número total de alunos

    console.log('O número de total de alunos é',numerodealunos);

 //Verificação se o número total de alunos é zero, par ou ímpar

    if(numerodealunos % 2 === 0) {
    
        console.log("O número total de alunos é par.");

    }

        else if(numerodealunos = 0)
    {

        console.log("O número de alunos é zero.");
    }

    else 
   
    console.log("O número total de alunos é ímpar.");

    


    //Fim do programa