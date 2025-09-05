//function popUp ul
let btnProdutos = document.getElementById("produtos")
let popUp = document.getElementById("popUp")

btnProdutos.addEventListener("click" , function(){
    popUp.classList.toggle("ativo")
})

// função carrosel

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let mostrando = 1; // começa na img1

document.getElementById("avancaCarrosel").addEventListener("click", () => {
    if (mostrando === 1) {
        img1.style.display = "none";
        img2.style.display = "block";
        mostrando = 2;
    }
});

document.getElementById("voltaCarrosel").addEventListener("click", () => {
    if (mostrando === 2) {
        img2.style.display = "none";
        img1.style.display = "block";
        mostrando = 1;
    }
});

// function popUp pro form

let msgEnviada = document.getElementById("MsgEnviado")
let form = document.querySelector('form')
let InputNome = document.getElementById("InputNome")
let InputSobrenome = document.getElementById("InputSobrenome")
let InputEmail = document.getElementById("InputEmail")
let InputDescricao = document.getElementById("InputDescricao")

let btnEnviar = document.getElementById("btnEnviar")
let contador = 0;

btnEnviar.addEventListener("click" , (e)=>{
    e.preventDefault();
    msgEnviada.style.display = "block"
    
    InputNome.value = ""
    InputSobrenome.value = ""
    InputEmail.value = ""
    InputDescricao.value = ""
    
    const idIntervalo = setInterval(() => {
        msgEnviada.style.visibility = "visible"
        
        
        contador++;
        if (contador === 1) {
            msgEnviada.style.visibility = "hidden"
            clearInterval(idIntervalo);
        }
    }, 1000);

    form.style.visibility = "visible"
})

