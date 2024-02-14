//*******SELECTORS*********

const gelirMiktari = document.getElementById("gelir");
const ekleBtn = document.getElementById("ekle");

//?form selectors
const harcananMiktar = document.getElementById("harcanan-miktar");
const tarihInput = document.getElementById("zaman");
const harcananYer = document.getElementById("harcama-input");
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

const temizleBtn = document.getElementById("temizle");

//?MODAL

const modal = document.getElementById("modal");

//***********EVENTS*****************

const gelirler = [];
const giderler = [];
let total_gelir = 0;
let total_gider = 0;

ekleBtn.addEventListener("click", () => {
  if (
    gelirMiktari.value != "" 
  ) {
    gelir();
    gelirMiktari.value = "";
    gelirMiktari.focus();
    rest();
  } else {
    alert("Gelir miktari giriniz");
  }
});

saveBtn.addEventListener("click", () => {
  if (harcananMiktar.value != "" &&
    harcananYer.value != "" &&
    tarihInput.value != "") {
    hesap();
    ekleme();
    harcananMiktar.value = "";
    harcananYer.value="";
    rest();
    harcananMiktar.focus();
  }
});

//? Display None function
const hidden = () => {
  modal.style.display = "none";
};
//? Modal event listener
tbody.addEventListener("click", (e) => {
  if (e.target.id == "del") {
    tbody.lastElementChild.remove();
    modal.style.display = "block";
    setTimeout(hidden, 3000);
  }
});

//?Alternative
// btnDel.addEventListener("click",(e)=>{

//   modal.style.display ="block"

// timer()
// setTimeout(displayNone,2000)

// })

// const timer =()=>{

//   h1.after(p)
//   p.textContent="Harcamaniz silinmistir 👍"
//   p.classList.add("par")

// }

temizleBtn.addEventListener("click", () => {
  window.location = "index.html";
});
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
  // ekleme();
};
const rest = () => {
  kalan.textContent = total_gelir - total_gider;
};
const ekleme = () => {
  let harcama = [];

  let newObject = {
    harcamaYapilanYer: `${harcananYer.value}`,
    tarih: `${tarihInput.value}`,
    fiyat: harcananMiktar.value,
  };
  harcama.push(newObject);

  for (let i = 0; i <= harcama.length; i++) {
    tbody.innerHTML += `
  <tr>
  <td> ${harcama[i].harcamaYapilanYer}</td> 
  <td>${harcama[i].tarih}</td> 
  <td>${harcama[i].fiyat}</td> 
  <td class="td"><button id="del" class="del">Del</buton></td> 
  </tr>`;
  }
};

function getDateTime() {
  const time = new Date();
  const year = time.getFullYear();
  return `${year}`;
}

// tarihInput.value =getDateTime()
console.log(getDateTime());
// const delBtn=document.querySelector(".delete")
// const btnDel=document.createElement("button")
// const ekleme = () => {
//   const tbody = document.getElementById("tbody");
//   const tr =document.createElement("tr")
//   const td1 =document.createElement("td")
//   const td2 =document.createElement("td")
//   const td3 =document.createElement("td")
//   const td4 =document.createElement("td")

//   const text1 =document.createTextNode(tarihInput.value)
//   const text2 =document.createTextNode(harcananYer.value)
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


// myDate.max = `${new Date()
//   .toLocaleDateString("en-ca")
//   .replaceAll(".", "-")}T23:59:00`; //inputun max attribute u değer olarak bekledği tarih formatına uyarladık => 2023-01-20T23:59:00

// const month =
//   new Date().getMonth() < 9
//     ? "0" + (Number(new Date().getMonth()) + 1)
//     : Number(new Date().getMonth()) + 1; //getMonth() metodu 0 - 11 arasında değer döndüğü için burada algoritma kurup içinde bulunduğumuz ayın tek haneli olup olmadığını yakalyıp tek haneliyse başına 0 ekliyoruz ve gelen değere asıl ayı bulmak için 1 ekliyoruz.

// myDate.min = `${new Date().getFullYear()}-${month}-01T00:00:00`; //gün ve saat sabit olduğu için ay ve yıl bilgisini dinamik bir şekilde alıyoruz