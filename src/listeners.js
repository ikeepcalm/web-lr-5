document.addEventListener('DOMContentLoaded', function() {
  const biggestDigit = getCookie('biggestDigit');

  if (biggestDigit) {
    alert('The number saved in the cookie is: ' + biggestDigit);
    const deleteConfirm = confirm('Do you want to delete the cookie?');
    if (deleteConfirm) {
      deleteCookie('biggestDigit');
    }
  }

  if (localStorage.getItem('rightRadio') === 'true') {
    document.getElementById('right-radio').checked = true;
    document.getElementById('2').style.textAlign = 'right';
    document.getElementById('4').style.textAlign = 'right';
    document.getElementById('5').style.textAlign = 'right';
  } else {
    document.getElementById('center-radio').checked = true;
    addListeners();
  }

  createList();
});


function createList() {
  const listItems = ['1', '2', '3', '4', '5', '6', '7'];

  listItems.forEach(item => {
    const documentItem = document.getElementById(item);

    documentItem.addEventListener('select', function() {
      documentItem.style.backgroundColor = 'red';
      const itemDiv = document.createElement('div');
      itemDiv.id = `item-${item}`;
      itemDiv.innerHTML = `<strong>Item ${item}</strong>`;

      itemDiv.addEventListener('click', () => {
        addInputField(documentItem, itemDiv);
      });

      documentItem.appendChild(itemDiv);
    });
  });
}

function addInputField(documentItem, itemDiv) {
  if (itemDiv.querySelector('form')) return;
  const form = document.createElement('form');
  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.placeholder = 'Enter item';
  const addButton = document.createElement('button');
  addButton.type = 'button';
  addButton.textContent = 'Add Row';
  const saveButton = document.createElement('button');
  saveButton.type = 'button';
  saveButton.textContent = 'Save List';
  const ol = document.createElement('ol');
  addButton.addEventListener('click', () => {
    if (inputField.value.trim() === '') return;

    const li = document.createElement('li');
    li.textContent = inputField.value;
    ol.appendChild(li);

    inputField.value = '';
  });

  saveButton.addEventListener('click', () => {
    const items = [];
    ol.querySelectorAll('li').forEach(li => items.push(li.textContent));
    localStorage.setItem(itemDiv.id, JSON.stringify(items));

    const displayDiv = document.createElement('div');
    displayDiv.innerHTML = `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
    documentItem.removeChild(itemDiv);
    documentItem.appendChild(displayDiv);
  });

  form.appendChild(inputField);
  form.appendChild(addButton);
  form.appendChild(saveButton);
  form.appendChild(ol);

  itemDiv.appendChild(form);
}

function addListeners() {
  document.getElementById('2').addEventListener('mouseout', function() {
    if (localStorage.getItem('rightRadio') === 'true') {
      document.getElementById('2').style.textAlign = 'right';
    }
  });

  document.getElementById('4').addEventListener('mouseout', function() {
    if (localStorage.getItem('rightRadio') === 'true') {
      document.getElementById('4').style.textAlign = 'right';
    }
  });

  document.getElementById('5').addEventListener('mouseout', function() {
    if (localStorage.getItem('rightRadio') === 'true') {
      document.getElementById('5').style.textAlign = 'right';
    }
  });
}