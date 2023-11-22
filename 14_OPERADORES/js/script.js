// 1 - Number 
/*
console.log(typeof 2);
console.log(typeof 5.90);
console.log(typeof -43);

// 2 - Operações Aritméticas
console.log(2+4);
console.log(3-2);
console.log(5*2);
console.log(10/4);

// 3 - Special numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "asd");
console.log(typeof NaN);

// 4 - Strings
console.log(typeof "Um texto");
console.log(typeof `Texto la la la`);
console.log(typeof '13'); 

// 5 - Símbolos especiais em string
console.log("Testando a \n quebradeira");
console.log("Espaçamento de \t tab");

// 6 - Concatenação
console.log("Oi, "+"tudo"+" bem?");
console.log(`Testando`+` com`+` crase!`)

// 7 - Template Strings
console.log(`A soma de 2+2 é: ${2+2}`)

console.log(`Podemos executar qualquer coisa aqui: ${console.log("Aqui")}`)

// 8 - Boolean
console.log(true);
console.log(5 > 10);
console.log(20 > 5);
console.log(typeof false); 

// 9 - Comparações
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);

// 10 - Idêntico
console.log(9 == "9");
// leva em consideração o tipo de dado "Number,String, Boolean", na hora de comparar
console.log(9 === "9");
console.log(9 != "9");
console.log(9 !== "9"); */

// 11 - Operadores lógicos
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);
console.log(5 > 2 && "Jorge" === 1);
console.log(5 > 2 || "Jorge" === 1);
console.log(5 < 2 || 5 > 100);
// funciona invertendo o valor, oque era true se torna false e vice e versa
console.log(!true);
console.log(!5 > 2);

// 12 - Empty values
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == false);
console.log(undefined === false);

// 13 - Mudanças de tipo
console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 1);