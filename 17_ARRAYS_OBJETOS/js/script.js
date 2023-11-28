// // 1 - Arrays
// const lista = [1,2,3,4,5]

// console.log(lista)

// console.log(typeof lista)

// // 2 - Mais sobre arrays
// const arr = ["a","b","c","d","e"]

// console.log(arr[0])

// // 3 - Propriedades
// const numbers = [5, 3, 4]

// console.log(numbers.length)

// console.log(numbers["length"])

// const meuNome = "Jorge"

// console.log(meuNome.length)

// // 4 - Metodos
// const outrosNumeros = [1,2,3]

// //Concatenação
// const allNumbers = numbers.concat(outrosNumeros)

// console.log(allNumbers)

// const text = "algum texto"

// console.log(text.toUpperCase())

// console.log(typeof text.toUpperCase)

// console.log(text.indexOf("g"))

// // 5 - Objetos
// const pessoa = {
//     nome: "Matheus",
//     idade: 31,
//     tabalho: "Programador",
// }

// console.log(pessoa)
// console.log(pessoa.nome)
// console.log(pessoa.nome.length)
// console.log(typeof pessoa.nome)

// // 6 - Criando e deletando propriedades
// const carro = {
//     mortor: 2.0,
//     marca: "VW",
//     modelo: "Tiguan",
//     km: 2000,
// }

// console.log(carro)

// carro.portas = 4

// console.log(carro)

// delete carro.km

// console.log(carro)

// // 7 - Mais sobre objetos
// const obj = {
//     a: "teste",
//     b: true
// }

// console.log(obj instanceof Object);

// const obj2 = {
//     c: []
// }

// //Copia as propriedades de um objeto para o outro
// Object.assign(obj2, obj)

// console.log(obj2)

// // 8 - Conhecendo melhor os objetos
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));

// console.log(Object.entries(obj))

// // 9 - Mutação
// // Ocorre criando um objeto a partir de outro, mas que não é uma cópia e ainda assim
// // as mudanças nele podem afetar um ou outro
// const a = {
//     nome: "Jorge",
// }

// const b = a;

// console.log(a)
// console.log(b)

// a.age = 31;

// console.log(b)

// delete b.age

// console.log(a)
// console.log(b)

// // 10 - Loop em array
// const users = ["Jorge","Carlos","Pedro","Simão"]

// for(let i = 0;i < users.length; i++){
//     console.log(`listando o usuário: ${users[i]}`);
// }

// // 11 - Push e Pop
// const array = ["a","b","c"]
// //Adiciona um item na ultima posição do Array
// array.push("d");

// console.log(array);
// console.log(array.length);
// //Remove o ultimo item do array
// array.pop();

// console.log(array);

// let itemRemovido = array.pop();

// console.log(itemRemovido);
// console.log(array);

// array.push("z","x","y");

// console.log(array);

// // 12 - Shift e unshift
// const letters = ["a","b","c"]
// //Remove o primeiro item do array
// const letter = letters.shift();

// console.log(letter);
// console.log(letters);

// letters.unshift("p","q","r");
// letters.unshift("z");

// console.log(letters);

// 13 - IndexOf e lastindexOf
//indexOf permite encontrar o índice de um elemento, usado como argumento para
//o método
//lasindexof utilizado quando há repetições de elementos e precisamos do índice
// da última ocorrência
// const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"]

// console.log(myElements.indexOf("Maçã"));
// console.log(myElements.indexOf("Abacate"));

// console.log(myElements[2]);
// console.log(myElements[myElements.indexOf("Abacate")]);

// console.log(myElements.lastIndexOf("Abacate"));

// console.log(myElements.indexOf("Mamão"));
// console.log(myElements.lastIndexOf("Mamão"));

// // 14 - Slice
// //Usado para extrair um array menor de um array maior
// const testeSlice = ["a","b","c","d","e","f"]

// const subArray = testeSlice.slice(2, 4);

// console.log(subArray);
// console.log(testeSlice);

// const subArray2 = testeSlice.slice(2, 4+1);

// console.log(subArray2);

// const subArray3 = testeSlice.slice(20, 40);

// console.log(subArray3);

// const subArray4 = testeSlice.slice(2);

