import Container from '@/components/ui/Container'
import { ClockIcon, LocationIcon, NotAvaileable } from '@/components/ui/icon'
import { useBookingListQuery, useGetBookingByIdQuery } from '@/redux/api/Api'
import React from 'react'

const Schedule = () => {
  const {data} = useBookingListQuery()


  return (
    <div>
    <Container>

    <div>
        <h1 className='flex gap-4 py-2'><span className='flex justify-center items-center bg-primary w-10 h-10 rounded-full text-2xl text-white '><NotAvaileable/></span><span className = "text-tertiary text-2xl md:text-4xl font-bold font-secondery pb-2">Not available Dates:</span></h1>
      <div className='ml-14'> 
      {
          data?.map((item) =>(
            <div key={item.id} className='flex  items-center py-2 gap-4 text-xl md:text-[24px] '>
              <h1 className=''>{item.date}</h1>
              <h1>{item.time}</h1>
            </div>
          ))
        }
      </div>
        <h1 className='flex gap-4 mt-4'><span className='flex justify-center items-center bg-primary w-10 h-10 rounded-full text-2xl text-white '><ClockIcon/></span><span className = "text-tertiary text-2xl md:text-4xl font-bold font-secondery pb-2">Opening hours:</span></h1>
       <div className='ml-14'>
       <p className ="text-gray-800 text-[18px] md:text-[26px] py-2">Mon to Sun: 9:00 am — 8:00 pm</p>
        <p className ="text-800 text-[18px] md:text-[26px]">Any Holiday: 9:00 am — 8:00 pm</p>
      
       </div>
      </div>
      <div className ="py-4">
      <h1 className='flex gap-4'><span className='flex justify-center items-center bg-primary w-10 h-10 rounded-full text-2xl text-white '><LocationIcon/></span><span className = "text-tertiary text-2xl md:text-4xl font-bold font-secondery pb-2">Location:</span></h1>
      <p className ="text-gray-600 text-[20px] md:text-2xl py-1 font-bold ml-14">5 Massey Square, East York, ON M4C 5L6, canada</p>
      </div>
    </Container>
    </div>
  )
}

export default Schedule