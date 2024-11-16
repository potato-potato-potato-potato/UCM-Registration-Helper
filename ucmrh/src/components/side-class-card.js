import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import "./App.css"

export default function ClassCards( {moniterCookies} ){
    const [allCookies, setAllCookies] = useState([]);

    useEffect(() => {
        setAllCookies(document.cookie.split("; "))
    }, [moniterCookies])

    const selectedClasses = allCookies.filter(item => item.startsWith("addClass"))

    // const selectedClasses = classes.map((c) => (
    //     <div className="class-card-container side-narrow">

    //         <div className="sub-class-card-container">
    //             <div className="circle-icon">S
    //                 <p className="circle-icon-letter">{c.header[0]+ c.header[1]}</p>
    //             </div>
    //             <div>
    //                 <h3 className="class-card-header">{c.header}</h3>
    //                 <p className="class-card-sub-header">{c.subHeader}</p>
    //             </div>
    //         </div>
            
    //         <div className="shapes-logo-container">
    //             <img className="shapes-logo" src="https://www.svgrepo.com/show/415636/basic-shape-ui.svg" alt="shapes logo"></img>
    //         </div>

    //     </div>
    // ))

    return (
        <div className="selected-courses-container">
            <div className="selected-courses-title-container">
                <h2 className="selected-courses-title">Selected Courses</h2>
            </div>
            {/* {selectedClasses} */}
        </div>
    )
}
