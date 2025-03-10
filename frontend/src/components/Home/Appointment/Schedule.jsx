import Container from '@/components/ui/Container'
import { ClockIcon, FacebookIcon, InstagramIcon, LikeIcon, LocationIcon, NotAvaileable, YoutubeIcon } from '@/components/ui/icon'
import { useBookingListQuery, useGetBookingByIdQuery } from '@/redux/api/Api'
import React from 'react'

const Schedule = () => {


  return (
    <div className='py-10'>
    <Container>

    <div className="flex flex-col justify-start items-start">
      <div className="" >
      <h1 className='flex gap-4 mt-4'><span className='flex justify-center items-center bg-primary w-10 h-10 rounded-full text-2xl text-white '><ClockIcon/></span><span className = " md:text-tertiary text-white text-2xl md:text-4xl font-bold font-secondery pb-2">Opening hours:</span></h1>
      <div className='ml-14'>
       <p className ="md:text-gray-800 text-white text-[18px] md:text-[28px] py-2 font-secondery ">Mon to Sun: 9:00 am — 8:00 pm</p>
        <p className ="text-800 md:text-gray-800 text-white text-[18px] md:text-[28px] font-secondery ">Any Holiday: 9:00 am — 8:00 pm</p>
      
       </div>

      </div>
      <div className ="py-4">
      <h2 className='flex gap-4'><span className='flex justify-center items-center bg-primary w-10 h-10 rounded-full text-2xl text-white '><LocationIcon/></span><span className = "md:text-gray-800 text-white text-2xl md:text-4xl font-bold font-secondery pb-2">Location:</span></h2>
      <p className ="md:text-gray-600 text-white text-[20px] md:text-3xl py-1 font-bold ml-14 font-secondery ">858 Danforth Rd, Scarborough,
      ON M1K 1H5, Canada.</p>
      </div>


      <div className ="py-4">
      <h1 className='flex gap-4'><span className='flex justify-center items-center bg-primary w-10 h-10 rounded-full text-2xl text-white '><LikeIcon/></span><span className = "md:text-gray-800 text-white text-2xl md:text-4xl font-bold font-secondery pb-2">Follow us:</span></h1>
      <ul className='flex gap-6 ml-14'>
              <li className='text-3xl hover:text-primary transition-all'><a href="#"><FacebookIcon /></a></li>
              <li className='text-3xl  hover:text-primary transition-all'><a href="#"><InstagramIcon /></a></li>
              <li className='text-3xl  hover:text-primary transition-all'><a href="#"><YoutubeIcon /></a></li>
            </ul>
      </div>
        
      </div>
     
    </Container>
    </div>
  )
}

export default Schedule