// console.log(subArray4);

// // 15 - forEach
// const nums = [1,2,3,4,5]

// nums.forEach((n) => {
//     console.log(`O número é ${n}`);
// })

// const posts = [
//     {title: "Primeiro post", category: "PHP"},
//     {title: "Segundo post", category: "JavaScript"},
//     {title: "Terceiro post", category: "Python"},
// ];

// posts.forEach((post) => {
//     console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
// })

// // 16 - Includes
//Verifica se o array tem um elemento
// const marcas = ["BMW","VW","Fiat"];

// console.log(marcas.includes("BMW"));
// console.log(marcas.includes("KIA"));

// if(marcas.includes("BMW")){
//     console.log("Há carros da BMW!");
// }

// // 17 - Reverse
// //Inverte os elementos de um array
// const reverseTest = [1,2,3,4,5]

// reverseTest.reverse();

// console.log(reverseTest);

// // 18 - Métodos de String: Trim
// //Remove tudo que não é textp em uma string;
// const trimTeste = " testando \n";

// console.log(trimTeste);

// console.log(trimTeste.trim());

// console.log(trimTeste.length);

// console.log(trimTeste.trim().length);

// // 19 - padStart
// //Insere texto no começo de uma string
// const testePadStart = "1";

// const newNumber = testePadStart.padStart(4,"0");

// console.log(testePadStart);
// console.log(newNumber);

// const testePadEnd = newNumber.padEnd(10,"0");

// console.log(testePadEnd);

// // 20 - Split
// //Divide uma string em um array;
// const frase = "O rato roeu a roupa do rei de Roma";

// const arrayDaFrase = frase.split(" ");

// console.log(arrayDaFrase);

// // 21 - Join
// //Une uma lista em uma string;
// const fraseDeNovo = arrayDaFrase.join(" ");

// console.log(fraseDeNovo);

// const itensParaComprar = ["Mouse","Teclado","Monitor"];

// const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;

// console.log(fraseDeCompra);

// // 22 - Repeat
// const palavra = "Testando ";

// console.log(palavra.repeat(5));

// // 23 - Rest Operator/Rest Parameters
// // Podemos utilizá-lo para receber indefinidos argumentos em uma função
// const somaInfinita = (...args) => {
//     let total = 0

//     for(let i = 0; i < args.length;i++){
//         total += args[i]
//     }

//     return total;
// }

// console.log(somaInfinita(1,2,3));
// console.log(somaInfinita(100,20000,3000));

// // 24 - for...of
// // Estrutura de reetição igual ao for, só que mais simples
// const somaInfinita2 = (...args) => {
//     let total = 0

//     for(num of args){
//         total += num;
//     }

//     return total;
// }

// console.log(somaInfinita2(1,2,3));
// console.log(somaInfinita2(100,20000,3000));

// // 25 - Destructuring em objetos
// // É uma funcionalidade que nos permite desestruturar algum dado;
// const userDetails = {
//     firstName: "Matheus",
//     lastName: "Battisti",
//     job: "Garoto de Programas"
// }

// const {
//     firstName,
//     lastName,
//     job
// } = userDetails

// console.log(firstName,lastName,job);

// // renomear variaveis
// const {
//     firstName: primeiroNome
// } = userDetails;

// console.log(primeiroNome);

// // 26 - Destructing em arrays
// const myList = ["Avião", "Submarino", "Carro"]

// const [
//     veiculoA,
//     veiculoB,
//     veiculoC
// ] = myList;

// console.log(veiculoA,veiculoB,veiculoC);

// 27 - JSON 
// Utilizado para comunição entre API e front-end, formatação do mesmo é rigorosa
const myJSon = '{"name": "Matheus", "age": 31, "skills": ["PHP", "JavaScript", "Python"]}';

console.log(myJSon);
console.log(typeof myJSon);

// 28 - JSON para objeto e objeto para JSON
const myObject = JSON.parse(myJSon);

console.log(myObject);
console.log(myObject.name);
console.log(typeof myObject);

//JSON invalido
// const badJson = '{"name":Matheus, "age":31}';
// const myBadObject = JSON.parse(badJson);

myObject.isOpenToWork = true;
console.log(myObject);

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);