document.addEventListener('DOMContentLoaded', function() {
    scrollNav();

    lightbox.option({
        disableScrolling: true
    })
});


// Variables
let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');

let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-nav');
let cerrado = true;



function scrollNav() {

    const enlaces = document.querySelectorAll('.enlaces a');

    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });

    });
}

function menus() {
    let desplazamiento_actual = window.pageYOffset;
    if (desplazamiento_actual <= 300) {
        nav.classList.remove('nav2');
        nav.classList.add('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        abrir.style.color = '#FFF';
    } else {
        nav.classList.remove('nav1');
        nav.classList.add('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color = '#000';
    }
}


function apertura() {
    if (cerrado) {
        menu.style.width = '70vw';
        cerrado = false;
    } else {
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}





window.addEventListener('load', function() {
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});

window.addEventListener('scroll', function() {
    menus();
});


// Menu 
window.addEventListener('resize', function() {
    if (screen.width >= 700) {
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

abrir.addEventListener('click', function() {
    apertura();
});

window.addEventListener('click', function(e) {
    if (cerrado == false) {
        let span = document.querySelector('span');
        if (e.target !== span && e.target !== abrir) {
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});