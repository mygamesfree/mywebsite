let input = document.getElementById("search_game");
let button = document.querySelector(".search-box button");
let games = document.querySelectorAll(".game");

function searchGame() {
    let value = input.value.toLowerCase();

    games.forEach(function(game) {
        let title = game.querySelector("h2").textContent.toLowerCase();

        if (title.includes(value)) {
            game.style.display = ""; // يرجع طبيعي
        } else {
            game.style.display = "none";
        }
    });
}

input.addEventListener("keyup", searchGame);
button.addEventListener("click", searchGame);   