import React from "react";
import "./TaxHistoryWidget.css";

const TaxHistoryWidget = () => {
  const taxHistory = [
    { year: 2020, date: "2021-04-15", amount: 5000, status: "Paid", method: "Credit Card", notes: "N/A" },
    { year: 2021, date: "2022-04-20", amount: 6000, status: "Paid", method: "Bank Transfer", notes: "N/A" },
    { year: 2022, date: "2023-04-18", amount: 7000, status: "Due", method: "Check", notes: "Pending" },
  ];

  return (
    <div className="widget-container">
      <header className="widget-header">
        <h1>Tax Payment History</h1>
        <p>Overview of your recent tax payments</p>
      </header>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Payment Date</th>
              <th>Amount Paid</th>
              <th>Status</th>
              <th>Payment Method</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {taxHistory.map((entry, index) => (
              <tr key={index} className="row-item">
                <td>{entry.year}</td>
                <td>{entry.date}</td>
                <td>${entry.amount}</td>
                <td className={entry.status.toLowerCase() === "paid" ? "status-paid" : "status-due"}>
                  {entry.status}
                </td>
                <td>{entry.method}</td>
                <td>{entry.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaxHistoryWidget;
