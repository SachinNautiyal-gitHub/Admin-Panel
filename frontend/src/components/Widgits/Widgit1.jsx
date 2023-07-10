import React, { useContext } from 'react'
import styles from './Widgit1.module.css'
import { dataContext } from '../../Context'
import Achart from './Achart';
function Widgit1() {

  const {array} = useContext(dataContext);
  return (
    <div className={styles.container}>
    <div className={styles.main}>
        <div className={styles.filter}>
            <p>Topic</p>
            <select name="Topic" id="Topic">
                <option value="">gas</option>
                <option value="">oil</option>
                <option value="">production</option>
                <option value="">food</option>
                <option value="">unemployment</option>
                <option value="">growth</option>
                <option value="">other</option>
            </select>

        </div>
        <div className={styles.chart}>
         <Achart/>
        </div>
    </div>
        
     </div>
  )
}

export default Widgit1
