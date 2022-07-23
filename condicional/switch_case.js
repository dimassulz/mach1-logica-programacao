const expr = 'Oranges';
switch (expr) { //verifica a expressao
    case 'Oranges': // caso for Oranges
        console.log('Oranges are $0.59 a pound.');
        break; // retornar somente o trecho de codigo desse case
    case 'Mangoes': // caso Mangoes ou
    case 'Papayas': // caso Papayas
        console.log('Mangoes and papayas are $2.79 a pound.');
        break; // retornar somente o trecho de codigo desse case
    default: //estrutura padrao tudo que for diferente dos case's acima
        console.log(`Sorry, we are out of ${expr}.`);
        //não temos a necessidade de colocar um break
}