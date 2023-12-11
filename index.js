const container = document.getElementsByClassName("container")[0];
const cardAdd = document.getElementsByClassName("cardAdd");

const opacity = document.getElementsByClassName("opacity")[0];

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

const addButton = document.getElementById("addButton");

const toDoTitleRight = document.getElementsByClassName("toDoTitleRight")[0];
// const toDoList = document.getElementsByClassName("toDoList")[0];

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

let state = [];
const firstGet = JSON.parse(localStorage.getItem("ToDo"));
state = firstGet ? firstGet : [];

let object = {
  title: "",
  description: "",
  status: "toDo",
  priority: "Low",
};

const setData = (obj) => {
  let uniq = "id" + new Date().getTime();
  obj.id = uniq;
  state.push({ ...obj });
  localStorage.setItem("ToDo", JSON.stringify(state));
  render();
};

addButton.addEventListener("click", (event) => {
  if (event.target != opacity) {
    opacity.style.display = "none";
  }

  object.title = modalTitle.value;
  object.description = modalDescription.value;
  object.status = statusSelect.value;
  object.priority = prioritySelect.value;

  setData(object);

  clear();
});

const clear = () => {
  modalTitle.value = "";
  modalDescription.value = "";
  statusSelect.value = "toDo";
  prioritySelect.value = "Low";
  object = {
    title: "",
    description: "",
    status: "toDo",
    priority: "Low",
  };
};

{
  /* <i style="font-size:24px;" class="fa">&#xf058;</i> */
}
{
  /* <div>${ status && ""} </div> */
}

const cardComponent = (props) => {
  const { title, description, id, status, priority } = props;

  return `<div id="${id}"  draggable="true" class="${status} toDoList">
  <div class="toDoTitle">
  <div class="toDoTitleLeft">
    <div id="toDoTitleLeftIcon">
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

  toDo.innerHTML = "";
  inProgress.innerHTML = "";
  stuck.innerHTML = "";
  done.innerHTML = "";

  let jsonText = JSON.parse(localStorage.getItem("ToDo"));

  jsonText?.forEach((el) => {
    const result = cardComponent(el);

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

        const toDoTitleLeftIcon = document.getElementById("toDoTitleLeftIcon");
  
          toDoTitleLeftIcon.style.color= "#fff";
          toDoTitleLeftIcon.style.backgroundColor= "black"

        // const card4 = document.getElementById("card4");
        // card4.addEventListener("drop", () => {
        //   toDoTitleLeftIcon.style.color= "#fff";
        //   toDoTitleLeftIcon.style.backgroundColor= "black";
        // });
        // card4.forEach( (el) => {
        //   el.addEventListener("change", () => {
        //     toDoTitleLeftIcon.style.color= "#fff",
        //     toDoTitleLeftIcon.style.backgroundColor= "black"
        //   });
        // });

        // count4++;
        // card4Count.innerHTML = count4;
        break;
    }
  });
};
render();

const cards = document.querySelectorAll(".cards");
const toDoList = document.querySelectorAll(".toDoList");

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");

const toDo = document.getElementById("toDo");
const inProgress = document.getElementById("inProgress");
const stuck = document.getElementById("stuck");
const done = document.getElementById("done");

let temp;

toDoList.forEach((el) => {
  el.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("todos", event.target.id);
  });
});




card1.addEventListener("dragover", (event) => {
  event.preventDefault();
});
card1.addEventListener("drop", (event) => {
  temp = event.dataTransfer.getData("todos");
  const dragged = document.getElementById(temp);
  toDo.appendChild(dragged);
});


card2.addEventListener("dragover", (event) => {
  event.preventDefault();
});
card2.addEventListener("drop", (event) => {
  temp = event.dataTransfer.getData("todos");
  const dragged = document.getElementById(temp);
  inProgress.appendChild(dragged);
});



card3.addEventListener("dragover", (event) => {
  event.preventDefault();
});
card3.addEventListener("drop", (event) => {
  temp = event.dataTransfer.getData("todos");
  const dragged = document.getElementById(temp);
  stuck.appendChild(dragged);
});


card4.addEventListener("dragover", (event) => {
  event.preventDefault();
});
card4.addEventListener("drop", (event) => {
  temp = event.dataTransfer.getData("todos");
  const dragged = document.getElementById(temp);
  done.appendChild(dragged);
});


// let count1 = 0;
// let count2 = 0;
// let count3 = 0;
// let count4 = 0;

// const card1 = document.getElementById("card1");
// const card2 = document.getElementById("card2");
// const card3 = document.getElementById("card3");
// const card4 = document.getElementById("card4");
// const card1Count = document.getElementById("card1Count");
// const card2Count = document.getElementById("card2Count");
// const card3Count = document.getElementById("card3Count");
// const card4Count = document.getElementById("card4Count");
