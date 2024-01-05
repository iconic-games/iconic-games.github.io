document.addEventListener('DOMContentLoaded', function (e) {
	var url_string = window.location.href; 
	var url = new URL(url_string);
	var view = url.searchParams.get("view");

	if(view != null) {
		navFrame.location = view + ".html";	
	}
});