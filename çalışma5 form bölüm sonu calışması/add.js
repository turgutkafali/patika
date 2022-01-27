/*
1-formu seç
2-ınput bilgisini UL icerisine ekle
3-Form icindeki bilgiyi sıfırla
4-Eger forma bilgi girilmezse kullanıcıya uyar
*/

let userFormDom = document.querySelector('#userForm');
userFormDom.addEventListener('submit', formHandler)
const alertDOM =document.querySelector('#alert')

const alertFunction = (title, mesaj) =>`<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>${title} </strong> ${mesaj}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function formHandler(event){
    event.preventDefault();
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')
    if(USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value, SCORE.value)// göndrdikten son sıfırla
        USER_NAME.value  = ''
        SCORE.value = ''
    }else{
        alertDOM.innerHTML = alertFunction(
            'baslış bilgisi',
            'lütfen bir değer giriniz');
    }
     
}

let userListDom = document.querySelector('#userList');
const addItem = (userName, score) =>{
    let liDom = document.createElement('li');
    liDom.innerHTML= `${userName} ${score}`
    userListDom.append(liDom);
}
