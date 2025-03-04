import {
  useBookingListQuery,
  useCreateBookingMutation,
  useFindAllCategoriesQuery,
  useFindAllPriceQuery,
  useGetAllHolidayQuery,
} from '@/redux/api/Api';
import { DatePicker } from 'antd/dist/antd';
import React, { useState, useRef, useEffect } from 'react';
import { BookingTime } from '../ui/data';
import { toast } from 'react-toastify';
import Container from '../ui/Container';
import HeadingComponent from '../ui/reusableComponent/HeadingComponent';
import {  ClockIcon } from '../ui/icon';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

export const AppointmentBooking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [selectedCategoryPrices, setSelectedCategoryPrices] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef(null);

  const [test, setTest] = useState('')

  const { data: Collectdate } = useBookingListQuery();
  const { data: categories } = useFindAllCategoriesQuery();
  const { data: prices } = useFindAllPriceQuery();
  const [booking, { isLoading }] = useCreateBookingMutation();


  const { data: holiday } = useGetAllHolidayQuery();

  const [fromHolidayDate, setFromHolidayDate] = useState([]);
const [toHolidayDate, setToHolidayDate] = useState([]);

useEffect(() => {
  if (holiday) {
    const fromDates = holiday.map(date => date?.fromDate ? dayjs(date?.fromDate) : null).filter(Boolean);  
    const toDates = holiday.map(date => date?.toDate ? dayjs(date?.toDate) : null).filter(Boolean);  
    setFromHolidayDate(fromDates);
    setToHolidayDate(toDates);
  }
}, [holiday]);


const disabledDateRanges = fromHolidayDate.length > 0 && toHolidayDate.length > 0
  ? fromHolidayDate.map((start, index) => ({
      start: start,
      end: toHolidayDate[index],
  }))
  : [];  


