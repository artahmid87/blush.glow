import React, { useEffect, useRef, useState } from "react";
import Container from "../ui/Container";
import { RightArrowIcon } from "../ui/icon";
import { useRouter } from "next/router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGetBookingByIdQuery } from "@/redux/api/Api";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutUs = () => {
  const router = useRouter();
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const numberRef = useRef(null);
  const [count, setCount] = useState(0);



  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {  scale: 0.8 },
      {
       
        scale: 1,
        duration: .5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top top",
          scrub: true,
        },
      }
    );

    // Text animation
    gsap.fromTo(
      textRef.current,
      { scale: 0.9 },
      {
        scale: 1,
        duration: .2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top top",
          scrub: true,
        },
      }
    );
  }, []);


  useEffect(() => {
    let ctx = gsap.context(() => {
   
      gsap.to(numberRef.current, {
        innerHTML: 10,
        duration: 2, 
        scrollTrigger: {
          trigger: numberRef.current,
          start: "top 75%", 
          end: "bottom 25%", 
       
        },
        snap: { innerHTML: 1 }, 
        ease: "none",
        onUpdate: function () {
          setCount(Math.ceil(this.targets()[0].innerHTML));
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#ffff] -mb-20 relative pb-5 px-4">
      <Container className="flex flex-col md:flex-row justify-between items-center pb-20">
        {/* Image Division */}
        <div className="md:w-[49%] about-image" ref={imageRef}>

          <div className="relative w-[400px] h-[400px] bg-[#c4ece5] rounded-full md:w-[370px] md:h-[370px] lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px]">
            <img
              className="rounded-full w-full h-full border border-primary drop-shadow-2xl pb-[30px] pl-[30px] object-cover"
              src="/images/home/NazmaWork.jpg"
              alt=""
            />
            {/* Upper Content */}
            <div className="cssPath bg-[#ffff] w-36 h-36 md:w-44 md:h-40 xl:w-40 xl:h-40 absolute bottom-0 right-[0] drop-shadow-lg">
              <h1 className="flex flex-col justify-center items-center pt-10">
                <span
                  className="text-5xl font-bold text-primary font-secondery"
                  ref={numberRef}
                >
                  {count}+
                </span>
                <span className="text-tertiary font-semibold text-[16px]">
                  Years of Expert
                </span>
              </h1>
            </div>

            <div className='banner animate-slide-left-right absolute bottom-1/3 left-0 md:w-1/2 md:h-1/2 w-1/3 h-1/3' style={{
              zIndex: 999
            }}>
              <img src="/images/home/6.png" alt="" />
            </div>
          </div>
        </div>



        {/* About Spa Center Details */}
        <div className="md:w-[49%] about-text mb-5" ref={textRef}>
          <div className=" md:py-0">
            <div className='banner animate-slide-left-right absolute -bottom-32 md:-bottom-20 -right-40 w-full h-full ' style={{
              zIndex: -1
            }}>
              <img src="/images/home/8.png" alt="" />
            </div>
            <h1 className="text-6xl font-medium font-secondery py-6 relative ">

              <div style={{
                zIndex: 999
              }}>
                <span className="text-tertiary">Blush & Glow </span>
                <span className="text-primary " > Beauty <br/> Bar</span>
              </div>
              <p className="opacity-20 font-bold text-4xl -rotate-90 absolute top-32 -left-28">About us</p>
            </h1>
            <p className="font-semibold italic text-tertiary font-secondery lg:text-[24px] pt-6">
              PROFESSIONAL TREATMENT WITH EXPERT
            </p>
            <p className="text-[18px] text-secondery py-6 leading-7 ">
              Embark on a journey of indulgence with professional treatment
              featuring expert care that transcends ordinary pampering. Elevate
              your wellness experience as skilled professionals tailor each
              session to meet your unique needs....
            </p>
            <button
              onClick={() => router.push("/about/#treatment")}
              className="py-[6px] md:py-[10px] text-tertiary px-8 lg:px-10 bg-[#fff] shadow-xl rounded-3xl flex justify-center items-center font-secondery md:text-xl mt-6"
            >
              <span className="bg-primary w-[40px] h-[40px] rounded-full mr-4 ml-[-20px] flex justify-center items-center text-white">
                <RightArrowIcon />
              </span>
              Read More
            </button>
          </div>
        </div>
      </Container>
      <div className='invisible lg:visible banner animate-slide-top-bottom absolute top-24 -right-4 w-60 h-60'>
        <img src="/images/home/ston.png" alt="" />
      </div>
      <div className='w-[100%] absolute -bottom-28 left-0' style={{
        zIndex: 99
      }}> <img className='w-full h-52' src="/images/home/9.png" alt="" /></div>

    </div>
  );
};

export default AboutUs;
