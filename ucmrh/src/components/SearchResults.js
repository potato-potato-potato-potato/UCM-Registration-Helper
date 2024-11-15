function SearchResult({k,v}){
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

				<div className="shapes-logo-container">
					<img className="shapes-logo" src="https://www.svgrepo.com/show/415636/basic-shape-ui.svg" alt="shapes logo"></img>
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

export default SearchResult;
