// program to count the number of vowels in a string

// function countVowel(str) {

//     const count = str.match(/[aeiou]/gi).length;

//     return count;
// }

const btn = document.querySelector("#btn");

const input = document.querySelector("#input");

const result = document.querySelector("#result");

function countVowel(x) {
  const count = x.match(/[aeiou]/gi);
  return count;
}
// console.log(countVowel('aliveli'));
btn.addEventListener("click", (e) => {
  //   countVowel();

  result.innerHTML = `${countVowel(input.value).length}`;
});

// btn.onclick =countVowel()
// btn.addEventListener('click',)
// result.innerHTML = `${countVowel(input.value)}`;
