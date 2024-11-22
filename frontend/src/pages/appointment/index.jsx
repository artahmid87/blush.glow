import Appointment from '@/components/Home/Appointment/Appointment'
import BookingSteps from '@/components/Home/BookingSteps'
import Header from '@/components/ui/reusableComponent/Header'
import React from 'react'

 const Index = () => {
  return (
    <section className='h-full py-20'>
        <Header title = "Appointment"/>
        <BookingSteps/>
        <Appointment/>
    </section>
  )
}
export default Index
