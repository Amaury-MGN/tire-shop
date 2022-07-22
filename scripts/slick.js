$('.view').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
    
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.view',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
    variableHeight: true,
    variableMargin: true
});