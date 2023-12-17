let touch = false;

window.addEventListener("wheel", function (e) {
	var jobScroller = document.getElementById("jobs-list");
	var cultureScroller = document.getElementById("culture-list");
	
	var scroller = document.getElementById("jobs")?.hidden ? cultureScroller : jobScroller ?? jobScroller;
	if(scroller.clientHeight < scroller.clientWidth) { // Wheel for horizontal scrollers
		if(scroller != null) 
		{
			if(e.deltaX != 0) {
				touch = true;
			} else if(touch == false)
			{
				if (e.deltaY > 0) scroller.scrollLeft += 100;
				else scroller.scrollLeft -= 100;			
			}
		}
	}
});

function showCulture() {
	document.getElementById("jobs").hidden = true;
	document.getElementById("culture").hidden = false;
}
function showJobs() {
	document.getElementById("culture").hidden = true;
	document.getElementById("jobs").hidden = false;
}