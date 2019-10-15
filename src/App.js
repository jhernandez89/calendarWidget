import React from "react";
import "./App.css";
import Accruals from "./Body/Accruals/Accruals.js";

const type = {
  day: 0,
  week: 1,
  month: 2,
  year: 3
};

const frequency = 7;

const dayOfWeek = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6
};

const dayOfTheMonth = 15;

const hoursToAdd = 8;

const currentNumberOfHours = 14.6;

const startingDay = new Date("April 15 2016");

function App() {
  return (
    <div className="App">
      <Accruals
        type={type.month}
        frequency={frequency}
        dayOfWeek={dayOfWeek.friday}
        startingDay={startingDay}
        currentNumberOfHours={currentNumberOfHours}
        hoursToAdd={hoursToAdd}
        dayOfTheMonth={dayOfTheMonth}
      />
    </div>
  );
}

export default App;
