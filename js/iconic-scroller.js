let touch = false;

window.addEventListener('load', function (e) {
	var wheelScrollers = document.getElementsByClassName("iconic_scroller");
	for(var i = 0; i < wheelScrollers.length; ++i) {
		var scroller = wheelScrollers[i];
		scroller.onmouseover = () => {
			scroller.classList.add("iconic_hovered");
		};
		scroller.onmouseout = () => {
			scroller.classList.remove("iconic_hovered");
		}
	}
});

window.addEventListener("wheel", e => {
	e.preventDefault();
	e.stopImmediatePropagation();
	
	var scrollers = document.getElementsByClassName("iconic_scroller");
	for(var i = 0; i < scrollers.length; ++i) {
		var scroller = scrollers[i];
		if(scroller.hidden == false && scroller.classList.contains("iconic_hovered")) {
			if(scroller.classList.contains("iconic_horizontal")) {
				if(e.deltaX != 0) {
					touch = true;
				} else if(touch == false) {
					if (e.deltaY > 0) scroller.scrollLeft += 100;
					else scroller.scrollLeft -= 100;			
				}
			} else {
				scroller.scrollTop += e.deltaY;
			}
		}
	}
}, {passive: false});

function showCulture() {
	document.getElementById("jobs").hidden = true;
	document.getElementById("culture").hidden = false;
}
function showJobs() {
	document.getElementById("culture").hidden = true;
	document.getElementById("jobs").hidden = false;
}