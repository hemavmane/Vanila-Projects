
const value=document.querySelector(".value")
const btn1 =document.querySelector(".btn1")
const btn2 =document.querySelector(".btn2")
const btn3 =document.querySelector(".btn3")
let count = 0;

  btn3.addEventListener("click",function(e){
count++
value.innerText=count
value.style.color="green"

  })

  btn2.addEventListener("click",function(e){
    count=0
    value.innerText=count

    value.style.color="black"
    
      })
    

      btn1.addEventListener("click",function(e){
        count--
        value.innerText=count
        value.style.color="red"
        
       
        
          })
        



