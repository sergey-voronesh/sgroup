new WOW().init();

function getToggleMenu() {
	let toggleBtns = document.querySelectorAll('.toggle-btn'),
		canvasMenu = document.querySelector('.menu-offcanvas');


	toggleBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			canvasMenu.classList.toggle('open');
		})
	})
}

getToggleMenu();

function closeMenu(except) {
	let subMenuLinks = document.querySelectorAll('.sub-menu > a');

	subMenuLinks.forEach(link => {
		if (link !== except) {
			link.classList.remove('open');
		}
	})
}

function getMenu() {
	let subMenuLinks = document.querySelectorAll('.sub-menu > a');


	// subMenuLinksFirst.forEach(link => {
	// 	link.addEventListener('click', (e) => {
	// 		closeMenu();
	// 	})
	// })

	subMenuLinks.forEach(link => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			link.classList.toggle('open');
			if (link.classList.contains('sub-menu__link-first')) {
				closeMenu(e.target);
			}
		})
	})

}


getMenu();


function getProjectsSlider() {
	let sliders = document.querySelectorAll('.project-slider');

	sliders.forEach((slider, index) => {
		const swiper = new Swiper(slider, {
			slidesPerView: 'auto',
			spaceBetween: 30,
			centeredSlides: true,
			allowTouchMove: false,
			pagination: {
				el: '.project-slider-pagination-' + index,
				clickable: true
			},
			navigation: {
				nextEl: '.project-slider-next-' + index,
				prevEl: '.project-slider-prev-' + index,
			},

			runCallbacksOnInit: true,
			on: {
				init() {
					setTimeout(updateFraction, 0, this);
				},
				slideChange() {
					updateFraction(this);
				},
				resize() {
					updateFraction(this);
				},
			},
		});

		function updateFraction(slider) {
			const { params, activeIndex } = slider;
			var totalSlides = slider.slides.length / 3;

			var currentCount = (slider.activeIndex - 1) % (totalSlides) + 1;

			if (slider.activeIndex + 1 === 1) {
				slider.$el[0].classList.add('transform-none');
			} else {
				slider.$el[0].classList.remove('transform-none');

			}

			slider.$el

				.find(`.counter-${index}`)
				.text(`0${slider.activeIndex + 1}`);

			slider.$el
				.find(`.counter-summ-${index}`)
				.text('0' + slider.slides.length);
		}

	})
}


getProjectsSlider();


function getDefaultSlider() {
	let sliders = document.querySelectorAll('.default-slider');

	sliders.forEach((slider, index) => {
		const swiper = new Swiper(slider, {
			slidesPerView: 'auto',
			spaceBetween: 30,
			centeredSlides: true,
			allowTouchMove: false,

			navigation: {
				nextEl: '.default-slider-next',
				prevEl: '.default-slider-prev',
			},
			runCallbacksOnInit: true,
			on: {
				init() {
					setTimeout(updateFraction, 0, this);
				},
				slideChange() {
					updateFraction(this);
				},
				resize() {
					updateFraction(this);
				},
			},
		});

		function updateFraction(slider) {
			const { params, activeIndex } = slider;

			if (slider.activeIndex + 1 === 1) {
				slider.$el[0].classList.add('transform-none');
			} else {
				slider.$el[0].classList.remove('transform-none');

			}
		}

	})
}


getDefaultSlider();