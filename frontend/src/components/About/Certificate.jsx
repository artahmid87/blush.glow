import React from 'react'
import Container from '../ui/Container'
import HeadingComponent from '../ui/reusableComponent/HeadingComponent'
import { useGetAllCertificateQuery } from '@/redux/api/Api'
import ApiUrl from '../ui/APIURL'
import Image from 'next/image'

const Certificate = () => {

  const { data, isLoading, isError } = useGetAllCertificateQuery()
  const headingData = [
    {
      headline: "Showcase",
      title1: "",
      title2: "Certificate",
      description: "Showcasing our professional certifications and accreditations that highlight our commitment to excellence and expertise in delivering top-notch services"
    }
  ]

  return (
    <div className="py-10">
      <Container>
        <div className="relative">
          <HeadingComponent headingData={headingData} />
          <div className='banner animate-slide-left-right absolute top-0 left-1/2 -ml-10'>
        
            <Image
                 src="/images/about/5.png"
                  alt=""
                  width={100}
                  height={100}
                  priority
                 className="opacity-20"
                />
          </div>


          <div className='grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center gap-4 mb-6 mt-6'>
            {data?.slice(0, 2).map((item) => (
              <div key={item.id} className='w-full h-full relative group overflow-hidden'>


                <Image
                  src={`${ApiUrl}/images/certificate_img/${item.image}`}
                  alt="Certificate"
                  width={500}
                  height={500}
                  priority
                  className='w-full h-full  lg:h-[500px] transition-transform duration-1000 ease-in-out transform hover:scale-105 hover:translate-y-1'
                />
                <div className="absolute top-0 -left-60 group-hover:left-0 transition-all duration-500 ease-in-out">
                  <h1 className="text-white bg-primary py-2 px-4 text-lg rounded-[8px]">{item.title}</h1>
                </div>

              </div>
            ))}
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center gap-6'>
            {data?.slice(2.5).map((item) => (
              <div key={item.id} className="relative group overflow-hidden">
             

                <Image
                  src={`${ApiUrl}/images/certificate_img/${item.image}`}
                  alt="Certificate"
                  width={500}
                  height={500}
                  priority
                  className='w-full h-full  lg:h-[500px] transition-transform duration-1000 ease-in-out transform hover:scale-105 hover:translate-y-1'
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
