function showTheme() {
    if (localStorage.getItem('darkClass')) {
        $('body').addClass('dark');
        $('body').css('background-color','#15212D');
    }
    $('.theme_toggle_dark').click(function() {
        $('body').addClass('dark');
        localStorage.setItem('darkClass', 'true');
    });
    $('.theme_toggle_light').click(function() {
        $('body').removeClass('dark');
        localStorage.removeItem('darkClass');
    });
}
$(document).ready(function() {
    // dropdown
    $('.drp_btn').click(function () {
        $('.drp_box').removeClass('active');
        $(this).children('.drp_box').slideToggle(0);
        $(this).children('.drp_box').addClass('active');
        $('.drp_box:not(.active)').slideUp(0);
	});
    // end drop down
    $('.unread').click(function () {
		$(this).removeClass('unread');
	});
    $('.navbar_search_box_btn').click(function(e) {
        e.preventDefault();
        if ($(window).width() < 767)
        {
            $('.navbar_search_box_mobile').toggleClass('active');
            return;
        }
    })
    $('.sidebar_btn').click(function () {
		$('.aside').toggleClass("active");
		$('.main').toggleClass("active");
		$('.dashboard_header').toggleClass("active");
	});
    $('.asideClose').click(function(){
        $('.aside').toggleClass("active");
		$('.main').toggleClass("active");
		$('.dashboard_header').toggleClass("active");
    })
    // navbar sticky end
	$('.nav__toggler').click(function () {
		$(this).toggleClass('active');
		$('.nav-list').slideToggle();
	});
    // language toggle 
    if(document.dir == "ltr"){
        $('.language_toggle_en').addClass("d-none");
        $('.language_toggle_ar').addClass("d-flex");
    }
    if(document.dir == "rtl"){
        $('.language_toggle_ar').addClass("d-none");
        $('.language_toggle_en').addClass("d-flex");
    }
    $('.language_toggle_en').click(function () {
        $('html').attr('dir', 'ltr');
        $('body').removeClass('rtl');
        localStorage.removeItem('rtl', 'true');
        $('.language_toggle_ar').removeClass("d-none");
        $('.language_toggle_en').addClass("d-none");
    })
    $('.language_toggle_ar').click(function () {
        $('html').attr('dir', 'rtl');
        $('body').addClass('rtl');
        $('.language_toggle_en').removeClass("d-none");
        $('.language_toggle_ar').addClass("d-none");
        localStorage.setItem('rtl', 'true');
    })
    if (localStorage.getItem('rtl') === 'true') {
        $('.language_toggle_en').removeClass("d-none");
        $('.language_toggle_ar').addClass("d-none");
        $('body').addClass('rtl');
        $('html').attr('dir', 'rtl');
    }
    // language toggle 

	// navbar end
    $('body').click(function() {
		$('.drp_box').slideUp(0);
	});
    $('.asidbox').click(function() {
		$('.aside').removeClass("active");
	});
	$('.sidebar_btn').click(function(event) {
		event.stopPropagation(); // prevents executing the above event
	});
    $('.drp_btn').click(function(event) {
		event.stopPropagation(); // prevents executing the above event
	});
	$('.aside').click(function(event) {
		event.stopPropagation(); // prevents executing the above event
	});

    $('.OrdersSlider').owlCarousel({
        loop: true,
        smartSpeed:450,
        items:1,
        margin:5,
    });
});

function showContent() {
    document.body.style.visibility = 'visible';
    document.body.style.opacity = 1;
}
window.addEventListener('DOMContentLoaded', function () {
    showTheme();
    showContent();
});

		