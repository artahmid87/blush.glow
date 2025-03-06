import React, { useEffect, useRef, useState } from "react";
import Container from "../ui/Container";
import { RightArrowIcon } from "../ui/icon";
import { useRouter } from "next/router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGetBookingByIdQuery } from "@/redux/api/Api";
import Image from "next/image";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutUs = () => {
  const router = useRouter();
  const imageReference = useRef(null);
  const textReference = useRef(null);
  const numberReference = useRef(null);
  const [count, setCount] = useState(0);



  useEffect(() => {
    gsap.fromTo(
      imageReference.current,
      { scale: 0.8 },
      {

        scale: 1,
        duration: .5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageReference.current,
          start: "top top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      textReference.current,
      { scale: 0.9 },
      {
        scale: 1,
        duration: .2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textReference.current,
          start: "top top",
          scrub: true,
        },
      }
    );
  }, []);


  useEffect(() => {
    let ctx = gsap.context(() => {

      gsap.to(numberReference.current, {
        innerHTML: 10,
        duration: 2,
        scrollTrigger: {
          trigger: numberReference.current,
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
        <div className="md:w-[49%] about-image" ref={imageReference}>

          <div className="relative w-[400px] h-[400px] bg-[#c4ece5] rounded-full md:w-[370px] md:h-[370px] lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px]">
            <Image
              src="/images/home/NazmaWork.jpg"
              alt=""
              width={500}
              height={500}
              priority
              className="rounded-full w-full h-full border border-primary drop-shadow-2xl pb-[30px] pl-[30px] object-cover"
            />
            {/* Upper Content */}
            <div className="cssPath bg-[#ffff] w-36 h-36 md:w-44 md:h-40 xl:w-40 xl:h-40 absolute bottom-0 right-[0] drop-shadow-lg">
              <h1 className="flex flex-col justify-center items-center pt-10">
                <span
                  className="text-5xl font-bold text-primary font-secondery"
                  ref={numberReference}
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
         
              <Image
                src="/images/home/6.png"
                alt=""
                width={200}
                height={200}
                priority
              />
            </div>
          </div>
        </div>



        {/* About Spa Center Details */}
        <div className="md:w-[49%] about-text mb-5" ref={textReference}>
          <div className=" md:py-0">
            <div className='banner animate-slide-left-right absolute -bottom-32 md:-bottom-20 -right-40 w-full h-full ' style={{
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
            <h1 className="text-6xl font-medium font-secondery py-6 relative ">

              <div style={{
                zIndex: 999
              }}>
                <span className="text-tertiary">Blush & Glow </span>
                <span className="text-primary " > Beauty <br /> Bar</span>
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

        <Image
          src="/images/home/ston.png"
          alt=""
          width={200}
          height={200}
          priority

        />
      </div>
      <div className='w-[100%] relative' style={{
        zIndex: 99
      }}>
        <Image
          src="/images/home/9.png"
          alt=""
          width={500}
          height={500}
          priority
          className='w-[100%] h-20 absolute -top-20 left-0'
        />
      </div>

    </div>
  );
};

export default AboutUs;
