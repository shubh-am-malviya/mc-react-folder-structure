const useTraverseTree = () => {
	// Add a file or folder in tree
	// Can be optimised using Dynamic Programming
	const insertNode = function (tree, folderId, itemName, isFolder) {
		if (tree.id === folderId && tree.isFolder) {
			tree.children.unshift({
				id: new Date().getTime(),
				name: itemName,
				isFolder: isFolder,
				children: [],
			});

			return tree;
		}

		let latestNode = [];
		latestNode = tree.children?.map((ob) => {
			return insertNode(ob, folderId, itemName, isFolder);
		});

		return { ...tree, children: latestNode };
	};

	const deleteNode = () => {}; // Do it Yourself

	const renameNode = () => {}; // Do it Yourself

	return { insertNode, deleteNode, renameNode };
};

export default useTraverseTree;
