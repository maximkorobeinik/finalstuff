$(document).ready(function(){
    $('.mob_slides').slick({
        arrows: true
    });
    var backs = [
        'black', 'transparent'
    ];
    $('.mob_slides').on('afterChange', function(event, slick, index) {
    $('header').css('background',backs[index]);
});
    let linkColor = [
        'white', 'black'
    ]
    
    $('.mob_slides').on('afterChange', function(e, slick, index) {
    $('.logo_link').css('color', linkColor[index]);
    $('.nav_link').css('color', linkColor[index]);
    $('.basketIcon').css('color', linkColor[index]);
    $('.detailed').css('color', linkColor[index]);
  });
});
$(document).ready(function(){
    $('.desktop_slides').slick({
        arrows: true,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 1500
    });
    var backs = [
        'transparent', 'linear-gradient(45deg, black, transparent)'
    ];
    $('.desktop_slides').on('afterChange', function(event, slick, index) {
    $('header').css('background',backs[index]);
});
    let linkColor = [
        'black', 'white'
    ]
    
    $('.desktop_slides').on('afterChange', function(e, slick, index) {
    $('.logo_link').css('color', linkColor[index]);
    $('.nav_link').css('color', linkColor[index]);
    $('.basketIcon').css('color', linkColor[index]);
    $('#complete_basket').css('color', linkColor[index]);
    $('.detailed').css('color', linkColor[index]);
  });
});
$(document).ready(function(){
    $('.details_slider_main').slick({
        arrows: false,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        fade: true,
        asNavFor: '.details_slider_small',
        swipe: false
    });
});
$(document).ready(function(){
    $('.details_slider_small').slick({
        arrows: false,
        slidesToShow: 4,
        asNavFor: '.details_slider_main',
        focusOnSelect: true
    });
});


$(document).ready(function(){
    $('.interesting_slider_mob').slick({
        arrows: true,
        slidesToShow: 1
    });
});

$(document).ready(function(){
    $('.interesting_slider_desk').slick({
        arrows: true,
        slidesToShow: 4
    });
});

$(document).ready(function(){
    $('.sizes_table').magnificPopup();
});

$(document).ready(function(){
    $('.done_offer_slider_mob').slick({
        arrows: true,
        slidesToShow: 1
    });
});

$(document).ready(function(){
    $('.done_offer_slider_desk').slick({
        arrows: true,
        slidesToShow: 4
    });
});

$(document).ready(function(){
    $('.info').magnificPopup();
});




