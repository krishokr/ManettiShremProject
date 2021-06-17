import React, {useState} from 'react';
import './App.css';

import ReactTooltip from "react-tooltip";

function EntryBox (props) {

  // report state back to parent with this function
  const callback = props.callback;
  const ID = parseInt(props.id);
  function findContent() {
    let content;
    if (props.value === 'revenue') {
      if (props.name === 'zero') {
        content = 'A large, not-for-profit regional medical center, including multiple hospitals, labs and clinics. Income comes from patients, medical insurance companies, and government programs like medicare.'
      } else if(props.name === 'one') {
        content = 'Fees are dedicated to specific services, such as athletic facilities, bus service (UNITRANS), student organizations, the CoHo and Student Community Center, etc.'
      } else if (props.name === 'two') {
        content = 'General funds given by the taxpayers of California, appropriated annualy by the state legislature. General funds are not dedicated to specific services.'
      } else if (props.name === 'three') {
        content = 'Students pay tuition to attend the University. Non-California residents pay about twice as much as residents.  Tuition is also general funds.'
      } else if (props.name === 'four') {
        content = 'Government and industry funds given to faculty and graduate students to perform research projects. These include up to 50% overhead in addition to the cost of the research.'
      } else if (props.name === 'five') {
        content = 'Federal grants for tuition and living expenses for low-income students. Percentage of students with Pell grants is a good way to measure who a University serves; at UCD, it\'s 34%; at Cal Tech it\'s 14%; At Sac State it\'s 71%.'
      } else if (props.name === 'six') {
        content = 'Services other than education that people pay for, like dorms, dining, parking, etc.  At UC Davis, this also includes almost $500M of revenue generated by medical school faculty, or 8%, making this category look really big.'
      } else if (props.name === 'seven') {
        content = 'Endowments are past gifts that were invested to provide income; interest is earned on other savings. The Museum is the direct result of a $10M gift from Jan Shrem and Maria Manetti Shrem.'
      } 
    } else if (props.value === 'expend') {
      if (props.name === 'zero') {
        content = ' The cost of providing care at the Medical Center is roughly what we get paid to provide it.'
      } else if (props.name === 'one') {
        content = 'Professors, advisors, deans, the library, the computer labs, etc, including Medical School faculty salaries.'
      } else if (props.name === 'two') {
        content = 'The costs of doing the research, mostly researcher salaries. '
      }else if (props.name === 'three') {
        content = 'Student Health, things covered by fees, Admissions, and also financial aid from the general funds, which is about $100M or 1.5%. '
      }else if (props.name === 'four') {
        content = 'Upkeep of the grounds and building, and utilities, which are less than 1%. '
      }else if (props.name === 'five') {
        content = 'Provost and Chancellor\'s offices, raising money, accounting, personnel, legal, making budgets.'
      }else if (props.name === 'six') {
        content = 'The costs of providing dorms, dining,parking, etc.'
      }else if (props.name === 'seven') {
        content = 'Mostly the cooperative extension, which provides agricultural services to farmers, ranchers, winemakers, etc.  Part of our mission as a land grant university.'
      } else if (props.name === 'eight') {
        content = 'Depreciation is the loss of value of buildings and equipment as they wear out. Mostly unavoidable financial losses.'
      }
    }
    return content
  }

  return( 
    <div className='totalContainer'>
      <div className="titleContainer">
        <div className={props.name}/>
        
        
      
        <p data-tip data-for={props.name} className='info'>{props.title} &#x1F6C8;</p>
        <ReactTooltip className='infoBox' id={props.name} place="top">{findContent()}</ReactTooltip>
      </div>
      <div className='percentage'>

        <input placeholder='0' type="number"
          onChange={e => callback(e.target, ID)}/>
        <p>%</p>
      </div>
      
    </div>
  )

}

export default EntryBox;