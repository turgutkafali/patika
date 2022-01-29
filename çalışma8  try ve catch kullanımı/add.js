 
 // hata yönetimi için try ve catch kullanımı
 try {
    //Çalıştırılacak kodlar
  }catch(hata) {
    //Hata yakalandığında çalışacak kodlar
  }finally {
    //try tamamlandıktan sonra hata olsada olmasada çalışacak olan kodlar.
  }
// bu yapı  kısaca bir şeyi deneme oluyorsa bana göster olmuyorsa da hatayı göster altta kalanları ise işletmeye devam et demektir.
 let products;

 try{
    products.forEach(item => console.log(item));
 } catch(error){
    console.log('error:', error);
    products = [1, 2, 3]
    products.forEach(item => console.log(item));
 }


 console.log('hata yönetimi düzgün çalışıyor');

 let info = 'kodluyoruz';
 console.log(info);

 //  try anahtar kelimesi kodları çalışma zamanında test etmek için kullanılırken, catch anahtar kelimesi ise çalışma zamanında hata çıkması durumunda bu hataları yakalamak için kullanılır.


 //  throw ile istina oluşturma

//  <input type="text" id="dogumTarihi" />
// <button onclick="valid()">Gönder</button>

 function valid(){
    try {
        if (document.querySelector("#dogumTarihi").value == "") {
            throw 'Doğum tarihini boş geçemezsiniz'; // burda mesajı veriyoruz
        };
    }catch(err) {
        alert(err);
    }
}