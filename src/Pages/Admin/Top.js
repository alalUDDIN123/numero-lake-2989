import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { DeleteProduct, getProducts } from "../../Redux/AppReducer/action";

import styles from "../../styles/Admin/Top.module.css"


function Top() {

    const [term, setTerm] = useState("")

   const dispatch= useDispatch()
 
     useEffect(()=>{
       dispatch(getProducts(term)) 
     },[term,dispatch])


    return (
        <>
            <div className={styles.head}>


                <div className={styles.search_div}>

                    <input
                        type="text"
                        className={styles.search}
                        placeholder="Search here..."
                        onChange={(e) => setTerm(e.target.value)}
                    />
                   
                </div>
            </div>
        </>
    )
}

export default Top
