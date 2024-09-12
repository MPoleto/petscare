const checkbox: HTMLInputElement = document.querySelector('[data-checkbox]');
const linksMenu: NodeListOf<HTMLLIElement> = document.querySelectorAll('[data-menu-link]');


linksMenu.forEach((element) => {
  element.addEventListener('click', (event) => {
    if (event.target) {
      checkbox.checked = false;
    }
  })
});
