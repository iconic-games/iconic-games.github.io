let roleId = 0;

const roles = [
	{
		name: 'Studio Art Director',
		image: 'images/job1.png',
		synopsis: 'Must be a great artist, a great person manager and a great person.',
		bg: 'url(images/studio2.png)',
		duties: [
			'Set the artistic direction for our games.',
			'Define and communicate the artistic vision for our games.',
			'Work with the wider leadership team to ensure games visuals serve gameplay and narrative needs and technical requirements.',
			'Work with production to plan and prioritise artistic deliverables and manage and reduce risk to project.',
			'Work with talent acquisition to build a true AAA art team of the highest caliber.',
			'Review artistic output and give constructive feedback.',
			'Oversee art team pipelines and processes.',
			'Evaluate and adopt new tools and processes that make the art team more effective.',
			'Evaluate and assess how AI tools can empower the team, allowing every artist to focus on what they really care about and enjoy, and have bigger individual impact, enhancing human creativity rather than replacing it.',
			'Gather reference materials, create style guides and art bibles.',
			'Manage, coach, motivate and develop each individual in the art team.',
			'Represent the art team to publishers, investors and external partners.',
			'Help define the studio culture.',
		],
		required: [
			'Shipped at least one title as an art director or senior art lead.',
			'Worked on at least three AAA titles.',
			'Strong foundational artistic skills.',
			'A portfolio of work demonstrating artistic direction and high competency in 2D and 3D asset creation.',
			'Strong leadership and people management skills.',
			'Strong communication skills.',
		],
		bonus: [
			'Shipped titles on UE4/UE5.',
			'Worked on at least one open world title.',
		]
	},
	{
		name: 'Principal Character Artist',
		image: 'images/job-3.png',
		synopsis: 'Like characters? Like art? This could be your perfect role!',
		overview: 'We are looking for someone who can help us define the next generation of game characters. You will collaboration with the Art Director and wider team to define, develop and maintain character assets. As one of the first artists joining a new game studio you will help to develop pipelines and processes, define the artistic style and company culture.\nEveryone who joins Iconic becomes an owner of the studio with a meaningful percentage of company stock, giving you real skin in the game!',
		bg: 'url(images/studio2.png)',
		duties: [
			'Create beautiful character art from concept art, 3D scan data and reference materials',
			'With the Art Director, help define and set the artistic style and vision for the game.',
			'Embrace AI as a way to enhance human creativity, not replace it.',
			'Develop best practices for our character pipeline',
			'Adapt to the concept and style of the project',
			'Collaborate with other disciplines departments (Animators Technical Artists and Designers)',
			'Coach and mentor junior staff.',
		],
		required: [
			'Shipped at least one title as a character artist.',
			'Worked on at least three AAA titles.',
			'Strong foundational artistic skills.',
			'A portfolio of work demonstrating artistic direction and high competency creating asset for AAA games.',
			'Strong communication skills.',
		],
		bonus: [
			'Shipped titles on UE4/UE5.',
			'Worked on at least one open world title.',
		]
	},
	{
		name: 'Principal Environment Artist',
		image: 'images/job-4.png',
		synopsis: 'Principal, not principle.',
		bg: 'url(images/studio2.png)',
		duties: [
			'Create high-quality environments in keeping with the project’s visual direction.',
			'With the Art Director, help define and set the artistic style and vision for the game.',
			'Embrace AI as a way to enhance human creativity, not replace it.',
			'Develop best practices for our art pipelines.',
			'Model assets using reference photographs and concept Art materials.',
			'Troubleshoot assets and action creative feedback.',
			'Collaborate with other disciplines such as World Design, Lighting and VFX.',
			'Coach and mentor junior staff.',
		],
		required: [
			'Shipped at least one title as an environment artist.',
			'Worked on at least three AAA titles.',
			'Strong foundational artistic skills.',
			'A portfolio of work demonstrating artistic direction and high competency creating asset for AAA games.',
			'Strong communication skills.',
		],
		bonus: [
			'Shipped titles on UE4/UE5.',
			'Worked on at least one open world title.',
		]
	},
	{
		name: 'Principal Animator',
		image: 'images/job-5.png',
		synopsis: 'Because things that don`t move are boring!',
		bg: 'url(images/studio2.png)',
		duties: [
			'Collaborate closely with the Creative Director, Art Director and wider team to define the animation style of our game.',
			'Set a clear animation vision as well as quality targets, leading with hands-on craft and providing feedback and notes as needed.',
			'Embrace AI as a way to enhance human creativity, not replace it.',
			'Explore and define animated action sequences with cinematic camera work.',
			'Create animation assets for highly iterative gameplay prototypes.',
			'Develop and refine Style and Process Guides',
			'Constantly champion animation as a way to enhance the player’s experience, always seeking new, innovative ways to push the envelope.',
			'Coach and mentor junior staff.',
		],
		required: [
			'Shipped at least one title as a animator.',
			'Worked on at least three AAA titles.',
			'Strong foundational artistic skills.',
			'A portfolio of work demonstrating artistic direction and high competency creating asset for AAA games.',
			'Strong communication skills.',
		],
		bonus: [
			'Shipped titles on UE4/UE5.',
			'Worked on at least one open world title.',
		]
	},
	{
		name: 'Principal Technical Artist',
		image: 'images/job-2.png',
		synopsis: 'Techno techno techno techno...',
		overview: 'As the Principal Technical Artist you will be responsible for analyzing game content and levels from a performance standpoint and setting budgets, standards, and best practices for cutting edge real-time projects resulting in the highest quality content running at target framerates on target hardware.\nEveryone who joins Iconic becomes an owner of the studio with a meaningful percentage of company stock, giving you real skin in the game!',
		bg: 'url(images/studio2.png)',
		duties: [
			'Drive improvements and maintain the toolchain for art asset creation and optimization that meet the team’s needs.',
			'Innovate techniques in asset creation that get the best visual results from the target platform.',
			'Instigate high-level art-related decisions throughout the development cycle regarding art-related project risks.',
			'Train other artists in best practices, tools and processes.',
			'Optimize scenes and assets and find creative solutions to ensure an optimal player experience.',
			'Research and implement technical improvements to our pipeline.',
			'Advocate for the adoption of AI in ways that help enhance human creativity, not replace it.',
			'Provide technical tools and guidance to ensure art assets meet performance and quality standards.',
			'Coach and mentor junior staff.',
		],
		required: [
			'Shipped at least one title as a technical artist.',
			'Worked on at least three AAA titles.',
			'Strong foundational artistic skills.',
			'A portfolio of work demonstrating artistic direction and high competency creating asset for AAA games.',
			'Strong communication skills.',
		],
		bonus: [
			'Shipped titles on UE4/UE5.',
			'Worked on at least one open world title.',
		]
	},
	{
		name: 'Game Designer',
		image: 'images/job-2.png',
		synopsis: 'Designing games. Dream job innit.',
		bg: 'url(images/steampunk.png)',
		duties: [
		],
		required: [
		],
		bonus: [
		]
	},
	{
		name: 'Senior Game Engineer',
		image: 'images/job-2.png',
		synopsis: 'Programmer, coder, engineer, whatever.',
		bg: 'url(images/steampunk.png)',
		duties: [
		],
		required: [
		],
		bonus: [
		]
	},
];

