$(document).ready(function() {

	$("#my-menu").mmenu({
		extensions: ['fx-menu-slide'],
		navbar: {
			title: '<span>Drone</span>Zone'
		},
		offCanvas: {
			position: 'right',
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:start', function() {
		$('.hamburger').css({
			'position': 'absolute',
			'right': '0'
		});
	});
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});


	api.bind('close:start', function() {
		$('.hamburger').css({
			'position': 'static'
		});
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

	$('.scroll').click(function() {
		$('html, body').stop().animate({scrollTop: $(window).height()}, 'slow', 'swing');
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});



    var video_height = $('.text-for-video').height();
    $('.video').css('height', video_height);
    $(window).resize(function() {
        video_height = $('.text-for-video').height();
        $('.video').css('height', video_height);
    });

    var instance1 = $('.video-left').data('vide');
    var instance2 = $('.video-right').data('vide');
    var myVideo1 = instance1.getVideoObject();
    var myVideo2 = instance2.getVideoObject();

    $('.video-left').bind('scrollSpy:enter', function() {
			myVideo1.play();
		});
		$('.video-left').bind('scrollSpy:exit', function() {
			myVideo1.pause();
		});

		$('.video-right').bind('scrollSpy:enter', function() {
			myVideo2.play();
		});
		$('.video-right').bind('scrollSpy:exit', function() {
			myVideo2.pause();
		});
		var jqueryObj = $;
		jqueryObj('.video-left').scrollSpy();
		jqueryObj('.video-right').scrollSpy();

    //E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.wrapper').find('.success').addClass('suc-active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
				$('.wrapper').find('.success').removeClass('suc-active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});


/*
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	*/

});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});