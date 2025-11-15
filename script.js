const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

mobileMenuBtn.addEventListener("click", () => {
    console.log("click");
    mobileMenu.classList.toggle("hidden");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
});

const grid = document.querySelector(".fullscreen-grid");
if (grid) {
    const totalCells = 31;
    const alreadyUsed = 1;
    const remaining = totalCells - alreadyUsed;

    for (let i = 0; i < remaining; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-cell");
        grid.appendChild(div);
    }
}
document.querySelectorAll(".hire-me-button").forEach(button => {
    button.addEventListener("click", () => {
        window.open("https://github.com/HlyamHtetKyaw", "_blank");
    });
});


