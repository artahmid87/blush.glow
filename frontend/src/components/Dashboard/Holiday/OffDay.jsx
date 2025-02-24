import React, { useState, useRef } from 'react';
import { DatePicker } from 'antd';
import { BookingTime } from '@/components/ui/data';
import moment from 'moment';
import { useCreateHolidayMutation } from '@/redux/api/Api';
import { toast } from 'react-toastify';
import Container from '@/components/ui/Container';

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
        fromDate: fromDate ? moment(fromDate).format('YYYY-MM-DD') : null,
        toDate: toDate ? moment(toDate).format('YYYY-MM-DD') : null,
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
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
        {/* Date Pickers */}
        <div className="w-full py-2">
          <h1>From</h1>
          <DatePicker
            format="YYYY-MM-DD"
            disabledDate={(current) => moment().add(-1, 'days') >= current}
            className="py-4 px-5 w-full border-b border-primary outline-none"
            value={fromDate ? moment(fromDate) : null}
            onChange={(date) => setFromDate(date)}
            required
          />
        </div>

        <div className="w-full py-2">
          <h1>To</h1>
          <DatePicker
            format="YYYY-MM-DD"
            disabledDate={(current) => moment().add(-1, 'days') >= current}
            className="py-4 px-5 w-full border-b border-primary outline-none"
            value={toDate ? moment(toDate) : null}
            onChange={(date) => setToDate(date)}
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
        {/* Time Pickers */}
        <div className="w-full py-2">
          <h1>From</h1>
          <select
            className="py-4 px-5 w-full border-b border-primary text-secondery outline-none"
            value={fromTime}
            onChange={(e) => setFromTime(e.target.value)}
            required
          >
            <option value={""}>Select Time</option>
            {BookingTime?.map((time, i) => (
              <option key={i} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full py-2">
          <h1>To</h1>
          <select
            className="py-4 px-5 w-full border-b border-primary text-secondery outline-none"
            value={toTime}
            onChange={(e) => setToTime(e.target.value)}
            required
          >
            <option value={""}>Select Time</option>
            {BookingTime?.map((time, i) => (
              <option key={i} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : "Submit"}
        </button>
      </div>
    </form>
    </Container>
   </div>
  );
};

export default Form;
