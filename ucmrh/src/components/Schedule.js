import React from 'react';
import Cookies from 'js-cookie';

import './App.css' 

function calendar(){
	const schudle  = Cookies.get("schudle")
	const monday = [111,"abc"]
	const tuesday= ["test"]
	const wednesday= ["test 2","aaaaaaaaaaaa"]
	const thursday= ["hello"]
	const friday= []
	return(
		<div class = "box">
			<div>{monday}</div>	
			<div>{tuesday}</div>
			<div>{wednesday}</div>
			<div>{thursday}</div>
			<div>{friday}</div>
		</div>
	)
	
}

export default calendar;

