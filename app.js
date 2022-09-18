// https://www.omnicalculator.com/conversion/square-miles-to-square-km-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const squarekmRadio = document.getElementById('squarekmRadio');
const squareMilesRadio = document.getElementById('squareMilesRadio');

let squarekm;
let squareMiles = v; 

// labels of the inpust
const variable = document.getElementById('variable');

squarekmRadio.addEventListener('click', function() {
  variable.textContent = 'Square Miles';
  squareMiles = v;
  result.textContent = '';
});

squareMilesRadio.addEventListener('click', function() {
  variable.textContent = 'Square km';
  squarekm = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(squarekmRadio.checked)
    result.textContent = `Square km = ${computesquarekm().toFixed(5)}`;

  else if(squareMilesRadio.checked)
    result.textContent = `Square Miles = ${computesquareMiles().toFixed(5)}`;
})

// calculation

function computesquarekm() {
  return Number(squareMiles.value) * 2.59;
}

function computesquareMiles() {
  return Number(squarekm.value) / 2.59;
}