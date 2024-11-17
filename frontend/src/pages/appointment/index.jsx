import Appointment from '@/components/Home/Appointment/Appointment'
import Header from '@/components/ui/reusableComponent/Header'
import React from 'react'

 const Index = () => {
  return (
    <section className='h-full py-20'>
        <Header title = "Appointment"/>
        <Appointment/>
    </section>
  )
}
export default Index
