const  btn = document.getElementById("btn");
const color=document.querySelector(".color");
const body=document.querySelector('body');
const h1 =document.querySelector(`h1`)


body.style.backgroundColor ='red'
const colorsArray=['red','green','yellow','pink','purple','blue']

btn.addEventListener('click',function(){
// h1.style.fontSize='3rem'
// body.style.backgroundColor ='blue'
const randomNum= Math.floor(Math.random()*colorsArray.length)
body.style.backgroundColor= colorsArray[randomNum]
color.innerHTML=colorsArray[randomNum]


})
