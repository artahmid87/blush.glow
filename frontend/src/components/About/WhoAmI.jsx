import React, { useEffect, useRef } from "react";
import Container from "../ui/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";


if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const WhoAmI = () => {
    const imageReference = useRef(null);
    const textReferece = useRef(null);
    useEffect(() => {

        gsap.fromTo(
            imageReference.current,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: imageReference.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                    scrub: true
                },
            }
        );


        gsap.fromTo(
            textReferece.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textReferece.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <div id="treatment" className="bg-[#ffffff] pb-4 relative overflow-hidden">
            <Container className="flex flex-col md:flex-row justify-between items-center ">

                {/* About Beauty Bar Details */}
                <div className="md:w-[49%]" ref={textReferece}>
                    <div className="py-10 md:py-0">
                        <div className=' banner animate-slide-left-right absolute -bottom-32 md:top-0 -right-40 w-full h-full ' style={{
                            zIndex: -1
                        }}>

                            <Image
                                src="/images/home/8.png"
                                alt=""
                                width={100}
                                height={100}
                                priority
                            />
                        </div>
                        <h1 className="text-6xl font-medium font-secondery py-2">
                            <span className="text-tertiary">Who </span>
                            <span className="text-primary"> am I? </span>
                        </h1>

                        <p className="text-[20px] text-secondery py-6 leading-9">
                            I am hard working, passionate and a dedicated person, I love to meet new people and adjust to change with ease. I believe that a person should work on developing their professional skills and learn new things all the time. I work hard to explore and fulfill my dreams.

                            Previously I worked as a registered practical nurse at City of Toronto Long Term Homes and Services. I am proud of myself that I served our aged generation and made their life difference.

                            It was my childhood desire to worked in beauty industry. Only for this purpose I studied Advanced Esthetics diploma at North American College and become a licensed Esthetician.
                        </p>

                    </div>
                </div>

                {/* Image Section */}
                <div className="md:w-[49%]">
                    <div className="relative w-[300px] h-[300px] md:w-[320px] md:h-[320px] lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px] bg-[#c4ece5] rounded-full border-none" ref={imageReference}>

                        <Image
                            src="/images/about/Nazma_Jahan.jpg"
                            alt="Beauty and Spa"
                            width={500}
                            height={500}
                            priority
                            className="rounded-full w-full h-full border border-primary drop-shadow-2xl pb-[30px] pr-[30px] object-cover"
                        />
                    </div>
                </div>

            </Container>
            <div className='invisible lg:visible banner animate-slide-top-bottom absolute top-24 -right-4 w-60 h-60'>
               
                <Image
                           src="/images/home/ston.png"
                            alt="Beauty and Spa"
                            width={200}
                            height={200}
                            priority
                           
                        />
            </div>

        </div>
    );
};

export default WhoAmI;
