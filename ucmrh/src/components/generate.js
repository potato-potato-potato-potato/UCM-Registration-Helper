import './App.css'
import alg from '../../../algorithm/makeSchedule.mjs'
function Create(){
	let gen = alg.solve([[],[]]);
}

function SubmitButton(){
	return(
	<button>confirm courses</button>
	)
}
export default SubmitButton;
