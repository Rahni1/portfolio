$(document).ready(function () {


    let $btns = $('.projects .button-group button');


    $btns.click(function (e) {

        $('.projects .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.projects .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.projects .button-group #btn1').trigger('click');

    $('.projects .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});
// buttons - projects
document.getElementById("ecommerce-code").onclick = function () {
    location.href = "https://github.com/Rahni1/ecommerce-website";
};

document.getElementById("portfolio-code").onclick = function () {
    location.href = "https://github.com/Rahni1/App-Dev-Portfolio";
};
document.getElementById("devscreate-code").onclick = function () {
    location.href = "https://github.com/Rahni1/devscreate";
};

document.getElementById("devscreate-site").onclick = function () {
    location.href = "https://rahni1.github.io/devscreate/";
};


document.getElementById("boozles-code").onclick = function () {
    location.href = "https://github.com/Rahni1/Boozles";
};

document.getElementById("boozles-site").onclick = function () {
    location.href = "https://rahni1.github.io/Boozles/";
};