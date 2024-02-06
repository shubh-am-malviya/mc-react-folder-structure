const folderTree = {
	id: 0,
	name: "root",
	isFolder: true,
	children: [
		{
			id: 1,
			name: "src",
			isFolder: true,
			children: [
				{
					id: 4,
					name: "components",
					isFolder: true,
					children: [],
				},
				{
					id: 5,
					name: "App.js",
					isFolder: false,
					children: [],
				},
			],
		},
		{
			id: 2,
			name: "package.json",
			isFolder: false,
			children: [],
		},
		{
			id: 3,
			name: "README.md",
			isFolder: false,
			children: [],
		},
	],
};

export default folderTree;
