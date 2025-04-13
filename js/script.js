// Слухач події для кнопки зміни теми
document.getElementById("theme-btn").addEventListener("click", () => {
    // Перемикає клас "dark-theme" для зміни теми
    document.body.classList.toggle("dark-theme");
});

// Слухач події для поля пошуку
document.getElementById("searchInput").addEventListener("input", function () {
    const val = this.value.toLowerCase(); // Отримуємо текст з поля введення і перетворюємо його на нижній регістр
    const result = document.getElementById("searchResult"); // Отримуємо елемент для результатів пошуку

    // Логіка для пошуку
    if (val.includes("рада")) {
        result.textContent = "Знайдено: Міська Рада Дніпра"; // Якщо є "рада" в запиті
    } else if (val.includes("місто")) {
        result.textContent = "Знайдено: Про місто Дніпро"; // Якщо є "місто" в запиті
    } else {
        result.textContent = "Нічого не знайдено"; // Якщо нічого не знайдено
    }
});

// Функція для ініціалізації Анімацій на сторінці
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1200, // Час анімації
        easing: 'ease-in-out', // Тип анімації
        once: true, // Анімація буде відбуватись лише один раз при прокручуванні
    });
});
