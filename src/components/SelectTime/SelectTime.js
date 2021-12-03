import React from "react";
import styles from '../SelectTime/SelectTime.module.css'
const SelectTime = () => {
  return (
    <div className={styles.selectTime}>
      <div className={styles.selectTimeContent}>
        <h4>Select Time</h4>
        <span>Your time <br/> zone is UTC+4</span>
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
