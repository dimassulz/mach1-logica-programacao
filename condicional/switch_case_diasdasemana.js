const prompt = require('prompt-sync')();

const numeroDiaSemana = Number(prompt('Digite um numero referente a um dia da semana (1 a 7): '));
//1 ao 7 (1 - domingo e 7 - sabado)
switch (numeroDiaSemana) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda Feira');
        break;
    case 3:
        console.log('Terça Feira');
        break;
    case 4:
        console.log('Quarta Feira');
        break;
    case 5:
        console.log('Quinta Feira');
        break;
    case 6:
        console.log('Sexta Feira');
        break;
    case 7:
        console.log('Sábado');
        break;
    default:
        console.log('Digite um valor entre 1 e 7');
}