import React, { useContext } from 'react'
import styles from './Widgit6.module.css'
import RRchart from './Rchart2'
import { dataContext } from '../../Context'
function Widgit6() {
  const {array} = useContext(dataContext);
  return (
  <>
  <div className={styles.container}>
  <div className={styles.main}>
        <div className={styles.filter}>
            <h3>Country</h3>
            <select name="Country" id="Country">
                <option value="">USA</option>
                <option value="">China</option>
                <option value="">Brazil</option>
                <option value="">Australia</option>
                <option value="">Rasia</option>
                <option value="">other</option>
            </select>

        </div>
        <div className={styles.chart}>
          <RRchart/>
        </div>
    </div>
  </div>
  
  </>
  )
}

export default Widgit6
