const addButton = document.getElementsByClassName("addButton");
const container = document.getElementsByClassName("container")[0];
const modal = document.getElementsByClassName("modal")[0];
const opacity = document.getElementsByClassName("opacity")[0];
const taskButton = document.getElementById("taskButton")

Array.prototype.forEach.call(addButton, (el) => {
    el.addEventListener('click', () => {
        opacity.style.display= "block";
    })
});
opacity.addEventListener( "click", (event) => {
    if (event.target == opacity) {
        opacity.style.display= "none";
    }
});


taskButton.addEventListener("click", (event) => {
    if (event.target != opacity){
        opacity.style.display= "none";
    }
});
