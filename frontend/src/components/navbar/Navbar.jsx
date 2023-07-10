import React, { useContext } from 'react'
import styles from './Navbar.module.css';
import { dataContext } from '../../Context';


function Navbar() {
  const {handleMode}=useContext(dataContext);
  return (
   <>
   <div className={styles.navbar}>
     <div className={styles.wrapper}>
        <div className={styles.search}>
          <input type="Text" placeholder='search here' disabled />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className={styles.items}>
            <ul>
              <li onClick={handleMode}><i className="fa-solid fa-moon"></i></li>
              <li><i className="fa-solid fa-bell"></i></li>
              <li><i className="fa-solid fa-gear"></i></li>
              <li><i className="fa-solid fa-user"></i></li>
            </ul>
        </div>
     </div>

   </div>
   
   
   
   </>
  )
}

export default Navbar
