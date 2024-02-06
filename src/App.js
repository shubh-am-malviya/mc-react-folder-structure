import { useState } from "react";

import "./App.css";
import FolderStructure from "./components/FolderStructure";
import useTraverseTree from "./hooks/useTraverseTree";
import folderTree from "./utils/folderTree";

function App() {
	const [folderTreeData, setFolderTreeData] = useState(folderTree);

	const { insertNode } = useTraverseTree();

	const handleInsertTreeNode = (currentNodeId, newNodeName, isFolder) => {
		const newFolderTree = insertNode(folderTree, currentNodeId, newNodeName, isFolder);
		setFolderTreeData(newFolderTree);
	};

	return (
		<div className="app-container">
			<FolderStructure folderTree={folderTreeData} insertTreeNode={handleInsertTreeNode} />
		</div>
	);
}

export default App;
