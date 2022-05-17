const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handelAdd = () => {
  count++;
  updateText();
};

const handelMinus = () => {
  count--;
  updateText();
};

add.addEventListener("click", handelAdd);
minus.addEventListener("click", handelMinus);
