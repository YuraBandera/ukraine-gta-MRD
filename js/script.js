// Темна тема + збереження
const themeBtn = document.getElementById("theme-btn");
const userTheme = localStorage.getItem("theme");

if (userTheme === "dark") {
    document.body.classList.add("dark-theme");
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const current = document.body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", current);
});

// Пошук
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("searchResult");

searchInput.addEventListener("input", function () {
    const val = this.value.toLowerCase();
    let text = "Нічого не знайдено";

    if (val.includes("рада")) {
        text = "Знайдено: Міська Рада Дніпра";
    } else if (val.includes("місто")) {
        text = "Знайдено: Про місто Дніпро";
    }

    result.textContent = text;
    result.classList.add("show");

    // Приховуємо результат через 3 секунди
    clearTimeout(result._timeout);
    result._timeout = setTimeout(() => {
        result.classList.remove("show");
    }, 3000);
});
