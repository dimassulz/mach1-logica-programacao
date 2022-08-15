/**
 Elabore uma função que recebe um objeto com estudantes e suas notas.As notas de cada estudante estarão
 num array, conforme exemplo abaixo.Você deverá calcular a média da nota de cada aluno e retornar um objeto
 com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
 Exemplo:
 receberMelhorEstudante({
     Joao: [8, 7.6, 8.9, 6], // média 7.625
     Mariana: [9, 6.6, 7.9, 8], // média 7.875
     Carla: [7, 7, 8, 9] // média 7.75
 }) // retornará { nome: "Mariana", media: 7.875 }
 */

 function media(arrNotas){
    let somaAcumulador = 0;
    arrNotas.forEach(function(nota){
        somaAcumulador += nota;
    })
    return somaAcumulador / arrNotas.length;
 }

 function receberMelhorEstudante(objetoEstudantes){
    //calcular as medias dos estudantes
    let arrEstudantes = []; //array de estudandes vazio
    Object.entries(objetoEstudantes).forEach(function(estudante){ //Object.entries transforma em arrays os pares chave: valor de um objeto
       let objetoEstudante = {}; //novo Objeto de estudante
       objetoEstudante.nome = estudante[0]; //separando o nome do estudante
       objetoEstudante.media = media(estudante[1]); //separando as notas e enviando para uma funcao de media que fará o calculo
       arrEstudantes.push(objEstudante); // adicionando o novo objeto no array
    });
    return arrEstudantes.sort((a,b) => b.media - a.media)[0]; // invertendo a posição para buscar a maior media
 }

 console.log(receberMelhorEstudante({
     Joao: [8, 7.6, 8.9, 6], // média 7.625
     Mariana: [9, 6.6, 7.9, 8], // média 7.875
     Carla: [7, 7, 8, 9] // média 7.75
 }));

