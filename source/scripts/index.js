/* в этот файл добавляет скрипты*/
/* Бургер-меню */
const navToggle = document.querySelector('.main-header__burger');
const navList = document.querySelector('.navigation__list');

navList.classList.remove('navigation__list--no-js');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('main-header__burger--open');
  navList.classList.toggle('navigation__list--is-opened');
});


