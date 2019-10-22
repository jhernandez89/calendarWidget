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

  // const handleMonth = date => {
  //   const today = new Date(Date.now());
  //   const numberOfMonths = monthsBetween(today, date);
  //   if (today.getDate() >= dayOfTheMonth) {
  //     if (date.getDate() >= dayOfTheMonth) {
  //       return numberOfMonths;
  //     } else {
  //       return numberOfMonths - 1;
  //     }
  //   } else {
  //     if (date.getDate() >= dayOfTheMonth) {
  //       return numberOfMonths + 1;
  //     } else {
  //       return numberOfMonths;
  //     }
  //   }
  // };



  const handleMonth = date => {
    const daysInMonth = (month, year) => {
      return new Date(year, month, 0).getDate();
    }
    const month = date.getMonth() + 1;
    const day = [];
    const year = date.getFullYear();
    

    const firstVacationHoursOfTheMonth = Math.floor(daysInMonth(month, year) / 2);//set the month and year to be where the user clicks                              
    const secondVacationHoursOfTheMonth = daysInMonth(month, year); //set the month and year to be where the user clicks 
    const selectedDaysToAddHours = [
      new Date('Oct ' + firstVacationHoursOfTheMonth + ' 2019'),
      new Date('Oct ' + secondVacationHoursOfTheMonth + ' 2019')
    ]
    
    selectedDaysToAddHours.forEach((day, i) => {
      if (date.getTime() === selectedDaysToAddHours[i].getTime()) {
        //add hours of vacation 
        console.log(hoursToAdd);
        console.log(month)
        console.log(year)
        console.log(date)
      }
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
        // console.log(moment())
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
