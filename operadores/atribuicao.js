let valorCompra = 555.99; // total da minha compra
let valorQueijo = 19.99; 
let valorPao = 8.5;
let desconto = (1-0.1175); //equivale a 11.75% de desconto
console.log(valorCompra);

valorCompra += valorQueijo; // atribuição aditiva
console.log(valorCompra);

valorCompra += valorPao;
console.log(valorCompra); // 584.48

/*
valorCompra = valorCompra - valorCompra * desconto; // desconto = 0.1175
console.log(valorCompra); // valor depois do desconto 574.48
*/

valorCompra *= desconto;
console.log(valorCompra); // valor depois do desconto 574.48

