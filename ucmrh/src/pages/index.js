import React from 'react'

// import PreferredDay from '../components/preferred-day'; 
import CenterClassCard from '../components/center-class-card'; 
import Classes from "../components/pared.json"


import PreferredDay from '../components/preferred-day'; 
import TimeSelector from '../components/StartingTime';
import NewButton from '../components/newButton';

import ConfirmButton from "../components/generate"

import "./index.css"

export const index = () => {

	return (

		<div className="App">
			<div className='preferences'>
				<NewButton/>
				<PreferredDay/>
				<TimeSelector/>
			</div>
			<div className='center'>
				<CenterClassCard classes={Classes}/>
			</div>
			<div className='right'>
				<ConfirmButton/>

			</div>
		</div>
	)
}


export default index;
