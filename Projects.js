let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}


// window.addEventListener('scroll', () => {
//     let content = document.querySelector('.card');
//     let contentPosition = content.getBoundingClientRect().top;
//     let screenPosition = window.innerHeight;
//     if (contentPosition < screenPosition) {
//        content.classList.add('.active')
//     }
// });



// const cards = document.querySelectorAll('.card');

// window.addEventListener('scroll', checkCards);

// checkCards();

// function checkCards() {
//     const triggerBottom = window.innerHeight / 5 * 4;

//     cards.forEach(card => {
//         const cardTop = card.getBoundingClientRect().top;
//         if (cardTop < triggerBottom) {
//             card.classList.add('show');
//         } else {
//             box.classList.remove('show');
//         }
//     });
// }





// const bg = document.getElementById('header');
// window.addEventListener('scroll', function(){
//     bg.style.backgroundSize = 160 - +this.window.pageYOffset/12+'%';
//     bg.style.opacity = 1 - +this.window.pageYOffset/700+'';
// })