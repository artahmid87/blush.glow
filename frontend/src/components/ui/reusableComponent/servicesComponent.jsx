import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ServicesComponent = (props) => {
  const { id, icon, title } = props.item;


  const serviceRef = useRef(null);


  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);


      gsap.fromTo(
        serviceRef.current,
        { x: 20, },
        {
          x: 0,

          duration: 0.3,
          scrollTrigger: {
            trigger: serviceRef.current,
            start: "top top",
            scrub: true,

          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={serviceRef}
      key={id}
      className="group flex flex-col justify-center items-center p-6 bg-red transition-transform transform hover:scale-105 overflow-hidden"

    >
      <div className="cssPath group-hover:bg-primary transition-all group-hover:text-white  text-primary py-10 px-10 relative">
        <i className=" opacity-20 text-[120px]">
          {icon}
        </i>
        <i className="absolute top-[14%] left-1/2  transform -translate-x-1/2 translate-y-1/2 text-[70px] ">
          {icon}
        </i>
      </div>
      <div>
        <h1 className="text-4xl text-tertiary font-secondery py-6">
          {title}
        </h1>
        {/* Added details paragraph */}

      </div>
      <div className="w-full py-10 px-4">
        {
          props?.item?.pricingPlan?.map((item) => (
            <div key={item.name} className="flex justify-between items-center w-full font-secondery border-b border-gray-500" >
              <div className="flex py-4 gap-6">
                {/* <img className="w-14 h-14 " src={item.image} alt="" /> */}
                <h1 className="text-xl text-center self-center">{item.name}</h1>
              </div>
              <div>

                <p>{item.price}</p>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ServicesComponent;
