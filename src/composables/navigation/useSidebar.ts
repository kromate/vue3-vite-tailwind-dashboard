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
];





export const beforeEnter = (el: any) => {
	el.style.opacity = 0;
	el.style.transform = "translateX(-100px)";
};
export const enter = (el: any, done: any) => {
	gsap.to(el, {
		opacity: 1,
		x: 0,
		duration: 0.3,
		stagger: 0.1,
		onComplete: done,
		delay: el.dataset.index * 0.1,
	});
};