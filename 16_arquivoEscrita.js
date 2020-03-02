const fs = require('fs');

const produto = {
    nome: "celular",
    preco: 698.37,
    desconto: 0.10
};

const produto2 = {
    nome: "notebook",
    preco: 3458.90,
    desconto: 0.15
}

function salvar(obj) {
    fs.writeFile(__dirname + `/${obj.nome}.json`, JSON.stringify(produto, produto2), err => {
        console.log(err || "arquivo salvo com sucesso")
    });
};

salvar(produto);
salvar(produto2)
