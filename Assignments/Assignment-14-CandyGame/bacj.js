
let total = 13;
let kalan = 0;
let user = 0;
let pc = 0;




for (let i = 1; i <= total; i++) {
//   user = +prompt(`1-3 arasi bir deger giriniz:`);
//   pc = Math.floor(Math.random() * 3) + 1;
//   total = total - (user + pc);
//   console.log(total);

  if (total >= 3) {
    user = +prompt(`1-3 arasi bir deger giriniz:`);
    pc = Math.floor(Math.random() * 3) + 1;
    total = total - (user + pc);
    if (total == 3 && pc == 3) {
      alert(`pc wins`);
    } else if (total == 3 && user == 3) {
      alert(`User wins`);
    }
    //  console.log(`user number :  ${user}`);
    //  console.log(`pc number : ${pc}`);
    //  console.log(`seker sayisi : ${total}`);
    
  } else if (total == 2) {
    user = +prompt(`1-3 arasi bir deger giriniz:`);
    pc = Math.floor(Math.random() * 2) + 1;
    total = total - (user + pc);
    if (total == 2 && pc == 2) {
      alert(`pc wins`);
    } else if (total == 2 && user == 2) {
      alert(`User wins`);
    }
    //  console.log(`user number :  ${user}`);
    //  console.log(`pc number : ${pc}`);
    //  console.log(`seker sayisi : ${total}`);
    
   
  } else if (total == 1) {
    user = +prompt(`1-3 arasi bir deger giriniz:`);
    pc = Math.floor(Math.random() * 1) + 1;
    total = total - (user + pc);
    if (total == 1 && pc == 1) {
      alert(`pc wins`);
    } else if (total == 1 && user == 1) {
      alert(`User wins`);
    }
    //  console.log(`user number :  ${user}`);
    //  console.log(`pc number : ${pc}`);
    //  console.log(`seker sayisi : ${total}`);
  }
  //   user = +prompt(`1-3 arasi bir deger giriniz:`);
  //   pc = Math.floor(Math.random() * 3) + 1;
  //   total = total - (user + pc);

  //   if (total == 3) {
  //     pc = Math.floor(Math.random() * 3) + 1;
  //     if (total == 3 && pc == 3) {
  //       alert(`pc wins`);
  //     } else if (total == 3 && user == 3) {
  //       alert(`User wins`);
  //     }
  //   } else if (total == 2) {
  //     pc = Math.floor(Math.random() * 2) + 1;
  //     if (total == 2 && pc == 2) {
  //       alert(`Pc wins`);
  //     } else if (total == 2 && user == 2) {
  //       alert(`User wins`);
  //     }
  //   } else if (total == 1) {
  //     if (total == 1 && pc == 1) {
  //       alert(`Pc wins`);
  //     } else if (total == 1 && user == 1) {
  //       alert(`User wins`);
  //     }
  //   }

  // if(total==3&&pc==3) {
  // alert(`pc wins`)
  // }
  // else if(total==3&&user==3 ){
  // alert(`user wins`)
  // }

  //  else if(total ==2 && pc ==2){
  //     // pc= Math.floor(Math.random()*2)+1
  //     alert(`pc wins`)
  //  }
  //  else if(total==2&&user==2 ){
  //     alert(`user wins`)
  //    }

  //  else if(total==1&&pc ==1){
  //     // pc= Math.floor(Math.random()*1)+1
  //     alert(`pc wins`)
  //  }
  //  else if(total==1&&user==1 ){
  //     alert(`user wins`)
  //    }

  console.log(`user number :  ${user}`);
  console.log(`pc number : ${pc}`);
  console.log(`seker sayisi : ${total}`);
}

// while(total>=0){
//     user=+prompt(`1-3 arasi bir sayi giriniz:`)
//   pc = Math.floor(Math.random()*3)+1

//   total =(user-pc)

//   if(total == 2){
//         pc = Math.floor(Math.random()*2)+1 //! 1-3 arasında sonuc donecek
//     }
//     else if(total == 1){
//         pc = Math.floor(Math.random()*1)+1
//     }
//     else if(total <= 0){
//         alert(`Seker sayısı : ${total} olduğu için kaybettiniz`)
//         break
//     }
// }
//     console.log(`user number :  ${user}`);
//     console.log(`pc number : ${pc}`);
//     console.log(`seker sayisi : ${total}`);
