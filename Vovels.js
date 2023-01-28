const elForm = document.querySelector("#form");
const elInput = document.querySelector("#input");
const elBtn = document.querySelector(".button");
const vowels = document.querySelector(".result");

let array = ["A", "E", "I", "O", "U", "Y", "y", "a", "e", "i", "o", "u"];
let result = 0;

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  vowels.textContent = "Amount of Vowels:";

  let value = elInput.value.trim();

  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (value[i] === array[j]) {
        result++;
      }
    }
  }
  vowels.textContent += `(${result})`;
});
d;
