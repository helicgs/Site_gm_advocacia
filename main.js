
let btnMenuMobile = document.querySelector('#btn-menu-mobile')
let line1 = document.querySelector('.line-n1')
let line2 = document.querySelector('.line-n2')
let menuMobile = document.querySelector('#menu-mobile')

btnMenuMobile.addEventListener("click", ()=>{
    line1.classList.toggle('ativo1')
    line2.classList.toggle('ativo2')
    menuMobile.classList.toggle('abrir')
})