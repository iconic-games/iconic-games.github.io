let touch = false;

window.addEventListener('load', function (e) {
	var wheelScrollers = document.getElementsByClassName("wheelScrollHover");
	for(var i = 0; i < wheelScrollers.length; ++i) {
		var scroller = wheelScrollers[i];
		scroller.onmouseover = () => {
			scroller.classList.add("wheelScroll");
		};
		scroller.onmouseout = () => {
			scroller.classList.remove("wheelScroll");
		}
	}
});

window.addEventListener("wheel", function (e) {
	var wheelScrollers = document.getElementsByClassName("wheelScroll");
	for(var i = 0; i < wheelScrollers.length; ++i) {
		var scroller = wheelScrollers[i];
		if(scroller.hidden == false) {
			if(scroller.clientHeight < scroller.clientWidth) { // Wheel for horizontal scrollers
				if(scroller != null) 
				{
					if(e.deltaX != 0) {
						touch = true;
					} else if(touch == false) {
						if (e.deltaY > 0) scroller.scrollLeft += 100;
						else scroller.scrollLeft -= 100;			
					}
				}
			} else {
				scroller.scrollTop += e.deltaY;
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