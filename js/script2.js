//Blog details 

const blogContainer = document.querySelector(".details");
const modalContainer =document.querySelector(".modal-div");
const detailTitle = document.querySelector(".detailTitle");
console.log(modalContainer);
console.log(blogContainer);

const QueryString = document.location.search;

const Params = new URLSearchParams(QueryString);

const id = Params.get("id");

console.log(id);

const ThisURL = "https://bluenord.no/wp-json/wp/v2/posts/" + id;
const ThisURLEmbeded = "https://bluenord.no/wp-json/wp/v2/posts/" + id + "?_embed=wp:featuredmedia";

console.log(ThisURL);
console.log(ThisURLEmbeded);

async function fetchBlog() {
    try {
        const resp = await fetch(ThisURL);
        const resp2 = await fetch(ThisURLEmbeded);
        const blogDetails = await resp.json();
        const blogImgDetails = await resp2.json();
        console.log(blogDetails);
        console.log(blogImgDetails);

        detailTitle.innerHTML = `${blogDetails.title.rendered} | TWC-Blog`

        modalContainer.innerHTML = `<img class="added-modal" id="added-modal-img" src="${blogImgDetails._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}">
        `

        blogContainer.innerHTML = `
        <div class="blog-spesific-container">
        <h1 class="blog-spesific-h1">${blogDetails.title.rendered}</h1>
        <div id="blog-spefic-p-excerpt"> ${blogDetails.excerpt.rendered}</div>
        <img id="spesific-blog-img" class="blog-spesific-img" src="${blogImgDetails._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}">
        <div class="blog-spesific-p">${blogDetails.content.rendered}</div>
        </div>   
        `

    }
    catch(error) {
        console.log(error);
        ResultContainer.innerHTML = "Obs, something whent wrong!";
    }
}

fetchBlog()

