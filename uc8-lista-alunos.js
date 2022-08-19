let listaalunos = ["Abílio", "Carol", "Olívia", "Heitor", "Valda", "Camile", "Anya"];
//console.log(listaalunos.lenght)
console.log("Início do processamento")
console.log("----------------------------------------------")
for (let index = 0; index < listaalunos.length; index++) {
    //const element = array[index];
    console.log(index)

//Classificação da posição dos alunos

    if ( index == 0 ) {
        console.log("Aluno ocupando a posição zero: " + listaalunos[index])
    } else if ( index % 2 != 0) {
        console.log("Aluno ocupando posição mpar: " + listaalunos[index])
    } else {console.log("Aluno ocupando posição par: " + listaalunos[index])}
}
//Fim do processamento