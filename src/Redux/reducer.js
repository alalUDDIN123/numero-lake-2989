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
    UUpdate_Product_Failure
} from "./actionTypes";

const initialState = {
    data: [],
    isLoading:false,
    isError:false
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


        // delete data end
        default: return state;
    }

}

export { reducer }