




//* ------ Selectors ------- */
//?RESIMLER
const rockImg=document.getElementById("rock")
const paperImg=document.getElementById("paper")
const scissorImg=document.getElementById("scissor")
//?Secilen Elemanlarin Tasiyicilari
const yourChoiceDiv= document.getElementById("your-choice")

//* ------- Variables ------- */
let image = document.createElement("img")





//* ------- Event Listeners ------- */

rockImg.addEventListener("click",()=>{

image.src="./assets/rock.png"
image.alt="rock"
yourChoiceDiv.appendChild(image)

//?INNERHTML
// yourChoiceDiv.innerHTML =`<img src="./assets/rock.png" alt="rock"  >`
})





//* ------- Functions ------- */





