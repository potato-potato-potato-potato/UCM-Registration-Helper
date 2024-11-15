import React from 'react'
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
				<div className='center'></div>
				<div className='right'>
				<ConfirmButton/>

			</div>
		</div>
	)
}


export default index;
