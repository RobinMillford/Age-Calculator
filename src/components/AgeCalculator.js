// src/components/AgeCalculator.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; // Import DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker CSS
import './AgeCalculator.css';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState(null); // Use null as initial date
  const [age, setAge] = useState('');

  const calculateAge = () => {
    if (!birthDate) {
      alert('Please select or enter a valid date of birth.');
      return;
    }

    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));

    setAge(ageInYears);
  };

  return (
    <div className="age-calculator">
      <h2>Age Calculator</h2>
      <div>
        <label>Select or enter your date of birth</label>
        <div>
          <DatePicker // Use DatePicker component
            selected={birthDate}
            onChange={(date) => setBirthDate(date)}
            dateFormat="dd-MM-yyyy"
            showYearDropdown // Show the year dropdown
            scrollableYearDropdown // Make year dropdown scrollable
            yearDropdownItemNumber={100} // Show a large range of years
          />
        </div>
      </div>
      <button className="calculate-button" onClick={calculateAge}>Calculate Age</button>
      {age && <p>Your are {age} years old</p>}
    </div>
  );
};

export default AgeCalculator;

