let touch = false;
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', e => {
	mouseX = e.clientX;
	mouseY = e.clientY;
}, {passive: true});

function getParentScroller(element) {
	while(element != null) {
		if(element.classList.contains("iconic_scroller")) {
			break;
		}
		element = element.parentElement;
	}
	return element;
}

let lastWheelTime = 0;
function applyWheelScroll(scroller, delta) {
	if(scroller == null) {
		return false;
	}
	// Check if scroller is fully on screen
	const scrollerRect = scroller.getBoundingClientRect();
	const oneRem = parseInt(getComputedStyle(document.documentElement).fontSize);
	const scrollerStyle = window.getComputedStyle(scroller);
	const horizontal = scrollerStyle.flexDirection == "row" || scrollerStyle.flexDirection == "row-reverse";
	const onScreen = !horizontal || ((scrollerRect.bottom + oneRem) <= (window.innerHeight || document.documentElement.clientHeight) && scrollerRect.top > 0);

	if(!onScreen) {
		applyWheelScroll(getParentScroller(scroller.parentElement), delta);
	} else if(horizontal) {
		if (delta > 0) {
			if(scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth) {
				return applyWheelScroll(getParentScroller(scroller.parentElement), delta);
			} else {
				const d = new Date();
				const now = d.getTime();
				if(now < lastWheelTime + 200) {
					return true;
				}
				lastWheelTime = d.getTime();
				scroller.scrollBy({
					left: 200,
					behavior: "smooth",
				});
				return true;
			}
		}
		else {
			if(scroller.scrollLeft <= 0) {
				return applyWheelScroll(getParentScroller(scroller.parentElement), delta);
			} else {
				const d = new Date();
				const now = d.getTime();
				if(now < lastWheelTime + 200) {
					return true;
				}
				lastWheelTime = d.getTime();
				scroller.scrollBy({
					left: -200,
					behavior: "smooth",
				});
				return true;
			}
		}
	} else {
		scroller.scrollBy({
			top:  delta,
			behavior: 'smooth'
		  });
		return true;
	}	
}

window.addEventListener("wheel", e => {
	if(e.deltaX != 0 || touch == true) {
		touch = true;
		return;
	}
	
	let hoverElement = document.elementFromPoint(mouseX, mouseY);
	let hoverScroller = getParentScroller(hoverElement);
	
	if(applyWheelScroll(hoverScroller, e.deltaY)) {
		e.preventDefault();
		e.stopImmediatePropagation();
	}
}, {passive: false});

function showCulture() {
	document.getElementById("jobs").hidden = true;
	document.getElementById("jobNavOption").style.textDecoration = "none";
	document.getElementById("culture").hidden = false;
	document.getElementById("cultureNavOption").style.textDecoration = "underline";
}
function showJobs() {
	document.getElementById("culture").hidden = true;
	document.getElementById("cultureNavOption").style.textDecoration = "none";
	document.getElementById("jobs").hidden = false;
	document.getElementById("jobNavOption").style.textDecoration = "underline";
}

function scroller(id, delta) {
	const scroller = document.getElementById(id);
	scroller.scrollBy({
		left: delta,
		behavior: "smooth",
	});
}