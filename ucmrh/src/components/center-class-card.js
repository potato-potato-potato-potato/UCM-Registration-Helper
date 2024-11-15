import "./App.css"
import { useEffect, useState } from 'react'

export default function CenterClassCard( {classes} ){
    
    const [allClasses, setAllClasses] = useState([]);

    useEffect(() => {
        // here we create take all the data in json and convert it into
        // individual classes with the form {subject, name, crn}
        // then we put all those classes in a state variable

        const newClasses = [];

        // Ik, tripple nested loops?! Sorry, couldn't get .map to work for nested objects and arrays (or atleast im too lazy)
        for (const i in classes){  
            for (const classNumber in classes[i]){
                for (const crn in classes[i][classNumber]){
                    const newClass = {subject: `${i}`, number: `${classNumber}`, crn: `${classes[i][classNumber][crn]}`}
                    newClasses.push(newClass);
                }
            }
        }

        setAllClasses(newClasses);
    }, [])
    

    let classElements = []

    if (!allClasses) {
        return;
    } else {
        classElements = allClasses.map((c) => (
            <div key={c.crn} className="class-card-container center-wide">
                    
                <div className="sub-class-card-container">
                    <div className="circle-icon">S
                        <p className="circle-icon-letter">{c.subject[0] + c.subject[1]}</p>
                    </div>
                    <div>
                        <h3 className="class-card-header">{c.subject + " " + c.number}</h3>
                        <p className="class-card-sub-header">{c.crn}</p>
                    </div>
                </div>
                
                <div className="shapes-logo-container">
                    <img className="shapes-logo" src="https://www.svgrepo.com/show/415636/basic-shape-ui.svg" alt="shapes logo"></img>
                </div>
            </div>
        ))
    }

    return (
        <>
            <div className="center-class-card-and-search-container">
                <div className="search-parent">
                    <div>
                        <input type="search" className="search-bar" placeholder="CSE 024"></input>
                    </div>
                    <button className="search-icon-container">
                        <img className="search-icon" alt="search icon" src="https://endlessicons.com/wp-content/uploads/2015/08/search-icon-2-614x460.png"></img>
                    </button>
                </div>
                <div className="center-class-cards-container">
                    {classElements}
                </div>
            </div>
        </>
        
    )
}