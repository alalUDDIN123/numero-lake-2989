import React from 'react'
import "../styles/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown , faMagnifyingGlass , faLocationDot , faChevronUp , faPlus} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { home_data_1 } from '../Redux/AppReducer/actionTypes'
import {Link} from "react-router-dom"

const Homes = () => {
  const[load,Setload] = useState([])  //for load data 
  const[menu,Setmenu] = useState(false) 
 const[button,Setbutton] = useState(true) //for load button on/off
 const dispatch = useDispatch()
 const filters = useSelector((state)=>state.AppReducer.filter_data)
 const data = useSelector((state)=>state.AppReducer.home_data)
  const change=()=>{
    Setmenu(!menu)
  }

//load data
  const get_data=()=>{
    axios({method:"get" ,baseURL:"https://olx-database.vercel.app" , url:"/page2"}).then((res)=> Setload(res.data) )
  }


// load_more function

  const  load_More= async ()=>{
    
    await get_data()
   
    
     Array.prototype.push.apply(data,load)
     dispatch({type:home_data_1,payload:data})
     Setbutton(false)

  }

// main data
  const call_again=()=>{
    axios({method:"get" ,baseURL:"https://olx-database.vercel.app" , url:"/page3"    }).then((res)=> dispatch({type:home_data_1,payload:res.data}))
  }  

  useEffect(()=>{
    
    call_again()

    get_data()
   
  },[])


  return (
  <>
 
    <div className='mains'>
      <div className='lower_nav'>
      <div className='drop_down' >
       <div className='drop_down_1' onClick={change} >
        <p>All Catregories</p>
        {menu?<FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} /> }
       </div>
       <div className={menu?'Mega_menu':'Mega_menu_1'} >
     <div><h5>Properties</h5>
     <p>For Sale: Houses & Apartments</p>
     <p>For Rent: Houses & Apartments</p>
     <p>Lands & Plots</p>
     <p>For Rent: Shops & Offices</p>
     <p>For Sale: Shops & Offices</p>
     <p>PG & Guest Houses</p>
     <h5>Mobiles</h5>
     <p>Mobile Phones</p>
     <p>Accessories</p>
     <p>Tablets</p></div>
     <div> <h5>Jobs</h5>
     <p>Data entry & Back office</p>
     <p>Sales & Marketing</p>
     <p>BPO & Telecaller</p>
     <p>Driver</p> 
     <p>Office Assistant</p>
     <p>Delivery & Collection</p>
     <p>Teacher</p>
     <p>Cook</p>
     <p>Receptionist & Front office</p>
     <p>Operator & Technician</p>
     <p>IT Engineer & Developer</p>
     <p>Hotel & Travel Executive</p>
     <p>Accountant</p>
     <p>Designer</p>
     <p>Other Jobs</p>
     <h5>Bikes</h5>
     <p>Motorcycles</p>
     <p>Scooters</p>
     <p>Spare Parts</p>
     <p>Bicycles</p></div>
     <div> <h5>Electronics&Appliances</h5>
     <p>TVs, Video - Audio</p>
     <p>Kitchen & Other Appliances</p>
     <p>Computers & Laptops</p>
     <p>Cameras & Lenses</p>
     <p>Games & Entertainment</p>
     <p>Fridges</p>
     <p>Computer Accessories</p>
     <p>Hard Disks, Printers & Monitors</p>
     <p>ACs</p>
     <p>Washing Machines</p> 
     <h5>Commercial Vehicles & Spares</h5>
     <p>Commercial & Other Vehicles</p>
     <p>Spare Parts</p>
     <h5>Furniture</h5>
     <p>Sofa & Dining</p>
     <p>Beds & Wardrobes</p>
     <p>Home Decor & Garden</p>
     <p>Kids Furniture</p>
     <p>Other Household Items</p></div>
     <div><h5>Fashion</h5>
     <p>Men</p>
     <p>Women</p>
     <p>Kids</p>
     <h5>Books, Sports & Hobbies</h5>
     <p>Books</p>
     <p>Gym & Fitness</p>
     <p>Musical Instruments</p>
     <p>Sports Equipment</p>
     <p>Other Hobbies</p>
     <h5>Pets</h5>
     <p>Fishes & Aquarium</p>
     <p>Pet Food & Accessories</p>
     <p>Dogs</p>
     <p>Other Pets</p></div>
       </div>

      </div>
      
      <p className='p_tag' >Cars</p>
      <p className='p_tag'>Motorcycles</p>
      <p className='p_tag'>Mobile Phones</p>
      <p className='p_tag'>For Sale: Houses & Apartments</p>
      <p className='p_tag'>OLX Renew (Mobile)</p>
      <p className='p_tag'>Scooters</p>
      <p className='p_tag'>Commercial & Other Vehicles</p>
      <p className='p_tag'>For Rent: Houses & Apartments</p>
      
      </div>
      <div className='banner'>
        <img src="https://statics.olx.in/olxin/banners/hero_bg_in_v3@1x.png" />
      </div>
      
      <div className='products' >
          {filters.length>0? filters.map((item,index)=>{
          return  <div key={index} >
          <Link to="/ProductDetails"> <img className='image_change' src={item.images[0].big.url}/> </Link>
            <h5>{item.price.value.display}</h5>
            <p>{item.title}</p>
            <p> {item.location},{item.locations_resolved.COUNTRY_name} </p>
          </div>
          }):  data.map((item,index)=>{
            return    <div key={index} >
               <Link to="/ProductDetails"><img className='image_change' src={item.images[0].big.url}/></Link>
             <h5>{item.price.value.display}</h5>
              <p>{item.title}</p>
              <p> {item.location},{item.locations_resolved.COUNTRY_name} </p>
            </div> 
            })}
      </div>

      {button &&<button className='Load_button' onClick={load_More}>Load More</button>}

    </div>
    </>
  )
}

export default Homes
