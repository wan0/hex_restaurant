$(document).ready(function() {
    //[RWD] Open Menu
    $(".showmenu").on('click', function(event) {
        event.preventDefault();
        $('.menu').toggleClass('show');
        //$('.menu').slideToggle(800);
    });
    //[RWD] click menu list,and then close menu
    $(".click").on('click', function(event) {
        event.preventDefault();
        $('.menu').removeClass('show');
    });
    //Scroll to Anchor
    $('a[href="#feature"]').on('click', function(event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $('#feature').offset().top
        }, 500);
    });
    $('a[href="#chef"]').on('click', function(event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $('#chef').offset().top
        }, 500);
    });
    $('a[href="#map"]').on('click', function(event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $('#map').offset().top
        }, 500);
    });
});
