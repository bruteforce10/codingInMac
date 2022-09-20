// DOM Selection
// document.getElementById() mengembalikan element
const judul = document.getElementById('judul');
judul.style.color = 'red';
// hasil ini akan membuat warna merah akan menghasilkan inline css apabila dilihat di view developer
judul.style.backgroundColor = 'grey';
// untuk mengubah isi judul
judul.innerHTML = '<em>Firdi Audi</em>';



//document.getElementsByTagName() mengembalikan HTML Collection skema hampir sama seperti array
const p = document.getElementsByTagName('p');
// disini untuk eksekusi manipulasinya harus diberikan index karena tag p akan menghasilkan array bisa cek di view developer untuk melihat urutannya
p[2].style.backgroundColor='lightblue'; 

// untuk seleksi semuanya bisa menggunakan looping
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor='lightblue'; 
}

// untuk membuat html collection menjadi element
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize='50px';

// document.getElementsByClassName() mengembalikan HTML Collection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'ini diubah dari javascript';
const sectionA = document.getElementById('a');
// sectionA.innerHTML='Hello World';




// DOM Manipulation
// buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('paragraf baru');
// simpan tulian ke dalam paragraf
pBaru.appendChild(teksPBaru);
// simpan pBaru di akhir Section A
// sectionA.appendChild(pBaru);


// membuat elemen baru lebih spesifik
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
// untuk mempersempit scopenya bisa diganti document dengan li
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);



// remove element
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


// Mengganti element
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2')
const teksH2Baru = document.createTextNode('Judul Baru');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);


pBaru.style.backgroundColor ='lightgreen';
liBaru.style.backgroundColor ='lightgreen';
h2Baru.style.backgroundColor ='lightgreen';
