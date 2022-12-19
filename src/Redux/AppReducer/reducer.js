import {
    Add_Product_Failue,
    Add_Product_Request,
    Add_Product_Success,
    Add_User,
    Delete_Product_Failure,
    Delete_Product_Request,
    Delete_Product_Success,
    Delete_User,
    Get_Product_Failure,
    Get_Product_Request,
    Get_Product_Success,
    Get_User,
    Updated_Product_Success,
    Update_Product_Request,
    Update_User,
    UUpdate_Product_Failure,
    home_data_1,
    filter_data_1 
} from "./actionTypes";

const initialState = {
    data: [],
    isLoading:false,
    isError:false,
    Users:[],
    home_data:[],
    filter_data:[]
}

const reducer = (state = initialState, action) => {

    const { type, payload } = action;
    switch (type) {

        // get data start
        case Get_Product_Request: {
            return {
                ...state,
                isLoading: true
            }
        }

        case Get_Product_Success: {
            return {
                ...state,
                data: payload,
                isLoading: false
            }
        }

        case Get_Product_Failure: {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        }



        // get data end 👍


        // add data start 🩹

        case Add_Product_Request: {
            return {
                ...state,
                isLoading: false
            }
        }

        case Add_Product_Success: {

            return {
                ...state,
                data: [...state.data, payload]
            }
        }

        case Add_Product_Failue: {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        };


        // add data end 👍



        // update data start 🌟

        case Update_Product_Request: {
            return {
                ...state,
                isLoading: true
            }
        }

        case Updated_Product_Success: {
            let newdata = state.data.map((item) => item.id === payload.id ? payload : item);
            return {
                ...state,
                isLoading: false,
                data: newdata
            }
        }

        case UUpdate_Product_Failure: {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        };


        // update data end 👍



        // delete data start
        case Delete_Product_Request: {
            return {
                ...state,
                isLoading: true
            }
        }

        case Delete_Product_Success: {
            let updatedTask = state.data.filter((item) => item.id !== payload.id);
            return {
                ...state,
                data: updatedTask
            }
        }
        case Delete_Product_Failure: {
            return {
                ...state,
                isError: true,
                isLoading: false
            }
        };


        //  =============================== 👍 Users =================

        case Get_User:{
            return{
                ...state,
                Users:payload
            }
        }

        case Add_User: {

            return {
                ...state,
                Users: [...state.Users, payload]
            }
        }

        case Update_User:{
            let NewUserdata= state.Users.map((user) => user.id === payload.id ? payload : user);
            return{
                ...state,
                User:NewUserdata
            }
        }
   
         case Delete_User:{
            let UserAfterDelete = state.Users.filter((user) => user.id !== payload.id);
            return{
             ...state,
             Users:UserAfterDelete
            }
         }

         case  home_data_1:{
            return{
                ...state,
                home_data:payload
            }
         }
         case  filter_data_1:{
            return{
                ...state,
                filter_data:payload
            }
         }


        default: return state;
    }

}

export { reducer }