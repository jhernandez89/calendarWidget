import React, { useState } from "react";
import { Calendar } from "react-calendar";
import moment from 'moment';

const weeksBetween = (d1, d2) => {
  return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
};

const monthsBetween = (d1, d2) => {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
};

const Accruals = ({
  type,
  frequency,
  dayOfWeek,
  startingDay,
  hoursToAdd,
  currentNumberOfHours,
  dayOfTheMonth
}) => {
  const [result, setResult] = useState(0);
  const handleMonth = date => {
    const daysInMonth = (month, year) => {
      return new Date(year, month, 0).getDate();
    }
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const day = dayOfTheMonth;
    const daysSelectedForVacation = [];
    let i = 0;
    do {
      daysSelectedForVacation.push(new Date(year, month -1, day));
      i++;
    } while (daysSelectedForVacation.length < day.length);

    daysSelectedForVacation.forEach(() => {
      // calculateHours();
      console.log(hoursToAdd);
    })
  };
    const handleChange = date => {
      switch (true) {
        case type === 0:
          // handleDay();
          break;
        case type === 1:
          // handleWeek(date);
          break;
        case type === 2:
          handleMonth(date)
          break;
        case type === 3:
          // handleYear();
          break;
        default:
          console.log("noooo");
      }
    };

    return (
      <div>
        <Calendar onChange={date => handleChange(date)} />
        <h3>{result}</h3>
      </div>
    );
  };

  export default Accruals;
