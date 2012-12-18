/* =========================== *
 * 2012, @eroispaziali     	   *
 * =========================== */


$(document).ready(function(){
	var onPostIt = $('h6:first').text().trim() == '— post-it';
	console.log("test " + onPostIt);
	if (onPostIt) {
		var redirectUrl = $('h1:first a[href]').attr('href');
		if (typeof redirectUrl != 'undefined') {
	    	location.href = redirectUrl;
	    }
	}
});

