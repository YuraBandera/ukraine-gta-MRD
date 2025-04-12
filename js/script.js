document.getElementById("theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

document.getElementById("searchInput").addEventListener("input", function () {
    const val = this.value.toLowerCase();
    const result = document.getElementById("searchResult");
    if (val.includes("рада")) {
        result.textContent = "Знайдено: Міська Рада Дніпра";
    } else if (val.includes("місто")) {
        result.textContent = "Знайдено: Про місто Дніпро";
    } else {
        result.textContent = "Нічого не знайдено";
    }
});
