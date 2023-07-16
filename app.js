const ratingInner = document.querySelector(".rating-inner");
const ratingButtons = document.querySelectorAll(".rating-button-container button");
const submitBtn = document.querySelector("#submit");
const ratingThanks = document.querySelector(".rating-num");
let rating;

const thankYou = document.querySelector(".thank-you-container");

ratingButtons.forEach( (btn) => {
    btn.addEventListener('click', () => {
        // removes the active class from each button
        ratingButtons.forEach( (item) => {item.classList.remove("active")});

        // stores the rating chosen
        rating = btn.innerHTML;

        // adds the "active" class to the pressed button
        btn.classList.add("active");
    });
});

submitBtn.addEventListener("click", () => {
    if (rating !== undefined) {
        thankYou.classList.remove("d-none");
        thankYou.classList.add("d-block");

        ratingInner.classList.add("d-none");

        ratingThanks.innerHTML = rating;
    }
});