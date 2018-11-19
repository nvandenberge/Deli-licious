// This function will add radio button value
function addRadio() {
    const bread = document.getElementById('bread-select')
    const li = document.createElement('li')

if (this.checked) {
      li.innerHTML = this.value
      bread.appendChild(li)
    } else if (this.checked === false) {
        if (this.value === li.innerHTML) {
          bread.removeChild(li);
        }
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




// const form = document.querySelector('form');
// const ul = document.getElementById('output')
// const menuItem = document.querySelectorAll('[type="checkbox"]:checked')
//
// function addCheckbox() {
//     if ((this.name === 'condiments' || 'toppings') && (menuItem.length > 2)) {
//       alert('You may only select a maximum of 2 sides')
//       this.checked = false;
//     } else if (this.checked === true) {
//       const li = document.createElement('li')
//       li.innerHTML = this.value
//       ul.appendChild(li)
//     } else if (this.checked === false) {
//       const children = Array.from(ul.children);
//       children.forEach(function(child) {
//         if (this.value === child.innerText) {
//           ul.removeChild(child);
//         }
//       }.bind(this))
//     }
// }
// document.querySelectorAll('[type="checkbox"]').forEach(element => element.addEventListener('change', addCheckbox, false));
