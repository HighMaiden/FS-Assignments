

function reverseString(sentence){
    return sentence.split("").reverse().join("");
}
console.log(reverseString("hello world"));


function reverseWord(x){
    // console.log(x.split(" "));
    return x.split(" ").reverse().join(" ") 
}
console.log(reverseWord("? doing you are how hi"));
console.log(reverseWord("merhaba"));