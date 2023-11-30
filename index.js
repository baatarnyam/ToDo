
const cardAdd = document.getElementsByClassName("cardAdd");
const counter = document.getElementsByClassName("counter")[0];
const plus = document.getElementsByClassName("plus")[0];
const opacity = document.getElementsByClassName("opacity")[0];
const container = document.getElementsByClassName("container")[0];
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const creating = document.getElementById("creating");
const addButton = document.getElementById("addButton");


Array.prototype.forEach.call(cardAdd, (el) => {
    el.addEventListener("click", () => {
        modelBlock();
        addButton();
      });
})

const modelBlock = () => {
  opacity.style.display = "block";
};

opacity.addEventListener("click", function (event) {
  if (event.target == opacity) {
    opacity.style.display = "none";
  }
});

let titleSaver = "";
let desSaver = "";


modalTitle.addEventListener("change", (event) => {
    titleSaver = event.target.value;
});
modalDescription.addEventListener("change", (event) => {
    desSaver = event.target.value;
});

const create = document.createElement("div");
creating.appendChild(create)

addButton.addEventListener("click", () => {
    create();
    console.log(create);
})
