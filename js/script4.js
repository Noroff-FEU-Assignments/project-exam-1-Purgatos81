//blog details modal script

var containerModal = document.querySelector("#blog-modal");

console.log(containerModal);

var clickImg = document.querySelector(".details-container");

var closeModal = document.querySelector(".modal-span");

console.log(clickImg);

clickImg.addEventListener("click", clickFunction);

function clickFunction() {
    containerModal.style.display = "block";
}

window.onclick = function(close) {
    if (close.target == containerModal) {
        containerModal.style.display = "none";
    }
}