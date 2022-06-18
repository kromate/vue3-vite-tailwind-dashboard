import { ref } from 'vue';
import { gsap } from "gsap";


export const MenuList = [
	{
		name: "Navigation",
		subs: [
			{ name: "Dashboard", icon: "las la-microchip", link: "/" },
			{ name: "Analytics", icon: "las la-chart-bar", link: "/" },
			{
				name: "Email",
				icon: "las la-envelope",
                hasSub: true,
                show:ref(false),
				subs: [
					{ name: "Inbox", link: "/" },
					{ name: "Compose", link: "/" },
					{ name: "Detail", link: "/" },
				],
			},
		],
	},
	{
		name: "Components",
		subs: [
			{ name: "Widget", icon: "las la-columns", link: "/" },
			{
				name: "POS System", 
				icon:"las la-shopping-bag",
                hasSub: true,
                show:ref(false),
				subs: [
					{ name: "Inbox", link: "/" },
				],
			},
			{
				name: "UI Kits", 
				icon:"las la-gamepad",
                hasSub: true,
                show:ref(false),
				subs: [
					{ name: "Inbox", link: "/" },
				],
			},
			{
				name: "Forms", 
				icon:"las la-pen-alt",
                hasSub: true,
                show:ref(false),
				subs: [
					{ name: "Inbox", link: "/" },
				],
			},
			{
				name: "Tables", 
				icon:"las la-table",
                hasSub: true,
                show:ref(false),
				subs: [
					{ name: "Inbox", link: "/" },
				],
			},
			{
				name: "Charts", 
				icon:"las la-chart-pie",
                hasSub: true,
                show:ref(false),
				subs: [
					{ name: "Inbox", link: "/" },
				],
			},
			{
				name: "Map", 
				icon:"las la-compass",
                hasSub: true,
                show:ref(false),
				subs: [
					{ name: "Inbox", link: "/" },
				],
			},
			{
				name: "Layout", 
				icon:"las la-layer-group",
                hasSub: true,
                show:ref(false),
				subs: [
					{ name: "Inbox", link: "/" },
				],
			},
			{
				name: "Pages", 
				icon:"las la-file",
                hasSub: true,
                show:ref(false),
				subs: [
					{ name: "Inbox", link: "/" },
				],
			},
		],
	},
	{
		name: "Users",
		subs: [
			{ name: "Profile", icon: "las la-user-friends", link: "/" },
			{ name: "Calendar", icon: "las la-calendar", link: "/" },
			{ name: "Settings", icon: "las la-cog", link: "/" },
			{ name: "Helpers", icon: "las la-gem", link: "/" },
		
		],
	},
];





export const beforeEnter = (el: any) => {
	el.style.opacity = 0;
	el.style.transform = "translateX(-100px)";
};
export const enter = (el: any, done: any) => {
	gsap.to(el, {
		opacity: 1,
		x: 0,
		duration: 0.2,
		onComplete: done,
		delay: el.dataset.index * 0.1,
	});
};