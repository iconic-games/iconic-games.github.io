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

window.addEventListener('load', function (e) {
	console.log("Loaded");					
	let jobslist = document.getElementById('jobs-list');
	jobslist.replaceChildren();
	
	console.log("adding jobs:");
	console.log(roles);
	for(i = 0; i < roles.length; ++i) {
		const role = roles[i];
		console.log(role);
		const newRole = document.createElement("div");
		newRole.className = "job_card";
		newRole.onclick = function() {window.location.href = "job1.html"};
		
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
		console.log('job added');
	}
	
});


function openJob(i)
{
	window.location.href = "job"+i+".html";
}