//Card animation
const cardContainer = document.querySelector('.card-container');
const card = document.querySelector('.card')
let stackLogo = document.querySelector('.card-image');
let stackInfo = document.querySelector('.info');
let stackLevel = document.querySelector('.level');
let brainImg = document.querySelector('#frame');

brainImg.addEventListener('mouseenter', () => animateLogosIn());

let logos = document.querySelectorAll('.stack-logo');

function animateLogosIn() {
    let i = 0;
    while (i < logos.length) {
        logos[i].classList.add('show-and-rotate')
        i++;
    }
    setInterval(rotate, 4000);
    }

function rotate() {
    let rnd = Math.abs(Math.floor((Math.random() * logos.length)));
    logos[rnd].classList.toggle('rotate')
    logos[rnd].classList.remove('show-and-rotate', 'invisible');
    }


function scrollToTop() {
    let top = document.getElementById("topBtn");

    top.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            top.style.display = "block";
        } else {
            top.style.display = "none";
        }
    }
    }

const mobileMenuSlide = () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
}


function app() {
    mobileMenuSlide();
    scrollToTop();
}

app();



