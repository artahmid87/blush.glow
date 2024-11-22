import React from 'react'
import Container from '../ui/Container'
import HeadingComponent from '../ui/reusableComponent/HeadingComponent'


const Youtube = () => {

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
        <div className='bg-[#fff0f0] pb-10 pt-24 relative'>
            <div className='w-[100%] absolute top-0 left-0 ' style={{
                zIndex: 99
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



                        <div className="pb-16 w-[100%] py-[20px] mt-[50px] flex justify-center items-center ">
                            <iframe className=" w-[100%] h-[500px] rounded-xl" src="https://www.youtube.com/embed/3pjl4cacA3M?si=kKyb-U1V5dw5XrM7"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            >

                            </iframe>
                        </div>

                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Youtube