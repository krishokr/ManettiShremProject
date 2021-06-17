import React, { useRef, useEffect, useState } from 'react';
import PieChartClass from "./PieChartClass.jsx";
import PieChartFunctional from "./PieChartFunctional.jsx"
import EntryBox from "./EntryBox.jsx"
import Expend from "./Expend.jsx"
//import Revenue from "./Revenue.jsx"
import './App.css';
import "./App.jsx";


function CompareRevenue(props) {

  const RData = props.revenue;

  let correctRevenue = [ 
    { name: 'Medical Center', value: 45, color: '#f0bf00' },
    { name: 'Student Fees', value: 4, color: '#f6e50e' },
    { name: 'State of California', value: 8, color: '#fff688' },
    { name: 'Tuition', value: 11, color: '#5f63ec' },
    { name: 'Research Grants', value: 13, color: '#71a8ff' },
    { name: 'Pell Grants', value: 1, color: '#0f7ab4' },
    { name: 'Non-Educational', value: 11, color: '#d4e4ff' },
    { name: 'Gifts and Endowments', value: 7, color: '#e3a400' }
  ];

  function changeDisplay() {
    let display;
    if (props.progress === 100) {
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
      <h2>Your Revenue Guess</h2>
      <PieChartFunctional name="YourRPie" data={RData} />
      <h2>Actual Revenue</h2>
      <PieChartFunctional name="TheirRPie" data={correctRevenue} />

    </div>
  )
}

export default CompareRevenue;