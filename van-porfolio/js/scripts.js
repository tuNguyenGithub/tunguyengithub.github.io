window.onload = function() {
	const windowWidth = $(window).width();
	const windowHeight = $(window).height();
	const headerHeight = $('.header').height();
	const contactOffsetTop = 116;
	const centerPos = $(window).width() / 2;

  // set position
	const data0 = 'data-0',
	      data1 = `data-${windowHeight}`,
				data2 = `data-${windowHeight * 2}`,
				data3 = `data-${windowHeight * 3}`,
				data4 = `data-${windowHeight * 4}`,
				data5 = `data-${windowHeight * 5}`,
				data6 = `data-${windowHeight * 6}`,
				data7 = `data-${windowHeight * 7}`,
				data8 = `data-${windowHeight * 8}`,
				data9 = `data-${windowHeight * 9}`,
				data10 = `data-${windowHeight * 10}`,
				data11 = `data-${windowHeight * 11}`,
				data12 = `data-${windowHeight * 12}`,
				data13 = `data-${windowHeight * 13}`;
	$('#home').attr(data0, 'top: 0%');
	$('#home').attr(data2, 'top: 0%');
	$('#home').attr(data4, 'top: -100%');

	$('#works').attr(data2, 'top: 100%');
	$('#works').attr(data4, 'top: 0%');
	$('#works').attr(data5, 'top: 0%');
	$('#works').attr(data6, 'top: 0%');
	$('#works').attr(data7, 'top: 0%');
	$('#works').attr(data8, 'top: 0%');
	$('#works').attr(data9, 'top: -100%');

	$('#about').attr(data8, 'top: 100%');
	$('#about').attr(data9, 'top: 0%');
	$('#about').attr(data10, 'top: 0%');
	$('#about').attr(data11, 'top: 0%');
	$('#about').attr(data12, 'top: 0%');
	$('#about').attr(data13, 'top: -100%');

	$('#contact').attr(data8, 'top: 200%');
	$('#contact').attr(data9, 'top: 100%');
	$('#contact').attr(data12, 'top: 100%');
	$('#contact').attr(data13, 'top: 0%');

	$('.main-menu > li > a').on('click', function(e) {
		const targetId = $(this).attr('href').replace('#', '');
		const dataPosition = +$(this).data('position');
		$("html, body").animate({
			scrollTop: dataPosition
		}, 2500);
		$('.main-menu > li > a').removeClass('is-active');
		$(this).addClass('is-active');
	});
	const hashString = location.hash;
	$('.main-menu > li > a').removeClass('is-active');
	$(`.main-menu > li > a[href='${hashString}']`).addClass('is-active').trigger('click');

	$(window).scroll(function() {
		const scrollTop = $(window).scrollTop();
		$('.main-menu > li > a').each(function(index, item) {
			$(item).removeClass('is-active');
			if (scrollTop >= +$(item).data('start') && scrollTop < +$(item).data('end')) {
				$(item).addClass('is-active');
			}
		})
		$('#home .scroll-text span').each(function(index, item) {
			const spanLeft = $(item).offset().left;
			const spanRight = spanLeft + $(item).width();
			if (spanLeft < centerPos && spanRight > centerPos) {
				$('#home .scroll-text span').removeClass('is-active');
				$(item).addClass('is-active');
			}
		})
	})

	// Home page
	const homeScrollText = $('#home .scroll-text');
	const homeScrollTextFirstSpan = $('#home .scroll-text span:first-child');
	const homeScrollTextLastSpan = $('#home .scroll-text span:last-child');

	const homeScrollTextStart = centerPos - (homeScrollTextFirstSpan.width() / 2);
	const homeScrollTextEnd = -homeScrollText.width() + ($(window).width() / 2) + (homeScrollTextLastSpan.width() / 2);
	homeScrollText.attr('data-0', `left:${homeScrollTextStart}px`);
	homeScrollText.attr('data-2160', `left:${homeScrollTextEnd}px`);

	// Works page


	var s = skrollr.init();
	const bodyHeight = $('body').height();
	$('body').css({height: bodyHeight - headerHeight - contactOffsetTop});
}
