const  form =document.querySelector("form")
const input = document.querySelector("form #input-alani")




form.addEventListener("submit",(e)=>{
    e.preventDefault()
    input.value = "";
    // form.reset();
    // e.target.reset();
    // e.currentTarget.reset();
    console.log(e.target);
})