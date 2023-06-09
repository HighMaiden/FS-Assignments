//! SELECTORS

const ekleForm = document.getElementById("ekle-formu");
const yaziInput = document.getElementById("ekle-input");
const ekleBtn = document.getElementById("ekle-btn");
const formToDo = document.getElementById("form-todo");

//!VARIABLES

//!EVENTS
ekleForm.addEventListener("submit", (e) => {
  e.preventDefault();
  DoList();
  yaziInput.value =""
  yaziInput.focus()
  if(yaziInput.value =""){
    alert("Bir to-do Giriniz")
  }
});

//?tek tek silme olayi
formToDo.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("todo-btn"));
  {
    e.target.closest(".todo").remove();
  }
});


//!FUNCTIONS

DoList = function () {
  formToDo.innerHTML += `   
 <div  id="todo-div"class="d-flex gap-2 todo">
<input id="todo-input" class="form-control p-3" value="${yaziInput.value}" type="text"  />
<button id="silme"  class="btn todo-btn btn-danger p-3">
<i class="fa-solid fa-trash-can"></i>
</button>
</div> `;
};

