function sempreRetornaUm() {
    return 1;
}

function textoOuNumero(retornaTexto) {
    //return retornaTexto ? retornaTexto : 10;
    //verifica se o retorna texto existe se existir retornar ele mesmo,
    //caso contrario ele retorna o valor 10

    if (retornaTexto) {
        return retornaTexto;
    }

    return 10;
}

console.log(10 + sempreRetornaUm()); //11

console.log(10 + textoOuNumero()); //20

console.log(10 + textoOuNumero("logica")); //10Sou um texto!