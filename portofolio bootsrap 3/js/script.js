$(document).ready(function(){


    // Event pada saat link
$('.page-scroll').on('click', function (e) {

// ambil isi href
var tujuan = $(this).attr('href');
// Tangkap Elemen yang bersangkutan
var elemenTujuan = $(tujuan);
console.log(tujuan);
console.log(elemenTujuan);


// Pindahkan Scroll
$('body').animate({
    scrollTop: elemenTujuan.offset().top
});

e.preventDefault();
});

});




// Parallax

// about
$(window).on('load', function() {
    $('.pkiri').addClass('pMuncul');
    $('.pkanan').addClass('pMuncul');

})



// portofolio
$(window).scroll(function(){
    let wscroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform' : `translate(0px, ${wscroll/4}%)`
    });

    $('.jumbotron h1').css({
        'transform' : `translate(0px, ${wscroll/2}%)`
    });

    $('.jumbotron p').css({
        'transform' : `translate(0px, ${wscroll/1.2}%)`
    });

    // Portofolio
    if (wscroll > 500) {
        $('.portofolio .thumbnail').each(function(i){
            setTimeout(function(){
            console.log( $('.portofolio .thumbnail').eq(i));
            $('.portofolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * i);
        });

    

    };
});