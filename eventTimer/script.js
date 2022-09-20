// setTimeout()

// const test = setTimeout(function() {
//     console.log('ok');
// }, 5000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function() {
//     clearTimeout(test);
//     alert('selesai');
// })

// setInterval()
// const test = setInterval(function() {
//     console.log('ok');
// }, 2000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function() {
//     clearInterval(test);
//     alert('selesai');
// })


// Program Hitung Mundur
// untuk mendapatkan waktu detiknya ditambahkan method getTime() akan menghasilkan data number bersatuan milisekon
const tanggalTujuan = new Date('Sept 9, 2022 00:24:00').getTime();

const hitungMundur = setInterval(function() {
    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan-sekarang;
    const hari = Math.floor(selisih/(1000*60*60*24));
    const jam = Math.floor(selisih % (1000 * 60 * 60*24) / (1000*60*60));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000*60));
    const detik = Math.floor(selisih % (1000 * 60) / (1000));

const teks = document.getElementById('text');
teks.innerHTML = 'Waktu Anda Tinggal: ' + hari +' hari ' + jam + ' jam ' + menit + ' menit ' + detik +' detik lagi! ';

if (selisih < 0) {
    clearInterval(hitungMundur);
    teks.innerHTML='Berhenti';
}

}, 1000);




console.log(menit);