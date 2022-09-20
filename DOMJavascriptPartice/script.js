const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function () {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}



const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});




const sMerah = document.querySelector('input[name=sMerah]');
sMerah.addEventListener('input', function() {
    const merah = sMerah.value;
    const hijau = sHijau.value;
    const biru = sBiru.value;
    document.body.style.backgroundColor= `rgb(${merah},${hijau},${biru})`;
});


const sHijau = document.querySelector('input[name=sHijau]');
sHijau.addEventListener('input', function () {
    const merah = sMerah.value;
    const hijau = sHijau.value;
    const biru = sBiru.value;
    document.body.style.backgroundColor= `rgb(${merah},${hijau},${biru})`;
})

const sBiru = document.querySelector('input[name=sBiru]');
sBiru.addEventListener('input', function() {
    const merah = sMerah.value;
    const hijau = sHijau.value;
    const biru = sBiru.value;
    document.body.style.backgroundColor= `rgb(${merah},${hijau},${biru})`;
});



document.body.addEventListener('mousemove', function (event) {
    // Posisi Mouse
    // console.log(event.clientX);
    // ukuran browser
    // console.log(window.innerWidth);
    const xPos = Math.round((event.clientX/window.innerWidth)*255);
    const yPos = Math.round((event.clientY/window.innerHeight)*255);
    document.body.style.backgroundColor =`rgb(${xPos},${yPos},100)`


})