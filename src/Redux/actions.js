import axios from "axios"
import {
    Add_Product_Failue,
    Add_Product_Request,
    Add_Product_Success,
    Delete_Product_Failure,
    Delete_Product_Request,
    Delete_Product_Success,
    Get_Product_Failure,
    Get_Product_Request,
    Get_Product_Success,
    Updated_Product_Success,
    Update_Product_Request,
    UUpdate_Product_Failure,

} from "./actionTypes"

export const getProducts = () => async (dispatch) => {
    dispatch({ type: Get_Product_Request })
    try {
        let data = await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
        dispatch({ type: Get_Product_Success, payload: data.data })
    } catch (error) {
        dispatch({ type: Get_Product_Failure })
    }
}


//add task

export const addproducts = (payload) => async (dispatch) => {
    dispatch({ type: Add_Product_Request })
    try {
        let data = await axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`, payload)
        dispatch({ type: Add_Product_Success, payload: data.data })
    } catch (error) {
        dispatch({ type: Add_Product_Failue })
    }
}

//update task

export const Updateproducts = (id, payload) => async (dispatch) => {
    dispatch({ type: Update_Product_Request })
    try {
        let data = await axios.patch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`, payload)
        dispatch({ type: Updated_Product_Success, payload: data.data })
    } catch (error) {
        dispatch({ type: UUpdate_Product_Failure })
    }
}

//delete task

export const DeleteProduct= (id) => async (dispatch) => {
    dispatch({ type: Delete_Product_Request })
    try {
        let data = await axios.delete(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`)
        dispatch({ type: Delete_Product_Success, payload: data.data })
    } catch (error) {
        dispatch({ type: Delete_Product_Failure })
    }
}

