import React, { useState, useEffect, useRef } from 'react';
import { DatePicker } from 'antd/dist/antd';
import { BookingTime } from '@/components/ui/data';
import moment from 'moment';
import { useCreateBookingMutation, useFindAllCategoriesQuery, useFindAllPriceQuery } from '@/redux/api/Api';
import { LoadingButton, BookingButton } from './BookingButton';
import { toast } from 'react-toastify';

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

  useEffect(() => {
    if (subject) {
      const categoryPrices = prices?.filter(price => price.CategoryId === Number(subject));
      setSelectedCategoryPrices(categoryPrices || []);
      setPrice('');
    }
  }, [subject, prices]);

  const dateColllect = (_, dateString) => {
    setDate(dateString);
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
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      console.error('Booking failed', err);
      if (err.originalStatus === 406) {
        toast.error('This Date & Time is not available', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error('Something went wrong! Please try again!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <form ref={formRef} onSubmit={handleAppoinment} className=''>
      <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
        {/* Name */}
        <div className="w-full py-2">
          <input
            type="text"
            placeholder="Name"
            className="py-4 px-5 w-full border-b border-primary"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {/* Phone Number */}
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

      <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
        {/* Email */}
        <div className="w-full py-2">
          <input
            type="email"
            placeholder="E-mail"
            className="py-4 px-5 w-full border-b border-primary"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>



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
      <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
        {/* Date and Time picker */}
        <div className="w-full py-2">
          <DatePicker
            format="YYYY-MM-DD"
            disabledDate={(current) => moment().add(-1, 'days') >= current}
            className="py-4 px-5 w-full border-b border-primary outline-none"
            onChange={dateColllect}
            required
          />
        </div>

        <div className="w-full py-2">
          <select
            className="py-4 px-5 w-full border-b border-primary text-secondery outline-none"
            onChange={(e) => setTime(e.target.value)}
            required
            placeholder="Select Time"
          >
            <option value={""}>Select Time</option>
            {BookingTime?.map((time) => (
              <>
              <option key={time} value={time}>
                {time}
              </option>
              </>
            ))}
          </select>
        </div>
      </div>

      {/* Text Area */}
      <div className="py-2">
        <textarea
          className="py-4 px-5 w-full border-b border-primary text-secondery outline-none"
          rows="4"
          cols="50"
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Please provide details about the service you're looking for..."
        ></textarea>
      </div>

      {/* Appointment Button */}
      <div>
        {isLoading ? <LoadingButton /> : <BookingButton />}
      </div>
    </form>
  );
};

export default Form;
