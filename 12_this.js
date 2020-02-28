console.log(this === global);
console.log(this === module);

console.log(this === exports);
console.log(this === module.exports);

function logThis(){
    console.log(
        `dentro de uma funcao
        ${this === exports},
        ${this === module.exports},
        ${this === global}
        `
    )
}

logThis()