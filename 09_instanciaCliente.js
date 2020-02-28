const contadorA = require('./07_instanciaUnica');
const contadorB = require('./07_instanciaUnica');

const contadorC = require('./08_InstanciaNova')();
const contadorD = require('./08_InstanciaNova')();

contadorA.inc();
contadorA.inc();

console.log(contadorB.valor);

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor,contadorD.valor)