/**
 Montar um programa onde faço pesquisa por parte do nome das marcas de nome de carros
 o sistema apresenta uma lista numerada com os carros que a pesquisa retornar.

 Se nao encontrar nenhum resultado exibir a informação que nenhuma marca de carro foi encontrada.

 Exemplo pesquisa: merc

 Exemplo de saida:
 1 - MERCEDES-BENZ
 2 - MERCURY

 */

const marcas = [
     "CHEVROLET", "VOLKSWAGEN","FIAT", "MERCEDES-BENZ", "CITROEN", "CHANA", "HONDA", "SUBARU", "FERRARI", "BUGATTI", "LAMBORGHINI", "FORD", "HYUNDAI", "JAC", "KIA", "GURGEL", "DODGE", "CHRYSLER", "BENTLEY", "SSANGYONG", "PEUGEOT", "TOYOTA", "RENAULT", "ACURA", "ADAMO", "AGRALE", "ALFA ROMEO", "AMERICAR", "ASTON MARTIN", "AUDI", "BEACH", "BIANCO", "BMW", "BORGWARD", "BRILLIANCE", "BUICK", "CBT", "NISSAN", "CHAMONIX", "CHEDA", "CHERY", "CORD", "COYOTE", "CROSS LANDER", "DAEWOO", "DAIHATSU", "VOLVO", "DE SOTO", "DETOMAZO", "DELOREAN", "DKW-VEMAG", "SUZUKI", "EAGLE", "EFFA", "ENGESA", "ENVEMO", "FARUS", "FERCAR", "FNM", "PONTIAC", "PORSCHE", "GEO", "GRANCAR", "GREAT WALL", "HAFEI", "HOFSTETTER", "HUDSON", "HUMMER", "INFINITI", "INTERNATIONAL", "JAGUAR", "JEEP", "JINBEI", "JPX", "KAISER", "KOENIGSEGG", "LAUTOMOBILE", "LAUTOCRAFT", "LADA", "LANCIA", "LAND ROVER", "LEXUS", "LIFAN", "LINCOLN", "LOBINI", "LOTUS", "MAHINDRA", "MASERATI", "MATRA", "MAYBACH", "MAZDA", "MENON", "MERCURY", "MITSUBISHI", "MG", "MINI", "MIURA", "MORRIS", "MP LAFER", "MPLM", "NEWTRACK", "NISSIN", "OLDSMOBILE", "PAG", "PAGANI", "PLYMOUTH", "PUMA", "RENO", "REVA-I", "ROLLS-ROYCE", "ROMI", "SEAT", "UTILITARIOS AGRICOLAS", "SHINERAY", "SAAB", "SHORT", "SIMCA", "SMART", "SPYKER", "STANDARD", "STUDEBAKER", "TAC", "TANGER", "TRIUMPH", "TROLLER", "UNIMOG", "WIESMANN", "CADILLAC", "AM GEN", "BUGGY", "WILLYS OVERLAND", "KASEA", "SATURN", "SWELL MINI", "SKODA", "KARMANN GHIA", "KART", "HANOMAG", "HILLMAN", "HRG", "GAIOLA", "TATA", "DITALLY", "RELY", "MCLAREN", "GEELY"
];
const prompt = require('prompt-sync')();

const pesquisa = prompt("Pesquise um nome da marca: ");

// 1 - construcao do filter
let resultadoPesquisa = marcas.filter(function(item){
    return item.includes(pesquisa.toUpperCase());
}); //filtro da pesquisa

// 2 - verificacao se não foi encontrado resultado
if (resultadoPesquisa.length === 0) {
    return console.log("Nenhuma marca de carro foi encontrada!");
} else {
    // 3 - exibição do resultado de pesquisa
    resultadoPesquisa.forEach(function(nomeMarca, indice){
        console.log(`${++indice} - ${nomeMarca}`);
    });
}

