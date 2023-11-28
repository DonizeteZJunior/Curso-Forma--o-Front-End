// 1 - Criando uma função
// function minhaFunction(){
//     console.log("Testando")
// }

// minhaFunction()

// const minhaFuncaoEmVariavel = function(){
//     console.log("Função em variável")
// }

// minhaFuncaoEmVariavel();

// function funcaoComParametro(txt){
//     console.log(`Imprimindo: ${txt}`)
// }

// funcaoComParametro("Imprimindo alguma coisa")

// funcaoComParametro("Imprimindo outra coisa")

// 2 - return
// const a = 10
// const b = 20
// const c = 30
// const d = 40

// function soma(n1, n2){
//     return n1 + n2;
// }

// const resultado = soma(a, b)

// console.log(resultado)

// console.log(soma(c,d))

// 3 - Escopo das funções
//Pode se ter a variavel de maneira global e ainda assim recriar a mesma com mesmo nome
// dentro de uma função sem ter conflitos de nome.

// let y = 10

// function testandoEscopo(){
//     let y = 20
//     console.log(`Y dentro da função é: ${y}`)
// }

// console.log(`Y fora da função é: ${y}`)

// testandoEscopo()

// 4 - Escopo aninhado
//Consiste em ter em qualquer bloco a declaração de variáveis separadas dos outros 
//escopos
// let m = 10

// function escopoAninhado(){
//     let m = 20

//     if(true){
//         let m = 30

//         if(true){
//             let m = 40

//             console.log(m)
//         }

//         console.log(m)
//     }

//     console.log(m)
// }

// escopoAninhado()

// console.log(m)

// 5 - Arrow function
// const testeArrow = () => {
//     console.log("Esta é uma arrow function")
// }

// testeArrow()

// const parOuImpar = (n) => {
//     if(n % 2 === 0){
//         console.log("Par")
//         return
//     }

//     console.log("Impar")
// }

// parOuImpar(5)

// parOuImpar(10)

// 6 - Mais sobre arrow functions
// const raizQuadrada = (x) => {
//     return x*x
// }

// console.log(raizQuadrada(4))

// const raizQuadrada2 = (x) => x * x

// console.log(raizQuadrada2(5))

// console.log(raizQuadrada(12))

// 7 - Parametro Opcional
// const multiplicacao = function(m,n){
//     if(n === undefined){
//         return m * 2
//     }else{
//         return m * n
//     }
// }

// console.log(multiplicacao(5))
// console.log(multiplicacao(2,4))

// const greeting = (name) => {
//     if(!name){
//         console.log("Olá!")
//         return
//     }

//     console.log(`Olá ${name}`)
// }

// greeting()

// greeting("Matheus")

// 8 - Argumentos valor default
// const customCumprimento = (name, greet = "Olá") => {
//     return `${greet}, ${name}!`
// }

// console.log(customCumprimento("Matheus"))

// console.log(customCumprimento("João","Bom dia"))

// const textoRepetido = (text, repeat = 2) => {
//     for(let i =0; i< repeat;i++){
//         console.log(text);
//     }
// }

// textoRepetido("Testanto")

// textoRepetido("repita 5 vezes", 5)

// 9 - Closure
// Pode compilar varias funções dentro de uma unica função, como maneira de 
// reaproveitamento de código
// function someFunction(){
//     let txt = "Alguma coisa"

//     function display(){
//         console.log(txt)
//     }

//     display();
// }

// someFunction()

// 10 - Mais sobre closure
// const multiplicacaoClosure = (n) => {
//     return (m) => {
//         return n * m;
//     }
// }

// const c1 = multiplicacaoClosure(5);
// const c2 = multiplicacaoClosure(10);

// console.log(c1)
// console.log(c2)

// console.log(c1(5))
// console.log(c2(10))

// 11 - Recursão
// const ateDez = (n,m) => {
//     if(n < 10){
//         console.log("A função parou de executar!")
//     } else {
//         const x = n - m

//         console.log(x)

//         ateDez(x,m)
//     }
// }

// ateDez(100,7)

// function factorial(x) {
//     if(x === 0){
//         return 1
//     } else {
//         return x * factorial(x - 1)
//     }
// }

// const num = 6

// const result = factorial(num)

// console.log(`O fatorial do número ${num} é ${result}`)