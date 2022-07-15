function addInputField() {
  let form = document.getElementById('form');
  let inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.className = 'userInput';
  inputField.maxLength = '10';
  form.appendChild(inputField);
}

function removeInputField() {
  let form = document.getElementById('form');
  if (form.childElementCount > 2) {
  form.removeChild(form.lastElementChild);
  }
}

function convertTimeToNum(time) {
  if (!time.includes(':')) {
    return parseFloat(time);
  } else if (time.includes(':')) {
    const [hours, minutes] = time.split(':');
    const totalMinutes = (+hours) * 60 + (+minutes);
    return totalMinutes / 60;
  }
}

function addNumbers() {
  let userInputs = document.getElementsByClassName('userInput');
  let resultDisplay = document.getElementById('resultDisplay');

  let myResult = 0;
  for (let i = 0; i < userInputs.length; i++) {
    // add user inputs to result variable
    myResult += convertTimeToNum(userInputs[i].value) || 0;
  }
  resultDisplay.innerHTML = (myResult).toFixed(2) + ' ' + 'hours';
}