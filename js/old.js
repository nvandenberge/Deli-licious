/ //This function will create an array from the radio buttons and return which every one is checked
// function serializeRadio(form) {
//   const radios = Array.from(form.elements).filter(element => element.type === 'radio'); // 'Array.from(form.elements)' method creates a new, shallow-copied Array instance from an array-like or iterable objects from the form
//   const checkedRadio = radios.filter(radio => radio.checked === true);
//   const radioData = checkedRadio.map(radio => radio.value);
//   return radioData;
// }
//
// //This function will create an array from the radio buttons and return which every one is checked
// function serializeCheckbox(form) {
//   const checkboxes = Array.from(form.elements).filter(element => element.type === 'checkbox');
//   const checkedBoxes = checkboxes.filter(checkbox => checkbox.checked === true);
//   const checkedData = checkedBoxes.map(checkbox => checkbox.value);
//   // document.getElementById('output').appendChild
//   li.innerHTML = checkedData;
// }


// Working function that uses a loop
// function sidesLimit(sides, limit){
// 	var sides = document.getElementsByName('sides');
// 	var limit = 2
// 	for (let i = 0; i < sides.length; i++){
// 		sides[i].onclick=function(){
// 		let checkedcount = 0
// 		for (let i = 0; i < sides.length; i++)
// 			checkedcount += (sides[i].checked)? 1 : 0
// 		if (checkedcount > limit){
// 			alert(`You may only select a maximum of ${limit} sides`)
// 			this.checked=false
// 			}
// 		}
// 	}
// }


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
