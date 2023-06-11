
// const input = document.getElementById("input");
// const btn = document.getElementById("button");
// const error = document.getElementById("error");
// let hak = document.getElementById("hak");
// let pcValue = 0;
// let attempts = 4;
// const saveUserNum =[]


// //kullanıcı aynı sayıyı girdiğinde hakkından düşmesin ve giridiği sayıyı kontrol etsin uyarı verisn bu sayıyı daha önce girdiniz desin.
// //kullanıcının girdiği sayı pcden büyükse user.value max değer olacak (0-user value ) arası değer olacak. min-max arası değerler dinamik hale gelecek.
// //hak bittiği zaman veya kazandığı zaman buton event reload (refresh) işlemi olacak.


// btn.addEventListener("click", (e) => {

//   pcValue = Math.floor(Math.random() * 100) + 1;

//   if (input.value < 0 || input.value > 100) {

//     error.innerHTML = "Lütfen 1 - 100 arasinda değer giriniz";
//     error.style = "color:red";

//   } else {

//     if (attempts) {
//       saveUserNum.push(input.value)
      
//      if(saveUserNum.includes()){
//       alert("bu sayiyi girdiniz")
    
//      }else{
//       hak.innerHTML=Number(attempts--)

//       if (input.value > pcValue) {

//         error.innerHTML = "Daha küçük bir sayi giriniz";
//         input.value = "";
//         // input.value.focus();

//       } else if (input.value < pcValue) {

//         error.innerHTML = "Daha büyük bir sayi giriniz";
//         input.value = "";
//         // input.value.focus();

//       } else if (input.vale == pcValue) {

//         error.innerHTML = "Tebrikler bildiniz";
//         error.style = "color: green; font-size: 50px";
//       }}
//     } else {

//       error.innerHTML = "Maalesef hiç hakkniz kalmamiştir.";
      
//       hak.innerHTML=Number(attempts--)

//       btn.style = "display: none";

//     }
//   }
// });




const textarea = document.querySelector("#textarea");
const btn = document.querySelector("#btn");

let par = document.createElement("p");

btn.addEventListener("click", () => {
  
  const text = document.createTextNode(textarea.value);
  par.appendChild(text);
  btn.after(par);
console.log(typeof text);
console.log(typeof text.textContent);
const result = text.textContent.split(" ")

let a = ""

for(let i=0 ;i< result.length;i++){
   a +=  result[i][0].toLocaleUpperCase() + result[i].slice(1) + " "

}
  par.textContent= a

});