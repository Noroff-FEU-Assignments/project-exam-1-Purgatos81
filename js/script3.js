/*Script to home page*/


const carouselResults = document.querySelector(".carousel-container");
const bluenordBlogsApi = "https://bluenord.no/wp-json/wp/v2/posts?per_page=20";
const bluenordEmbedApi = "https://bluenord.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia&?per_page=20";


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

        for (let i = 8; i < 12; i++) {
            carouselResults.innerHTML += 
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
