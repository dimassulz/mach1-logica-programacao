/**
 * Cenário usando o OU (OR)
 * Cenário 2
 * Porém, hoje só vou à academia
 * se não estiver chovendo OU o carro estiver na garagem.
 */

let minhaCondicao1 = 'carro está na garagem';
let minhaCondicao2 = 'está chovendo';

//para eu ir a academia eu devo estar carro está na garagem e NÃO ESTA CHOVENDO
//minhaCondicao1 = V
//minhaCondicao2 = F
if (minhaCondicao1 == 'carro está na garagem' || minhaCondicao2 == 'não está chovendo') { //V
    console.log("Devo ir a academia!");
} else {
    console.log("Não vou a academia!");
}
