$(document).ready(function() {

	/*$("li").click(function() {  

		var id = $(this).attr('id'); // ex. home

		// remove active class for all li
		$('li.scroll').removeClass('active');

	    $(this).addClass("active");    

		console.log(id);  
	});*/

	var id = $('section').attr('id');
	// console.log(id);
	
	// remove active class for all li
	$('li.nav-item').removeClass('active');

	if (id == 'workwrap') {
		$('li.nav-item#nav-workswrap').addClass("active");
	} 

	$("li.nav-item#nav-"+id).addClass('active');

	// replace findin link when needded
	let full_url = location.href;

	if (full_url.includes(':8000') || full_url.includes('portfolioLaraWebsite')) {
		$(".portfolio-modal.modal .findin-link a").prop('href', 'http://localhost/findin/public');
		$(".portfolio-modal.modal .infi-link a").prop('href', 'http://localhost/infirmieresThuin/');
		$(".portfolio-modal.modal .pastoo-link a").prop('href', 'https://pastoo-test.firebaseapp.com');

		$('.img-fluid').each(function() {
			this.src = this.src.replace("public/", "");
			// console.log(this);
		});
	} else if (full_url.includes('cristinadinca.com')) {
		$(".portfolio-modal.modal .findin-link").remove();
		$(".portfolio-modal.modal .infi-link").remove();
		$(".portfolio-modal.modal .pastoo-link").remove();

		/*$(".portfolio-modal.modal .findin-link a").prop('target', '_self');
		$(".portfolio-modal.modal .findin-link a").prop('href', '#');
		$('.modal').modal('hide');
		$('.modal-backdrop').remove();*/
	}

	/*if (typeof hreflink !== 'undefined') {
		if (hreflink.includes(':8000')) {
			newHref = hreflink.replace(":8000", "");
		} else {
			newHref = hreflink.replace("portfoliolarawebsite/", "");
		}

		// console.log(newHref);
		$(".portfolio-modal.modal .findin-link a").prop('href', newHref);
	}*/

	// replace images public path when we are on local server
	

});