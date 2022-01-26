
let formDom = document.querySelector('#userForm');
formDom.addEventListener('submit', formSubmit);

function formSubmit(event){
    event.preventDefault();
    console.log('buraya ulaştın');
    let scoreInputDom = document.querySelector('#score');
    console.log(scoreInputDom.value);// seçilmiş olan inputun kesinlikle name olması gerekmetedir
    localStorage.setItem('score', scoreInputDom.value);
}