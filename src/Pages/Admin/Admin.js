import React, { useEffect, useState } from 'react'
import styles from "../../styles/Admin/Main.module.css"
import sidebar from "../../styles/Admin/sidebar.module.css"
import Top from './Top'
import { Right } from "./Right"

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../Redux/actions'
function Admin() {
  const data= useSelector(store=>store.data)
  // const [width, setWidth] = useState(false)
  const naviagte=useNavigate()
  const dispatch= useDispatch()
  // useEffect(() => {
  //   if (window.innerWidth === 1366 || window.innerWidth > 1200) {
  //     setWidth(true)
  //   }
  // }, [])

  // add products button redirect
  const addproducts=()=>{
    naviagte("addProduct")
  }
  // admin/users 

  const UsersClick=()=>{
    naviagte("users")
  }

   // admin/contact
   const contactClick=()=>{
    naviagte("contact")
  }


 useEffect(()=>{
  if(data.length===0){
    dispatch(getProducts())
  }
 })




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
            <h1 onClick={contactClick}>Contact</h1>
          
           
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
        {data && data.map((item, index) => (
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