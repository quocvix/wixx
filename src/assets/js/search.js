const inputBox = document.querySelector(".input-box");
const search = document.querySelector(".search");
const close = document.querySelector(".close-icon");

console.log(inputBox);

search.addEventListener("click", () => inputBox.classList.add("open"));
close.addEventListener("click", () => inputBox.classList.remove("open"));

// //
// const heartIcon = document.querySelector(".like-button .heart-icon");
// const likesAmountLabel = document.querySelector(".like-button .likes-amount");

// console.log(heartIcon);

// let likesAmount = 8;

// heartIcon.addEventListener("click", () => {
//     heartIcon.classList.toggle("liked");
//     if (heartIcon.classList.contains("liked")) {
//         likesAmount++;
//     } else {
//         likesAmount--;
//     }
//     likesAmountLabel.innerHTML = likesAmount;
// });
