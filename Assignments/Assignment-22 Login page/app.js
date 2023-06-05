   const input = document.querySelector(".input")
    const password = document.querySelector(".password")
    const submit = document.querySelector(".btn")

    const list = ["F1362-Galip Duğan","F1669- Gümüş","Q3586-Ali"]

    submit.addEventListener("click",()=>{
        console.log(input.value.includes(...list));
        if(password.value.length > 8 && password.value.match(/[!?=)%&*]/gi) !== []
        && input.value.includes(...list)) {
            alert("sorulara erişebilirisniz")
        }
    })

// const input = document.querySelector(".input");
// const password = document.querySelector(".password");
// const submit = document.querySelector(".btn");

// const list = ["F1362-Galip Duğan", "F1669- Gümüş", "Q3586-Ali"];

// submit.addEventListener("click", () => {
//   if (password.value.length > 8 && password.value.match(/[!?=)%&*]/gi) !== []) {
//     alert("sorulara erişebilirisniz");
//   }
// });

// input.value.includes(...list);
