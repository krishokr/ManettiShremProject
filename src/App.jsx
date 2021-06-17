
import React, { useRef, useEffect, useState } from 'react';
import MyD3Component from "./MyD3Component.jsx";
import './App.css';
import ProgressBar from './ProgressBar.jsx';
import PieChartClass from "./PieChartClass.jsx";
import PieChartFunctional from "./PieChartFunctional.jsx"
import Revenue from "./Revenue.jsx"
import Expend from "./Expend.jsx"
import CompareExpenditure from "./CompareExpenditure.jsx";
import CompareRevenue from "./CompareRevenue.jsx"
import ReactTooltip from "react-tooltip";

/* App */
function App() {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('Next')
  
  function display() {
    let style;
    if (progress === 50) {
      style = {
        display: 'inline'
      }
    }
    return style
  }
  function previousHandler() {
    setProgress(0)
  }
  function changeStyle() {
    let style;
    if (progress === 50) {
      style = {
        background: '#71A8FF'
      }
    } 
    return style
  }
   function handleBtn() {
     console.log('-----------PROGRESS-------' + progress)
     if (progress <150) {
      setProgress(progress+50)
    } else if (progress === 150) {
      setProgress(0)
    }
    
    //change text
    if (progress === 0) {
      
      setText('Compare')
      
    } else if (progress === 50 || progress === 150) {
      setText('Next')
    } else if (progress === 100) {
      setText('Restart')
    }
    console.log("This is progress " + progress);
  }

  let RevenueData = [ 
  { name: "Medical Center", value: 0 }, 
  { name: "Student Fees", value: 0 }, 
  { name: "State of California", value: 0 }, 
  { name: "Tuition", value: 0 }, 
  { name: "Research Grants and Contracts", value: 0 }, 
  { name: "Pell Grants", value: 0 }, 
  { name: "Non-educational Services", value: 0 }, 
  { name: "Gifts, Endowments, Interest, Etc.", value: 0 } ]

  let ExpendData = [ 
    { name: "Medical Center", value: 0 }, 
    { name: "Teaching and Teaching Support", value: 0 }, 
    { name: "Research", value: 0 }, 
    { name: "Student Services and Financial Aid", value: 0 }, 
    { name: "Operations and Maintenance (Buildings, etc)", value: 0 }, 
    { name: "Administration", value: 0 }, 
    { name: "Non-Educational Services", value: 0 }, 
    { name: "Public Service", value: 0 }, 
    { name: "Depreciation, Interest, etc.", value: 0 } ]

  const [FinalRevenuePie, setFinalRevenuePie] = useState(RevenueData);
  const [FinalExpendPie, setFinalExpendPie] = useState(ExpendData);

  function setRevenueData(RData) {
    console.log("Setting the global revenue data!")
    setFinalRevenuePie(RData);
  }

  function setExpendData(EData) {
    setFinalExpendPie(EData);
  }

    return (
      <div className='largeContainer'>
        <div className='header'>
          <h1>Slice the Pie</h1>
          <p>Say you got to run a university. How much would you allocate to different sectors? Learn about your funding sources with a guessing game.</p>
          <p>You make your choices by inputting percentages of each section of a pie chart. See how well your choices match next to the real choices made by the Provost.</p>
        </div>
    
        <ProgressBar progress={progress}/>

        <Revenue progress={progress} name="test" callback={setRevenueData}/>
        <Expend progress={progress} callback={setExpendData}/>
        <CompareRevenue progress={progress} revenue={FinalRevenuePie}/>
        <CompareExpenditure progress={progress}  expend={FinalExpendPie}/>
        
        <div className='buttonContainer'>
          <button className='mainButton' onClick={()=> handleBtn()} style={changeStyle()}>{text}</button>
          <button className='previousButton' onClick={()=> previousHandler()} style={display()}>Previous</button>
        </div>

      </div>
    )
}

export default App;