import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	git,
	figma,
	docker,
	carrent,
	jobit,
	tripguide,
	threejs,
	upwork,
	teo,
	outsource,
	mui,
	live,
	alphago,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "ReactJs developer",
		icon: web,
	},
	{
		title: "HTML | CSS | JS Developer",
		icon: mobile,
	},
	{
		title: "Awosome Animations",
		icon: backend,
	},
	{
		title: "Mobile Resposnive",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "material UI",
		icon: mui,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},

	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "React.js Developer",
		company_name: "TEO Internationls",
		icon: teo,
		iconBg: "#383E56",
		date: "FEB 2023 - JUL 2023",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Hml Css&JS developer",
		company_name: "freelance/Upwork",
		icon: upwork,
		iconBg: "#E6DEDD",
		date: "Jan 2023 - Now",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "frontend Web Developer",
		company_name: "Outsourced..",
		icon: outsource,
		iconBg: "#383E56",
		date: "Nil - Nil",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

const testimonials = [
	{
		testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Apex Car Rental",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "materialUI",
				color: "green-text-gradient",
			},
			{
				name: "framer Motion",
				color: "pink-text-gradient",
			},
		],
		image: carrent,
		source_code_link: "https://home-car-rent.web.app/",
	},

	{
		name: "D-max digital Agency",
		description: "it is a simple digital agency website  clone doing just basic tasks every digital agency do",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "MaterialUI",
				color: "green-text-gradient",
			},
			{
				name: "FramerMotion",
				color: "pink-text-gradient",
			},
		],
		image: jobit,
		source_code_link: "https://d-max-fe73c.web.app/",
	},
	{
		name: "Alpha trade digital currency",
		description:
			" It is a crypto website made using techs like simple  html css and Js. This was a project from out-sourced client I have to make a website having just static data to showcase.",
		tags: [
			{
				name: "html5",
				color: "blue-text-gradient",
			},
			{
				name: "css ",
				color: "green-text-gradient",
			},
			{
				name: "JavaScript",
				color: "pink-text-gradient",
			},
		],
		image: alphago,
		source_code_link: "https://github.com/S-h-a-m-i-r/Alphago",
	},
	{
		name: "Employee Appraisal System",
		description:
			"The proposed appraisal system adopts a multi-dimensional approach, considering not only the quantitative metrics but also qualitative aspects of employee performance. It incorporates a range of evaluation criteria. Moreover, the system emphasizes continuous feedback and development, aiming to foster a growth-oriented culture within the organization",
		tags: [
			{
				name: "RecactJs",
				color: "blue-text-gradient",
			},
			{
				name: "nextjs",
				color: "green-text-gradient",
			},
			{
				name: "MaterialUI",
				color: "blue-text-gradient",
			},
			{
				name: "TypeScript",
				color: "pink-text-gradient",
			},
			{
				name: "Redux ToolKit",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/S-h-a-m-i-r/Projects",
	},
];

export { services, technologies, experiences, testimonials, projects };
