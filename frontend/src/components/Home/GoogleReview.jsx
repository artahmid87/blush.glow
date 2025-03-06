import React from 'react'
import Container from '../ui/Container'
import Image from 'next/image'

const GoogleReview = () => {
  return (
    <Container>
      <div className='flex flex-col md:flex-row justify-evenly items-center '>
        <a className='mb-10' href="https://g.page/r/Cc5UehdaRZISEB0/review">
          <div className='w-[250px] h-[250px] md:w-full md:h-[300px] '>


            <Image
              src="/images/home/google.png"
              alt=""
              width={500}
              height={500}
              priority
              className='w-full h-full'
            />
          </div>
        </a>
        <a href="https://g.page/r/Cc5UehdaRZISEB0/review">
          <div className='w-[300px] h-[250px] md:w-full md:h-[300px] '>

            <Image
              src="/images/home/review.png"
              alt=""
              width={500}
              height={500}
              priority
              className='w-full h-full'
            />
          </div>
        </a>
      </div>
    </Container>
  )
}

export default GoogleReview

