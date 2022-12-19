let flag = false;

const scrollAnim = (activeSelector, mainSelector) => {
  const time = 3000;

  if (!flag) {
    mainSelector?.forEach(elem => {
      elem.classList.add(activeSelector);
      let initialValue = 0;
      let num = +elem.dataset.num;
      let step = 1000;

      let t = Math.round(time / (num / step));

      let interval = setInterval(() => {
        initialValue += step;
        if (initialValue <= num) {
          elem.innerHTML = initialValue;
          flag = true;
        } else {
          flag = true;
          clearInterval(interval);
        }
      }, t);

    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  scrollAnim('submit__subscr--active', document.querySelectorAll('.submit__subscr'));
});
