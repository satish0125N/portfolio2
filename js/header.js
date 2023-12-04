class Header {
	constructor(element) {
		console.log('enter');
		this.$element = $(element);
		this.$burger = this.$element.find('.header__burger-menu');
		this.$Nav = this.$element.find('.nav-menu');
		this.$hasSub = this.$element.find('.menu-item-has-children');
		this.$menuArrow = this.$element.find('i.fa-angle-down');
		// this.$menuBg = this.$element.find('.header__menu-bg');
		this.init();
	}

	init() {
		// $(document).on(
		// 	'click',
		// 	'.menu-item-has-children .fa-angle-down',
		// 	function () {
		// 		$(this).parent().toggleClass('active');
		// 	},
		// );

		$(window).scroll(function () {
			if ($(window).scrollTop() > 50) {
				$('.header').addClass('sticky');
			} else {
				$('.header').removeClass('sticky');
			}
		});

		this.$burger.click((e) => {
			e.preventDefault();
			if ($(e.currentTarget).hasClass('opened')) {
				$(e.currentTarget).removeClass('opened').attr('aria-expanded', 'false');
				this.$Nav.next().removeClass('active');
			} else {
				$(e.currentTarget).addClass('opened').attr('aria-expanded', 'true');
				this.$Nav.next().addClass('active');
			}
		});
		// (function ($) {
		// 	$('.shortSize-menu').mousedown(function () {
		// 		$(this).toggleClass('shortSize-menu-closed');

		// 		if ($(this).hasClass('shortSize-menu-closed')) {
		// 			$('.main.button-effect').text('Menu');
		// 		} else {
		// 			$('.main.button-effect').text('Close');
		// 		}
		// 	});
		// })(jQuery); // end of jQuery name space

		// this.$menuBg.click((e)=>{
		//   e.preventDefault();
		//   this.$burger.removeClass('opened').attr('aria-expanded', 'false');
		//   this.$Nav.slideUp(300).parent().removeClass('active');
		// });

		// $(document).on('click', '.fa-angle-down', function (e) {
		// 	e.preventDefault();
		// 	if ($(this).hasClass('active')) {
		// 		$(this).removeClass('active');
		// 		$(this).parent('li').children('.sub-menu').removeClass('active');
		// 	} else {
		// 		$(this).addClass('active');
		// 		$(this).parent('li').children('.sub-menu').addClass('active');
		// 	}
		// });
	}
}

$('[data-header]').each((index, element) => new Header(element));
