import React, { useState } from "react";
import "./datePicker1.css"

function DatePicker1() {
  const today = new Date();

  const [date, changeDate] = useState(today.getDate());
  const [month, changeMonth] = useState(today.getMonth() + 1);
  const [year, changeYear] = useState(today.getFullYear());
  const [inputDate, changeInputDate] = useState(today.getDate());
  const [inputMonth, changeInputMonth] = useState(today.getMonth() + 1);
  const [inputYear, changeInputYear] = useState(today.getFullYear());

  return (
    <div className="DatePicker1">
      <h3>date picker</h3>
      <div className="demo1">
        <input/>
      </div>
    </div>
  )
}

export default DatePicker1;