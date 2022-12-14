import React from 'react'
import styles from "../../styles/Admin/Main.module.css"
import sidebar from "../../styles/Admin/sidebar.module.css"
import {Right} from "./Right"
import {Dummy} from './dummy'
function Admin() {
  return (
    <div>
     <section>
       {/* Left side */}
        <div className={styles.max_width}>
          <div className={sidebar.left}>
            <h1>Admin Dashboard</h1>
            <h1>Add product</h1>
            <h1>See all products</h1>
            <h1>Users</h1>
            <h1>Orders</h1>
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
              {Dummy.map((item,index) => (
                <Right
                index={index}
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
