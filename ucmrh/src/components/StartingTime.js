import './App.css'

function TimeSelector(){
	return(
		<div id='timeSelectorContainer'>
			<label>starting time</label>
			<input  type={'time'}/>
			<label>ending time</label>
			<input type={"time"}/>
		</div>
	)
}

export default TimeSelector;
