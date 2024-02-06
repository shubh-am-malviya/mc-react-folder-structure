import "./App.css";
import FolderStructure from "./components/FolderStructure";
import folderTree from "./utils/folderTree";

function App() {
	return (
		<div className="app-container">
			<FolderStructure folderTree={folderTree} />
		</div>
	);
}

export default App;
