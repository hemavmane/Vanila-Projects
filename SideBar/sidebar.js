let btn =document.getElementById("sidebar_btn")
let main = document.querySelector("main")
let btn2 =document.querySelector(".close")


btn.addEventListener("click",()=>{
    main.classList.toggle("bar")
})

btn2.addEventListener("click",()=>{
main.classList.toggle("bar")
})


