const ratingBtns = Array.from(document.querySelector(`.numbers`).children);
const btnSubmit = document.querySelector(`.btn-submit`);
const pRating = document.querySelector(`.current-score`);

const divMainField = document.querySelector(`.main-field`);
let value = 0;

ratingBtns.forEach((btn) => {
  btn.addEventListener(`click`, (e) => {
    let currentBtn = e.target;
    const allBtns = Array.from(e.target.parentElement.children);
    if (currentBtn.classList.contains(`notClicked`)) {
      currentBtn.classList.remove(`notClicked`);
      currentBtn.classList.add(`clicked`);
      value = Number(currentBtn.textContent);
      allBtns.forEach((btn) => {
        if (btn.textContent !== e.target.textContent) {
          btn.classList.remove(`clicked`);
          btn.classList.add(`notClicked`);
        }
      });
    } else {
      currentBtn.classList.remove(`clicked`);
      currentBtn.classList.add(`notClicked`);
      value = 0;
    }
    console.log(value);
  });
});

btnSubmit.addEventListener(`click`, () => {
  if (value === 0) {
    return;
  }
  let currentElements = Array.from(divMainField.children);
  currentElements.forEach((el) => {
    if (!el.classList.contains(`after`)) {
      el.remove();
    } else {
      el.style.display = `block`;
    }
  });
  pRating.textContent = `You selected ${value} out of 5`;
  pRating.stye.display = `block`;
});
