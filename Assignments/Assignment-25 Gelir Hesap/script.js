//*******SELECTORS*********

const gelirMiktari = document.getElementById("gelir");
const ekleBtn = document.getElementById("ekle");

//?form selectors
const harcananMiktar = document.getElementById("harcanan-miktar");
const tarihInput = document.getElementById("zaman");
const harcamaInput = document.getElementById("harcama-input");
const saveBtn = document.getElementById("save");
const tbody = document.getElementById("tbody");
//?hesaplama
const geliriniz = document.getElementById("geliriniz");
const gideriniz = document.getElementById("gideriniz");
const kalan = document.getElementById("kalan");
//?alternative for modal
// let p =document.createElement("p")
// const h1=document.getElementById("h1")
//?Button

const delBtn=document.querySelector(".delete")
const btnDel=document.createElement("button")
const temizleBtn=document.getElementById("temizle")



//?MODAL
const modalBtn =document.getElementById("modal-btn")
const modal =document.getElementById('modal')

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
  ekleme()
});


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


  window.location ="index.html"


  
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
const ekleme = ()=>{
let harcama=[]

  let newObject ={
    HarcamaYapilanYer:`${harcamaInput.value}`,
    Tarih:`${tarihInput.value}`,
    Fiyat:`${harcananMiktar.value}`,
  }
  harcama.push(newObject)




for (let i =0;i<=harcama.length;i++){
  tbody.innerHTML +=`
  <tr>
  <td> ${harcama[i].HarcamaYapilanYer}</td> 
  <td>${harcama[i].Tarih}</td> 
  <td>${harcama[i].Fiyat}</td> 
  <td class="td"><button class="del">Del</buton></td> 
  </tr>`
  
  
}

}


// const ekleme = () => {
//   const tbody = document.getElementById("tbody");
//   const tr =document.createElement("tr")
//   const td1 =document.createElement("td")
//   const td2 =document.createElement("td")
//   const td3 =document.createElement("td")
//   const td4 =document.createElement("td")

//   const text1 =document.createTextNode(tarihInput.value)
//   const text2 =document.createTextNode(harcamaInput.value)
//   const text3=document.createTextNode(harcananMiktar.value)
//   // const btnDel=document.createElement("button")
//   btnDel.classList.add("delete")
//   btnDel.textContent="❌"
  
//   td1.appendChild(text1)
//   td2.appendChild(text2)
//   td3.appendChild(text3)
//   td4.appendChild(btnDel)

//   const tbody1 =document.querySelector("#tbody").appendChild(tr).appendChild(td1)
//   const tbody2 =document.querySelector("#tbody").appendChild(tr).appendChild(td2)
//   const tbody3 =document.querySelector("#tbody").appendChild(tr).appendChild(td3)
//   const tbody4 =document.querySelector("#tbody").appendChild(tr).appendChild(td4)
  
// };
