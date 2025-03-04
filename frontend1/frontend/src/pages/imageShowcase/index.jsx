import ImageShowCase from '@/components/ImageShowcase/ImageShowcase'
import Header from '@/components/ui/reusableComponent/Header'
import React from 'react'

 const Index = () => {
  return (
    <section className='mt-20 bg-white'>
        <Header title = "Gallery" />
         <ImageShowCase/>
    </section>
  )
}

export default Index