// membuat eventhandler di inline html onclick bisa dilihat di index.html
// const p3 = document.querySelector('.p3');

// function ubahWarna() {
//     p3.style.backgroundColor = 'lightblue';
// }


// const p2 = document.querySelector('.p2');
// tidak usah menggunakan kurung buka dan tutup karena itu akan menjalankan functionnya
// p2.onclick = ubahWarna1;

// function ubahWarna1() {
//     p2.style.backgroundColor = 'lightblue';
// }

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function () {
//     const liBaru = document.createElement('li');
//     const liTextBaru = document.createTextNode('Paragraf Baru');
//     const ul = document.querySelector('section#b ul');
//     liBaru.appendChild(liTextBaru);
//     ul.appendChild(liBaru);
// })


// Perbedaan event handler dengan addEventListener
const p1 = document.querySelector('.p1');

// p1.onclick = function () {
//     p1.style.backgroundColor = 'lightblue';
// }

// p1.onclick = function () {
//     p1.style.color = 'red';
// }

// event handler bila ditambahkan event baru akan menimpa event lama, jadi background color yang tadinya lightblue berubah mengganti teks colornya menjadi merah

p1.addEventListener('click',function(){
    p1.style.backgroundColor = 'lightblue';
})

p1.addEventListener('click', function () {
    p1.style.color = 'red';
})

// berbeda dengan addEventListener, event tersebut akan berjalan bersama-sama