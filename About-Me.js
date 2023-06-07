const images = [
    "IMG_E6117.JPG",
    "IMG_E6111.JPG",
    "IMG_E6113.JPG",
    "IMG_E6114.JPG",
    "IMG_E6115.JPG",
    "IMG_E6116.JPG"
]

const size = [
    "280px",
    "150px",
    "200px",
    "300px",
    "200px",
    "300px"
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