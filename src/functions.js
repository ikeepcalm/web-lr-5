function changeContents() {
  let topMiddle = document.getElementById('3').innerHTML;
  let bottomRight = document.getElementById('6').innerHTML;
  document.getElementById('3').innerHTML = bottomRight;
  document.getElementById('6').innerHTML = topMiddle;
}

function parallelogramArea() {
  let base = 5;
  let height = 3;
  let area = base * height;
  document.getElementById('area-button').innerHTML = 'Parallelogram area: ' + area;
}

function findBiggestDigit() {
  let number = document.getElementById('number-area').value;
  let digits = number.toString().split('');
  let biggestDigit = Math.max(...digits);
  alert('The biggest digit is: ' + biggestDigit);
  saveCookie('biggestDigit', biggestDigit);
}

function saveCookie(name, value) {
  const d = new Date();
  d.setTime(d.getTime() + (2 * 24 * 60 * 60 * 1000));
  const expires = 'expires=' + d.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/`;
}

function getCookie(name) {
  const nameEQ = name + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length);
    }
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  location.reload();
}

function rightRadio(event) {
  const { checked } = event.target;
  if (checked) {
    const centerRadio = document.getElementById('center-radio');
    centerRadio.checked = false;
    localStorage.setItem('rightRadio', 'true');
  }
}

function centerRadio(event) {
  const { checked } = event.target;
  if (checked) {
    const centerRadio = document.getElementById('right-radio');
    centerRadio.checked = false;
    localStorage.setItem('rightRadio', 'false');
  }
}