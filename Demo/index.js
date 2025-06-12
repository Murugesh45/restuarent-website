var btn=document.getElementById("nav1")
var menu=document.getElementById("navbar")
var card=document.getElementById("nav2")
btn.addEventListener("click",function(){
   menu.style.display="block"
   btn.style.display="none"
   card.style.display="block"
})
card.addEventListener("click",function(){
    menu.style.display="none"
    btn.style.display="block"
    card.style.display="none"
})