import React, {useState, useEffect} from 'react'
import styles from '../Calendar/Calendar.module.css'
import arrowRight from '../../assets/images/arrowRight.png'
import arrowLeft from '../../assets/images/arrowLeft.png'

const days = ["M","T","W","T","F","S","S"]
const months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
Object.freeze(months);
const getFirstDayOfMonth = (currentDate) => {
  return new Date(
    new Date(currentDate).getFullYear(),
    new Date(currentDate).getMonth(),
    1
  );
};

const getLastDayOfMonth = (currentDate) => {
  return new Date(
    new Date(currentDate).getFullYear(),
    new Date(currentDate).getMonth() + 1,
    0
  );
};

const createCalendarRows = (firstDay, totalDays) => {
  let calendar1D = [];
  let calendar2D = [];
  for (let i = 0; i < 35; i++) {
    if (i < firstDay - 1) {
      calendar1D[i] = 0;
    } else if (i > totalDays + 1) calendar1D[i] = 0;
    else calendar1D[i] = i + 2 - firstDay;
  }
  while (calendar1D.length) calendar2D.push(calendar1D.splice(0, 7));
  return calendar2D;
};

const Calendar = () => {

  const [month, setMonth] = useState(new Date(Date.now()).getMonth());
  const [year, setYear] = useState(new Date(Date.now()).getFullYear());
  const [currentDate, setCurrentDate] = useState(new Date(Date.now()));
  const [firstDayOfMonth, setFirstDayOfMonth] = useState(
    getFirstDayOfMonth(currentDate)
  );

  const [lastDayOfMonth, setLastDayOfMonth] = useState(
    getLastDayOfMonth(currentDate)
  );

  const [calendarData, setCalendarData] = useState(
    createCalendarRows(firstDayOfMonth.getDay(), lastDayOfMonth.getDate())
  );
  const [selected, setSelected] = useState([])
  const [hour, setHour] = useState("")
  const [minutes, setMinutes] = useState("")

  const decrementMonthAction = () => {
    setMonth((month) => (month === 0 ? (month = 11) : --month));
    setCurrentDate((currentDate) => new Date(currentDate).setMonth(month));
    if (month === 0) {
      setYear((year) => --year);
      setCurrentDate((currentDate) => new Date(currentDate).setFullYear(year));
    }
    setFirstDayOfMonth(getFirstDayOfMonth(currentDate));
    setLastDayOfMonth(getLastDayOfMonth(currentDate));
    setCalendarData(createCalendarRows(firstDayOfMonth.getDay(), lastDayOfMonth.getDate()));
  };

  const incrementMonthAction = () => {
    setMonth((month) => (month === 11 ? (month = 0) : ++month));
    setCurrentDate((currentDate) => new Date(currentDate).setMonth(month));
    if (month === 11) {
      setYear((year) => ++year);
      setCurrentDate((currentDate) => new Date(currentDate).setFullYear(year));
    }
    setFirstDayOfMonth(getFirstDayOfMonth(currentDate));
    setLastDayOfMonth(getLastDayOfMonth(currentDate));
    setCalendarData(createCalendarRows(firstDayOfMonth.getDay(), lastDayOfMonth.getDate()));
  };

  console.log("firstDayOfMonth", firstDayOfMonth);
  console.log("lastDayOfMonth", lastDayOfMonth);
  useEffect(() => {
    setCalendarData(
      createCalendarRows(firstDayOfMonth.getDay(), lastDayOfMonth.getDate())
    );
  }, []);

  const nameOfDay = days.map((dayName, index)=>{
       return <td key={index}>{dayName}</td>
    })

  const getSchduleDate = (date) => {
    let selectedDate = date;
    let selectedMonth = months[month];
    let selectedYear = year;
    let selectedData = {"date": selectedDate, "month":selectedMonth,"year": selectedYear}
    setSelected(selectedData)
  }


  const date = new Date();
  let uts = date.getTimezoneOffset();
  uts = uts * -1; // convert negative to postive
  uts = uts / 60; //covert minutes to hours
  

  const hourChangeHandler = e=> {
    setHour(e.target.value)
  }
  const minutesChangeHandler = e=> {
    setMinutes(e.target.value)
  }

  const schduledDataAnTime = () => {
    alert(`Your schduled Date and Time is: ${selected.date} ${selected.month}, ${selected.year} ${hour}:${minutes}`)
  }

  return (
      <div className={styles.calendarMainDiv}>
          <div className={styles.monthYear}>
              <div onClick={decrementMonthAction}>
                  <img src={arrowLeft} alt="Left Arrow"/>
              </div>
              <h2>{`${months[month]} ${year}`}</h2>
              <div onClick={incrementMonthAction}>
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
                      {calendarData.map((row, index) => (
                          <tr key={index}>
                              {row.map((date, index) => (
                              <td key={index} onClick={() => {getSchduleDate(date)}} style={{backgroundColor:selected?.date==date && selected?.month == months[month] && selected?.year == year ? "yellow" : '#444444' }}>{date !== 0 ? date : ""}</td>
                              ))}
                          </tr>
                      ))}
                      </tbody>
                  </table>
              </div>
          </div>
          <div className={styles.selectTimeMain}>
          <div className={styles.selectTime}>
            <div className={styles.selectTimeContent}>
              <h4>Select Time</h4>
              <span>
                Your time <br /> zone is UTC+{uts}
              </span>
            </div>
            <div className={styles.selectTimeInput}>
              <input type="text" placeholder="00" maxLength="2" value={hour} onChange={hourChangeHandler}/>
              <span className={styles.secondsDots}> : </span>
              <input type="text" placeholder="00" maxLength="2" value={minutes} onChange={minutesChangeHandler} />
            </div>
          </div>
          <div className={styles.applyButton}>
            <button onClick={schduledDataAnTime}>Apply</button>
          </div>
        </div>
      </div>
  )
}

export default Calendar