import Cookies from "js-cookie"


function SearchResult({k,v, newCookie}){

	if(typeof k === "number"){
		return(
			<div key={v.crn} className="class-card-container center-wide">

				<div className="sub-class-card-container">
					<div className="circle-icon">S
						<p className="circle-icon-letter">{v.subject[0] + v.subject[1]}</p>
					</div>
					<div>
						<h3 className="class-card-header">{v.subject + " " + v.number}</h3>
						<p className="class-card-sub-header">{v.crn}</p>
					</div>
				</div>

				<div  className="add-and-img">
					<button className="add-button" onClick={() => {

						addCookie(`addClass-${v.crn}`, {subject: v.subject, number: v.number, crn: v.crn});
						newCookie()

						}}>Add +</button>

					<div className="shapes-logo-container">
						<img className="shapes-logo" src="https://www.svgrepo.com/show/415636/basic-shape-ui.svg" alt="shapes logo"></img>
					</div>
				</div>
			</div>
		)

	}else{
		return(
			<div key={v.crn} className="class-card-container center-wide">

				<div className="sub-class-card-container">
					<div className="circle-icon">S
						<p className="circle-icon-letter">{v.subject[0] + v.subject[1]}</p>
					</div>
					<div>
						<h3 className="class-card-header">{v.subject + " " + v.number}</h3>
						<p className="class-card-sub-header">All {v.subject + " " + v.number}</p>
					</div>
				</div>

				<div className="shapes-logo-container">
					<img className="shapes-logo" src="https://www.svgrepo.com/show/415636/basic-shape-ui.svg" alt="shapes logo"></img>
				</div>
			</div>

		)

	}
}

const addCookie = (name, value) => {
	Cookies.set(name, value);
}


export default SearchResult;
