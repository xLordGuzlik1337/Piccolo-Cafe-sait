// Снежинки
function createSnowflakes() {
    for (let i = 0; i < 50; i++) {
        let snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 5 + 3 + 's';
        snowflake.style.animationDelay = Math.random() * 10 + 's';
        document.body.appendChild(snowflake);
    }
}

// Запуск создания снежинок
window.onload = createSnowflakes;

// Intersection Observer для появления секций
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.section').forEach((section) => {
    observer.observe(section);
});

// Управление бургер-меню
document.getElementById('burger-menu').addEventListener('click', () => {
    document.querySelector('.main-menu').classList.toggle('active');
});


let lastScrollTop = 0;
const header = document.querySelector(".main-menu");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Прокрутка вниз - скрываем шапку
        header.classList.add("hidden");
    } else {
        // Прокрутка вверх - показываем шапку
        header.classList.remove("hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Обновляем последнее значение прокрутки
});


