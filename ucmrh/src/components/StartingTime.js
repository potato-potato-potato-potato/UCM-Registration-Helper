import './App.css'

function TimeSelector() {
	return (
		<div id="timeSelectorContainer">
			<div className="time-input-container">
				<label htmlFor="startTime">Starting Time:</label>
				<input type="time" id="startTime" />
			</div>
			<div className="time-input-container">
				<label htmlFor="endTime">Ending Time:</label>
				<input type="time" id="endTime" />
			</div>
		</div>
	);
}

export default TimeSelector;
