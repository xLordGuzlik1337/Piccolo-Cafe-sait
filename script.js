// Снежинки
function createSnowflakes() {
    for (let i = 0; i < 50; i++) {
        let snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + 'vw'; // Случайное положение по горизонтали
        snowflake.style.animationDuration = Math.random() * 5 + 3 + 's'; // Случайная длительность
        snowflake.style.animationDelay = Math.random() * 10 + 's'; // Случайная задержка
        document.body.appendChild(snowflake);
    }
}

// Запуск создания снежинок
window.onload = createSnowflakes;


// Интерсекшн-Observer для анимации появления элементов
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.5 });

// Отслеживаем все секции с классом .section
document.querySelectorAll('.section').forEach((section) => {
    observer.observe(section);
});

// Управление бургер-меню
document.getElementById('burger-menu').addEventListener('click', () => {
    document.querySelector('.main-menu').classList.toggle('active');
});
