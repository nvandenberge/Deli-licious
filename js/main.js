const form = document.getElementById('menu')
const radioButtons = document.getElementById('radioButtons')
const checkboxButtons = document.getElementById('checkboxButtons')

function renderRadio (data) {
let { bread, cheese, meats } = data;

  return `<ul id='radioOutput'>
    <h2 id ='bread-select'>Bread</h2>
    <li>${bread ? bread : ''}</li>
    <h2 id ='cheese-select'>Cheese</h2>
    <li>${cheese ? cheese : ''}</li>
    <h2 id ='meat-select'>Meat</h2>
    <li>${meats ? meats : ''}</li>
  </ul>`
}

function addRadio() {
  const radios = Array.from(form.elements).filter(element => element.type === 'radio'); //'Array.from(form.elements)' method creates a new, shallow-copied Array instance from an array-like or iterable objects from the form element
  const checkedRadio = radios.filter(radio => radio.checked === true); //filter for selected radio button
  let radioData = {};
  checkedRadio.forEach(radio => {
    return radioData[radio.name] = radio.value
  })
  radioButtons.innerHTML = renderRadio(radioData);
}
document.querySelectorAll('[type="radio"]').forEach(element => element.addEventListener('change', addRadio, false));


function renderCheckbox (data) {
let { toppings, condiments, sides } = data;

  return `<ul id='checkboxOutput'>
    <h2 id ='toppings-select'>Toppings</h2>
    <li>${toppings ? toppings : ''}</li>
    <h2 id ='condiments-select'>Condiments</h2>
    <li>${condiments ? condiments : ''}</li>
    <h2 id ='sides-select'>Sides</h2>
    <li>${sides ? sides : ''}</li>
  </ul>`
}

function addCheckbox() {
  const checkboxes = Array.from(form.elements).filter(element => element.type === 'checkbox');
  const checkedBoxes = checkboxes.filter(checkbox => checkbox.checked === true);
  let checkboxData = {};
  checkedBoxes.forEach(checkbox => {
    // var checkedData = checkedBoxes.map(checkbox => checkbox.value);
    return checkboxData[checkbox.name] = checkbox.value
  })
  checkboxButtons.innerHTML = renderCheckbox(checkboxData);
}
document.querySelectorAll('[type="checkbox"]').forEach(element => element.addEventListener('change', addCheckbox, false));
