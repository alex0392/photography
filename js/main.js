$(document).ready(function(){
	mobileMenu();
	$('body').attr('data-active',0);
	$('body').attr('data-position',0);
	//scrollMenu();
	//var heightBlock=$(window).height();
	$(window).scrollTop('0');
	//$('section').css({'height':heightBlock+'px'});
	$(window).scroll(function() {
		//scrollMenu();
	});

});

function mobileMenu(){
	$('#menu_mobile').click(function(){
		if($(this).hasClass('active_menu')){
		//$('.navbar-collapse').hide('5000');
		$(this).removeClass('active_menu');
		$('.collapse').css({'display':'none'});
		$('.header_bottom').css({'top':'50%'});
		//$('.header_top').css({'height':'100%'});
		$('.navbar-nav>li').css({'width':'auto'});
	}else{
		$(this).addClass('active_menu');
		//$('.navbar-collapse').show('5000');
		$('.collapse').css({'display':'block'});
		$('.navbar-nav>li').css({'width':'100%','display':'block'})
		$('.header_bottom').css({'top':'80%'});
		//$('.header_top').css({'height':'294px'});
	}
	});
}
function scrollMenu(){

	var page=$('body').attr('data-active');
	var tempScrollTop=$('body').attr('data-position');
	var currentScrollTop=$(window).scrollTop();
	console.log('temp '+tempScrollTop);
	console.log('this '+currentScrollTop);
	if (Number(tempScrollTop) < Number(currentScrollTop)){
		page=Number(page)+1;
		$(window).scrollTop(page*$(window).height());
		$('body').attr('data-active',page);
		$('body').attr('data-position',currentScrollTop);
		console.log('down');
	}else{
		(page!=0) ? page=Number(page)-1:page=0;
		$(window).scrollTop(page*$(window).height());
		$('body').attr('data-active',page);
		$('body').attr('data-position',currentScrollTop);
		console.log('up');
	}
	//$(window).scrollTop(page*$(window).height());

	if($(window).scrollTop()>178){
		//$('nav').addClass('navTop');

	}else{
		//$('nav').removeClass('navTop');
	}
	
};