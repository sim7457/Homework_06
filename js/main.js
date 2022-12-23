$(function () {
    AOS.init();

    $('.scroll-down i').on('click', function () {
        var sct = $('.eadyikr').offset().top
        $('html,body').animate({ scrollTop: sct }, 600)
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('on')

        } else {
            $('.header').removeClass('on')
        }
    });

    $('.loan .inner .img_box').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.footer .right').on('click', function () {
        var sct = $('.header').offset().top;
        console.log(sct)
        $('html,body').animate({ scrollTop: 0 }, 600)
    })
})