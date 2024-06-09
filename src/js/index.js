const botaoDireito = document.getElementById("seta-direita");

const botaoEsquerdo = document.getElementById("seta-esquerda")

let cartaoAtual = 0;

const cartoes = document.querySelectorAll(".cartao");

botaoDireito.addEventListener("click", function (){
    const ultimoCartao = cartaoAtual === cartoes.length - 1;
    if (ultimoCartao) return;

    esconderCartoesSelecionado();

    cartaoAtual++;

    mostrarCartaoSelecionado();

})


botaoEsquerdo.addEventListener("click", function (){

    const primeiroCartao = cartaoAtual === 0;
    if (primeiroCartao) return;

    esconderCartoesSelecionado();

    cartaoAtual--;

    mostrarCartaoSelecionado();

})


function mostrarCartaoSelecionado() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartoesSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");

    cartaoSelecionado.classList.remove("selecionado");
}

