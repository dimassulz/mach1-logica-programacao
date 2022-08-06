const celular = {
    marca: "Samsung", // indice : valor
    modelo: "S22", // indice : valor
};

const carro = {
    marca: "Fiat", // indice : valor
    modelo: "Uno", // indice : valor
    peso: 1100,
    emOferta: true, 
    opcionais: ['ar-condicionado', 'vidro eletrico'],
    itensObrigatorios : {},
    ligar: function() {
        return "estou ligando....";
    },
    exibirMarcaModelo: function () {
        return this.marca + ' '+ this.modelo;
    }
};


//forma comum de exbicao das propriedades de um objeto
console.log('###FORMA COMUM###');
console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.peso);
console.log(carro.emOferta);
console.log(carro.opcionais);
console.log(carro.ligar());
console.log(carro.exibirMarcaModelo());
carro.velocidadeMaxima = 190; // adicionando uma nova propriedade e valor ao meu objeto carro []
console.log(carro.velocidadeMaxima); 

console.log('###2a FORMA###');
//2a forma de exbicao das propriedades de um objeto
console.log(carro['marca']);
console.log(carro['modelo']);
console.log(carro['peso']);