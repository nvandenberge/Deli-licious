// This function will add radio button value
  const bread = document.getElementById('bread-select')
  const li = document.createElement('li') //Used to create <li> element
  const breadItem = document.querySelectorAll('.breadItem:checked')
  const form = document.getElementById('menu')

  function addRadio() {
    const radios = Array.from(form.elements).filter(element => element.type === 'radio'); // 'Array.from(form.elements)' method creates a new, shallow-copied Array instance from an array-like or iterable objects from the form element
    const checkedRadio = radios.filter(radio => radio.checked === true); //filter for selected radio button
    var radioData = checkedRadio.map(radio => radio.value); //creates an array with value from selected radio 
    // console.log(radioData);

    if (breadItem.length = 1) {
      li.innerText = radioData;
      bread.appendChild(li);
    }
  }

document.querySelectorAll('[type="radio"]').forEach(element => element.addEventListener('change', addRadio, false));

// This function will add selected checkbox value, remove them, and place 2 max limit on Sides
function addCheckbox() {
  const ul = document.getElementById('output')
  const sideItems = document.querySelectorAll('.sideItem:checked')
  const li = document.createElement('li')

  if (sideItems.length > 2) {
    alert('You may only select a maximum of 2 sides')
    this.checked = false;
  } else if (this.checked === true) {
    li.innerHTML = this.value
    ul.appendChild(li)
  } else if (this.checked === false) {
    const children = Array.from(ul.children);
    children.forEach(function(child) {
      if (this.value === child.innerText) {
        ul.removeChild(child);
      }
    }.bind(this))
  }
}

document.querySelectorAll('[type="checkbox"]').forEach(element => element.addEventListener('change', addCheckbox, false));
