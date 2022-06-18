/**
 * Calcular a área da circunferencia sabendo que  o valor do raio é 20
 * Calculo é: PI * raio * raio
 * Mostrar no console: O valor da área é: xxx.xxx
 */

const PI = 3.1415;
let raio = 20;

let areaCircunferencia = PI * raio * raio;

console.log('O valor da área é: ' + areaCircunferencia.toFixed(3) + ' m2');