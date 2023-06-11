let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}


const images = [
    "IMG_E6163.JPG",
    "IMG_E6158.JPG",
    "IMG_E6113.JPG",
    "IMG_E6114.JPG",
    "IMG_E6157.JPG",
    "IMG_E6116.JPG",
    "IMG_E6110.JPG"
]

const size = [
    "450px",
    "400px",
    "200px",
    "300px",
    "400px",
    "300px",
    "250px"
]


let i = 0

function placeImage(x, y) {

    const nextImage = images[i]

    const img = document.createElement("img")
    img.setAttribute("src", nextImage)
    img.style.width = size[i]
    img.style.left = x + "px"
    img.style.top = y + "px"
    


    document.body.appendChild(img)

    i = i + 1

    if (i>= images.length) {
        i = 0
    } 
}

let count = 0

const aboutMe = document.querySelector('.about-me')

aboutMe.addEventListener("click", function (event) {
    event.preventDefault()
    count ++
    console.log(count)
    if (count <= images.length) {
    placeImage(event.pageX, event.pageY)
    }
})

console.log(aboutMe)




document.addEventListener("touchend", function (event) {
    event.preventDefault
    placeImage(event.pageX, event.pageY)
})

