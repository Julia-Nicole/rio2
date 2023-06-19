const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagembotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    if (modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro");

        imagembotaoTrocaDeTema.setAttribute("src", "./src/imagens/passarinho.png");
    } else {
        body.classList.add("modo-escuro")
        imagembotaoTrocaDeTema.setAttribute("src", "./src/imagens/outropassaro.png");
    }
});

