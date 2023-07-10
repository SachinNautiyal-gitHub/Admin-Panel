import React from 'react'
import styles from './Widgit4.module.css'
import Bchart from './Barchart'
import Rchart from './RedarChart'

function Widgit4() {
  return (
    <div className={styles.container}>
       <div className={styles.main}>
        <div className={styles.filter}>
            <p>Liklihood</p>
            <select name="Liklihood" id="Liklihood">
                <option value="">0-2</option>
                <option value="">2-4</option>
                <option value="">4-6</option>
                <option value="">6-8</option>
                <option value="">8-10</option>
               
            </select>

        </div>
        <div className={styles.chart}>
         <Rchart/>
        </div>
    </div>
    </div>
  )
}

export default Widgit4
