import React, { useContext } from 'react'
import styles from './SideNav.module.css';
import { dataContext } from '../../Context';

function SideNav() {

  const {handleLogout, loadData, handleOnclick} = useContext(dataContext);
  return (
   <>
   <div className={styles.container}>
    <div className={styles.top}>
          <span className={styles.logo}>Admin Panel</span>
    </div>
 
    <div className={styles.mid}>
        <ul>
          <li onClick={loadData}><i className="fa-solid fa-table-columns"></i><span>Dashbord</span></li>
          <li><i className="fa-regular fa-user"></i><span>Profile</span></li>
          <li onClick={handleLogout}><i className="fa-solid fa-right-from-bracket"></i><span>Logout</span></li>
        </ul>
    </div>
    <div className={styles.end}>
         <p>Theme</p>
         
         <div className={styles.colours}>
          <span onClick={()=>{handleOnclick('#605E5C')}} className={styles.colouroption2}></span>
          <span onClick={()=>{handleOnclick('white')}} className={styles.colouroption3}></span>
         </div>
         
        
    </div>
   </div>
   
   </>
  )
}

export default SideNav
