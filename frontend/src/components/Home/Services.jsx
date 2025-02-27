import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { HomeServiceData } from "../ui/data";
import Container from "../ui/Container";
import HeadingComponent from "../ui/reusableComponent/HeadingComponent";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Link from "next/link";
import { useFindAllCategoriesQuery } from "@/redux/api/Api";


const Services = () => {

  const serviceRef = useRef(null);
  const headingRef = useRef(null);


  const {data} = useFindAllCategoriesQuery()




  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    if (typeof window !== "undefined") {

      gsap.registerPlugin(ScrollTrigger);


      gsap.fromTo(
        serviceRef.current,
        { x: 50, },
        {
          x: 0,

          duration: 0.8,
          scrollTrigger: {
            trigger: serviceRef.current,
            start: "top top",
            scrub: true,

          },
        }
      );
    }
  }, []);


  const headingData = [
    {
      headline: "What we provide",
      title1: "Services For ",
      title2: "Your Skin",
      description: "Tired of waiting on hold to schedule an appointment? Our online booking system lets you secure your spot in just a few clicks! Whether you're scheduling a consultation, reserving a service, or booking a follow-up, our user-friendly platform makes the process seamless.",
    },
  ];

  return (
    <div className="bg-[#fff6f4] relative pb-10">
      <div className='invisible lg:visible banner animate-slide-top-bottom absolute top-0 -right-4 w-72 h-52' style={{
        zIndex: 99
      }}>
        <img className="w-full h-full" src="/images/home/12.png" alt="" />
      </div>
       {/* left animation */}
       <div className=' banner animate-slide-left-right absolute top-1/3 -left-40 w-full h-full ' style={{
            
          }}>
            <img  src="/images/home/11.png" alt="" />
          </div>
      <Container className="pt-20">
        <div ref={headingRef} className="relative py-20">
          <HeadingComponent headingData={headingData} />
                
          {/* middle animation */}
          <div className=' banner animate-slide-left-right absolute top-0 left-1/2 w-full h-full -ml-10' style={{
            zIndex: -1
          }}>
            <img className="opacity-20" src="/images/home/2.png" alt="" />
          </div>
        </div>

     {/* home service data  slider  */}
     <div className="pb-20">
  
      <Swiper
        spaceBetween={20} 
        pagination = {{clickable: true}}
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        modules={[Autoplay, Pagination, Navigation]} 
        slidesPerView="auto"
        watchSlidesProgress
        breakpoints={{
      
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
    
      >
       {data?.filter(item => item.isActive).map((item) => (
    <SwiperSlide key={item.id}>
      <Link href={`/services#service`}>
        <div
          className="group flex flex-col items-center p-6 bg-red transition-transform transform overflow-hidden text-justify"
        >
          <div className="cssPath group-hover:bg-primary transition-all duration-500 ease-in-out group-hover:text-white text-primary py-10 px-10 relative">
            <i className="opacity-20 text-[120px]">
              <img className="w-[150px] h-[150px] bg-transparent"    src={`http://localhost:5000/images/service_img/${item?.icon}`} alt="icon" />
            </i>
            <i className="absolute top-[14%] left-1/2 transform -translate-x-1/2 translate-y-1/2 text-[70px]">
            <img className="w-[100px] h-[100px]" src={`http://localhost:5000/images/service_img/${item?.icon}`} alt="icon" />
            </i>
          </div>
          <div>
            <h1 className="text-3xl text-center text-tertiary font-secondery py-6">
              {item.title}
            </h1>
            <p className="text-secondery justify-center mb-10">
              {item.shortInto}
            </p>
         
          </div>
        </div>
      </Link>
    </SwiperSlide>
  ))}
      </Swiper>
    </div>


      </Container>
      

      <div className='invisible lg:visible banner animate-slide-left-right absolute top-0 left-1/2 w-full h-full -ml-10' style={{
        zIndex: -1
      }}>
        <img src="/images/home/2.png" alt="" />
      </div>
      <div className='w-[100%] absolute -bottom-4 left-0 rotate-180' style={{
        zIndex: 99
      }}> <img className='w-full h-44' src="/images/home/9.png" alt="" /></div>
    </div>

  );
};

export default Services;
