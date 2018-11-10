(function () {
  const form = document.querySelector('form');

//This function will create an array from the radio buttons and return which every one is checked
  function serializeRadio (form) {
    const radios = Array.from(form.elements).filter(element => element.type === 'radio');

    const checkedRadio = radios.filter(radio => radio.checked === true);
    return checkedRadio
  }

//This function will create an array from the radio buttons and return which every one is checked
  function serializeCheckbox (form) {
    const checkboxes = Array.from(form.elements).filter(element => element.type === 'checkbox');

    const checkedBox = checkboxes.filter(checkbox => checkbox.checked === true);
    return checkedBox
  }

  console.log(serializeRadio(form));
  console.log(serializeCheckbox(form));


})();

// 'Array.from(form.elements)' method creates a new, shallow-copied Array instance from an array-like or iterable objects from the form
