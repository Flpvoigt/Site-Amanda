const menuMobile = document.getElementById("menu-mobile");
const nav = document.getElementById("nav");


// ABRIR MENU MOBILE

menuMobile.addEventListener("click", () => {

    nav.classList.toggle("ativo");

});


// FECHAR MENU AO CLICAR EM UM LINK

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("ativo");

    });

});


const formulario = document.getElementById("form-contato");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();


        // PEGAR DADOS

        const nome = document
            .getElementById("nome")
            .value;


        const email = document
            .getElementById("email")
            .value;


        // SALVAR O NOME TEMPORARIAMENTE

        localStorage.setItem(
            "nomePaciente",
            nome
        );


        // REDIRECIONAR

        window.location.href = "atuacao.html";

    });

}


// HEADER AO ROLAR

const header = document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});