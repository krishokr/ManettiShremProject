import React, { useRef, useEffect, useState } from 'react';
import PieChartClass from "./PieChartClass.jsx";
import PieChartFunctional from "./PieChartFunctional.jsx"
import EntryBox from "./EntryBox.jsx"
import './App.css';

var total = 0;
var totalString = "Total: 0%";

function Expend(props) {

  let ExpendData = [
    { name: 'Medical Center', value: 0, color: '#f0bf00' },
    { name: 'Teaching and Teaching Support', value: 0, color: '#f6e50e' },
    { name: 'Research', value: 0, color: '#fff688' },
    { name: 'Student Services and Financial Aid', value: 0, color: '#5f63ec' },
    { name: 'Operations and Maintenance', value: 0, color: '#71a8ff' },
    { name: 'Administration', value: 0, color: '#0f7ab4' },
    { name: 'Services', value: 0, color: '#d4e4ff' },
    { name: 'Public Service', value: 0, color: '#e3a400' },
    { name: 'Depreciation, Interest, etc.', value: 0, color: '#ffffff' }
  ];

  const [ExpendPieData, setExpendPieData] = useState(ExpendData);

  const setGlobalData = props.callback;

  function resetEPie(callingEntry, valueID) {
    console.log("Called by " + valueID + ", sent " + callingEntry.value + "Total= " + total)

    var newData = [...ExpendPieData]; 
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
    setExpendPieData(newData);
    setGlobalData(newData);
  }

  
  function changeDisplay() {
    let display;
    if (props.progress === 50) {
      console.log("in DISPLAY")
      display = {
        display: 'flex'
      }
      return display
    }
  }


  return (
    <div className='expend-container' style={changeDisplay()}>
      <h1>UC Davis Expenditures</h1>
      <PieChartFunctional name="pie2" data={ExpendPieData} />
      <div>
        <p>Function</p>
        <p>Percentage (%)</p>
      </div>
      <EntryBox value='expend'name='zero' title="Medical Center" callback={resetEPie} id="0"/>
      <EntryBox value='expend'name='one' title="Teaching and Teaching Support" callback={resetEPie} id="1"/>
      <EntryBox value='expend'name='two' title="Research" callback={resetEPie} id="2"/>
      <EntryBox value='expend'name='three' title="Student Services and Financial Aid" callback={resetEPie} id="3"/>
      <EntryBox value='expend'name='four' title="Operations and Maintenance" callback={resetEPie} id="4"/>
      <EntryBox value='expend'name='five' title="Administration" callback={resetEPie} id="5"/>
      <EntryBox value='expend'name='six' title="Services" callback={resetEPie} id="6"/>
      <EntryBox value='expend'name='seven' title="Public Service" callback={resetEPie} id="7"/>
      <EntryBox value='expend'name='eight' title="Depreciation, Interest, etc." callback={resetEPie} id="8"/>

      <p id="total">{totalString}</p>

    </div>
    
    
    );
  
}

export default Expend;