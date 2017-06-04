$( document ).ready(function() {
    $('#toggle').click(function() {
		console.log('abro menu');
		$('#toggle').css('display','none');
		$('#toggle-close').css('display','block');
		$('#header ul').css('display','block');
	});

	$('#toggle-close').click(function() {
		console.log('cierro menu');
		$('#toggle').css('display','block');
		$('#toggle-close').css('display','none');
		$('#header ul').css('display','none');
	});
});