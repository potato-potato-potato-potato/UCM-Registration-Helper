import "./App.css"

export default function CenterClassCard( {classes} ){

    const classElements = classes.map((c) => (
        <div className="class-card-container center-wide">
                
            <div className="sub-class-card-container">
                <div className="circle-icon">S
                    <p className="circle-icon-letter">{c.header[0]+ c.header[1]}</p>
                </div>
                <div>
                    <h3 className="class-card-header">{c.header}</h3>
                    <p className="class-card-sub-header">{c.subHeader}</p>
                </div>
            </div>
            
            <div className="shapes-logo-container">
                <img className="shapes-logo" src="https://www.svgrepo.com/show/415636/basic-shape-ui.svg" alt="shapes logo"></img>
            </div>
        </div>
    ))

    return (
        <div className="center-class-cards-container">
            {classElements}
        </div>
    )
}