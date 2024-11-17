import React, { useState } from 'react'
import { CalenderIcon } from '../../ui/icon';
import { Button } from 'antd/dist/antd';

const BookingButton = () => {

  return (
    <div>

      <button className="group hover:bg-white bg-primary transition-all py-2 mt-10 px-8 flex gap-2 justify-center items-center rounded-full"
        style={{
          boxShadow: '2px 2px 4px gray'
        }}
      >
        <span className='flex justify-center items-center text-2xl group-hover:text-white text-primary transition-all w-8 h-8 md:w-10 md:h-10 group-hover:bg-primary bg-white rounded-full ml-[-20px]'><CalenderIcon /></span>

        <span className='text-md md:text-xl transition-all group-hover:text-primary  text-white font-secondery'>Make An Appointment</span></button>

    </div>
  )
}

const LoadingButton = () => {
  const [position, setPosition] = useState('end');
  return (
    <div>

      <Button loading iconPosition={position} className="bg-primary py-4 mt-10 px-20 flex gap-2 justify-center items-center rounded-full"
        style={{
          boxShadow: '2px 2px 4px gray'
        }}>
        Loading...
      </Button>

    </div>
  )
}

export { LoadingButton, BookingButton }