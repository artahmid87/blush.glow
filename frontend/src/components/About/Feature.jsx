import React from 'react'
import Container from '../ui/Container'
import { FeatureData } from '../ui/data'
import HeadingComponent from '../ui/reusableComponent/HeadingComponent'
import { FacialIcon } from '../ui/icon'

const Feature = () => {

    // This is Headline Data pass with HaedingComponent as for create Reusable component 
    // Component path  "../ui/reusableComponent/HeadingComponent"
    const headingData = [
        {
            headline: "Welcome",
            title1: "Our",
            title2: "Feature",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        }
    ]

    return (
        <div className='bg-[#fff0f0] pb-20 pt-24 relative'>
                <div className='w-[100%] absolute top-0 left-0 ' style={{ zIndex: 99
      }}> <img className='w-full h-44' src="/images/home/9.png" alt="" />
      </div>
            <Container>
                <div className="relative">
                    {/* headline */}
                    <HeadingComponent headingData={headingData} />
                    <div className='banner animate-slide-left-right absolute top-0 left-1/2  -ml-10'>
                        <img className="opacity-20" src="/images/home/2.png" alt="" />
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between items-center gap-4 '>
                        <div className='w-full md:h-[500px] h-[400px] md:-ml-60'>
                            <img className='w-full h-full' src="/images/about/4.png" alt="" />
                        </div>
                        <div className='grid grid-cols-1 place-items-center place-content-center'>

                        {/* data */}
                        {
                            FeatureData?.map((item , index) =>(
                                <div key ={item.id} className={`group flex flex-col lg:flex-row justify-center items-center gap-4 py-10 ${index !== 1 ? "lg:ml-20" : ""}lg:ml-20`}>
                                <div className="cssPath flex flex-col justify-center items-center md:mr-11 group-hover:bg-primary transition-all group-hover:text-white  text-primary w-36 h-36 py-5 md:py-10 px-5 md:px-10 relative">
                                    <i className=" opacity-20 text-[90px] md:text-[120px]">
                                    {item.icon}
                                    </i>
                                    <i className="absolute top-[15%] md:top-0 left-1/2  transform -translate-x-1/2 translate-y-1/2 text-[50px] md:text-[70px] ">
                                    {item.icon}
                                    </i>
                                </div>
                                <div className ="text-center">
                                    <h1 className='font-secondery text-2xl md:text-4xl text-tertiary py-6'>{item.title}</h1>
                                    <p className='text-tertiary text-md'>{item.details}</p>
                                </div>
                            </div>

                            ))
                        }
                      
                        </div>
                    </div>
                </div>
            </Container>
            <div className='w-[100%] absolute bottom-0 left-0 rotate-180' style={{ zIndex: 99
      }}> <img className='w-full h-44' src="/images/home/9.png" alt="" />
      </div>
        </div>
    )
}

export default Feature