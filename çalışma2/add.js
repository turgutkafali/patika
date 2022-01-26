// function sayHiBye(firstName, lastName) {

//     // helper nested function to use below
//     function getFullName() {
//       return firstName + " " + lastName;
//     }
  
//     alert( "Hello, " + getFullName() );
//     alert( "Bye, " + getFullName() );
  
//   }
//   sayHiBye('turgut', 'kafalı');



//   function makeCounter() {
//     let count = 0;
  
//     return function() {
//       return count++;
//     };
//   }
  
//   let counter = makeCounter();
  
//   alert( counter() ); // 0
//   alert( counter() ); // 1
//   alert( counter() ); // 2
//   alert( counter() ); // 3
//   alert( counter() ); // 4
//   alert( counter() ); // 5

// function toplama (a, b){
//     var sonuc = a+b;
//         return sonuc;
//     }

// var toplamgoster = toplama(10, 3);
// console.log(toplamgoster);


// function faktöriyel(n){
//     if(n === 0){
//         return 1;
//     }else{
//         return n * faktöriyel(n-1);
//     }
// }



// function selamlama(param){
//     console.log('merhaba dunya')
// }
// selamlama()



// function hello(firstName){
//     console.log(`merhaba ${firstName}`);
// }
// hello('turgut');

// let turgut = (firstName) =>{console.log(`merhaba ${firstName}`)}
// turgut('turgut');


// let fullName = (firstName , lastName) =>{
//     let info = `merhaba ${firstName} ${lastName}`;
//     console.log(info);
//     return info;
// }
// fullName('turgut' , 'kafalı')



// let calisma = document.querySelector('#turgut');
// calisma.addEventListener('click', function deneme(){
//     console.log('tıklandı');
//     console.log(this.innerHTML = 'bilgi değişti');
// })


// let calisma = document.querySelector('#turgut');
// calisma.addEventListener('click' , java)

// function java(){
//     console.log('tıklama çalıştı');
//     console.log(this.innerHTML = 'javaScript harika');
// }



// //id=select olan nesne çağrılarak color değişkenine atandı
// const color = document.querySelector("#select");
// //color değişkenine change etkinliği etkinliği atandı ve fonksiyon ismi parametre olarak atandı
// color.addEventListener('change' ,selectBox);

// //selectBox isimli fonksiyon ile selectbox her seçildiğinde etkinlik tipi =change ve değeri consola yazılmaktadır 
// function selectBox(event){
//   console.log("Etkinlik tipi : " + event.type);
//   console.log("deger : " + event.target.value);
//   }



// let counter = 0
// let counterDOM = document.querySelector('#counter');
// let arttirDOM = document.querySelector('#arttir');
// let azaltDOM = document.querySelector('#azalt');

// counterDOM.innerHTML = counter;

// arttirDOM.addEventListener('click', clickEvent);
// azaltDOM.addEventListener('click', clickEvent);

// function clickEvent(){
//     console.log(this.id);
//     if(this.id == 'arttir'){
//         counterDOM.innerHTML = counter += 1
//     }else {
//         counterDOM.innerHTML = counter -= 1
//     }
// }




let user = 'kodluyoruz';
localStorage.setItem('userİnfo', turgut);
localStorage.getItem('userİnfo');



let user = {userName: 'turgutkafali' , isActive: true};
console.log(user);

localStorage.setItem('userİnfo', JSON.stringify(user));

let userİnfo = localStorage.getItem('userİnfo');
console.log(userİnfo);




