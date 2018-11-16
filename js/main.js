const form = document.querySelector('form');

//This function will create an array from the radio buttons and return which every one is checked
  function serializeRadio (form) {
    const radios = Array.from(form.elements).filter(element => element.type === 'radio'); // 'Array.from(form.elements)' method creates a new, shallow-copied Array instance from an array-like or iterable objects from the form
    const checkedRadio = radios.filter(radio => radio.checked === true);
    const radioData = checkedRadio.map(radio => radio.value);
    return radioData;
  }

//This function will create an array from the radio buttons and return which every one is checked
  function serializeCheckbox (form) {
    const li = document.createElement('li')
    const checkboxes = Array.from(form.elements).filter(element => element.type === 'checkbox');
    const checkedBoxes = checkboxes.filter(checkbox => checkbox.checked === true);
    const checkedData = checkedBoxes.map(checkbox => checkbox.value);
    document.getElementById('output').appendChild(li).innerHTML=checkedData;
  }


// This function will place a two selection max limit on the 'Sides' options
// Why does the alert run twice and still adds value?

function maxTwo () {
    document.querySelectorAll('.sideItem').forEach(element => element.addEventListener('change', maxTwo, false));

    if (document.querySelectorAll('.sideItem:checked').length > 2) {
       alert('You may only select a maximum of 2 sides')
        this.checked = false;
    }
}





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
