let fullName = prompt('Lütfen adınızı giriniz: ');
let myName = document.querySelector('#myName');
myName.innerHTML = `${fullName[0].toUpperCase()}${fullName.slice(1).toLowerCase()}`;