import React from 'react'
import styles from '../SetTimeAndDate/SetTimeAndDate.module.css'
import Calendar from '../Calendar/Calendar'
import SelectTime from '../SelectTime/SelectTime'
import ApplyButton from '../ApplyButton/ApplyButton'
const SetTimeAndDate = () => {
    return (
        <div className={styles.timeAndDateMain}>
            <Calendar/>
            <SelectTime/>
            <ApplyButton/>
        </div>
    )
}

export default SetTimeAndDate
