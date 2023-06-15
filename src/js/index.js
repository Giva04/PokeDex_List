// Funçao para trocar tema e adicionar classe modo-escuro,clicando no sol ou na lua
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//linkando JS no Html do Body
const body = document.querySelector("body");

// Variavel que trocar a imagem SOL/LUA
const imagemTrocaTema = document.querySelector(".imagem-botao")

//função de trocar tema pelo click
botaoAlterarTema.addEventListener("click", () =>{
    
//Verificando se esta no modo escuro pelo (contains)
const modoEscuroAtivo = body.classList.contains("modo-escuro")

// alterando imagem SOL e LUA pelo click
body.classList.toggle("modo-escuro");

if(modoEscuroAtivo) {
    imagemTrocaTema.setAttribute("src", "./imagens/sun.png");
    
} else {  
imagemTrocaTema.setAttribute("src", "./imagens/moon.png")
}
});