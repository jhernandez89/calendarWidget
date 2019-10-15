import React, { useState } from "react";
import { Calendar } from "react-calendar";

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
    const today = new Date(Date.now());
    const numberOfMonths = monthsBetween(today, date);
    if (today.getDate() >= dayOfTheMonth) {
      if (date.getDate() >= dayOfTheMonth) {
        return numberOfMonths;
      } else {
        return numberOfMonths - 1;
      }
    } else {
      if (date.getDate() >= dayOfTheMonth) {
        return numberOfMonths + 1;
      } else {
        return numberOfMonths;
      }
    }
  };

  const handleWeek = date => {
    const numberOfWeeksBetween = weeksBetween(new Date(Date.now()), date);
    const weeksBetweenStartingDayAndToday = weeksBetween(startingDay, date);
    console.log("date", weeksBetweenStartingDayAndToday / frequency);
  };

  const handleChange = date => {
    switch (true) {
      case type === 0:
        // handleDay();
        break;
      case type === 1:
        handleWeek(date);
        break;
      case type === 2:
        setResult(handleMonth(date) * hoursToAdd);
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
