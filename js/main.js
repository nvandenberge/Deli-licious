const form = document.getElementById('menu')
const radioButtons = document.getElementById('radioButtons')
const checkboxButtons = document.getElementById('checkboxButtons')
const sideItems = document.querySelectorAll('.sideItem:checked')

function renderRadio(data) {
  let {
    bread,
    cheese,
    meats
  } = data; //Creates objects with the selected radio value

  return `<ul id='radioOutput'>
    <h2 id ='bread-select'>Bread</h2>
    <li>${bread ? bread : ''}</li>
    <h2 id ='cheese-select'>Cheese</h2>
    <li>${cheese ? cheese : ''}</li>
    <h2 id ='meat-select'>Meat</h2>
    <li>${meats ? meats : ''}</li>
  </ul>`
} //Generatres headers and list items for selected radio buttons
  //If true, display value, if false, display blank

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


function renderCheckbox ({ toppings = [], condiments = [], sides = [] }) {

  // if (sides.length === 2) {
  //     sides.checked
  //   }
  //   sides.checked=false;
  // }
  // else {
  return `
      <ul id='checkboxOutput'>
      <h2 id ='toppings-select'>Toppings</h2>
      ${toppings.map(topping => `<li>${topping}</li>`).join('')}
      <h2 id ='condiments-select'>Condiments</h2>
      ${condiments.map(condiment => `<li>${condiment}</li>`).join('')}
      <h2 id ='sides-select'>Sides(2)</h2>
      ${sides.map(side => `<li>${side}</li>`).join('')}
    </ul>`;
  }


function addCheckbox() {
  const checkboxes = Array.from(form.elements).filter(element => element.type === 'checkbox');
  const checkedBoxes = checkboxes.filter(checkbox => checkbox.checked === true);
  const checkboxData = checkedBoxes.reduce((obj, checkbox) => {
  obj[checkbox.name] = [...(obj[checkbox.name]||[]), checkbox.value];
  return obj;
}, {});
  checkboxButtons.innerHTML = renderCheckbox(checkboxData);
}

document.querySelectorAll('[type="checkbox"]').forEach(element => element.addEventListener('change', addCheckbox, false));

const breadItems = document.querySelectorAll('.breadItem:checked')
function validateForm () {
  if (breadItems.length === 0) {
    alert('Please select your bread.')
    breadItem.focus();
    return false;
 }
 else {

 }
}

document.querySelectorAll('[type="submit"]').forEach(element => element.addEventListener('click', validateForm, false));
