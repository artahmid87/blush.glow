import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HeadingComponent = (props) => {
  const { headingData } = props;
  
  const headingRefs = useRef([]);

  headingRefs.current = [];

  const addToRefs = (el) => {
    if (el && !headingRefs.current.includes(el)) {
      headingRefs.current.push(el);
    }
  };

  useEffect(() => {
    headingRefs.current.forEach((heading, index) => {
      gsap.fromTo(
        heading,
        {  y: 50 },
        {
        
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top top",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      {headingData?.map((item, index) => (
        <div
          key={item.headline}
          className="text-center py-5 flex flex-col justify-center items-center w-full mb-5"
          ref={addToRefs} 
        >
          <h3 className="text-2xl text-primary italic font-secondery">{item.headline}</h3>
          <h1 className="text-4xl md:text-6xl font-bold font-secondery py-4">
            <span>{item.title1} </span> 
            <span className="text-primary">{item.title2}</span>
          </h1>
          <p className="text-secondery font-loraFont text-center text-[14px] lg:text-[20px] pb-4 md:w-[60%] flex">
            {item.description}
          </p>
        </div>
      ))}
    </>
  );
};

export default HeadingComponent;
