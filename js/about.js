function loadPage() {
	$('html, body').animate({
		scrollTop: '0px'
	}, 0.1);

	$('.mail').fadeToggle();
	/*"./img/road.jpg", "./img/rocha.jpg", "./img/ponte.jpeg", */
	var landimages = ["./images/cervo.jpg","./images/lua.png","./images/arc.jpg","./images/mount.jpg","./images/plane.jpg","./images/moon.jpg","./images/sun.png"];
	var focusimage = Math.floor((Math.random() * 7));
	var image = landimages[focusimage];
	$("#lands").attr("src", image);
	focusimage++;

	$("#landsa").ready(function ae() {

		setTimeout(function () {

			$("#lands").animate({
				opacity: 0
			}, 500, "easeInQuad", function () {

				if (focusimage > 6) {
					focusimage = 0;
				}

				var image = landimages[focusimage];
				focusimage++;

				$("#lands").attr("src", image);
				$("#lands").animate({
					opacity: 1
				}, 500, "easeInQuad", function () {
					ae();
				});
			});

		}, 6000);
	});
	//
	//
	$.fn.isInViewport = function () {
		var elementTop = $(this).offset().top;
		var elementBottom = elementTop + $(this).outerHeight();

		var viewportTop = $(window).scrollTop();
		var viewportBottom = (viewportTop + $(window).height()) - 200;

		return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	$('.txt').each(function () {
		if ($(this).isInViewport()) {
			$(this).animate({
				right: "0px"
			}, 1000, "easeOutQuad");
		}
	});

	$('.txt2').each(function () {
		if ($(this).isInViewport()) {
			$(this).animate({
				left: "0px"
			}, 1000, "easeOutQuad");
		}
	});

	$(window).scroll(function (event) {
		$('.txt').each(function () {
			if ($(this).isInViewport()) {
				$(this).animate({
					right: "0px"
				}, 1000, "easeOutQuad");
			}
		});

		$('.txt2').each(function () {
			if ($(this).isInViewport()) {
				$(this).animate({
					left: "0px"
				}, 1000, "easeOutQuad");
			}
		});

		$('.ll').each(function () {
			if ($(this).isInViewport()) {
				$(this).animate({
					right: "0px"
				}, 1000, "easeOutQuad", function () {
					$('.rider').animate({
						left: "0px"
					}, 1600, "easeOutQuad");
				});
			}
		});

		$('.contact').each(function () {
			if ($(this).isInViewport()) {
				$('.contact').animate({
					right: "0px"
				}, 1000, "easeOutQuad");
			}
		});


	});
	//

	$('#mail').click(function () {
		$('.mail').fadeToggle();
	});

}