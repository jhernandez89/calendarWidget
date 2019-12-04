import React, { useState } from "react";
import Calendar from "react-calendar";
import { Form, Row, Col } from "react-bootstrap";
import handleFormData from "./unlimitedPTOpolicylogic.js";
import moment from "moment";

const units = {
  day: 0,
  week: 1,
  month: 2,
  year: 3
};

const monthsOfTheYear = [
  "january",
  "feburary",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december"
];

const dayOfWeek = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6
};

const UnlimitedPTOPolicy = props => {
  const [selectedFirstDate, setSelectedFirstDate] = useState(
    new Date(Date.now())
  );
  const [selectedSecondDate, setSelectedSecondDate] = useState(
    new Date(Date.now())
  );

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = {
      firstName: data.get("first_name"),
      lastName: data.get("last_name"),
      employeeStatus: data.get("employee_status"),
      typeOfLeave: data.get("type_of_leave"),
      currentDate: new Date(data.get("first_date")),
      endDate: new Date(data.get("second_date")),
      comments: data.get("comments"),
      units: units.day,
      daysOfMonth: [1],
      currentAccumulativeHours: 20,
      hoursToAdd: 3,
      currentAccumulativeHours: 15,
      startingDay: new Date("April 15 2016"),
      lastPayPeriod: new Date("Dec 2 2019"),
      frequency: 3,
      totalHoursOfVacationAYear: 80
    };

    handleFormData(formData);
  };
  //These function are to input dates in the form
  const changeFirstDate = date => {
    setSelectedFirstDate(date);
  };

  const changeSecondDate = date => {
    setSelectedSecondDate(date);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Control name="first_name" placeholder="First name" />
          </Col>
          <Col>
            <Form.Control name="last_name" placeholder="Last name" />
          </Col>
        </Row>
        <Form.Group>
          <Form.Label name="employee_status">Employee status</Form.Label>
          <Form.Control
            as="select"
            defaultValue="select_one"
            name="employee_status"
          >
            <option value="select_one" disabled>
              select one
            </option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Contractor</option>
            <option>Temporary</option>
            <option>Seasonal</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Type of Leave</Form.Label>
          <Form.Control
            as="select"
            defaultValue="select_one"
            name="type_of_leave"
          >
            <option value="select_one" disabled>
              select one
            </option>
            <option>vacation</option>
            <option>sick leave</option>
            <option>personal time</option>
            <option>holidays</option>
            <option>bereavement</option>
            <option>parental leave</option>
            <option>jury duty</option>
            <option>voting time</option>
            <option>military leave</option>
            <option>compensatory time</option>
          </Form.Control>

          <Calendar onChange={changeFirstDate} />
          <Calendar onChange={changeSecondDate} />
        </Form.Group>
        <input type="text" name="first_date" value={selectedFirstDate} />
        to
        <input type="text" name="second_date" value={selectedSecondDate} />
        <Form.Group>
          <textarea
            name="comments"
            placeholder="Place comments here ..."
            cols={40}
            rows={10}
          />
        </Form.Group>
        <input type="submit" value="Submit" />
      </Form>
    </div>
  );
};

export default UnlimitedPTOPolicy;
