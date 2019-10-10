import React, { useState, useEffect } from "react";
import "./datePicker.css"

function DatePicker() {
  const today = new Date();
  const dates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  const [date, changeDate] = useState(today.getDate());
  const [month, changeMonth] = useState(today.getMonth() + 1);
  const [year, changeYear] = useState(today.getFullYear());
  const [inputDate, changeInputDate] = useState(today.getDate());
  const [inputMonth, changeInputMonth] = useState(today.getMonth() + 1);
  const [inputYear, changeInputYear] = useState(today.getFullYear());
  let tbody1 = generateTbody1();
  let tbody2 = generateTbody2();
  let tbody3 = generateTbody3();
  let datePicker;

  function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  }

  function getdateNum(year, month) {
    if(isLeapYear(year) && month === 2) {
      return 29;
    } else {
      return dates[month - 1];
    }
  }

  function generateTbody1() {
    let tbody = [];
    
    let firstDateDay = new Date(year, month - 1, 1).getDay();
    // console.log(firstDateDay)
    let datesShown = [];
    
    let lastMonthDateNum = getdateNum(month === 1 ? year - 1 : year, month === 1 ? 12: month - 1);
    for(let i = lastMonthDateNum - (firstDateDay - 1) + 1; i <= lastMonthDateNum; i++) {
      datesShown.push(
        <td className="lastMonth" onClick={handleClickDate}>
          <span className="date">{i}</span>
        </td>
      )
    }
    for(let i = 1; i <= getdateNum(year, month); i++) {
      if(i === inputDate) {
        datesShown.push(
          <td className="thisMonth" onClick={handleClickDate}>
            <span className="date sameDateWithInput">{i}</span>
          </td>
        )
      } else {
        datesShown.push(
          <td className="thisMonth" onClick={handleClickDate}>
            <span className="date">{i}</span>
          </td>
        )
      }
    }
    for(let i = 1; i <= 42 - getdateNum(year, month) - (firstDateDay - 1); i++) {
      datesShown.push(
        <td className="nextMonth" onClick={handleClickDate}>
          <span className="date">{i}</span>
        </td>
      )
    }
    
    // for(let day of rowContent) {
    //   console.log(day.props.children)
    // }

    for(let i = 0; i < 6; i++) {
      let rowContent = datesShown.slice(i * 7, i * 7 + 7);
      // console.log(rowContent)
      let row = (
        <tr>
          {rowContent}
        </tr>
      );

      tbody.push(row);
    }

    return tbody;
  }
  
  function generateTbody2() {
    let tbody = [];

    let monthsShown = [];
    let nums = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"];
    for(let i = 0; i < 12; i++) {
      if(i + 1 === month) {
        monthsShown.push(
          <td onClick={handleClickMonth} className="thisMonth">
            <span monthid={i + 1}>
              {nums[i] + "月"}
            </span>
          </td>
        )
      } else {
        monthsShown.push(
          <td onClick={handleClickMonth}>
            <span monthid={i + 1}>
              {nums[i] + "月"}
            </span>
          </td>
        )
      }
    }

    for(let i = 0; i < 4; i++) {
      let rowContent = monthsShown.slice(i * 3, i * 3 + 3);
      let row = (
        <tr>
          {rowContent}
        </tr>
      );
      tbody.push(row);
    }

    return tbody;
  }

  function generateTbody3() {
    let tbody = [];
    let yearsShown = [];
    for(let i = -1; i <= 10; i++) {
      if(i === -1) {
        yearsShown.push(
          <td className="lastTenYears" onClick={lastTenYears}>
            <span>{Math.floor(year / 10) * 10 + i}</span>
          </td>
        );
      } else if(i === 10) {
        yearsShown.push(
          <td className="nextTenYears" onClick={nextTenYears}>
            <span>{Math.floor(year / 10) * 10 + i}</span>
          </td>
        );
      } else {
        // console.log(year, Math.floor(year / 10) * 10 + i, Math.floor(year / 10) * 10 + i === year)
        if(Math.floor(year / 10) * 10 + i === year) {
          yearsShown.push(
            <td onClick={handleClickYear} className="thisYear">
              <span yearid={i}>{Math.floor(year / 10) * 10 + i}</span>
            </td>
          );
        } else {
          yearsShown.push(
            <td onClick={handleClickYear}>
              <span yearid={i}>{Math.floor(year / 10) * 10 + i}</span>
            </td>
          );
        }
      }
    }

    for(let i = 0; i < 4; i++) {
      let rowContent = yearsShown.slice(i * 3, i * 3 + 3);
      let row = (
        <tr>
          {rowContent}
        </tr>
      );
      tbody.push(row);
    }

    return tbody;
  }

  useEffect(() => {
    let input = document.getElementsByTagName("INPUT")[0];
    input.value = inputYear + "-" + (inputMonth < 10 ? "0" + inputMonth : inputMonth) + "-" + (inputDate < 10 ? "0" + inputDate : inputDate);
    generateTbody1();
    
    datePicker = document.getElementsByClassName("datePicker")[0];
    if(datePicker) {
      datePicker.addEventListener("click", function(e) {
        let input = document.getElementsByTagName("INPUT")[0];
        let tbody = document.getElementsByTagName("TBODY")[0];
        let pickerFlag = false;
    
        for(let node of e.path) {
          // console.dir(node)
          if(node.classList && node.classList.contains("picker")) {
            pickerFlag = true;
          }
        }
        if((pickerFlag || e.path.indexOf(input) !== -1) && e.path.indexOf(tbody) === -1) {
          input.classList.add("active");
        } else {
          input.classList.remove("active");
        }
      })
    }
  });


  function lastYear() {
    changeYear(year - 1);
  }

  function lastMonth() {
    if(month === 1) {
      changeYear(year - 1);
      changeMonth(12);
    } else {
      changeMonth(month - 1);
    }
  }

  function nextMonth() {
    if(month === 12) {
      changeYear(year + 1);
      changeMonth(1);
    } else {
      changeMonth(month + 1);
    }
  }

  function nextYear() {
    changeYear(year + 1);
  }

  function lastTenYears() {
    changeYear(year - 10);
  }

  function nextTenYears() {
    changeYear(year + 10);
  }

  function handleClickDate(e) {
    e.persist();
    // console.log(e)
    if(e.target.tagName === "SPAN") {
      let tdNode = e.target.parentNode;
      let dateClicked = tdNode.children[0].innerText - 0;
      if(tdNode.classList.contains("thisMonth")) {
        changeDate(dateClicked);
        changeInputDate(dateClicked);
        changeInputMonth(month);
        changeInputYear(year);
      } else if(tdNode.classList.contains("lastMonth")) {
        changeDate(dateClicked);
        changeInputDate(dateClicked);
        if(month === 1) {
          changeMonth(12);
          changeYear(year - 1);
          changeInputMonth(12);
          changeInputYear(year - 1);
        } else {
          changeMonth(month - 1);
          changeInputMonth(month - 1);
          changeInputYear(year);
        }
      } else if(tdNode.classList.contains("nextMonth")) {
        changeDate(dateClicked);
        changeInputDate(dateClicked);
        if(month === 12) {
          changeMonth(1);
          changeYear(year + 1);
          changeInputMonth(1);
          changeInputYear(year + 1);
        } else {
          changeMonth(month + 1);
          changeInputMonth(month + 1);
          changeInputYear(year);
        }
      }
    }
  }

  function selectMonth() {
    let pk2 = document.getElementsByClassName("pk2")[0];
    pk2.classList.add("active");
  }

  function handleClickMonth(e) {
    e.persist();
    let pk2 = document.getElementsByClassName("pk2")[0];
    pk2.classList.remove("active");

    let target = e.target;
    if(e.target.nodeType === "TD") {
      target = target.children[0];
    }

    let monthClicked = target.attributes.monthid.value - 0;
    changeMonth(monthClicked);
  } 

  function selectYear() {
    let pk3 = document.getElementsByClassName("pk3")[0];
    pk3.classList.add("active");
  }

  function handleClickYear(e) {
    e.persist();
    let pk3 = document.getElementsByClassName("pk3")[0];
    pk3.classList.remove("active");
    
    let target = e.target;
    if(e.target.nodeType === "TD") {
      target = target.children[0];
    }

    let yearClicked = target.attributes.yearid.value - 0 + Math.floor(year / 10) * 10;
    changeYear(yearClicked);
  }

  return (
    <div className="datePicker">
      <h3>date picker</h3>
      <div className="demo1 demo">
        <input/>
        <div className="picker pk1 active">
          <div className="top">
            <button className="lastYear" onClick={lastYear}>&lt;&lt;</button>
            <button className="lastMonth" onClick={lastMonth}>&lt;</button>
            <span className="year" onClick={selectYear}>{year}年</span>
            <span className="month" onClick={selectMonth}>{month < 10 ? "0" + month : month}月</span>
            <button className="nextMonth" onClick={nextMonth}>&gt;</button>
            <button className="nextYear" onClick={nextYear}>&gt;&gt;</button>
          </div>
          <div className="middle">
            <table>
              <thead>
                <tr>
                  <th>一</th>
                  <th>二</th>
                  <th>三</th>
                  <th>四</th>
                  <th>五</th>
                  <th>六</th>
                  <th>日</th>
                </tr>
              </thead>
              <tbody>
               {tbody1}
              </tbody>
            </table>
          </div>
        </div>
        <div className="picker pk2">
          <div className="top">
            <button onClick={lastYear}>&lt;&lt;</button>
            <span>{year}</span>
            <button onClick={nextYear}>&gt;&gt;</button>
          </div>
          <div className="middle">
            <table>
              <tbody>
                {tbody2}
              </tbody>
            </table>
          </div>
        </div>
        <div className="picker pk3">
          <div className="top">
            <button onClick={lastTenYears}>&lt;&lt;</button>
            <span>{Math.floor(year / 10) * 10} - {Math.floor(year / 10) * 10 + 9}</span>
            <button onClick={nextTenYears}>&gt;&gt;</button>
          </div>
          <div className="middle">
            <table>
              <tbody>
                {tbody3}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DatePicker;