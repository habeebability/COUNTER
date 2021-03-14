let count = 0;
const value = document.querySelector('#value');
const decBtn = document.querySelector('#decrement');
const incBtn = document.querySelector('#increment');
const resBtn = document.querySelector('#reset');


incBtn.addEventListener('click', function(params) {
 count++
 renderCount()
})

decBtn.addEventListener('click', function(params) {
 count--
 renderCount()
})

resBtn.addEventListener('click', function(params) {
 count = 0
 renderCount()
})

function renderCount(params) {
  value.innerText = count;
  value.style.color = count < 0 ? 'red' : count === 0 ? 'black' : 'green'
}