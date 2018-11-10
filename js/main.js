
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

// This loop will place a two selection limit to the 'Sides' section
