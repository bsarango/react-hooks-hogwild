import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList"
import HogFilter from "./HogFilter"
import HogSort from "./HogSort"

import hogs from "../porkers_data";

function App() {
	const [hogList,setHogList] = useState(hogs)

	return (
		<div className="App">
			<Nav />
			<HogList hogList={hogList}/>
			<HogFilter hogList={hogList} setHogList={setHogList}/>
			<HogSort hogList={hogList} setHogList={setHogList}/>
		</div>
	);
}

export default App;
