userName = prompt('lütfen adınızı giriniz');
document.querySelector('.name').innerHTML = userName;
if(userName == ''){
    alert('lütfen adınızı giriniz')
};


let clock;
function now() {
    let nowClock = new Date();

    var dayHour = nowClock.getHours();
    var dayMin = nowClock.getMinutes();
    var daySec = nowClock.getSeconds();

    clock = dayHour + ':' + ((dayMin < 10 ) ? '0' : '') +dayMin + ':' + ((daySec < 10 ) ? '0' : '') + daySec;

    document.querySelector('.dateHour').innerHTML = clock;

    setTimeout('now()' , 1000);

};


let today = new Date();
let localDay = new Array(7);
localDay[0] = 'pazartesi';
localDay[1] = 'salı';
localDay[2] = 'çarşamba';
localDay[3] = 'perşembe';
localDay[4] = 'cuma';
localDay[5] = 'cumartesi';
localDay[6] = 'pazar';

let gün = localDay[today.getDay()];
document.querySelector('.dateDay').innerHTML = gün;