const disabledDate = (current) => {
  const isInDisabledRange = disabledDateRanges.some((range) =>
    current.isBetween(range.start, range.end, 'day', '[]')
  );
  const isPastDate = current && current.isBefore(dayjs().startOf('day'));

  return isInDisabledRange || isPastDate;
};




  useEffect(() => {
    if (subject) {
      const categoryPrices = prices?.filter(
        (price) => price.CategoryId === Number(subject)
      );
      setSelectedCategoryPrices(categoryPrices || []);
      setPrice('');
    }
  }, [subject, prices]);

  const dateCollect = (_, dateString) => {
    setDate(dateString); 
    setTest(dateString)
    setTime(''); 
  };

  const handleAppoinment = async (e) => {
    e.preventDefault();
    const selectedPrice = prices?.find((p) => p.id === Number(price));
    const priceTitle = selectedPrice ? selectedPrice.title : '';
    try {
      await booking({
        name,
        email,
        phone,
        price,
        date,
        time,
        description,
      }).unwrap();

      formRef.current.reset();
      setIsFormVisible(false);

      toast.success('You will receive a confirmation Email!', {
        position: 'bottom-right',
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'light',
      });
    } catch (err) {
      toast.error('Something went wrong! Please try again!', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'light',
      });
    }
  };


  const handleBooking = (selectedDate, selectedTime) => {
   
    setDate(selectedDate);
    setTime(selectedTime);
    setIsFormVisible(true);
  };

  const headingData = [
    {
      headline: "",
      title1: "Appointment",
      title2: "Booking",
      description: ""
    }
  ];

  return (
    <div className="">
      <Container>
        <div >
          <HeadingComponent headingData={headingData} />
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 border-b border-secondery py-10'>

          <div className=''>
            <h1 className='text-3xl font-secondery text-primary'>Select a Date For Booking -</h1>
          </div>
          <div className="w-full md:w-1/2 py-2">
            <DatePicker
              format="YYYY-MM-DD"
              disabledDate={disabledDate}
              className="py-4 px-5 w-full border-4 border-primary outline-none"
              onChange={dateCollect}
              required
            />
          </div>
        </div>

        {date && (
          <div className="w-full py-2">
            <h1 className='text-3xl font-secondery text-tertiary text-center py-2'>Available Appointments on <span className='text-primary'>
              
            {new Date(test).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
 
              
              </span></h1>
            <div className="py-4 px-5 w-full border-b border-primary text-secondary outline-none h-[500px] overflow-scroll">
              {BookingTime?.map((timeOption) => {
                const isBooked = Collectdate?.some(
                  (booking) => booking.date === date && booking.time === timeOption
                );

                return (
                  <div
                    key={timeOption}
                    className={`cursor-pointer py-4 flex flex-col md:flex-row justify-between items-center border-b border-gray-300 hover:bg-gray-100 transition-all duration-500 ease-in-out px-6 ${isBooked && 'hidden'
                      }`}
                    onClick={() =>
                      !isBooked && handleBooking(date, timeOption)
                    }
                  >
                    <div className=''>
                      <h1 className='text-primary font-secondery text-3xl text-center lg:text-start'>Time Slot</h1>
                     <div className='flex py-2 text-[20px]'>    <span className='text-primary mt-1'><ClockIcon/></span><span className='ml-4  font-semibold text-secondery'> {timeOption} </span></div>
                      <p className='ml-8  text-secondery mb-4 lg:mb-0'>1 spaces available</p>
                    </div>
                    <div>
                      <button className="group hover:bg-white transition-all duration-500 ease-in-out  bg-primary py-2 px-4 flex gap-2 justify-center items-center rounded-full"
                        style={{
                          boxShadow: '2px 2px 4px gray'
                        }}
                      >


                        <span className='text-md md:text-xl transition-all group-hover:text-primary  text-white font-secondery'>Book Appointment</span></button>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        )}

        {isFormVisible && (
          <div className="fixed top-10 inset-0 flex items-center justify-center bg-black bg-opacity-50  w-full"
          style={{
            zIndex: 999
          }}>
            <div className="bg-white px-6 py-4 rounded shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-semibold mb-4 text-primary font-secondery text-center"> Appointment</h2>
              <p className='text-secondery'>Submit your details & You will get a confirmation Mail.</p>
              <form ref={formRef} onSubmit={handleAppoinment} className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="mt-2 py-2 px-5 w-full border-b border-primary outline-none"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="py-2 px-5 w-full border-b border-primary outline-none"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="py-2 px-5 w-full border-b border-primary outline-none"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    className="py-4 px-5 w-full border-b border-primary outline-none overflow-hidden"
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  >
                    <option value="">Select Category</option>
                    {categories?.filter(item => item.isActive).map((category) => (
              <option key={category.id} value={category.id}>
                {
                  category.title
                }
               
              </option>
            ))}
                  </select>
                  {subject && (
                    <select
                      className="py-4 px-5 border-b border-primary outline-none overflow-hidden"
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    >
                      <option value="">Select Service</option>
                      {selectedCategoryPrices.map((priceOption) => (
                        <option key={priceOption.id} value={`$ ${priceOption.price}`}>
                          {priceOption.title} - ${priceOption.price}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                <input
                  type="text"
                  value={date}
                  className="py-2 px-5 w-full border-b border-primary outline-none bg-gray-100"
                  disabled
                />
                <input
                  type="text"
                  value={time}
                  className="py-2 px-5 w-full border-b border-primary outline-none bg-gray-100"
                  disabled
                />
                <textarea
                  placeholder="Details about the service"
                  className="py-2 px-5 w-full border-b border-primary outline-none"
                  rows="3"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="bg-secondery text-white px-4 py-2 rounded hover:bg-white hover:text-secondery font-semibold transition-all duration-300 ease-in-out "
                    onClick={() => setIsFormVisible(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-primary text-white px-4 py-2 rounded hover:bg-white hover:text-primary font-semibold transition-all duration-300 ease-in-out "
                  >
                    {
                      !isLoading ? <>Book</> : <>Wait..</>
                    }
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};
