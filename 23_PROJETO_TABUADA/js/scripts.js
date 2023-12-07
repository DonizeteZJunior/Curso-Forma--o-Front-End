//Seleção de elementos
const numberInput = document.querySelector("#number");
const multiplicationForm = document.querySelector("#multiplication-form");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTitle = document.querySelector("#multiplication-title span");
const multiplicationTable = document.querySelector("#multiplication-operations");

//Funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for(i = 1; i <= multiplicatorNumber; i++){
        const result = number * i;
        
        const template = `<div class="row">
                            <div class="operation">${number} x ${i} =</div>
                            <div class="result">${result}</div>
                          </div>`;
        //Cria um objeto do metodo de conversor, para transformar o que foi digitado em HTML 
        // inserido no arquivo index.html
        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row");
        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerText = number;
}

//Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //o + no caso faz que a variavel retorne um inteiro;
    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    //Garante que o código só continue se nenhum dos valores faltar
    if(!multiplicationNumber || !multiplicatorNumber) return;
        
    createTable(multiplicationNumber, multiplicatorNumber);
});