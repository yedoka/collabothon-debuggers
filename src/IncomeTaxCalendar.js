import React, { useState } from 'react';

const IncomeTaxCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const today = new Date(); // Get today's date dynamically
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];
                        
    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; // Array for the week days

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const handlePreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(month, year);
    const prevDaysInMonth = getDaysInMonth(month - 1, year); // Days in the previous month
    const firstDayOfCurrentMonth = new Date(year, month, 1).getDay(); // Day of the week for the first day

    // Sample data for the calendar (replace with actual data)
    const data = [
        { date: '1', income: 1000, tax: 100 },
        { date: '2', income: 1200, tax: 150 },
        { date: '3', income: 800, tax: 80 },
        { date: '4', income: 1500, tax: 200 },
        { date: '5', income: 1300, tax: 120 },
        { date: '6', income: 900, tax: 90 },
        { date: '7', income: 1100, tax: 110 },
        { date: '8', income: 1400, tax: 180 },
        { date: '9', income: 1250, tax: 160 },
        { date: '10', income: 1600, tax: 210 },
        { date: '11', income: 950, tax: 95 },
        { date: '12', income: 1300, tax: 130 },
        { date: '13', income: 1750, tax: 230 },
        { date: '14', income: 1250, tax: 155 },
        { date: '15', income: 900, tax: 90 },
        { date: '16', income: 1150, tax: 110 },
        { date: '17', income: 1450, tax: 190 },
        { date: '18', income: 1100, tax: 100 },
        { date: '19', income: 1350, tax: 160 },
        { date: '20', income: 1600, tax: 210 },
        { date: '21', income: 1300, tax: 150 },
        { date: '22', income: 1400, tax: 170 },
        { date: '23', income: 1500, tax: 200 },
        { date: '24', income: 1250, tax: 155 },
        { date: '25', income: 1100, tax: 130 },
        { date: '26', income: 950, tax: 100 },
        { date: '27', income: 1300, tax: 150 },
        { date: '28', income: 800, tax: 90 },
        { date: '29', income: 1600, tax: 220 },
        { date: '30', income: 1750, tax: 250 },
        { date: '31', income: 1500, tax: 200 },
    ];
    
    const totalCells = (() => {
        const monthDays = getDaysInMonth(month, year); // Get days in the current month
        const startingDay = new Date(year, month, 1).getDay(); // Day of the week for the first day of the month
    
        // Calculate the total cells needed
        if (monthDays >= 30 && startingDay === 6) {
            return 42; 
        }
        return 35; // For months that need regular coverage, return 35
    })();

    // Create an array for the calendar, filling in empty days
    const calendar = Array.from({ length: totalCells }, (_, i) => {
        const dayIndex = i - firstDayOfCurrentMonth; // Adjust for the starting day of the current month
        if (dayIndex < 0) {
            // Previous month days
            const prevMonthDay = prevDaysInMonth + dayIndex + 1; // Calculate previous month day
            return { date: prevMonthDay, income: '', tax: '', isCurrentMonth: false }; // Non-current month days
        } else if (dayIndex < daysInMonth) {
            // Current month days
            const dayData = data[dayIndex];

            // Check if the current month is greater or less than the displayed month
            if (
                year < today.getFullYear() || // Check if the year is in the past
                (year === today.getFullYear() && month < today.getMonth()) || // Check if the month is before the current month of the same year
                (year === today.getFullYear() && month === today.getMonth() && dayIndex + 1 <= today.getDate() - 1) // Check if it's the current month and the day is in the past
            ) {
                // Show data for past or current day (if today)
                return {
                    ...dayData,
                    isCurrentMonth: true
                };
            } else if (month > today.getMonth()) {
                // Future month - don't show income/tax
                return {
                    date: dayIndex + 1,
                    income: '',
                    tax: '',
                    isCurrentMonth: true
                };
            } else {
                // Show future days of the current month with no data
                return {
                    date: dayIndex + 1,
                    income: '',
                    tax: '',
                    isCurrentMonth: true
                };
            }
        } else {
            // Next month days
            const nextMonthDay = dayIndex - daysInMonth + 1; // Calculate next month day
            return { date: nextMonthDay, income: '', tax: '', isCurrentMonth: false }; // Non-current month days
        }
    });

    return (
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 max-w-xl mx-auto">
            <div className="flex justify-between items-center text-gray-800 mb-2">
                <button className="bg-orange-500 text-white rounded-lg w-8 h-8 flex justify-center items-center hover:bg-orange-400 transition-colors" onClick={handlePreviousMonth}>
                    ◀
                </button>
                <h2 className="text-black">{monthNames[month]} {year}</h2>
                <button className="bg-orange-500 text-white rounded-lg w-8 h-8 flex justify-center items-center hover:bg-orange-400 transition-colors" onClick={handleNextMonth}>
                    ▶
                </button>
            </div>
            <div className="text-gray-800 mb-2">
                <p>Income is <span className="text-green-500">green</span> and taxes are <span className="text-red-500">red</span>.</p>
            </div>
            <div className="grid grid-cols-7 mb-2">
                {weekDays.map((day, index) => (
                    <div key={index} className="text-center text-gray-800 font-bold">{day}</div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
                {calendar.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col justify-center items-center h-18 w-18 p-1 shadow-md transition-colors rounded-md
                        ${!item.isCurrentMonth ? 'bg-gray-300 text-black' : 'bg-white text-black'} // Grey background and dark grey text for non-current month
                        ${item.date == today.getDate() && month == today.getMonth() ? 'bg-gray-400 text-black' : ''} // Highlight for today's date
                        ${item.date < today.getDate() && month === today.getMonth() ? 'bg-gray-200 text-black' : ''} // Past days styling
                        ${item.date > today.getDate() && month === today.getMonth() ? 'bg-orange-100 text-black' : ''}`} // Future days styling
                        style={{
                            height: '70px', // Adjust the height for tiles
                            width: '70px', // Adjust the width for tiles
                        }}
                    >
                        {item.date && (
                            <>
                                <div className={`text-green-500 font-bold text-xs ${!item.isCurrentMonth ? 'text-gray-600' : ''}`}>{item.income}</div> {/* Income styling */}
                                <div className={`font-bold ${!item.isCurrentMonth ? 'text-gray-600' : 'text-black'}`}>{item.date}</div> {/* Date styling */}
                                <div className={`text-red-500 font-bold text-xs ${!item.isCurrentMonth ? 'text-gray-600' : ''}`}>{item.tax}</div> {/* Tax styling */}
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IncomeTaxCalendar;
