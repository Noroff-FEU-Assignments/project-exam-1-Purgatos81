//Blog details 

const blogContainer = document.querySelector(".details");
const detailsTitle = document.querySelector(".detailTitle");
console.log(blogContainer);

const QueryString = document.location.search;

const Params = new URLSearchParams(QueryString);

const id = Params.get("id");

console.log(id);

const ThisURL = "https://bluenord.no/wp-json/wp/v2/posts" + id;

console.log(ThisURL);

