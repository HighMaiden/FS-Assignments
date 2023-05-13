// 1- 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını ternary yapı ile konsola yazdıran kodu yazınız. (ternary)

// 2- Bir dersten alınan notun harfini aşağıdaki duruma göre konsola yazdırınız? 
//  Not:
//  90'dan büyükse AA.
// - 80'den büyük yada 90'a eşitse AB,
// - 70'den büyük yada 80'a eşitse BB,
// - 60'den büyük yada 70'a eşitse BC,
// - 50'den büyük yada 60'a eşitse CC,
// - 40'den büyük yada 50'a eşitse CD,
// - 30'den büyük yada 40'a eşitse DD,
// - 30'dan küçük yada eşitse FF ,

// 3- Artık yıl sorusu
// Artık yıl, bir yıldaki günlerin 365 yerine 366 gün olmasına denir. Bu fazladan gün (artık gün), normalde 28 gün olan şubat ayına 29 Şubat’ın eklenmesi ile elde edilir.  Bunun hesaplanması için aşağıdaki algoritma kullanılır.

// Bir tarih 4 ile tam bölünüp 100 katları ile tam bölünemiyorsa, ve yıl 400 sayısına tam bölünüyorsa artık yıldır. BU iki şartın dışında yılarda şubat ayı 28 gün, artık yıllarda 29 gün olarak belirlenir.

// Yukarıdaki bilgilere göre bir yılın artık yıl olup olmadığını konsola yazdıran conditional statement'i yazınız. 



// const secmen = +prompt('Oy kullanabilmek icin yasinizi giriniz: ')

// const sonuc= secmen >= 18 ?  alert('Oy kullanabilirsiniz') : alert('Oy kullanamazsiniz')
//  console.log(sonuc)

// let ders_notu = +prompt("Notunuzu giriniz")
//  if (ders_notu < 0 || ders_notu > 100){
// alert( `Notunuz 0 dan kucuk yada 100 den buyuk olamaz`

// )
//  }
// else if( ders_notu > 90) {
//  sonuc = alert("Notunuz AA") }
// else if( ders_notu > 80  || ders_notu ==90) {
//   sonuc = alert("Notunuz AB")
// }
// else if(ders_notu > 70 || ders_notu == 80) {
//   sonuc = alert(" Notunuz BB")
// }
// else if(ders_notu > 60 || ders_notu == 70) {
//   sonuc = alert(" Notunuz BC")
// }else if(ders_notu > 50 || ders_notu == 60) {
//   sonuc = alert(" Notunuz CC")
// }else if(ders_notu > 40 || ders_notu == 50) {
//   sonuc = alert(" Notunuz CD")
// }
// else if(ders_notu > 30 || ders_notu == 40) {
//   sonuc = alert(" Notunuz DD")
// }
// else if( ders_notu <=30 ) {
//   sonuc = alert("Notunuz FF")
// }


// let tarih = +prompt("Subat ayinin hangi yillarda gun 29 olup olmadigin bulmak icin bir yil giriniz  ? ")
// if(tarih%4 == 0 && tarih%100 !==0 ) and ( tarih%400 ==0 ) {
//   sonuc= alert("Subat ayi 29 gundur.")
// }
// else {
//   sonuc= alert("Subat ayi 29 gun degildir.")
// }



// var sum = 0;
// for (var i = 3; i < 7; i++) {
// sum += i;
// if (i ===3 || sum > 10) {
// continue;
// }
// console.log(i);
// }

// 

// let prev1=0;
// let prev2=1;
// let curr;
// let n = +prompt(`Fibonacci'nin hangi basamagini bulmaz istiyorsunuz?`)
// for(let i=2;i<=n;i++){
//     curr= prev1+prev2;
//     prev1=prev2;

// }

// let num = prompt("Kaçıncı fibonacci sayısını öğrenmek istiyorsunuz?");
// let sayi1 = 0;
// let sayi2 = 1;
// let toplam;
// let Fibosayisi = [];

// for(let i = 1; i < num; i++){
//     toplam = sayi1 + sayi2;
//     sayi1 = sayi2;
//     sayi2 = toplam;
//     Fibosayisi.push(toplam);
// }        
// console.log(`Fibonacci (${num}) : ${toplam}`);

// let hak=3;
// let pcSayi =Math.floor(Math.random() *100)+1
// while(1) {
    
// }


// function guessGame(){
//     number = Math.floor(Math.random()*11);
//     document.write(number);
//     var guess = prompt("Guess a number: ");
//         do {
//             guess = prompt("Keep guessing!");
//             if (number < guess) {
//                 prompt("You've guessed too high!");
//             } else if (number > guess) {
//                 prompt("You've guessed too low!");
//             } else document.write("Good Job!");
//         } while (guess != number);
//     }