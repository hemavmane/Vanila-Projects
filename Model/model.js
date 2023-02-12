let btn1=document.getElementById("btn")
let btn2 =document.querySelector(".close")
let model_content = document.querySelector(".model_container")


btn1.addEventListener("click",()=>{
model_content.classList.toggle("model")
})

btn2.addEventListener("click",()=>{
 model_content.classList.toggle("model")
})