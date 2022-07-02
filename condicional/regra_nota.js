const prompt = require('prompt-sync')();
console.log('Digite uma nota');
let nota = Number(prompt()); //converter para um numerico Not a Number (NaN)

if (isNaN(nota)) {
    console.log("Digite um valor númerico entre 0 e 10");
    return; // paro o código nesse ponto
}

//console.log(nota);
// vicente if (nota =< 10 && nota>=0)
// console.log(nota);



//Gabriel
if(nota >=0 && nota <=10){
    console.log("parabens vc sabe escrever numeros!");
} else{
    console.log("vc n sabe escrever numeros entre 0 e 10");
}


//Geovana
/*
if(nota >= 0 && nota <= 10) {
    console.log(nota)
} else {
    console.log('[ERROR]')
}
 */

//paim
/*
if ( nota >= 0 && nota <= 10) 
{ console.log (nota) }
else { console.log ("Voce não digitou o número")}
*/