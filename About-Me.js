let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}


const images = [
    "IMG_E6117.JPG",
    "IMG_E6111.JPG",
    "IMG_E6113.JPG",
    "IMG_E6114.JPG",
    "IMG_E6115.JPG",
    "IMG_E6116.JPG",
    "IMG_E6110.JPG"
]

const size = [
    "280px",
    "150px",
    "200px",
    "300px",
    "200px",
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



document.addEventListener("click", function (event) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY)
})


document.addEventListener("touchend", function (event) {
    event.preventDefault
    placeImage(event.pageX, event.pageY)
})





// // <header class="header">
// {/* <div class="name-logo">
//     <a href="Home-Page.html" rel="norefferer noopener"><span class="first">𝐚𝐧𝐧𝐚</span><span class="last">𝐤𝐮𝐳𝐦𝐢𝐧</a>
//   </div> */}

// // <nav class="navbar">
// // <a class="links">
// //     <a href="About-Me.html" rel="norefferer noopener">About Me</a>
// //     <a href="Resume.html" rel="norefferer noopener">Resume</a>
// //     <a href="Projects.html" rel="norefferer noopener">Projects</a>
// // </a>
// // </div>
// // </nav>
// // </header>