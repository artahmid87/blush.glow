import React from 'react'
import Container from '../ui/Container'
import HeadingComponent from '../ui/reusableComponent/HeadingComponent'

 const ProfessionalGoal = () => {
    const headingData = [
        { 
            headline: "What we want",
            title1: "Professional",
            title2: "Goal",
            description: ""
        }
    ];
  return (
    <section>
        <Container>
        <HeadingComponent headingData={headingData} />
        <div className='relative'>
        <div className='invisible lg:visible banner animate-slide-top-bottom absolute top-0 -right-4 w-60 h-60'>
        <img src="/images/about/Flower_4.png" alt="" />
      </div>
            <p className='text-2xl text-gray-500'>
            At Blush & Glow, my mission is to enhance your natural beauty and promote overall well-being through personalized and indulgent spa experiences. I specialize in Facial, Threading, and Waxing services, meticulously crafted to leave you feeling refreshed, confident, and radiantly beautiful.
            <br/>
            <br/>
            I understand that each woman is unique, and so are her skincare needs. That's why I take a personalized approach to every treatment.
            <br/>
            <br/>
            Indulge in the luxury of self-care at Blush & Glow Beauty Bar, where every visit is an opportunity to unwind, revitalize, and embrace your innate beauty. We look forward to welcoming you to our place of relaxation and helping you achieve the blushing glow you deserve.
                       
          </p>
        </div>
        </Container>
    </section>
  )
}
export default ProfessionalGoal