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
})
  
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
document.getElementById("cv").onclick = function () {
  location.href = "../html/CV.html";
};

document.getElementById("project1-code").onclick = function () {
    location.href = "https://github.com/Rahni1/ecommerce-website";
};
document.getElementById("project1-more").onclick = function () {
  location.href = "../html/project1.html";
};

document.getElementById("project4-code").onclick = function () {
    location.href = "https://github.com/Rahni1/mern_blog";
};
document.getElementById("project3-code").onclick = function () {
    location.href = "https://github.com/Rahni1/devscreate";
};

document.getElementById("project3-site").onclick = function () {
    location.href = "https://rahni1.github.io/devscreate/";
};


document.getElementById("project2-code").onclick = function () {
    location.href = "https://github.com/Rahni1/Boozles";
};

document.getElementById("project2-site").onclick = function () {
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