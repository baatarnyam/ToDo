
const cardAdd = document.getElementsByClassName("cardAdd");
const counter = document.getElementsByClassName("counter")[0];
const opacity = document.getElementsByClassName("opacity")[0];
const container = document.getElementsByClassName("container")[0];
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const statusSelect= document.getElementById("modalDescription");
const prioritySelect= document.getElementById("modalDescription");
// const creating = document.getElementById("creating");
const addButton = document.getElementById("addButton");


Array.prototype.forEach.call(cardAdd, (el) => {
    el.addEventListener("click", () => {
        modalBlock();
      });
})

const modalBlock = () => {
  opacity.style.display = "block";
};

opacity.addEventListener("click", function (event) {
  if (event.target == opacity) {
    opacity.style.display = "none";
  }
});

const state = [];
const object = {
  title: "",
  description: "",
  status: "",
  priority: "",
}



addButton.addEventListener("click", (event) => {
  if (event.target != opacity) {
    opacity.style.display = "none";
  }

  object.title = modalTitle.value;
  object.description = modalDescription.value;
  object.status = statusSelect.value;
  object.priority = prioritySelect.value;
  state.push(object)
  console.log(state);

  clear()
  // object.title = "";
  // object.description = "";
}); 

const clear = () => {
  modalTitle.value = "";
  modalDescription.value= "";
  statusSelect.value= "";
  prioritySelect.value= "";
}