/*Script to home page*/


const carouselResults = document.querySelector(".carousel-container");
const carouselResults2 = document.querySelector(".carousel-container-2");
const carouselResults3 = document.querySelector(".carousel-container-3");
const bluenordBlogsApi = "https://bluenord.no/wp-json/wp/v2/posts?per_page=20";
const bluenordEmbedApi = "https://bluenord.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&per_page=20";
const leftButton1 = document.querySelector(".container-left-1");
const rightButton1 = document.querySelector(".container-right-1");
const leftButton2 = document.querySelector(".container-left-2");
const rightButton2 = document.querySelector(".container-right-2");
const leftButton3 = document.querySelector(".container-left-3");
const rightButton3 = document.querySelector(".container-right-3");

console.log(bluenordBlogsApi);
console.log(bluenordEmbedApi);

async function getBlogs() {
    try {
        const response = await fetch(bluenordBlogsApi);
        const response2 = await fetch(bluenordEmbedApi);
        const jsonres = await response.json();
        const jsonres2 = await response2.json();
        console.log(jsonres);
        console.log(jsonres2);
        carouselResults.innerHTML = "";
        const blogs = jsonres;
        const blogsImg = jsonres2;

        for (let i = 0; i < 4; i++) {
            carouselResults.innerHTML += 
            `<div class"new-post-container">
            <a class="carousel-a-link" href="blogdetails.html?id=${blogs[i].id}">
                <img class="carousel-img" src="${blogsImg[i]._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}"
                alt="${blogsImg[i]._embedded["wp:featuredmedia"][0].alt_text}">
                <h3 class="carousel-head"> ${blogs[i].title.rendered}</h3>  
            </a>
            </div>`
        }

        for (let i =4; i < 8; i++) {
            carouselResults2.innerHTML += 
            `<div class"new-post-container">
            <a class="carousel-a-link" href="blogdetails.html?id=${blogs[i].id}">
                <img class="carousel-img" src="${blogsImg[i]._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}">
                <h3 class="carousel-head"> ${blogs[i].title.rendered}</h3>  
            </a>
            </div>`
        }

        for (let i =8; i < 12; i++) {
            carouselResults3.innerHTML += 
            `<div class"new-post-container">
            <a class="carousel-a-link" href="blogdetails.html?id=${blogs[i].id}">
                <img class="carousel-img" src="${blogsImg[i]._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}">
                <h3 class="carousel-head"> ${blogs[i].title.rendered}</h3>  
            </a>
            </div>`
        }
    }
    catch(error) {
        console.log(error);
        blogResults.innerHTML ="Obs, something whent wrong!"
    }
}

getBlogs();

leftButton1.addEventListener("click", clickForLatest);
rightButton2.addEventListener("click", clickForLatest);

function clickForLatest() {
    carouselResults.style.display ="none";
    carouselResults2.style.display ="none";
    carouselResults3.style.display ="flex";
    leftButton3.style.display ="inline-block";
    rightButton3.style.display ="inline-block";
    leftButton1.style.display ="none";
    rightButton1.style.display ="none";
    leftButton2.style.display ="none";
    rightButton2.style.display ="none";
} 

rightButton1.addEventListener("click", clickForNext);
leftButton3.addEventListener("click", clickForNext);

function clickForNext() {
    carouselResults.style.display ="none";
    carouselResults3.style.display ="none";
    carouselResults2.style.display ="flex";
    leftButton2.style.display ="inline-block";
    rightButton2.style.display ="inline-block";
    leftButton1.style.display ="none";
    rightButton1.style.display ="none";
    leftButton3.style.display ="none";
    rightButton3.style.display ="none";
}

rightButton3.addEventListener("click", clickForFirst);
leftButton2.addEventListener("click", clickForFirst);

function clickForFirst() {
    carouselResults.style.display ="flex";
    carouselResults3.style.display ="none";
    carouselResults2.style.display ="none";
    leftButton1.style.display ="inline-block";
    rightButton1.style.display ="inline-block";
    leftButton3.style.display ="none";
    rightButton3.style.display ="none";
    leftButton2.style.display ="none";
    rightButton2.style.display ="none";
}