const IconicBlurb = "<p>Iconic Games are a new AAA studio funded by venture capital and angel investors. Founded by veterans of AAA games and AI experts. We’re seeking to be the first adoptees and proponents of generative AI to allow a small team to dream bigger and deliver amazing experiences to our players.</p><p>We’re a hybrid company that cares about it’s people. We have offices in London and most of the team come into the offices at least three times a week.</p>";

function measureText(pText, pFontSize, pFamily, pWeight) {
	var lDiv = document.createElement('div');

	document.body.appendChild(lDiv);

	if (pFamily != null) {
		lDiv.style.fontFamily = pFamily;
	}
	if (pWeight != null) {
		lDiv.style.fontWeight = pWeight;
	}
	lDiv.style.fontSize = "" + pFontSize + "px";
	lDiv.style.position = "absolute";
	lDiv.style.left = -1000;
	lDiv.style.top = -1000;

	lDiv.innerHTML = pText;

	var lResult = {
		width: lDiv.clientWidth,
		height: lDiv.clientHeight
	};

	document.body.removeChild(lDiv);
	lDiv = null;

	return lResult;
}

function fitText(el) {
	var text = el.innerText;
	var fsize = parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-size'));
	var fam = window.getComputedStyle(el, null).getPropertyValue('font-family');
	var weight = window.getComputedStyle(el, null).getPropertyValue('font-weight');
	var available = el.getBoundingClientRect().width * 0.9; // Margin
	var oneRem = parseInt(getComputedStyle(document.documentElement).fontSize);
	var maxFont = el.tagName.toLowerCase() == 'h1' ? oneRem * 4 : oneRem * 2;
	
	var measured = measureText(text, fsize, fam, weight);
	while(measured.width > available && fsize > oneRem) {
		fsize -= 0.25;
		measured = measureText(text, fsize, fam, weight);
	}
	
	while(measured.width < available && fsize < maxFont){
		fsize += 0.25;
		measured = measureText(text, fsize, fam, weight);
	}
	
	el.style.fontSize = fsize + 'px';
}


