import React from 'react';

import AboutUs from '@/components/Home/AboutUs';
import Services from '@/components/Home/Services';
import Appointment from '@/components/Home/Appointment/Appointment';
import NewsFeed from '@/components/Home/NewsFeed';
import BookingSteps from '@/components/Home/BookingSteps';
import Review from '@/components/Home/Review';
import Header from '@/components/Home/Header';
import GoogleReview from '@/components/Home/GoogleReview';


const Home = () => {
  return(
   
   <section className='mt-20 overflow-hidden'>
    <Header/>
      <BookingSteps/>
      <AboutUs/>
      <Services/>
      <Appointment/>
      <Review/>
      <GoogleReview/>
      <NewsFeed/>

     
   </section>
   
   
 
  )
  
}

export default Home;