// Navbar Menu
const header = document.getElementById('nav-menu'),
    navClose = document.getElementById('nav-close'),
    navToggle = document.getElementById('nav-toggle');

if(navToggle){
    navToggle.addEventListener('click', function(){
        header.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', function(){
        header.classList.remove('show-menu')
    })
}



const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
