'use strict'

$(document).ready(function () {
    $('.header__slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="header__slider-leftBtn slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="header__slider-rightBtn slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {}
            },
            {
                breakpoint: 600,
                settings: {}
            },
            {
                breakpoint: 480,
                settings: {}
            }
        ]
    });
});

// ----------hamburger----------
const hamburger = document.querySelector('.header__menu-hamburger'),
    closeModal = document.querySelector('.header__menu-close'),
    links = [...document.querySelectorAll('.header__menu-item')],
    wrapper = document.querySelector('.header__menu-wrapper');

hamburger.addEventListener('click', () => {
    wrapper.classList.add('header__menu-wrapper--active');
});

closeModal.addEventListener('click', () => {
    wrapper.classList.remove('header__menu-wrapper--active')
});

links.forEach(e => {
    e.addEventListener('click', () => {
        wrapper.classList.remove('header__menu-wrapper--active')
    })
});