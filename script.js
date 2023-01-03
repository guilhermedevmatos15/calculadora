const result = document.querySelector('section.result');
const numbers = [...document.querySelectorAll('td.number')];
const operators = [...document.querySelectorAll('td.operators')];
const clear = document.querySelector('td.clear');
const backspace = document.querySelector('td.backspace');
const equal = document.querySelector('td.equal');

numbers.map((element) => {
   element.addEventListener('click', () => {
      const number = Number(element.innerHTML);
      result.innerHTML+=number;
   })
});
operators.map((element) => {
   element.addEventListener('click', () => {
      const operator = element.id;
      result.innerHTML+=operator;
   })
});
clear.addEventListener('click', ()=>{ result.innerHTML='' });
backspace.addEventListener('click', () => {
   result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length - 1)
});
equal.addEventListener('click', ()=>{
   const operation = result.innerHTML.replace('X', '*').replace(',', '.').replace('÷', '/');
   const resultOperation = eval(operation);
   result.innerHTML = resultOperation;
});