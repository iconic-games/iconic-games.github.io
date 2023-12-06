const stickysections = document.getElementsByClassName("sticky");

window.addEventListener('scroll', (e) => {
	for(let i = 0; i < stickysections.length; ++i) {
		transformStickySection(stickysections[i]);
	}
	
	if(window.scrollY > window.innerHeight) {
		navbar.hidden = false;
	} else {
		navbar.hidden = true;
	}
});

function transformStickySection(section) {
	let stickyParent = section.parentElement;
	const offsetTop = stickyParent.offsetTop;
	
	const scrollSection = section.querySelector('.scroll_section');
	const scrollHeight = scrollSection.getBoundingClientRect().width;
	const scrollWidth = scrollHeight - window.innerWidth;
	stickyParent.style.height = scrollHeight + 'px';
	
	const scrollLimit = scrollHeight - window.innerHeight;
	let horizontalScroll = (window.scrollY - offsetTop) / scrollLimit;
	horizontalScroll = horizontalScroll < 0 ? 0 : horizontalScroll > 1 ? 1 : horizontalScroll;
	horizontalScroll *= scrollWidth;
	scrollSection.style.transform = `translate3d(${-(horizontalScroll)}px, 0, 0)`;
}