const tombol = document.getElementById('tombol');
const hasil = document.getElementById('jawabanFizzBuzz');
const input = document.getElementById('inputAngka');
const gambar = document.getElementsByTagName('img')[1];
const gambarLoading = document.getElementsByTagName('img')[0];



tombol.addEventListener('click', function () {

    if (input.value === "") {
        alert("data anda belum diisi coy");
    } else {
        
    gambarLoading.style.display = "block";
    gambar.style.display="none";
    document.body.style.backgroundColor = "white";
        setTimeout(() => {
            gambarLoading.style.display = "none";
            gambar.style.display="block";

        document.body.style.backgroundColor = "white";
        gambar.src = "img/ninjaken.png";
        gambar.style.width = "150px";
        hasil.innerHTML = `${input.value}`;
    if (input.value % 3 == 0) {
        gambar.style.width ="350px";
        hasil.innerHTML ="";
        gambar.src = "img/fizz.png";
    } 
        if (input.value % 5 == 0) {
        gambar.style.width ="350px";
        hasil.innerHTML ="";
        gambar.src = "img/buzz.png";
    }
    if ((input.value % 5 || input.value % 3) == 0) {
        gambar.style.width ="350px";
        hasil.innerHTML ="";
        gambar.src = "img/fizzbuzz.png";
    }       
    if ( input.value <= 0) {
        gambar.src = "img/invalid.png";
        document.body.style.backgroundColor = "#ed4f4f";
    } 
        }, 700);

    }

})