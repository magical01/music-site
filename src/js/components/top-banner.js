const topBanner = document?.querySelector('.top-banner');

topBanner?.addEventListener('click', (e) => {
  if (e.target.classList.contains('top-banner__close')) {
    topBanner.classList.add('is-hidden');
    document.querySelector('.header').style.paddingTop = `62px`;
  }
});
