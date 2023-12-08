const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

//Funções
//Gerar QR Code
function generateQrCode(){
    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    //Load faz com que se espere o retorno da API com a imagem
    //Antes de mostrar a mesma.
    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "Código Criado!";
    });
}

//Eventos
qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generateQrCode();
    }
});

qrCodeInput.addEventListener("keyup", (e) => {
    if(!qrCodeInput.value){
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
})