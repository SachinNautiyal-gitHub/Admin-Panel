import React from 'react'
import styles from './Widgit3.module.css'
import Pichart from './Pichart'


function Widgit3() {
  return (
    <div className={styles.container}>
       <div className={styles.main}>
        <div className={styles.filter}>
            <p>Intencity</p>
            <select name="Intencity" id="Intencity">
                <option value="">2-6</option>
                <option value="">6-10</option>
                <option value="">10-14</option>
                <option value="">14-18</option>
                <option value="">above 18</option>
            </select>

        </div>
        <div className={styles.chart}>
        <Pichart/>
        </div>
    </div>
    </div>
  )
}

export default Widgit3
