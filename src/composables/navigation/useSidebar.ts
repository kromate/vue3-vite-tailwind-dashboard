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
                show: ref(false),
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
                icon: "las la-shopping-bag",
                hasSub: true,
                show: ref(false),
                subs: [
                    { name: "Customer Order", link: "/" },
                    { name: "Kitchen Order", link: "/" },
                    { name: "Counter Checkout", link: "/" },
                    { name: "Table Booking", link: "/" },
                    { name: "Menu Stock", link: "/" },
                ],
            },
            {
                name: "UI Kits",
                icon: "las la-gamepad",
                hasSub: true,
                show: ref(false),
                subs: [
                    { name: "Bootstrap", link: "/" },
                    { name: "Buttons", link: "/" },
                    { name: "Card", link: "/" },
                    { name: "Icons", link: "/" },
                    { name: "Modal & Notification", link: "/" },
                    { name: "Typography", link: "/" },
                    { name: "Tabs & Accordions", link: "/" },
                ],
            },
            {
                name: "Forms",
                icon: "las la-pen-alt",
                hasSub: true,
                show: ref(false),
                subs: [
                    { name: "Form Elements", link: "/" },
                    { name: "Form Plugins", link: "/" },
                    { name: "Wizards", link: "/" },
                ],
            },
            {
                name: "Tables",
                icon: "las la-table",
                hasSub: true,
                show: ref(false),
                subs: [
                    { name: "Table Elements", link: "/" },
                    { name: "Table Plugins", link: "/" },
                ],
            },
            {
                name: "Charts",
                icon: "las la-chart-pie",
                hasSub: true,
                show: ref(false),
                subs: [
                    { name: "Chart.js", link: "/" },
                    { name: "Apexcharts.js", link: "/" },
                ],
            },
            {
                name: "Map",
                icon: "las la-compass",
                link: "/"
            },
            {
                name: "Layout",
                icon: "las la-layer-group",
                hasSub: true,
                show: ref(false),
                subs: [
                    { name: "Starter Page", link: "/" },
                    { name: "Fixed Footer", link: "/" },
                    { name: "Full Height", link: "/" },
                    { name: "Full Width", link: "/" },
                    { name: "Boxed Layout", link: "/" },
                    { name: "Collapsed Sidebar", link: "/" },

                ],
            },
            {
                name: "Pages",
                icon: "las la-file",
                hasSub: true,
                show: ref(false),
                subs: [
                    { name: "Scrum Board", link: "/" },
                    { name: "Products", link: "/" },
                    { name: "Orders", link: "/" },
                    { name: "Gallery", link: "/" },
                    { name: "Search Results", link: "/" },
                    { name: "Coming Soon Page", link: "/" },
                    { name: "404 Error Page", link: "/" },
                    { name: "Login", link: "/" },
                    { name: "Register", link: "/" },
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