$(window).load(function(){
	// Ridiculous Lazy Load "RLL" 
	// By: Ethan Hackett @ethanhackett http://www.ethanhackett.com
	
	// For each image with the datatype src do the following
	$('img[data-src]').each(function() {
		// Replace the src value with the datatype value		$(this).attr('src', $(this).attr('data-src'));
		//Example Image: <img src="/path-to/rll.gif" data-src="/path-to/actual-image.jpg" alt="Because I'm ridiculously lazy"/>	});
});