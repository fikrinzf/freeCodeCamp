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