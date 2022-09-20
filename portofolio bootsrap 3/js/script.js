    // Event pada saat link
$('.page-scroll').on('click', function (e) {

// ambil isi href
var tujuan = $(this).attr('href');
// Tangkap Elemen yang bersangkutan
var elemenTujuan = $(tujuan);


// Pindahkan Scroll
$('body').animate({
    scrollTop: elemenTujuan.offset().top
});

e.preventDefault();

});