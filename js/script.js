'use strict';

// Переменная в которой содержится класс нашего иконочного меню.
let burgerMenu = document.querySelectorAll(".menu__icon");

// Выполняем цикл для определения кол-ва элементов.
for (let i = 0; i < burgerMenu.length; i++) {
    // Создаём константу "burgerMenus" на основу наших итераций.
    const burgerMenus = burgerMenu[i];
    // Добавляем событие на нажатие для нашей константы "burgerMenus".
    burgerMenus.addEventListener("click", function(e) {
        // Добавляем класс _active.
        burgerMenus.classList.toggle("_active");
        // Проверяем есть ли у нас класс _active для дальнейшего включение(отключение) скроллинга странички.
        if (burgerMenus.classList.contains("_active")) {
            // Если истинно то скрываем
            document.body.style.overflow = "hidden";
        }else {
            // Если ложно то отображаем
            document.body.style.overflow = "visible";
        }
    });
}