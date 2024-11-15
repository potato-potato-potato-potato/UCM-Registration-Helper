import "./App.css"
import { useEffect, useState } from 'react'
import SearchResult from "./SearchResults";

export default function CenterClassCard( {classes} ){

	const [allClassesCrn, setAllClassesCrn] = useState([]);
	const [allClassesName, setAllClassesName] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		// here we create take all the data in json and convert it into
		// individual classes with the form {subject, name, crn}
		// then we put all those classes in a state variable

		// made some changes now there is 2 maps crn map and name map
		// the crn map has the crn as KEY and the name and course number as the value 
		// the name map has the name and course as KEY and crn as the value
		// the goal of this is that users can search with the crn and the course name
		// while the CRN select a strict course the name sleects all CRN of that course for the course generator to sort

		// CRN map
		const newClassesCrn = new Map();
		const newClassesName = new Map();

		// Ik, tripple nested loops?! Sorry, couldn't get .map to work for nested objects and arrays (or atleast im too lazy)
		// is is probly a bad way to do this but is 5 am and i'm tired
		for (const i in classes){  
			for (const classNumber in classes[i]){
				const courseKey = `${i} ${classNumber}`;
				const newCourse= {subject: `${i}`, number: `${classNumber}`, crn: classes[i][classNumber]}
				newClassesName.set(courseKey, newCourse)
				for (const crn in classes[i][classNumber]){
					const newClass = {subject: `${i}`, number: `${classNumber}`, crn: `${classes[i][classNumber][crn]}`}
					newClassesCrn.set(classes[i][classNumber][crn], newClass)
				}
			}
		}

		setAllClassesCrn(newClassesCrn);
		setAllClassesName(newClassesName);


	}, [])
	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};
	const allClasses = [...allClassesCrn.entries(), ...allClassesName.entries()];
	const filteredResults = []
	const re = new RegExp(searchTerm, "i"); 
	//added a limit of 20 here bc is slow on first char
	let searchLimit = 0;
	for(const [key,value] of allClasses){
		if(searchLimit > 20){
			break;
		}
		if(re.test(key)){
			searchLimit += 1;
			filteredResults.push(<SearchResult k={key} v={value}/>);
		}

	}

    



	return (
		<>
			<div className="center-class-card-and-search-container">
				<div className="search-parent">
					<div>
						<input type="search" className="search-bar" placeholder="CSE 024" onInput={handleSearch} value={searchTerm} id = "search-bar"></input>
					</div>
					<button className="search-icon-container">
						<img className="search-icon" alt="search icon" src="https://endlessicons.com/wp-content/uploads/2015/08/search-icon-2-614x460.png"></img>
					</button>
				</div>
				<div className="center-class-cards-container">
					{filteredResults}
				</div>
			</div>
		</>

	)
}
