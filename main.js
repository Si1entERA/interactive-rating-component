
const ratingSection = document.querySelector('.rating-section');
const thankYouState = document.querySelector('.thank-you-state-section');

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
  ratingSection.style.display = 'none'
}

const addThankYouState = () => {
  thankYouState.style.display = 'flex'
}

submit.addEventListener('click', () => {
  removeRatingPage();
  addThankYouState();
})