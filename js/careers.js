const roles = [
	{
		name: 'Studio Art Director',
		image: 'images/job1.png',
		synopsis: 'Representing the art team at the highest level in the studio. Must be a great artist, a great person manager and a great person.',
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
		synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		duties: [
		],
		required: [
		],
		bonus: [
		]
	},
	{
		name: 'Principal Environment Artist',
		image: 'images/job-4.png',
		synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		duties: [
		],
		required: [
		],
		bonus: [
		]
	},
	{
		name: 'Principal Animator',
		image: 'images/job-5.png',
		synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		duties: [
		],
		required: [
		],
		bonus: [
		]
	},
	{
		name: 'Principal Technical Artist',
		image: 'images/job-2.png',
		synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		duties: [
		],
		required: [
		],
		bonus: [
		]
	},
	{
		name: 'Game Designer',
		image: 'images/job-2.png',
		synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
		synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		duties: [
		],
		required: [
		],
		bonus: [
		]
	},
];

const IconicBlurb = "<h2>About Iconic Games</h2><p>Iconic Games are a new AAA studio funded by venture capital and angel investors. Founded by veterans of AAA games and AI experts. We’re seeking to be the first adoptees and proponents of generative AI to allow a small team to dream bigger and deliver amazing experiences to our players.</p><p>We’re a hybrid company that cares about it’s people. We have offices in London and most of the team come into the offices at least three times a week.</p>";

window.addEventListener('load', function (e) {			
	let jobslist = document.getElementById('jobs-list');
	
	if(jobslist != null) {
		jobslist.replaceChildren();

		for(let i = 0; i < roles.length; ++i) {
			const role = roles[i];
			const newRole = document.createElement("div");
			newRole.className = "job_card";
			newRole.onclick = () => {window.location.href = "jobdetails.html?id="+i};

			const newRoleImage = document.createElement("img");
			newRoleImage.classList = "job_image";
			newRoleImage.src = role.image;
			newRole.appendChild(newRoleImage);

			const newRoleSummary = document.createElement("div");
			newRoleSummary.classList = "job_summary";
			const newRoleTitle = document.createElement("h1");
			newRoleTitle.innerHTML = role.name;
			const newRoleSynopsis = document.createElement("p");
			newRoleSynopsis.innerHTML = role.synopsis;
			newRoleSummary.appendChild(newRoleTitle);
			newRoleSummary.appendChild(newRoleSynopsis);
			newRole.appendChild(newRoleSummary);

			jobslist.appendChild(newRole);
		}
	}
	
	const jdElement = document.getElementById("jd");
	if(jdElement != null) {
		const urlParams = new URLSearchParams(window.location.search);		
		const role = roles[urlParams.get('id')];
		
		const roleImage = document.getElementById("job-image");
		roleImage.src = role.image;
		
		const roleTitle = document.getElementById("job-title");
		roleTitle.innerHTML = role.name;
		
		const theRole = document.createElement("h2");
		theRole.innerHTML = "The Role";
		jdElement.appendChild(theRole);
		
		for(duty of role.duties) {
			const dutyElement = document.createElement("li");
			dutyElement.innerHTML = duty;
			jdElement.appendChild(dutyElement);
		}
		
		const theExp = document.createElement("h2");
		theExp.innerHTML = "Experience Wanted";
		jdElement.appendChild(theExp);
		
		for(item of role.required) {
			const newElement = document.createElement("li");
			newElement.innerHTML = item;
			jdElement.appendChild(newElement);
		}
		
		const theBonus = document.createElement("h2");
		theBonus.innerHTML = "Bonus Points For";
		jdElement.appendChild(theBonus);
		
		for(item of role.bonus) {
			const newElement = document.createElement("li");
			newElement.innerHTML = item;
			jdElement.appendChild(newElement);
		}
		
		const theBlurb = document.createElement("div");
		theBlurb.innerHTML = IconicBlurb;
		jdElement.appendChild(theBlurb);
	}
	
});