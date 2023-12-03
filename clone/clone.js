const addButton = document.getElementsByClassName("addButton");
const container = document.getElementsByClassName("container")[0];
const modal = document.getElementsByClassName("modal")[0];
const opacity = document.getElementsByClassName("opacity")[0];

Array.prototype.forEach.call(addButton, (el) => {
    el.addEventListener('click', () => {
        opacity.style.display= "block";
    })
});

