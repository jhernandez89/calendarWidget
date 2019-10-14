import React from "react";
import { Calendar } from "react-calendar";

const Accruals = () => {
  const handleChange = date => {
    console.log("date!", date);
  };

  return (
    <div>
      <Calendar onChange={date => handleChange(date)} />
    </div>
  );
};

export default Accruals;
