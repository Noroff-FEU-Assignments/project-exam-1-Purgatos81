/*script to blogs page*/


const blogResults = document.querySelector(".blogs");
const moreBlogResults = document.querySelector(".more-blogs");
const bluenordBlogsApi = "https://bluenord.no/wp-json/wp/v2/posts";
const bluenordEmbedApi = "https://bluenord.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia";

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
        blogResults.innerHTML = "";
        const blogs = jsonres;
        const blogsImg = jsonres2;

        for (let i = 0; i < 8; i++) {
            blogResults.innerHTML += 
            `<a class="blog-a-link" href="blogdetails.html?id=${blogs[i].id}">
                <img class="blog-img" src="${blogsImg[i]._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}"> 
            <h2 class="blog-head"> ${blogs[i].title.rendered}</h2>
            <div id="blog-p"> ${blogs[i].excerpt.rendered}</div>
            </a>`
        }
    }
    catch(error) {
        console.log(error);
        blogResults.innerHTML ="Obs, something whent wrong!"
    }
}

getBlogs();

async function getMoreBlogs() {
    try {
        const response = await fetch(bluenordBlogsApi);
        const response2 = await fetch(bluenordEmbedApi);
        const jsonres = await response.json();
        const jsonres2 = await response2.json();
        console.log(jsonres);
        console.log(jsonres2);
        moreBlogResults.innerHTML = "";
        const blogs = jsonres;
        const blogsImg = jsonres2;

        for (let i = 8; i < blogs.length; i++) {
            moreBlogResults.innerHTML += 
            `<a class="blog-a-link" href="blogdetails.html?id=${blogs[i].id}">
                <img class="blog-img" src="${blogsImg[i]._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}"> 
            <h2 class="blog-head"> ${blogs[i].title.rendered}</h2>
            <div id="blog-p"> ${blogs[i].excerpt.rendered}</div>
            </a>`
        }
    }
    catch(error) {
        console.log(error);
        blogResults.innerHTML ="Obs, something whent wrong!"
    }
}

getMoreBlogs();