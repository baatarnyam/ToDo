const container = document.getElementsByClassName("container")[0];
const cardAdd = document.getElementsByClassName("cardAdd");

const counter = document.getElementsByClassName("counter")[0];
const opacity = document.getElementsByClassName("opacity")[0];

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const addButton = document.getElementById("addButton");

const toDoTitleRight = document.getElementsByClassName("toDoTitleRight")[0];
const toDoList = document.getElementsByClassName("toDoList")[0];

Array.prototype.forEach.call(cardAdd, (el) => {
  el.addEventListener("click", () => {
    opacity.style.display = "block";
  });
});

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
};

addButton.addEventListener("click", (event) => {
  if (event.target != opacity) {
    opacity.style.display = "none";
  }

  object.title = modalTitle.value;
  object.description = modalDescription.value;
  object.status = statusSelect.value;
  object.priority = prioritySelect.value;
  state.push(object);
  // console.log(state);
  clear();

  const jsonArray = JSON.stringify(state);
  localStorage.setItem("ToDo", jsonArray);

  render();
});

const clear = () => {
  modalTitle.value = "";
  modalDescription.value = "";
  statusSelect.value = "";
  prioritySelect.value = "";
};


{
  /* <i style="font-size:24px;" class="fa">&#xf058;</i> */
}
{/* <div>${ status && ""} </div> */}


const cardComponent = (props) => {
  const { title, description, status, priority } = props;
  return `<div id="toDoList">
  <div class="toDoTitle">
  <div class="toDoTitleLeft">
    <div class="toDoTitleLeftIcon">
      <i class="material-icons"  style="font-size: 14px;">&#xe5ca;</i>
    </div>
    <div class="toDoTitleText">${title}</div>
  </div>

  <div class="toDoTitleRight">
    <i class="material-icons" style="font-size: 14px;">&#xe5cd;</i>
  </div>
  </div>

  <div class="toDoDescription">
  <div class="toDoDescirptionText">${description}</div>
  <div class="toDoDescriptionIcon">
    <i style="font-size: 13px; font-weight: bold;" class="fa">&#xf044;</i>
  </div>
  </div>


  <div class="toDoPriority">${priority}</div>
  </div>`;

};

const render = () => {
  const toDo = document.getElementById("toDo");
  const inProgress = document.getElementById("inProgress");
  const stuck = document.getElementById("stuck");
  const done = document.getElementById("done");

  let jsonText = JSON.parse(localStorage.getItem("ToDo"));
  jsonText.forEach((el) => {

    const result = cardComponent(el);
    // toDo.innerHTML += result;

    switch (el.status) {
      case "toDo":
        toDo.innerHTML += result;
        break;
      case "inProgress":
        inProgress.innerHTML += result;
        break;

      case "stuck":
        stuck.innerHTML += result;
        break;

      case "done":
        done.innerHTML += result;

        break;
      default:
        alert("status aa songono uu!")
        break;
    }

    // if (el.status === todo ){}
  });
};
render();


// toDoTitleRight.addEventListener("click", () => {
//   toDoList.style.display = "none"
// })