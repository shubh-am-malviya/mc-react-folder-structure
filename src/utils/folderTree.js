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
					children: null,
				},
				{
					id: 5,
					name: "App.js",
					isFolder: false,
					children: null,
				},
			],
		},
		{
			id: 2,
			name: "package.json",
			isFolder: false,
			children: null,
		},
		{
			id: 3,
			name: "README.md",
			isFolder: false,
			children: null,
		},
	],
};

export default folderTree;
