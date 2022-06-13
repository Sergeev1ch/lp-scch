$(document).ready(function() {
	$('.burger').click(function() {
		$('.burger-menu').toggleClass('hidden');
	});
	$('.burger-menu a').click(function(){
		$('.burger-menu').toggleClass('hidden');
	})
});