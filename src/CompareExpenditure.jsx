import React, { useRef, useEffect, useState } from 'react';
import PieChartClass from "./PieChartClass.jsx";
import PieChartFunctional from "./PieChartFunctional.jsx"
import EntryBox from "./EntryBox.jsx"
import Expend from "./Expend.jsx"
import './App.css';
import "./App.jsx";


function CompareExpenditure(props) {

  const EData = props.expend;

  let correctExpend = [ 
    { name: "Medical Center", value: 43, color: '#f0bf00' },
    { name: "Teaching and Teaching Support", value: 23, color: '#f6e50e' },
    { name: "Research", value: 11, color: '#fff688' },
    { name: "Student Services and Financial Aid", value: 8, color: '#5f63ec' },
    { name: "Operations and Maintenance (Buildings, etc)", value: 2, color: '#71a8ff' },
    { name: "Administration", value: 3, color: '#0f7ab4' },
    { name: "Non-Educational Services", value: 2, color: '#d4e4ff' },
    { name: "Public Service", value: 2, color: '#e3a400' },
    { name: "Depreciation, Interest, etc.", value: 6, color: '#ffffff' }
  ];

  function changeDisplay() {
    let display;
    if (props.progress === 150) {
      console.log("in DISPLAY in revenue")
      display = {
        display: 'flex'
      }
      return display
    }
  }
  return(
    <div className='compareContainer' style={changeDisplay()}>
      <h1>RESULTS</h1>
      <h2>Your Expenditure Guess</h2>
      <PieChartFunctional name="YourEPie" data={EData} />
      <h2>Actual Expenditures</h2>
      <PieChartFunctional name="TheirEPie" data={correctExpend} />

    </div>
  )
}

export default CompareExpenditure;