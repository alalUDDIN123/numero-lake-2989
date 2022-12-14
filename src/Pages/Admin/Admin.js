import React, { useEffect, useState } from 'react'
import styles from "../../styles/Admin/Main.module.css"
import sidebar from "../../styles/Admin/sidebar.module.css"
import Top from './Top'
import { Right } from "./Right"
import { Dummy } from './dummy'
import { useNavigate } from 'react-router-dom'
function Admin() {
  const [width, setWidth] = useState(false)
  const naviagte=useNavigate()
  useEffect(() => {
    if (window.innerWidth === 1366 || window.innerWidth > 1200) {
      setWidth(true)
    }
  }, [])

  // add products button redirect
  const addproducts=()=>{
    naviagte("addProduct")
  }
  // admin/users 

  const UsersClick=()=>{
    naviagte("users")
  }

  // admin/feedback
  const feedClick=()=>{
    naviagte("feedback")
  }
   // admin/contact
   const contactClick=()=>{
    naviagte("contact")
  }

  const report=()=>{
    naviagte("report")
  }
  return (
    <div>
      <Top />
      <section>
        {/* Left side */}
        <div className={styles.max_width}>
          <div className={sidebar.left}>
            <h1>Admin Dashboard</h1>
            <h1 onClick={addproducts}>Add product</h1>
            <h1>All products</h1>
            <h1 onClick={UsersClick}>Users</h1>
            <h1 onClick={feedClick}>Feedback</h1>
            <h1 onClick={contactClick}>Contact</h1>
            <h1 onClick={report}>Report</h1>
           
          </div>

          {/* Right side */}
          
    <div className={sidebar.right}>
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Images</th>
          <th>Title</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {Dummy.map((item, index) => (
          <Right
            index={index + 1}
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price}

          />
        ))}
      </tbody>
    </table>
  </div>

           
        </div>
      </section>
    </div>
  )
}

export default Admin
