import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getProducts, Updateproducts } from "../../Redux/AppReducer/action";
import style from "../../styles/Admin/addForm.module.css"

function EditProduct() {
 
  const data= useSelector(store=>store.data)
  const {id}=useParams()
  const [currentData,setCurrentData]= useState({title:"",image:"",price:0})
  const dispatch= useDispatch()
  const navigate= useNavigate()
  useEffect(()=>{
    if(data.length===0){
      dispatch(getProducts())
    }
  },[data.length,dispatch])

  useEffect(()=>{
  const singleProduct= data.find((item)=>item.id===Number(id))
  singleProduct && setCurrentData(singleProduct)

  },[id,data])

const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch(Updateproducts(id,currentData)).then(() => {
    navigate("/admin")
  })
}


  return (
    <>
    <div className={style.container}>
    <h1>Edit product</h1>
    <form onSubmit={handleSubmit}>
      
        <input type="text" value={currentData.title} 
        onChange={(e)=>setCurrentData({...currentData,title:e.target.value})}/> <br />

        <input type="Number" value={currentData.price}  
          onChange={(e)=> setCurrentData({...currentData,price:e.target.value})} /> <br />
        <input type="url" value={currentData.image}
           onChange={(e)=>setCurrentData({...currentData,image:e.target.value})} /> <br />
        <button type="submit" value="Submit" className={style.btn}>Update </button>
      </form>

  
    </div>
  </>

  )
}

export default EditProduct
