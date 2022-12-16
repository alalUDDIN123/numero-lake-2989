import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addproducts } from "../../Redux/AppReducer/action";
import style from "../../styles/Admin/addForm.module.css"

const Initial = {
  title: "",
  image: "",
  price: 0,

}


function AddProductForm() {
  const [addProduct, setaddProduct] = useState(Initial)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleInput = (e) => {
    const { name, value } = e.target
    setaddProduct({ ...addProduct, [name]: value })
  }
  const handleAddProduct = () => {
    dispatch(addproducts(addProduct)).then(() => {
      navigate("/admin")
    })
  }


  return (
    <>
      <div className={style.container}>
        <h1>Add Product</h1>
        <div>
          <div>
            <input
              type="text"
              placeholder="Product name"
              value={addProduct.title}
              name="title"
              onChange={handleInput}
            />
          </div>

          <div>
             <input
              type="url"
              placeholder="Image URL"
              value={addProduct.image}
              name="image"
              onChange={handleInput}
            />
          </div>

          <div>
         <input type="number"
              value={addProduct.price}
              name="price" onChange={handleInput} />
          </div>

          <div>
            <textarea name="" cols="49" rows="2"
            placeholder='Write description'
             ></textarea>
          </div>
          <div>
            <button onClick={handleAddProduct} className={style.btn} >Add</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default AddProductForm
