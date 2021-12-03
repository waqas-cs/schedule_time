import React, {useState} from 'react'
import styles from '../Calendar/Calendar.module.css'
import arrowRight from '../../assets/images/arrowRight.png'


const days = ["M","T","W","T","F","S","S"]
const months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]

const Calendar = () => {
    const [monthIndex, setMonthIndex] = useState(0)
    const [currentYear, setCurrentYear] = useState(2021)

    const nameOfDay = days.map((element, index)=>{
       return <td key={index}>{element}</td>
    })
    const currentMonth = months[monthIndex]

    const changeMonthYear = () => {
        if(monthIndex==11) {
            setMonthIndex(0)
            setCurrentYear(currentYear+1)
            console.log(currentYear)
        }
        else setMonthIndex(monthIndex+1)
    }

    return (
        <div className={styles.calendarMainDiv}>
            <div className={styles.monthYear}>
                <h4>{currentMonth} {currentYear}</h4>
               <div onClick={changeMonthYear}>
                    <img src={arrowRight} alt="Right Arrow"/>
                </div>
            </div>
            <div className={styles.selectDay}>
                <div className={styles.nameOfDay}>
                    <table>
                        <tbody>
                            <tr>{nameOfDay}</tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.selectDate}>
                    <table>
                        <tbody>
                            <tr>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Calendar
