import React, { useEffect, useRef } from "react";
import Container from "../ui/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About_us = () => {
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
    <div id="treatment" className="bg-[#ffffff] pb-10 relative overflow-hidden">
      <Container className="flex flex-col md:flex-row justify-between items-center ">
        {/* Image Section */}
        <div className="md:w-[49%]">
          <div className="relative w-[300px] h-[300px] md:w-[320px] md:h-[320px] lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px] bg-[#c4ece5] rounded-full border-none" ref={imageReference}>

            <Image
              src="/images/about/Nazma_Jahan-1.jpg"
              alt=""
              width={500}
              height={500}
              priority
              className="rounded-full w-full h-full border border-primary drop-shadow-2xl pb-[30px] pl-[30px] object-cover"
            />
          </div>
        </div>

        {/* About Beauty Bar Details */}
        <div className="md:w-[49%]" ref={textReferece}>
          <div className="py-10 md:py-0">
            <div className=' banner animate-slide-left-right absolute -bottom-32 md:-bottom-20 -right-40 w-full h-full ' style={{
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
              <span className="text-tertiary">Nazma </span>
              <span className="text-primary"> Jahan</span>
            </h1>
            <p className="font-semibold italic text-tertiary font-secondery lg:text-[24px] pt-2">
              -Skincare Specialist
            </p>
            <p className="text-[20px] text-secondery pt-6 leading-9">
              I am dedicated to providing comprehensive skincare solutions tailored to individual needs. With a deep passion for healthy skin, I aim to educate and assist my clients in achieving their skin goals.
            </p>

          </div>
        </div>
      </Container>
      <div className='invisible lg:visible banner animate-slide-top-bottom absolute top-24 -right-4 w-60 h-60'>
     
        <Image
            src="/images/home/ston.png"
              alt=""
              width={200}
              height={200}
              priority
            />
      </div>

    </div>
  );
};

export default About_us;
