//Blog details 

const blogContainer = document.querySelector(".details");
const detailTitle = document.querySelector(".detailTitle");
console.log(blogContainer);

const QueryString = document.location.search;

const Params = new URLSearchParams(QueryString);

const id = Params.get("id");

console.log(id);

const ThisURL = "https://bluenord.no/wp-json/wp/v2/posts/" + id;

console.log(ThisURL);

async function fetchBlog() {
    try {
        const resp = await fetch(ThisURL);
        const blogDetails = await resp.json();
        console.log(blogDetails);

        detailTitle.innerHTML = `${blogDetails.title.rendered}`

        blogContainer.innerHTML = `
        <h1>${blogDetails.title.rendered}</h1>
        <p>${blogDetails.content.rendered}</p>
        `

    }
    catch(error) {
        console.log(error);
        ResultContainer.innerHTML = "Obs, something whent wrong!";
    }
}

fetchBlog()