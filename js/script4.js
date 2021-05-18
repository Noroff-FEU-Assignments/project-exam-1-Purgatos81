//blog details modal script



var blogModal = document.getElementById("blog-modal");
var testH1 = document.getElementsByClassName("blog-spesific-h1")

console.log();

var getImg = document.getElementById("spesific-blog-img");

console.log(getImg);

getImg.onclick = function(){
    testH1.style.display = "none";
}