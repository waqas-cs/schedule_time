import React from "react";
import styles from '../SelectTime/SelectTime.module.css'
const SelectTime = () => {
  const d = new Date();
  let diff = d.getTimezoneOffset();
  diff = diff * -1 // convert negative to postive
  diff = diff / 60 //covert minutes to hours

  console.log('diff',diff)
  return (
    <div className={styles.selectTime}>
      <div className={styles.selectTimeContent}>
        <h4>Select Time</h4>
        <span>Your time <br/> zone is UTC+{diff}</span>
      </div>
      <div className={styles.selectTimeInput}>
        <input type="text" placeholder="00" maxLength="2"/>
        <span className={styles.secondsDots}> : </span> 
        <input type="text" placeholder="00" maxLength="2"/>
      </div>
    </div>
  );
};

export default SelectTime;
