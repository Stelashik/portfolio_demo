// Находим все заголовки проектов
const projectTitles = document.querySelectorAll('.project-title');

projectTitles.forEach(title => {
    title.addEventListener('click', () => {
        // Находим следующий элемент с деталями
        const details = title.nextElementSibling;

        // Переключаем видимость блока
        if (details.style.display === "none") {
            details.style.display = "block";
        } else {
            details.style.display = "none";
        }
    });
});