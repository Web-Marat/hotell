"use strict";
/*
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__navigation').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
*/
$(document).ready(function() {
	$('.popup-gallery_lux').magnificPopup({
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>Номер Люкс</small>';
			}
		},
	});
	$('.popup-gallery_middle').magnificPopup({
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>Номер Улучшенный</small>';
			}
		},
	});
	$('.popup-gallery_standart').magnificPopup({
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>Номер Стандарт</small>';
			}
		},
	});
	$('.popup-gallery').magnificPopup({
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>Галерея</small>';
			}
		},
	});
});


const burgerMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__navigation');
if (burgerMenu) {
	burgerMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		burgerMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}



const menuLinks = document.querySelectorAll('.header__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (burgerMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				burgerMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
