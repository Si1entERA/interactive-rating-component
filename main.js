const topSection = document.querySelector('.top');
const middleSection = document.querySelector('.middle');
const bottomSection = document.querySelector('.bottom');

const thankYouTop = document.querySelector('.thank-you-top');
const thankYouMiddle = document.querySelector('.thank-you-middle');
const thankYouBottom = document.querySelector('.thank-you-bottom');

const button = document.querySelectorAll('.btn');
const submit = document.querySelector('.submit');
const output = document.querySelector('.output');


button.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    button.forEach((btn) => btn.classList.remove('active'));
    e.currentTarget.classList.add('active'); 
    output.innerHTML = e.currentTarget.innerHTML
  })
})


const removeRatingPage = () => {
  topSection.style.display = 'none'
  middleSection.style.display = 'none'
  bottomSection.style.display = 'none'
}

const addThankYouState = () => {
  thankYouTop.style.display = 'flex'
  thankYouMiddle.style.display = 'block'
  thankYouBottom.style.display = 'flex'
}

submit.addEventListener('click', () => {
  removeRatingPage();
  addThankYouState();
})