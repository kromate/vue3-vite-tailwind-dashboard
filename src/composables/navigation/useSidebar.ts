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
				subs: [
					{ name: "Inbox", link: "/" },
					{ name: "Compose", link: "/" },
					{ name: "Detail", link: "/" },
				],
			},
		],
	},
];