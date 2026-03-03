let addtocartbutton1element = document.querySelector("#addtocart1")
let addtocartbutton2element = document.querySelector("#addtocart2")
let addtocartbutton3element = document.querySelector("#addtocart3")
let addtocartbutton4element = document.querySelector("#addtocart4")

function storeshopitem1() {
    localStorage.setItem(localStorage.length, "Alpenwasser Mineral – 1.49€")
}

function storeshopitem2() {
    localStorage.setItem(localStorage.length, "Alpenwasser ohne – 0.99€")
}

function storeshopitem3() {
    localStorage.setItem(localStorage.length, "Alpenwasser Premium – 2.99€")
}

function storeshopitem4() {
    localStorage.setItem(localStorage.length, "Alpenwasser Apfelsaft – 1.99€")
}

addtocartbutton1element.addEventListener("click", storeshopitem1)
addtocartbutton2element.addEventListener("click", storeshopitem2)
addtocartbutton3element.addEventListener("click", storeshopitem3)
addtocartbutton4element.addEventListener("click", storeshopitem4)