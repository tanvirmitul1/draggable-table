import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MonthSelector = () => {
  const [startDate, setStartDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
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

      setShowCalendar(false);
    } else {
      setSelectedMonth("");
    }

    setStartDate(date);
  };

  const handleButtonClick = () => {
    setShowCalendar(!showCalendar);
    setStartDate(new Date());
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        position: "relative",
      }}
    >
      <button
        onClick={handleButtonClick}
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
          height: "40px", // Set a fixed height for the button
          transition: "background-color 0.3s ease-in",
        }}
      >
        Show Month
      </button>

      {showCalendar && (
        <div style={{ position: "absolute", zIndex: 10000, left: "120px" }}>
          <DatePicker
            selected={startDate}
            onChange={handleMonthChange}
            showMonthYearPicker
            placeholderText="Select a weekday"
            inline
          />
        </div>
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
