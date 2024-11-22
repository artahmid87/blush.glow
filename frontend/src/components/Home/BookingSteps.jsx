import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Container from "../ui/Container";
import { LocationIcon } from "../ui/icon";
import HeadingComponent from "../ui/reusableComponent/HeadingComponent";

gsap.registerPlugin(ScrollTrigger);

export default function BookingSteps() {
    const stepRefs = useRef([]);
    const headingRef = useRef(null);

    const headingData = [
        {
            headline: "How can get us",
            title1: "Appointment",
            title2: "Booking",
            description: "We’re excited to assist you! To make things easier, you can conveniently schedule your appointment at your preferred time through our website or Facebook app. We look forward to connecting with you soon. Don’t hesitate to reach out if you need any assistance!"
        }
    ];

    useEffect(() => {

        gsap.fromTo(headingRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );

        stepRefs.current.forEach((step, index) => {
            gsap.fromTo(step,
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: {
                        trigger: step,
                        start: "top 80%",
                        scrub:true,
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });
    }, []);

    return (
        <div id="booking" className="py-10 bg-[#ffffff] relative">
               <div className='visible md:invisible w-[100%] h-5 absolute -top-0 left-0 rotate-180' style={{
        zIndex: 99
      }}> <img className='w-full h-44' src="/images/home/9.png" alt="" /></div>
            <Container>
                <div ref={headingRef}>
                    <HeadingComponent headingData={headingData} />
                </div>

                {/* contact for Appointment section start */}
                <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 items-center mt-20  text-center">

                    {/* Appointment Booking Step 1 */}
                    <div className="w-full mt-10 lg:mt-0 py-[20px] px-[10px] rounded-[5px] shadow-lg shadow-[#00000038] relative leading-6 basis-2/4"
                        ref={el => stepRefs.current[0] = el}>
                        <div className="absolute top-[-30%] w-full  flex flex-col justify-center items-center">
                            <div className="w-[80px] h-[80px] bg-[#D49696] mb-1 rounded-md text-center uppercase">
                                <h1 className="text-[40px] mt-[20px] mb-[10px]">01</h1>
                                <h1 className="text-[18px] text-center mb-[10px]">step</h1>
                            </div>
                            <div className="w-[80px] h-[80px] bg-[#D49696] rotate-180"
                                style={{ clipPath: "polygon(50% 85%, 0 100%, 99% 100%)" }}></div>
                        </div>

                        <h1 className="text-[30px] pt-[50px] text-tertiary font-secondery pb-4">Visit Our Facebook page</h1>
                        <p className="text-[16px] py-[10px] text-gray-500">
                        Visit our <a href="https://www.facebook.com/Blushglowbeautybar/services" className="font-bold text-[#000001bd] cursor-pointer">facebook page</a>
                        , explore our services, and choose the one that suits your desires.
                        </p>
                        
                    </div>

                    {/* Appointment Booking Step 2 */}
                    <div className="py-[10px] w-full px-[10px] rounded-[5px] shadow-lg shadow-[#00000038] relative leading-6 lg:mt-[-120px] md:mt-7  basis-2/4"
                        ref={el => stepRefs.current[1] = el}>
                        <div className="absolute top-[-25%] w-full  flex flex-col justify-center items-center lg:top-[60%] lg:rotate-180">
                            <div className="w-[80px] h-[80px] bg-[#D49696] mb-1 rounded-md text-center uppercase lg:rotate-180">
                                <h1 className="text-[40px] mt-[20px] mb-[10px]">02</h1>
                                <h1 className="text-[18px] text-center mb-[10px]">step</h1>
                            </div>
                            <div className="w-[80px] h-[80px] bg-[#D49696] rotate-180"
                                style={{ clipPath: "polygon(50% 85%, 0 100%, 99% 100%)" }}></div>
                        </div>
                        <div className="mb-10">
                            <h1 className="text-[30px] pt-[50px] text-tertiary font-secondery pb-4">Visit Our Facebook Page</h1>
                            <p className="text-[16px] py-[10px] text-gray-500">
                                Visit our <a href="https://github.com" className="font-bold text-[#000001bd]">Facebook page</a> & explore our services, and choose the one that suits your desires.
                            </p>
                        </div>
                    </div>

                    {/* Appointment Booking Step 3 */}
                    <div className="py-[20px] px-[10px] w-full rounded-[5px] shadow-lg shadow-[#00000038] relative leading-6 lg:mb-20 mt-20 basis-2/4"
                        ref={el => stepRefs.current[2] = el}>
                        <div className="absolute top-[-35%] w-full h-full flex flex-col justify-center items-center">
                            <div className="w-[80px] h-[80px] bg-[#D49696] mb-1 rounded-md text-center uppercase">
                                <h1 className="text-[40px] mt-[20px] mb-[10px]">03</h1>
                                <h1 className="text-[18px] text-center mb-[10px]">step</h1>
                            </div>
                            <div className="w-[80px] h-[80px] bg-[#D49696] rotate-180"
                                style={{ clipPath: "polygon(50% 85%, 0 100%, 99% 100%)" }}></div>
                        </div>
                        <h1 className="text-[30px] pt-[50px] font-secondery text-tertiary pb-4">Checkout Our Beauty Bar</h1>
                        <p className="text-[16px] py-[10px] text-gray-500">
                            Be present at the beauty bar 10 minutes prior to booking
                        </p>
                        <p className="flex justify-center items-center text-tertiary">
                            
                            <span className="font-medium flex mt-4"> <LocationIcon /> 5 Massey Square, East York, ON M4C 5L6, Canada</span>
                        </p>
                    </div>

                      {/* Appointment Booking Step 4 */}
                    <div className="py-[10px] w-full px-[10px] rounded-[5px] shadow-lg shadow-[#00000038] relative leading-6 lg:mt-[-120px] mt-20 basis-2/4"
                        ref={el => stepRefs.current[3] = el}>
                        <div className="absolute top-[-25%] w-full  flex flex-col justify-center items-center lg:top-[60%] lg:rotate-180">
                            <div className="w-[80px] h-[80px] bg-[#D49696] mb-1 mt-10 lg:mt0 rounded-md text-center uppercase lg:rotate-180">
                                <h1 className="text-[40px] mt-[20px] mb-[10px]">04</h1>
                                <h1 className="text-[18px] text-center mb-[10px]">step</h1>
                            </div>
                            <div className="w-[80px] h-[80px] bg-[#D49696] rotate-180"
                                style={{ clipPath: "polygon(50% 85%, 0 100%, 99% 100%)" }}></div>
                        </div>
                        <div className="mb-10">
                            <h1 className="text-[30px] pt-[50px] text-tertiary font-secondery pb-4">Visit Our Facebook Page</h1>
                            <p className="text-[16px] py-[10px] text-gray-500">
                                Visit our <a href="https://github.com" className="font-bold text-[#000001bd]">Facebook page</a> & explore our services, and choose the one that suits your desires.
                            </p>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
}
