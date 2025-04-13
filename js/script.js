// Перемикання між темною і світлою темою
document.getElementById("theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// Функція фільтрації рішень
function filterDecisions() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const table = document.getElementById("decisionsTable");
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        let match = false;

        // Перевірка кожної клітинки в рядку
        for (let j = 1; j < cells.length; j++) {
            const cell = cells[j];
            if (cell) {
                if (cell.innerText.toLowerCase().indexOf(filter) > -1) {
                    match = true;
                }
            }
        }

        // Показати або сховати рядок в залежності від результатів фільтрації
        if (match) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

// Додаємо слухач події для пошуку
document.getElementById("searchInput").addEventListener("keyup", filterDecisions);

// Ініціалізація бібліотеки AOS для анімацій
document.addEventListener("DOMContentLoaded", () => {
    AOS.init();
});
