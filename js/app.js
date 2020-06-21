// $(document).ready(function () {


//     let $btns = $('.projects .button-group button');


//     $btns.click(function (e) {

//         $('.projects .button-group button').removeClass('active');
//         e.target.classList.add('active');

//         let selector = $(e.target).attr('data-filter');
//         $('.projects .grid').isotope({
//             filter: selector
//         });

//         return false;
//     })

//     $('.projects .button-group #btn1').trigger('click');

//     $('.projects .grid .test-popup-link').magnificPopup({
//         type: 'image',
//         gallery: { enabled: true }
//     });

//     // Owl-carousel
//     $('.site-main .about-area .owl-carousel').owlCarousel({
//         loop: true,
//         autoplay: true,
//         dots: true,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             560: {
//                 items: 2
//             }
//         }
//     })
  
$(document).ready(function () {
    // sticky navbar
    let nav_offset_top = $('.header').height() + 50;

    function navbarFixed() {
        if ($('.header').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header .main-menu').removeClass('navbar_fixed');
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

// contact form
$(document).ready(function(){

	//material contact form
	$('.contact-form').find('.form-control').each(function() {
	  var targetItem = $(this).parent();
	  if ($(this).val()) {
		$(targetItem).find('label').css({
		  'top': '10px',
		  'fontSize': '14px'
		});
	  }
	})
	$('.contact-form').find('.form-control').focus(function() {
	  $(this).parent('.input-block').addClass('focus');
	  $(this).parent().find('label').animate({
		'top': '10px',
		'fontSize': '14px'
	  }, 300);
	})
	$('.contact-form').find('.form-control').blur(function() {
	  if ($(this).val().length == 0) {
		$(this).parent('.input-block').removeClass('focus');
		$(this).parent().find('label').animate({
		  'top': '25px',
		  'fontSize': '18px'
		}, 300);
	  }
	})
	
});

