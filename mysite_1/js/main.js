$(function () {
    $('.info__slider-items').slick({
        arrows: false,
        dots: true
    });

    $('.reviews__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true
    });

});