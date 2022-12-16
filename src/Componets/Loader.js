import React from 'react'
import Loaderimg from "../Pages/Admin/loader.gif"
import styles from "../styles/Admin/Loader.module.css"
function Loader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={Loaderimg} alt="Loading..." />
      </div>
    </div>
  )
}

export default Loader
