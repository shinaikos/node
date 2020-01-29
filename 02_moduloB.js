/*
somente module.exports pode exportar na notacao objeto

this = {
    nao funciona
}

exports = {
    nao funciona
}
*/


module.exports = {
    saudacoes: {
        bomDia: "bom dia",
        boaNoite() {
            return "boa noite"
        }
    },
    agradecimentos: {
        obrigado: "Muito Obrigado"
    }
};

