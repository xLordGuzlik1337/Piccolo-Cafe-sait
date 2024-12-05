document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".menu-image img");
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.getElementById("close-modal");
    const prevImage = document.getElementById("prev-image");
    const nextImage = document.getElementById("next-image");
    let currentImageIndex = 0;

    // Открытие модального окна
    function openModal(index) {
        modal.style.display = "flex";
        modalImage.src = images[index].src;
        currentImageIndex = index;
    }

    // Закрытие модального окна
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Открытие модального окна по изображению
    images.forEach((image, index) => {
        image.addEventListener("click", () => {
            openModal(index);
        });
    });

    // Переход к предыдущему изображению
    prevImage.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
        modalImage.src = images[currentImageIndex].src;
    });

    // Переход к следующему изображению
    nextImage.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
        modalImage.src = images[currentImageIndex].src;
    });

    // Бургер-меню
    const burgerMenu = document.getElementById("burger-menu");
    const menuList = document.getElementById("menu-list");

    burgerMenu.addEventListener("click", () => {
        menuList.classList.toggle("open");
    });

    // Добавление зума при клике на изображение в модальном окне
    let zoomLevel = 1;
    const maxZoom = 3; // Максимальный уровень зума
    const zoomStep = 0.1; // Шаг увеличения

    // Функция для увеличения изображения
    function zoomImage() {
        if (zoomLevel < maxZoom) {
            zoomLevel += zoomStep;
            modalImage.style.transform = `scale(${zoomLevel})`;
        }
    }

    // Функция для уменьшения изображения
    function unzoomImage() {
        if (zoomLevel > 1) {
            zoomLevel -= zoomStep;
            modalImage.style.transform = `scale(${zoomLevel})`;
        }
    }

    // Добавляем обработчики для зума
    modalImage.addEventListener("wheel", (e) => {
        if (e.deltaY > 0) {
            unzoomImage();
        } else {
            zoomImage();
        }
    });
});
