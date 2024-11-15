import React, { useState, useEffect } from 'react'

// import PreferredDay from '../components/preferred-day'; 
import CenterClassCard from '../components/center-class-card'; 
import Classes from "../components/pared.json"
import SideClassCard from "../components/side-class-card"


import PreferredDay from '../components/preferred-day'; 
import TimeSelector from '../components/StartingTime';
import NewButton from '../components/newButton';


import ConfirmButton from "../components/generate"

import "./index.css"

export const Index = () => {
	const [numberOfCookies, setNumberOfCookies] = useState(0);

	return (

		<div className="App">
			<div className='preferences'>
				<NewButton/>
				<PreferredDay/>
				<TimeSelector/>
			</div>
			<div className='center'>
				<CenterClassCard classes={Classes} newCookie={() => setNumberOfCookies(prev => prev+1)}/>
			</div>
			<div className='right'>
				<ConfirmButton/>
				<SideClassCard moniterCookies={numberOfCookies}/>
			</div>
			<div>

			</div>
		</div>
	)
}


export default Index;
