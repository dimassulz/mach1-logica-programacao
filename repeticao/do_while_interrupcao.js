const prompt = require('prompt-sync')();
console.log('A qualquer momento digite 0 ou qualquer caracter para sair do programa!');
do {
    console.log('Digite um número!');
    let numero = Number(prompt());
    if (numero === 0 || isNaN(numero)) {
        console.log("Deseja sair do programa? digite S para sair");
        let resposta = prompt();
        if (resposta === "S") {
            break;
        } else {
            continue;
        }
    }

    //se par, mostrar o dobro; se for ímpar mostrar o triplo
    if (numero % 2 === 0) {
        console.log(`O dobro de ${numero} é: ${numero * 2}`);
    } else {
        console.log(`O tripo de ${numero} é: ${numero * 3}`);
    }

} while (true); //loop infinito

console.log('Até logo!');