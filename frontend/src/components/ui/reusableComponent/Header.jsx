import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import Image from 'next/image'


const Header = (props) => {

  // This is Reusable component for all Header linked with except Home page //

  const { title } = props
  return (
    <div className=' relative  py-16 bg-headerResponsive bg-cover bg-top md:bg-none overflow-hidden  bg-[#f5f5f5]'>
      <div className='invisible lg:visible banner animate-slide-left-right absolute -bottom-10 -left-10 w-60 h-60'>
     
        <Image
          src="/images/about/1.png"
          alt=""
          width={300}
          height={300}
          priority
        />
      </div>

      <Container>
        <div className='flex justify-center md:justify-evenly md:items-center '>
          <div className=' flex flex-col justify-center items-center lg:-ml-32 z-40'>
            <h1 className='w-full lg:text-[70px] text-[55px] text-center text-tertiary font-secondery font-bold'>{title}</h1>
            <div className='flex gap-4'>
              <Link className='text-primary font-semibold text-lg ' href={'/'}>HOME /</Link>
              <h2 className='text-tertiary font-semibold text-lg ml-[-5px]'>{title}</h2>
            </div>
          </div>


          <div className="relative z-[9] lg:w-[40%] h-[630px]  -mb-16 mt-10  invisible lg:visible">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[630px] h-[630px] rounded-full bg-white flex justify-center items-center">

              <Image
                src='/images/home/banner_layer.png'
                alt=""
                width={500}
                height={500}
                priority
                className="rounded-full w-full h-full"
              />
            </div>


            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] z-[-1]">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-full h-full rounded-full bg-primary opacity-50 animate-spinFade`}
                  style={{ animationDelay: `${i * 0.5}s` }}
                ></div>
              ))}
            </div>
          </div>


        </div>
      </Container>

      <div className=' w-[100%] absolute -bottom-2 left-0' style={{
        zIndex: 9
      }}> 
        <Image
               src="/images/about/2.png"
                  alt=""
                  width={500}
                  height={500}
                  priority
                  className='w-full h-12 md:h-36'
                />
      </div>
    </div>
  )
}

export default Header
