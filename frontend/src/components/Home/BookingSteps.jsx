import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Container from "../ui/Container";
import { LocationIcon } from "../ui/icon";
import HeadingComponent from "../ui/reusableComponent/HeadingComponent";
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function BookingSteps() {
    const stepReference = useRef([]);
    const headingReference = useRef(null);

    const headingData = [
        {
            headline: "How can get us",
            title1: "Appointment",
            title2: "Booking",
            description: "We’re excited to assist you! To make things easier, you can conveniently schedule your appointment at your preferred time through our website or Facebook app. We look forward to connecting with you soon. Don’t hesitate to reach out if you need any assistance!"
        }
    ];

    useEffect(() => {

        gsap.fromTo(headingReference.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );

        stepReference.current.forEach((step, index) => {
            gsap.fromTo(step,
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: {
                        trigger: step,
                        start: "top 80%",
                        scrub: true,
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
            }}>
                <Image
                    src="/images/home/9.png"
                    alt=""
                    width={500}
                    height={500}
                    priority
                    className='w-full h-44'
                />
            </div>
            <Container>
                <div ref={headingReference}>
                    <HeadingComponent headingData={headingData} />
                </div>

                {/* contact for Appointment section start */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-center mt-20  text-center">

                    {/* Appointment Booking Step 1 */}
                    <div className="w-full mt-10 lg:mt-0 py-[20px] px-[10px] rounded-[5px] shadow-lg shadow-[#00000038] relative leading-6 basis-2/4 md:mb-0 mb-10 "
                        ref={el => stepReference.current[0] = el}>
                        <div className="absolute top-[-30%] w-full  flex flex-col justify-center items-center">
                            <div className="md:w-[80px] md:h-[80px] w-[50px] h-[50px] bg-[#D49696] mb-1 rounded-md text-center uppercase">
                                <h1 className="md:text-[18px] text-center md:mb-[10px] text-[10px]">step</h1>
                                <h1 className="md:text-[40px] text-[20px]">01</h1>
                            </div>
                            <div className="w-[80px] h-[80px] bg-[#D49696] rotate-180"
                                style={{ clipPath: "polygon(50% 85%, 0 100%, 99% 100%)" }}></div>
                        </div>

                        <h1 className="text-[20px] md:text-[30px] pt-[50px] text-tertiary font-secondery">Visit Our Appointment</h1>
                        <h1 className="text-[20px] md:text-[30px] pt-[10px] text-tertiary font-secondery pb-4"> Section Or Facebook page</h1>
                        <p className="text-[16px] py-[10px] text-gray-500">
                            Visit our <a href="#Appointment" className="font-bold text-[#000001bd] cursor-pointer">Appointment Section </a>
                            Or Visit our <a href="https://www.facebook.com/Blushglowbeautybar/services" className="font-bold text-[#000001bd] cursor-pointer" target='_blank'>facebook page</a>
                            , explore our services, and choose the one that suits your desires.
                        </p>

                    </div>

                    {/* Appointment Booking Step 2 */}
                    <div className="py-[10px] w-full px-[10px] rounded-[5px] shadow-lg shadow-[#00000038] relative leading-6 mt-5 lg:mt-[-120px] md:mt-7  basis-2/4"
                        ref={el => stepReference.current[1] = el}>
                        <div className="absolute top-[-20%] w-full  flex flex-col justify-center items-center lg:top-[60%] lg:rotate-180">
                            <div className="md:w-[80px] md:h-[80px] w-[50px] h-[50px] bg-[#D49696] mb-1 rounded-md text-center uppercase lg:rotate-180">
                                <h1 className="md:text-[18px] text-center md:mb-[10px] text-[10px]">step</h1>
                                <h1 className="md:text-[40px] text-[20px]">02</h1>
                            </div>
                            <div className="w-[80px] h-[80px] bg-[#D49696] rotate-180"
                                style={{ clipPath: "polygon(50% 85%, 0 100%, 99% 100%)" }}></div>
                        </div>
                        <div className="mb-10">
                            <h1 className="text-[25px] md:text-[30px] pt-[50px] text-tertiary font-secondery pb-4">Book An Appointment</h1>
                            <p className="text-[16px] py-[10px] text-gray-500">
                                Book A Appointment from our <Link href={'/appointment'} className="font-bold text-[#000001bd]">Website</Link> Or <a href="https://github.com" className="font-bold text-[#000001bd] cursor-auto">Facebook page</a>
                            </p>
                        </div>
                    </div>

                    {/* Appointment Booking Step 3 */}
                    <div className="py-[20px] px-[10px] w-full rounded-[5px] shadow-lg shadow-[#00000038] relative leading-6 lg:mb-20 mt-20 basis-2/4"
                        ref={el => stepReference.current[2] = el}>
                        <div className="absolute top-[-35%] w-full h-full flex flex-col justify-center items-center">
                            <div className="md:w-[80px] md:h-[80px] w-[50px] h-[50px] bg-[#D49696] mb-1 rounded-md text-center uppercase">
                                <h1 className="md:text-[18px] text-center md:mb-[10px] text-[10px]">step</h1>
                                <h1 className="md:text-[40px] text-[20px]">03</h1>
                            </div>
                            <div className="w-[80px] h-[80px] bg-[#D49696] rotate-180"
                                style={{ clipPath: "polygon(50% 85%, 0 100%, 99% 100%)" }}></div>
                        </div>
                        <h1 className="text-[25px] md:text-[30px] pt-[50px] font-secondery text-tertiary pb-4">Checkout Our Beauty Bar</h1>
                        <p className="text-[16px] pt-[10px] text-gray-500">
                            Be present at the beauty bar 10 minutes prior to booking. Our address is
                        </p>
                        <p className="flex justify-center items-center text-tertiary">

                            <span className="font-medium flex mt-4 text-[#000001bd] "> <LocationIcon />858 Danforth Rd, Scarborough,
                                ON M1K 1H5, Canada.</span>
                        </p>
                    </div>

                    {/* Appointment Booking Step 4 */}
                    <div className="py-[16px] w-full px-[10px] rounded-[5px] shadow-lg shadow-[#00000038] relative leading-6 lg:mt-[-120px] mt-20 basis-2/4"
                        ref={el => stepReference.current[3] = el}>
                        <div className="absolute top-[-25%] w-full  flex flex-col justify-center items-center lg:top-[60%] lg:rotate-180">
                            <div className="md:w-[80px] md:h-[80px] w-[50px] h-[50px] bg-[#D49696] mb-1 mt-10 lg:mt0 rounded-md text-center uppercase lg:rotate-180">
                                <h1 className="md:text-[18px] text-center md:mb-[10px] text-[10px]">step</h1>
                                <h1 className="md:text-[40px] text-[20px]">04</h1>
                            </div>
                            <div className="w-[80px] h-[80px] bg-[#D49696] rotate-180"
                                style={{ clipPath: "polygon(50% 85%, 0 100%, 99% 100%)" }}></div>
                        </div>
                        <div className="mb-10">
                            <h1 className="text-[25px] md:text-[30px] pt-[50px] text-tertiary font-secondery pb-4">Give us Your valuable Review</h1>
                            <p className="text-[16px] py-[10px] text-gray-500">
                                Give us Your valuable review at <span className=' font-bold cursor-auto text-[#000001bd] '> <a href="">Google</a></span> & <span className=' font-bold cursor-auto text-[#000001bd] '><a href="https://www.facebook.com/Blushglowbeautybar/services">Facebook</a></span>
                            </p>
                        </div>

                    </div>

                </div>
            </Container>
        </div>
    );
}
