import React, { useState } from "react";

const FolderStructure = ({ folderTree }) => {
	const [folderExpanded, setFolderExpanded] = useState(false);

	if (folderTree.isFolder) {
		return (
			<div className="folder-str-container">
				<div
					className="folder-tree-node folder-node"
					onClick={() => setFolderExpanded(!folderExpanded)}
				>
					{folderExpanded ? "📂" : "📁"} {folderTree.name}
				</div>
				{folderExpanded &&
					folderTree.children?.map((folderTreeNode) => (
						<FolderStructure folderTree={folderTreeNode} />
					))}
			</div>
		);
	}

	if (!folderTree.isFolder) {
		return (
			<div className="folder-str-container ">
				<div className="folder-tree-node">📄 {folderTree.name}</div>
			</div>
		);
	}
};

export default FolderStructure;
