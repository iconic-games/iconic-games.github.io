window.addEventListener("wheel", function (e) {
	var jobScroller = document.getElementById("jobs-list");
	var cultureScroller = document.getElementById("culture-list");
	
	var scroller = document.getElementById("jobs").hidden ? cultureScroller : jobScroller;
	
	if (e.deltaY > 0) scroller.scrollLeft += 100;
	else scroller.scrollLeft -= 100;
	console.log("Scroll " + e.deltaY);
});

function showCulture() {
	document.getElementById("jobs").hidden = true;
	document.getElementById("culture").hidden = false;
}
function showJobs() {
	document.getElementById("culture").hidden = true;
	document.getElementById("jobs").hidden = false;
}