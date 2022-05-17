import { createStore } from "redux"; // data를 넣는 곳, state

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0) => {
  return count;
};

const countStore = createStore(countModifier);

console.log(countStore.getState());
