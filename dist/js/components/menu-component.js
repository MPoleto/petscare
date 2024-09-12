const checkbox = document.querySelector('[data-checkbox]');
const linksMenu = document.querySelectorAll('[data-menu-link]');
linksMenu.forEach((element) => {
    element.addEventListener('click', (event) => {
        if (event.target) {
            checkbox.checked = false;
        }
    });
});
