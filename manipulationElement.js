// manipulasiElement menggunakan style
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor ='salmon';


// manipulasi Atribut
// const judulh1 = document.getElementsByTagName('h1')[0];
// // menambahkan atribut name dengan value firdi, bisa cek di inspect
// judulh1.setAttribute('name', 'firdi');
// mengembalikan atribut
const a = document.querySelector('section#a a');
a.getAttribute('href');
// menghapus atribut
// a.removeAttribute('href');

// cara menambahkan atribut class baru tanpa harus mengganti isi atribut classnya
const p2 = document.querySelector('.p2');
// element.classList untuk mengelola class
// element.classlist.add menambahkan class
p2.classList.add('label');
// element.classList.remove untuk menghapus class
p2.classList.remove('p2');

// element.classList.toggle cara kerjanya sama dengan menambahkan kelas akan tetapi pembedanya toggle tsb bisa menambahkan class yang sudah tersedia atau dibuat dari css
// dan akan bernilai true apabila dijalankan dan ada classnya, bila dijalankan kembali akan bernilai false yang berarti class tersebut dihapus. jadi sistemnya seperti tombol lampu
document.body.classList.toggle('biru-muda');

// element.classList.item(urutan classnya dihitung dari 0) ini akan menampilkan kelasnya ada atau tidaknya dan bernilai boolean
// element.classList.content(class yang dicari) untuk mencari classnya ada atau tidaknya dan akan bernilai boolean 
// elementclassList.replace(class yg diganti, class baru) untuk mengganti class