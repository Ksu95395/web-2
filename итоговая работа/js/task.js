const buttons = document.querySelectorAll(".slider__pagination button")
const elements = document.querySelectorAll(".element")

const heroPhoto = document.querySelector("#photo-hero")
const photo1 = document.querySelector("#photo1")
const photo2 = document.querySelector("#photo2")
const photo3 = document.querySelector("#photo3")
const photo4 = document.querySelector("#photo4")

buttons.forEach((button, n) =>{
    button.addEventListener("click", ()=>{
        for (let element of elements) {
            element.style.left = -140 * n + "%"
        }
        for (let button of buttons){
            button.style.opacity = "0.5"
        }
        button.style.opacity = "1"
    })
})

photo1.addEventListener("click", () => {
    heroPhoto.src = photo1.src
})
photo2.addEventListener("click", () => {
    heroPhoto.src = photo2.src
})
photo3.addEventListener("click", () => {
    heroPhoto.src = photo3.src
})
photo4.addEventListener("click", () => {
    heroPhoto.src = photo4.src
})

const links = ["#slider", "#portfolio", "#main__prise"]
nav.forEach((link, n) => {
    link.addEventListener("click", (event) => {
        event.preventDefault()
        const element = document.querySelector(links[n])
        element.scrollIntoView({ behavior: "smooth" })
    })
})

const headerBm = document.querySelector("#header__burger-menu")
const burgerMenu = document.querySelector("#burger-menu")

 burgerMenu.addEventListener("click", ()=>{
    headerBm.style.left="0px"
 })
 burgerMenu.addEventListener("click", ()=>{
    headerBm.style.left="-350px"
 })
