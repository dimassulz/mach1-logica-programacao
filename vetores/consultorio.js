const prompt = require('prompt-sync')();
const pacientes = [];
let verificarPaciente = 'S';
do {
    console.log("Digite o nome do paciente: ")
    let nomePaciente = prompt();

    if (nomePaciente === "") {
        return console.log("Informe o nome do paciente!");
    }

    pacientes.push(nomePaciente);
    console.log("Deseja inserir outro paciente? S/N ")
    verificarPaciente = prompt();
}while(verificarPaciente === 'S');

let listaEspera = '';
for(let p = 0; p < pacientes.length; p++){
    listaEspera += `${p+1} - ${pacientes[p]} \n`;
}

console.log("---- Lista de espera ----");
console.log(listaEspera);