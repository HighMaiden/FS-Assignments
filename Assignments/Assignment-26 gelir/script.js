//******SELECTORS********/


//?Gelir
const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleForm = document.getElementById("ekle-form")


//? SONUC TABLOSU
const gelirinizTd =document.getElementById("geliriniz")


//******VARIABLES********/

//?Gelir

let gelirler=""









//**********EVENTS***************/


//?EKLE EVENTS


//!Formun submit btn basildiginda
ekleForm.addEventListener("submit",(e)=>{
    e.preventDefault()  //?reload engellenir
    gelirler = Number(gelirInput.value)+Number(gelirler)//? string eklemeyi engelledik


    //?INPUT DEGERINI SIFIRLADIK
    ekleForm.reset()
 //!DEGISIKLIKLERI SONUC TABLOSUNA BASAN FUNCTION  
hesaplaVeGuncelle()
})











//***************FUNCTIONS****************/

const hesaplaVeGuncelle = ()=>{
gelirinizTd.innerText =gelirler
}