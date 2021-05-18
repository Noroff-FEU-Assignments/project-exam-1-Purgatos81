//blog details modal script

var containerModal = document.querySelector("#blog-modal");

console.log(containerModal);

var clickImg = document.querySelector("#spesific-blog-img");

var clickButton = document.querySelector(".modalButton");

console.log(clickImg);



clickButton.onclick = function(){
    containerModal.style.display = "block";
}

clickImg.onclick = function(){
    containerModal.style.display = "block";
}
