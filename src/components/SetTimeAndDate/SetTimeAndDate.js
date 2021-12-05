import React from 'react'
import styles from '../SetTimeAndDate/SetTimeAndDate.module.css'
import Calendar from '../Calendar/Calendar'
const SetTimeAndDate = () => {
    return (
        <div className={styles.timeAndDateMain}>
            <Calendar/>
        </div>
    )
}

export default SetTimeAndDate
