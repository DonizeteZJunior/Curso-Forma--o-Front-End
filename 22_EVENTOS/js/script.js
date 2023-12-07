// 1 - Adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function(){
    console.log("Clicou aqui!");
});

// 2 - Removendo eventos
const secondBtn = document.querySelector("#btn");

function imprimirMensagem(){
    console.log("Mensagem!");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#btn2");

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
});

// 3 - Argumento do evento
const meuTitulo = document.querySelector("#meuTitulo");

meuTitulo.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
});

// 4 - Propagação
// Acontece quando o evento de um botão acaba sendo ativado por outro além do dono do evento
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation(); //ajuda a resolver o problema de propagação
    console.log("Evento 2");
});

// 5 - Removendo evento padrão
//Muitos elementos tem eventos padrões pré definidos, isso sempre para cancelar esses eventos
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Não alterou a página");
});

// 6 - Eventos de Tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
    console.log(`Apertou a tecla ${e.key}`);
});

// 7 - Outros eventos de mouse
const mouse = document.querySelector("#mouse");

mouse.addEventListener("mousedown", () => {
    console.log("Pressionou o botão");
});

mouse.addEventListener("mouseup", () => {
    console.log("Soltou o botão");
});

mouse.addEventListener("dblclick", () => {
    console.log("Clique duplo");
});

// // 8 - Movimento do Mouse
// document.addEventListener("mousemove", (e) => {
//     console.log(`No eixo X: ${e.x}`);
//     console.log(`No eixo Y: ${e.y}`);
// });

// 9 - Evento de Scroll
window.addEventListener("scroll", (e) =>{
    if(window.scrollY > 200){
        console.log("Passamos de 200px");
    }
});

// 10 - Evento de focus/blur
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
    console.log("Entrou no input");
});

input.addEventListener("blur", (e) => {
    console.log("Saiu do input");
});

// 11 - Eventos de carregamento de página
window.addEventListener("load", () => {
    console.log("A página carregou");
});

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "";
});

// 12 - Debounce
// Técnica para reduzir o o quanto um evento é disparado, afim de poupar memória
const debounce = (f,delay) => {
    let timeout;

    return(...arguments) => {
        if(timeout){
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            f.apply(arguments);
        }, delay);
    }
}

window.addEventListener("mousemove", 
    debounce(() => {
    console.log("Executando a cada 400ms")
    },400)
);