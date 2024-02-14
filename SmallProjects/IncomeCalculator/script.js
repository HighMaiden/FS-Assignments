//******SELECTORS********/

//?Gelir
const ekleBtn = document.getElementById("ekle-btn");
const gelirInput = document.getElementById("gelir-input");
const ekleForm = document.getElementById("ekle-form");

//? SONUC TABLOSU
const gelirinizTd = document.getElementById("geliriniz");
const giderinizTd = document.getElementById("gideriniz");
const kalanTd = document.getElementById("kalan");

//?HARCAMA FORMU

const harcamaFormu = document.getElementById("harcama-form");
const tarihInput = document.getElementById("tarih");
const miktarInput = document.getElementById("miktar");
const harcamaAlaniInput = document.getElementById("harcama-alani");

//?HARCAMA TABLOSU

const harcamaBody = document.getElementById("harcama-body");

//?TEMIZLE BTN
const temizleBtn = document.getElementById("temizle");

//******VARIABLES********/

//?Gelir

let gelirler = 0;

let harcamaListesi = [];

//**********EVENTS***************/

//?EKLE EVENTS

//!Formun submit btn basildiginda
ekleForm.addEventListener("submit", (e) => {
  e.preventDefault(); //?reload engellenir
  gelirler = Number(gelirInput.value) + Number(gelirler); //? string eklemeyi engelledik

  
  //?GELIRLERIN KALICI OLMASI ICIN LOCALSTORAGE'E KOPYALADIK

  localStorage.setItem("gelirler", gelirler);

  //?INPUT DEGERINI SIFIRLADIK

  ekleForm.reset();

  //!DEGISIKLIKLERI SONUC TABLOSUNA BASAN FUNCTION

  //? DEGISIKLIKLERI SONUC TABLASUNA YAZDIRAN FONKS.
  hesaplaVeGuncelle();
});

//!SAYFA HER YUKLENDIKTEN SONRA CALISAN EVENT
window.addEventListener("load", () => {
  //? GELIRLER BILGISINI LOCAL STORAGE'DAN OKUYARAK GLOBAL DEGISKENIMIZE YAZDIRMA

  gelirler = Number(localStorage.getItem("gelirler"));

  //?LOCAL STORAGE'DEN HARCAMA LISTESINI OKUYARAK GLOBAL DIZIMIZE SAKLIYORUZ

  harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || [];

  //?HARCAMA DIZISININ ICINDEKI OBJELERI TEK TEK DOMA YAZIYORUZ

  harcamaListesi.forEach((harcama) => harcamayiDomaYaz(harcama));

  tarihInput.valueAsDate = new Date(); //?BUGUNUN TARIHINI BASAR HER SEFERINDE

  //? DEGISEN BILGILERI HESAPLA DOM'a BAS

  hesaplaVeGuncelle();
});

//! HARCAMA FORMU SUBMIT OLUNCA CALISIR
harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault();

  const yeniHarcama = {
    id: new Date().getTime(), //? Sistem saatini (ms olarak) verir.Unique gibidir.
    tarih: tarihInput.value,
    alan: harcamaAlaniInput.value,
    miktar: miktarInput.value,
  };
  //? YENI HARCAMA OBJESINI DIZIYE EKLE
  harcamaListesi.push(yeniHarcama);

  //?DIZININ SON HALINI LOCALSTORAGE'E GONDERIR
  localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi));

  harcamayiDomaYaz(yeniHarcama);

  //?FORMDAKI VERILERI SIL
  harcamaFormu.reset();
  tarihInput.valueAsDate = new Date();
});

//!OBJECTLERIN ID'SININ OLMASI DOMDA VERILERIN KULLANIMINI KOLAYLASTIRIR

//***************FUNCTIONS****************/

const hesaplaVeGuncelle = () => {
  const giderler = harcamaListesi.reduce(
    (toplam, harcama) => toplam + Number(harcama.miktar),
    0
  );
  giderinizTd.innerText = giderler;
  gelirinizTd.innerText = gelirler;
  kalanTd.innerText = gelirler - giderler;
};
//!GELN OBJEYI YOLDA ACARIS PARAMETRE OLARAK ALARAK
const harcamayiDomaYaz = ({ id, miktar, tarih, alan }) => {
  harcamaBody.innerHTML += `
<tr>                 
<td>${tarih}</td>
<td>${alan}</td>
<td>${miktar}</td>
<td><i id=${id} type="button" class="fa-solid fa-trash-can text-danger"></i></td>
</tr>
`;
};

harcamaBody.addEventListener("click", (e) => {
  //?EVENT BIR SIL BUTONU HALINE GELDI ISE
  if (e.target.classList.contains("fa-trash-can")) {
    //?DOM'DAN ILGILI TR'YI(TABLE ROW) SILDIK
    e.target.parentElement.parentElement.remove();
    const id = e.target.id;

    //?DIZIDEKI ILGILI OBJEYI SILDIK

    harcamaListesi = harcamaListesi.filter((harcama) => harcama.id != id);

    //? SILINMIS YENI DIZIYI LOCAL STORAGE AKTARDIK
    localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi));
    //?HER SATIR SILINDIKTEN SONRA YENI DEGERLERI HESAPLA VE DOM'A YAZ
    hesaplaVeGuncelle();
  }
});

temizleBtn.addEventListener("click", () => {
  if (confirm("Silmek istediginize emin misiniz?")) {
    harcamaListesi = []; //?RAM'deki harcama listesini sil
    gelirler = 0; //?RAM'deki gelirleri sil
    localStorage.clear(); //?Local storage'deki tum verileri sil
    harcamaBody.innerHTML = ""; //?Dom'daki tum harcamalari sil

    //?SILDIGIMIZ DEGERLERI GUNCELLEMEK ICIN
    hesaplaVeGuncelle(); //?sonuc tablasundaki(DOM) gelirler,giderler ve kalan degerleri sil.}
  }
});
