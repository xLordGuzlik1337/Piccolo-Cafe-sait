document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".menu-image img");
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.getElementById("close-modal");
    const prevImage = document.getElementById("prev-image");
    const nextImage = document.getElementById("next-image");
    let currentImageIndex = 0;
    let isZoomed = false;
    let startX, startY;

    // Открытие модального окна
    function openModal(index) {
        modal.style.display = "flex";
        modalImage.src = images[index].src;
        currentImageIndex = index;
    }

    // Закрытие модального окна
    function closeModalWindow() {
        modal.style.display = "none";
    }

    // Переход к предыдущему изображению
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        modalImage.src = images[currentImageIndex].src;
    }

    // Переход к следующему изображению
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        modalImage.src = images[currentImageIndex].src;
    }

    // Добавляем обработчики событий для изображений
    images.forEach((image, index) => {
        image.addEventListener("click", () => openModal(index));
    });

    // Обработчики событий для модального окна
    closeModal.addEventListener("click", closeModalWindow);
    prevImage.addEventListener("click", showPrevImage);
    nextImage.addEventListener("click", showNextImage);

    // Закрытие модального окна при клике вне изображения
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModalWindow();
    });

    // Обработчик для клика по изображению в меню
    images.forEach(image => {
        image.addEventListener("click", () => {
            if (!isZoomed) {
                image.classList.add("zoomed");
                isZoomed = true;
            } else {
                image.classList.remove("zoomed");
                image.style.left = "";
                image.style.top = "";
                isZoomed = false;
            }
        });

        // Обработчики для перетаскивания увеличенного изображения
        image.addEventListener("mousedown", (e) => {
            if (isZoomed) {
                startX = e.clientX - image.offsetLeft;
                startY = e.clientY - image.offsetTop;
                image.classList.add("grabbing");

                const onMouseMove = (e) => {
                    image.style.position = "absolute";
                    image.style.left = `${e.clientX - startX}px`;
                    image.style.top = `${e.clientY - startY}px`;
                };

                const onMouseUp = () => {
                    document.removeEventListener("mousemove", onMouseMove);
                    document.removeEventListener("mouseup", onMouseUp);
                    image.classList.remove("grabbing");
                };

                document.addEventListener("mousemove", onMouseMove);
                document.addEventListener("mouseup", onMouseUp);
            }
        });
    });
});
