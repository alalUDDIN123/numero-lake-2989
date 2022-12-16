import axios from "axios"
import {
    Add_Product_Failue,
    Add_Product_Request,
    Add_Product_Success,

    Add_User,
    Delete_User,
    Get_User,

    Delete_Product_Failure,
    Delete_Product_Request,
    Delete_Product_Success,

    Get_Product_Failure,
    Get_Product_Request,
    Get_Product_Success,
 
    Updated_Product_Success,
    Update_Product_Request,
    Update_User,
    UUpdate_Product_Failure,
 

} from "./actionTypes"

export const getProducts = (term) => async (dispatch) => {

    dispatch({ type: Get_Product_Request })
    if(term===undefined){
        try {
            let data = await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
            // console.log(data)
            dispatch({ type: Get_Product_Success, payload: data.data })
        } catch (error) {
            dispatch({ type: Get_Product_Failure })
        }
    }else{

        try {
            let data = await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products?q=${term}`)
            // console.log(data)
            dispatch({ type: Get_Product_Success, payload: data.data })
        } catch (error) {
            dispatch({ type: Get_Product_Failure })
        }
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


// =============================== Users============================ 👍

// Get User 

export const getUser = () => async (dispatch) => {

    try {
        let data = await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/Users`)
        dispatch({ type: Get_User, payload: data.data })
    } catch (error) {
       console.log(error)
    }
}



//Add User

export const addUser = (payload) => async (dispatch) => {
    dispatch({ type: Add_Product_Request })
    try {
        let data = await axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/Users`, payload)
        dispatch({ type: Add_User, payload: data.data })
    } catch (error) {
       console.log(error)
    }
}

//update User

export const UpdateUser = (id, payload) => async (dispatch) => {

    try {
        let data = await axios.patch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/Users/${id}`, payload)
        dispatch({ type:Update_User, payload: data.data })
    } catch (error) {
       console.log(error)
    }
}

//delete User

export const DeleteUser= (id) => async (dispatch) => {
   
    try {
        let data = await axios.delete(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/Users/${id}`)
        dispatch({ type: Delete_User, payload: data.data })
    } catch (error) {
       console.log(error)
    }
}

