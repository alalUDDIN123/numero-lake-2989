import React from 'react'
import "../styles/Navbar.css"
import olx from "../styles/logo1.png"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown , faMagnifyingGlass , faLocationDot , faChevronUp , faPlus} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { text } from '@fortawesome/fontawesome-svg-core'



const Navbar = () => {

  const [select,Setselect] = useState(false)
  const[lang,Setlang] = useState(false)
  

  const change=()=>{
     Setselect(!select)
  
    }


  const change1=()=>{
    Setlang(!lang)

 }

  const functionChange=(data)=>{
  
  
    
  }


  return (
    <div className='maindiv'>
    <Link to="/Home"  >   <img className='oolx' src={olx} /> </Link>
    <div className='outerdiv' onClick={change} >
      <div className='innerdiv'>
        <div className='innerdiv1'> 
      <FontAwesomeIcon icon={faMagnifyingGlass} />
        <p>India</p> </div>
        {select?<FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} /> } 
      </div>
    
     <ul className={select?'option1':'option'}  >
   <li className='option_list' onClick={()=>functionChange("Kerala")} >
   <FontAwesomeIcon icon={faLocationDot} /><p>Kerala</p></li>
   <li className='option_list'onClick={()=>functionChange("Tamil Nadu")} >
   <FontAwesomeIcon icon={faLocationDot} /><p>Tamil Nadu</p></li>
   <li className='option_list' onClick={()=>functionChange("Punjab")} >
   <FontAwesomeIcon icon={faLocationDot} /><p>Punjab</p></li>
   <li className='option_list' onClick={()=>functionChange("Maharashtra")} >
   <FontAwesomeIcon icon={faLocationDot} /><p>Maharashtra</p></li>
     </ul>

    </div>
    <div className='inputdiv'> 
      <input className='biginput' placeholder='Find Cars, Mobile Phones and more...' />
  <p> <FontAwesomeIcon icon={faMagnifyingGlass} id="search" />  </p>
      </div>
 
 
<div className='languages'  onClick={change1} >
  <div className='select' >
<p>ENGLISH</p>
{lang?<FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} /> } 

  </div>

  <ul className={lang?'option3':'option2'}  >
<li className='lang_list'>
<p> English</p>
</li>
<li className='lang_list'>
<p> हिन्दी</p>
</li>
  </ul>
</div>
 
  <h3>Login</h3>

  <button><FontAwesomeIcon icon={faPlus} /> Sell</button>

    </div>
  )
}

export default Navbar
