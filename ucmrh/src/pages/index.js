import React from 'react'
// import PreferredDay from '../components/preferred-day'; 
import CenterClassCard from '../components/center-class-card'; 
import Classes from "../components/pared.json"

export const index = () => {

  return (
    <>
      {/* <PreferredDay /> */}

      <CenterClassCard classes={Classes}/>
      
      {/* <div className="App">
         <header className="App-header">
          
           <p>
             Edit <code>src/App.js</code> and save to reload.
           </p>
           <a
             className="App-link"
             href="https://reactjs.org/"
             target="_blank"
             rel="noopener noreferrer"
           >
             Learn React
           </a>
         </header>
      </div> */}
    </>
    
  )
}


export default index;
