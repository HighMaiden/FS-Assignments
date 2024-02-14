
// let total = 13;
// let kalan = 0;
// let user = 0;
// let pc = 0;
// while(total>0){
// for(let i=0;i<total;i++){

//     if(total>=4){
//         user=+prompt(`1-3 arasi bir sayi giriniz:`)
//         total=total-user;
//         // console.log(`after user: ${total}`);
//         // console.log(`user number :${user}`);
//         if(total>=4){
//             pc=Math.floor(Math.random()*3)+1
//             total=total-pc;
//             // console.log(`after pc:${total}`);
//         }

//     }
//     else if(total==3){
//         user=+prompt(`1-3 arasi bir sayi giriniz:`)
//         total=total-user;
//         // console.log(`after user: ${total}`);
//         if(total==0){
//             console.log(`User wins`);
//             break;
//         }
//             else if(total==3){
//             pc=Math.floor(Math.random()*3)+1
//             total=total-pc;
//             // console.log(`after pc:${total}`);
//             if(total=0){
//             console.log(`Pc wins`);
//             break;
//             }
//         }
//     }
//     else if(total==2){
//         user=+prompt(`You can now choose only 1 or 2 candy:`)
//         total=total-user;
//         // console.log(`after user: ${total}`);
//         if(total==0){
//             console.log(`User wins`);
//             break;
//         }
//         else if(total==2){
//             pc=Math.floor(Math.random()*2)+1;
//             total=total-pc;
//             // console.log(`after pc:${total}`);
//             if(total==0){
//             console.log(`Pc wins`);
//             break;
//             }
        
//         }
//     }
//     else if(total==1){
//         user=+prompt(`You can now choose only 1 candy:`)
//         total=total-user;
//         // console.log(`after user: ${total}`);
//         if(total==0){
//             console.log(`User wins`);
//             break;
//         }
//         else if(total==1){
//             pc=Math.floor(Math.random()*1)+1
//             total=total-pc;
//             // console.log(`after pc:${total}`);
//             if(total==0){
//             console.log(`Pc wins`);
//             break;
//             }
        
//         }
//     }
//     console.log(`user number :  ${user}`);
//     console.log(`pc number : ${pc}`);
//     console.log(`seker sayisi : ${total}`);
// }


// let total = 13;
// let kalan = 0;
// let user = 0;
// let pc = 0;
// while(total>=0){
// // for(let i=0;i<total;i++){

//     if(total>=4){
//          user=+prompt(`1-3 arasi bir sayi giriniz:`)
//          total=total-user;
//         // console.log(`after user: ${total}`);
//         // console.log(`user number :${user}`);
//          if(total>=4){
//             pc=Math.floor(Math.random()*3)+1
//             total=total-pc;
//             // console.log(`after pc:${total}`);
//         }

//     }
//     else if(total==3){
//          user=+prompt(`1-3 arasi bir sayi giriniz:`)
//          total=total-user;
//         // console.log(`after user: ${total}`);
//          if(total==0){
//             console.log(`User wins`);
//             break;
//         }
//     }    
//      else if(total==3){
//             pc=Math.floor(Math.random()*3)+1
//             total=total-pc;
//             // console.log(`after pc:${total}`);
//             if(total=0){
//             console.log(`Pc wins`);
//             break;
//             }
//     }
    
//     else if(total==2){
//          user=+prompt(`You can now choose only 1 or 2 candy:`)
//          total=total-user;
//         // console.log(`after user: ${total}`);
//          if(total==0){
//             console.log(`User wins`);
//             break;
//          }
//     }
    
//     else if(total==2){
//             pc=Math.floor(Math.random()*2)+1;
//             total=total-pc;
//             // console.log(`after pc:${total}`);
//              if(total==0){
//              console.log(`Pc wins`);
//              break;
//              }
        
//     }
    
//     else if(total==1){
//         user=+prompt(`You can now choose only 1 candy:`)
//         total=total-user;
//         // console.log(`after user: ${total}`);
//          if(total==0){
//             console.log(`User wins`);
//             break;
//         }
//     }
//     else if(total==1){
//             pc=Math.floor(Math.random()*1)+1
//             total=total-pc;
//             // console.log(`after pc:${total}`);
//             if(total==0){
//             console.log(`Pc wins`);
//             break;
//         }
        
//     }
//     console.log(`user number :  ${user}`);
//     console.log(`pc number : ${pc}`);
//     console.log(`seker sayisi : ${total}`);

//     }
    // console.log(`user number :  ${user}`);
    // console.log(`pc number : ${pc}`);
    // console.log(`seker sayisi : ${total}`);

let total = 13;
let user = 0;
let pc = 0;

while (total >= 0) {
  if (total >= 4) {
    user = parseInt(prompt("1-3 arasında bir sayı giriniz:"));

    if (user >= 1 && user <= 3) {
      total -= user;
    } else {
      console.log("Geçersiz bir sayı girdiniz.");
      continue;
    }

    if (total >= 4) {
      pc = Math.floor(Math.random() * 3) + 1;
      total -= pc;
    }
  } else if (total === 3) {
    user = parseInt(prompt("1-3 arasında bir sayı giriniz:"));

    if (user >= 1 && user <= 3) {
      total -= user;
    } else {
      console.log("Geçersiz bir sayı girdiniz.");
      continue;
    }

    if (total === 0) {
      console.log("Kullanıcı kazandı");
      break;
    }
  } else if (total === 2) {
    user = parseInt(prompt("Sadece 1 veya 2 şeker seçebilirsiniz:"));

    if (user === 1 || user === 2) {
      total -= user;
    } else {
      console.log("Geçersiz bir sayı girdiniz.");
      continue;
    }

    if (total === 0) {
      console.log("Kullanıcı kazandı");
      break;
    }
  } else if (total === 1) {
    user = parseInt(prompt("Sadece 1 şeker seçebilirsiniz:"));

    if (user === 1) {
      total -= user;
    } else {
      console.log("Geçersiz bir sayı girdiniz.");
      continue;
    }

    if (total === 0) {
      console.log("Kullanıcı kazandı");
      break;
    }
  }

  console.log(`Kullanıcı sayısı: ${user}`);
  console.log(`Bilgisayar sayısı: ${pc}`);
  console.log(`Kalan şeker sayısı: ${total}`);
}