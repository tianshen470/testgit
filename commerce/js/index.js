$('.toggle_menu').on('click', function () {
    $('.menu_box').toggleClass('active');
})

$('.img_owl').owlCarousel({
    loop: true,
    items: 1,
    autoplay: true
})