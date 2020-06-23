import '../../node_modules/owl.carousel/dist/owl.carousel'
import './base/custom'

$(document).ready(function () {

    if (location.protocol !== 'https:') {
        location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }

    $('.js-deals-left').owlCarousel({
        items: 1,
        nav: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        loop: true,
        navContainer: '.slide-nav',
        dots: false
    });

    $('.js-deals-right').owlCarousel({
        items: 1,
        nav: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        loop: true,
        navContainer: '.slide-nav-right'
    });


    var stickyOffset = $('.js-sticky').offset().top;

    $(window).scroll(function () {
        var sticky = $('.js-sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= stickyOffset) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    $('.js-sellers-list .item').click(() => {
        const self = $(this)
        const sellerContent = $('.js-sellers-content')
        $('.js-sellers-list .item').removeClass('active')
        self.addClass('active')

        sellerContent.css('opacity', '0')
        setTimeout(() => {
            sellerContent.css('opacity', '1')
        }, 500)
    })

    setTimeout(function () {
        $('.js-banner-img').addClass('start')
    }, 200)
});


jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
        this.addEventListener("touchstart", handle, {passive: true});
    }
};

