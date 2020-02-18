 $(document).ready(function(){

// let slide = document.querySelector('.slick-active');
// window.addEventListener('resize', () => {
//   // We execute the same script as before
//   let vh = window.innerHeight * 0.01;
//   document.slide.style.setProperty('--vh', `${vh}px`);
// });
 	/////////slick main
 	$('.main_section_img_container').slick({
 		arrows: false,
 		autoplay: true,
 		autoplaySpeed: 2000
 	});


 	///////slick review
 	if(document.querySelector('.section_comments')){

 		$('.section_comments_wrap').slick({
 			dots: true,
 			infinite: true,
 			speed: 500,
 			fade: true,
 			cssEase: 'linear',
 			autoplay: true,
 			autoplaySpeed: 2000
 		});
 		$('.slick-arrow').html('');
 		let sliderDots = $('.slick-dots li button');
 		sliderDots.html('');
 		$('.slick-dots').css({
 			"display": "flex",
 			'flex-direction': 'row',
 			'justify-content': 'center'
 		})
 		sliderDots.css({
 			"width": "5px",
 			'height': '5px',
 			'border-radius': '50%',
 			'background-color': '#00CED1',
 			'margin-left': '10px',
 			'margin-right': '10px'
 		})
 	}



 	////////paralax
 	$('.parallax').parallax();


 	/////////isotop
 	var $grid = $('.grid').isotope({
 		itemSelector: '.grid-item',
 		stagger: 30
 	});

 	$('.filter-button-group').on( 'click', '.button', function() {
 		var filterValue = $(this).attr('data-filter');
 		$grid.isotope({ filter: filterValue });
 	});

	////// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$( this ).addClass('is-checked');
		});
	});


	/////////// анимация при скроле
	if(document.querySelector('.section_about_us')){
	var target_block = $(".section_about_us"); // Ищем блок 
	var blockStatus = true;  //переключатель
	

	$(window).scroll(function() {
		var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));  ////< target_block.offset().top - Метод offset возвращает координаты относительно начала страницы  / position - от начала родителя
		if(scrollEvent && blockStatus) {
				blockStatus = false;  //блокируем повторение
				$('.count_number').each(function () {
					$(this).prop('Counter',0).animate({
						Counter: $(this).text()
					}, 
					{
						duration: 2000,
						easing: 'swing',
						step: function (now) {
							$(this).text(Math.ceil(now));  // //чтобы числе перебирались целыми, без Math.ceil перебор идет по нецелым числам
						}
					});
				});
			};
		});
};

	/////animation of logo (to know the length of letter)
	let logo = document.querySelectorAll("#logo path");
	console.log(logo);
	for(let i = 0; i<logo.length; i++){
		console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
	}

	///////////////модальное окно
	$(".fancybox").fancybox({
		loop: true,
		arrows: true,
		nextClick: true,
		infobar: true,
		buttons: [
		"zoom",
		"thumbs",
		"close"
		],
	});

	/////////////toodle_menu_mobile

	const header = document.querySelector('.header');
	const body = document.querySelector('body');
	const toogleMenuMobile = document.querySelector('.main_menu');
	const buttonMenu = document.querySelector('.menu_wrap');

	let openMenu = (ev) => {
		let target = ev.target;
		console.log(target);
		if(target.matches('.menu_wrap') || target.matches('.menu_wrap span')){
			console.log('11111');
			if(!buttonMenu.classList.contains('active')){
				console.log('!!!!');
				body.classList.add('menu_opened');
				toogleMenuMobile.style.transform = 'translateX(0)';
				buttonMenu.classList.add('active');
			}else if(buttonMenu.classList.contains('active')){
				closeMenu();
			}
		}
	}

	let closeMenu = (ev) => {
		console.log('0000')
		body.classList.remove('menu_opened');
		toogleMenuMobile.style.transform = 'translateX(-100%)';
		buttonMenu.classList.remove('active');
	}

	header.addEventListener('click', openMenu);



		////////////tabs

		let navDescription = document.querySelector('.nav_description');
		let btnOpenTab = document.querySelectorAll('.open_tab');
		console.log(btnOpenTab);

		let openDescriptionItem = (event) => {
			console.log(event);
		let clickedBtn = event.target; //находим кликнутую кнопку
		if(clickedBtn.classList.contains('open_tab')){  // если у клипнутой кнопки есть класс open_tab
			// clickedBtn.classList.add('active_btn');
			let target = clickedBtn.dataset.targetFor;  // достаем у нее значение дата-атрибута
			console.log(target);
			let descriptionItemTarget = document.querySelector(`[data-target-id = "${target}"]`);  // находим див с таким же значение дата-атрибута
			console.log(descriptionItemTarget);
			document.querySelector('.active').classList.remove('active'); // находим все элементы с класом актив и удаляем класс эктив
			
			if(!descriptionItemTarget.classList.contains('active')){
				descriptionItemTarget.classList.add('active');
			};
		};
	}
	let changeNavTabsColor = (event) => {
		let clickedBtn = event.target;
		if(clickedBtn.classList.contains('open_tab')){
			document.querySelector('.active_btn').classList.remove('active_btn');
			if(!clickedBtn.classList.contains('active_btn')){
				clickedBtn.classList.add('active_btn');
			};
		}
	}


		////////////cardAccordeon

		let cardItem = document.querySelector('.description_schedule');
		console.log(cardItem);

		let cardAccordeon = (event) => {
			if(document.querySelector('.description_item')){
				let clickedCard = event.target;
				console.log(clickedCard);
				if(clickedCard.classList.contains('card_title') || clickedCard.classList.contains('card_arrow')){
					let target = clickedCard.dataset.targetFor;
					console.log(target)
					let cardContentTarget = document.querySelector(`[data-target-id = "${target}"]`);
					console.log(cardContentTarget);

			document.querySelector('.show_card').classList.remove('show_card'); // находим все элементы с класом актив и удаляем класс эктив
			if(!cardContentTarget.classList.contains('show_card')){
				cardContentTarget.classList.add('show_card');
			};
		}
	}
};

let changeArrow = (event) => {
	if(document.querySelector('.description_item')){
		console.log(event)
		let clickedCard = event.target;
		if(clickedCard.classList.contains('card_title') || clickedCard.classList.contains('card_arrow')){
			let target = clickedCard.querySelector('.card_arrow');
			console.log(target)
			document.querySelector('.card_arrow').classList.remove('active_arrow');
			if(!target.classList.contains('active_arrow')){
				target.classList.add('active_arrow');
			};
		};
	}
};

if(document.querySelector('.tour_description')){
	navDescription.addEventListener('click', openDescriptionItem);
	navDescription.addEventListener('click', changeNavTabsColor);

	cardItem.addEventListener('click', cardAccordeon);
	cardItem.addEventListener('click', changeArrow);
}



});
