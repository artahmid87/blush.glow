import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loading = () => {
  const circlesRef = useRef([[], [], []]); 

  useEffect(() => {

    circlesRef.current.forEach((layer, layerIndex) => {
      layer.forEach((circle, circleIndex) => {
        if (circle) {
          gsap.to(circle, {
            opacity: 0,
            scale: 1.5 + layerIndex * 0.3, 
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            delay: circleIndex * 0.2 + layerIndex * 0.3, 
            ease: "power1.inOut",
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px]">
        {[...Array(3)].map((_, layerIndex) => (
          <div
            key={layerIndex}
            className="absolute inset-0 flex justify-center items-center"
          >
            {[...Array(4)].map((_, circleIndex) => (
              <div
                key={circleIndex}
                ref={(el) => (circlesRef.current[layerIndex][circleIndex] = el)}
                className="absolute w-full h-full rounded-full bg-primary opacity-50"
                style={{
                  transform: `scale(${1 + layerIndex * 0.3})`, 
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
