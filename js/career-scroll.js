window.addEventListener("wheel", function (e) {
	var jobScroller = document.getElementById("jobs-list");
	if (e.deltaY > 0) jobScroller.scrollLeft += 100;
	else jobScroller.scrollLeft -= 100;
	console.log("Scroll " + e.deltaY);
});