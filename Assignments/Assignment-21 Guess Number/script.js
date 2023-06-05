const input = document.getElementById("input");
const btn = document.getElementById("button");
const error = document.getElementById("error");
let hak = document.getElementById("hak");
let pcValue = 0;
let attempts = 2;

btn.addEventListener("click", (e) => {

  pcValue = Math.floor(Math.random() * 100) + 1;

  if (input.value < 0 || input.value > 100) {
    error.innerHTML = "Lütfen 1 - 100 arasinda değer giriniz";
    error.style = "color:red";
  } else {

    if (attempts > 0 && attempts <= 3) {
      attempts--;

      if (input.value > pcValue) {
        error.innerHTML = "Daha küçük bir sayi giriniz";
        input.value = "";
        input.value.focus();
      } 
      else if (input.value < pcValue) {
        error.innerHTML = "Daha büyük bir sayi giriniz";
        input.value = "";
        input.value.focus();
      } 
      else if (input.vale == pcValue) {
        error.innerHTML = "Tebrikler bildiniz";
        error.style = "color: green; font-size: 50px";
      }
    } 
    else {
      error.innerHTML = "Maalesef hiç hakkniz kalmamiştir.";
      
      btn.style = "display: none";
    }
  }
});
