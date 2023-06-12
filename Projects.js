let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}






const header = document.querySelector("header");
const secOne = document.querySelector(".main-header");
const secOneOptions = {}

const secOneObserver = new IntersectionObserver(function(
    entries, secOneObserver
    ) {
        entries.forEach(entry => {
            // console.log(entry.target);

            if(!entry.isIntersecting) {
                header.classList.add("nav-scrolled");
            } else {
                header.classList.remove("nav-scrolled");
            }
        });
}, 
secOneOptions);

secOneObserver.observe(secOne);



var icon = document.getElementById('icon');
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        icon.src = "sun.png";
    } else {
        icon.src = "moon.png";
    }
}

// const faders = document.querySelectorAll('.fade-in');
// const appearOptions = {
//     threshold: 1,
//     rootMargin: "0px 0px -100px 0px"
// };

// const appearOnScroll = new IntersectionObserver (function(entries, appearOnScroll) {
//     entries.forEach(entry => {
//         if(!entry.isIntersecting) {
//             return;
//         } else {
//             entry.target.classList.add('appear');
//             appearOnScroll.unobserve(entry.target);
//         }
//     });
// }, 
// appearOptions);


// faders.forEach(fader => {
//     appearOnScroll.observe(fader);
// })











window.addEventListener('scroll', () => {
    let content = document.querySelector('.card');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if (contentPosition < screenPosition) {
       content.classList.add('.active')
    }
});



const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', checkCards);

checkCards();

function checkCards() {
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}





// const bg = document.getElementById('header');
// window.addEventListener('scroll', function(){
//     bg.style.backgroundSize = 160 - +this.window.pageYOffset/12+'%';
//     bg.style.opacity = 1 - +this.window.pageYOffset/700+'';
// })