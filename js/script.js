// Перемикання між темною і світлою темою
document.getElementById("theme-btn").addEventListener("click", () => {
    // Перемикає клас "dark-theme" для зміни теми
    document.body.classList.toggle("dark-theme");
});

// Функція фільтрації рішень
function filterDecisions() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const table = document.getElementById("decisionsTable");
    const rows = table.getElementsByTagName("tr");

    // Проходимо по всіх рядках таблиці, крім першого (заголовка)
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        let match = false;

        // Перевірка кожної клітинки в рядку
        for (let j = 0; j < cells.length; j++) {
            const cell = cells[j];
            if (cell && cell.innerText.toLowerCase().indexOf(filter) > -1) {
                match = true;
            }
        }

        // Показуємо або приховуємо рядок залежно від результату фільтрації
        if (match) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

// Логіка для пошуку по тексту
document.getElementById("searchInput").addEventListener("input", function () {
    const val = this.value.toLowerCase();
    const result = document.getElementById("searchResult");

    // Логіка для пошуку
    if (val.includes("рада")) {
        result.textContent = "Знайдено: Міська Рада Дніпра"; // Якщо є "рада" в запиті
    } else if (val.includes("місто")) {
        result.textContent = "Знайдено: Про місто Дніпро"; // Якщо є "місто" в запиті
    } else {
        result.textContent = "Нічого не знайдено"; // Якщо нічого не знайдено
    }
});

// Додаємо слухач події для пошуку по рішенню
document.getElementById("searchInput").addEventListener("keyup", filterDecisions);

// Ініціалізація бібліотеки AOS для анімацій
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1200, // Час анімації
        easing: 'ease-in-out', // Тип анімації
        once: true, // Анімація буде відбуватись лише один раз при прокручуванні
    });
});
