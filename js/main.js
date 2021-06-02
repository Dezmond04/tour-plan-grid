$(document).ready(function () {
	const hotelSlider = new Swiper(".hotel-slider", {
		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},
		// Optional parameters
		loop: true,

		// Navigation arrows
		navigation: {
			nextEl: ".hotel-slider__button--next",
			prevEl: ".hotel-slider__button--prev",
		},
		effect: "coverflow",
	});
	const reviewsSlider = new Swiper(".reviews-slider", {
		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},
		// Optional parameters
		loop: true,
		autoHeight: true,

		// Navigation arrows
		navigation: {
			nextEl: ".reviews-slider__button--next",
			prevEl: ".reviews-slider__button--prev",
		},
	});

	$(".newsletter").parallax({ imageSrc: "./img/newsletter-bg.jpg" });

	// var menuButton = $(".menu-button");
	// menuButton.on("click", function () {
	// 	$(".navbar-bottom").toggleClass("navbar-bottom--visible");
	// });

	$(".menu-button").on("click", function () {
		$(".navbar-bottom").toggleClass("navbar-bottom--visible");
	});

	var modalButton = $("[data-toggle=modal]");
	var closeModalButton = $(".modal__close");
	modalButton.on("click", openModal);
	closeModalButton.on("click", closeModal);

	var modalOverlay = $(".modal__overlay");
	var modalDialog = $(".modal__dialog");

	function openModal() {
		modalOverlay.addClass("modal__overlay--visible");
		modalDialog.addClass("modal__dialog--visible");
	}
	function closeModal(event) {
		event.preventDefault();
		modalOverlay.removeClass("modal__overlay--visible");
		modalDialog.removeClass("modal__dialog--visible");
	}

	$(document).on("keydown", function (e) {
		if (e.which === 27) {
			// key = esc (27)
			if (modalDialog.hasClass("modal__dialog--visible")) {
				modalOverlay.removeClass("modal__overlay--visible");
				modalDialog.removeClass("modal__dialog--visible");
			}
		}
	});
	// Обработка форм
	$(".form").each(function () {
		$(this).validate({
			errorClass: "invalid",
			messages: {
				name: {
					required: "Please specify your name",
					minlength: "Name must be at least 2 letters long",
				},
				phone: {
					required: "We need your phone number to contact you",
					minlength: "Your phone must be 11 digits long",
				},
				user_email: {
					required: "We need your email address to contact you",
					email: "Your email address must be in the format of name@domain.com",
				},
			},
		});
	});
	$(document).ready(function () {
		$(".input_phone").mask("+7 (000) 000-00-00");
	});

	AOS.init();
});
