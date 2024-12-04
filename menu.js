document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".menu-image img");

    images.forEach(image => {
        let isZoomed = false;
        let startX, startY;

        // Обработчик для клика по изображению
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
