const form = document.querySelector('form');

function maxTwo() {
    var ul = document.getElementById('output')
    var menuItem = document.querySelectorAll('[type="checkbox"]:checked')

    if (!(this.name === 'condiments' || 'toppings') && (menuItem.length > 2)) {
      alert('You may only select a maximum of 2 sides')
      this.checked = false;
    } else if (this.checked === true) {
      const li = document.createElement('li')
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
document.querySelectorAll('[type="checkbox"]').forEach(element => element.addEventListener('change', maxTwo, false));
