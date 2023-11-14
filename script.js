
//declarando a variavel e usando o DOM(document Object Manager)
const menu = document.querySelector('nav')

function ativaScroll(){
    menu.classList.toggle('ativo',scrollY >50);
}
//ao fazer o scroll ele executa a função
window.addEventListener('scroll',ativaScroll)