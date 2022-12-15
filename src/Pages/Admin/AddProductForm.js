import React from 'react'
import style from "../../styles/Admin/addForm.module.css"
function AddProductForm() {
  return (
    <>
      <div className={style.container}>
      <h1>Add product</h1>
      <form action="">
        
          <input type="text" placeholder='Enter product name' /> <br />

          <input type="Number" placeholder='Enter product price' /> <br />

          <select name="" >
            <option value="">Select category</option>
            <option value="car">car</option>
            <option value="car">car</option>
            <option value="car">car</option>
            <option value="car">car</option>
          </select> <br />
          <input type="url" placeholder='Enter url' /> <br />
          <button type="submit" value="Submit" className={style.btn}>Submit </button>
        </form>

    
      </div>
    </>

  )
}

export default AddProductForm
