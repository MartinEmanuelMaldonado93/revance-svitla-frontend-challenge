export const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
export const dayNames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

// icons
export const happyIconSVG = `<svg class="status-icon icon-happy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
    <line x1="9" y1="9" x2="9.01" y2="9"></line>
    <line x1="15" y1="9" x2="15.01" y2="9"></line>
</svg>`;
export const neutralIconSVG = `<svg class="status-icon icon-neutral" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="8" y1="15" x2="16" y2="15"></line>
    <line x1="9" y1="9" x2="9.01" y2="9"></line>
    <line x1="15" y1="9" x2="15.01" y2="9"></line>
</svg>`;

// dummy data
export const tasksFromDB = [
	{ id: 1, text: "Buy new sweatshirt", completed: false },
	{ id: 2, text: "Read an article", completed: false },
	{ id: 3, text: "Write blog post", completed: true },
	{ id: 4, text: "Watch “Mr Robot”", completed: true },
	{ id: 5, text: "Run", completed: true },
];
