import React, { useContext } from 'react'
import styles from './Widgit2.module.css'
import { dataContext } from '../../Context'
import Bchart from './Barchart'


function Widgit2() {

  const {array} = useContext(dataContext);
  return (
    <div className={styles.container}>
       <div className={styles.main}>
        <div className={styles.filter}>
            <p>Sector</p>
            <select name="Sector" id="Sector">
                <option value="">Energy</option>
                <option value="">Manufacturing</option>
                <option value="">Information Technology</option>
                <option value="">Food & agriculture</option>
                <option value="">other</option>
            </select>

        </div>
        <div className={styles.chart}>
        <Bchart/>
         
        </div>
    </div>
    </div>
  )
}

export default Widgit2
