let open1=document.querySelector(".open-menu")
let bar=document.querySelector(".drop")

open1.addEventListener('click',()=>{
    bar.style.cssText=`transform:translateY(0%)`
})