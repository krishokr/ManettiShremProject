import React, { useState } from 'react';
import './App.jsx';

export default function ProgressBar(props) {

  function fillerBar() {
    let fillerStyle;

    if (props.progress === 50) {
      fillerStyle = {
        width: `35%`,
      }
    } else if (props.progress === 100 || props.progress === 150) {
      fillerStyle = {
        width: '70%'
      } 
    }/*else if (props.progress  150) {
        fillerStyle = {
          width: '35%'
        }
    }*/
    
    return fillerStyle;
  }

  function fillCircleTwo() {
    let circleStyle;
    if (props.progress >= 50) {
      circleStyle = {
          background: '#71A8FF',
          border: '#71A8FF'
      }
    }
    
    return circleStyle
  }
  function fillCircleThree() {
    let circleStyle;
    if (props.progress >= 100) {
      circleStyle = {
          background: '#71A8FF',
          border: '#71A8FF'
      }
    }
    console.log(props.progress);
    return circleStyle
  }


  return (
   
      
          <div className="progress-container">
              <div className='progress' style={ fillerBar() }/>
              <div>
                <label className='revenue'>Revenues</label>
                <div className="circle activeOne" style={{background: '#71A8FF', border: '#71A8FF'}} />
              </div>
              <div>
                <label className="expenses">Expenses</label>
                <div className="circle activeTwo" style={fillCircleTwo()}/>
              </div>
              <div>
                <label>Compare</label>
                <div className="circle activeThree" style={fillCircleThree()} />
              </div>

          </div>
      
    
    
  )
}

const Filler = (props) => {
  
  const [state, setState] = useState(0);
  
  function circleTwo() {
    let circleStyle;
    if (props.progress >= 50) {
      circleStyle = {
          background: '#71A8FF',
      }
    }
    return circleStyle;
  }

  function circleThree() {
    let circleStyle;
    if (props.progress >= 100) {
      circleStyle = {
          background: '#71A8FF',
      }
    }
    return circleStyle;
  }

  function fillerBar() {
    let fillerStyle;
    if (props.progress <= 100) {
      fillerStyle = {
        width: `${props.progress}%`
      }
    }
    console.log(props.progress)
    return fillerStyle;
  }
  
  return(
    <div className='progress' />
  )
    
  
}

