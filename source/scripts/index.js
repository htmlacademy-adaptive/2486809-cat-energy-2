/* в этот файл добавляет скрипты*/
/* Бургер-меню */
const navCont = document.querySelector('.main-header__container--no-js');
const navToggle = document.querySelector('.main-header__burger--no-js');
const navList = document.querySelector('.navigation__list--no-js');
const navigation = document.querySelector('.main-header__nav--no-js');
const navLogo = document.querySelector('.main-header__logo-text--no-js');

navList.classList.remove('navigation__list--no-js');
navCont.classList.remove('main-header__container--no-js');
navToggle.classList.remove('main-header__burger--no-js');
navigation.classList.remove('main-header__nav--no-js');
navLogo.classList.remove('main-header__logo-text--no-js');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('main-header__burger--open');
  navList.classList.toggle('navigation__list--is-opened');
});
