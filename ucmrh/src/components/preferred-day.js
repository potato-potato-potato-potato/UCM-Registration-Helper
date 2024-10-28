import "./App.css"
import {useState} from 'react'

export default function PreferredDay(){
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    const [checkedDays, setCheckedDays] = useState([])

    function handleSetDays(event){
        if (checkedDays.includes(event.target.name)){
            setCheckedDays((old) => (
                old.filter((item) => item !== event.target.name)
            ))
        } else {
            setCheckedDays((prevDays) => (
                [...prevDays, event.target.name]
            ))
        }
    }

    const renderDays = days.map((day) => (
        <div key={day} className="preferred-day-item">
            <div className="preferred-day-sub-container">
                <div className="preferred-day-icon">S
                    <p className="preferred-day-letter">{day[0]}</p>
                </div>
                <h3 className="preferred-day">{day}</h3>
            </div>
            <input onChange={handleSetDays} name={day} className="preferred-day-check-box" type="checkbox"></input>
        </div>
    ))

    return (
        <div className="preferred-day-container">
            {renderDays}
        </div>
    )
}