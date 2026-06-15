// ================================
// STONZA TILES DIGITAL CATALOGUE
// ================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Stonza Tiles Website Loaded");

    // Search Box
    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".tile-card");

    if (searchInput) {
        searchInput.addEventListener("keyup", function () {

            let value = this.value.toLowerCase();

            cards.forEach(function (card) {

                let text = card.innerText.toLowerCase();

                if (text.indexOf(value) > -1) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });
    }

    // Smooth Scroll
    document.querySelectorAll("a[href^='#']").forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });

        });

    });

});
