import React, { useState, useRef } from 'react';
import { DatePicker, TimePicker } from 'antd';
import { BookingTime } from '@/components/ui/data';
import dayjs from 'dayjs';
import { useCreateHolidayMutation } from '@/redux/api/Api';
import { toast } from 'react-toastify';
import Container from '@/components/ui/Container';
const format = 'HH:mm';

const Form = () => {
  const [name, setName] = useState('');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const formRef = useRef();

  const [holiday, { isLoading }] = useCreateHolidayMutation();

  const handleHoliday = async (e) => {
    e.preventDefault();

    try {
      await holiday({
        name,
        fromDate: fromDate ? fromDate.format('YYYY-MM-DD') : null,
        toDate: toDate ? toDate.format('YYYY-MM-DD') : null,
        fromTime,
        toTime,
      }).unwrap();

      formRef.current.reset();
      setName('');
      setFromDate(null);
      setToDate(null);
      setFromTime('');
      setToTime('');

      toast.success('Holiday has been set', {
        position: "bottom-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      console.error('Holiday set failed', err);
      toast.error('Failed to set holiday');
    }
  };


  const disabledTime = () => {
    const startHour = 9;
    const endHour = 20;
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

  const FromTimeCollec = (time, timeString) => {
    setFromTime(timeString);
  };
  const ToTimeCollec = (time, timeString) => {
    setToTime(timeString);
  };

  return (
    <div>
      <Container>
        <h1 className='bg-primary py-2 text-center text-white text-2xl font-bold'>Holiday</h1>
        <form ref={formRef} onSubmit={handleHoliday} className='py-6'>
          <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
            {/* Name */}
            <div className="w-full py-2">
              <input
                type="text"
                placeholder="Holiday Name"
                className="py-4 px-5 w-full border-b border-primary"
                value={name}
                onChange={(e) => setName(e.target.value)}

              />
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
            {/* Date Pickers */}
            <div className="w-full py-2">
              <h1>From</h1>
              <DatePicker
                format="DD-MM-YYYY"
                className="py-4 px-5 w-full border-b border-primary outline-none"
                value={fromDate}
                onChange={(date) => setFromDate(date)}

              />
            </div>

            <div className="w-full py-2">
              <h1>To</h1>
              <DatePicker
                format="DD-MM-YYYY"

                className="py-4 px-5 w-full border-b border-primary outline-none"
                value={toDate}
                onChange={(date) => setToDate(date)}

              />
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
            {/* Time Pickers */}
            <div className="w-full py-2">
              <h1>From</h1>
              <TimePicker
                format="hh:mm A"
                value={fromTime ? dayjs(fromTime, 'HH:mm') : null}
                onChange={FromTimeCollec}
                showNow={false}
                disabledTime={disabledTime}
                minuteStep={30}
                className="py-4 px-5 w-full border-b border-primary outline-none"
                use12Hours
                placeholder="Select time"
              />
            </div>

            <div className="w-full py-2">
              <h1>To</h1>
              <TimePicker
                format="hh:mm A"
                value={toTime ? dayjs(toTime, 'HH:mm') : null}
                onChange={ToTimeCollec}
                showNow={false}
                disabledTime={disabledTime}
                minuteStep={30}
                className="py-4 px-5 w-full border-b border-primary outline-none"
                use12Hours
                placeholder="Select time"
              />
            </div>
          </div>

          
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="py-2 px-4 bg-primary text-white rounded-md"
            >
              {isLoading ? "Saving..." : "Submit"}
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Form;
