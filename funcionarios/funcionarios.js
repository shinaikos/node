const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axio = require('axios');

const nome = f => f.nome === "Reina";
const chineses = f => f.pais === "China";
const sexo = f => f.genero === "M"
const salario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
};

axio.get(url).then(response => {
    const funcionarios = response.data

    const func = funcionarios
        .filter(chineses)
        .filter(sexo)
        .reduce(salario)

    const nome1 = funcionarios
        .filter(nome)

    console.log(func)
    console.log(nome1)
})