import React from 'react'
import styles from './Widgit5.module.css'
import Rchart from './RedarChart'
import Lchart from './Linechart'

function widgit5() {
  return (
    <div className={styles.container}>
       <div className={styles.main}>
        <div className={styles.filter}>
            <p>Relevence</p>
            <select name="Relevence" id="Relevence">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
            </select>

        </div>
        <div className={styles.chart}>
         <Lchart/>
        </div>
    </div>
    </div>
  )
}

export default widgit5
