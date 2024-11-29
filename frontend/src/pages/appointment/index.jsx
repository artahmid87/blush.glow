import { AppointmentBooking } from '@/components/Appointment/AppointmentBook'
import BookingSteps from '@/components/Home/BookingSteps'
import GoogleReview from '@/components/Home/GoogleReview'
import Review from '@/components/Home/Review'
import ImageShowCase from '@/components/ImageShowcase/ImageShowcase'
import Header from '@/components/ui/reusableComponent/Header'
import React from 'react'

 const Index = () => {
  return (
    <section className='h-full py-20'>
        <Header title = "Appointment"/>
        <BookingSteps/>
        <AppointmentBooking/>
        <Review/>
        <GoogleReview/>
        <ImageShowCase/>
    
    </section>
  )
}
export default Index
