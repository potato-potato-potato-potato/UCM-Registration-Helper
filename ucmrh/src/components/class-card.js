import "./App.css"

export default function ClassCards( {classes} ){

    const classElements = classes.map((c) => (
        <>
            <div className="class-container">

                <di className="sub-class-container">
                    <div className="preferred-day-icon">S
                        <p className="preferred-day-letter">{c.header[0]+ c.header[1]}</p>
                    </div>
                    <div>
                        <h3 className="class-header">{c.header}</h3>
                        <p className="class-sub-header">{c.subHeader}</p>
                    </div>
                </di>
                
                <div className="shapes-logo-container">
                    <img className="shapes-logo" src="https://www.svgrepo.com/show/415636/basic-shape-ui.svg" alt="shapes logo"></img>
                </div>

            </div>
        </>
    ))

    return (
        <div className="selected-courses-container">
            <div className="selected-courses-title-container">
                <h2 className="selected-courses-title">Selected Courses</h2>
            </div>
            {classElements}
        </div>
    )
}