const bg = document.getElementById('header');
window.addEventListener('scroll', function(){
    bg.style.backgroundSize = 160 - +this.window.pageYOffset/12+'%';
    bg.style.opacity = 1 - +this.window.pageYOffset/600+'';
})