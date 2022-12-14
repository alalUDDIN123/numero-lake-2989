import React from 'react'

import styles from "../../styles/Admin/Top.module.css"
// import { AiOutlineSearch } from 'react-icons/ai';

function Top() {
    return (
        <>
            <div className={styles.head}>
                {/* <div className={styles.search}>
                    <input type="text" className={styles.searchTerm} placeholder="Search here...." />
                    <button type="submit" className={styles.searchButton}>
                       <AiOutlineSearch />
                    </button>
                   </div> */}

                <div className={styles.search_div}>

                    <input
                        type="text"
                        className={styles.search}
                        placeholder="Search here..."
                    />
                    <img src="https://static.vecteezy.com/system/resources/previews/001/591/517/non_2x/free-search-icon-free-vector.jpg" alt="" />
                </div>
                <div className={styles.category}>
                    <h1>Category : </h1>
                    <select name="" >
                        <option value="">Select category</option>
                        <option value="bike">Bike</option>
                        <option value="mob">Mobile</option>
                    </select>


                </div>
                <div className={styles.category}>
                    <h1>Sort By: </h1>
                    <select name="" >
                        <option value="">Sort By</option>
                        <option value="high">High-to-low</option>
                        <option value="low">Low-to-high</option>
                    </select>


                </div>
            </div>
        </>
    )
}

export default Top
