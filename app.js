const magnifireEl = document.querySelector(".magnifire");
const inputEl = document.querySelector(".input");
const searchBarContainer = document.querySelector(".search-bar-container");

console.log(searchBarContainer);


magnifireEl.addEventListener("click" , ()=>{
    searchBarContainer.classList.toggle("active")
})

