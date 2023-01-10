const blob = document.querySelector(".blob");
const back = document.querySelector(".back");
const width = document.querySelector("#width");
const height = document.querySelector("#height");

//ranges

const text = document.querySelector(".style p");

height.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    if (height.value != "") {
      let i = parseInt(height.value);
      blob.style.height = `${i}px`;
      back.style.height = `${i}px`;
    }
  }
});
width.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    if (width.value != "") {
      let i = parseInt(width.value);
      blob.style.width = `${i}px`;
      back.style.width = `${i}px`;
    }
  }
});

function rangeOne() {
  const rangeTwo = document.querySelector("#rangeTwo").value;
  const rangeThree = document.querySelector("#rangeThree").value;
  const rangeFour = document.querySelector("#rangeFour").value;
  const rangeOne = document.querySelector("#rangeOne").value;

  let restOne = 100 - rangeOne;
  let restwo = 100 - rangeTwo;
  let restThree = 100 - rangeThree;
  let restFour = 100 - rangeFour;

  blob.style.borderRadius = `${rangeOne}% ${rangeTwo}% ${restwo}% ${restOne}% / ${rangeThree}% ${rangeFour}% ${restFour}% ${restThree}% `;
  text.innerHTML = `border-radius: ${rangeOne}% ${rangeTwo}% ${restwo}% ${restOne}% / ${rangeThree}% ${rangeFour}% ${restFour}% ${restThree}% `;
}

function handleClick() {
  navigator.clipboard.writeText(text.innerHTML);
}
