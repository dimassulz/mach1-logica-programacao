let inicio = "Iniciando...\n";
let meio = "carregando...\n";
let fim = "finalizando...\n";

inicio += "após o inicio do texto inseri esse trecho aqui \n";
inicio += "outro texto\n";
meio += "inserindo após o carregando \n";

console.log("Teste usando a crase " + inicio + meio + fim);

console.log("Usando a ``");
let textoCompleto = `Teste usando a crase ${inicio} ${meio} ${fim}`;
console.log(textoCompleto);

