import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getProducts } from '../../Redux/actions'

import styles from "../../styles/Admin/Top.module.css"


function Top({getterm}) {

    const [term, setTerm] = useState("p")

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
                    <img src="https://static.vecteezy.com/system/resources/previews/001/591/517/non_2x/free-search-icon-free-vector.jpg" alt=""
                   />
                </div>
            </div>
        </>
    )
}

export default Top
