/*Preloader*/
$(window).on('load',()=>{
	$('#status').fadeOut();
	$('#preloader').delay(2000).fadeOut('slow');
})