window.addEventListener('load', function (e) {
	let jobslist = document.getElementById('jobs-list');
	
	if(jobslist != null) {
		jobslist.replaceChildren();

		for(let i = 0; i < roles.length; ++i) {
			const role = roles[i];
			const newRole = document.createElement("div");
			newRole.className = "job_card";
			
			if(document.getElementById("jd") == null) {
				newRole.onclick = () => {window.location.href = "jobdetails.html?id="+i};	
			} else {
				newRole.onclick = () => {
					roleId = i;
					refreshJobDetails()};
			}

			const newRoleImage = document.createElement("img");
			newRoleImage.classList = "job_image";
			newRoleImage.src = role.image;
			newRole.appendChild(newRoleImage);

			const newRoleSummary = document.createElement("div");
			newRoleSummary.classList = "job_summary";
			const newRoleTitle = document.createElement("h1");
			newRoleTitle.innerHTML = role.name;
			newRoleTitle.classList = "fitText";
			const newRoleSynopsis = document.createElement("p");
			newRoleSynopsis.innerHTML = role.synopsis;
			newRoleSynopsis.classList = "fitText";
			newRoleSummary.appendChild(newRoleTitle);
			newRoleSummary.appendChild(newRoleSynopsis);
			newRole.appendChild(newRoleSummary);

			jobslist.appendChild(newRole);
		}
	}
	
	const jdElement = document.getElementById("jd");
	if(jdElement != null) {
		const urlParams = new URLSearchParams(window.location.search);		
		if(urlParams.has('id')) {
			roleId = urlParams.get('id');
		}
		refreshJobDetails();
	}
	
	let ro = new ResizeObserver(entries => {
		entries.forEach(entry => {fitText(entry.target);});
	});
	
	var fitTextElements = document.getElementsByClassName("fitText");
	for(var i = 0; i < fitTextElements.length; ++i) {
		const fitTextElement = fitTextElements[i];
		fitText(fitTextElement);
		ro.observe(fitTextElement);
	}
	
	
});

function refreshJobDetails() {
	const role = roles[roleId];
	
	jdImage.src = role.image;
	jdTitle.innerHTML = role.name;	
	jdOverview.innerHTML = role.overview == undefined ? "" : role.overview;
	
	rootElement.style.background = role.bg;
	rootElement.style.backgroundRepeat = "no-repeat";
	rootElement.style.backgroundPosition = "top"; 
	rootElement.style.backgroundSize = "cover";

	jdDuties.innerHTML = "";
	for(duty of role.duties) {
		const dutyElement = document.createElement("li");
		dutyElement.innerHTML = duty;
		jdDuties.appendChild(dutyElement);
	}

	jdRequired.innerHTML = "";
	for(item of role.required) {
		const newElement = document.createElement("li");
		newElement.innerHTML = item;
		jdRequired.appendChild(newElement);
	}

	jdBonus.innerHTML = "";
	for(item of role.bonus) {
		const newElement = document.createElement("li");
		newElement.innerHTML = item;
		jdBonus.appendChild(newElement);
	}

	jdBlurb.innerHTML = IconicBlurb;
}