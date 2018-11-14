
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
    const checkboxes = Array.from(form.elements).filter(element => element.type === 'checkbox');
    const checkedBoxes = checkboxes.filter(checkbox => checkbox.checked === true);
    const checkedData = checkedBoxes.map(checkbox => checkbox.value);
    return checkedData;
  }

  //This function will update the order form when a value is selected/deselected

  function addMenuItem() {
    var menuItem = document.getElementsByClassName('menuItem');
    var inputArea = document.querySelector('h2');
    var li = document.createElement('li');
      for (let i = 0; i < menuItem.length; i++){
        menuItem[i].onclick=function(){
        if (menuItem.checked === true) {
          console.log(menuItem.value[i]);

        // li.createTextNode = menuItem.value;
        // inputArea.append(li);
        //   event.preventDefault();
        }
      }
    }
  }

// This loop will place a two selection limit to the 'Sides' section

function sidesLimit(sides, limit){
	var sides = document.getElementsByName('sides');
	var limit = 2
	for (let i = 0; i < sides.length; i++){
		sides[i].onclick=function(){
		let checkedcount = 0
		for (let i = 0; i < sides.length; i++)
			checkedcount += (sides[i].checked)? 1 : 0
		if (checkedcount > limit){
			alert("You may only select a maximum of "+limit+" sides")
			this.checked=false
			}
		}
	}
}


// var listItem = document.createElement('li');
// var menuItem = document.getElementById('yourSandwich')
// var input = document.querySelectorAll('input');
