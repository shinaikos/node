const url = 'http://files.cod3r.com.br/curo-js/funcionarios.json';
const axio = require('axios');

const chineses = f => f.pais = "China";
const sexo = f => f.genero = "F"
const salario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
};

axio.get(url).then(response => {
    const funcionarios = response.data

    const func = funcionarios
        .filter(chineses)
        .filter(sexo)
        .reduce(salario)

    console.log(func)
})