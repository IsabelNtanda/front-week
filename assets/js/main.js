//seleção de elementos
const openmenu = document.querySelector('#open-menu');
const closeMenuBtn = document.querySelector('#close-menu')
const menu = document.querySelector('#mobile-navbar')
const desktoplinks = document.querySelectorAll('#navbar a')
const mobilelinks = document.querySelectorAll('#mobile-navbar')
const alllinks = [...desktoplinks,...mobilelinks]
console.log(alllinks)


//funções

//Eventos
openmenu.addEventListener('click', (e) => {
   menu.classList.add('menu-active')
})

closeMenuBtn.addEventListener('click', ()=>{
 menu.classList.remove('menu-active')
})
/*
[openmenu, closeMenuBtn].forEach((btn) => {
    btn.addEventListener('click', (e) =>{
        menu.classList.toggle('menu-active');
    })
    
})
*/