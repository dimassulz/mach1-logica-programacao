let tentativas = 0;
const NUMERO_LIMITE = 0.9;

//console.log(Math.random()); //gera um numero aleatorio de 0 a 1
//return;

//quantidade indeterminada de repetições
while (Math.random() < NUMERO_LIMITE) {
    //console.log('encontrou valor < 0.99999');
    //console.log(tentativas++);
    tentativas++;
}

console.log(`Foi encontrado um numero maior ou igual que ${NUMERO_LIMITE} com ${tentativas} tentativas`);