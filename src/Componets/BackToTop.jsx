import React, { useEffect, useState } from 'react'
import "../styles/BackToTop.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp} from '@fortawesome/free-solid-svg-icons'


const BacktoTop = () => {

     const[visible,Setvisible] = useState(false)

    const goto_top=()=>{
 window.scrollTo({top:"0" , left:"0" , behaviour:"smooth"})
    }


     const listenScroll=()=>{
   let hidden_height = 250 ;

   const scroll = document.body.scrollTop ||  document.documentElement.scrollTop ;

   if(scroll>hidden_height){
    Setvisible(true)
   }else{
    Setvisible(false)
   }
 

     }

    useEffect(()=>{

         window.addEventListener("scroll" , listenScroll)
         return ()=> window.removeEventListener("scroll" ,listenScroll)

    },[]) 

  return (
    <div> 
    { visible && (
    <div className='top_btn' onClick={goto_top} >
     <FontAwesomeIcon icon={faArrowUp} />
    </div> )} </div>
  )
}

export default BacktoTop
