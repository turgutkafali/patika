// function printScreen() {
//     console.log('ilk ekran cıktısı');
// }

// function printScreen2(callback1 , callback2) {
//     setTimeout(function(){
//         callback1();
//         console.log('ikinci ekran cıktısı');
//         callback2();
//     }, 3000);
// }

// function printScreen3() {
//     console.log('ücüncü ekran cıktısı');
// };

// printScreen2(printScreen, printScreen3);


// function mesajVer (){
//     alert('herkeze hayırlı sabahlar')
// };

// mesajVer();


// function mesajVer (ad , soyad) {
//     alert(`Merhaba ${ad} ${soyad}`)
// }

// mesajVer('turgut' ,'kafalı');


// function topla(sayi1 , sayi2){
//     return sayi1+sayi2
// };
// // console.log(topla(2,5));

// let sonuc = topla(10,20);
// // console.log(sonuc);



// var ekle = function topla(sayi1, sayi2){
//     return sayi1 + sayi2;
// }
// console.log(ekle(10,20));




// Arrow Fuctions
// let func = (param1, param2, param3) => expressiion;
// console.log(func(1,2,3));
// arrow fonsiyonlarda return yazmaya gerek yoktur arrow fonsiyon sonrasında yapılmasını istediğimiz işlemleri yazıp fonsiyonun çağırmamız  yeterlidir

// const helloWorld = () => console.log('Hello World');
// helloWorld()


// let experience = prompt('Kac yillik gelistirici tecrubeniz var', 4);

// const developer =
//   experience < 5
//     ? () => alert('Bir cok konuyu biliyorum')
//     : () => alert('Hicbir sey bilmiyorum:)');

// developer();


// {
//     let message = 'Merhaba';
//     console.log(message);
// }
// // console.log(message); // ??
// //   //Deneyip sonuçları görebilirsiniz.
// {
//     let message = 'Merhaba';
//     console.log(message);
// }
  
// {
//     let message = 'Hello';
//     console.log(message);
// }



// if (true) {
//     const message = 'Merhaba';
//     console.log(message);
//   }
//   console.log(message); // ? merhaba mı verir yoksa bir hata mı? var degişken tanımlama şekli dısındakiler hariç parantez dışında ki işlemlerde console yazdırma hata verir yani let ve const parantez dısında cagırılamaz





// function stringFormat(str) {
//     {
//         let part1 = str.slice(0, 3);
//         let part2 = str.slice(3)
//         // console.log(part1);
//         str = part1.toUpperCase() + part2
//         // console.log(str);
//     }
//     if(true){
//         return str;
//         // console.log(str());
//     }
//     return str.slice(4)
//     console.log(str);
// }



// Nested Functions (İç İçe Fonksiyonlar)
// function programDetayi(bootcamp, organizasyon){
//     const tumProgram = () => bootcamp + '' + organizasyon;
//     console.log('basladı' + tumProgram());
//     console.log('bitti' + tumProgram());
// }




function sayac(){
    let turgut = 0;
    return function(){
        return turgut++;
        
    }
   
}

console.log(sayac());