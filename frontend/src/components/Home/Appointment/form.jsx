import React, { useState, useEffect, useRef } from 'react';
import { DatePicker, TimePicker } from 'antd';
import { useCreateBookingMutation, useFindAllCategoriesQuery, useFindAllPriceQuery, useGetAllHolidayQuery } from '@/redux/api/Api';
import { LoadingButton, BookingButton } from './BookingButton';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [selectedCategoryPrices, setSelectedCategoryPrices] = useState([]);
  const formRef = useRef();

  const { data: categories } = useFindAllCategoriesQuery();
  const { data: prices } = useFindAllPriceQuery();
  const { data: holiday } = useGetAllHolidayQuery();

  const [fromHolidayDate, setFromHolidayDate] = useState([]);
const [toHolidayDate, setToHolidayDate] = useState([]);

// Fetching holiday dates
useEffect(() => {
  if (holiday) {
    const fromDates = holiday.map(date => date?.fromDate ? dayjs(date?.fromDate) : null).filter(Boolean);  // Handle undefined or null dates
    const toDates = holiday.map(date => date?.toDate ? dayjs(date?.toDate) : null).filter(Boolean);  // Handle undefined or null dates
    setFromHolidayDate(fromDates);
    setToHolidayDate(toDates);
  }
}, [holiday]);

// Create an array of date ranges
const disabledDateRanges = fromHolidayDate.length > 0 && toHolidayDate.length > 0
  ? fromHolidayDate.map((start, index) => ({
      start: start,
      end: toHolidayDate[index],
  }))
  : [];  // Ensure this array is only populated when the holiday data is valid

// Disable function
const disabledDate = (current) => {
  const isInDisabledRange = disabledDateRanges.some((range) =>
    current.isBetween(range.start, range.end, 'day', '[]')
  );
  const isPastDate = current && current.isBefore(dayjs().startOf('day'));

  return isInDisabledRange || isPastDate;
};


  const disabledTime = () => {
    const startHour = 9; // 9:00 AM
    const endHour = 20;   // 8:00 PM
    const disabledHours = [];

    for (let i = 0; i < 24; i++) {
      if (i < startHour || i > endHour) {
        disabledHours.push(i);
      }
    }

    return {
      disabledHours: () => disabledHours,
    };
  };

  const dateColllect = (_, dateString) => {
    setDate(dateString);
  };

  const TimeColllect = (_, timeString) => {
    setTime(timeString);
  };

  const [booking, { isLoading }] = useCreateBookingMutation();

  const handleAppoinment = async (e) => {
    e.preventDefault();
    const selectedPrice = prices?.find(p => p.id === Number(price));
    const priceTitle = selectedPrice ? selectedPrice.title : '';
    try {
      await booking({
        name,
        email,
        phone,
        price: priceTitle,
        date,
        time,
        description
      }).unwrap();

      formRef.current.reset();

      toast.success('You will receive a confirmation Email!', {
        position: "bottom-right",
        autoClose: 8000,
        theme: "light",
      });
    } catch (err) {
      console.error('Booking failed', err);
      const errorMessage = err.originalStatus === 406
        ? 'This Date & Time is not available'
        : 'Something went wrong! Please try again!';

      toast.error(errorMessage, {
        position: "bottom-left",
        autoClose: 5000,
        theme: "light",
      });
    }
  };
  return (
    <form ref={formRef} onSubmit={handleAppoinment} className='py-6'>
    <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
      <div className="w-full py-2">
        <input
          type="text"
          placeholder="Name"
          className="py-4 px-5 w-full border-b border-primary"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
  
      <div className="w-full py-2">
        <input
          type="text"
          placeholder="Phone Number"
          className="py-4 px-5 w-full border-b border-primary"
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
    </div>
  
    <div className="w-full py-2">
      <input
        type="email"
        placeholder="E-mail"
        className="py-4 px-5 w-full border-b border-primary"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:flex-row justify-between items-center">
        {/* Select Subject (Category) */}
        <div className=" py-2">
          <select
            className="py-4 px-5 w-full border-b border-primary text-secondery outline-none"
            onChange={(e) => setSubject(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>

        {/* Pricing Select (shown only after category is selected) */}
        {subject && (
          <div className="py-2">
            <select
              className="py-4 px-5 w-full border-b border-primary text-secondery outline-none"
              onChange={(e) => setPrice(e.target.value)}
              required
            >
              <option value="">Select Service</option>
              {selectedCategoryPrices.map((priceOption) => (
                <option key={priceOption.id} value={priceOption.id}>
                  {priceOption.title} - ${priceOption.price}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:flex-row justify-between items-center">
      <div className="w-full py-2">
      <DatePicker
        format="YYYY-MM-DD"
        disabledDate={disabledDate}
        className="py-4 px-5 w-full border-b border-primary outline-none"
        onChange={dateColllect}
        required
      />
    </div>
  
    <div className="w-full py-2">
      <TimePicker
        format="hh:mm A"
        value={time ? dayjs(time, 'HH:mm') : null}
        onChange={TimeColllect}
        showNow={false}
        disabledTime={disabledTime}
        minuteStep={30}
         className="py-4 px-5 w-full border-b border-primary outline-none"
        use12Hours
        placeholder="Select time"
      />
    </div>
      </div>
  
  
  
    <div className="py-2">
      <textarea
        className="py-4 px-5 w-full border-b border-primary outline-none"
        rows="2"
        onChange={(e) => setDescription(e.target.value)}
        required
        placeholder="Please provide details about the service you're looking for..."
      ></textarea>
    </div>
  
    <div>
      {isLoading ? <LoadingButton /> : <BookingButton />}
    </div>
  </form>
  
  );
};

export default Form;
