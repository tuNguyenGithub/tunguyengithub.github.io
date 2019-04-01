window.onload = function() {
	const windowWidth = $(window).width();
	const windowHeight = $(window).height();
	const headerHeight = $('.header').height();
	const contactOffsetTop = 116;
	const centerPos = $(window).width() / 2;

	// set position
	const dataObj = [];
	for (let i = 0; i < 14; i += 1) {
		dataObj.push({
			dimension: windowHeight * i,
			data: `data-${windowHeight * i}`
		})
	};
	$('#home').attr(dataObj[0].data, 'top: 0%');
	$('#home').attr(dataObj[2].data, 'top: 0%');
	$('#home').attr(dataObj[4].data, 'top: -100%');

	$('#works').attr(dataObj[2].data, 'top: 100%');
	$('#works').attr(dataObj[4].data, 'top: 0%');
	$('#works').attr(dataObj[5].data, 'top: 0%');
	$('#works').attr(dataObj[6].data, 'top: 0%');
	$('#works').attr(dataObj[7].data, 'top: 0%');
	$('#works').attr(dataObj[8].data, 'top: 0%');
	$('#works').attr(dataObj[9].data, 'top: -100%');

	$('#about').attr(dataObj[8].data, 'top: 100%');
	$('#about').attr(dataObj[9].data, 'top: 0%');
	$('#about').attr(dataObj[10].data, 'top: 0%');
	$('#about').attr(dataObj[11].data, 'top: 0%');
	$('#about').attr(dataObj[12].data, 'top: 0%');
	$('#about').attr(dataObj[13].data, 'top: -100%');

	$('#contact').attr(dataObj[8].data, 'top: 200%');
	$('#contact').attr(dataObj[9].data, 'top: 100%');
	$('#contact').attr(dataObj[12].data, 'top: 100%');
	$('#contact').attr(dataObj[13].data, 'top: 0%');

	$('.main-menu > li > a[href="#works"]').attr({
		'data-start': dataObj[4].dimension,
		'data-end': dataObj[9].dimension
	});
	$('.main-menu > li > a[href="#about"]').attr({
		'data-start': dataObj[9].dimension,
		'data-end': dataObj[12].dimension + contactOffsetTop
	});
	$('.main-menu > li > a[href="#contact"]').attr({
		'data-start': dataObj[12].dimension + contactOffsetTop,
		'data-end': dataObj[13].dimension
	});

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

  $('.scrollbar').width($('#home .scroll-text span').width() + 30)

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
			if (spanLeft <= centerPos && spanRight >= centerPos) {
				$('#home .scroll-text span').removeClass('is-active');
				$(item).addClass('is-active');
				$('.scrollbar').width($(item).width() + 30);

				const target = $(item).data('target');
				
				$('.context-paragraph.bounceInUp').removeClass('bounceInUp').addClass('bounceOutDown')
				$(`#${target}`).removeClass('bounceOutDown').addClass('is-active bounceInUp');
			}
		})
	})

	// Home page
	const homeScrollText = $('#home .scroll-text');
	const homeScrollTextFirstSpan = $('#home .scroll-text span:first-child');
	const homeScrollTextLastSpan = $('#home .scroll-text span:last-child');

	const homeScrollTextStart = centerPos - (homeScrollTextFirstSpan.width() / 2);
	const homeScrollTextEnd = -homeScrollText.width() + ($(window).width() / 2) + (homeScrollTextLastSpan.width() / 2);
	homeScrollText.attr(dataObj[0].data, `left:${homeScrollTextStart}px`);
	homeScrollText.attr(dataObj[2].data, `left:${homeScrollTextEnd}px`);

	// Works page
	const worksScrollText = $('#works .scroll-text');

  let worksScrollTextWidth = 0;
	$('#works .scroll-text .work-text').each((index, item) => {
		worksScrollTextWidth += $(item).outerWidth();
	})
	const worksScrollTextStart = 0;
	const worksScrollTextEnd = -worksScrollTextWidth + ($(window).width() / 2);
	worksScrollText.attr(dataObj[0].data, `left:${worksScrollTextStart}px`);
	worksScrollText.attr(dataObj[4].data, `left:${worksScrollTextStart}px`);
	worksScrollText.attr(dataObj[8].data, `left:${worksScrollTextEnd}px`);

  // About page
	const aboutScrollText = $('#about .scroll-text');
	const aboutScrollTextStart = 0;
	const aboutScrollTextEnd = -aboutScrollText.width() + ($(window).width() / 2);
	aboutScrollText.attr(dataObj[9].data, `left:${aboutScrollTextStart}px`);
	aboutScrollText.attr(dataObj[12].data, `left:${aboutScrollTextEnd}px`);

	var s = skrollr.init();
	const bodyHeight = $('body').height();
	$('body').css({height: bodyHeight - headerHeight - contactOffsetTop});
}
