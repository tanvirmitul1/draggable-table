/* eslint-disable react/prop-types */
import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../styles/DatePicker.module.css";
const MonthSelector = () => {
  const [startDate, setStartDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleMonthChange = (date) => {
    if (date) {
      const startMonth = date.toLocaleString("en-US", { month: "long" });
      const nextMonth = new Date(date);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      const endMonth = nextMonth.toLocaleString("en-US", { month: "long" });
      const year = date.getFullYear();

      setSelectedMonth(
        ` ${startMonth} 15, ${year} to  ${endMonth} 15 , ${year}`
      );

      setShowCalendar((prev) => !prev);
    } else {
      setSelectedMonth("");
    }

    setStartDate(date);
  };

  const handleButtonClick = () => {
    setStartDate(new Date());
  };
  const handleButton2Click = () => {
    setShowCalendar((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      {showCalendar ? (
        <DatePicker
          onClick={() => handleButtonClick()}
          selected={startDate}
          onChange={handleMonthChange}
          showMonthYearPicker
          popperPlacement="top"
          placeholderText="Select Month"
          className={styles.customDatepicker}
        />
      ) : (
        <button
          onClick={() => handleButton2Click()}
          className={styles.customButton}
        >
          Select Month
        </button>
      )}
      {selectedMonth && (
        <div
          style={{
            marginTop: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#1f5a60",
          }}
        >
          {selectedMonth}
        </div>
      )}
    </div>
  );
};

export default MonthSelector;
