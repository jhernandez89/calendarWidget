//1. it should have an object with front end user input data
//2. it should have total hours by current day
//3. it should have predicted hours accumulated between current date and future date clicked
/************************helper function***************************************************************/
const monthsBetween = (d1, d2) => {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
};
const weeksBetween = (d1, d2) => {
  return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
};
/*****************************************************************************************************/
const handleByMonth = (
  currentDate,
  endDate,
  hoursToAdd,
  currentAccumulativeHours
) => {
  const monthsCounted = monthsBetween(currentDate, endDate);
  console.log(monthsCounted * hoursToAdd + currentAccumulativeHours);
  return monthsCounted * hoursToAdd + currentAccumulativeHours;
};

const handleByWeeks = (
  lastPayPeriod,
  frequency,
  hoursToAdd,
  currentAccumulativeHours,
  endDate
) => {
  //frequency is 3
  const weeks = weeksBetween(lastPayPeriod, endDate);
  const payPeriods = Math.floor(weeks / frequency);
  console.log(payPeriods * hoursToAdd);
};

const handleFormData = formData => {
  const unit = formData.units;
  const currentDate = formData.currentDate;
  const endDate = formData.endDate;
  const hoursToAdd = formData.hoursToAdd;
  const currentAccumulativeHours = formData.currentAccumulativeHours;
  const lastPayPeriod = formData.lastPayPeriod;
  const frequency = formData.frequency;

  switch (true) {
    case unit === 0:
      // setDay();
      break;
    case unit === 1:
      handleByWeeks(
        lastPayPeriod,
        frequency,
        hoursToAdd,
        currentAccumulativeHours,
        endDate
      );
      break;
    case unit === 2:
      handleByMonth(currentDate, endDate, hoursToAdd, currentAccumulativeHours);
      break;
    case unit === 3:
      // handleByYear();
      break;
    default:
      console.log("noooo");
  }
};

export default handleFormData;
