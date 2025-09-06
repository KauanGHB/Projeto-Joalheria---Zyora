let btnProdutos = document.getElementById("produtos")
let menuDrop = document.getElementById("menuDrop")
btnProdutos.addEventListener("click" , function ativamenu(){
   menuDrop.classList.toggle('ativo')
})
document.addEventListener('click', function (e) {
            e.stopPropagation()
            if (!document.querySelector('#produtos').contains(e.target)) {
                menuDrop.classList.remove('ativo')
            }
        })

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let btnCarrosel1 = document.getElementById("btnCarrosel1")
let btnCarrosel2 = document.getElementById("btnCarrosel2")
let mostrando = 1;
document.getElementById("avancaCarrosel").addEventListener("click", () => {
    if (mostrando === 1) {
        img1.style.display = "none";
        img2.style.display = "block";
        btnCarrosel2.style.color = "#ffa500"
        btnCarrosel1.style.color = "#fff"
        mostrando = 2;
    }
});
document.getElementById("voltaCarrosel").addEventListener("click", () => {
    if (mostrando === 2) {
        btnCarrosel1.style.color = "#ffa500"
        btnCarrosel2.style.color = "#fff"
        img2.style.display = "none";
        img1.style.display = "block";
        mostrando = 1;
    }
});
// function popUp pro form
let InputNome = document.getElementById("InputNome")
let InputSobrenome = document.getElementById("InputSobrenome")
let InputEmail = document.getElementById("InputEmail")
let InputDescricao = document.getElementById("InputDescricao")
let PopUpMsg = document.getElementById("MsgEnviado")
let form = document.querySelector('form')
let btnEnviar = document.getElementById("btnEnviar")
btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();
    if (
        InputNome.value == ""||InputSobrenome.value == "" ||
        InputEmail.value == ""||InputDescricao.value == ""
    ) {
        alert("há campos não preenchidos");
    } else {
        PopUpMsg.style.display = "block";
        form.style.visibility = "hidden";
        setTimeout(() => {
            PopUpMsg.style.display = "none";
            form.style.visibility = "visible";
        }, 1000);
        form.reset(); // limpa campos
    }
});

