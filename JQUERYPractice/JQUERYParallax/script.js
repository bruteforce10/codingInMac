$(window).scroll(function(){
    let wScroll = $(this).scrollTop();

    $('h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });
});