//const stickysections = [...document.querySelectorAll('.sticky')];
const stickysections = document.getElementsByClassName("sticky");
let images = [
	'https://source.unsplash.com/ezSFnAFi9hY/500x500',
	'https://source.unsplash.com/ezSFnAFi9hY/500x500',
	'https://source.unsplash.com/ezSFnAFi9hY/500x500',
	'https://source.unsplash.com/ezSFnAFi9hY/500x500',
	'https://source.unsplash.com/ezSFnAFi9hY/500x500',
	'https://source.unsplash.com/ezSFnAFi9hY/500x500',
	'https://source.unsplash.com/ezSFnAFi9hY/500x500',
	'https://source.unsplash.com/ezSFnAFi9hY/500x500',
];

window.addEventListener('scroll', (e) => {
	for(let i = 0; i < stickysections.length; ++i) {
		transformStickySection(stickysections[i]);
	}
});

function transformStickySection(section) {
	const offsetTop = section.parentElement.offsetTop;
	const scrollSection = section.querySelector('.scroll_section');
	let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
	percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
	console.log(percentage);
	scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
}