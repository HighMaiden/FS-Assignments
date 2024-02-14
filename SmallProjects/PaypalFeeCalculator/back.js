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

let result=0
const rate1=3.4 + 0.035
const rate2=2.9 + 0.035
const rate3=2.3 + 0.035
const rate4=1.9 + 0.035
const rate5=1.5 + 0.035
const rate6= 5 + 0.035
const rate7= 3.9 + 0.035
const rate8= 2.9 + 0.035
const rate9= 6 + 0.035
const rate10= 1.5 + 0.035

let FeeAmount =0
let NetAmount = 0
function calc(AmountSend){
    if(fr.value ==1 && AmountSend>= 0 && AmountSend<=2500){
        FeeAmount = (AmountSend * rate1) / 100   //! kesinti yapılacak miktar çıktısı
   
     NetAmount = miktar.value - FeeAmount
    }
    else if(fr.value==2 && AmountSend>2500 && AmountSend<=10000){
        FeeAmount = (AmountSend * rate2) / 100   //! kesinti yapılacak miktar çıktısı
   
     NetAmount = miktar.value - FeeAmount
    }
    else if(fr.value==3 && AmountSend>10000 && AmountSend<=50000){
        FeeAmount = (AmountSend * rate3) / 100   //! kesinti yapılacak miktar çıktısı
   
     NetAmount = miktar.value - FeeAmount
    }
    else if(fr.value==4 && AmountSend>50000 && AmountSend<=100000){
        FeeAmount = (AmountSend * rate4) / 100   //! kesinti yapılacak miktar çıktısı
   
     NetAmount = miktar.value - FeeAmount
    }
    else if(fr.value==5 && AmountSend>100000){
        FeeAmount = (AmountSend * rate5) / 100   //! kesinti yapılacak miktar çıktısı
   
     NetAmount = miktar.value - FeeAmount
    }
    else if(fr.value==6){
        FeeAmount = (AmountSend * rate6) / 100   //! kesinti yapılacak miktar çıktısı
   
     NetAmount = miktar.value - FeeAmount
    }
    else if(fr.value==7){
        FeeAmount = (AmountSend * rate7) / 100   //! kesinti yapılacak miktar çıktısı
   
     NetAmount = miktar.value - FeeAmount
    }
    else if(fr.value==8){
        FeeAmount = (AmountSend * rate8) / 100   //! kesinti yapılacak miktar çıktısı
   
     NetAmount = miktar.value - FeeAmount
    }
    else if(fr.value==9){
        FeeAmount = (AmountSend * rate9) / 100   //! kesinti yapılacak miktar çıktısı
   
     NetAmount = miktar.value - FeeAmount
    }
    else if(fr.value==10){
        FeeAmount = (AmountSend * rate10) / 100   //! kesinti yapılacak miktar çıktısı
   
     NetAmount = miktar.value - FeeAmount
    }
    else{
        alert("Amount is not macthing with choice of sending")
    }
}
frm.addEventListener("submit",(e) => {
    e.preventDefault(); //!sayfa yenilemesini engeller
    calc(miktar.value)
    sonuc.innerHTML=`Money Amount : ${miktar.value+'€'}, Choice : ${fr.value}, Fee Amount : ${FeeAmount+'€'}, Net Amount :  ${NetAmount+'€'}`;
// sonuc1.innerHTML=`Option: ${fr.value}`
    frm.reset();    //! form değerini resetleme
})

// const rate1= 3.4+0.035

// let FeeAmount
// function calculate(x){
//     if(fr.value==1){
//         let result3= rate1*miktar.value

        
//     }

// }


// frm.addEventListener("submit",(e) => {


//     e.preventDefault(); //!sayfa yenilemesini engeller

    
//     console.log("işlem buraya kadar oluyor");
//     // function getValue() {
//     //     let sayi = document.getElementById("amount");
//     //     let sayiValue =amount.value;
//     //     let fr1 = feerate.value
    
//     //     let result =document.getElementById("result1")
//     //     result1.innerHTML =sayiValue*fr1;
//     // }
//     sonuc.innerHTML=`Gönderilencek para miktarı : ${miktar.value} ,Choice: ${feerate.value}`;
// sonuc1.innerHTML=`"Feelerin tutari: ${miktar.value*feerate.value}`
// })




