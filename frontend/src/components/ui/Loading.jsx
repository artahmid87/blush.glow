
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loading = ({ setLoading }) => {
  const loaderRef = useRef(null);

  useEffect(() => {
    gsap.to(loaderRef.current, { rotation: 360, duration: 1, repeat: -1, ease: 'linear' });


    const timer = setTimeout(() => {
      gsap.to(loaderRef.current, { opacity: 0, duration: 1, onComplete: () => setLoading(false) });
    }, 3000); 

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-white flex justify-center items-center z-50">
      <div ref={loaderRef} className="w-20 h-20 border-8 border-t-4 border-primary border-t-gray-500 rounded-full"></div>
    </div>
  );
};

export default Loading;
