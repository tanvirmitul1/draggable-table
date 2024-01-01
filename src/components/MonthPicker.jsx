import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MonthSelector = () => {
    const [startDate, setStartDate] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState('');

    const handleMonthChange = (date) => {
        if (date) {
            const startMonth = date.toLocaleString('en-US', { month: 'long' });
            const nextMonth = new Date(date);
            nextMonth.setMonth(nextMonth.getMonth() + 1);
            const endMonth = nextMonth.toLocaleString('en-US', { month: 'long' });
            const year = date.getFullYear();

            setSelectedMonth(`${startMonth} ${year} to ${endMonth} ${year}`);
        } else {
            setSelectedMonth('');
        }

        setStartDate(date);
    };

    return (
        <div style={{ position: 'relative', zIndex: 1000,display:"flex" ,gap:"10px" }}>
            <button onClick={() => setStartDate(new Date())}>Show Month</button>
            {startDate && (
                <DatePicker
                    selected={startDate}
                    onChange={handleMonthChange}
                    showMonthYearPicker
                    dateFormat="MM/yyyy"
                    popperPlacement="top"
                />
            )}
            {selectedMonth && <div>{selectedMonth}</div>}
        </div>
    );
};

export default MonthSelector;
