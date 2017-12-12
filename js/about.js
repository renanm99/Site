function loadPage() {
	$('html, body').animate({
		scrollTop: '0px'
	}, 0.1);

	$('.mail').fadeToggle();

	var landimages = ["./img/road.jpg", "./img/rocha.jpg", "./img/ponte.jpeg"];
	var focusimage = Math.floor((Math.random() * 3));
	var image = landimages[focusimage];
	$("#lands").attr("src", image);
	focusimage++;

	$("#landsa").ready(function ae() {

		setTimeout(function () {

			$("#lands").animate({
				opacity: 0
			}, 500, "easeInQuad", function () {

				if (focusimage > 2) {
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
	var txt = 0;
	var hab = 0;
	var cont = 0;
	$(window).scroll(function (event) {
		$.fn.isInViewport = function () {
			var elementTop = $(this).offset().top;
			var elementBottom = elementTop + $(this).outerHeight();

			var viewportTop = $(window).scrollTop();
			var viewportBottom = (viewportTop + $(window).height()) - 100;

			return elementBottom > viewportTop && elementTop < viewportBottom;
		};

		$('.txt').each(function () {
			if ($(this).isInViewport()) {
				if (txt == 0) {
					$(this).animate({
						right: "0px"
					}, 1000, "easeOutQuad");
					txt = 1;
				}
			}
		});

		$('.hab').each(function () {
			if ($(this).isInViewport()) {
				if (hab == 0) {
					$(this).animate({
						left: "0px"
					}, 1000, "easeOutQuad");
					hab = 1;
				}
			}
		});

		$('.contact').each(function () {
			if ($(this).isInViewport()) {
				if (cont == 0) {
					$(this).animate({
						right: "0px"
					}, 1000, "easeOutQuad");
					cont = 1;
				}
			}
		});


	});
	//

	$('#mail').click(function(){
		$('.mail').fadeToggle();
	});

}