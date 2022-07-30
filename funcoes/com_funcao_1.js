const d1 = 3;
const m1 = 7;
const a1 = 2021;

function exibirData1() {
    console.log(`${d1}/${m1}/${a1}`); // a funcao consegue ver as variavel do escopo global
}

const d2 = 23;
const m2 = 12;
const a2 = 2022;

function exibirData2() {
    console.log(`${d2}/${m2}/${a2}`); // a funcao consegue ver as variavel do escopo global
}

exibirData1();
exibirData1();
exibirData1();

exibirData2();
exibirData2();
exibirData2();