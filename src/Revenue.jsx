import React, { useRef, useEffect, useState } from 'react';
import PieChartClass from "./PieChartClass.jsx";
import PieChartFunctional from "./PieChartFunctional.jsx"
import EntryBox from "./EntryBox.jsx"
import './App.css';
import "./App.jsx";
import ReactTooltip from "react-tooltip";

var total = 0;
var totalString = "Total % 0%";

function Revenue(props) {

  let RevenueData = [
    { name: 'Medical Center', value: 0, color: '#f0bf00' },
    { name: 'Student Fees', value: 0, color: '#f6e50e' },
    { name: 'State of California', value: 0, color: '#fff688' },
    { name: 'Tuition', value: 0, color: '#5f63ec' },
    { name: 'Research Grants', value: 0, color: '#71a8ff' },
    { name: 'Pell Grants', value: 0, color: '#0f7ab4' },
    { name: 'Non-Educational', value: 0, color: '#d4e4ff' },
    { name: 'Gifts and Endowments', value: 0, color: '#e3a400' }
  ];

  const [RevenuePieData, setRevenuePieData] = useState(RevenueData);

  const setGlobalData = props.callback;

  function resetRPie(callingEntry, valueID) {
    console.log("Called by " + valueID + ", sent " + callingEntry.value + "Total= " + total)

    var newData = [...RevenuePieData]; 
    var oldValue = newData[valueID].value;
    

    if (callingEntry.value == "")
    {
      newValue = 0;
    }
    else {
      var newValue = parseInt(callingEntry.value);
    }

    if (newValue <= 0) {
      newValue = 0;
      callingEntry.value = "";
    }

    if (oldValue != newValue)
    {
      total -= oldValue;
    }

    if ((total + newValue) > 100) {
      newValue = 100 - total;
      callingEntry.value = newValue;
    }

    total = total + newValue;
    if (total == 0) {
      var totalTally = "Total: 0%";
    }
    else {
      var totalTally = "Total: " + total + "%";
    }

    totalString = totalTally;
    
    newData[valueID].value = newValue;
    setRevenuePieData(newData);
    setGlobalData(newData);
  }

  function changeDisplay() {
    let display;
    if (props.progress===50||props.progress === 100 || props.progress === 150) {
      display = {
        display: 'none'
      }
      return display
    }
  }

  return (
    <div className='revenue-container' style={changeDisplay()}>
      <h1>UC Davis Revenues</h1>
      <PieChartFunctional name="pie1" data={RevenuePieData} />
      <div>
        <p>Function</p>
        <p>Percentage (%)</p>
      </div>
      
      <EntryBox value='revenue' name='zero' title="Medical Center" callback={resetRPie} id="0"/>
      <EntryBox value='revenue' name='one' title="Student Fees" callback={resetRPie} id="1"/>
      <EntryBox value='revenue' name='two' title="State of California" callback={resetRPie} id="2"/>
      <EntryBox value='revenue' name='three' title="Tuition" callback={resetRPie} id="3"/>
      <EntryBox value='revenue' name='four' title="Research Grants and Contracts" callback={resetRPie} id="4"/>
      <EntryBox value='revenue' name='five' title="Pell Grants" callback={resetRPie} id="5"/>
      <EntryBox value='revenue' name='six' title="Non-Educational Services" callback={resetRPie} id="6"/>
      <EntryBox value='revenue' name='seven' title="Gifts, Endowments, Interest, etc" callback={resetRPie} id="7"/>

      <p id="total">{totalString}</p>

    </div>
    
    
    );
  
}

export default Revenue;