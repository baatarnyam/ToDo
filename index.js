const container = document.getElementsByClassName("container")[0];
const cardAdd = document.getElementsByClassName("cardAdd");

const opacity = document.getElementsByClassName("opacity")[0];

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

const addButton = document.getElementById("addButton");

const toDoTitleRight = document.getElementsByClassName("toDoTitleRight")[0];

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
  location.reload();
  render();
};

// addTask

let edit = false;

addButton.addEventListener("click", (event) => {
  if (event.target != opacity) {
    opacity.style.display = "none";
  }
  if (edit) {
    editTask();
  } else {
    object.title = modalTitle.value;
    object.description = modalDescription.value;
    object.status = statusSelect.value;
    object.priority = prioritySelect.value;
    setData(object);
    clear();
  }
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

const cardComponent = (props) => {
  const { title, description, id, status, priority } = props;

  return `<div id="${id}"  draggable="true" class="toDoList">
  <div class="toDoTitle">
    <div id="${id}" class="toDoTitleLeft">
      ${
        status === "done"
          ? `<div class= "blackIcon"> <i class="material-icons"  style="font-size: 14px;">&#xe5ca;</i> </div>`
          : `<div class= "toDoTitleLeftIcon"> <i class="material-icons"  style="font-size: 14px;">&#xe5ca;</i></div>`
      }
    <div class="toDoTitleText" id= "">${title}</div>
  </div>

  <div class="toDoTitleRight" onclick= "deleteBtn('${id}')">
    <i class="material-icons" style="font-size: 14px;">&#xe5cd;</i>
  </div>
  </div>

  <div class="toDoDescription">
  <div class="toDoDescirptionText">${description}</div>
  <div class="toDoDescriptionIcon" id="edit-${id}">
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

        break;
    }
    // console.log(el.status);
  });
  // location.reload();
};
render();

//drag and drop

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");

const toDo = document.getElementById("toDo");
const inProgress = document.getElementById("inProgress");
const stuck = document.getElementById("stuck");
const done = document.getElementById("done");

const toDoList = document.querySelectorAll(".toDoList");
toDoList.forEach((el) => {
  el.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("todos", event.target.id);
  });
});

let temp;

const cards = document.querySelectorAll(".cards");

cards.forEach((el) => {
  el.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
});

card1.addEventListener("drop", (event) => {
  temp = event.dataTransfer.getData("todos");
  const dragged = document.getElementById(temp);
  toDo.appendChild(dragged);

  const dbData = JSON.parse(localStorage.getItem("ToDo"));
  const newArray = dbData.map((el) => {
    if (el.id === temp) {
      return { ...el, status: "toDo" };
    } else {
      return el;
    }
  });
  localStorage.setItem("ToDo", JSON.stringify(newArray));
  render();
  counter();
  location.reload();
});

card2.addEventListener("drop", (event) => {
  temp = event.dataTransfer.getData("todos");
  const dragged = document.getElementById(temp);
  inProgress.appendChild(dragged);

  const dbData = JSON.parse(localStorage.getItem("ToDo"));
  const newArray = dbData.map((el) => {
    if (el.id === temp) {
      return { ...el, status: "inProgress" };
    } else {
      return el;
    }
  });
  localStorage.setItem("ToDo", JSON.stringify(newArray));
  render();
  counter();
  location.reload();
});

card3.addEventListener("drop", (event) => {
  temp = event.dataTransfer.getData("todos");
  const dragged = document.getElementById(temp);
  stuck.appendChild(dragged);

  const dbData = JSON.parse(localStorage.getItem("ToDo"));
  const newArray = dbData.map((el) => {
    if (el.id === temp) {
      return { ...el, status: "stuck" };
    } else {
      return el;
    }
  });

  localStorage.setItem("ToDo", JSON.stringify(newArray));
  render();
  counter();
  location.reload();
});

card4.addEventListener("drop", (event) => {
  temp = event.dataTransfer.getData("todos");
  const dragged = document.getElementById(temp);
  done.appendChild(dragged);

  const dbData = JSON.parse(localStorage.getItem("ToDo"));
  const newArray = dbData.map((el) => {
    if (el.id === temp) {
      return { ...el, status: "done" };
    } else {
      return el;
    }
  });

  localStorage.setItem("ToDo", JSON.stringify(newArray));
  render();
  counter();
  location.reload();
});

// delete button

const deleteBtn = (id) => {
  const newArr = state.filter((item) => {
    return item.id !== id;
  });

  state = localStorage.setItem("ToDo", JSON.stringify(newArr))
    ? localStorage.setItem("ToDo", JSON.stringify(newArr))
    : [];
  location.reload();
};

// check button click

const checkBtn = document.querySelectorAll(".toDoTitleLeft");

checkBtn.forEach((el) => {
  el.addEventListener("click", () => {
    let parentId = el.id;
    // console.log(parentId);
    const dataBase = JSON.parse(localStorage.getItem("ToDo"));

    const newArr = dataBase.map((el) => {
      if (el.id === parentId) {
        return { ...el, status: "done" };
      }
      return el;
    });
    localStorage.setItem("ToDo", JSON.stringify(newArr));

    render.call(this);
    location.reload();
  });
  // console.log(el);
});

//count

const counter = () => {
  const cards = document.querySelectorAll(".cards");
  cards.forEach((el) => {
    const task = el.querySelectorAll(".toDoList");
    const count = el.getElementsByClassName("counter")[0];

    count.innerHTML = task.length;
  });
};
counter();

//edit

const title = document.getElementById("modalTitle");
const description = document.getElementById("modalDescription");
const modalStatus = document.getElementById("statusSelect");
const priority = document.getElementById("prioritySelect");

const modalTask = document.getElementsByClassName("modalTask ")[0];

const toDoDescriptionIcon = document.querySelectorAll(".toDoDescriptionIcon");

let editTaskID = "";

toDoDescriptionIcon.forEach((el) => {
  el.addEventListener("click", (event) => {
    addButton.innerHTML = "SAVE";
    modalTask.innerHTML = "Edit task";

    opacity.style.display = "block";
    edit = true;

    const db = JSON.parse(localStorage.getItem("ToDo"));

    const ID = el.id.split("-")[1];

    editTaskID = ID;

    const task = db.find(({ id }) => id == ID);

    title.value = task.title;
    description.value = task.description;
    modalStatus.value = task.status;
    priority.value = task.priority;
  });
});

function editTask() {
  const db = JSON.parse(localStorage.getItem("ToDo"));
  const task = db.find(({ id }) => id == editTaskID);
  const filter = db.filter(({ id }) => id != editTaskID);

  task.title = title.value;
  task.description = description.value;
  task.status = modalStatus.value;
  task.priority = priority.value;

  edit = false;
  console.log(task);
  localStorage.setItem("ToDo", JSON.stringify([...filter, task]));
  opacity.style.display = "none";
  render();
  location.reload();
}

// const sort = [ 100, 10 ,4, 133, 253, 1 ];

// sort.sort( function(a, b){ return a - b});
// console.log(sort);

// const dragToDoss = document.querySelectorAll(".dragToDos");

// dragToDoss.forEach((element) => {
//   const priorities = ["High", "Medium", "Low"];
//   const data = JSON.parse(localStorage.getItem("ToDo"));
//   data.sort((a, b) => {
//     const x = priorities.indexOf(a.priority);
//     const y = priorities.indexOf(b.priority);
//     return x - y;
//   });
//   localStorage.setItem("ToDo", JSON.stringify(data));
// });
