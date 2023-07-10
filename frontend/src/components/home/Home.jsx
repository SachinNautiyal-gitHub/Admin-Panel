import React, { useContext } from 'react'
import styles from './Home.module.css';
import SideNav from '../sidenav/SideNav'
import Navbar from '../navbar/Navbar';
import Widgit1 from '../Widgits/Widgit1';
import Widgit2 from '../Widgits/Widgit2';
import Widgit3 from '../Widgits/Widgit3';
import Widgit4 from '../Widgits/Widgit4';
import Widgit5 from '../Widgits/Widgit5';
import Widgit6 from '../Widgits/Widgit6';
import { dataContext } from '../../Context';
import image from '../../gifi.gif'


function Home() {
  const {theme , isLoading} = useContext(dataContext);

  if(isLoading){
    return (
      <div className={styles.Loading}>
        <img src={image} alt="" />
        <h3>Loading...</h3>
      </div>
    )
  }

 else return (
    <>
    <div className={styles.home} style={{backgroundColor: theme}}>
          <SideNav/>
        <div className={styles.homepage}>
          <Navbar/>
           <h2 className={styles.heading}>Events</h2>
            <div className={styles.upper}>
             <Widgit1/>
             <Widgit2/>
            </div>
            <div className={styles.middle}>
             <Widgit3/>
             <Widgit4/>
             <Widgit5/>
            </div>
            <div className={styles.bottom}>
              <Widgit6/>
            </div>
            <div className={styles.footer}>
             <p>copyright 2023 &#169; All right reserved</p>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default Home
