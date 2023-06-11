//************SELECTORS***********/


let shipping= 25
let tax=0
let total= 0

const items = document.querySelector(".items")
const p1_name=document.querySelector(".p1_name")
const p1_img=document.querySelector(".p1_img")
const p1_price=document.querySelector(".p2_price")
const p2_name=document.querySelector(".p2_name")
const p2_img=document.querySelector(".p2_img")
const p2_price=document.querySelector(".p1_price")
const p3_name=document.querySelector(".p3_name")
const p3_img=document.querySelector(".p3_img")
const p3_price=document.querySelector(".p3_price")

//?Item ekle btn
items.addEventListener("click",(e)=>{
    if(e.target.classList.contains("p1-btn")){
        console.log(p1_name.textContent);
        console.log(p1_img.src);
        console.log(p1_price.textContent);

    }
    else if(e.target.classList.contains("p2-btn")){
        console.log(p2_name.textContent);
        console.log(p2_img.src);
        console.log(p2_price.textContent);

    }
    else if(e.target.classList.contains("p3-btn")){
        console.log(p3_name.textContent);
        console.log(p3_img.src);
        console.log(p3_price.textContent);
    }
})