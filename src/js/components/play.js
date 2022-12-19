const playback = document?.querySelectorAll('.playback');

playback.forEach(elem => {
  elem.addEventListener('click', (e) => {
    elem.classList.toggle('play');
  })
})
