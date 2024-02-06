import React, { useState } from "react";

const FolderStructure = ({ folderTree, insertTreeNode }) => {
	const [folderExpanded, setFolderExpanded] = useState(false);
	const [inputOption, setInputOption] = useState({ show: false, inputType: null });

	const handleFolderOptionClick = (e, action) => {
		e.stopPropagation();
		if (action === "addFolder") {
			setInputOption({ show: true, inputType: "folder" });
		} else if (action === "addFile") {
			setInputOption({ show: true, inputType: "file" });
		}
	};

	const handleInputKeyDown = (e) => {
		if (e.keyCode === 13 && e.target.value) {
			insertTreeNode(folderTree.id, e.target.value, inputOption === "folder");
			setInputOption({ show: false, inputType: null });
			setFolderExpanded(true); // To show the newly added child folder
		}
	};

	if (folderTree.isFolder) {
		return (
			<div className="folder-str-container">
				<div
					className="folder-tree-node folder-node"
					onClick={() => setFolderExpanded(!folderExpanded)}
				>
					<span>
						{folderExpanded ? "📂" : "📁"} {folderTree.name}
					</span>
					<div className="folder-tree-options-container">
						<span
							className="folder-tree-option"
							onClick={(e) => handleFolderOptionClick(e, "addFolder")}
						>
							+ Folder
						</span>
						<span
							className="folder-tree-option"
							onClick={(e) => handleFolderOptionClick(e, "addFile")}
						>
							+ File
						</span>
					</div>
				</div>

				{folderExpanded &&
					folderTree.children?.map((folderTreeNode) => (
						<FolderStructure
							key={folderTreeNode.id}
							folderTree={folderTreeNode}
							insertTreeNode={insertTreeNode}
						/>
					))}

				{inputOption?.show && (
					<div className="folder-str-container">
						<span className="folder-tree-node">
							{inputOption?.inputType === "folder" ? "📂" : "📄"}
							<input
								type="text"
								autoFocus
								onBlur={() => setInputOption({ show: false, inputType: null })}
								onKeyDown={handleInputKeyDown}
							/>
						</span>
					</div>
				)}
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
