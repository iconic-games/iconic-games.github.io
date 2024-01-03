let touch = false;

let hoverScroller = null;

document.addEventListener('mousemove', e => {
	hoverScroller = document.elementFromPoint(e.clientX, e.clientY);
	while(hoverScroller != null) {
		if(hoverScroller.classList.contains("iconic_scroller")) {
			break;
		}
		hoverScroller = hoverScroller.parentElement;
	}
	
}, {passive: true})

window.addEventListener("wheel", e => {
	e.preventDefault();
	e.stopImmediatePropagation();
	
	if(e.deltaX != 0) {
		touch = true;
	}
	
	if(hoverScroller != null) {
		if(hoverScroller.classList.contains("iconic_horizontal")) {
			if(touch == false) {
				if (e.deltaY > 0) hoverScroller.scrollLeft += 100;
				else hoverScroller.scrollLeft -= 100;			
			}
			else {
				hoverScroller.scrollLeft += e.deltaX;
			}
		} else {
			hoverScroller.scrollTop += e.deltaY;
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