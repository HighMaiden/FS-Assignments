const input1 =document.querySelector('.input')
const btn1 =document.querySelector('.btn')
const sonuc =document.querySelector('.sonuc')
const p =document.querySelector('p')
const random = Math.floor(Math.random()*100)+1
let counter =7
// console.log(input1.value);

btn1.addEventListener("click",()=>{
if(counter>0){
 if(input1.value ==random){
    sonuc.value =(`Kazandiniz`);
 }
 else if(input1.value > random){
    sonuc.value =(`Daha kucuk bir sayi giriniz`);

 }
 else{
 sonuc.value=(` Daha buyuk bir sayi giriniz`);
 }

    console.log(input1.value);
 }
counter--
else {
    p.innerHTML=`Hakkiniz kalmadi, Result: ${random}`
   sonuc.value =`Game Over`
}
p.innerHTML=`${counter} hakkiniz kaldi.`
input1.focus()


})
