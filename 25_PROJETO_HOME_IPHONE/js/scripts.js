const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

// Adiciona em cada elemento button a função de click
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e);

        //limpa a classe selected de todos os botões
        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

        //separa o botão alvo do click e define o mesmo como selecionado
        const button = e.target;
        const id = button.getAttribute("id");
        console.log(id);
        button.querySelector(".color").classList.add("selected");

        //vai adicionar a classe de mudança ao elemento aonde fica a imagem, para trocar a mesma e depois
        /// remover a classe 'changing' completando assim a transição.
        image.classList.add("changing");
        image.setAttribute("src",`./img/iphone_${id}.jpg`);
        setTimeout(() => {
            image.classList.toggle("changing");
        }, 200);
    });
});