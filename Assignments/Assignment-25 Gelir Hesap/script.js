//*******SELECTORS*********

const gelirMiktari = document.getElementById("gelir");
const ekleBtn = document.getElementById("ekle");
const saveBtn = document.getElementById("save");
//?form selectors
const harcananMiktar = document.getElementById("harcanan-miktar");
const tarihInput = document.getElementById("zaman");
const harcamaInput = document.getElementById("harcama-input");
// const tbody = document.getElementById("tbody");

const geliriniz = document.getElementById("geliriniz");
const gideriniz = document.getElementById("gideriniz");
const kalan = document.getElementById("kalan");
let p =document.createElement("p")

const delBtn=document.querySelector(".delete")
const btnDel=document.createElement("button")
const temizleBtn=document.getElementById("temizle")

// const form=document.getElementById("myform")
const h1=document.getElementById("h1")

//***********EVENTS*****************

const gelirler = [];
const giderler = [];
let total_gelir = 0;
let total_gider = 0;

ekleBtn.addEventListener("click", () => {
  if (gelirMiktari.value != "") {
    gelir();
    gelirMiktari.value = "";
    gelirMiktari.focus();
    rest();
  }
});

saveBtn.addEventListener("click", () => {
  if (harcananMiktar.value != "") {
    hesap();
  }
  harcananMiktar.value = "";
  harcananMiktar.focus();
  rest();
});
const modalBtn =document.getElementById("modal-btn")
const modal =document.getElementById('modal')

modalBtn.addEventListener("click",()=>{

modal.style.display= "none"

})
btnDel.addEventListener("click",(e)=>{

  modal.style.display ="block"



// timer()
// setTimeout(displayNone,2000)

})


// const displayNone=()=>{
//   p.style.display ="none"
// }
// const timer =()=>{

//   h1.after(p)
//   p.textContent="Harcamaniz silinmistir 👍"
//   p.classList.add("par")
  
// }

temizleBtn.addEventListener("click",()=>{


  window.Location ="index.html"

  // temizle()
  
})
//***********FUNCTIONS**************/

const gelir = () => {
  gelirler.push(Number(gelirMiktari.value));
  total_gelir = gelirler.reduce((a, i) => a + i, 0);
  geliriniz.textContent = total_gelir;
};

const hesap = () => {
  giderler.push(Number(harcananMiktar.value));
  total_gider = giderler.reduce((a, i) => a + i, 0);
  gideriniz.textContent = total_gider;
  ekleme();
};
const rest =()=>{
  kalan.textContent= total_gelir-total_gider

}
// const temizle= ()=>{
//   form.reset();
// }

const ekleme = () => {
  const tbody = document.getElementById("tbody");
  const tr =document.createElement("tr")
  const td1 =document.createElement("td")
  const td2 =document.createElement("td")
  const td3 =document.createElement("td")
  const td4 =document.createElement("td")

  const text1 =document.createTextNode(tarihInput.value)
  const text2 =document.createTextNode(harcamaInput.value)
  const text3=document.createTextNode(harcananMiktar.value)
  // const btnDel=document.createElement("button")
  btnDel.classList.add("delete")
  btnDel.textContent="❌"
  
  td1.appendChild(text1)
  td2.appendChild(text2)
  td3.appendChild(text3)
  td4.appendChild(btnDel)

  const tbody1 =document.querySelector("#tbody").appendChild(tr).appendChild(td1)
  const tbody2 =document.querySelector("#tbody").appendChild(tr).appendChild(td2)
  const tbody3 =document.querySelector("#tbody").appendChild(tr).appendChild(td3)
  const tbody4 =document.querySelector("#tbody").appendChild(tr).appendChild(td4)
  
};

