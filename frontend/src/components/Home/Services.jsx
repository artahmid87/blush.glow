import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { HomeServiceData } from "../ui/data";
import Container from "../ui/Container";
import HeadingComponent from "../ui/reusableComponent/HeadingComponent";



const Services = () => {

  const serviceRef = useRef(null);
  const headingRef = useRef(null);


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
      title1: "Services",
      title2: "Plan",
      description: "",
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
      <Container className="pt-44">
        <div ref={headingRef} className="relative py-20">
          <HeadingComponent headingData={headingData} />
                
          {/* middle animation */}
          <div className=' banner animate-slide-left-right absolute top-0 left-1/2 w-full h-full -ml-10' style={{
            zIndex: -1
          }}>
            <img className="opacity-20" src="/images/home/2.png" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {
            HomeServiceData?.map((item, i) => (
              <div
                ref={serviceRef}
                key={item.id}
                className="group flex flex-col  items-center p-6 bg-red transition-transform transform  overflow-hidden text-justify"

              >
               <div className="cssPath group-hover:bg-primary transition-all group-hover:text-white  text-primary py-10 px-10 relative">
               <i className=" opacity-20 text-[120px]">
                  {item.icon}
                </i>
               <i className="absolute top-[14%] left-1/2  transform -translate-x-1/2 translate-y-1/2 text-[70px] ">
                  {item.icon}
                </i>
               </div>
                <div>
                  <h1 className="text-3xl text-center text-tertiary font-secondery py-6">
                    {item.title}
                  </h1>
                  {/* Added details paragraph */}
                  <p className=" text-secondery justify-center mb-10 pb-20">{item.details}</p>
                </div>

              </div>
            ))
          }
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
