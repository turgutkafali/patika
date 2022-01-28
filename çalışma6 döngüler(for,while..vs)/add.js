  // FOR DÖNGSÜ

//   let users = ['lorem', 'Ipsum', 'Dolor', ];
  
// for(let index = 0; index < 10; index++){
//     console.log(index);
// }

// let index = 0
// for(; index < 10; index++){
//     console.log(index);
// }


// const userListDOM = document.querySelector('#userList')

// let index =0;
// for(; index < users.length;index++){
//     console.log(users[index]);
//     const liDOM = document.createElement('li');
//     liDOM.innerHTML = users[index];
//     userListDOM.appendChild(liDOM)
// }


//  **********************************************

//  Break ve Continue 

// const LOREM_LIST = ['lorem','ipsum','dolor','amet','turgut','kafali','elit']


// let counter = 0;
// for(; counter < 10;counter++){
//     if(counter == 5){break};
//     console.log(counter);
// }

// let counter = 0;
// for(; counter < 10;counter++){
//     if(counter == 5){continue};
//     console.log(counter);
// }



// const UL_DOM = document.querySelector('#userList')
// let index = 0;

// for(;index < LOREM_LIST.length;index++){
//     if(LOREM_LIST[index] == 'amet') {break};
//     let LI_DOM = document.createElement('li');
//     LI_DOM.innerHTML = LOREM_LIST[index];
//     UL_DOM.append(LI_DOM);
// }

// for(;index < LOREM_LIST.length;index++){
//     if(LOREM_LIST[index] == 'amet') {continue};
//     let LI_DOM = document.createElement('li');
//     LI_DOM.innerHTML = LOREM_LIST[index];
//     UL_DOM.append(LI_DOM);
// }





//   ******************************************************

// WHİLE DÖNGÜSÜ (istenilen birsey olana kadar çalış demek )

// let counter = 0;
// while( counter < 10){
//     console.log(counter);
//     counter++
// }

// let userName = '';

// while (!userName){
//     userName = prompt('kullanıcı adı giriniz');
//     console.log(userName);
// }





//  *******************************************************
//  forEach ile array öğeleri işlemi

// const PRODUCTS = ['Laptop','Phone','Speaker','Desktop PC','Server','Mouse','Keyboard'];

// PRODUCTS.forEach((products, index, array) => console.log(products, index, array))
// PRODUCTS.forEach((products, index, array) => array[index] = products + ' 231')
// PRODUCTS.forEach((products, index, array) => array[index] = `${products.toUpperCase()}`)
// console.log(PRODUCTS);


// const userListDOM = document.querySelector('#userList')

// let index =0;
// for(; index < users.length;index++){
//     console.log(users[index]);
//     const liDOM = document.createElement('li');
//     liDOM.innerHTML = users[index];
//     userListDOM.appendChild(liDOM)
// }

// const userListDOM = document.querySelector('#userList');
// PRODUCTS.forEach(item => {
//     const liDOM = document.createElement('li');
//     liDOM.innerHTML = item.toLowerCase();
//     userListDOM.appendChild(liDOM)
// })





//   ************************************************************
// Filter ile array içinden istenileni yeni LİSTEYE ekleme

// const PRODUCTS = ['Mic', 'Cable', 'Speaker', 'Desktop PC', 'Server', 'Mouse', 'Keyboard'];

// const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
// console.log(NEW_PRODUCTS);


// // Aktif kullanıcıları al
// const USERS = [
//     {fullName: 'Ayşe Sumer', isActive: false},
//     {fullName: 'Turgut Kafalı', isActive: true},
//     {fullName: 'Asya Basar', isActive: true},
//     {fullName: 'Aksel Durmaz', isActive: false},
// ]

// const ACTIVE_USERS = USERS.filter(item => item.isActive); // isActive default'u 'true' dur
// console.log(ACTIVE_USERS);






//   ************************************************************
// Map ile array içinden yapılan değiklikler ile yeni liste oluşturma
// Array map kullanımı
const USERS = ['AYSE', 'Mehmet', 'TugCE', 'AkSEL'];

// userName icindeki orjinal isim kalsın,
// shortName icinde ilk harf buyuk . (A.)
// newName icindeki ilk harf buyuk olsun
// {userName: 'AYSE', shortName: 'A.', newName: 'Ayse'}

const NEW_USERS = USERS.map(user => user.toUpperCase())
console.log(NEW_USERS);

//  ******** İKİ FARKLI YAZIM TARZIDIR RETURN VE RETURN OLMADAN PARANTEZ() KULLANARAK OLUŞAN HALİ AYNIDIR

// const USERS_OBJ = USERS.map(item =>
//     {
//         return {userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}
//     }
// )


const USERS_OBJ = USERS.map(item => // Eger return ile dönülmezse ifadeler parantez içerisinde yazılmalıdır
    (
        {userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}
    )
)
console.log(USERS_OBJ);