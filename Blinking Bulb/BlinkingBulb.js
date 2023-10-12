document.addEventListener("DOMContentLoaded",function(){

//Blinking bulb
setInterval(async function(){
let inc=document.querySelector(".balab").classList.toggle("blb2") //function used to add or remove memebership of element to the given  class
if(!inc){document.body.style.background='black'}
else{ document.body.style.backgroundColor='#FCFFC2'}
},1000)

})