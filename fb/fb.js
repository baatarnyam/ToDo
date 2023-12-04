const button = document.getElementById("createBtn");

const day = document.getElementById("day");
const mounth = document.getElementById("mounth");
const year = document.getElementById("year");

const firstName = document.getElementById("Fname");
const lastName = document.getElementById("Lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

const genderMale = document.getElementById("male");
const genderFemale = document.getElementById("female");

const checkbox = document.getElementById("checkbox");

let object = {};

button.addEventListener("click", () => {
  object = {
    FirstName: firstName.value,
    LastName: lastName.value,
    emailOrPhoneNumber: email.value,
    password: password.value,

    birth: {
      day: day.value,
      mounth: mounth.value,
      year: year.value,
    },

    gender: checkbox.value,
  };

  const jsonArray = JSON.stringify(object);
  localStorage.setItem("bn", jsonArray);
});

const cardComponent = (props) => {
  const { FirstName, LastName, emailOrPhoneNumber, birth, gender } = props;
  return `<div style="border: solid 1px blue;">
    <div> ${FirstName} </div>
    <div>${LastName}</div>
    <div>${emailOrPhoneNumber} </div>
    <div>${birth} </div>
    <div>${gender}</div>
    </div>`;
};

const render = () => {
  const render = document.getElementsByClassName("render")[0];
  let text = JSON.parse(localStorage.getItem("bn"));

  const result = cardComponent(text);
  render.innerHTML = result;
};
render();
