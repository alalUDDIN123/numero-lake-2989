import React, { useEffect, useState } from "react";
import Loader from "../../Componets/Loader";
import style from "../../styles/Admin/Contact.module.css"

const Contact = () => {

   const [loading,setLoading]= useState(false)

   useEffect(()=>{
   let id= setTimeout(()=>{
      setLoading(true)
   },1500)

   return(()=>{
    setInterval(id)
   })

   },[])

  
  return (
   <> 
     <div className={style.contact}>
      <h1>Contact us</h1>
      <form action="">
        <input type="text" placeholder="Enter name"/> <br />
        <input type="text" placeholder="Enter email" /> <br />
        <input type="message" placeholder="Write message" /> <br />
         <input type="submit" value="Submit" />
      
      </form>
     </div>

      {/*  */}
     {
      !loading ? <Loader />: <div className={style.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28626.379939476632!2d92.32219204016027!3d26.252006578016612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375ad1acafced0af%3A0x55fd068e1c7a4781!2sMorigaon%2C%20Assam%20782105!5e0!3m2!1sen!2sin!4v1671078069116!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="morigaon"
        referrerPolicy="no-referrer-when-downgrade">
          </iframe> 
    </div>
     }
    </>
  );
};

export default Contact;

