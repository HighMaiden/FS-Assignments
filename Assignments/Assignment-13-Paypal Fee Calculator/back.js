const miktar = document.getElementById("amount");
let frm =document.getElementById("payform")
let sonuc =document.getElementById("result")
const  fr =document.getElementById("feerate")
let sonuc1 =document.getElementById("result1")

// frm.addEventListener("btns",(e)=>{

//     e.preventDefault();  //! sayfa yenilenmesini engeller

//     console.log('bu yaziliyor mu?');

//     sonuc.innerHTML=`Gonderilecek para miktari :${amount.value}`;
// })


const rate1= 3.4+0.035

let kesintiMiktari
function calculate(x){
    if(fr.value==1){
        let result3= rate1*miktar.value

        
    }

}


frm.addEventListener("submit",(e) => {


    e.preventDefault(); //!sayfa yenilemesini engeller

    
    console.log("işlem buraya kadar oluyor");
    // function getValue() {
    //     let sayi = document.getElementById("amount");
    //     let sayiValue =amount.value;
    //     let fr1 = feerate.value
    
    //     let result =document.getElementById("result1")
    //     result1.innerHTML =sayiValue*fr1;
    // }
    sonuc.innerHTML=`Gönderilencek para miktarı : ${miktar.value} ,Choice: ${feerate.value}`;
sonuc1.innerHTML=`"Feelerin tutari: ${miktar.value*feerate.value}`
})




