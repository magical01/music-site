const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;
const main = document.querySelector('.main');

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  if (scrollDistance >= headerHeight) {
    header.classList.add('header--fixed');
    main.style.marginTop = `${headerHeight}px`;
  } else {
    header.classList.remove('header--fixed');
    main.style.marginTop = null;
  }
});
