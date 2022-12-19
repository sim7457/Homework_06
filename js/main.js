$(function () {

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
})