/*script to blogs page*/


const blogResults = document.querySelector(".blogs");
const bluenordBlogsApi = "https://bluenord.no/wp-json/wp/v2/posts";

console.log(bluenordBlogsApi);

async function getBlogs() {
    try {
        const response = await fetch(bluenordBlogsApi);
        const jsonres = await response.json();
        console.log(jsonres);
        blogResults.innerHTML = "";
        const blogs = jsonres;

        for (let i = 0; i < blogs.length; i++) {
            blogResults.innerHTML += 
            `<a href="blogdetails.html?id=${blogs[i].id}">
            <img
            <h2 class="blog-head"> ${blogs[i].title.rendered}</h2>
            <p> ${blogs[i].excerpt.rendered}</p>
            </a>`
        }
    }
    catch(error) {
        console.log(error);
        blogResults.innerHTML ="Obs, something whent wrong!"
    }
}

getBlogs();