import React from 'react';
import Cookies from 'js-cookie';

import 'App.css' 
import Card from './SchuduleCard' 
import { wait } from '@testing-library/user-event/dist/utils';

function calendar(){
	const schudle  = Cookies.get("schudle")
	const monday = []
	const tuesday= []
	const wednesday= []
	const thursday= []
	const friday= []
	for (let i = 0; i < schudle.length; i++){
			
	}
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

