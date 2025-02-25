import React, { useState } from 'react';
import { TimePicker } from 'antd/dist/antd';
import moment from 'moment';

const TimePickerComponent = ({ onTimeSelect }) => {
  const [time, setTime] = useState(null);

  const disabledTime = () => {
    const startHour = 9; // 9:00 AM
    const endHour = 20;   // 8:00 PM
    const disabledHours = [];
    const disabledMinutes = [];
    
    for (let i = 0; i < 24; i++) {
      if (i < startHour || i > endHour) {
        disabledHours.push(i);
      }
    }

    for (let i = 0; i < 60; i++) {
      if (i % 30 !== 0) {
        disabledMinutes.push(i);
      }
    }

    return {
      disabledHours: () => disabledHours,
      disabledMinutes: () => disabledMinutes,
    };
  };

  const handleTimeChange = (value) => {
    setTime(value);
    if (onTimeSelect) {
      onTimeSelect(value ? value.format('HH:mm') : null); // Format time for the database
    }
  };

  return (
    <div>
      <TimePicker
        format="hh:mm A"
        value={time}
        onChange={handleTimeChange}
        showNow={false}
        disabledTime={disabledTime}
        minuteStep={30}
        use12Hours
        placeholder="Select time"
      />
    </div>
  );
};

export default TimePickerComponent;
