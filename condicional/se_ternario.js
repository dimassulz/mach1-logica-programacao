const peso = 80;
let msg = '';
if (peso >= 90) {
    msg = "Voce pesa mais de 90kg";
} else {
    msg = "Voce pesa menos 90kg";
}
//Usando a sintaxe padrao do if
console.log(msg);

//Usando a sintaxe do if ternário
msg = (peso >= 90 ? "Voce pesa mais de 90kg" : "Voce pesa menos de 90kg");
console.log(msg);