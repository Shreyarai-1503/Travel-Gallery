const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')

menuToggle.addEventListener('click', () =>{
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})

let next = document.querySelector(".next")
let prev = document.querySelector(".prev")

next.addEventListener('click', () => {
    let items = document.querySelectorAll(".item")
    document.querySelector(".slider").appendChild(items[0])
})

prev.addEventListener('click', () => {
    let items = document.querySelectorAll(".item")
    document.querySelector(".slider").prepend(items[items.length - 1])
})