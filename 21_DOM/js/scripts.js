// 1 - Movendo-se pelo DOM
console.log(document.body);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - Selecionando por Tag
const listItens = document.getElementsByTagName("li");
console.log(listItens);

// 3 - Selecionando por Id
const title = document.getElementById("title");
console.log(title);

// 4 - Selecionando por classe
const produtos = document.getElementsByClassName("produtos");
console.log(produtos);

// 5 - Selecionando por CSS
const produtosQuery = document.querySelectorAll(".produtos");
console.log(produtosQuery);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

// 6 - Insert Before
//Cria um elemento antes de um outro elemento
const p = document.createElement("p");
const header = title.parentElement;
header.insertBefore(p, title);

// 7 - Append Child
//Cria um elemento dentro de outro que já existe
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");

navLinks.appendChild(li);

// 8 - Replace Child
const h2 = document.createElement("h2");
h2.textContent = "Meu novo título!";

header.replaceChild(h2,title);

// 9 - Create Text Node
const myText = document.createTextNode("Agora vamos colocar mais um título");
console.log(myText);

const h3 = document.createElement("h3");
h3.appendChild(myText);
console.log(h3);

mainContainer.appendChild(h3);

// 10 - Trabalhando com atributos
const firstLink = navLinks.querySelector("a");
console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com");
console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank");

//11 - Altura e largura dos elementos
const footer = document.querySelector("footer");
//Considera a borda no tamanho
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);
//Não considera a borda no tamanho
console.log(footer.clientWidth);
console.log(footer.clientHeight);

//12 - Posição do Elemento
const product1 = produtos[0]
console.log(product1.getBoundingClientRect());

//13 - CSS com JS
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";

//14 - Alterando estilos de varios elementos
for(const li of listItens){
    li.style.backgroundColor = "red";
}