import React from 'react'
import Container from '../ui/Container'
import HeadingComponent from '../ui/reusableComponent/HeadingComponent'
import { CertificateData } from '../ui/data'

const Certificate = () => {
  const headingData = [
    {
      headline: "Showcase",
      title1: "",
      title2: "Certificate",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
    }
  ]

  return (
    <div className="py-10">
      <Container>
        <div className="relative">
          <HeadingComponent headingData={headingData} />
          <div className='banner animate-slide-left-right absolute top-0 left-1/2 -ml-10'>
            <img className="opacity-20" src="/images/about/5.png" alt="" />
          </div>

     
          <div className='grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center gap-4 mb-6 mt-6'>
            {CertificateData?.slice(0, 2).map((item) => (
              <div key={item.id} className='w-full h-full relative group overflow-hidden'>
                <img 
                  className='w-full h-full transition-transform duration-1000 ease-in-out transform hover:scale-105 hover:translate-y-1' 
                  src={item.image} 
                  alt="Certificate"
                />
                 <div className="absolute top-0 -left-60 group-hover:left-0 transition-all duration-500 ease-in-out">
                  <h1 className="text-white bg-primary py-2 px-4 text-lg rounded-[8px]">{item.title}</h1>
                </div>

              </div>
            ))}
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center gap-6'>
            {CertificateData?.slice(2.5).map((item) => (
              <div key={item.id} className="relative group overflow-hidden">
                <img 
                  className='w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:translate-y-1' 
                  src={item.image} 
                  alt="Certificate"
                />
             
                <div className="absolute top-0 -left-52 group-hover:left-0 transition-all duration-500 ease-in-out">
                  <h1 className="text-white bg-primary py-1 px-4 text-lg rounded-[8px]">{item.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Certificate
