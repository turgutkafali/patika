
// Object Key - Value *************



//Doğru anahtar bilgisi olusturmak

// let laptop1 = {
//     brand: 'Apple',
//     model: 'Macbook pro', // bir key baslarken sayı ile baslamaz yinede koymak isterseö çift tırnak içinde kullanılmalı
//     '1kg': 2, // basında sayı olarak kullanım seklı
//     model_name: 'macbook pro',// anahtar bilgisi bosluk ve tire(-) İÇEREMEZ
//     modelName: 'turgut'
// }
// console.log(laptop1); // bilgilere ulaşma şekli
// console.log(laptop1.brand);
// console.log(laptop1.model);
// console.log(laptop1['1kg']);
// // bilgilere diğer ulaşma seklide ;
// console.log(laptop1['brand']);// çift tırnak içinde string ifade olarak yazılmalı
// console.log(laptop1['model']);
// console.log(laptop1['1kg']);
// console.log(laptop1['model_name']);


// //anahtar bilgisi yeni deger eklemek

// laptop1.brand = 'mac';
// laptop1['brand'] = 'mac1';
// console.log(laptop1);

// // yeni bilgi ekleme
// laptop1.versiyon = '10.15.7';
// console.log(laptop1);


// //anahtar bilgilerine ulasmak(keys) -> Object.keys(item)
// keys = Object.keys(laptop1);
// console.log(keys);
// console.log(Object.keys(laptop1));

// keys.forEach(keyInfo => {
//     console.log(keyInfo);
//     console.log(laptop1[keyInfo]);
// });

// //değer bilgilerine ulasmak(values) -> Object.values(item)
// console.log(
//     Object.values(laptop1)
// );

// let values = Object.values(laptop1);

// values.forEach(valuesInfo => {
//     console.log(valuesInfo);
    
// })


// function yaz(){console.log("Merhaba Kodluyoruz")}
// // console.log(yaz.name());
// yaz('name')
// yaz['name']
// yaz.function[name]



// var birey = {
// 	isim: 'Ali',
// 	soyisim: 'Veli',
// 	dogumYili: 1989,
// 	merhabaDe: (age) `Merhaba, ben ${birey.isim} ${birey.soyisim}, ${age} yaşındayım`,
// };
// birey.yasHesapla = function () {
// 	return 2021 - this.dogumYili;
// };
// console.log(birey.merhabaDe(birey.yasHesapla()));






//   **************************************************************
// Object ve Array Destructuring Nasıl kullanılır

// Object Destructuring:

// let settings = {
//     userName: 'loremIpsum',
//     password: 'BadPassword',
//     isActive: false,
//     ip: '127.0.0.1',
//     serverName: 'kodluyoruz.org'
// }

// // obje icindeki bilgilerin tek seferde cıkarılması
// // let userName = settings.userName
// // console.log(userName);
// let{userName: user, password, isActive, ip: serverIp, serverName} = settings

// console.log(user, password, isActive, serverIp, serverName);
// console.log(settings);
// console.log(user);

// // obje icindeki bazi bilgileri cikarilmasi

// let {userName:userName2, password:password2, isActive:isActive2, ...newSettings} = settings
// console.log(newSettings);
// console.log(userName2, password2, isActive2, newSettings);


// objenin dertructuring ile kopyalama
// hatalı işlem !!!

// let settings2 = settings;

// settings2.userName = 'değişen bilgi'
// console.log(settings);
// console.log(settings2);


// let settings2 = {...settings}// settings içindekileri al yeni bir yapının içine koy demek
// console.log(settings);
// settings2.userName = 'değişen bilgi yaz' 
// console.log(settings2);

// let score = [100, 200, 300, 400];

// let [score1, score2, ...otherScore] = score;// Burda score bilgisi içindeki ilk iki bilgiyi al score1 ve score2 ata geri kalanları ise yeni bir array olan üç noktadan sonra gelen otherScore ata demek
// console.log(score1, score2, otherScore);
// console.log(otherScore);

// let copyOfScore = [...score] // score arrayinin kopyasına alma işlemi
// console.log(copyOfScore);



// let [,pronoun,,name]=["Merhaba","benim","adım","Mehmet"];
// console.log(pronoun);
// console.log(name);


let person={name:"Selin",city:"Ankara",favoriteColor:"aqua blue"}; 
let {name:foo}=person;
let {city:izmir}=person;
// person.name= 'turgut'
console.log(izmir);
// console.log(Object.keys(person));