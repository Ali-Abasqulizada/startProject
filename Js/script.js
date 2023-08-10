// Fetch the data
let users = document.querySelector(".users");
function getData() {
    fetch("/Data/db.json")
        .then(response => response.json())
        .then(data => {
            data.forEach((user) => {
                users.innerHTML += `
                    <div class="user">
                        <img src="${user.image}" alt="Image">
                        <p class="name">${user.name}</p>
                        <p class="job">${user.job}</p>
                    </div>
                `
            })
        })
}

getData();

// Open the side bar

let main = document.querySelector("main"),
    footer = document.querySelector("footer"),
    bars = document.querySelector(".bars"),
    list = document.querySelector("ul"),
    listItem = list.querySelectorAll("li");

bars.addEventListener("click", () => {
    list.classList.toggle("active");
})

listItem.forEach(item => {
    item.addEventListener("click", () => {
        list.classList.remove("active");
    })
})

main.addEventListener("click", () => {
    list.classList.remove("active");
})
footer.addEventListener("click", () => {
    list.classList.remove("active");
})