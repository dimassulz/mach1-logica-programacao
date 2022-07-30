const a = 50;
const b = 20;

console.log(a + b);

//função sem parametros
function somar() {
    return 50 + 50;
}

console.log(somar());

//função com parametros
function subtrair(numero1, numero2) {
    return numero1 - numero2;
}

console.log(subtrair(100, 50));

function formatarDataBR(dia, mes, ano) {
    console.log(`${dia}/${mes}/${ano}`);
}

formatarDataBR(30, 10, 2022);
formatarDataBR(15, 12, 2022);
formatarDataBR(02, 11, 2022);
formatarDataBR(19, 01, 2022);
formatarDataBR(31, 07, 2022);

function formatarMoedaBR(valor) {
    console.log(`R$ ${valor}`);
}

formatarMoedaBR(5151.99);
formatarMoedaBR(100);
formatarMoedaBR(350.55);

function converteDataBRparaUS(dia, mes, ano) {
    if (dia > 31 || mes > 12 || mes < 1 || ano < 1900 || ano > 2100) {
        return undefined;
    }
    return `${mes}-${dia}-${ano}`;
}

console.log(converteDataBRparaUS(30, 7, 2022));
console.log(converteDataBRparaUS(1, 15, 2022));