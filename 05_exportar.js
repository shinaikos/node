console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;
//o exports aponta somente para um endereco de memoria
// so e possivel alterar pela notacao ponto
exports = null;
console.log(module.exports);

exports = {
    nome: "teste"
};

console.log(module.exports);

module.exports = {
    publico: true
}