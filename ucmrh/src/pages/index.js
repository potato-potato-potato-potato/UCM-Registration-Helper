import React from 'react'
import PreferredDay from '../components/preferred-day'; 
import TimeSelector from '../components/StartingTime';
import "./index.css"
export const index = () => {
  return (
		<div className="App">
				<div className='preferences'>
					<PreferredDay/>
					<TimeSelector/>
				</div>
				<div className='center'></div>
				<div className='right'></div>
		</div>
	)
}


export default index;
