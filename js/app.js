$(document).ready(function(){

//sticky menu

	var navigation = $('.moving_menu');
	var ul = $('.menu');
	var top = $('nav').position().top;
	var height = $('nav').innerHeight();


	function setSticky() {
		var windowPosition = $(window).scrollTop();
		top = $('nav').position().top;
		height = $('nav').innerHeight();

		if(windowPosition >= top){
			$('nav').css('height', height);
			navigation.addClass('sticky');
		}
		else if(windowPosition < top){
			navigation.removeClass('sticky');
			$('nav').css('height', 'auto');
		}
	}

	$(window).on('scroll', function(){
		setSticky();
		


	});


	$(window).on('resize', function(){
		setSticky();
		if( $(window).width() > 582 ) {
			$('.menu2 .menu').hide();
		}

	})

//odsyłacz linków
	
		function odsylacz(){

			

			$('.menu , .icons , .smallShape').find('a').on('click', function(){

			    var href = $(this).attr('href');

		//	    console.log($(href).offset().top)
		 		$('html, body').animate({
		            scrollTop: $(href).offset().top - height + 10
		        }, 1000);

				return false;
			})
		

		}

		odsylacz();




	$('.hamburger').on('click', function(){
		if(window.matchMedia('min-width: 600px')){
			$('.menu2 .menu').toggle();
	}

})

	function formularz(){

		var form = $('.contact');
		var name = $('#name');
		var email = $('#email');
		var message = $('#message');
		var errorName = $('#errorName');
		var errorEmail = $('#errorEmail');
		var errorMessage = $('#errorMessage');

	$(".button").on('click', function(event){

		var newName = name.val();
		var newEmail = email.val();
		var newMessage = message.val();

        console.log(newMessage);

       		if(newName.length <= 2){
               errorName.html("Name should be longer then 2 letters");
                event.preventDefault();
            }

            if(newEmail.indexOf('@') === -1){
                errorEmail.html("Wrong email adress");
                event.preventDefault();
            }

            if(newEmail.indexOf('.') === -1){
                errorEmail.html("Wrong email adress");
                event.preventDefault();
            }

            if(newMessage.length < 50){
                errorMessage.html("Message should be longer then 50 letters");
                event.preventDefault();
            }

        event.preventDefault();
	})

	}

	formularz();


		function transparentClick(){

			var photo1 = $('.photo_1');
			var photo2 = $('.photo_2');
			var photo3 = $('.photo_3');
			var photo4 = $('.photo_4');
			var photo5 = $('.photo_5');
			var photo6 = $('.photo_6');
			var gallery = $('.gallery_big');
			var img = $('.gallery_big').find('img');
			var exit = $('.exit');
			var bgLast = $('.bgLast');


			photo1.on('click', function(){
				gallery.show();
				img.addClass('photo_1_gallery');
				bgLast.addClass('.bgLast');
			})

			photo2.on('click', function(){
				gallery.show();
				img.addClass('photo_2_gallery');
				bgLast.addClass('.bgLast');
			})

			photo3.on('click', function(){
				gallery.show();
				img.addClass('photo_3_gallery');
				bgLast.addClass('.bgLast');
			})

			photo4.on('click', function(){
				gallery.show();
				img.addClass('photo_4_gallery');
				bgLast.addClass('.bgLast');
			})

			photo5.on('click', function(){
				gallery.show();
				img.addClass('photo_5_gallery');
				bgLast.addClass('.bgLast');
			})

			photo6.on('click', function(){
				gallery.show();
				img.addClass('photo_6_gallery');
				bgLast.addClass('.bgLast');
			}) 

			exit.on('click', function(){
				gallery.hide();
				img.removeClass();
			})
		}


		transparentClick();

	function sliderQuotes(){
		$('.bxslider').bxSlider();	
	}
		
	sliderQuotes();

	function sliderPeople(){

		$('.something').slick({
  			prevArrow: $('.left_arrow'),
  			nextArrow: $('.right_arrow'),
  			slidesToShow: 3,
  			centerMode: true,
  			centerPadding: '20px',
  			responsive: [
  				{
  					breakpoint: 521,
  					settings:{
  						slidesToShow: 1,
  						centerMode: true,
  					}
  				}
  			]
  		});
	}

	sliderPeople();

	function purplebars(){
		if( $(window).width() > 521){
			$('.right_arrow').on('click', function(){
				var span1 = $('.gray_bar1 span');
				var span2 = $('.gray_bar2 span');
				var span3 = $('.gray_bar3 span');
				var span4 = $('.gray_bar4 span');
				var percentage1 = $('.percentage1');
				var percentage2 = $('.percentage2');
				var percentage3 = $('.percentage3');
				var percentage4 = $('.percentage4');
		 
			if ($('.slick-track').children().eq(4).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_1');
				$('.percentage1').html('82%');
				span2.removeClass();
				span2.addClass('purple_bar2_1');
				$('.percentage2').html('45%');
				span3.removeClass();
				span3.addClass('purple_bar3_1');
				$('.percentage3').html('95%');
				span4.removeClass();
				span4.addClass('purple_bar4_1');
				$('.percentage4').html('45%');
			}

			else if ($('.slick-track').children().eq(5).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_2');
				$('.percentage1').html('18%');
				span2.removeClass();
				span2.addClass('purple_bar2_2');
				$('.percentage2').html('23%');
				span3.removeClass();
				span3.addClass('purple_bar3_2');
				$('.percentage3').html('8%');
				span4.removeClass();
				span4.addClass('purple_bar4_2');
				$('.percentage4').html('65%');
			}

			else if ($('.slick-track').children().eq(6).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_3');
				$('.percentage1').html('41%');
				span2.removeClass();
				span2.addClass('purple_bar2_3');
				$('.percentage2').html('95%');
				span3.removeClass();
				span3.addClass('purple_bar3_3');
				$('.percentage3').html('25%');
				span4.removeClass();
				span4.addClass('purple_bar4_3');
				$('.percentage4').html('100%');
			}

			else if ($('.slick-track').children().eq(7).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_1');
				$('.percentage1').html('82%');
				span2.removeClass();
				span2.addClass('purple_bar2_1');
				$('.percentage2').html('45%');
				span3.removeClass();
				span3.addClass('purple_bar3_1');
				$('.percentage3').html('95%');
				span4.removeClass();
				span4.addClass('purple_bar4_1');
				$('.percentage4').html('45%');
			}

			else if ($('.slick-track').children().eq(8).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_2');
				$('.percentage1').html('18%');
				span2.removeClass();
				span2.addClass('purple_bar2_2');
				$('.percentage2').html('23%');
				span3.removeClass();
				span3.addClass('purple_bar3_2');
				$('.percentage3').html('8%');
				span4.removeClass();
				span4.addClass('purple_bar4_2');
				$('.percentage4').html('65%');
			}

			else if ($('.slick-track').children().eq(9).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_3');
				$('.percentage1').html('41%');
				span2.removeClass();
				span2.addClass('purple_bar2_3');
				$('.percentage2').html('95%');
				span3.removeClass();
				span3.addClass('purple_bar3_3');
				$('.percentage3').html('25%');
				span4.removeClass();
				span4.addClass('purple_bar4_3');
				$('.percentage4').html('100%');
			}


			})
			
			$('.left_arrow').on('click', function(){
				span1 = $('.gray_bar1 span');
				span2 = $('.gray_bar2 span');
				span3 = $('.gray_bar3 span');
				span4 = $('.gray_bar4 span');

		 
			if ($('.slick-track').children().eq(4).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_1');
				$('.percentage1').html('82%');
				span2.removeClass();
				span2.addClass('purple_bar2_1');
				$('.percentage2').html('45%');
				span3.removeClass();
				span3.addClass('purple_bar3_1');
				$('.percentage3').html('95%');
				span4.removeClass();
				span4.addClass('purple_bar4_1');
				$('.percentage4').html('45%');
			}

			else if ($('.slick-track').children().eq(5).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_2');
				$('.percentage1').html('18%');
				span2.removeClass();
				span2.addClass('purple_bar2_2');
				$('.percentage2').html('23%');
				span3.removeClass();
				span3.addClass('purple_bar3_2');
				$('.percentage3').html('8%');
				span4.removeClass();
				span4.addClass('purple_bar4_2');
				$('.percentage4').html('65%');
			}

			else if ($('.slick-track').children().eq(6).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_3');
				$('.percentage1').html('41%');
				span2.removeClass();
				span2.addClass('purple_bar2_3');
				$('.percentage2').html('95%');
				span3.removeClass();
				span3.addClass('purple_bar3_3');
				$('.percentage3').html('25%');
				span4.removeClass();
				span4.addClass('purple_bar4_3');
				$('.percentage4').html('100%');
			}

			else if ($('.slick-track').children().eq(7).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_1');
				$('.percentage1').html('82%');
				span2.removeClass();
				span2.addClass('purple_bar2_1');
				$('.percentage2').html('45%');
				span3.removeClass();
				span3.addClass('purple_bar3_1');
				$('.percentage3').html('95%');
				span4.removeClass();
				span4.addClass('purple_bar4_1');
				$('.percentage4').html('45%');
			}

			else if ($('.slick-track').children().eq(8).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_2');
				$('.percentage1').html('18%');
				span2.removeClass();
				span2.addClass('purple_bar2_2');
				$('.percentage2').html('23%');
				span3.removeClass();
				span3.addClass('purple_bar3_2');
				$('.percentage3').html('8%');
				span4.removeClass();
				span4.addClass('purple_bar4_2');
				$('.percentage4').html('65%');
			}

			else if ($('.slick-track').children().eq(9).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_3');
				$('.percentage1').html('41%');
				span2.removeClass();
				span2.addClass('purple_bar2_3');
				$('.percentage2').html('95%');
				span3.removeClass();
				span3.addClass('purple_bar3_3');
				$('.percentage3').html('25%');
				span4.removeClass();
				span4.addClass('purple_bar4_3');
				$('.percentage4').html('100%');
			}


			})
			}

		if( $(window).width() < 521){
			$('.right_arrow').on('click', function(){
				span1 = $('.gray_bar1 span');
				span2 = $('.gray_bar2 span');
				span3 = $('.gray_bar3 span');
				span4 = $('.gray_bar4 span');

		 
			if ($('.slick-track').children().eq(2).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_1');
				$('.percentage1').html('82%');
				span2.removeClass();
				span2.addClass('purple_bar2_1');
				$('.percentage2').html('45%');
				span3.removeClass();
				span3.addClass('purple_bar3_1');
				$('.percentage3').html('95%');
				span4.removeClass();
				span4.addClass('purple_bar4_1');
				$('.percentage4').html('45%');
			}

			else if ($('.slick-track').children().eq(3).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_2');
				$('.percentage1').html('18%');
				span2.removeClass();
				span2.addClass('purple_bar2_2');
				$('.percentage2').html('23%');
				span3.removeClass();
				span3.addClass('purple_bar3_2');
				$('.percentage3').html('8%');
				span4.removeClass();
				span4.addClass('purple_bar4_2');
				$('.percentage4').html('65%');
			}

			else if ($('.slick-track').children().eq(4).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_3');
				$('.percentage1').html('41%');
				span2.removeClass();
				span2.addClass('purple_bar2_3');
				$('.percentage2').html('95%');
				span3.removeClass();
				span3.addClass('purple_bar3_3');
				$('.percentage3').html('25%');
				span4.removeClass();
				span4.addClass('purple_bar4_3');
				$('.percentage4').html('100%');
			}

			else if ($('.slick-track').children().eq(5).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_1');
				$('.percentage1').html('82%');
				span2.removeClass();
				span2.addClass('purple_bar2_1');
				$('.percentage2').html('45%');
				span3.removeClass();
				span3.addClass('purple_bar3_1');
				$('.percentage3').html('95%');
				span4.removeClass();
				span4.addClass('purple_bar4_1');
				$('.percentage4').html('45%');
			}

			else if ($('.slick-track').children().eq(6).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_2');
				$('.percentage1').html('18%');
				span2.removeClass();
				span2.addClass('purple_bar2_2');
				$('.percentage2').html('23%');
				span3.removeClass();
				span3.addClass('purple_bar3_2');
				$('.percentage3').html('8%');
				span4.removeClass();
				span4.addClass('purple_bar4_2');
				$('.percentage4').html('65%');
			}

			else if ($('.slick-track').children().eq(7).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_3');
				$('.percentage1').html('41%');
				span2.removeClass();
				span2.addClass('purple_bar2_3');
				$('.percentage2').html('95%');
				span3.removeClass();
				span3.addClass('purple_bar3_3');
				$('.percentage3').html('25%');
				span4.removeClass();
				span4.addClass('purple_bar4_3');
				$('.percentage4').html('100%');
			}


			})
			
			$('.left_arrow').on('click', function(){
				span1 = $('.gray_bar1 span');
				span2 = $('.gray_bar2 span');
				span3 = $('.gray_bar3 span');
				span4 = $('.gray_bar4 span');

		 
			if ($('.slick-track').children().eq(2).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_1');
				$('.percentage1').html('82%');
				span2.removeClass();
				span2.addClass('purple_bar2_1');
				$('.percentage2').html('45%');
				span3.removeClass();
				span3.addClass('purple_bar3_1');
				$('.percentage3').html('95%');
				span4.removeClass();
				span4.addClass('purple_bar4_1');
				$('.percentage4').html('45%');
			}

			else if ($('.slick-track').children().eq(3).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_2');
				$('.percentage1').html('18%');
				span2.removeClass();
				span2.addClass('purple_bar2_2');
				$('.percentage2').html('23%');
				span3.removeClass();
				span3.addClass('purple_bar3_2');
				$('.percentage3').html('8%');
				span4.removeClass();
				span4.addClass('purple_bar4_2');
				$('.percentage4').html('65%');
			}

			else if ($('.slick-track').children().eq(4).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_3');
				$('.percentage1').html('41%');
				span2.removeClass();
				span2.addClass('purple_bar2_3');
				$('.percentage2').html('95%');
				span3.removeClass();
				span3.addClass('purple_bar3_3');
				$('.percentage3').html('25%');
				span4.removeClass();
				span4.addClass('purple_bar4_3');
				$('.percentage4').html('100%');
			}

			else if ($('.slick-track').children().eq(5).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_1');
				$('.percentage1').html('82%');
				span2.removeClass();
				span2.addClass('purple_bar2_1');
				$('.percentage2').html('45%');
				span3.removeClass();
				span3.addClass('purple_bar3_1');
				$('.percentage3').html('95%');
				span4.removeClass();
				span4.addClass('purple_bar4_1');
				$('.percentage4').html('45%');
			}

			else if ($('.slick-track').children().eq(6).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_2');
				$('.percentage1').html('18%');
				span2.removeClass();
				span2.addClass('purple_bar2_2');
				$('.percentage2').html('23%');
				span3.removeClass();
				span3.addClass('purple_bar3_2');
				$('.percentage3').html('8%');
				span4.removeClass();
				span4.addClass('purple_bar4_2');
				$('.percentage4').html('65%');
			}

			else if ($('.slick-track').children().eq(7).hasClass('slick-center')){
				span1.removeClass();
				span1.addClass('purple_bar1_3');
				$('.percentage1').html('41%');
				span2.removeClass();
				span2.addClass('purple_bar2_3');
				$('.percentage2').html('95%');
				span3.removeClass();
				span3.addClass('purple_bar3_3');
				$('.percentage3').html('25%');
				span4.removeClass();
				span4.addClass('purple_bar4_3');
				$('.percentage4').html('100%');
			}


			})
			}
		}
		 
	purplebars();


});
