$(function(){
	$(".m-nav ul li .tits").click(function(){
        if($(this).parent().hasClass('curr')){
            $(this).parent().removeClass("curr").find("dl").slideUp();
        }else{
        	$(".m-nav ul li").removeClass("curr").find("dl").slideUp();
            $(this).parent().addClass("curr").find("dl").slideDown(); 
        }
    })
	$('.nav-click').click(function(){
    	if($(this).hasClass('on')){
    		$(this).removeClass('on');
    		$('.m-nav').slideUp();
    	}else{
    		$(this).addClass('on');
    		$('.m-nav').slideDown();
    	}
    })

    $('.mnav-click').click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.about-banner .nav-m .nav-new ul').animate({left: -100+'%'},600);
		}else{
			$(this).addClass('on');
			$('.about-banner .nav-m .nav-new ul').animate({left: 0},600);
		}
	})


	  $('.js-m,.js-m1,.js-m2,.js-m3').each(function() {
	      var _this = $(this);
	      if ($(window).scrollTop() > _this.offset().top - $(window).height()) {
	        _this.stop().transition({
	          translate: (0, 0),
	          rotate: 0,
	          scale: 1,
	          opacity: 1
	        }, 1000);
	      }
    });

    $(window).scroll(function(){
		$('.js-m,.js-m1,.js-m2,.js-m3').each(function() {
	      	var _this = $(this);
	      	if ($(window).scrollTop() > _this.offset().top - $(window).height()) {
	        	_this.stop().transition({
		        translate: (0, 0),
		        rotate: 0,
		        scale: 1,
		        opacity: 1
	        }, 1000);
	      }
	    });
	});
});