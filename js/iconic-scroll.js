const stickysections = document.getElementsByClassName("sticky");

window.addEventListener('scroll', (e) => {
	for(let i = 0; i < stickysections.length; ++i) {
		transformStickySection(stickysections[i]);
	}
});

function transformStickySection(section) {
	let stickyParent = section.parentElement;
	const offsetTop = stickyParent.offsetTop;
	const scrollSection = section.querySelector('.scroll_section');
	
	const scrollLimit = scrollSection.getBoundingClientRect().width + window.innerHeight - window.innerWidth;
	stickyParent.style.height = scrollLimit + 'px';
	
	
	let horizontalScroll = (window.scrollY - offsetTop);
	horizontalScroll = horizontalScroll < 0 ? 0 : horizontalScroll > scrollLimit ? scrollLimit : horizontalScroll;
	console.log(horizontalScroll + " : " + window.scrollY + " (top:" + offsetTop + " vh:" + window.innerHeight + " limit:" + scrollLimit + ")");
	scrollSection.style.transform = `translate3d(${-(horizontalScroll)}px, 0, 0)`;
}