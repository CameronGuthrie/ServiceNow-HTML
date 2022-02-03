`use strict`
import * as DOM from './dom.js';

let placeholder = {};

let add = (x,y) => placeholder = {x:x,y:y,calculation:"+",result:x+y};
let subtract = (x,y) => placeholder = {x:x,y:y,calculation:"-",result:x-y};
let multiply = (x,y) => placeholder = {x:x,y:y,calculation:"x",result:x*y};
let divide = (x,y) => placeholder = {x:x,y:y,calculation:"/",result:x/y};

let output = (x,y,calculation,result) => {
  let item = document.createElement(`li`);
  item.innerHTML = `${x} ${calculation} ${y} = ${result}`;
  item.classList.add(`list-group-item`);
  DOM.output.appendChild(item);
}

let clear = () => {
  DOM.output.innerHTML = ``;
  DOM.inputOne.value = ``;
  DOM.inputTwo.value = ``;
}

DOM.buttonAdd.onclick = () => add(Number(DOM.inputOne.value), Number(DOM.inputTwo.value));
DOM.buttonSubtract.onclick = () => subtract(Number(DOM.inputOne.value), Number(DOM.inputTwo.value));
DOM.buttonMultiply.onclick = () => multiply(Number(DOM.inputOne.value), Number(DOM.inputTwo.value));
DOM.buttonDivide.onclick = () => divide(Number(DOM.inputOne.value), Number(DOM.inputTwo.value));
DOM.buttonEquals.onclick = () => output(placeholder.x,placeholder.y,placeholder.calculation,placeholder.result);
DOM.buttonClear.onclick = () => clear();