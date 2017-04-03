$(document).ready(function(){
$('.owl-carousel-header').owlCarousel({
		items: 1,
		dots: true,
		loop: true,
		autoplay: true,
		/*nav: true,*/
		autoplayTimeout: 6000,
		smartSpeed: 1000,
});
var swiper = new Swiper('.swiper-container', {

        paginationClickable: true,
        direction: 'vertical',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        speed: 1000,
        loop: true,
        autoplay: 4000
    });

});