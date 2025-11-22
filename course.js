let buttons = document.querySelectorAll(".sidebar ul li");
let cards = document.querySelectorAll(".course-card");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        // Remove active class
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        let filter = btn.getAttribute("data-filter");

        cards.forEach(card => {
            if (filter === "all" || card.classList.contains(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

    });
});
