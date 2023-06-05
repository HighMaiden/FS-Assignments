




//* ------ Selectors ------- */
//?RESIMLER
const rockImg=document.getElementById("rock")
const paperImg=document.getElementById("paper")
const scissorImg=document.getElementById("scissor")
//?Secilen Elemanlarin Tasiyicilari
const yourChoiceDiv= document.getElementById("your-choice")
const pcChoiceDiv= document.getElementById("pc-choice")
const selectionArticle = document.querySelector(".selection")
//?message
const messagePar =document.querySelector(".message")
//* ------- Variables ------- */
let userSelectImg = document.createElement("img")
let pcSelectImg = document.createElement("img")
//?colors
const Yellow= "#ffc538";
const Red= "#fb778b";
const Green="#5ab7ac";
//?Score 

const scoreCardSec = document.querySelector(".score-card")




//* ------- Event Listeners ------- */
selectionArticle.addEventListener("click",(e)=>{
    // console.log(e.target.id);
    if(e.target.id){
    //?can be done like this also
    // if(
    // e.target.id==="rock" ||
    // e.target.id ==="scissor"||
    // e.target.id === "paper"
    // ){
        userSelectImg.src =`./assets/${e.target.id}.png`
        userSelectImg.alt = e.target.id
        yourChoiceDiv.appendChild(userSelectImg)
        createPcSelection()
    }
})




//?ILKEL YONTEM
// rockImg.addEventListener("click",()=>{

// image.src="./assets/rock.png"
// image.alt="rock"
// yourChoiceDiv.appendChild(image)

// //?INNERHTML
// // yourChoiceDiv.innerHTML =`<img src="./assets/rock.png" alt="rock"  >`
// })
// paperImg.addEventListener("click",()=>{

//     image.src="./assets/paper.png"
//     image.alt="paper"
//     yourChoiceDiv.appendChild(image)
    

//     })
//     scissorImg.addEventListener("click",()=>{

//         image.src="./assets/scissor.png"
//         image.alt="scissor"
//         yourChoiceDiv.appendChild(image)
        
    
//         })
    





//* ------- Functions ------- */

const createPcSelection = ()=>{
    const pcArr=["rock","paper","scissor"]
    const pcRandom=pcArr[Math.floor(Math.random()*3)]
    pcSelectImg.src =`./assets/${pcRandom}.png`
    pcSelectImg.alt = pcRandom
    pcChoiceDiv.appendChild(pcSelectImg)
    
    calculateResult()
    
    }
const draw = ()=>{
    messagePar.textContent ="it's a draw"
scoreCardSec.style.color="Yellow"
messagePar.style.backgroundColor = "Yellow"
}

    const calculateResult = ()=>{
        // console.log(userSelectImg.alt);
        // console.log(pcSelectImg.alt);
        //?Esitlik durumu
        if(userSelectImg.alt === pcSelectImg.alt){
            draw()

        }
    }


