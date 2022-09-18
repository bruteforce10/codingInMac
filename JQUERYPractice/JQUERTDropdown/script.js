$(document).ready(function(){
    $('.navbar li').hover(function(){
        $(this).find('ul').slideToggle('normal');
    })
})