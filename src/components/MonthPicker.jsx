import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../styles/DatePicker.module.css";
const MonthSelector = () => {
  const [startDate, setStartDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

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
    } else {
      setSelectedMonth("");
    }

    setStartDate(date);
  };

  return (
    <div style={{ zIndex: 100, display: "flex", gap: "10px" }}>
      <button
        onClick={() => setStartDate(new Date())}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          padding: "10px",
          fontSize: "16px",
          backgroundColor: hovered ? "white" : "#387E85",
          color: hovered ? "#387E85" : "white",
          cursor: "pointer",
          border: `1px solid ${hovered ? "#387E85" : "none"}`,
          outline: "none",
          borderRadius: "5px",

          transition: "background-color 0.3s ease-in",
        }}
      >
        Show Month
      </button>

      {startDate && (
        <DatePicker
          selected={startDate}
          onChange={handleMonthChange}
          showMonthYearPicker
          dateFormat="MM/yyyy"
          popperPlacement="top"
          className={styles.customDatepicker}
        />
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
