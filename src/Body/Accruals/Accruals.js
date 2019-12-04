import React, { useState } from "react";
import { Calendar } from "react-calendar";
import moment from "moment";

const add = (num, month) => {
  return (month += num);
};
const subtract = (num, month) => {
  return (month -= num);
};
const weeksBetween = (d1, d2) => {
  return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
};

const monthsBetween = (d1, d2) => {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
};

const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const getWeeksInMonth = (month, year) => {
  let weeks = [],
    firstDate = new Date(year, month),
    numDays = daysInMonth(month, year);

  let start = 1,
    end = 7 - firstDate.getDay();

  while (start <= numDays) {
    weeks.push({
      start: new Date(year, month, start),
      end: new Date(year, month, end)
    });
    start = end + 1;
    end = end + 7;
    if (end > numDays) end = numDays;
  }
  return weeks;
};

const Accruals = ({
  unit,
  frequency,
  dayOfWeek,
  startingDay,
  hoursToAdd,
  currentNumberOfHours,
  dayOfTheMonth,
  monthsOfTheYear,
  totalHoursOfVacationAYear,
  currentAccumulativeHours
}) => {
  const [result, setResult] = useState(0);

  const setDay = date => {
    let month = date.getMonth(),
      datesToAddVacationHours = [];
    date.setDate(1);
    while (date.getDay() !== dayOfWeek) {
      date.setDate(date.getDate() + 1);
    }
    while (date.getMonth() === month) {
      datesToAddVacationHours.push(new Date(date.getTime()));
      date.setDate(date.getDate() + 7);
    }
    //addHoursToDates(datesToAddVacationHours)
  };

  const setWeek = date => {
    let month = date.getMonth(),
      year = date.getFullYear();
    const arrayOfWeeks = getWeeksInMonth(month, year),
      datesToAddVacationHours = arrayOfWeeks.filter((week, i) => {
        if (frequency - 1 === i) {
          return arrayOfWeeks[frequency - 1];
        }
      });
    //addHoursToDates(datesToAddVacationHours)
  };

  const setMonth = (date, month, year, day) => {
    //factor totalHoursOfVacation for that year
    const datesSelectedForVacation = [];
    let i = 0;
    do {
      datesSelectedForVacation.push(new Date(year, month, day[i]));
      i++;
    } while (datesSelectedForVacation.length < day.length);
    //addHoursToDates(daysToAddVacationHours)
  };

  const setYear = date => {
    let year = date.getFullYear();
    let datesToAddVacationHours;
    monthsOfTheYear.forEach(() => {
      datesToAddVacationHours = monthsOfTheYear.filter((monthString, i) => {
        if (frequency - 1 === i) {
          return new Date(year, monthsOfTheYear[i], 0);
        }
      });
    });
    console.log(datesToAddVacationHours);
    //addHoursToDates(datesToAddVacationHours)
  };

  const handleChange = date => {
    const month = date.getMonth();
    const day = dayOfTheMonth;
    const year = date.getFullYear();
    switch (true) {
      case unit === 0:
        setDay(date, month);
        break;
      case unit === 1:
        setWeek(date, month, year);
        break;
      case unit === 2:
        setMonth(date, month, year, day);
        break;
      case unit === 3:
        setYear(date, year);
        break;
      default:
        console.log("noooo");
    }
  };

  return (
    <div>
      <Calendar onChange={date => handleChange(date)} />
      <h3>{result}</h3>
      <h3>unit:{unit}</h3>
    </div>
  );
};

export default Accruals;
