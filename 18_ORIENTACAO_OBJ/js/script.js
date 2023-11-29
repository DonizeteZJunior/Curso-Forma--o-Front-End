// // 1 - Métodos
// const animal = {
//     nome: "Bob",
//     latir: function(){
//         console.log("Au au")
//     }
// }

// console.log(animal.nome);

// animal.latir();

// // 2 - Aprofundando em Métodos
// const pessoa = {
//     nome: "Jorge",
//     getNome: function(){
//         return this.nome;
//     },

//     setNome: function(novoNome) {
//         this.nome = novoNome;
//     }
// }

// console.log(pessoa.nome);
// console.log(pessoa.getNome());

// pessoa.setNome("Carlos");

// console.log(pessoa.getNome());

// // 3 - Prototype
// // É um recurso que faz parte da arquitetura do JS, funciona como Herança,
// // nele é considerado que todo Objeto tem um pai
// const text = "asd";

// console.log(Object.getPrototypeOf(text));

// const bool = true

// console.log(Object.getPrototypeOf(bool))

// const arr = []

// console.log(Object.getPrototypeOf(arr))

// // 4 - Mais sobre prototype
// const myObj = {
//     a: "b"
// }

// console.log(Object.getPrototypeOf(myObj));

// console.log(Object.getPrototypeOf(myObj) === Object.prototype);

// const mySecondObject = Object.create(myObj);

// console.log(mySecondObject);

// console.log(mySecondObject.a);

// console.log(Object.getPrototypeOf(mySecondObject) == myObj);

// // 5 - Classes básicas
// const cachorro = {
//     raca: null,
//     patas: 4,
// }

// const pastorAlemao = Object.create(cachorro);
// pastorAlemao.raca = "Pastor Alemão";

// console.log(pastorAlemao);
// console.log(pastorAlemao.patas);

// const salsicha = Object.create(cachorro);
// salsicha.raca = "Salsicha";

// console.log(salsicha);

// // 6 - Classes baseadas em funções construtoras
// function criarCachorro(nome, raca){
//     const cachorro = Object.create({})

//     cachorro.nome = nome
//     cachorro.raca = raca

//     return cachorro
// }

// const bob = criarCachorro("Bob", "Vira lata")

// console.log(bob)

// const sussy = criarCachorro("Sussy", "Bulldog")

// console.log(sussy)

// // 7 - Funções como Classe
// function Cachorro(nome, raca){
//     this.nome = nome,
//     this.raca = raca
// }

// const shiba = new Cachorro("Jeff","Shiba Inu")

// console.log(shiba)

// // 8 - Metodos na função construtora
// Cachorro.prototype.uivar = function(){
//     console.log("Auuuuuuuuuu!");
// }

// shiba.uivar();

// // 9 - Classes ES6
// //Classes nas versões mais atuais de JS
// class CachorroClasse {
//     constructor(nome, raca){
//         this.nome = nome
//         this.raca = raca
//     }
// }

// const julian = new CachorroClasse("Julian","Chiuaua");
// console.log(julian);
// console.log(Object.getPrototypeOf(julian));

// // 10 - Mais sobre Classes 
// class Caminhao{
//     constructor(eixos,cor){
//         this.eixos = eixos;
//         this.cor = cor;
//     }

//     descreverCaminhao(){
//         console.log(`Este caminhão tem ${this.eixos} e é da cor ${this.cor}`);
//     }
// }

// const scania = new Caminhao(6,"Vermelha");

// console.log(scania);
// scania.descreverCaminhao();

// const c2 = new Caminhao(4,"Preta");

// console.log(c2);
// console.log(c2.motor);

// Caminhao.prototype.motor = 4.0;

// const c3 = new Caminhao(6, "Azul");

// console.log(c3.motor);

// // 11 - Override
// class Humano {
//     constructor(nome, idade){
//         this.nome = nome
//         this.idade = idade;
//     }
// }

// const carlos = new Humano("Carlos", 31);
// console.log(carlos);

// console.log(Humano.prototype.idade);

// Humano.prototype.idade = "Não definida";

// console.log(carlos.idade);

// console.log(Humano.prototype.idade);

// // 12 - Symbols em Classes
// // Quando utilizado o recurso é possível criar uma propriedade única e imutável
// class Aviao {
//     constructor(marca, turbinas){
//         this.marca = marca;
//         this.turbinas = turbinas;
//     }
// }

// const asas = Symbol();
// const pilotos = Symbol();

// Aviao.prototype[asas] = 2;
// Aviao.prototype[pilotos] = 3;

// const boeing = new Aviao("Boeing",10);
// console.log(boeing);
// console.log(boeing[asas]);
// console.log(boeing[pilotos]);

// 13 - Getters e Setters
class Post {
    constructor(titulo, descricao, tags){
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo(){
        return `Você está lendo: ${this.titulo}`;
    }

    set adicionarTags(tags){
        const tagsArrays = tags.split(", ");
        this.tags = tagsArrays;
    }
}

const myPost = new Post("Algum post","É um post sobre programação");
console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programação, javascript, js"

// 14 - Herança
class Mamifero {
    constructor(patas){
        this.patas = patas
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome){
        super(patas,patas);
        this.nome = nome;
    }
}

const shark =  new Lobo(4, "Shark");

console.log(shark);
console.log(shark.patas);

// 15 - Instanceof
// Verifica se um objeto é pai de outro
console.log(shark instanceof(Lobo));
console.log(Lobo instanceof(Mamifero));

console.log(new Lobo(4, "teste") instanceof Mamifero);
console.log(new Post("a","b") instanceof Lobo);